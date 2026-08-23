import { Link } from 'react-router-dom';
import {
  Activity,
  Car,
  MapPinned,
  ShieldCheck,
  Wrench,
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

type Surface = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const CAPABILITIES: Capability[] = [
  {
    title: 'yorukCapabilityRoadTitle',
    text: 'yorukCapabilityRoadText',
    icon: MapPinned,
  },
  {
    title: 'yorukCapabilityDrivingTitle',
    text: 'yorukCapabilityDrivingText',
    icon: Activity,
  },
  {
    title: 'yorukCapabilityOperationalTitle',
    text: 'yorukCapabilityOperationalText',
    icon: Car,
  },
];

const SURFACES: Surface[] = [
  {
    title: 'yorukRoadMaintenanceTitle',
    text: 'yorukRoadMaintenanceText',
    icon: Wrench,
  },
  {
    title: 'yorukSafetyTitle',
    text: 'yorukSafetyText',
    icon: ShieldCheck,
  },
];

export default function Yoruk() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 bg-[#09131d] text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[8%] top-[14%] h-[520px] w-[560px] rounded-full bg-blue-400/[0.035] blur-[170px]" />

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
                    {t('yorukProductCategory')}
                  </span>
                </div>

                <div className="mt-6 text-[18px] font-semibold tracking-[0.26em] text-cyan-300/80">
                  YÖRÜK
                </div>

                <h1 className="mt-5 max-w-[700px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#eef3f7] md:text-[60px]">
                  {t('yorukHeroStatement')}
                </h1>

                <p className="mt-7 max-w-[620px] text-[16px] leading-8 text-white/54">
                  {t('yorukHeroText')}
                </p>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('yorukMiniRoad')}
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('yorukMiniDriving')}
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('yorukMiniSensors')}
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
                  src="/products/yoruk.png"
                  alt="Yoruk road and driving analytics"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,14,22,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09131d]/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 border-l border-cyan-200/25 pl-4">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
                    {t('yorukVisualKicker')}
                  </div>

                  <div className="mt-2 text-[12px] text-white/50">
                    {t('yorukVisualText')}
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
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/55">
                  {t('yorukProblemKicker')}
                </div>

                <h2 className="mt-5 max-w-[560px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                  {t('yorukProblemTitle')}
                </h2>
              </div>

              <div className="max-w-[700px] lg:justify-self-end">
                <p className="text-[16px] leading-8 text-white/52">
                  {t('yorukProblemText')}
                </p>
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
                {t('yorukScopeTitle')}
              </div>

              <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                {t('yorukScopeMainTitle')}
              </h2>

              <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-white/50">
                {t('yorukScopeText')}
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
                  <article className="flex h-full min-h-[280px] flex-col border border-white/[0.07] bg-[#0a151f]/70 p-7 transition duration-300 hover:border-cyan-100/20">
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
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT SURFACES */}
      <section className="relative border-t border-white/[0.05] bg-[#0c1721] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/55">
                  {t('yorukApplicationsKicker')}
                </div>

                <h2 className="mt-5 max-w-[600px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                  {t('yorukApplicationsTitle')}
                </h2>
              </div>

              <p className="max-w-[650px] text-[15px] leading-7 text-white/48 lg:justify-self-end">
                {t('yorukApplicationsLead')}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {SURFACES.map((surface, index) => {
              const Icon = surface.icon;

              return (
                <Reveal
                  key={surface.title}
                  delay={0.06 + index * 0.06}
                >
                  <article className="relative min-h-[330px] overflow-hidden border border-white/[0.07] bg-[#09131d] p-7 md:p-9">
                    <div
                      aria-hidden
                      className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-blue-300/[0.025] blur-[80px]"
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center border border-white/[0.09] text-cyan-100/55">
                          <Icon size={19} strokeWidth={1.4} />
                        </div>

                        <span className="text-[9px] tracking-[0.2em] text-white/22">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-auto pt-16">
                        <h3 className="text-[26px] font-semibold tracking-[-0.04em] text-white/92">
                          {t(surface.title)}
                        </h3>

                        <p className="mt-5 max-w-[540px] text-[14px] leading-7 text-white/46">
                          {t(surface.text)}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DATA FLOW */}
      <section className="relative border-t border-white/[0.05] bg-[#101c28] py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-8 border border-white/[0.07] bg-[#0a151f]/60 p-7 md:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/45">
                  {t('yorukFlowKicker')}
                </div>

                <h2 className="mt-4 max-w-[420px] text-[28px] font-semibold leading-tight tracking-[-0.04em] text-white/92">
                  {t('yorukFlowTitle')}
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <FlowItem
                  number="01"
                  title={t('yorukFlowCollectTitle')}
                  text={t('yorukFlowCollectText')}
                />

                <FlowItem
                  number="02"
                  title={t('yorukFlowAnalyseTitle')}
                  text={t('yorukFlowAnalyseText')}
                />

                <FlowItem
                  number="03"
                  title={t('yorukFlowOutputTitle')}
                  text={t('yorukFlowOutputText')}
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
                  YÖRÜK
                </div>

                <h2 className="mt-5 max-w-[760px] text-[32px] font-semibold leading-[1.1] tracking-[-0.045em] text-white md:text-[42px]">
                  {t('yorukFinalCtaTitle')}
                </h2>

                <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-white/48">
                  {t('yorukFinalCtaText')}
                </p>
              </div>

              <Link
                to="/#contact"
                className="inline-flex min-h-[50px] w-fit shrink-0 items-center justify-center bg-blue-600 px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500"
              >
                {t('yorukCtaButton')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FlowItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-l border-white/[0.08] pl-5">
      <div className="text-[9px] tracking-[0.2em] text-white/24">
        {number}
      </div>

      <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.025em] text-white/88">
        {title}
      </h3>

      <p className="mt-3 text-[12px] leading-6 text-white/40">
        {text}
      </p>
    </div>
  );
}