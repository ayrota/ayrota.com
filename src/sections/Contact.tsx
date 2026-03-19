import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" width="narrow">
      {/* Section Header */}


      <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
        {t('contactTitle')}
      </h2>

      {/* Internship Priority Block */}
      <div className="mt-10 rounded-2xl border border-line/60 bg-panel/40 p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl md:text-2xl font-semibold">
          {t('internshipTitle')}
        </h3>

        <p className="mt-3 text-sm text-muted max-w-md">
          {t('internshipDescription')}
        </p>

        <a
          href="https://forms.gle/Hp6EFHUxp3ZaJgzK7"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl
                     border border-line bg-fg text-bg
                     px-6 py-3 text-sm font-medium
                     transition hover:opacity-90"
        >
          {t('contactInternshipCta')}
        </a>
      </div>

      {/* Corporate Contact Block */}
      <div className="mt-14 border-t border-line/50 pt-12">
        <h3 className="text-xl md:text-2xl font-semibold">
          {t('corporateContactTitle')}
        </h3>

        <p className="mt-3 text-sm text-muted max-w-md">
          {t('corporateContactDescription')}
        </p>

        <div className="mt-8 rounded-2xl border border-line/60 bg-panel/40 p-6 md:p-8 backdrop-blur-sm">
          <form
            action="https://usebasin.com/f/acb4b7f09c8b"
            method="POST"
            className="grid gap-6"
          >
            <input type="text" name="_gotcha" className="hidden" />
            <input type="hidden" name="_redirect" value="/#contact" />

            <div>
              <label className="block text-xs text-muted mb-2">
                {t('contactLabelOrg')}
              </label>
              <input
                type="text"
                name="organization"
                required
                className="w-full rounded-lg border border-line bg-panel/60 px-4 py-2.5 text-sm text-fg outline-none transition
                           focus:border-fg/40 focus:ring-1 focus:ring-fg/20"
              />
            </div>

            <div>
              <label className="block text-xs text-muted mb-2">
                {t('contactLabelEmail')}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-line bg-panel/60 px-4 py-2.5 text-sm text-fg outline-none transition
                           focus:border-fg/40 focus:ring-1 focus:ring-fg/20"
              />
            </div>

            <div>
              <label className="block text-xs text-muted mb-2">
                {t('contactLabelMessage')}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-line bg-panel/60 px-4 py-2.5 text-sm text-fg outline-none transition
                           focus:border-fg/40 focus:ring-1 focus:ring-fg/20 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl
                         border border-line bg-panel/60
                         px-5 py-2.5 text-sm font-medium text-fg
                         transition hover:bg-panel/80"
            >
              {t('contactSubmit')}
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 overflow-hidden rounded-2xl border border-line/60">
        <div className="aspect-[16/9] w-full">
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
    </Section>
  );
}