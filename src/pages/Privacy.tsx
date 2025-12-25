import { Container } from '../components/Container';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto text-sm text-muted leading-relaxed">
          <h1 className="text-2xl text-fg font-medium mb-6">
            Privacy & Data Notice
          </h1>

          <p>
            Ayrota collects limited personal data solely for the purpose of
            evaluating incoming inquiries.
          </p>

          <p className="mt-4">
            Data collected via the contact form may include organization or
            project name, contact email address, and high-level inquiry context.
          </p>

          <p className="mt-4">
            This website does not perform tracking, profiling, or marketing
            analytics.
          </p>

          <p className="mt-4">
            Form submissions are processed through a third-party form handling
            service (Basin) and stored securely for review. Data is not shared
            with third parties for marketing purposes.
          </p>

          <p className="mt-4">
            Personal data is retained only as long as necessary to assess
            potential engagement and is deleted periodically.
          </p>

          <p className="mt-4">
            Where applicable, data handling complies with KVKK and GDPR.
          </p>

          <p className="mt-4">
            By submitting the contact form, you acknowledge and consent to this
            data processing for evaluation purposes.
          </p>

          <h2 className="mt-10 text-lg text-fg font-medium">
            Cookie Notice
          </h2>

          <p className="mt-4">
            This website does not use tracking or marketing cookies.
            Any technical cookies used are strictly required for basic
            functionality and security.
          </p>
        </div>
      </Container>
    </div>
  );
}