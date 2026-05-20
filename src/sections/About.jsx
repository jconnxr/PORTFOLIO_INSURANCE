// NOTE: Update name and bio to agency name when rebranding

import { motion } from 'framer-motion'
import { easeOut, viewportOnce } from '../lib/motionPresets'

const stats = [
  { title: 'All of Oklahoma', sub: 'Licensed Statewide' },
  { title: '6+ Carriers', sub: 'Medicare Plans Compared' },
  { title: 'No Cost', sub: 'My Services Are Free to You' },
]

export default function About() {
  return (
    <section id="about" className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: easeOut }}
            className="relative order-2 min-h-[280px] overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[#051525] shadow-lg shadow-primary/20 lg:order-1 lg:min-h-[420px]"
            aria-hidden
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    -12deg,
                    transparent,
                    transparent 18px,
                    rgba(255, 255, 255, 0.06) 18px,
                    rgba(255, 255, 255, 0.06) 19px
                  ),
                  repeating-linear-gradient(
                    78deg,
                    transparent,
                    transparent 22px,
                    rgba(59, 130, 246, 0.08) 22px,
                    rgba(59, 130, 246, 0.08) 23px
                  )
                `,
              }}
            />
            <div className="pointer-events-none absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-secondary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-2/5 w-2/5 rounded-full bg-white/5 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
            className="order-1 flex flex-col justify-center lg:order-2"
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
              About John
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
              An Agent Who Actually Picks Up the Phone
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-text-secondary md:text-lg">
              I&apos;m John Conner, an independent life and health insurance broker
              based in Oklahoma City. I got into insurance because I saw how
              confusing and impersonal the process felt for most people —
              especially seniors navigating Medicare for the first time. My job is
              to cut through the noise, compare every option available to you, and
              make sure you&apos;re not leaving money on the table or settling for
              coverage that doesn&apos;t fit. I work for you — not for any
              insurance company.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary md:text-lg">
              I specialize in Medicare Advantage, Medicare Supplement, and Part D
              plans across Oklahoma, as well as life insurance for individuals and
              families at every stage of life.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
              {stats.map(({ title, sub }) => (
                <li
                  key={title}
                  className="rounded-lg border-y border-r border-primary/10 border-l-4 border-l-primary bg-background px-4 py-4 shadow-sm"
                >
                  <p className="font-heading text-base font-bold text-primary">
                    {title}
                  </p>
                  <p className="mt-1 font-body text-xs leading-snug text-text-secondary sm:text-sm">
                    {sub}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
