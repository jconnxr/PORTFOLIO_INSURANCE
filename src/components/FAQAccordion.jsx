import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
  {
    question: 'How much does it cost to work with you?',
    answer:
      "Nothing. As an independent broker, I'm compensated by the insurance carriers when you enroll — never by you. My advice, plan comparisons, and ongoing support are completely free.",
  },
  {
    question: "What's the difference between Medicare Advantage and Medicare Supplement?",
    answer:
      "Medicare Advantage replaces Original Medicare with a plan from a private insurer — it often includes extra benefits like dental and vision. Medicare Supplement (Medigap) works alongside Original Medicare to cover the out-of-pocket costs it doesn't. The right choice depends on your health needs, doctors, and budget — which is exactly what we'd talk through together.",
  },
  {
    question: 'When can I sign up for Medicare?',
    answer:
      'Your Initial Enrollment Period starts 3 months before your 65th birthday and ends 3 months after. There are also Special Enrollment Periods if you\'re losing employer coverage. The Annual Enrollment Period runs October 15 – December 7 each year for plan changes.',
  },
  {
    question: 'Do I need a medical exam to get life insurance?',
    answer:
      "It depends on the product. Final expense and simplified issue policies often don't require an exam. Term and whole life policies may depending on your age and health. I'll find you the best option either way.",
  },
  {
    question: 'Are you licensed in my part of Oklahoma?',
    answer:
      "Yes — I'm licensed to serve clients across all of Oklahoma.",
  },
  {
    question: 'What if I already have a plan — can you still help?',
    answer:
      'Absolutely. I can review your current plan during the Annual Enrollment Period and compare it against what\'s available. Many clients switch and save without losing any coverage.',
  },
]

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

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="overflow-hidden rounded-xl border border-primary/10 bg-accent">
      {faqItems.map((item, index) => (
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
