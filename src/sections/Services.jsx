import { motion } from 'framer-motion'
import {
  CalendarRange,
  HeartHandshake,
  Infinity,
  LayoutGrid,
  Pill,
  ShieldPlus,
  TrendingUp,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { easeOut, viewportOnce } from '../lib/motionPresets'

const medicareServices = [
  {
    icon: LayoutGrid,
    title: 'Medicare Advantage (Part C)',
    description:
      'HMO and PPO plans that replace Original Medicare with bundled medical, hospital, and often drug coverage. I compare plans from every major carrier in Oklahoma so you can see what fits your doctors, prescriptions, and budget.',
  },
  {
    icon: ShieldPlus,
    title: 'Medicare Supplement (Medigap)',
    description:
      'Coverage that fills the gaps Original Medicare leaves behind — copays, coinsurance, and deductibles. I help you choose a letter plan that pairs with your doctors and keeps out-of-pocket costs predictable.',
  },
  {
    icon: Pill,
    title: 'Medicare Part D',
    description:
      'Prescription drug plans designed around your medications, not a one-size-fits-all formulary. We review your current prescriptions and find a plan that minimizes what you pay at the pharmacy.',
  },
  {
    icon: CalendarRange,
    title: 'Annual Enrollment Period',
    description:
      'Plan review and switching during Oct 15 – Dec 7 every year, when you can change Medicare Advantage or Part D coverage. I walk you through what changed in your plan and whether a better option is available.',
  },
]

const lifeInsuranceServices = [
  {
    icon: HeartHandshake,
    title: 'Final Expense / Burial Insurance',
    description:
      'Affordable whole life coverage for end-of-life costs, with no medical exam required on many plans. It gives your family a straightforward way to cover funeral expenses and small debts without a complicated application.',
  },
  {
    icon: Infinity,
    title: 'Whole Life Insurance',
    description:
      'Permanent coverage that builds cash value over time and never expires as long as premiums are paid. It is a strong fit when you want guaranteed protection plus a savings component you can access later in life.',
  },
  {
    icon: TrendingUp,
    title: 'Indexed Universal Life (IUL)',
    description:
      'Flexible permanent coverage with growth potential tied to market indexes, without directly investing in the stock market. You can adjust premiums and death benefit over time as your income and family needs change.',
  },
]

function SubsectionTitle({ children }) {
  return (
    <motion.h3
      className="font-heading text-2xl font-bold text-primary md:text-[1.65rem]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      {children}
    </motion.h3>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-background px-4 py-16 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            What I Help You With
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary"
            aria-hidden
          />
        </SectionHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
          className="mt-12 md:mt-14"
        >
          <SubsectionTitle>Medicare</SubsectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {medicareServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.06, ease: easeOut }}
          className="mt-14 md:mt-20"
        >
          <SubsectionTitle>Life Insurance</SubsectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {lifeInsuranceServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={index + medicareServices.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
