import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ctaHoverTap } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const NAV_LINKS = [
  { label: 'Services', id: 'services', type: 'hash' },
  { label: 'Medicare 101', id: 'medicare-101', type: 'hash' },
  { label: 'About', id: 'about', type: 'hash' },
  { label: 'For Providers', to: '/providers', type: 'route' },
  { label: 'FAQ', to: '/faq', type: 'route' },
  { label: 'Contact', id: 'contact', type: 'hash' },
]

const SECTION_IDS = NAV_LINKS.filter((link) => link.type === 'hash').map(
  (link) => link.id,
)

function NavHashLink({ label, sectionId, isActive, onNavigate }) {
  return (
    <a
      href={`/#${sectionId}`}
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

function NavRouteLink({ label, to, isActive }) {
  return (
    <Link
      to={to}
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
    </Link>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('services')
  const location = useLocation()
  const navigate = useNavigate()
  const isRoutePage = (path) => location.pathname === path

  const goToSection = useCallback(
    (sectionId) => {
      if (location.pathname !== '/') {
        navigate(`/#${sectionId}`)
      } else {
        scrollToSection(sectionId)
      }
      setActiveSection(sectionId)
      setMobileOpen(false)
    },
    [location.pathname, navigate],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return

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
  }, [location.pathname])

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
        {location.pathname === '/' ? (
          <motion.a
            layout
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setMobileOpen(false)
            }}
            className="flex flex-col leading-tight"
          >
            <motion.span
              className="font-heading font-bold tracking-tight text-primary"
              animate={{
                fontSize: scrolled ? '1.0625rem' : '1.25rem',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            >
              John Conner
            </motion.span>
            <span className="mt-0.5 hidden font-body text-xs font-light tracking-wide text-secondary lg:block">
              Medicare · Life · Oklahoma
            </span>
          </motion.a>
        ) : (
          <Link to="/" className="flex flex-col leading-tight" onClick={() => setMobileOpen(false)}>
            <span className="font-heading text-xl font-bold tracking-tight text-primary">
              John Conner
            </span>
            <span className="mt-0.5 hidden font-body text-xs font-light tracking-wide text-secondary lg:block">
              Medicare · Life · Oklahoma
            </span>
          </Link>
        )}

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.type === 'route' ? (
                <NavRouteLink
                  label={link.label}
                  to={link.to}
                  isActive={isRoutePage(link.to)}
                />
              ) : (
                <NavHashLink
                  label={link.label}
                  sectionId={link.id}
                  isActive={
                    location.pathname === '/' && activeSection === link.id
                  }
                  onNavigate={goToSection}
                />
              )}
            </li>
          ))}
          <li>
            <motion.a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                goToSection('contact')
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
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`relative block rounded-lg px-3 py-3 font-body text-base font-medium ${
                        isRoutePage(link.to)
                          ? 'bg-background text-primary'
                          : 'text-text-secondary'
                      }`}
                    >
                      {link.label}
                      {isRoutePage(link.to) && (
                        <span className="absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-full bg-secondary" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={`/#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        goToSection(link.id)
                      }}
                      className={`relative block rounded-lg px-3 py-3 font-body text-base font-medium ${
                        location.pathname === '/' && activeSection === link.id
                          ? 'bg-background text-primary'
                          : 'text-text-secondary'
                      }`}
                    >
                      {link.label}
                      {location.pathname === '/' && activeSection === link.id && (
                        <span className="absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-full bg-secondary" />
                      )}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <motion.a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    goToSection('contact')
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
