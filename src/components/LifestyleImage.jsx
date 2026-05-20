import { motion } from 'framer-motion'
import { easeOut, viewportOnce } from '../lib/motionPresets'

/**
 * Lazy-loaded lifestyle photo with scroll fade-in and subtle zoom.
 */
export default function LifestyleImage({
  src,
  alt,
  className = '',
  imgClassName = 'h-full w-full object-cover object-center',
  style,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: easeOut }}
      className={`overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imgClassName}
        style={style}
      />
    </motion.div>
  )
}
