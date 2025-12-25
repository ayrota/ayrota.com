import { Container } from '../components/Container';
import { usePhase } from '../lib/phaseContext';

export function Hero() {
  const phase = usePhase();
  const unsettled = phase === 'orientation' || phase === 'drift';

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          unsettled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(80% 60% at 60% 40%, rgba(75,107,136,0.12), transparent 70%)',
        }}
      />

      <Container className="pt-28 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-widest uppercase text-muted">
            IMU-only core
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-medium leading-[1.08]">
            AI-assisted motion estimation
            <br />
            <span className="text-fg/80">from IMU data only</span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-fg/85 max-w-2xl">
            Displacement and pose estimation designed for GNSS-denied and degraded operations.
          </p>

          <p className="mt-5 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
            Operational failure is expected.
            <br />
            Drift is inevitable.
            <br />
            Systems must converge under constraint — not assume ideal conditions.
          </p>

          <div className="mt-10 h-px bg-line/60 max-w-md" />
        </div>
      </Container>
    </section>
  );
}