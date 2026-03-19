import { Container } from './Container';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* single closing divider */}
          <div className="h-px bg-line/60 mb-8" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
            <div>
              {t('footerCopyright').replace('{{year}}', String(year))}
            </div>

            <div className="flex gap-4">
              <Link
                to="/#approach"
                className="hover:text-fg transition-colors"
              >
                {t('sectionApproach')}
              </Link>
              <Link
                to="/#core"
                className="hover:text-fg transition-colors"
              >
                {t('sectionCore')}
              </Link>
              <Link
                to="/#provisioning"
                className="hover:text-fg transition-colors"
              >
                {t('sectionProvisioning')}
              </Link>
              <Link
                to="/#contact"
                className="hover:text-fg transition-colors"
              >
                {t('sectionContact')}
              </Link>
            </div>
          </div>

          {/* legal / positioning whisper */}
          <div className="mt-4 text-[11px] leading-relaxed text-muted max-w-2xl">
            {t('footerTaglineLine1')}
            <br />
            {t('footerTaglineLine2')}
            <br />
            <Link
              to="/privacy"
              className="underline underline-offset-2 hover:text-fg"
            >
              {t('footerPrivacy')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}