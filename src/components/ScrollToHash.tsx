import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // DOM render edilsin diye micro-delay
    const id = hash.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      // header yüksekliğini telafi et
      const headerOffset = 96; // px
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [hash]);

  return null;
}