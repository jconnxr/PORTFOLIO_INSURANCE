import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { easeOut, viewportOnce } from '../lib/motionPresets'

export default function AboutSection() {
  return (
    <section id="about" className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            About Us
          </h2>
        </SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          className="mt-8 max-w-2xl text-center md:mx-auto md:text-left"
        >
          <p className="font-body text-lg leading-relaxed text-text-secondary">
            Section placeholder — content coming in a later prompt.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
