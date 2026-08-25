import {
  Building2,
  Factory,
  Shield,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

type Application = {
  title: string;
  text: string;
  detail: string;
  image: string;
  icon: LucideIcon;
};

const APPLICATIONS: Application[] = [
  {
    title: 'applicationDefenseTitle',
    text: 'applicationDefenseText',
    detail: 'applicationDefenseDetail',
    image: '/applications/defense.png',
    icon: Shield,
  },
  {
    title: 'applicationDualUseTitle',
    text: 'applicationDualUseText',
    detail: 'applicationDualUseDetail',
    image: '/applications/dual-use.png',
    icon: Factory,
  },
  {
    title: 'applicationCivilTitle',
    text: 'applicationCivilText',
    detail: 'applicationCivilDetail',
    image: '/applications/civil.png',
    icon: Building2,
  },
];

export function Applications() {
  const { t } = useLanguage();

  return (
    <section
      id="applications"
      className="relative overflow-hidden bg-[#16202b] py-20 text-white md:py-24"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-360px] h-[900px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(96,165,250,0.055)_0%,rgba(96,165,250,0.02)_38%,transparent_70%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.016)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,33,50,0.02)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cyan-200/30" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/65">
                {t('applicationsKicker')}
              </span>

              <span className="h-px w-8 bg-cyan-200/30" />
            </div>

            <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#eef3f7] md:text-[32px]">
              {t('applicationsTitle')}
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-white/58">
              {t('applicationsLead')}
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-11 grid items-stretch gap-5 lg:grid-cols-3">
          {APPLICATIONS.map((application, index) => {
            const Icon = application.icon;

            return (
              <Reveal
                key={application.title}
                delay={index * 0.06}
                className="h-full"
              >
                <article className="group relative flex h-full min-h-[390px] overflow-hidden bg-[#0d1620] shadow-[0_16px_46px_rgba(0,0,0,0.12)]">
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url("${application.image}")`,
                    }}
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,20,0.06)_0%,rgba(3,10,20,0.18)_42%,rgba(3,10,20,0.82)_100%)]" />

                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,20,0.12),transparent_72%)]" />

                  <div className="absolute inset-0 bg-[#10263a]/[0.05]" />

                  <div className="pointer-events-none absolute inset-0 border border-white/[0.07] transition-colors duration-300 group-hover:border-cyan-100/18" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full w-full flex-col p-7 md:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center border border-white/[0.10] bg-[#0a131d]/85 text-cyan-100/60">
                        <Icon
                          size={18}
                          strokeWidth={1.4}
                        />
                      </div>

                      <span className="text-[9px] font-medium tracking-[0.22em] text-white/28">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-[26px] font-semibold tracking-[-0.04em] text-white">
                        {t(application.title)}
                      </h3>

                      <p className="mt-4 min-h-[78px] max-w-[390px] text-[14px] leading-7 text-white/64">
                        {t(application.text)}
                      </p>

                      <div className="mt-6 border-t border-white/[0.09] pt-5">
                        <div className="min-h-[34px]">
                          <span className="text-[10px] leading-5 text-white/42">
                            {t(application.detail)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom */}
        <Reveal delay={0.12}>
          <div className="mt-9 border-t border-white/[0.08] pt-6">
            <p className="mx-auto max-w-[760px] text-center text-[13px] leading-6 text-white/40">
              {t('applicationsBottomText')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}