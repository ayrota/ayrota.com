import { Section } from '../components/Section';

export function Approach() {
  return (
    <Section id="approach" width="narrow">
      <div className="text-xs tracking-widest uppercase text-muted">
        Approach
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        Failure-first thinking
      </h2>

      <p className="mt-6 text-sm md:text-base text-muted leading-relaxed">
        We treat failure, drift, and degradation as baseline conditions —
        not edge cases.
        <br />
        Our work starts by constraining the problem space and observing
        how systems behave when ideal assumptions break down.
      </p>

      <p className="mt-6 text-sm md:text-base text-muted leading-relaxed">
        This approach shapes both the core technology and every operational
        extension built on top of it.
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}