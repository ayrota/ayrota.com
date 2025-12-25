import { Section } from '../components/Section';
import { Card } from '../components/Card';

export function Provisioning() {
  return (
    <Section id="provisioning" width="wide">
      <div className="text-xs tracking-widest uppercase text-muted">
        Provisioning
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        How the core is made available
      </h2>

      <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        The navigation core is productized software.
        Provisioning options are selected based on operational constraints,
        not convenience.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-fg">
            Embedded runtime
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            The core may be provided as an optimized embedded runtime,
            delivered with target devices and intended to run under
            real-time and resource constraints.
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-fg">
            Licensed SDK (controlled)
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            A controlled, licensed SDK may be used for development,
            evaluation, and system integration — scope-bound and
            interface-limited by design.
          </p>
        </Card>
      </div>

      <p className="mt-10 text-sm text-muted max-w-3xl">
        Cloud-backed workflows may be used to support training,
        benchmarking, and large-scale evaluation when permitted.
        All operational runtimes remain self-contained and
        independent of cloud infrastructure.
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}