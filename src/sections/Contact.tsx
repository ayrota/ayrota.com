import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-fg/10 bg-bg py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(80,145,190,0.10),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <div className="grid border-b border-fg/10 md:grid-cols-[0.75fr_1.25fr]">
            <div className="border-r border-fg/10 pb-12 pr-10 md:pb-16">
             

              <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-fg md:text-6xl">
                {t('contactTitle')}
              </h2>

              <div className="mt-12 border-t border-fg/10 pt-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-fg">
                  {t('corporateContactTitle')}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-fg/55">
                  {t('corporateContactDescription')}
                </p>
              </div>
            </div>

            <div className="pb-12 pt-10 md:pb-16 md:pl-10 md:pt-0">
              <form
                action="https://usebasin.com/f/acb4b7f09c8b"
                method="POST"
                className="grid gap-6"
              >
                <input type="text" name="_gotcha" className="hidden" />
<input type="hidden" name="_redirect" value="/" />
                <Field label={t('contactLabelOrg')}>
                  <input
                    type="text"
                    name="organization"
                    required
                    className="w-full border border-fg/10 bg-bg/50 px-4 py-3 text-sm text-fg outline-none transition focus:border-fg/35"
                  />
                </Field>

                <Field label={t('contactLabelEmail')}>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-fg/10 bg-bg/50 px-4 py-3 text-sm text-fg outline-none transition focus:border-fg/35"
                  />
                </Field>

                <Field label={t('contactLabelMessage')}>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full resize-none border border-fg/10 bg-bg/50 px-4 py-3 text-sm text-fg outline-none transition focus:border-fg/35"
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-6 border border-fg/25 px-6 py-3 text-[12px] font-semibold tracking-[0.1em] text-fg/85 transition hover:border-fg/60 hover:bg-fg/5"
                >
                  {t('contactSubmit')}
                  <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 overflow-hidden border border-fg/10">
            <div className="aspect-[16/7] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.541093264971!2d32.80525197619953!3d39.77949829417675!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345384af32c01%3A0x49942fbe68a82b2!2sAyrota%20Yaz%C4%B1l%C4%B1m%20Teknolojileri!5e1!3m2!1str!2str!4v1771837876022!5m2!1str!2str"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                title={t('contactMapTitle')}
              />
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
      <span className="mb-2 block text-[11px] font-medium tracking-[0.14em] text-fg/45">
        {label}
      </span>

      {children}
    </label>
  );
}