import { useEffect, useState } from 'react';

/**
 * Reactive `prefers-reduced-motion` media query. Animations across the site
 * (SplitText, ScrollTrigger pins, tilt, canvas loops) gate on this so the
 * page honors the user's motion preferences.
 */
export const useReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
};
