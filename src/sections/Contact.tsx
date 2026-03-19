import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" width="narrow">
      <div className="text-xs tracking-widest text-muted">
        {t('sectionContact')}
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        {t('contactTitle')}
      </h2>

      <form
        action="https://usebasin.com/f/acb4b7f09c8b"
        method="POST"
        className="mt-10 grid gap-6"
      >
        {/* Honeypot — spam guard */}
        <input type="text" name="_gotcha" className="hidden" />

        {/* Redirect back to contact section */}
        <input type="hidden" name="_redirect" value="/#contact" />

        <div>
          <label className="block text-xs text-muted mb-2">
            {t('contactLabelOrg')}
          </label>
          <input
            type="text"
            name="organization"
            required
            className="w-full rounded-md border border-line bg-panel/40 px-4 py-2 text-sm text-fg outline-none focus:border-line/80"
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
            className="w-full rounded-md border border-line bg-panel/40 px-4 py-2 text-sm text-fg outline-none focus:border-line/80"
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
            className="w-full rounded-md border border-line bg-panel/40 px-4 py-2 text-sm text-fg outline-none focus:border-line/80"
          />
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center rounded-lg border border-line/70 bg-panel/40 px-5 py-2 text-sm text-fg hover:bg-panel/55 transition-colors"
        >
          {t('contactSubmit')}
        </button>
      </form>

    </Section>
  );
}