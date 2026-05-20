import { motion } from 'framer-motion'
import { useState } from 'react'
import { ctaHoverTap, fadeUp, viewportOnce } from '../lib/motionPresets'

/* Connect this form to an email service (Mailchimp, ConvertKit,
   or Resend) when ready. For now showing UI state only. */

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      id="newsletter"
      className="bg-primary px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-xl text-center"
      >
        <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
          Stay Informed
        </p>
        <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-accent sm:text-4xl">
          Medicare Plans Change Every Year. Stay Ahead of It.
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-accent/75 sm:text-lg">
          Sign up to get plain-English updates on Medicare changes, enrollment
          windows, and plan comparisons — straight to your inbox, no spam.
        </p>

        {submitted ? (
          <p
            className="mt-10 font-body text-lg font-medium text-accent"
            role="status"
          >
            You&apos;re on the list. I&apos;ll be in touch before AEP season.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/20 bg-accent px-4 py-3.5 font-body text-base text-text-primary shadow-sm outline-none placeholder:text-text-secondary/60 focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
            <motion.button
              type="submit"
              className="mt-3 w-full cursor-pointer rounded-lg bg-secondary px-6 py-3.5 font-body text-sm font-semibold text-accent sm:text-base"
              {...ctaHoverTap}
            >
              Keep Me Informed
            </motion.button>
            <p className="mt-4 font-body text-xs text-accent/60 sm:text-sm">
              No spam. Unsubscribe anytime. Oklahoma residents only.
            </p>
          </form>
        )}

      </motion.div>
    </section>
  )
}
