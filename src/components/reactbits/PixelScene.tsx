import { useMemo } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import leavesTex from '../../assets/blocks/cherry_leaves.png';

/* Night sky (flat pixel grid) + a 2D front-facing block world.
   Blocks are real 16x16 mottled textures — the per-pixel noise is what makes a
   Minecraft block read as one; flat fills do not. Palette is ours, structure
   follows the actual grass/dirt/cherry-leaf/cherry-log textures. */

const SKY_COLS = 300;
const SKY_ROWS = 180;

const BS = 44;   // on-screen block size
const ROWS = 8;  // block rows in the ground band (headroom for tree canopies)
const COLS = 46; // enough columns to cover a wide viewport

const mulberry32 = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

interface Block { x: number; y: number; w: number; h: number; fill: string; opacity?: number }
interface Star extends Block { delay: number }

function buildSky() {
  const rand = mulberry32(415);
  const stars: Star[] = [];
  const moon: Block[] = [];
  const mx = Math.round(SKY_COLS * 0.72);
  const my = 34;
  const r = 11;
  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      if (dx * dx + dy * dy > r * r) continue;
      moon.push({ x: mx + dx, y: my + dy, w: 1, h: 1, fill: 'var(--color-accent-light)', opacity: 0.95 });
    }
  }
  for (const [cx, cy, cr] of [[-4, -2, 2], [3, 4, 2], [5, -5, 1]] as const) {
    moon.push({ x: mx + cx - cr, y: my + cy - cr, w: cr * 2, h: cr * 2, fill: 'var(--color-accent-soft)', opacity: 0.8 });
  }
  for (let i = 0; i < 150; i++) {
    const x = Math.floor(rand() * SKY_COLS);
    const y = Math.floor(rand() * (SKY_ROWS - 30));
    if (Math.abs(x - mx) < 18 && Math.abs(y - my) < 18) continue;
    const roll = rand();
    stars.push({
      x, y,
      w: roll > 0.9 ? 2 : 1,
      h: roll > 0.9 ? 2 : 1,
      fill: roll < 0.18 ? 'var(--color-pop)' : roll < 0.4 ? 'var(--color-accent-soft)' : 'var(--color-text)',
      opacity: 0.55 + rand() * 0.45,
      delay: rand() * 4,
    });
  }
  return { stars, moon };
}

/* ── Block faces ──────────────────────────────────────────────────────────
   Ground and wood are generated in the site palette. Cherry leaves use the
   real 16x16 texture — its blossom structure isn't something to approximate. */

type Kind = 'grass' | 'dirt' | 'leaves' | 'log';

const SOIL = ['#7a1640', '#7a1640', '#7a1640', '#8a1c49', '#6b1236', '#912153'];
const TURF = ['#1f9e68', '#1f9e68', '#25b477', '#1a8a5b'];
const BARK = ['#241335', '#241335', '#2a1a3a', '#1e1626'];

function texture(kind: 'grass' | 'dirt' | 'log', seed: number): string {
  const c = document.createElement('canvas');
  c.width = 16;
  c.height = 16;
  const ctx = c.getContext('2d');
  if (!ctx) return '';
  const rand = mulberry32(seed);
  const pick = (a: string[]) => a[Math.floor(rand() * a.length)];

  if (kind === 'log') {
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        ctx.fillStyle = pick(BARK);
        ctx.fillRect(x, y, 1, 1);
      }
    }
    for (let y = 2; y < 16; y += 4) {
      for (let x = 0; x < 16; x++) {
        if (rand() < 0.65) {
          ctx.fillStyle = '#160d1f';
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    return c.toDataURL();
  }

  // 2x2 clumps so it reads as texture rather than static
  for (let y = 0; y < 16; y += 2) {
    for (let x = 0; x < 16; x += 2) {
      ctx.fillStyle = pick(SOIL);
      ctx.fillRect(x, y, 2, 2);
      if (rand() < 0.3) {
        ctx.fillStyle = pick(SOIL);
        ctx.fillRect(x + Math.floor(rand() * 2), y + Math.floor(rand() * 2), 1, 1);
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = 'rgba(190,180,200,0.22)';
    ctx.fillRect(Math.floor(rand() * 16), Math.floor(rand() * 16), 1, 1);
  }
  if (kind === 'grass') {
    // turf band across the top with a ragged lower edge
    for (let x = 0; x < 16; x++) {
      const depth = 3 + Math.floor(rand() * 3);
      for (let y = 0; y < depth; y++) {
        ctx.fillStyle = pick(TURF);
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
  return c.toDataURL();
}


interface Cell { col: number; row: number; kind: Kind }

function buildWorld() {
  const rand = mulberry32(90210);

  // stepped surface — whole blocks only
  const surface: number[] = [];
  let h = 2;
  for (let i = 0; i < COLS; i++) {
    if (rand() < 0.3) h += rand() < 0.5 ? 1 : -1;
    h = Math.max(2, Math.min(3, h));
    surface.push(h);
  }

  const cells: Cell[] = [];
  for (let col = 0; col < COLS; col++) {
    const top = ROWS - surface[col];
    for (let row = top; row < ROWS; row++) {
      cells.push({ col, row, kind: row === top ? 'grass' : 'dirt' });
    }
  }

  /* Canopy silhouettes, [dx, dy] with dy counting down from the crown. Cherry
     canopies in-game spread wide and droop at the edges, so several of these
     hang lower than the block they grow from. */
  const CANOPIES: ReadonlyArray<ReadonlyArray<readonly [number, number]>> = [
    // broad, drooping skirt
    [[-1, 0], [0, 0], [1, 0],
     [-2, 1], [-1, 1], [0, 1], [1, 1], [2, 1],
     [-3, 2], [-2, 2], [2, 2], [3, 2]],
    // compact and round
    [[-1, 0], [0, 0], [1, 0],
     [-2, 1], [-1, 1], [0, 1], [1, 1], [2, 1],
     [-1, 2], [1, 2]],
    // tall and narrow
    [[0, 0],
     [-1, 1], [0, 1], [1, 1],
     [-1, 2], [0, 2], [1, 2],
     [-2, 3], [2, 3]],
    // leaning, heavier on one side
    [[0, 0], [1, 0],
     [-1, 1], [0, 1], [1, 1], [2, 1],
     [-2, 2], [-1, 2], [2, 2], [3, 2]],
    // little sapling
    [[0, 0],
     [-1, 1], [0, 1], [1, 1]],
  ];

  const PLANTED = [3, 11, 19, 28, 36, 43];
  PLANTED.forEach((col, n) => {
    if (col < 3 || col > COLS - 4) return;
    // step through the shapes so neighbours never repeat
    const shape = CANOPIES[n % CANOPIES.length];
    const sapling = shape.length <= 4;
    const ground = ROWS - surface[col];
    const trunk = sapling ? 1 : 2 + (n % 3);

    for (let t = 1; t <= trunk; t++) {
      cells.push({ col, row: ground - t, kind: 'log' });
    }
    const crown = ground - trunk - shape.reduce((m, [, dy]) => Math.max(m, dy), 0);
    for (const [dx, dy] of shape) {
      const c = col + dx;
      const r = crown + dy;
      if (c < 0 || c >= COLS || r < 0) continue;
      cells.push({ col: c, row: r, kind: 'leaves' });
    }
  });

  return cells;
}

export function PixelScene({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion();
  const { stars, moon } = useMemo(buildSky, []);
  const cells = useMemo(buildWorld, []);
  const tex = useMemo<Record<Kind, string>>(() => ({
    grass: texture('grass', 11),
    dirt: texture('dirt', 22),
    log: texture('log', 44),
    leaves: leavesTex,
  }), []);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        viewBox={`0 0 ${SKY_COLS} ${SKY_ROWS}`}
        preserveAspectRatio="xMidYMin slice"
        shapeRendering="crispEdges"
        className="absolute inset-x-0 top-0 h-[70%] w-full"
      >
        {moon.map((b, i) => (
          <rect key={`m${i}`} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.opacity} />
        ))}
        {stars.map((s, i) => (
          <rect
            key={`s${i}`}
            x={s.x} y={s.y} width={s.w} height={s.h} fill={s.fill} opacity={s.opacity}
            className={reduced ? undefined : 'pixel-star'}
            style={reduced ? undefined : { animationDelay: `${s.delay}s` }}
          />
        ))}
      </svg>

      <div
        className="absolute inset-x-0 bottom-0 opacity-90"
        style={{ height: ROWS * BS }}
      >
        {cells.map((c, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: c.col * BS,
              top: c.row * BS,
              width: BS,
              height: BS,
              backgroundImage: `url(${tex[c.kind]})`,
              backgroundSize: '100% 100%',
              imageRendering: 'pixelated',
            }}
          />
        ))}
      </div>
    </div>
  );
}
