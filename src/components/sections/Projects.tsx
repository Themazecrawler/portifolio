import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROJECTS, SOCIAL_LINKS } from '../../constants/site';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import SplitText from '../reactbits/SplitText';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const transitionRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    // Reduced motion: no pin, no horizontal scroll, no step transition — the
    // gallery becomes a plain, natively scrollable strip instead.
    if (reducedMotion) return;
    // 1. Horizontal Scroll Pin Animation
    const container = containerRef.current;
    const gallery = galleryRef.current;
    if (container && gallery) {
      const getScrollAmount = () => -(gallery.scrollWidth - window.innerWidth);

      const tween = gsap.to(gallery, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: container,
        start: 'center center', // Pin when the gallery hits the middle of the screen
        end: () => `+=${getScrollAmount() * -1}`, // Scroll distance equals horizontal distance
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true, // Re-calculate on window resize
      });
    }

    // 2. Retro "staircase" transition — a blocky, stepped edge instead of a
    // smooth organic wave, in keeping with the pixel/retro motif.
    if (path1Ref.current && path2Ref.current && transitionRef.current) {
      const paths = [path1Ref.current, path2Ref.current];
      const numSteps = 8;
      const numPaths = paths.length;
      const delayPerPath = 0.25;

      const allLevels: number[][] = [];
      const stepDelay: number[] = [];

      for (let i = 0; i < numPaths; i++) {
        allLevels.push(new Array(numSteps).fill(100));
      }
      for (let j = 0; j < numSteps; j++) {
        stepDelay[j] = Math.random() * 0.25;
      }

      const render = () => {
        for (let i = 0; i < numPaths; i++) {
          const path = paths[i];
          const levels = allLevels[i];
          const stepWidth = 100 / numSteps;

          let d = `M 0 ${levels[0]}`;
          for (let j = 0; j < numSteps; j++) {
            const x = (j + 1) * stepWidth;
            d += ` H ${x} V ${levels[j]}`;
          }
          d += ` L 100 100 V 100 H 0 Z`;
          path.setAttribute('d', d);
        }
      };

      render();

      const tl = gsap.timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: transitionRef.current,
          start: 'top 95%',
          end: 'bottom top',
          scrub: true,
        },
      });

      for (let i = 0; i < numPaths; i++) {
        const levels = allLevels[i];
        const pathDelay = delayPerPath * (numPaths - i - 1);
        for (let j = 0; j < numSteps; j++) {
          /* ease: 'none' — this tween is scrubbed 1:1 to scroll position, so
             the scrub itself supplies the motion. 'steps(1)' here held the
             value flat then snapped it instantly at the end of the window,
             which under scrub reads as a pop/glitch rather than a rise. The
             staircase silhouette still comes from the blocky H/V path draw
             below, not from this easing curve. */
          tl.to(
            levels,
            { [j]: 0, ease: 'none', duration: 0.9 },
            stepDelay[j] + pathDelay
          );
        }
      }
    }
  }, { dependencies: [reducedMotion] });

  return (
    <section id="projects" className="pt-24 pb-0 relative bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <SplitText
          text="Featured Projects"
          className="text-4xl md:text-5xl font-bold mb-4 text-text"
          delay={30}
          duration={0.8}
          tag="h2"
        />
        <SplitText
          text="A showcase of the top applications I've built, demonstrating my technical skills and design sensibility"
          className="text-lg text-text-muted max-w-2xl"
          delay={40}
          duration={1}
          splitType="words"
          tag="p"
        />
      </div>

      {/* Horizontal Scrolling Gallery Area */}
      <div
        ref={containerRef}
        className={`relative w-full py-8 ${reducedMotion ? 'overflow-x-auto' : 'overflow-hidden'}`}
      >
        <div
          ref={galleryRef}
          className="flex flex-nowrap items-stretch gap-8 px-4 sm:px-6 lg:px-8"
          style={{ width: 'max-content' }}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="project-panel flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[25vw] max-w-[350px] h-[430px] bg-surface rounded-card overflow-hidden border-2 border-border shadow-hard flex flex-col"
            >
              <div className="relative h-40 bg-surface-raised flex-shrink-0 border-b-2 border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-syne text-lg font-bold text-text mb-2">{project.title}</h3>
                <p className="text-text-muted mb-4 text-sm leading-relaxed flex-grow line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-chunky text-[10px] font-bold bg-[rgba(var(--color-pop-rgb),0.15)] text-pop border border-pop/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-text-muted hover:text-accent transition-colors duration-200"
                  >
                    <GithubLogo className="w-5 h-5" weight="bold" />
                    <span className="font-semibold text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-text-muted hover:text-accent transition-colors duration-200"
                  >
                    <ArrowSquareOut className="w-5 h-5" weight="bold" />
                    <span className="font-semibold text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20 mb-20 pb-10">
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-pop text-ink px-8 py-4 rounded-chunky border-2 border-ink shadow-hard-pop press-active font-bold text-lg"
        >
          <GithubLogo className="w-5 h-5" weight="bold" />
          <span>More on GitHub</span>
        </a>
      </div>

      {/* Retro staircase transition */}
      <div ref={transitionRef} className="relative w-full h-40 md:h-56 -mb-1 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          shapeRendering="crispEdges"
        >
          <path ref={path1Ref} fill="var(--color-accent)"></path>
          <path ref={path2Ref} fill="var(--color-accent-dark)"></path>
        </svg>
      </div>
    </section>
  );
}
