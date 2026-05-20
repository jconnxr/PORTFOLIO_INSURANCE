import { motion } from 'framer-motion'
import { LayoutGrid, Phone, ShieldCheck } from 'lucide-react'
import { Fragment } from 'react'
import LifestyleImage from '../components/LifestyleImage'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const steps = [
  {
    title: 'We Talk',
    icon: Phone,
    description:
      "You reach out by phone or form. I'll ask a few simple questions about your situation, budget, and what matters most to you.",
  },
  {
    title: 'I Shop For You',
    icon: LayoutGrid,
    description:
      'As an independent broker, I compare plans across every major carrier in Oklahoma — Humana, UHC, Cigna, BCBS, Wellcare, and more.',
  },
  {
    title: "You're Covered",
    icon: ShieldCheck,
    description:
      'I walk you through the best options, handle the paperwork, and stay your point of contact after enrollment. No cost to you — ever.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

function StepConnector() {
  return (
    <li
      className="hidden min-w-[2rem] flex-1 list-none items-center self-start px-2 pt-8 md:flex"
      aria-hidden
    >
      <div className="w-full border-t-2 border-dotted border-white/35" />
    </li>
  )
}

function Step({ icon: Icon, title, description }) {
  return (
    <motion.li
      variants={stepVariants}
      className="flex flex-1 list-none flex-col items-center px-2 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
        <Icon className="h-8 w-8 text-secondary" aria-hidden />
      </div>
      <h3 className="mt-6 font-heading text-xl font-bold text-accent">{title}</h3>
      <p className="mt-3 max-w-xs font-body text-base leading-relaxed text-accent/85">
        {description}
      </p>
    </motion.li>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary px-4 py-16 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center font-heading text-3xl font-extrabold text-accent sm:text-4xl"
        >
          Getting Covered Is Simpler Than You Think
        </motion.h2>

        <div className="relative mt-14 md:mt-16">
          <motion.ol
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex list-none flex-col gap-12 p-0 md:flex-row md:items-start md:gap-0 lg:pr-[300px]"
          >
            {steps.map((step, index) => (
              <Fragment key={step.title}>
                <Step {...step} />
                {index < steps.length - 1 && <StepConnector />}
              </Fragment>
            ))}
          </motion.ol>

          <LifestyleImage
            src="/images/lifestyle/senior-couple.jpg"
            alt=""
            className="pointer-events-none absolute top-1/2 right-0 hidden w-[280px] -translate-y-1/2 opacity-20 lg:block"
            imgClassName="h-[380px] w-full rounded-[2rem] object-cover object-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 flex justify-center md:mt-16"
        >
          <motion.button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="cursor-pointer rounded-lg bg-secondary px-8 py-4 font-body text-base font-semibold text-accent"
            {...ctaHoverTap}
          >
            Start With a Free Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
