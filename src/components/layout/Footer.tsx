import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SOCIAL_LINKS } from '../../constants/site';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    // Reduced motion: keep the elastic SVG bend at its flat resting state.
    if (reducedMotion) return;
    const path = pathRef.current;
    if (!path) return;

    let tween: gsap.core.Tween;

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: 'top bottom', // Start listening when footer enters viewport
      end: 'bottom top',
      onUpdate: (self) => {
        // Significantly increase velocity sensitivity
        const v = self.getVelocity();
        // Allow a much larger bend inside our expanded viewBox (0 to 200, flat is 100)
        const bend = 100 + Math.max(-90, Math.min(90, v / 15));

        if (tween) tween.kill();

        // Immediately warp the SVG control point
        path.setAttribute('d', `M 0 100 Q 50 ${bend} 100 100 L 100 200 L 0 200 Z`);

        // Slower, more exaggerated elastic bounce
        tween = gsap.to(path, {
          attr: { d: 'M 0 100 Q 50 100 100 100 L 100 200 L 0 200 Z' },
          duration: 2.5,
          ease: 'elastic.out(1, 0.15)',
          overwrite: true,
        });
      },
    });
  }, { dependencies: [reducedMotion] });

  return (
    <footer ref={footerRef} className="relative bg-bg pt-48 pb-12">
      {/* Expanded Elastic SVG Top Border */}
      <svg
        viewBox="0 0 100 200"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-48 pointer-events-none"
        style={{ fill: 'var(--color-surface)', overflow: 'visible' }}
      >
        <path
          ref={pathRef}
          d="M 0 100 Q 50 100 100 100 L 100 200 L 0 200 Z"
        />
      </svg>

      {/* Main Footer Background */}
      <div className="absolute inset-0 top-[6rem] bg-surface z-0 border-t-2 border-border"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-pixel text-lg text-accent mb-4">
            LISA.AMIMO
          </div>
<<<<<<< HEAD
          <p className="text-text-muted mb-6">
            Computer Science Graduate &bull; Fullstack Developer &bull; Cybersecurity Enthusiast
=======
          <p className="text-gray-400 mb-6">
            Computer Science Graduate &bull; Fullstack Developer &bull; Code Enthusiast
>>>>>>> 4c3f1dbc545d9b11dd2de83c72f84a96683c6f50
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-raised border-2 border-border rounded-chunky hover:border-accent transition-colors duration-200 text-text-muted hover:text-accent"
            >
              <GithubLogo className="w-5 h-5" weight="bold" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-raised border-2 border-border rounded-chunky hover:border-accent transition-colors duration-200 text-text-muted hover:text-accent"
            >
              <LinkedinLogo className="w-5 h-5" weight="bold" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="p-3 bg-surface-raised border-2 border-border rounded-chunky hover:border-accent transition-colors duration-200 text-text-muted hover:text-accent"
            >
              <EnvelopeSimple className="w-5 h-5" weight="bold" />
            </a>
          </div>
          <p className="text-text-faint text-sm">
            &copy; {new Date().getFullYear()} Lisa Amimo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
