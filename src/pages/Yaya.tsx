import { Link } from 'react-router-dom';
import {
  Building2,
  Footprints,
  Map,
  Route,
  Warehouse,
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

type Application = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const CAPABILITIES: Capability[] = [
  {
    title: 'yayaCapabilityMovementTitle',
    text: 'yayaCapabilityMovementText',
    icon: Footprints,
  },
  {
    title: 'yayaCapabilityRouteTitle',
    text: 'yayaCapabilityRouteText',
    icon: Route,
  },
  {
    title: 'yayaCapabilityContextTitle',
    text: 'yayaCapabilityContextText',
    icon: Map,
  },
];

const APPLICATIONS: Application[] = [
  {
    title: 'yayaHospitalTitle',
    text: 'yayaHospitalText',
    icon: Building2,
  },
  {
    title: 'yayaDepotTitle',
    text: 'yayaDepotText',
    icon: Warehouse,
  },
];

export default function Yaya() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 bg-[#09131d] text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[8%] top-[16%] h-[480px] w-[520px] rounded-full bg-cyan-400/[0.035] blur-[160px]" />

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
                    {t('yayaProductCategory')}
                  </span>
                </div>

<div className="mt-6 text-[18px] font-semibold tracking-[0.26em] text-cyan-300/80">
  YAYA
</div>

                <h1 className="mt-5 max-w-[700px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#eef3f7] md:text-[60px]">
                  {t('yayaHeroStatement')}
                </h1>

                <p className="mt-7 max-w-[620px] text-[16px] leading-8 text-white/54">
                  {t('yayaHeroText')}
                </p>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('yayaMiniMovement')}
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('yayaMiniRoute')}
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/36">
                    {t('yayaMiniMobile')}
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
                  src="/products/yaya.png"
                  alt="Yaya indoor movement intelligence"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,14,22,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09131d]/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 border-l border-cyan-200/25 pl-4">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
                    {t('yayaVisualKicker')}
                  </div>

                  <div className="mt-2 text-[12px] text-white/50">
                    {t('yayaVisualText')}
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
                  {t('yayaProblemKicker')}
                </div>

                <h2 className="mt-5 max-w-[560px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                  {t('yayaProblemTitle')}
                </h2>
              </div>

              <div className="max-w-[700px] lg:justify-self-end">
                <p className="text-[16px] leading-8 text-white/52">
                  {t('yayaProblemText')}
                </p>

                <div className="mt-8 border-l border-cyan-200/20 pl-6">
                  <p className="text-[14px] leading-7 text-white/40">
                    {t('yayaProblemNote')}
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
                {t('yayaScopeTitle')}
              </div>

              <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                {t('yayaScopeMainTitle')}
              </h2>

              <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-white/50">
                {t('yayaScopeText')}
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

      {/* APPLICATION SURFACES */}
      <section className="relative border-t border-white/[0.05] bg-[#0c1721] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-100/55">
                  {t('yayaApplicationsKicker')}
                </div>

                <h2 className="mt-5 max-w-[590px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                  {t('yayaApplicationsTitle')}
                </h2>
              </div>

              <p className="max-w-[650px] text-[15px] leading-7 text-white/48 lg:justify-self-end">
                {t('yayaApplicationsLead')}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {APPLICATIONS.map((application, index) => {
              const Icon = application.icon;

              return (
                <Reveal
                  key={application.title}
                  delay={0.06 + index * 0.06}
                >
                  <article className="group relative min-h-[320px] overflow-hidden border border-white/[0.07] bg-[#09131d] p-7 md:p-9">
                    <div
                      aria-hidden
                      className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-cyan-300/[0.025] blur-[80px]"
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
                          {t(application.title)}
                        </h3>

                        <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-white/46">
                          {t(application.text)}
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

      {/* PILOT */}
      <section className="relative border-t border-white/[0.05] bg-[#101c28] py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-8 border border-white/[0.07] bg-[#0a151f]/60 p-7 md:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/45">
                  {t('yayaPilotKicker')}
                </div>

                <h2 className="mt-4 max-w-[400px] text-[28px] font-semibold leading-tight tracking-[-0.04em] text-white/92">
                  {t('yayaPilotTitle')}
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <PilotItem
                  number="01"
                  title={t('yayaPilotScopeTitle')}
                  text={t('yayaPilotScopeText')}
                />

                <PilotItem
                  number="02"
                  title={t('yayaPilotCollectTitle')}
                  text={t('yayaPilotCollectText')}
                />

                <PilotItem
                  number="03"
                  title={t('yayaPilotReportTitle')}
                  text={t('yayaPilotReportText')}
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
                  YAYA
                </div>

                <h2 className="mt-5 max-w-[760px] text-[32px] font-semibold leading-[1.1] tracking-[-0.045em] text-white md:text-[42px]">
                  {t('yayaFinalCtaTitle')}
                </h2>

                <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-white/48">
                  {t('yayaFinalCtaText')}
                </p>
              </div>

              <Link
                to="/#contact"
                className="inline-flex min-h-[50px] w-fit shrink-0 items-center justify-center bg-blue-600 px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500"
              >
                {t('yayaCtaButton')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PilotItem({
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