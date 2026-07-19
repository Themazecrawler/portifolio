import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SECTIONS, type SectionId } from '../../constants/site';
import { scrollToSection } from '../../utils/scroll';
import { useActiveSection } from '../../hooks/useActiveSection';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleNavigate = (section: SectionId) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Lisa Amimo
          </div>

          <div className="hidden md:flex space-x-8">
            {SECTIONS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === item
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-600 hover:text-purple-600'
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
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-purple-100">
          <div className="px-4 py-2 space-y-2">
            {SECTIONS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className="block w-full text-left px-3 py-2 capitalize text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
