import { Container } from './Container';
import { Link } from 'react-router-dom';

export function Header() {

  const linkClass =
    'transition-colors text-muted hover:text-fg';

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-bg/95 backdrop-blur border-b border-line/70">
        <Container className="py-4 flex items-center justify-between">
          {/* LOGO → her zaman ana sayfaya */}
          <Link
            to="/#approach"
            aria-label="Go to approach"
            className="inline-flex items-center"
          >
            <img
              src="/logo-ui.png"
              alt="Ayrota"
              className="h-6 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/#approach" className={linkClass}>
              Approach
            </Link>
            <Link to="/#core" className={linkClass}>
              The Core
            </Link>
            <Link to="/#capabilities" className={linkClass}>
              Capabilities
            </Link>
            <Link to="/#provisioning" className={linkClass}>
              Provisioning
            </Link>
            <Link to="/#contact" className={linkClass}>
              Contact
            </Link>
          </nav>

          {/* MOBILE */}
          <div className="md:hidden">
            <Link
              to="/#contact"
              className="rounded-md border border-line/70 bg-panel/40 px-3 py-1.5 text-sm text-fg backdrop-blur"
            >
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}