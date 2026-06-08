import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const id = hash.replace('#', '');

    const timeout = window.setTimeout(() => {
      const el = document.getElementById(id);

      if (!el) return;

      const headerOffset = 96;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}