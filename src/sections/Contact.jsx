import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SectionHeader from '../components/SectionHeader'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const PHONE_DISPLAY = '(405) 312-3681'
const PHONE_HREF = 'tel:+14053123681'
const EMAIL = 'john@sincereinsurancepartners.com'
const EMAIL_HREF = 'mailto:john@sincereinsurancepartners.com'
const FACEBOOK_URL = '#'
const LINKEDIN_URL = '#'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div
        className="absolute top-0 right-0 left-0 h-1.5 bg-primary"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Let&apos;s Find You the Right Coverage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
            No pressure. No jargon. Just a real conversation about what makes
            sense for you.
          </p>
        </SectionHeader>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.52, delay: 0.1, ease: easeOut }}
          className="mt-10 grid grid-cols-1 gap-10 md:mt-12 lg:grid-cols-2 lg:gap-16"
        >
          <div className="space-y-8">
            <div>
              <motion.a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 font-heading text-3xl font-extrabold text-primary sm:text-4xl"
                {...ctaHoverTap}
              >
                <Phone className="h-9 w-9 shrink-0 text-secondary" aria-hidden />
                {PHONE_DISPLAY}
              </motion.a>
              <p className="mt-2 font-body text-sm text-text-secondary">
                Available Mon–Fri, 9am–6pm
              </p>
            </div>

            <div className="space-y-5">
              <motion.a
                href={EMAIL_HREF}
                className="flex items-center gap-3 font-body text-base text-text-primary"
                {...ctaHoverTap}
              >
                <Mail className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
                {EMAIL}
              </motion.a>
              <p className="flex items-center gap-3 font-body text-base text-text-primary">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
                Serving All of Oklahoma
              </p>
            </div>

            <div className="flex gap-4">
              <motion.a
                href={FACEBOOK_URL}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 text-primary"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                {...ctaHoverTap}
              >
                <FacebookIcon className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={LINKEDIN_URL}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 text-primary"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                {...ctaHoverTap}
              >
                <LinkedInIcon className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
