import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SECTIONS, type SectionId } from '../../constants/site';
import { scrollToSection } from '../../utils/scroll';
import { useActiveSection } from '../../hooks/useActiveSection';

gsap.registerPlugin(ScrollTrigger);

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
  }, []);

  const handleNavigate = (section: SectionId) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#EC4899]">
            Lisa Amimo
          </div>

          <div className="hidden md:flex space-x-8">
            {SECTIONS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === item
                    ? 'text-pink-400 font-semibold'
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-100" /> : <Menu className="w-6 h-6 text-gray-100" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`block w-full text-left px-4 py-3 rounded-xl capitalize text-base transition-all duration-200 ${
                    isActive
                      ? 'bg-pink-950 text-pink-400 font-bold'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-pink-400'
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
