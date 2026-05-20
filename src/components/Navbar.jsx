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

function NavbarBrand({ onClick }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      onClick={onClick}
      aria-label="Sincere Insurance Partners home"
    >
      {/* Shield SVG logo mark */}
      <svg
        width="38"
        height="42"
        viewBox="0 0 38 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M19 1L35 8.5V24C35 33.5 27.5 39.5 19 41C10.5 39.5 3 33.5 3 24V8.5L19 1Z"
          fill="#0A2342"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
        <path
          d="M19 5L32 11.5V24C32 31.5 26 36.5 19 38C12 36.5 6 31.5 6 24V11.5L19 5Z"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <path
          d="M13.5 17C13.5 14.5 15.5 12.5 18 12.5H20.5C22.5 12.5 24 14 24 16C24 17.8 22.8 19 21 19.5L16.5 20.5C14.5 21 13 22.5 13 24.5C13 26.5 14.8 28.5 17 28.5H20C22.5 28.5 24.5 26.8 24.5 24.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontWeight: 700,
            fontSize: '17px',
            color: '#0A2342',
            letterSpacing: '0.01em',
          }}
        >
          Sincere
        </span>
        <span
          style={{
            fontWeight: 500,
            fontSize: '9px',
            color: '#3B82F6',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Insurance Partners
        </span>
      </div>
    </Link>
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
        <motion.div layout transition={{ type: 'spring', stiffness: 400, damping: 32 }}>
          <NavbarBrand
            onClick={(e) => {
              setMobileOpen(false)
              if (location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          />
        </motion.div>

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
