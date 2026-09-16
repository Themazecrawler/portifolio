import { List, X } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SECTIONS, type SectionId } from '../../constants/site';
import { scrollToSection } from '../../utils/scroll';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const navRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Reduced motion: keep the nav permanently visible, no hide-on-scroll.
    if (reducedMotion) return;
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      const showAnim = gsap.from(nav, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: 'power2.out',
      }).progress(1);

      ScrollTrigger.create({
        start: 'top top-=100', // Only start triggering after scrolling down 100px
        onUpdate: (self) => {
          if (self.direction === 1) {
            // Scrolling down -> hide header
            showAnim.reverse();
            // Optionally close the mobile menu if they scroll down
            setIsMenuOpen(false);
          } else {
            // Scrolling up -> show header
            showAnim.play();
          }
        },
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleNavigate = (section: SectionId) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b-2 border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-pixel text-lg text-accent">
            LISA.AMIMO
          </div>

          <div className="hidden md:flex items-center gap-7">
            {SECTIONS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`capitalize transition-colors duration-200 font-semibold ${
                  activeSection === item
                    ? 'text-pop'
                    : 'text-text-muted hover:text-accent'
                }`}
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-chunky bg-surface-raised border-2 border-border press-active shadow-hard"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-text" weight="bold" /> : <List className="w-5 h-5 text-text" weight="bold" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t-2 border-border">
          <div className="px-4 py-3 space-y-1">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`block w-full text-left px-4 py-3 rounded-chunky capitalize text-base transition-all duration-200 ${
                    isActive
                      ? 'bg-[rgba(var(--color-accent-rgb),0.18)] text-pop font-bold'
                      : 'text-text-muted hover:bg-surface-raised hover:text-accent'
                  }`}
                >
                  {item === 'home' ? 'Home' : item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
