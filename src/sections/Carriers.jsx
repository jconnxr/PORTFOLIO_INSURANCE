import { motion } from 'framer-motion'
import {
  Activity,
  BadgeDollarSign,
  Building2,
  Globe,
  HeartPulse,
  Landmark,
  Plus,
  Shield,
  ShieldCheck,
  Trees,
} from 'lucide-react'
import CarrierLogoCard from '../components/CarrierLogoCard'
import SectionHeader from '../components/SectionHeader'

const medicareCarriers = [
  { name: 'Humana', icon: Building2 },
  { name: 'UnitedHealthcare', icon: HeartPulse },
  { name: 'Cigna', icon: Shield },
  { name: 'Wellcare', icon: Plus },
  { name: 'Blue Cross Blue Shield of Oklahoma', icon: ShieldCheck },
  { name: 'Aetna', icon: Activity },
]

const lifeCarriers = [
  { name: 'Mutual of Omaha', icon: Landmark },
  { name: 'Transamerica', icon: Globe },
  { name: 'Foresters Financial', icon: Trees },
  { name: 'North American Company', icon: BadgeDollarSign },
]

const allCarriers = [...medicareCarriers, ...lifeCarriers]

function CarrierMarquee() {
  const marqueeItems = [...allCarriers, ...allCarriers]

  return (
    <div className="overflow-hidden" aria-label="Insurance carriers">
      <motion.div
        className="flex w-max gap-4 py-1"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 42,
            ease: 'linear',
          },
        }}
        style={{ willChange: 'transform' }}
      >
        {marqueeItems.map((carrier, index) => (
          <CarrierLogoCard
            key={`${carrier.name}-${index}`}
            {...carrier}
            compact
            suppressEntrance
          />
        ))}
      </motion.div>
    </div>
  )
}

function CarrierPillCluster({ title, names }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold tracking-wide text-primary uppercase sm:text-base">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {names.map((name) => (
          <span
            key={name}
            className="inline-flex rounded-full border border-primary/15 bg-accent px-3 py-1.5 font-body text-xs font-medium text-primary shadow-sm sm:text-sm"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Carriers() {
  return (
    <section id="carriers" className="bg-carriers px-4 py-16 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Plans From Every Major Carrier
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
            As an independent broker, I&apos;m not tied to one company. I compare
            options across all of these carriers to find the right fit for you.
          </p>
        </SectionHeader>

        <div className="mt-10">
          <CarrierMarquee />
        </div>

        <div className="mt-12 space-y-10 border-t border-primary/10 pt-10">
          <CarrierPillCluster
            title="Medicare Carriers"
            names={medicareCarriers.map((c) => c.name)}
          />
          <CarrierPillCluster
            title="Life Insurance Carriers"
            names={lifeCarriers.map((c) => c.name)}
          />
        </div>
      </div>
    </section>
  )
}
