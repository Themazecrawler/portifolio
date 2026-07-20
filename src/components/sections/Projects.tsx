import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROJECTS, SOCIAL_LINKS } from '../../constants/site';
import SplitText from '../reactbits/SplitText';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const transitionRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  useGSAP(() => {
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

    // 2. Shape-Overlays Dynamic Morph Transition
    if (path1Ref.current && path2Ref.current && transitionRef.current) {
      const paths = [path1Ref.current, path2Ref.current];
      const numPoints = 10;
      const numPaths = paths.length;
      const delayPointsMax = 0.3;
      const delayPerPath = 0.25;

      let allPoints: number[][] = [];
      let pointsDelay: number[] = [];

      // Initialize points to 100 (bottom of SVG)
      for (let i = 0; i < numPaths; i++) {
        let points: number[] = [];
        for (let j = 0; j < numPoints; j++) {
          points.push(100);
        }
        allPoints.push(points);
      }

      // Randomize delay for organic wave effect
      for (let i = 0; i < numPoints; i++) {
        pointsDelay[i] = Math.random() * delayPointsMax;
      }

      const render = () => {
        for (let i = 0; i < numPaths; i++) {
          let path = paths[i];
          let points = allPoints[i];

          let d = `M 0 ${points[0]} C`;

          for (let j = 0; j < numPoints - 1; j++) {
            let p = ((j + 1) / (numPoints - 1)) * 100;
            let cp = p - (1 / (numPoints - 1)) * 100 / 2;
            d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
          }

          // Draw down to the bottom to create a wave that rises from the floor
          d += ` V 100 H 0 Z`;
          path.setAttribute('d', d);
        }
      };

      render();

      const tl = gsap.timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: transitionRef.current,
          start: 'top 85%',
          end: 'bottom top',
          scrub: 1, // Smoothly link wave progression to scroll position
        },
      });

      for (let i = 0; i < numPaths; i++) {
        let points = allPoints[i];
        let pathDelay = delayPerPath * (numPaths - i - 1);

        for (let j = 0; j < numPoints; j++) {
          let delay = pointsDelay[j];
          tl.to(
            points,
            {
              [j]: 0, // Animate points up to 0
              ease: 'power2.inOut',
              duration: 0.9,
            },
            delay + pathDelay
          );
        }
      }
    }
  });

  return (
    <section id="projects" className="pt-20 pb-0 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <SplitText
            text="Featured Projects"
            className="text-4xl md:text-5xl font-bold mb-6 text-[#EC4899]"
            delay={30}
            duration={0.8}
            tag="h2"
          />
          <div className="w-24 h-1 bg-[#EC4899] mx-auto mb-6"></div>
          <SplitText
            text="A showcase of the top applications I've built, demonstrating my technical skills and design sensibility"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={40}
            duration={1}
            splitType="words"
            tag="p"
          />
        </div>
      </div>

      {/* Horizontal Scrolling Gallery Area */}
      <div ref={containerRef} className="relative w-full py-8 overflow-hidden">
        <div
          ref={galleryRef}
          className="flex flex-nowrap items-stretch gap-8"
          style={{ width: 'max-content' }}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="project-panel flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[25vw] max-w-[350px] h-[420px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col"
            >
              <div className="relative h-40 bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-full text-[10px] font-medium"
                      style={{ backgroundColor: 'rgba(236,72,153,0.15)', color: '#EC4899' }}
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
                    className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                    <span className="font-semibold">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-6 h-6" />
                    <span className="font-semibold">Live Demo</span>
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
          className="inline-flex items-center space-x-2 bg-[#EC4899] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <Github className="w-6 h-6" />
          <span>View All Projects on GitHub</span>
        </a>
      </div>

      {/* Dynamic Morph SVG Transition (Shape Overlays) */}
      <div ref={transitionRef} className="relative w-full h-48 md:h-64 -mb-1 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#be185d" /> {/* pink-700 */}
              <stop offset="100%" stopColor="#fbcfe8" /> {/* pink-200 */}
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" /> {/* pink-500 */}
              <stop offset="100%" stopColor="#831843" /> {/* pink-900 */}
            </linearGradient>
          </defs>
          <path ref={path1Ref} fill="url(#gradient2)"></path>
          <path ref={path2Ref} fill="url(#gradient1)"></path>
        </svg>
      </div>
    </section>
  );
}
