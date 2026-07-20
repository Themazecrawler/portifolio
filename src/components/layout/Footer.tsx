import { Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SOCIAL_LINKS } from '../../constants/site';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
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
  });

  return (
    <footer ref={footerRef} className="relative bg-black pt-48 pb-12 mt-32">
      {/* Expanded Elastic SVG Top Border */}
      <svg
        viewBox="0 0 100 200"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-48 pointer-events-none"
        style={{ fill: '#111827', overflow: 'visible' }}
      >
        <path
          ref={pathRef}
          d="M 0 100 Q 50 100 100 100 L 100 200 L 0 200 Z"
        />
      </svg>

      {/* Main Footer Background */}
      <div className="absolute inset-0 top-[6rem] bg-gray-900 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#EC4899] mb-4">
            Lisa Amimo
          </div>
          <p className="text-gray-400 mb-6">
            Computer Science Graduate &bull; Fullstack Developer &bull; Cybersecurity Enthusiast
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lisa Amimo. Built with React &amp; GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
