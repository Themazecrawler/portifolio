import { useEffect, useState } from 'react';
import { SECTIONS, type SectionId } from '../constants/site';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const handleScroll = () => {
      const current = SECTIONS.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};
