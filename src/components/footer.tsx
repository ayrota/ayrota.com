import { Link } from 'react-router-dom';

import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-fg/10 bg-bg py-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-[620px] text-[13px] leading-6 text-fg/45">
              {t('footerDescription')}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="text-sm text-fg/45">
              {t('footerCopyright').replace('{{year}}', String(year))}
            </div>

            <Link
              to="/privacy"
              className="text-sm text-fg/55 transition hover:text-fg"
            >
              {t('footerPrivacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}