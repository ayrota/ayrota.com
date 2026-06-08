import type { ReactNode } from 'react';

import { Counter } from '../components/Counter';
import { useLanguage } from '../lib/LanguageContext';
import { COMPANY, developmentYears } from '../lib/company';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-bg"
    >
      <img
        src="/hero.png"
        alt="Ayrota autonomous navigation field"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <div className="relative z-10 min-h-screen">
        <div className="w-full px-6 md:px-10">
          <div className="mx-auto max-w-[1440px] pt-[120px]">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-300/80" />

                <span className="text-[11px] font-medium tracking-[0.22em] text-fg/70">
                  {t('homeHeroKicker')}
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-fg md:text-[83px]">
                {t('homeHeroTitle')}
              </h1>

              <p className="mt-10 max-w-xl text-[18px] leading-9 text-fg/65">
                {t('homeHeroLead')}
              </p>
            </div>

            <div className="mt-24">
              <div className="grid grid-cols-1 border-t border-fg/10 pt-8 md:grid-cols-3">
                <Metric
                  value={
                    <Counter
                      value={developmentYears}
                      suffix="+"
                    />
                  }
                  label={t('homeMetricYears')}
                />

                <Metric
                  value={
                    <Counter
                      value={COMPANY.products.length}
                    />
                  }
                  label={t('homeMetricProducts')}
                />

                <Metric
                  value={
                    <Counter
                      value={COMPANY.coreArchitectures}
                    />
                  }
                  label={t('homeMetricCore')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
}: {
  value: ReactNode;
  label: string;
}) {
  return (
    <div className="border-l border-fg/10 pl-8 py-2">
      <div className="text-[54px] font-semibold leading-none tracking-[-0.04em] text-fg">
        {value}
      </div>

      <div className="mt-4 text-[13px] font-medium text-fg/50">
        {label}
      </div>
    </div>
  );
}