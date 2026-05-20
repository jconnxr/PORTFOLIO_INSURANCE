import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import LifestyleImage from '../components/LifestyleImage'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const PHONE_DISPLAY = '(405) 312-3681'
const PHONE_HREF = 'tel:+14053123681'

const reviewChecklist = [
  'Monthly premium vs. comparable plans',
  'Your doctors still in-network?',
  'Your prescriptions still covered?',
  'Extra benefits you may be missing (dental, vision, OTC)',
  'Out-of-pocket maximum for the year',
  'Any plan changes taking effect January 1st',
]

export default function AnnualReview() {
  return (
    <section
      id="annual-review"
      className="bg-[#EFF6FF] px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-8">
            <LifestyleImage
              src="/images/lifestyle/annual-review.jpg"
              alt="Medicare beneficiary reviewing annual plan documents with an advisor"
              className="h-[380px] rounded-2xl shadow-lg shadow-primary/15"
            />

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
                Annual Plan Review
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                Already Have a Plan? It Might Not Be the Right One Anymore.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-text-secondary md:text-lg">
                Medicare Advantage and Part D plans change their benefits,
                premiums, formularies, and networks every single year — even if you
                don&apos;t. A plan that was perfect in 2023 might be costing you
                hundreds more in 2025 without you realizing it. I offer free annual
                coverage reviews for existing Medicare beneficiaries across
                Oklahoma. No pressure, no commitment — just a clear picture of
                whether you&apos;re still in the best plan available.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <motion.button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="cursor-pointer rounded-lg bg-primary px-6 py-3.5 font-body text-sm font-semibold text-accent"
                  {...ctaHoverTap}
                >
                  Get a Free Plan Review
                </motion.button>
                <motion.a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3.5 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                  {...ctaHoverTap}
                >
                  Call {PHONE_DISPLAY}
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
            className="rounded-xl border-y border-r border-primary/10 border-l-4 border-l-primary bg-accent px-6 py-7 shadow-lg shadow-primary/10 sm:px-8 sm:py-8 lg:sticky lg:top-28"
          >
            <h3 className="font-heading text-lg font-bold text-primary sm:text-xl">
              What We Review Together:
            </h3>
            <ul className="mt-5 flex list-none flex-col gap-3.5 p-0">
              {reviewChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    aria-hidden
                  />
                  <span className="font-body text-sm leading-snug text-primary sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
