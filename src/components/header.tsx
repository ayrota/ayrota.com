import { Container } from './Container';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { scrollToSection } from '../lib/scrollToSection';

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const navLinkClass = 'transition-colors text-muted hover:text-fg';

  const langButton = (l: 'en' | 'tr') =>
    `text-xs tracking-wide ${lang === l ? 'text-fg' : 'text-muted hover:text-fg'}`;

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    // Home'daysak: Router'a bırakmadan scroll'u garanti et
    if (location.pathname === '/') {
      e.preventDefault();
      // URL hash'i güncelle (back/forward için)
      window.history.pushState(null, '', `/#${id}`);
      scrollToSection(id, 96);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-bg/95 backdrop-blur border-b border-line/70">
        <Container className="py-4 flex items-center justify-between">
          <Link
            to="/#hero"
            onClick={handleNav('hero')}
            aria-label="Go to top"
            className="inline-flex items-center gap-3"
          >
            <img src="/icon.png" alt="Ayrota logo" className="h-6 w-auto" />
            <span
              className="text-[13px] font-extrabold tracking-[0.12em]"
              style={{ fontFamily: 'Arial', color: '#D7E3F1' }}
            >
              ayrota
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/#approach" onClick={handleNav('approach')} className={navLinkClass}>
              {t('sectionApproach')}
            </Link>
            <Link to="/#core" onClick={handleNav('core')} className={navLinkClass}>
              {t('sectionCore')}
            </Link>
            <Link to="/#capabilities" onClick={handleNav('capabilities')} className={navLinkClass}>
              {t('sectionCapabilities')}
            </Link>
            <Link to="/#provisioning" onClick={handleNav('provisioning')} className={navLinkClass}>
              {t('sectionProvisioning')}
            </Link>
            <Link to="/#contact" onClick={handleNav('contact')} className={navLinkClass}>
              {t('sectionContact')}
            </Link>

            <div className="flex items-center gap-1 ml-2">
              <button onClick={() => setLang('en')} className={langButton('en')} aria-label="Switch to English">
                EN
              </button>
              <span className="text-muted text-xs">·</span>
              <button onClick={() => setLang('tr')} className={langButton('tr')} aria-label="Switch to Turkish">
                TR
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button onClick={() => setLang('tr')} className={langButton('tr')}>TR</button>
              <span className="text-muted text-xs">·</span>
              <button onClick={() => setLang('en')} className={langButton('en')}>EN</button>
            </div>

            <Link
              to="/#contact"
              onClick={handleNav('contact')}
              className="rounded-md border border-line/70 bg-panel/40 px-3 py-1.5 text-sm text-fg backdrop-blur"
            >
              {t('sectionContact')}
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}