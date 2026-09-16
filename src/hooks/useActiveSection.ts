import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SECTIONS, type SectionId } from '../constants/site';

gsap.registerPlugin(ScrollTrigger);

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const handleScroll = () => {
      // A section whose ScrollTrigger is currently pinned (e.g. Projects'
      // horizontal gallery) owns the highlight, even when the band heuristic
      // below misses because the pinned element sits mid-viewport.
      const pinned = ScrollTrigger.getAll().find((st) => st.pin && st.isActive && st.trigger);
      const pinnedSection = pinned ? (pinned.trigger as HTMLElement).closest('section[id]') : null;
      if (pinnedSection) {
        const id = pinnedSection.id as SectionId;
        if (SECTIONS.includes(id)) {
          setActiveSection(id);
          return;
        }
      }

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
