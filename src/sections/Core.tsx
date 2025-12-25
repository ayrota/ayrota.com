import { Section } from '../components/Section';
import { Card } from '../components/Card';

export function Core() {
  return (
    <Section id="core" width="wide">
      <div className="text-xs tracking-widest uppercase text-muted">
        The Core
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        One core.
        <br />
        <span className="text-fg/80">Operational extensions — by necessity.</span>
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-fg">
            IMU-only AI-assisted estimation core
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Displacement and pose estimation from IMU signals only —
            structured to remain bounded as drift accumulates.
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-fg">
            Delivered as productized software
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Available as licensed software. May be provided as a controlled,
            licensed SDK for development/evaluation, or as an optimized embedded
            runtime for target devices.
          </p>
        </Card>
      </div>

      {/* Kabuklar: akış — liste değil */}
      <p className="mt-10 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        On top of the core, operational shells can be used to reconstruct a dead-reckoned path,
        compute navigation commands for a predefined route, and interface with ROS
        (IMU input and command output) when required by the mission system.
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}