import { motion } from 'framer-motion'
import { Building2, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const cards = [
  {
    icon: User,
    title: "I'm Looking for Coverage",
    description:
      "You're a Medicare beneficiary or family member looking for help finding the right health or life insurance plan.",
    cta: 'Get Help With Your Coverage',
    ctaClass: 'bg-primary text-accent',
    action: 'contact',
  },
  {
    icon: Building2,
    title: "I'm a Healthcare Provider",
    description:
      "You're a doctor's office, dental practice, or clinic interested in learning how we can help your patients navigate Medicare coverage — and keep them in your network.",
    cta: 'View the Provider Page',
    ctaClass: 'bg-secondary text-accent',
    action: 'providers',
  },
]

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

function GatewayCard({ icon: Icon, title, description, cta, ctaClass, action }) {
  const ctaButton = (
    <motion.span
      className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-body text-sm font-semibold sm:text-base ${ctaClass}`}
      {...ctaHoverTap}
    >
      {cta}
    </motion.span>
  )

  return (
    <motion.article
      variants={cardVariants}
      className="flex h-full flex-col rounded-xl border-t-4 border-primary bg-accent p-6 shadow-lg shadow-primary/10 sm:p-8"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10"
        aria-hidden
      >
        <Icon className="h-6 w-6 text-secondary" />
      </div>
      <h3 className="mt-5 font-heading text-xl font-bold text-primary">{title}</h3>
      <p className="mt-3 flex-1 font-body text-base leading-relaxed text-text-secondary">
        {description}
      </p>
      <div className="mt-6">
        {action === 'contact' ? (
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="w-full cursor-pointer"
          >
            {ctaButton}
          </button>
        ) : (
          <Link to="/providers" className="block w-full">
            {ctaButton}
          </Link>
        )}
      </div>
    </motion.article>
  )
}

export default function ProviderGateway() {
  return (
    <section
      id="provider-gateway"
      className="bg-carriers px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
            For Healthcare Providers
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            Are You a Doctor or Dental Office? There&apos;s a Page Built for You.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
            If you&apos;re a provider who received one of my cards, or you&apos;re
            curious about how we can work together to solve Medicare coverage
            problems for your patients — I put everything you need on a dedicated
            page.
          </p>
        </motion.header>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8"
        >
          {cards.map((card) => (
            <GatewayCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
