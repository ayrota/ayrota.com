import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useLanguage } from '../lib/LanguageContext';

export function Product() {
  const { t } = useLanguage();

  return (
    <Section id="product" width="wide">
      <div className="text-xs tracking-widest text-muted">
        {t('sectionProduct')}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {/* İLBER */}
        <Card>
          <div className="flex h-full flex-col">

            <h2 className="mt-5 text-2xl md:text-3xl font-medium leading-tight">
              {t('productTitle')}
            </h2>

            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
              {t('productIntro')}
            </p>

            <div className="mt-8 border-l border-line/60 pl-5">
              <p className="text-sm text-muted leading-relaxed">
                {t('productBody')}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/ilber"
                className="inline-flex items-center rounded-lg border border-line/70 bg-panel/50 px-5 py-2.5 text-sm text-fg backdrop-blur transition hover:bg-panel/80"
              >
                {t('productCta')}
              </Link>
            </div>
          </div>
        </Card>

        {/* YÖRÜK */}
        <Card>
          <div className="flex h-full flex-col">


            <h2 className="mt-5 text-2xl md:text-3xl font-medium leading-tight">
              {t('yorukTitle')}
            </h2>

            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
              {t('yorukIntro')}
            </p>

            <div className="mt-8 border-l border-line/60 pl-5">
              <p className="text-sm text-muted leading-relaxed">
                {t('yorukBody')}
              </p>
            </div>

          </div>
        </Card>
      </div>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}