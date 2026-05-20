import LegalPageLayout from '../components/LegalPageLayout'

const PHONE_DISPLAY = '(405) 312-3681'
const PHONE_HREF = 'tel:+14053123681'

export default function Terms() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p className="text-sm text-text-secondary">Last updated: May 2026</p>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">
          Independent Broker Services
        </h2>
        <p className="mt-3">
          Sincere Insurance Partners is an independent insurance brokerage serving
          Oklahoma. This website is operated by John Conner, a licensed insurance
          agent in Oklahoma. The site provides general information about insurance
          products and services. Nothing on this site constitutes legal, tax, or
          personalized financial advice.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">
          No Guarantee of Coverage
        </h2>
        <p className="mt-3">
          Insurance products are subject to availability, underwriting guidelines, and
          carrier approval. Quotes, comparisons, and plan descriptions are for
          informational purposes only and do not guarantee that you will be issued a
          policy or that specific benefits will apply to your situation.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">
          Medicare &amp; Government Programs
        </h2>
        <p className="mt-3">
          We are not affiliated with or endorsed by Medicare, Medicaid, or any United
          States government agency. For official Medicare information, visit{' '}
          <a
            href="https://www.medicare.gov"
            className="font-medium text-secondary transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medicare.gov
          </a>{' '}
          or call 1-800-MEDICARE (1-800-633-4227).
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">
          Limitation of Liability
        </h2>
        <p className="mt-3">
          To the fullest extent permitted by law, we are not liable for decisions you
          make based on information on this website. You are responsible for reviewing
          official plan documents, summaries of benefits, and carrier materials before
          enrolling.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">Contact</h2>
        <p className="mt-3">
          Questions about these terms? Call{' '}
          <a
            href={PHONE_HREF}
            className="font-medium text-secondary transition-colors hover:text-primary"
          >
            {PHONE_DISPLAY}
          </a>{' '}
          or return to the{' '}
          <a
            href="/#contact"
            className="font-medium text-secondary transition-colors hover:text-primary"
          >
            contact form
          </a>{' '}
          on our homepage.
        </p>
      </section>
    </LegalPageLayout>
  )
}
