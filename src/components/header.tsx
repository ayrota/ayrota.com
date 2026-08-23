import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { Container } from './Container';
import { useLanguage } from '../lib/LanguageContext';

export function Header() {
  const { lang, setLang } = useLanguage();

  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  const langButtonClass = (target: 'tr' | 'en') =>
    [
      'text-[10px] font-semibold tracking-[0.16em] transition-colors',
      lang === target
        ? 'text-white'
        : 'text-white/32 hover:text-white/70',
    ].join(' ');

  const navLinkClass =
    'relative py-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42 transition-colors hover:text-white/75';

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full overflow-visible">
      <div className="relative z-[100] border-b border-white/[0.06] bg-[#09131d]/95 backdrop-blur-xl">
        <Container className="flex h-20 items-center">
          {/* Brand */}
          <Link
            to="/#hero"
            aria-label={
              lang === 'tr'
                ? 'Ayrota ana sayfa'
                : 'Ayrota home'
            }
            onClick={closeMobile}
            className="group inline-flex items-center gap-4"
          >
            <img
              src="/icon.png"
              alt="Ayrota"
              className="h-9 w-9 object-contain opacity-90 transition-opacity group-hover:opacity-100"
            />

            <span className="text-[20px] font-semibold tracking-[0.26em] text-white/92">
              AYROTA
            </span>
          </Link>

          {/* Desktop */}
          <div className="ml-auto hidden items-center gap-14 lg:flex">
            <nav className="flex items-center gap-10">
              {/* Products */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  to="/#products"
                  onClick={() => setProductsOpen(false)}
                  aria-expanded={productsOpen}
                  className={[
                    navLinkClass,
                    productsOpen ? 'text-white' : '',
                  ].join(' ')}
                >
                  {lang === 'tr'
                    ? 'ÜRÜNLER'
                    : 'PRODUCTS'}

                  <span
                    className={[
                      'absolute bottom-[22px] left-0 h-px bg-cyan-200/50 transition-all duration-300',
                      productsOpen
                        ? 'w-full'
                        : 'w-0',
                    ].join(' ')}
                  />
                </Link>

                {productsOpen && (
                  <div className="absolute left-1/2 top-full z-[200] -translate-x-1/2 pt-2">
                    <div className="min-w-[180px] border border-white/[0.10] bg-[#0b1621] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                      <ProductLink
                        href="/alkon"
                        label="ALKON"
                        onClick={() =>
                          setProductsOpen(false)
                        }
                      />

                      <ProductLink
                        href="/yaya"
                        label="YAYA"
                        onClick={() =>
                          setProductsOpen(false)
                        }
                      />

                      <ProductLink
                        href="/yoruk"
                        label="YÖRÜK"
                        onClick={() =>
                          setProductsOpen(false)
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Applications */}
              <Link
                to="/#applications"
                className={navLinkClass}
              >
                {lang === 'tr'
                  ? 'UYGULAMALAR'
                  : 'APPLICATIONS'}
              </Link>

              {/* Contact */}
              <Link
                to="/#contact"
                className={navLinkClass}
              >
                {lang === 'tr'
                  ? 'İLETİŞİM'
                  : 'CONTACT'}
              </Link>
            </nav>

            {/* Language */}
            <div className="flex items-center gap-3 border-l border-white/[0.08] pl-8">
              <button
                type="button"
                onClick={() => setLang('tr')}
                className={langButtonClass('tr')}
              >
                TR
              </button>

              <span className="h-3 w-px bg-white/[0.10]" />

              <button
                type="button"
                onClick={() => setLang('en')}
                className={langButtonClass('en')}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="ml-auto flex items-center gap-5 lg:hidden">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLang('tr')}
                className={langButtonClass('tr')}
              >
                TR
              </button>

              <span className="text-white/20">
                /
              </span>

              <button
                type="button"
                onClick={() => setLang('en')}
                className={langButtonClass('en')}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? lang === 'tr'
                    ? 'Menüyü kapat'
                    : 'Close menu'
                  : lang === 'tr'
                    ? 'Menüyü aç'
                    : 'Open menu'
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((value) => !value)
              }
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-white/65 transition hover:border-white/[0.16] hover:text-white"
            >
              {mobileOpen ? (
                <X
                  size={18}
                  strokeWidth={1.5}
                />
              ) : (
                <Menu
                  size={18}
                  strokeWidth={1.5}
                />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="relative z-[190] border-b border-white/[0.07] bg-[#09131d] lg:hidden">
          <Container className="py-6">
            <nav>
              {/* Products */}
              <div>
                <Link
                  to="/#products"
                  onClick={closeMobile}
                  className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-100/40 transition-colors hover:text-cyan-100/70"
                >
                  {lang === 'tr'
                    ? 'ÜRÜNLER'
                    : 'PRODUCTS'}
                </Link>

                <div className="border-t border-white/[0.06]">
                  <MobileLink
                    href="/alkon"
                    label="ALKON"
                    onClick={closeMobile}
                  />

                  <MobileLink
                    href="/yaya"
                    label="YAYA"
                    onClick={closeMobile}
                  />

                  <MobileLink
                    href="/yoruk"
                    label="YÖRÜK"
                    onClick={closeMobile}
                  />
                </div>
              </div>

              {/* Main links */}
              <div className="mt-7 border-t border-white/[0.06]">
                <MobileLink
                  href="/#applications"
                  label={
                    lang === 'tr'
                      ? 'UYGULAMALAR'
                      : 'APPLICATIONS'
                  }
                  onClick={closeMobile}
                />

                <MobileLink
                  href="/#contact"
                  label={
                    lang === 'tr'
                      ? 'İLETİŞİM'
                      : 'CONTACT'
                  }
                  onClick={closeMobile}
                />
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

function ProductLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.035]"
    >
      <span className="h-px w-0 bg-cyan-200/55 transition-all duration-300 group-hover:w-4" />

      <span className="text-[11px] font-semibold tracking-[0.12em] text-white/60 transition-colors group-hover:text-white">
        {label}
      </span>
    </Link>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="flex items-center justify-between border-b border-white/[0.06] py-4"
    >
      <span className="text-[12px] font-medium tracking-[0.08em] text-white/70">
        {label}
      </span>

      <span className="text-[14px] text-cyan-100/35">
        →
      </span>
    </Link>
  );
}