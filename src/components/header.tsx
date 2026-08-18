import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './Container';
import { useLanguage } from '../lib/LanguageContext';

type NavSubItem = {
  label: string;
  href: string;
  dividerAfter?: boolean;
};

type NavItem = {
  label: string;
  items: NavSubItem[];
};

export function Header() {
  const { lang, setLang } = useLanguage();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const NAV_ITEMS: NavItem[] = [
    {
      label: lang === 'tr' ? 'ÜRÜNLER' : 'PRODUCTS',
      items: [
        {
          label: lang === 'tr' ? 'Tüm Ürünler' : 'All Products',
          href: '/#products',
          dividerAfter: true,
        },
        {
          label: 'ALKON',
          href: '/alkon',
        },
        {
          label: 'YÖRÜK',
          href: '/yoruk',
        },
        {
          label: 'YAYA',
          href: '/yaya',
        },
      ],
    },
    {
      label: lang === 'tr' ? 'KEŞFET' : 'EXPLORE',
      items: [
        {
          label: lang === 'tr' ? 'Çekirdek Teknoloji' : 'Core Technology',
          href: '/#technology',
        },
        {
          label: lang === 'tr' ? 'Kullanım Alanları' : 'Applications',
          href: '/#applications',
        },
        {
          label: lang === 'tr' ? 'İletişim' : 'Contact',
          href: '/#contact',
        },
      ],
    },
  ];

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

            <span className="text-[22px] font-semibold tracking-[0.28em] text-fg">AYROTA</span>
          </Link>

          <div className="ml-auto flex items-center gap-16">
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
                      activeMenu === item.label ? 'text-fg' : 'text-muted hover:text-fg',
                    ].join(' ')}
                  >
                    {item.label}
                  </button>

                  {activeMenu === item.label && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-5">
                      <div className="min-w-[220px] border border-fg/10 bg-bg/95 px-5 py-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
                        <div className="flex flex-col">
                          {item.items.map((subItem) => (
                            <div key={subItem.label}>
                              <Link
                                to={subItem.href}
                                onClick={() => setActiveMenu(null)}
                                className="group flex items-center gap-3 whitespace-nowrap py-2"
                              >
                                <span className="h-px w-0 bg-cyan-300/80 transition-all duration-300 group-hover:w-4" />

                                <span className="text-[12px] font-medium tracking-[0.08em] text-fg/60 transition-colors group-hover:text-fg">
                                  {subItem.label}
                                </span>
                              </Link>

                              {subItem.dividerAfter && <div className="my-3 h-px bg-fg/10" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button type="button" onClick={() => setLang('tr')} className={langButtonClass('tr')}>
                TR
              </button>

              <span className="h-3 w-px bg-line/80" />

              <button type="button" onClick={() => setLang('en')} className={langButtonClass('en')}>
                EN
              </button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button type="button" onClick={() => setLang('tr')} className={langButtonClass('tr')}>
                TR
              </button>

              <span className="text-muted">/</span>

              <button type="button" onClick={() => setLang('en')} className={langButtonClass('en')}>
                EN
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
