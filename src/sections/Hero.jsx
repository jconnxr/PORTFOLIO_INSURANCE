import { motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
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
  'Licensed in Oklahoma',
  'Independent Broker',
  'No Cost to You',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-4 py-16 sm:px-6 md:py-20 lg:py-24"
      style={{
        background:
          'linear-gradient(135deg, #0A2342 0%, #0d2d54 30%, #dbeafe 68%, #f8fafc 100%)',
      }}
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
            className="font-body text-sm font-semibold tracking-wide uppercase"
            style={{ color: '#93c5fd' }}
          >
            Independent Insurance Advisor · All of Oklahoma
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {TAGLINE}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed md:text-xl"
            style={{ color: '#cbd5e1' }}
          >
            Sincere Insurance Partners helps Oklahomans find Medicare and life
            insurance coverage that actually fits — from an independent broker who
            works for you, not the carriers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3.5 font-body text-base font-semibold text-white"
              {...ctaHoverTap}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Us Now
            </motion.a>
            <motion.button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3.5 font-body text-base font-semibold text-white transition-colors hover:bg-white/10"
              {...ctaHoverTap}
            >
              Get a Free Quote
            </motion.button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex list-none flex-col gap-2.5 p-0 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {trustBadges.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2 font-body text-sm text-white"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-white"
                  aria-hidden
                />
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
          className="mx-auto h-full w-full max-w-lg lg:max-w-none lg:justify-self-end"
        >
          <div className="flex h-full items-center justify-center">
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div
                style={{
                  width: '6px',
                  height: '88px',
                  background: '#3B82F6',
                  borderRadius: '2px',
                  flexShrink: 0,
                }}
                aria-hidden
              />
              <div>
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 'clamp(56px, 6.5vw, 80px)',
                    fontWeight: 400,
                    color: '#0A2342',
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Sincere
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 'clamp(14px, 1.45vw, 16px)',
                    fontWeight: 500,
                    color: '#3B82F6',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginTop: '8px',
                  }}
                >
                  Insurance Partners
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
