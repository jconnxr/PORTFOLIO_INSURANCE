import { motion } from 'framer-motion'
import { easeOut, viewportOnce } from '../lib/motionPresets'

export default function SectionHeader({ children, className = '' }) {
  return (
    <motion.header
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.52, ease: easeOut }}
    >
      {children}
    </motion.header>
  )
}
