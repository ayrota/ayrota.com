import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-bg py-8 md:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(56,189,248,0.055),transparent_46%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,10,18,0.18),rgba(5,10,18,0.48))]" />
      <div className="absolute bottom-0 left-0 h-[45%] w-[42%] bg-[radial-gradient(circle_at_18%_80%,rgba(56,189,248,0.10),transparent_52%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="lg:border-r lg:border-fg/10 lg:pr-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-cyan-300/85" />

                <span className="text-[11px] font-medium tracking-[0.24em] text-fg/70">
                  {t('contactKicker')}
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-fg md:text-[56px] lg:text-[62px]">
                {t('contactTitle')}
              </h2>

              <div className="mt-7 border-t border-fg/10 pt-5">
                <p className="max-w-md text-[15px] leading-7 text-fg/60">
                  {t('corporateContactDescription')}
                </p>
              </div>
            </div>

            <div>
              <form
                action="https://usebasin.com/f/acb4b7f09c8b"
                method="POST"
                className="grid gap-4"
              >
                <input type="text" name="_gotcha" className="hidden" />
                <input type="hidden" name="_redirect" value="/" />

                <Field label={t('contactLabelOrg')}>
                  <input
                    type="text"
                    name="organization"
                    required
                    placeholder={t('contactPlaceholderOrg')}
                    className="w-full border border-fg/15 bg-bg/40 px-5 py-3 text-[15px] text-fg outline-none transition placeholder:text-fg/35 focus:border-cyan-300/55"
                  />
                </Field>

                <Field label={t('contactLabelEmail')}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t('contactPlaceholderEmail')}
                    className="w-full border border-fg/15 bg-bg/40 px-5 py-3 text-[15px] text-fg outline-none transition placeholder:text-fg/35 focus:border-cyan-300/55"
                  />
                </Field>

                <Field label={t('contactLabelMessage')}>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder={t('contactPlaceholderMessage')}
                    className="w-full resize-none border border-fg/15 bg-bg/40 px-5 py-3.5 text-[15px] text-fg outline-none transition placeholder:text-fg/35 focus:border-cyan-300/55"
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-10 border border-fg/30 px-7 py-3 text-[12px] font-semibold tracking-[0.14em] text-fg/90 transition hover:border-cyan-300/60 hover:bg-cyan-300/5 hover:text-fg"
                >
                  {t('contactSubmit')}
                  <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 overflow-hidden rounded-md border border-fg/10 shadow-[0_0_48px_rgba(34,211,238,0.05)]">
            <div className="h-[180px] w-full md:h-[220px] lg:h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.541093264971!2d32.80525197619953!3d39.77949829417675!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345384af32c01%3A0x49942fbe68a82b2!2sAyrota%20Yaz%C4%B1l%C4%B1m%20Teknolojileri!5e1!3m2!1str!2str!4v1771837876022!5m2!1str!2str"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 invert-[0.9] hue-rotate-180 saturate-[1.15] brightness-[0.62] contrast-[1.15]"
                title={t('contactMapTitle')}
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
      <span className="mb-2 block text-[11px] font-medium tracking-[0.18em] text-fg/65">
        {label}
      </span>

      {children}
    </label>
  );
}
