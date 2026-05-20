import { motion } from 'framer-motion'
import { DollarSign, MapPin, Search, Shield } from 'lucide-react'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const trustBullets = [
  {
    icon: Shield,
    title: 'Unbiased Advice',
    description:
      'I represent every major carrier, so my recommendation is based on your needs, not a quota.',
  },
  {
    icon: DollarSign,
    title: 'Always Free to You',
    description:
      'My services cost you nothing. Carriers compensate me directly when you enroll.',
  },
  {
    icon: Search,
    title: 'We Compare Everything',
    description:
      'I review all available plans in your area side by side so nothing gets missed.',
  },
  {
    icon: MapPin,
    title: 'Local & Reachable',
    description:
      "I'm based in Oklahoma City and available by phone — not a 1-800 number.",
  },
]

const bulletListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const bulletItemVariants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
}

function TrustBullet({ icon: Icon, title, description }) {
  return (
    <motion.li variants={bulletItemVariants} className="flex gap-4">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10"
        aria-hidden
      >
        <Icon className="h-5 w-5 text-secondary" />
      </div>
      <div>
        <h3 className="font-heading text-base font-bold text-primary sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
          {description}
        </p>
      </div>
    </motion.li>
  )
}

export default function WhyIndependent() {
  return (
    <section
      id="why-independent"
      className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
              Why Work With an Independent Broker
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
              When You Call a Carrier, You Only See Their Plans. I Show You All
              of Them.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              Every major insurance company has agents — but those agents can only
              sell you that company&apos;s products. As an independent broker,
              I&apos;m contracted with every major carrier in Oklahoma. That means
              I compare Humana against UHC against Cigna against BCBS side by side
              and tell you honestly which one fits your doctors, your prescriptions,
              and your budget. My compensation doesn&apos;t change based on which
              plan you pick. My only job is finding you the right one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.12, ease: easeOut }}
          >
            <motion.ul
              variants={bulletListVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="flex list-none flex-col gap-6 p-0 sm:gap-7"
            >
              {trustBullets.map((bullet) => (
                <TrustBullet key={bullet.title} {...bullet} />
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: 0.35, ease: easeOut }}
            >
              <motion.button
                type="button"
                onClick={() => scrollToSection('how-it-works')}
                className="mt-8 cursor-pointer rounded-lg bg-primary px-6 py-3.5 font-body text-sm font-semibold text-accent sm:text-base"
                {...ctaHoverTap}
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
