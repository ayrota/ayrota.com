import { Link } from 'react-router-dom';

import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#07111a] py-8 text-white">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex flex-col gap-7">
          {/* Brand */}
          <div>
            <Link
              to="/#hero"
              className="inline-flex items-center gap-4"
            >
              <img
                src="/icon.png"
                alt="Ayrota"
                className="h-8 w-8 object-contain opacity-75"
              />

              <span className="text-[17px] font-semibold tracking-[0.24em] text-white/80">
                AYROTA
              </span>
            </Link>

            <p className="mt-4 max-w-[700px] text-[12px] leading-6 text-white/35">
              {t('footerDescription')}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[10px] text-white/25">
              {t('footerCopyright').replace(
                '{{year}}',
                String(year),
              )}
            </div>

            <Link
              to="/privacy"
              className="text-[10px] text-white/35 transition-colors hover:text-white/70"
            >
              {t('footerPrivacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}