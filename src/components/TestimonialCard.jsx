import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { easeOut, viewportOnce } from '../lib/motionPresets'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          aria-hidden
        />
      ))}
    </div>
  )
}

export default function TestimonialCard({ quote, name, location, stars, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: easeOut,
      }}
      className="relative flex flex-col rounded-xl bg-accent p-6 shadow-lg shadow-primary/8 sm:p-8"
    >
      <span
        className="font-heading text-5xl leading-none text-secondary select-none sm:text-6xl"
        aria-hidden
      >
        &ldquo;
      </span>
      <p className="mt-2 flex-1 font-body text-base leading-relaxed text-text-primary">
        {quote}
      </p>
      <div className="mt-6">
        <StarRating count={stars} />
        <p className="mt-3 font-body text-sm font-semibold text-primary">
          {name}{' '}
          <span className="font-normal text-text-secondary">
            — {location}
          </span>
        </p>
      </div>
    </motion.article>
  )
}
