import { Link } from 'react-router-dom';

import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#07111a] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute bottom-[-220px] left-[15%] h-[420px] w-[560px] rounded-full bg-blue-500/[0.025] blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:84px_84px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-12 md:px-10 md:py-14">
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

          <p className="mt-6 max-w-[610px] text-[12px] leading-6 text-white/35">
            {t('footerDescription')}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[10px] text-white/25">
            {t('footerCopyright').replace(
              '{{year}}',
              String(year),
            )}
          </div>

          <Link
            to="/privacy"
            className="text-[10px] text-white/28 transition hover:text-white/65"
          >
            {t('footerPrivacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}