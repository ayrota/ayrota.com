import { Link } from 'react-router-dom';
import {
  Braces,
  FileCheck2,
  Navigation,
  Radar,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

import { Footer } from '../components/footer';
import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

type Capability = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const CAPABILITIES: Capability[] = [
  {
    title: 'alkonCapabilityNavigationTitle',
    text: 'alkonCapabilityNavigationText',
    icon: Navigation,
  },
  {
    title: 'alkonCapabilityResilienceTitle',
    text: 'alkonCapabilityResilienceText',
    icon: ShieldCheck,
  },
  {
    title: 'alkonCapabilityIntegrationTitle',
    text: 'alkonCapabilityIntegrationText',
    icon: Braces,
  },
];

const POC_ITEMS: Capability[] = [
  {
    title: 'alkonPocScenarioTitle',
    text: 'alkonPocScenarioText',
    icon: ScanSearch,
  },
  {
    title: 'alkonPocExperimentTitle',
    text: 'alkonPocExperimentText',
    icon: Radar,
  },
  {
    title: 'alkonPocReportTitle',
    text: 'alkonPocReportText',
    icon: FileCheck2,
  },
];

export default function Alkon() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 bg-[#09131d] text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[2%] top-[5%] h-[650px] w-[650px] bg-[radial-gradient(circle,rgba(59,130,246,0.055)_0%,rgba(59,130,246,0.025)_35%,transparent_70%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:84px_84px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1500px] items-center px-6 py-10 md:px-10">
          <div className="grid w-full gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <Reveal>
              <div>
                <Link
                  to="/#products"
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 transition hover:text-white/70"
                >
                  ← AYROTA
                </Link>

                <div className="mt-12 flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-200/35" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/60">
                    {t('alkonProductCategory')}
                  </span>
                </div>

                <div className="mt-6 text-[18px] font-semibold tracking-[0.26em] text-cyan-300/80">
                  ALKON
                </div>

                <h1 className="mt-5 max-w-[700px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#eef3f7] md:text-[60px]">
                  {t('alkonHeroStatement')}
                </h1>

                <p className="mt-7 max-w-[620px] text-[16px] leading-8 text-white/54">
                  {t('alkonHeroText')}
                </p>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('alkonMiniNavigation')}
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('alkonMiniAutonomy')}
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('alkonMiniIntegration')}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className="relative h-[430px] md:h-[540px]"
            >
              <div className="relative h-full overflow-hidden border border-white/[0.07] bg-[#07111a]">
                <img
                  src="/products/alkon.png"
                  alt="Alkon GNSS-denied navigation"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,14,22,0.25),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09131d]/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 border-l border-cyan-200/25 pl-4">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
                    {t('alkonVisualKicker')}
                  </div>

                  <div className="mt-2 text-[12px] text-white/50">
                    {t('alkonVisualText')}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative border-t border-white/[0.05] bg-[#0e1924] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/55">
                  {t('alkonProblemKicker')}
                </div>

                <h2 className="mt-5 max-w-[540px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                  {t('alkonProblemTitle')}
                </h2>
              </div>

              <div className="max-w-[700px] lg:justify-self-end">
                <p className="text-[16px] leading-8 text-white/52">
                  {t('alkonProblemText')}
                </p>

                <div className="mt-8 border-l border-cyan-200/20 pl-6">
                  <p className="text-[14px] leading-7 text-white/40">
                    {t('alkonProblemNote')}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY */}
      <section className="relative border-t border-white/[0.05] bg-[#101c28] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="max-w-[760px]">
              <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/55">
                {t('alkonScopeTitle')}
              </div>

              <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                {t('alkonScopeMainTitle')}
              </h2>

              <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-white/50">
                {t('alkonScopeText')}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <Reveal
                  key={capability.title}
                  delay={0.05 + index * 0.05}
                  className="h-full"
                >
                  <div className="group flex h-full min-h-[280px] flex-col border border-white/[0.07] bg-[#0a151f]/70 p-7 transition duration-300 hover:border-cyan-100/20">
                    <div className="flex h-11 w-11 items-center justify-center border border-white/[0.09] text-cyan-100/55">
                      <Icon size={19} strokeWidth={1.4} />
                    </div>

                    <div className="mt-auto pt-12">
                      <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white/90">
                        {t(capability.title)}
                      </h3>

                      <p className="mt-4 text-[13px] leading-6 text-white/44">
                        {t(capability.text)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* POC */}
      <section className="relative border-t border-white/[0.05] bg-[#0c1721] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/55">
                  {t('alkonPocKicker')}
                </div>

                <h2 className="mt-5 max-w-[560px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                  {t('alkonPocTitle')}
                </h2>
              </div>

              <p className="max-w-[650px] text-[15px] leading-7 text-white/48 lg:justify-self-end">
                {t('alkonPocLead')}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {POC_ITEMS.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={0.05 + index * 0.05}
                >
                  <div className="border-t border-white/[0.08] pt-6">
                    <div className="flex items-center justify-between">
                      <Icon
                        size={19}
                        strokeWidth={1.4}
                        className="text-cyan-100/50"
                      />

                      <span className="text-[9px] tracking-[0.2em] text-white/22">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.03em] text-white/90">
                      {t(item.title)}
                    </h3>

                    <p className="mt-4 max-w-[360px] text-[13px] leading-6 text-white/43">
                      {t(item.text)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CURRENT VALIDATION */}
      <section className="relative border-t border-white/[0.05] bg-[#101c28] py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-8 border border-white/[0.07] bg-[#0a151f]/60 p-7 md:p-9 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/45">
                  {t('alkonValidationKicker')}
                </div>

                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-white/92">
                  {t('alkonValidationTitle')}
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <StatusItem
                  label={t('alkonValidationSimulation')}
                  value={t('alkonValidationComplete')}
                />

                <StatusItem
                  label={t('alkonValidationRobustness')}
                  value={t('alkonValidationOngoing')}
                />

                <StatusItem
                  label={t('alkonValidationHitl')}
                  value={t('alkonValidationNext')}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/[0.05] bg-[#09131d] py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/50">
                  ALKON
                </div>

                <h2 className="mt-5 max-w-[760px] text-[32px] font-semibold leading-[1.1] tracking-[-0.045em] text-white md:text-[42px]">
                  {t('alkonFinalCtaTitle')}
                </h2>

                <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-white/48">
                  {t('alkonFinalCtaText')}
                </p>
              </div>

              <Link
                to="/#contact"
                className="inline-flex min-h-[50px] w-fit shrink-0 items-center justify-center bg-blue-600 px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500"
              >
                {t('alkonCtaButton')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function StatusItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-l border-white/[0.08] pl-5">
      <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/28">
        {label}
      </div>

      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100/60">
        {value}
      </div>
    </div>
  );
}