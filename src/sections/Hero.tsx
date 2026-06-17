import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

const HERO_PILLARS = [
  {
    label: 'heroPillarImu',
    icon: '⌁',
  },
  {
    label: 'heroPillarSwapc',
    icon: '▣',
  },
  {
    label: 'heroPillarEndToEnd',
    icon: '⌘',
  },
  {
    label: 'heroPillarIndependent',
    icon: '◎',
  },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen md:h-screen bg-bg overflow-hidden flex flex-col justify-between"
    >
      {/* 
        Görsel Katmanı: Resmi sağ tarafa yaslayıp, sol kenarını 
        kademeli gradyanlar ile arka plan rengine (bg) tamamen gömüyoruz.
      */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full md:w-[60%] h-full">
          <img
            src="/hero.png"
            alt="Ayrota autonomous navigation field"
            className="h-full w-full object-cover"
            style={{ objectPosition: '62% 50%' }}
          />
          
          {/* KATMAN 1: Resmin sol kenarındaki sertliği yok eden güçlü yatay geçiş */}
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-bg via-bg/80 to-transparent" />
          
          {/* KATMAN 2: Alt kısımdaki barlarla birleşimi yumuşatan dikey geçiş */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

          {/* KATMAN 3: Üst menüyle (Navbar) birleşimi yumuşatan dikey geçiş */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-bg/90 via-bg/20 to-transparent" />
        </div>
      </div>

      {/* İÇERİK KATMANI: Resmin üzerinde z-10 olarak durur */}
      <div className="relative z-10 flex flex-col md:flex-row flex-grow items-center min-h-0">
        {/* SOL TARAF: Metin İçeriği (Arka planı tamamen temizledik) */}
        <div className="w-full md:w-1/2 px-6 md:px-10 lg:pl-20 py-20 md:py-0 flex items-center">
          <div className="max-w-[680px] w-full">
            {/* Kicker */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/80" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-fg/70 uppercase">
                {t('homeHeroKicker')}
              </span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.04em] text-fg">
              {t('homeHeroTitle')}
            </h1>

            {/* Açıklama Metni */}
            <p className="mt-8 max-w-[540px] text-[16px] sm:text-[17px] leading-8 text-fg/65">
              {t('homeHeroLead')}
            </p>
          </div>
        </div>

        {/* Sağ taraf boş bırakıldı çünkü resim absolute olarak arkaya yerleştirildi */}
        <div className="w-full md:w-1/2 hidden md:block pointer-events-none" />
      </div>

      {/* ALT TARAF: Pillars (Alt Çizgili Yapı) */}
      <div className="relative z-10 w-full px-6 md:px-10 py-8 bg-bg/40 backdrop-blur-sm border-t border-fg/10 shrink-0">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {HERO_PILLARS.map((pillar, index) => (
              <HeroPillar
                key={pillar.label}
                icon={pillar.icon}
                label={t(pillar.label)}
                firstOnRow={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPillar({
  icon,
  label,
  firstOnRow = false,
}: {
  icon: string;
  label: string;
  firstOnRow?: boolean;
}) {
  return (
    <div
      className={[
        'px-4 md:px-8 py-2 md:py-4',
        'border-l border-fg/15 md:first:border-l-0',
        firstOnRow && 'max-md:border-l-0'
      ].join(' ')}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="text-2xl md:text-3xl leading-none text-cyan-300/85">
          {icon}
        </div>

        <div className="text-[11px] md:text-[12px] font-medium tracking-[0.22em] text-fg/90 uppercase">
          {label}
        </div>
      </div>
    </div>
  );
}