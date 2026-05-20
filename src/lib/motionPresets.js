/** Shared Framer Motion presets for sections & CTAs */

export const viewportOnce = {
  once: true,
  margin: '-10% 0px -8% 0px',
}

export const easeOut = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

/** Primary / secondary CTA buttons & key links */
export const ctaHoverTap = {
  whileHover: {
    scale: 1.02,
    filter: 'brightness(1.08)',
    transition: { duration: 0.2, ease: easeOut },
  },
  whileTap: {
    scale: 0.97,
    filter: 'brightness(0.98)',
    transition: { duration: 0.15 },
  },
}
