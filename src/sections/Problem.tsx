import {
  Activity,
  Cpu,
  Footprints,
  Gauge,
  Navigation,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

type Capability = {
  title: string;
  text: string;
  icon: LucideIcon;
  index: string;
};

const CAPABILITIES: Capability[] = [
  {
    title: 'technologyNavigationTitle',
    text: 'technologyNavigationText',
    icon: Navigation,
    index: '01',
  },
  {
    title: 'technologySensorTitle',
    text: 'technologySensorText',
    icon: Gauge,
    index: '02',
  },
  {
    title: 'technologyIndoorTitle',
    text: 'technologyIndoorText',
    icon: Footprints,
    index: '03',
  },
  {
    title: 'technologyAnalyticsTitle',
    text: 'technologyAnalyticsText',
    icon: Activity,
    index: '04',
  },
  {
    title: 'technologyEmbeddedTitle',
    text: 'technologyEmbeddedText',
    icon: Cpu,
    index: '05',
  },
];

export function Problem() {
  const { t } = useLanguage();

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#101c28] py-20 text-white md:py-24"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-300/[0.025] blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:84px_84px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10">
        {/* Heading */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-200/35" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/65">
                  {t('technologyKicker')}
                </span>
              </div>

              <h2 className="mt-5 max-w-[620px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                {t('technologyTitle')}
              </h2>
            </div>

            <p className="max-w-[680px] text-[15px] leading-7 text-white/52 lg:justify-self-end">
              {t('technologyLead')}
            </p>
          </div>
        </Reveal>

        {/* Core */}
        <Reveal delay={0.06}>
          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-1/2 top-full hidden h-12 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-200/25 to-transparent lg:block"
            />

            <div className="relative overflow-hidden border border-white/[0.08] bg-[#0b1621]/85 px-7 py-8 backdrop-blur md:px-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.055),transparent_48%)]"
              />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/45">
                    AYROTA
                  </div>

                  <h3 className="mt-3 max-w-[480px] text-[28px] font-semibold leading-tight tracking-[-0.04em] text-white md:text-[34px]">
                    {t('technologyCoreTitle')}
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <CoreMetric
                    label={t('technologyCoreMetricSensing')}
                    value={t('technologyCoreMetricSensingValue')}
                  />

                  <CoreMetric
                    label={t('technologyCoreMetricEstimation')}
                    value={t('technologyCoreMetricEstimationValue')}
                  />

                  <CoreMetric
                    label={t('technologyCoreMetricIntegration')}
                    value={t('technologyCoreMetricIntegrationValue')}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Capabilities */}
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-gradient-to-r from-transparent via-cyan-200/18 to-transparent lg:block"
          />

          <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-5">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <Reveal
                  key={capability.title}
                  delay={0.1 + index * 0.05}
                  className="h-full"
                >
                  <article className="group relative flex h-full min-h-[310px] flex-col overflow-hidden border border-white/[0.07] bg-[#0b1621]/70 p-6 transition duration-300 hover:border-cyan-100/20 hover:bg-[#0d1a26]">
                    <div
                      aria-hidden
                      className="absolute left-0 top-0 h-px w-14 bg-cyan-200/30"
                    />

                    <div
                      aria-hidden
                      className="absolute left-0 top-0 h-14 w-px bg-cyan-200/30"
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-white/[0.09] text-cyan-100/55 transition duration-300 group-hover:border-cyan-100/24 group-hover:text-cyan-100/80">
                        <Icon
                          size={19}
                          strokeWidth={1.4}
                        />
                      </div>

                      <span className="text-[9px] font-medium tracking-[0.22em] text-white/22">
                        {capability.index}
                      </span>
                    </div>

                    <div className="mt-auto pt-10">
                      <div className="flex min-h-[58px] items-end">
                        <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.03em] text-white/90">
                          {t(capability.title)}
                        </h3>
                      </div>

                      <p className="mt-4 min-h-[102px] text-[13px] leading-6 text-white/44">
                        {t(capability.text)}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-7 md:flex-row md:items-center md:justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/42">
              {t('technologyBottomKicker')}
            </div>

            <p className="max-w-[760px] text-[13px] leading-6 text-white/38 md:text-right">
              {t('technologyBottomText')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CoreMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-l border-white/[0.08] pl-5">
      <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
        {label}
      </div>

      <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan-100/65">
        {value}
      </div>
    </div>
  );
}