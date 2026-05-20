import { motion } from 'framer-motion'
import { easeOut, viewportOnce } from '../lib/motionPresets'

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: easeOut,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: easeOut } }}
      className="flex flex-col rounded-xl border-t-4 border-primary bg-accent p-6 shadow-lg shadow-primary/8 transition-shadow hover:shadow-xl hover:shadow-primary/12"
    >
      <Icon className="mb-4 h-10 w-10 text-secondary" aria-hidden />
      <h3 className="font-heading text-xl font-bold text-primary">{title}</h3>
      <p className="mt-3 font-body text-base leading-relaxed text-text-secondary md:text-[1.02rem]">
        {description}
      </p>
    </motion.article>
  )
}
