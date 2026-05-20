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
    <div className="overflow-hidden py-2" aria-label="Insurance carriers">
      <motion.div
        className="flex w-max gap-5 py-2"
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

export default function Carriers() {
  return (
    <section
      id="carriers"
      className="bg-carriers px-4 py-20 sm:px-6 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Plans From Every Major Carrier
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-lg leading-relaxed text-text-secondary sm:text-xl">
            As an independent broker, I&apos;m not tied to one company. I compare
            options across all of these carriers to find the right fit for you.
          </p>
          <div
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-secondary"
            aria-hidden
          />
        </SectionHeader>

        <div className="mt-12 sm:mt-14 md:mt-16">
          <CarrierMarquee />
        </div>
      </div>
    </section>
  )
}
