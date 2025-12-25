import { Section } from '../components/Section';
import { Card } from '../components/Card';

export function Engagements() {
  return (
    <Section id="engagements" width="wide">
      <div className="text-xs tracking-widest uppercase text-muted">
        Engagements
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        Product-first, scope-bound evaluation
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-fg">Evaluation window</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Drift, noise response, and failure behavior are assessed within a defined window.
          </p>
          <div className="mt-4 text-xs text-muted">NDA-first · scope-bound</div>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-fg">Integration alignment</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Integration is supported only to validate fit and control interfaces —
            not as open-ended customization.
          </p>
          <div className="mt-4 text-xs text-muted">Fit assessment · handover-ready</div>
        </Card>
      </div>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}