import { motion } from 'framer-motion'
import { BadgeCheck, Briefcase, Phone, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { ctaHoverTap } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const TAGLINE = 'Medicare & Life Insurance, Without the Guesswork'
const PHONE_HREF = 'tel:+14053123681'
const PHONE_DISPLAY = '(405) 312-3681'

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed in Oklahoma' },
  { icon: Briefcase, label: 'Independent Broker' },
  { icon: BadgeCheck, label: 'No Cost to You' },
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="bg-background px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-left"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-sm font-semibold tracking-wide text-secondary uppercase"
          >
            Independent Insurance Advisor — Serving All of Oklahoma at No Cost to You
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {TAGLINE}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            I help Oklahoma families navigate Medicare and life insurance —
            without the confusion. As an independent broker, I compare plans
            from every major carrier to find what actually fits your life.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body text-base font-semibold text-accent"
              {...ctaHoverTap}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Me Now
            </motion.a>
            <motion.button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3.5 font-body text-base font-semibold text-primary transition-colors hover:bg-primary/5"
              {...ctaHoverTap}
            >
              Get a Free Quote
            </motion.button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 font-body text-sm font-medium text-text-primary"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-[18%] left-1/2 h-[72%] w-[95%] -translate-x-1/2 rounded-[50%] bg-gradient-to-br from-primary/20 via-primary/8 to-secondary/15 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-2 left-8 h-28 w-28 rounded-full bg-secondary/12 blur-sm"
          />

          <div className="relative bg-background">
            {!imgError ? (
              <img
                src="/images/headshot.jpg"
                alt="John Conner, independent insurance advisor"
                className="relative z-10 mx-auto w-full max-w-[22rem] object-contain object-bottom mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]"
                onError={() => setImgError(true)}
              />
            ) : (
              <motion.div
                className="flex aspect-[4/5] w-full max-w-[22rem] flex-col items-center justify-center px-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="font-heading text-5xl font-extrabold text-primary/30">
                  JC
                </span>
                <p className="mt-3 font-body text-sm text-text-secondary">
                  Add your headshot at{' '}
                  <code className="rounded bg-primary/8 px-1.5 py-0.5 text-xs text-primary">
                    public/images/headshot.jpg
                  </code>
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
