/**
 * Footer — site-wide contact & legal strip
 *
 * To rebrand for an agency (without changing layout):
 * - Update BROKER_WORDMARK below (e.g. "Conner Insurance Group")
 * - Update BROKER_TAGLINE if needed
 * - Update COPYRIGHT_HOLDER to match the legal entity name in the bottom bar
 * - Optionally sync PHONE_DISPLAY / PHONE_HREF with Contact.jsx or move
 *   shared values to a small constants file (e.g. src/site.js)
 */

import { motion } from 'framer-motion'
import { scrollToSection } from '../utils/scrollToSection'
import { viewportOnce } from '../lib/motionPresets'

const BROKER_WORDMARK = 'John Conner'
const BROKER_TAGLINE =
  'Independent Insurance Broker · Licensed in Oklahoma'

const COPYRIGHT_HOLDER = 'John Conner'
const PHONE_DISPLAY = '(405) 312-3681'
const PHONE_HREF = 'tel:+14053123681'
const FACEBOOK_URL = '#'
const LINKEDIN_URL = '#'

const FOOTER_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

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

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-primary text-accent"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold tracking-tight text-accent sm:text-2xl">
              {BROKER_WORDMARK}
            </p>
            <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-accent/75 md:max-w-none">
              {BROKER_TAGLINE}
            </p>
          </div>

          <nav
            className="flex flex-col items-center gap-3"
            aria-label="Quick links"
          >
            <ul className="flex list-none flex-col items-center gap-2 p-0 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
              {FOOTER_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(id)
                    }}
                    className="font-body text-sm font-medium text-accent/90 transition-colors hover:text-secondary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-right">
            <a
              href={PHONE_HREF}
              className="inline-block font-heading text-lg font-bold text-accent transition-colors hover:text-secondary sm:text-xl"
            >
              {PHONE_DISPLAY}
            </a>
            <div className="mt-4 flex justify-center gap-3 md:justify-end">
              <a
                href={FACEBOOK_URL}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-accent transition-colors hover:bg-secondary hover:text-accent"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-accent transition-colors hover:bg-secondary hover:text-accent"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 font-body text-sm text-accent/75">
              Serving clients across all of Oklahoma
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-center font-body text-xs leading-relaxed text-accent/65 sm:text-sm">
            © 2026 {COPYRIGHT_HOLDER}. All rights reserved. | Insurance products are
            subject to plan availability. This site is not affiliated with or
            endorsed by Medicare or any government agency.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
