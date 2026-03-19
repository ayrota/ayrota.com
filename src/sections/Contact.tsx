import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" className="pb-24 md:pb-28 bg-bg/40">
      <h2 className="text-3xl md:text-5xl text-fg/95 font-medium leading-[1.08]">
        {t('contactTitle')}
      </h2>

      <p className="mt-6 text-sm text-muted max-w-xl leading-relaxed">
        {t('contactFraming')}
      </p>

      <div className="mt-20 space-y-20">

        {/* ACCESS MODES */}
        <div className="grid gap-14 md:grid-cols-3">

          <div>
            <h3 className="text-sm text-fg/90">
              {t('accessEvalTitle')}
            </h3>
            <p className="mt-4 text-[14px] text-muted/90 leading-[1.7]">
              {t('accessEvalText')}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-fg/90">
              {t('accessIntegrationTitle')}
            </h3>
            <p className="mt-4 text-[14px] text-muted/90 leading-[1.7]">
              {t('accessIntegrationText')}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-fg/90">
              {t('accessResearchTitle')}
            </h3>
            <p className="mt-4 text-[14px] text-muted/90 leading-[1.7]">
              {t('accessResearchText')}
            </p>
          </div>

        </div>

        {/* ORIGINAL CONTACT GRID */}
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="text-base md:text-lg text-fg">
              {t('internshipTitle')}
            </h3>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              {t('internshipDescription')}
            </p>
            <a
              href="https://forms.gle/Hp6EFHUxp3ZaJgzK7"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-fg"
            >
              {t('contactInternshipCta')}
            </a>

            <div className="mt-14">
              <h3 className="text-base md:text-lg text-fg">
                {t('corporateContactTitle')}
              </h3>
              <p className="mt-4 text-muted leading-relaxed max-w-md">
                {t('corporateContactDescription')}
              </p>
            </div>
          </div>

          <div>
            <form
              action="https://usebasin.com/f/acb4b7f09c8b"
              method="POST"
              className="grid gap-8"
            >
              <input type="text" name="_gotcha" className="hidden" />
              <input type="hidden" name="_redirect" value="/#contact" />

              <input
                type="text"
                name="organization"
                placeholder={t('contactLabelOrg')}
                required
                className="border-b border-line/60 bg-transparent py-3 text-sm outline-none placeholder:text-muted"
              />

              <input
                type="email"
                name="email"
                placeholder={t('contactLabelEmail')}
                required
                className="border-b border-line/60 bg-transparent py-3 text-sm outline-none placeholder:text-muted"
              />

              <textarea
                name="message"
                rows={5}
                placeholder={t('contactLabelMessage')}
                required
                className="border-b border-line/60 bg-transparent py-3 text-sm outline-none resize-none placeholder:text-muted"
              />

              <button
                type="submit"
                className="mt-4 text-sm text-muted hover:text-fg underline underline-offset-4"
              >
                {t('contactSubmit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}