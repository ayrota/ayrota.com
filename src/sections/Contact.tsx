import { MapPin, Send } from 'lucide-react';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09131d] py-20 text-white md:py-24"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[8%] top-[5%] h-[500px] w-[560px] rounded-full bg-blue-500/[0.035] blur-[170px]" />

        <div className="absolute right-[10%] bottom-[-160px] h-[520px] w-[600px] rounded-full bg-cyan-300/[0.02] blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* LEFT */}
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

              {/* Guidance */}
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

          {/* FORM */}
          <Reveal delay={0.08}>
            <div className="border border-white/[0.08] bg-[#0b1621]/70 p-6 md:p-8">
              <form
                action="https://usebasin.com/f/acb4b7f09c8b"
                method="POST"
                className="grid gap-6"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  type="hidden"
                  name="_redirect"
                  value="/"
                />

                {/* Organisation + Email */}
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

                {/* Product */}
                <Field label={t('contactLabelProduct')}>
                  <select
                    name="product"
                    defaultValue=""
                    className="w-full border-0 border-b border-white/[0.12] bg-transparent px-0 py-3 text-[14px] text-white outline-none transition focus:border-cyan-200/45"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#0b1621] text-white/50"
                    >
                      {t('contactPlaceholderProduct')}
                    </option>

                    <option
                      value="ALKON"
                      className="bg-[#0b1621] text-white"
                    >
                      ALKON
                    </option>

                    <option
                      value="YAYA"
                      className="bg-[#0b1621] text-white"
                    >
                      YAYA
                    </option>

                    <option
                      value="YORUK"
                      className="bg-[#0b1621] text-white"
                    >
                      YÖRÜK
                    </option>

                    <option
                      value="UNSURE"
                      className="bg-[#0b1621] text-white"
                    >
                      {t('contactProductUnsure')}
                    </option>
                  </select>
                </Field>

                {/* Message */}
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

        {/* Location */}
        <Reveal delay={0.12}>
          <div className="mt-12 grid border-t border-white/[0.07] pt-7 md:grid-cols-[0.65fr_1.35fr] md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-white/[0.09] text-cyan-100/50">
                <MapPin
                  size={17}
                  strokeWidth={1.4}
                />
              </div>

              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/28">
                  {t('contactLocationKicker')}
                </div>

                <div className="mt-1 text-[13px] text-white/55">
                  {t('contactLocationText')}
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden border border-white/[0.07] md:mt-0">
              <div className="h-[150px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.541093264971!2d32.80525197619953!3d39.77949829417675!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345384af32c01%3A0x49942fbe68a82b2!2sAyrota%20Yaz%C4%B1l%C4%B1m%20Teknolojileri!5e1!3m2!1str!2str!4v1771837876022!5m2!1str!2str"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 invert-[0.9] hue-rotate-180 saturate-[1.05] brightness-[0.55] contrast-[1.15]"
                  title={t('contactMapTitle')}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
        {label}
      </span>

      <div className="mt-1">{children}</div>
    </label>
  );
}