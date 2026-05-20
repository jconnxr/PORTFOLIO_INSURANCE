import { motion } from 'framer-motion'
import {
  Building2,
  HeartPulse,
  LayoutGrid,
  Pill,
} from 'lucide-react'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const parts = [
  {
    part: 'Medicare Part A',
    subtitle: 'Hospital Insurance',
    icon: Building2,
    accent: 'secondary',
    covers:
      'Inpatient hospital stays, skilled nursing facility care, hospice care, some home health care',
    keyDetail:
      "Most people don't pay a premium for Part A if they've worked and paid Medicare taxes for at least 10 years.",
  },
  {
    part: 'Medicare Part B',
    subtitle: 'Medical Insurance',
    icon: HeartPulse,
    accent: 'secondary',
    covers:
      'Doctor visits, outpatient care, preventive services, durable medical equipment',
    keyDetail:
      'Part B has a monthly premium (set by the government each year) and covers 80% of approved services after your deductible.',
  },
  {
    part: 'Medicare Part C',
    subtitle: 'Medicare Advantage',
    icon: LayoutGrid,
    accent: 'primary',
    covers:
      'All Part A and B benefits through a private insurer, often includes dental, vision, hearing and Part D',
    keyDetail:
      'Plans vary by carrier and county. This is where working with an independent broker matters most — plan quality varies significantly.',
  },
  {
    part: 'Medicare Part D',
    subtitle: 'Prescription Drug Coverage',
    icon: Pill,
    accent: 'primary',
    covers:
      'Prescription drug costs through a private insurer approved by Medicare',
    keyDetail:
      'Your specific medications determine which Part D plan saves you the most. I run a drug-by-drug comparison for every client.',
  },
]

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

function MedicarePartCard({
  part,
  subtitle,
  icon: Icon,
  accent,
  covers,
  keyDetail,
}) {
  const isSky = accent === 'secondary'
  const borderClass = isSky ? 'border-t-secondary' : 'border-t-primary'
  const iconClass = isSky ? 'text-secondary' : 'text-primary'
  const iconBgClass = isSky ? 'bg-secondary/10' : 'bg-primary/8'

  return (
    <motion.article
      variants={cardVariants}
      className={`flex h-full flex-col rounded-xl border-t-4 ${borderClass} bg-accent p-6 shadow-lg shadow-primary/8`}
    >
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${iconBgClass}`}
        aria-hidden
      >
        <Icon className={`h-6 w-6 ${iconClass}`} />
      </div>
      <h3 className="font-heading text-xl font-bold text-primary">
        {part}
      </h3>
      <p className="mt-0.5 font-body text-sm font-medium text-text-secondary">
        ({subtitle})
      </p>
      <div className="mt-4 flex-1">
        <p className="font-body text-xs font-semibold tracking-wide text-primary uppercase">
          Covers
        </p>
        <p className="mt-1.5 font-body text-base leading-relaxed text-text-secondary">
          {covers}
        </p>
      </div>
      <p className="mt-5 border-t border-primary/8 pt-4 font-body text-sm leading-relaxed text-text-primary italic">
        {keyDetail}
      </p>
    </motion.article>
  )
}

export default function Medicare101() {
  return (
    <section id="medicare-101" className="bg-background">
      <motion.header
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.55, ease: easeOut }}
        className="relative overflow-hidden bg-cover bg-center px-4 py-16 sm:px-6 md:bg-fixed md:py-20 lg:py-24"
        style={{
          backgroundImage:
            "url('/images/lifestyle/consultation.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-primary/75" aria-hidden />
        <div className="relative mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-accent sm:text-4xl">
            Understanding Medicare — The Basics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-accent/90">
            If you&apos;re turning 65 or helping a family member navigate coverage,
            here&apos;s what you need to know before picking a plan.
          </p>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary"
            aria-hidden
          />
        </div>
      </motion.header>

      <div className="px-4 py-16 sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          >
            {parts.map((part) => (
              <MedicarePartCard key={part.part} {...part} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
            className="mt-10 rounded-xl bg-primary/90 px-6 py-8 text-center shadow-lg shadow-primary/15 sm:mt-12 sm:px-10 sm:py-10"
          >
            <p className="font-body text-base leading-relaxed text-accent sm:text-lg">
              Not sure which combination is right for you? That&apos;s exactly what
              a free consultation is for.
            </p>
            <motion.button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="mt-6 cursor-pointer rounded-lg bg-secondary px-8 py-3.5 font-body text-sm font-semibold text-accent sm:text-base"
              {...ctaHoverTap}
            >
              Talk to John
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
