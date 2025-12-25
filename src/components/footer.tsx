import { Container } from './Container';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative py-10">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* single closing divider */}
          <div className="h-px bg-line/60 mb-8" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
            <div>
              © {new Date().getFullYear()} Ayrota
            </div>

            <div className="flex gap-4">
              <Link
                to="/#approach"
                className="hover:text-fg transition-colors"
              >
                Approach
              </Link>
              <Link
                to="/#core"
                className="hover:text-fg transition-colors"
              >
                The Core
              </Link>
              <Link
                to="/#provisioning"
                className="hover:text-fg transition-colors"
              >
                Provisioning
              </Link>
              <Link
                to="/#contact"
                className="hover:text-fg transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* legal / positioning whisper */}
          <div className="mt-4 text-[11px] leading-relaxed text-muted max-w-2xl">
            Productized inertial navigation software.
            <br />
            Cloud-backed evaluation supported where permitted.
            <br />
            <Link
              to="/privacy"
              className="underline underline-offset-2 hover:text-fg"
            >
              Privacy & Data Notice
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}