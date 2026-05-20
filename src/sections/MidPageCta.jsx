import { motion } from 'framer-motion'
import { ctaHoverTap, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

export default function MidPageCta() {
  return (
    <section
      id="mid-page-cta"
      className="bg-primary px-4 py-12 sm:px-6 md:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-heading text-2xl font-extrabold text-accent sm:text-3xl">
          Compare Every Major Carrier — At No Cost to You
        </h2>
        <p className="mt-3 font-body text-base leading-relaxed text-accent/85 sm:text-lg">
          Not sure where to start? I&apos;ll walk you through your Medicare and
          life insurance options across Oklahoma — free, with no obligation.
        </p>
        <motion.button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="mt-6 cursor-pointer rounded-lg bg-secondary px-8 py-3.5 font-body text-sm font-semibold text-accent sm:text-base"
          {...ctaHoverTap}
        >
          Get a Free Quote
        </motion.button>
      </motion.div>
    </section>
  )
}
