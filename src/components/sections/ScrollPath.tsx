import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import iconUrl from '../../assets/heart.svg';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// ─── TOGGLE: true = path mapper active, false = live GSAP animation ──────────
const MAPPING_MODE = false;
// ─────────────────────────────────────────────────────────────────────────────

const HIT_RADIUS = 20;   // px — hit zone radius for grabbing a point
const DRAG_THRESHOLD = 5; // px — min movement to count as drag vs click

interface Point { x: number; y: number }

interface ScrollPathProps {
  children: React.ReactNode;
}

/** Catmull-Rom → SVG path string */
function catmullRomPath(pts: Point[]): string {
  if (pts.length < 2) return '';
  if (pts.length === 2) return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`;
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function ScrollPath({ children }: ScrollPathProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Drag state tracked in refs to avoid stale closures in pointer handlers
  const draggingIdxRef = useRef(-1);
  const didDragRef = useRef(false);
  const pointerDownPosRef = useRef({ x: 0, y: 0 });

  // Measure wrapper
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const { width, height } = wrapper.getBoundingClientRect();
    setDims({ w: width, h: height });
  }, []);

  // ── Pointer helpers ────────────────────────────────────────────────────────
  const getSVGPos = (e: React.PointerEvent<SVGSVGElement> | React.MouseEvent<SVGSVGElement>, svgEl: SVGSVGElement) => {
    const rect = svgEl.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(dims.w, e.clientX - rect.left)),
      y: Math.max(0, Math.min(dims.h, e.clientY - rect.top)),
    };
  };

  const handlePointerDown = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    const pos = getSVGPos(e, e.currentTarget);
    pointerDownPosRef.current = pos;
    didDragRef.current = false;

    // Check if pointer is over an existing point
    const hitIdx = points.findIndex(p => Math.hypot(p.x - pos.x, p.y - pos.y) < HIT_RADIUS);
    if (hitIdx !== -1) {
      draggingIdxRef.current = hitIdx;
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  }, [points, dims]);

  const handlePointerMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    if (draggingIdxRef.current === -1) return;
    const pos = getSVGPos(e, e.currentTarget);
    const dist = Math.hypot(
      pos.x - pointerDownPosRef.current.x,
      pos.y - pointerDownPosRef.current.y
    );
    if (dist > DRAG_THRESHOLD) {
      didDragRef.current = true;
      setPoints(prev => prev.map((p, i) => i === draggingIdxRef.current ? pos : p));
    }
  }, [dims]);

  const handlePointerUp = useCallback(() => {
    draggingIdxRef.current = -1;
    setIsDragging(false);
  }, []);

  // Click: add point on empty space, remove if clicking existing point (only if not a drag)
  const handleClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (didDragRef.current) { didDragRef.current = false; return; }
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = {
      x: Math.max(0, Math.min(dims.w, e.clientX - rect.left)),
      y: Math.max(0, Math.min(dims.h, e.clientY - rect.top)),
    };
    const hitIdx = points.findIndex(p => Math.hypot(p.x - pos.x, p.y - pos.y) < HIT_RADIUS);
    if (hitIdx !== -1) {
      setPoints(prev => prev.filter((_, i) => i !== hitIdx));
    } else {
      setPoints(prev => [...prev, pos]);
    }
  }, [points, dims]);

  // Copy coords to clipboard
  const copyPath = useCallback(() => {
    if (!dims.w || !dims.h || points.length === 0) return;
    const percentages = points.map(p => ({
      x: `${((p.x / dims.w) * 100).toFixed(1)}%`,
      y: `${((p.y / dims.h) * 100).toFixed(1)}%`,
    }));
    const pixels = points.map(p => ({ x: +p.x.toFixed(1), y: +p.y.toFixed(1) }));
    const text = `// Percentages:\n${JSON.stringify(percentages, null, 2)}\n\n// Pixels (current viewport):\n${JSON.stringify(pixels, null, 2)}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [points, dims]);

  // GSAP animation — only active when MAPPING_MODE = false
  useEffect(() => {
    if (MAPPING_MODE) return;
    const icon = iconRef.current;
    const wrapper = wrapperRef.current;
    if (!icon || !wrapper) return;
    const { width: w, height: h } = wrapper.getBoundingClientRect();
    const half = 64;
    const pcts = [
      { x: 0.247, y: 0.074 },
      { x: 0.248, y: 0.184 },
      { x: 0.261, y: 0.288 },
      { x: 0.316, y: 0.370 },
      { x: 0.402, y: 0.405 },
      { x: 0.514, y: 0.410 },
      { x: 0.623, y: 0.411 },
      { x: 0.714, y: 0.444 },
      { x: 0.747, y: 0.538 },
      { x: 0.753, y: 0.639 },
      { x: 0.753, y: 0.737 },
      { x: 0.742, y: 0.867 },
      { x: 0.687, y: 0.947 },
      { x: 0.607, y: 0.987 },
      { x: 0.503, y: 0.993 },
    ];
    const gsapPoints = pcts.map(p => ({ x: w * p.x - half, y: h * p.y - half }));
    const ctx = gsap.context(() => {
      gsap.to(icon, {
        motionPath: { path: gsapPoints, curviness: 1.5, type: 'soft' },
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const curvePath = catmullRomPath(points);

  return (
    <div ref={wrapperRef} className="relative">
      {children}
      {MAPPING_MODE && dims.w > 0 && (
        <>
          {/* Interactive SVG overlay */}
          <svg
            className="absolute inset-0 z-40"
            width={dims.w}
            height={dims.h}
            style={{
              top: 0,
              left: 0,
              cursor: isDragging ? 'grabbing' : 'crosshair',
              touchAction: 'none',
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onClick={handleClick}
          >
            {/* Live curve */}
            {curvePath && (
              <path
                d={curvePath}
                fill="none"
                stroke="#EC4899"
                strokeWidth={2}
                strokeDasharray="8 4"
                opacity={0.8}
                pointerEvents="none"
              />
            )}

            {/* Waypoint markers */}
            {points.map((p, i) => (
              <g key={i}>
                {/* Large invisible hit zone */}
                <circle cx={p.x} cy={p.y} r={HIT_RADIUS} fill="transparent" style={{ cursor: 'grab' }} />
                {/* Visible dot */}
                <circle cx={p.x} cy={p.y} r={10} fill="#EC4899" opacity={0.95} pointerEvents="none" />
                {/* Number */}
                <text
                  x={p.x} y={p.y + 4}
                  textAnchor="middle"
                  fill="white"
                  fontSize={10}
                  fontWeight="bold"
                  fontFamily="monospace"
                  pointerEvents="none"
                >
                  {i + 1}
                </text>
                {/* Coords label */}
                <text
                  x={p.x + 16} y={p.y - 14}
                  fill="#EC4899"
                  fontSize={10}
                  fontFamily="monospace"
                  pointerEvents="none"
                >
                  {Math.round((p.x / dims.w) * 100)}%,{Math.round((p.y / dims.h) * 100)}%
                </text>
              </g>
            ))}
          </svg>

          {/* HUD bar */}
          <div
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border border-pink-500/40 text-sm font-mono select-none"
            style={{
              transform: 'translateX(-50%)',
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(8px)',
              color: '#f9a8d4',
              pointerEvents: 'auto',
            }}
          >
            <span>🗺 PATH MAPPER</span>
            <span className="opacity-50">|</span>
            <span>{points.length} pt{points.length !== 1 ? 's' : ''}</span>
            <span className="opacity-50 text-xs">click=add · click pt=remove · drag pt=move</span>
            <button
              onClick={copyPath}
              className="ml-1 px-3 py-1 rounded-lg text-white text-xs font-bold"
              style={{ background: copied ? '#16a34a' : '#EC4899' }}
            >
              {copied ? '✓ Copied!' : 'Copy coords'}
            </button>
            <button
              onClick={() => setPoints([])}
              className="px-3 py-1 rounded-lg text-xs font-bold"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#f9a8d4' }}
            >
              Clear
            </button>
          </div>
        </>
      )}

      {!MAPPING_MODE && (
        <img
          ref={iconRef}
          src={iconUrl}
          alt=""
          width={128}
          height={128}
          className="absolute top-0 left-0 pointer-events-none z-20"
        />
      )}
    </div>
  );
}
