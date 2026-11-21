import { ArrowUpRight, MapPin, Send } from 'lucide-react';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

export function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09131d] py-20 text-white md:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4%] top-[-4%] h-[780px] w-[820px] bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,rgba(59,130,246,0.015)_38%,transparent_70%)]" />

        <div className="absolute bottom-[-260px] right-[-5%] h-[820px] w-[860px] bg-[radial-gradient(circle,rgba(103,232,249,0.025)_0%,rgba(103,232,249,0.01)_38%,transparent_70%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <div className="flex h-full flex-col">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-200/35" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/60">
                    {t('contactKicker')}
                  </span>
                </div>

                <h2 className="mt-6 max-w-[600px] text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#eef3f7] md:text-[52px]">
                  {t('contactTitle')}
                </h2>

                <p className="mt-7 max-w-[520px] text-[15px] leading-8 text-white/50">
                  {t('contactLead')}
                </p>
              </div>

              <div className="mt-12 border-t border-white/[0.08] pt-7 lg:mt-auto">
                <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">
                  {t('contactProjectKicker')}
                </div>

                <p className="mt-3 max-w-[470px] text-[13px] leading-6 text-white/42">
                  {t('contactProjectText')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-white/[0.08] bg-[#0b1621]/70 p-6 md:p-8">
              <form
                action="https://usebasin.com/f/acb4b7f09c8b"
                method="POST"
                className="grid gap-6"
              >
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input type="hidden" name="_redirect" value="/" />

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label={t('contactLabelOrg')}>
                    <input
                      type="text"
                      name="organization"
                      required
                      placeholder={t('contactPlaceholderOrg')}
                      className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-3 text-[14px] text-white outline-none transition placeholder:text-white/24 focus:border-cyan-200/45"
                    />
                  </Field>

                  <Field label={t('contactLabelEmail')}>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t('contactPlaceholderEmail')}
                      className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-3 text-[14px] text-white outline-none transition placeholder:text-white/24 focus:border-cyan-200/45"
                    />
                  </Field>
                </div>

                <Field label={t('contactLabelProduct')}>
                  <select
                    name="product"
                    defaultValue=""
                    className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-3 text-[14px] text-white outline-none transition focus:border-cyan-200/45"
                  >
                    <option value="" disabled className="bg-[#0b1621] text-white/50">
                      {t('contactPlaceholderProduct')}
                    </option>

                    <option value="ALKON" className="bg-[#0b1621] text-white">
                      ALKON
                    </option>

                    <option value="YAYA" className="bg-[#0b1621] text-white">
                      YAYA
                    </option>

                    <option value="UNSURE" className="bg-[#0b1621] text-white">
                      {t('contactProductUnsure')}
                    </option>
                  </select>
                </Field>

                <Field label={t('contactLabelMessage')}>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={t('contactPlaceholderMessage')}
                    className="w-full resize-none border-0 border-b border-white/[0.12] bg-transparent px-0 py-3 text-[14px] leading-7 text-white outline-none transition placeholder:text-white/24 focus:border-cyan-200/45"
                  />
                </Field>

                <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[390px] text-[10px] leading-5 text-white/28">
                    {t('contactPrivacyNote')}
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-8 bg-blue-600 px-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-blue-500"
                  >
                    {t('contactSubmit')}

                    <Send
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-14 grid gap-5 border-t border-white/[0.07] pt-8 lg:grid-cols-[0.63fr_1.37fr]">
            <div className="flex min-h-[195px] flex-col justify-between border border-white/[0.08] bg-[#0b1621]/70 p-6 sm:p-8 lg:min-h-[380px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center border border-white/[0.10] bg-[#0e1d2b] text-cyan-100/65">
                  <MapPin size={20} strokeWidth={1.4} />
                </div>

                <div className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/55">
                  {t('contactLocationKicker')}
                </div>

                <div className="mt-3 text-[25px] font-medium tracking-[-0.035em] text-[#eef3f7] sm:text-[28px]">
                  {t('contactLocationText')}
                </div>
              </div>

              <a
                href="https://www.google.com/maps/@39.7795855,32.8070141,748m/data=!3m1!1e3"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-cyan-100/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-100/65 transition-colors hover:border-cyan-100/50 hover:text-cyan-100"
              >
                {lang === 'tr' ? 'HARİTADA AÇ' : 'OPEN MAP'}

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="relative h-[300px] overflow-hidden border border-white/[0.09] bg-[#0b1621] sm:h-[350px] lg:h-[380px]">
              <iframe
                src={`/contact-map.html?lang=${lang}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
                title={t('contactMapTitle')}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
        {label}
      </span>

      <div className="mt-1">{children}</div>
    </label>
  );
}
