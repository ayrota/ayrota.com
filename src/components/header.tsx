import { Container } from './Container';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export function Header() {
  const { lang, setLang } = useLanguage();
  const { t } = useLanguage();

  const navLinkClass =
    'transition-colors text-muted hover:text-fg';

  const langButton = (l: 'en' | 'tr') =>
    `text-xs tracking-wide ${
      lang === l ? 'text-fg' : 'text-muted hover:text-fg'
    }`;

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-bg/95 backdrop-blur border-b border-line/70">
        <Container className="py-4 flex items-center justify-between">
          {/* LOGO → controlled start */}
          <Link
            to="/#approach"
            aria-label="Go to approach"
            className="inline-flex items-center gap-3"
          >
            <img
              src="/icon.png"
              alt="Ayrota logo"
              className="h-6 w-auto"
            />

            <span
              className="text-[13px] font-extrabold tracking-[0.12em]"
              style={{
                fontFamily: 'Arial',
                color: '#D7E3F1',
              }}
            >
              ayrota
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/#approach" className={navLinkClass}>
              {t('approach')}
            </Link>
            <Link to="/#core" className={navLinkClass}>
            {t('core')}
            </Link>
            <Link to="/#capabilities" className={navLinkClass}>
            {t('capabilities')}
            </Link>
            <Link to="/#provisioning" className={navLinkClass}>
            {t('provisioning')}
            </Link>
            <Link to="/#contact" className={navLinkClass}>
            {t('contact')}
            </Link>

            {/* LANGUAGE SWITCH */}
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => setLang('en')}
                className={langButton('en')}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-muted text-xs">·</span>
              <button
                onClick={() => setLang('tr')}
                className={langButton('tr')}
                aria-label="Switch to Turkish"
              >
                TR
              </button>
            </div>
          </nav>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLang('en')}
                className={langButton('en')}
              >
                EN
              </button>
              <span className="text-muted text-xs">·</span>
              <button
                onClick={() => setLang('tr')}
                className={langButton('tr')}
              >
                TR
              </button>
            </div>

            <Link
              to="/#contact"
              className="rounded-md border border-line/70 bg-panel/40 px-3 py-1.5 text-sm text-fg backdrop-blur"
            >
              {t('contact')}
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}

