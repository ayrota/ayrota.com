import { Container } from '../components/Container';
import { useLanguage } from '../lib/LanguageContext';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto text-sm text-muted leading-relaxed">
          <h1 className="text-2xl text-fg font-medium mb-6">
            {t('privacyTitle')}
          </h1>

          <p>{t('privacyIntro')}</p>

          <p className="mt-4">{t('privacyParagraph1')}</p>
          <p className="mt-4">{t('privacyParagraph2')}</p>
          <p className="mt-4">{t('privacyParagraph3')}</p>
          <p className="mt-4">{t('privacyParagraph4')}</p>
          <p className="mt-4">{t('privacyParagraph5')}</p>

          <p className="mt-4">{t('privacyConsent')}</p>

          <h2 className="mt-10 text-lg text-fg font-medium">
            {t('privacyCookieTitle')}
          </h2>

          <p className="mt-4">{t('privacyCookieText')}</p>
        </div>
      </Container>
    </div>
  );
}