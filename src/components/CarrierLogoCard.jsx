import { motion } from 'framer-motion'
import { easeOut, viewportOnce } from '../lib/motionPresets'

/**
 * Placeholder carrier logo card.
 * Swap the icon block for a real SVG, e.g.:
 *   <img src="/logos/humana.svg" alt="Humana" className="h-10 w-auto object-contain" />
 */
export default function CarrierLogoCard({
  name,
  icon: Icon,
  compact = false,
  index = 0,
  /** When true, skip scroll entrance (e.g. inside infinite marquee) */
  suppressEntrance = false,
}) {
  const className = `flex flex-col items-center justify-center rounded-xl bg-accent text-center shadow-sm shadow-primary/5 ${
    compact ? 'min-h-[88px] w-[140px] shrink-0 px-3 py-4' : 'min-h-[108px] px-4 py-5'
  }`

  const inner = (
    <>
      <Icon
        className={`text-secondary ${compact ? 'mb-2 h-7 w-7' : 'mb-3 h-9 w-9'}`}
        aria-hidden
      />
      <span
        className={`font-body font-semibold leading-snug text-primary ${
          compact ? 'text-xs' : 'text-sm'
        }`}
      >
        {name}
      </span>
    </>
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
