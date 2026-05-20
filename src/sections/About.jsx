// NOTE: Update name and bio to agency name when rebranding

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import LifestyleImage from '../components/LifestyleImage'
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
          <div className="relative order-2 lg:order-1">
            <LifestyleImage
              src="/images/headshot.jpg"
              alt="John Conner, independent Medicare and life insurance broker"
              className="relative h-[300px] rounded-3xl shadow-lg shadow-primary/20 lg:h-[500px]"
              imgClassName="h-full w-full object-cover object-[center_18%]"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/15"
              aria-hidden
            />
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-lg bg-accent px-3 py-2 shadow-md shadow-primary/15 sm:bottom-5 sm:left-5 sm:px-4 sm:py-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span className="font-body text-xs font-semibold text-primary sm:text-sm">
                Serving Oklahoma Since 2023
              </span>
            </div>
          </div>

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
