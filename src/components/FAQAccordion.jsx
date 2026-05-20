import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '../data/faqItems'

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-primary/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base font-bold text-primary md:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-primary" aria-hidden />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 font-body text-base leading-relaxed text-text-secondary md:px-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQAccordion({ limit }) {
  const [openIndex, setOpenIndex] = useState(null)
  const items = limit ? faqItems.slice(0, limit) : faqItems

  return (
    <div className="overflow-hidden rounded-xl border border-primary/10 bg-accent">
      {items.map((item, index) => (
        <FAQItem
          key={item.question}
          {...item}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? null : index))
          }
        />
      ))}
    </div>
  )
}
