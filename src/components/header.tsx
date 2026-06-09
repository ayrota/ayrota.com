import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './Container';
import { useLanguage } from '../lib/LanguageContext';

type NavSubItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  items: NavSubItem[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: 'ÜRÜNLER',
    items: [
      { label: 'ALKON', href: '/#products' },
      { label: 'KARARGAH', href: '/#products' },
      { label: 'YAYA', href: '/#products' },
      { label: 'YÖRÜK', href: '/#products' },
      { label: 'İLBER', href: '/ilber' },
    ],
  },
  {
    label: 'ŞİRKET',
    items: [
      { label: 'Anasayfa', href: '/#hero' },
      { label: 'İletişim', href: '/#contact' },
    ],
  },
];

export function Header() {
  const { lang, setLang } = useLanguage();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const langButtonClass = (target: 'tr' | 'en') =>
    [
      'text-[11px] tracking-[0.18em] transition-colors',
      lang === target ? 'text-fg' : 'text-muted hover:text-fg',
    ].join(' ');

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="border-b border-line/50 bg-bg/85 backdrop-blur-xl">
        <Container className="flex h-20 items-center">
          <Link
            to="/#hero"
            aria-label="Ayrota ana sayfa"
            className="group inline-flex items-center gap-4"
          >
            <img
              src="/icon.png"
              alt="Ayrota Logo"
              className="h-10 w-10 object-contain opacity-90 transition-opacity group-hover:opacity-100"
            />

            <span className="text-[22px] font-semibold tracking-[0.28em] text-fg">
              AYROTA
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-20">
            <nav className="hidden items-center gap-12 lg:flex">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    type="button"
                    className={[
                      'text-[12px] font-medium tracking-[0.16em] transition-colors',
                      activeMenu === item.label
                        ? 'text-fg'
                        : 'text-muted hover:text-fg',
                    ].join(' ')}
                  >
                    {item.label}
                  </button>

                  {activeMenu === item.label && (
                    <div className="absolute left-0 top-full pt-6">
                      <div className="flex flex-col gap-3">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="group flex items-center gap-3 whitespace-nowrap"
                          >
                            <span className="h-px w-0 bg-fg/70 transition-all duration-300 group-hover:w-5" />

                            <span className="text-[13px] font-medium tracking-[0.08em] text-fg/65 transition-colors group-hover:text-fg">
                              {subItem.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => setLang('tr')}
                className={langButtonClass('tr')}
              >
                TR
              </button>

              <span className="h-3 w-px bg-line/80" />

              <button
                type="button"
                onClick={() => setLang('en')}
                className={langButtonClass('en')}
              >
                EN
              </button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setLang('tr')}
                className={langButtonClass('tr')}
              >
                TR
              </button>

              <span className="text-muted">/</span>

              <button
                type="button"
                onClick={() => setLang('en')}
                className={langButtonClass('en')}
              >
                EN
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}