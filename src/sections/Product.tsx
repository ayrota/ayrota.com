import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useLanguage } from '../lib/LanguageContext';

export function Product() {
  const { t } = useLanguage();

  const modules = [

  t('productFeatureQcRepair'),
  t('productFeatureConsistency'),
  t('productFeatureCadence'),
  t('productFeatureSpectral'),
  t('productFeatureSensorDomain'),
  t('productFeaturePhysical'),
  t('productFeatureWindow'),
  t('productFeatureMotion'),
  t('productFeatureReport'),

];

  return (
    <Section id="product" width="wide">
      <div className="text-xs tracking-widest text-muted">
        {t('sectionProduct')}
      </div>

      <div className="mt-4 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-medium leading-tight">
            {t('productTitle')}
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
            {t('productIntro')}
          </p>

          <div className="mt-8 max-w-xl border-l border-line/60 pl-5">
  <p className="text-sm text-muted leading-relaxed">
    {t('productBody')}
  </p>
</div>

          <Link
            to="/ilber"
            className="mt-8 inline-flex items-center rounded-lg border border-line/70 bg-panel/50 px-5 py-2.5 text-sm text-fg backdrop-blur transition hover:bg-panel/80"
          >
            {t('productCta')}
          </Link>
        </div>

        <Card>
          <div className="text-[11px] tracking-[0.2em] text-muted">
            {t('productPreviewLabel')}
          </div>

          <div className="mt-5 space-y-3">
            {modules.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-md border border-line/50 bg-bg/30 px-3 py-2"
              >
                <span className="text-xs text-muted">
                  {item}
                </span>

            
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}