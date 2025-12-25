import { Section } from '../components/Section';

export function Contact() {
  return (
    <Section id="contact" width="narrow">
      <div className="text-xs tracking-widest uppercase text-muted">
        Contact
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        Submit an evaluation request
      </h2>

      <p className="mt-6 text-sm md:text-base text-muted leading-relaxed">
        This channel is intended for serious evaluation inquiries only.
        <br />
        High-level context is sufficient at this stage.
      </p>

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
            Organization / Project
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
            Contact email
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
            Your inquiry
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Environment, constraints, timeline…"
            className="w-full rounded-md border border-line bg-panel/40 px-4 py-2 text-sm text-fg outline-none focus:border-line/80"
          />
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center rounded-lg border border-line/70 bg-panel/40 px-5 py-2 text-sm text-fg hover:bg-panel/55 transition-colors"
        >
          Submit inquiry
        </button>
      </form>

      <div className="mt-6 text-xs text-muted">
        NDA-first · scope-bound · response is not guaranteed
      </div>
    </Section>
  );
}