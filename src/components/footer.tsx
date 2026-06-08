import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-fg/10 py-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <div className="mt-8 max-w-2xl text-[13px] gap-4 leading-5 text-fg/45">
              {t('footerTaglineLine1')}
              <br />
              {t('footerTaglineLine2')}
            </div>
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