import { motion } from 'framer-motion'
import FAQAccordion from '../components/FAQAccordion'
import SectionHeader from '../components/SectionHeader'
import { easeOut, viewportOnce } from '../lib/motionPresets'

export default function FAQ() {
  return (
    <section id="faq" className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Common Questions
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
            Medicare and life insurance don&apos;t have to be confusing. Here are
            answers to what most people ask first.
          </p>
        </SectionHeader>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.12, ease: easeOut }}
          className="mt-10 md:mt-12"
        >
          <FAQAccordion />
        </motion.div>
      </div>
    </section>
  )
}
