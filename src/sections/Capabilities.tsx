import { Section } from '../components/Section';
import { Card } from '../components/Card';

export function Capabilities() {
  return (
    <Section id="capabilities" width="wide">
      <div className="text-xs tracking-widest uppercase text-muted">
        Capabilities
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        What survives degraded conditions
      </h2>

      <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        We focus on what survives drift and failure — not on ideal benchmarks.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-fg">Drift-aware estimation</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Predictable behavior as inertial drift accumulates, with controlled degradation
            under noise and bias growth.
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-fg">Real-time embedding posture</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Designed to run on constrained edge devices (e.g., Jetson / Raspberry-class),
            within operational latency limits.
          </p>
        </Card>
      </div>

      <p className="mt-10 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        Interfaces are structured for controlled embedding. When integration requires it,
        the ROS I/O shell can be used without turning the core into a ROS product.
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}