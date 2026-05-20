import LegalPageLayout from '../components/LegalPageLayout'

const PHONE_DISPLAY = '(405) 312-3681'
const PHONE_HREF = 'tel:+14053123681'
const EMAIL = 'Johnconnercw@icloud.com'
const EMAIL_HREF = 'mailto:Johnconnercw@icloud.com'

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="text-sm text-text-secondary">Last updated: May 2026</p>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">
          Information We Collect
        </h2>
        <p className="mt-3">
          When you submit our contact form, we collect the information you provide,
          including your name, phone number, and email address. We may also receive
          any optional details you choose to include in your message.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">
          How We Use It
        </h2>
        <p className="mt-3">
          We use your contact information to respond to your inquiry and to discuss
          insurance options that may fit your needs. We do not use your information
          for unrelated marketing without your consent.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">
          We Do Not Sell Your Information
        </h2>
        <p className="mt-3">
          We do not sell, rent, or trade your personal information to third parties
          for their own marketing purposes.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-primary">Contact Us</h2>
        <p className="mt-3">
          If you have questions about this privacy policy or how we handle your
          information, please contact us:
        </p>
        <ul className="mt-3 list-none space-y-2 p-0">
          <li>
            Phone:{' '}
            <a
              href={PHONE_HREF}
              className="font-medium text-secondary transition-colors hover:text-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            Email:{' '}
            <a
              href={EMAIL_HREF}
              className="font-medium text-secondary transition-colors hover:text-primary"
            >
              {EMAIL}
            </a>
          </li>
        </ul>
      </section>
    </LegalPageLayout>
  )
}
