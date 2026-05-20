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

function CarrierGroup({ title, carriers, startIndex = 0 }) {
  return (
    <div>
      <h3 className="font-heading text-lg font-bold text-primary">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {carriers.map((carrier, index) => (
          <CarrierLogoCard
            key={carrier.name}
            {...carrier}
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  )
}

function CarrierMarquee() {
  const marqueeItems = [...allCarriers, ...allCarriers]

  return (
    <div className="overflow-hidden md:hidden" aria-label="Insurance carriers">
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

        <div className="mt-10 md:hidden">
          <CarrierMarquee />
        </div>

        <div className="mt-10 hidden space-y-10 md:block">
          <CarrierGroup title="Medicare" carriers={medicareCarriers} />
          <CarrierGroup
            title="Life Insurance"
            carriers={lifeCarriers}
            startIndex={medicareCarriers.length}
          />
        </div>
      </div>
    </section>
  )
}
