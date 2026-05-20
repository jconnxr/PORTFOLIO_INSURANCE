import { motion } from 'framer-motion'
import { ctaHoverTap, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

export default function PostTestimonialsCta() {
  return (
    <section
      id="post-testimonials-cta"
      className="border-y border-primary/10 bg-primary/5 px-4 py-10 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
      >
        <p className="font-heading text-lg font-bold text-primary sm:text-xl">
          Ready to find coverage that fits your life?
        </p>
        <motion.button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="shrink-0 cursor-pointer rounded-lg bg-primary px-6 py-3 font-body text-sm font-semibold text-accent"
          {...ctaHoverTap}
        >
          Start With a Free Conversation
        </motion.button>
      </motion.div>
    </section>
  )
}
