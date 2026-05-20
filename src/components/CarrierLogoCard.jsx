import { motion } from 'framer-motion'
import { easeOut, viewportOnce } from '../lib/motionPresets'

/* Drop real carrier logo PNG/SVG files into /public/images/carriers/
   to replace these placeholder cards */

/**
 * Carrier logo card — displays a logo image inside a white rounded card.
 * Drop matching files into /public/images/carriers/ (see Carriers.jsx for paths).
 */
export default function CarrierLogoCard({
  src,
  alt,
  compact = false,
  index = 0,
  /** When true, skip scroll entrance (e.g. inside infinite marquee) */
  suppressEntrance = false,
}) {
  const className = `flex items-center justify-center rounded-xl bg-white shadow-sm shadow-primary/10 ${
    compact ? 'h-20 w-[140px] shrink-0 px-4' : 'h-20 px-5'
  }`

  const inner = (
    <img src={src} alt={alt} className="h-full w-full object-contain" />
  )

  if (suppressEntrance) {
    return <div className={className}>{inner}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...viewportOnce, margin: '-24px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: easeOut }}
      className={className}
    >
      {inner}
    </motion.div>
  )
}
