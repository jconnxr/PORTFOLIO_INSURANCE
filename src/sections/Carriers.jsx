import { motion } from 'framer-motion'
import CarrierLogoCard from '../components/CarrierLogoCard'
import SectionHeader from '../components/SectionHeader'

/* Drop real carrier logo PNG/SVG files into /public/images/carriers/
   to replace these placeholder cards */

const medicareCarriers = [
  { name: 'Humana', src: '/images/carriers/humana.png', alt: 'Humana' },
  { name: 'UnitedHealthcare', src: '/images/carriers/uhc.png', alt: 'UnitedHealthcare' },
  { name: 'Cigna', src: '/images/carriers/cigna.png', alt: 'Cigna' },
  { name: 'Wellcare', src: '/images/carriers/wellcare.png', alt: 'Wellcare' },
  {
    name: 'Blue Cross Blue Shield of Oklahoma',
    src: '/images/carriers/bcbs.png',
    alt: 'Blue Cross Blue Shield of Oklahoma',
  },
  { name: 'Aetna', src: '/images/carriers/aetna.png', alt: 'Aetna' },
]

const lifeCarriers = [
  {
    name: 'Mutual of Omaha',
    src: '/images/carriers/mutualofomaha.png',
    alt: 'Mutual of Omaha',
  },
  {
    name: 'Transamerica',
    src: '/images/carriers/transamerica.png',
    alt: 'Transamerica',
  },
  {
    name: 'Foresters Financial',
    src: '/images/carriers/foresters.png',
    alt: 'Foresters Financial',
  },
  {
    name: 'North American Company',
    src: '/images/carriers/northamerican.png',
    alt: 'North American Company',
  },
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
            src={carrier.src}
            alt={carrier.alt}
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
