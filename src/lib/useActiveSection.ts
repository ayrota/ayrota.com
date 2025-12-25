import { useEffect, useState } from 'react';

const SECTIONS = [
  'approach',
  'capabilities',
  'engagements',
  'deployment',
  'contact',
];

export function useActiveSection(offset = 120) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const id = SECTIONS[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
          setActive(id);
          return;
        }
      }
      setActive(null);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return active;
}