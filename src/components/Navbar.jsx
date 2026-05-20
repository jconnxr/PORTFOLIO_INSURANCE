import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { ctaHoverTap } from '../lib/motionPresets'

const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

function NavLink({ label, sectionId, isActive, onNavigate }) {
  return (
    <a
      href={`#${sectionId}`}
      onClick={(e) => {
        e.preventDefault()
        onNavigate(sectionId)
      }}
      className={`relative px-1 py-2 font-body text-sm font-medium transition-colors ${
        isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="activeNavUnderline"
          className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-secondary"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('services')

  const scrollToSection = useCallback((sectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) return

    const navOffset = document.querySelector('header')?.offsetHeight ?? 72
    const top =
      target.getBoundingClientRect().top + window.scrollY - navOffset

    window.scrollTo({ top, behavior: 'smooth' })
    setActiveSection(sectionId)
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.header
      layout
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-accent transition-shadow duration-300 ${
        scrolled
          ? 'shadow-xl shadow-primary/20 ring-1 ring-primary/5'
          : 'shadow-none'
      }`}
    >
      <motion.nav
        layout
        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
        }}
        className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <motion.a
          layout
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMobileOpen(false)
          }}
          className="font-heading font-bold tracking-tight text-primary"
          animate={{
            fontSize: scrolled ? '1.0625rem' : '1.25rem',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        >
          John Conner
        </motion.a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <NavLink
                label={label}
                sectionId={id}
                isActive={activeSection === id}
                onNavigate={scrollToSection}
              />
            </li>
          ))}
          <li>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="inline-block rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-accent"
              {...ctaHoverTap}
            >
              Get a Free Quote
            </motion.a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-primary lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-primary/10 bg-accent lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(id)
                    }}
                    className={`relative block rounded-lg px-3 py-3 font-body text-base font-medium ${
                      activeSection === id
                        ? 'bg-background text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {label}
                    {activeSection === id && (
                      <span className="absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-full bg-secondary" />
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                  className="block rounded-lg bg-primary px-4 py-3 text-center font-body text-sm font-semibold text-accent"
                  {...ctaHoverTap}
                >
                  Get a Free Quote
                </motion.a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
