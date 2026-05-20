import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'

/* Connect to blog CMS or markdown files when ready */

const resources = [
  {
    tag: 'Medicare',
    tagClass: 'bg-secondary/15 text-primary',
    title:
      'Medicare 101: What Every Oklahoma Senior Needs to Know Before Turning 65',
    excerpt:
      "Turning 65 is a big milestone — and your Medicare window opens before you even get there. Here's what you need to know.",
    href: '#',
  },
  {
    tag: 'Life Insurance',
    tagClass: 'bg-primary/10 text-primary',
    title: 'Term vs. Whole Life: Which One Actually Makes Sense for Your Family?',
    excerpt:
      "Both have their place. The right answer depends on your age, budget, and goals — not a salesperson's commission.",
    href: '#',
  },
  {
    tag: 'Medicare',
    tagClass: 'bg-secondary/15 text-primary',
    title:
      'Annual Enrollment Period: 5 Things to Check Before You Stick With Your Current Plan',
    excerpt:
      "Your plan changes every year even if you don't. Here's what to review before October 15th.",
    href: '#',
  },
]

export default function Resources() {
  return (
    <section
      id="resources"
      className="bg-background px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Insurance Explained Simply
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
            Free guides and articles to help you make confident decisions.
          </p>
        </SectionHeader>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 md:mt-12 md:grid-cols-3 md:gap-8">
          {resources.map((item, index) => (
            <li key={item.title}>
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: easeOut,
                }}
                className="flex h-full flex-col rounded-xl bg-accent p-6 shadow-lg shadow-primary/8 sm:p-7"
              >
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 font-body text-xs font-semibold ${item.tagClass}`}
                >
                  {item.tag}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary md:text-[0.9375rem]">
                  {item.excerpt}
                </p>
                <motion.a
                  href={item.href}
                  className="mt-5 inline-flex w-fit items-center font-body text-sm font-semibold text-primary"
                  {...ctaHoverTap}
                >
                  Read More →
                </motion.a>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
