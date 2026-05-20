import { motion } from 'framer-motion'
import {
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Mail,
  Phone,
  RefreshCw,
  Users,
} from 'lucide-react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LifestyleImage from '../components/LifestyleImage'
import ProviderContactForm from '../components/ProviderContactForm'
import { ctaHoverTap, easeOut, viewportOnce } from '../lib/motionPresets'
import { scrollToSection } from '../utils/scrollToSection'

const PHONE_DISPLAY = '(405) 312-3681'
const PHONE_HREF = 'tel:+14053123681'
const EMAIL = 'Johnconnercw@icloud.com'
const EMAIL_HREF = 'mailto:Johnconnercw@icloud.com'

const programFeatures = [
  {
    icon: Clock,
    title: '30–45 Minutes',
    description:
      'Short enough to fit in a lunch break, substantive enough to actually help.',
  },
  {
    icon: DollarSign,
    title: 'No Cost to Your Office',
    description:
      "Lunch is on me. There's no fee, no obligation, and no pressure.",
  },
  {
    icon: Users,
    title: 'For Your Whole Team',
    description:
      'Front desk, billing, clinical staff — everyone benefits from understanding Medicare basics.',
  },
]

const partnershipSteps = [
  {
    icon: AlertCircle,
    title: "A Patient's Coverage Changes",
    description:
      "A patient comes in and finds out they're no longer in-network under their Medicare Advantage plan. Instead of losing them, your front desk knows exactly who to call.",
  },
  {
    icon: RefreshCw,
    title: 'I Get Them Back in Network',
    description:
      'I review every available Medicare Advantage plan in your area, find the ones that include your practice, and help the patient switch during their eligible enrollment window — at no cost to them.',
  },
  {
    icon: CheckCircle,
    title: 'They Stay Your Patient',
    description:
      "The patient stays connected to your office, their care continues uninterrupted, and your practice retains a patient you'd otherwise lose. I become your go-to resource for any future coverage questions.",
  },
]

const practiceBenefits = [
  "A trusted resource for coverage questions your staff can't answer",
  'Patient retention when plans change',
  'A free educational session that positions your office as a Medicare-knowledgeable practice',
  'Ongoing support at no cost to your office or your patients',
]

const patientBenefits = [
  'A licensed independent broker who compares every plan available',
  'Help finding coverage that keeps them in their current provider network',
  'Dental plans with real benefits at practices they already trust',
  'No-cost guidance from someone who works for them, not an insurer',
]

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

export default function Providers() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.hash.replace('#', '')
    if (!sectionId) return
    requestAnimationFrame(() => scrollToSection(sectionId))
  }, [location])

  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        {/* Section 1 — Hero */}
        <section className="bg-primary px-4 py-16 sm:px-6 md:py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut }}
              className="text-center lg:text-left"
            >
              <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
                Healthcare Provider Partnership
              </p>
              <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-accent sm:text-4xl lg:text-[2.5rem]">
                Your Patients Deserve Coverage That Keeps Them in Your Office.
              </h1>
              <p className="mt-5 font-body text-base leading-relaxed text-accent/75 sm:text-lg">
                When a patient&apos;s Medicare plan changes and you&apos;re no longer
                in-network, they don&apos;t just lose convenience — they lose continuity
                of care. I help fix that. I&apos;m John Conner, an independent Medicare
                broker based in Oklahoma City, and I partner with medical and dental
                offices to make sure their patients stay covered and stay connected to
                the providers they trust.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <motion.button
                  type="button"
                  onClick={() => scrollToSection('provider-contact')}
                  className="cursor-pointer rounded-lg bg-secondary px-6 py-3.5 font-body text-sm font-semibold text-accent sm:text-base"
                  {...ctaHoverTap}
                >
                  Schedule a Lunch &amp; Learn
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => scrollToSection('how-it-works-providers')}
                  className="cursor-pointer rounded-lg border-2 border-accent bg-transparent px-6 py-3.5 font-body text-sm font-semibold text-accent transition-colors hover:bg-accent/10 sm:text-base"
                  {...ctaHoverTap}
                >
                  Learn How It Works
                </motion.button>
              </div>
            </motion.div>
            <LifestyleImage
              src="/images/lifestyle/doctor-patient.jpg"
              alt="Doctor meeting with a patient in a medical office"
              className="hidden h-[480px] rounded-3xl border-2 border-accent/80 shadow-xl shadow-black/20 lg:block"
            />
          </div>
        </section>

        {/* Section 2 — The Problem */}
        <section className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeOut }}
              className="max-w-3xl"
            >
              <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
                The Problem
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                Medicare Changes Every Year. Your Patients Often Don&apos;t Know It.
              </h2>
            </motion.div>
            <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <LifestyleImage
                  src="/images/lifestyle/consultation.jpg"
                  alt="Healthcare provider consulting with a patient about coverage"
                  className="mb-6 h-[280px] rounded-2xl shadow-md shadow-primary/10 sm:h-[300px]"
                  imgClassName="h-full w-full object-cover object-[18%_28%]"
                />
                <h3 className="font-heading text-xl font-bold text-primary">
                  For Medical Offices
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-text-secondary md:text-lg">
                  Medicare Advantage plans update their provider networks annually. A
                  patient who&apos;s been seeing you for years can suddenly find out
                  you&apos;re no longer covered under their plan — often when
                  they&apos;re already sitting in your waiting room. Without someone to
                  help them switch plans, you lose the patient and they lose their
                  doctor.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
              >
                <LifestyleImage
                  src="/images/lifestyle/dental-office.jpg"
                  alt="Patient receiving care in a modern dental office"
                  className="mb-6 h-[200px] rounded-2xl shadow-md shadow-primary/10"
                />
                <h3 className="font-heading text-xl font-bold text-primary">
                  For Dental Offices
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-text-secondary md:text-lg">
                  Most Medicare Advantage plans now include dental benefits — but
                  coverage quality varies dramatically between carriers. Many of your
                  patients are enrolled in plans with minimal dental benefits or narrow
                  networks that don&apos;t include your practice. I find them plans with
                  strong dental coverage that keeps them in your chair.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3 — Lunch & Learn */}
        <section className="bg-[#EFF6FF] px-4 py-16 sm:px-6 md:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeOut }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="font-body text-xs font-semibold tracking-widest text-secondary uppercase sm:text-sm">
                Our Program
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                Medicare Made Clear — A Lunch &amp; Learn for Your Team
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-text-secondary sm:text-lg">
                I come to your office, bring lunch, and spend 30–45 minutes walking
                your front desk, billing staff, and clinical team through the basics of
                Medicare — how it works, what the different parts mean, and most
                importantly, what happens when a patient&apos;s coverage changes. No sales
                pitch to your team. No cost to your office. Just useful information
                your staff can actually apply when patients call with coverage questions.
              </p>
            </motion.div>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-12 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3 md:gap-8"
            >
              {programFeatures.map(({ icon: Icon, title, description }) => (
                <motion.li
                  key={title}
                  variants={fadeUpItem}
                  className="rounded-xl border-t-4 border-secondary bg-accent p-6 text-center shadow-lg shadow-primary/8"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Icon className="h-6 w-6 text-secondary" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Section 4 — Partnership steps */}
        <section
          id="how-it-works-providers"
          className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeOut }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                What an Ongoing Partnership Looks Like
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
                The lunch and learn is just the introduction. Here&apos;s what working
                together looks like on an ongoing basis.
              </p>
            </motion.div>
            <motion.ol
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-12 flex list-none flex-col gap-10 p-0 md:mt-14 md:flex-row md:items-start md:gap-6 lg:gap-8"
            >
              {partnershipSteps.map((step, index) => (
                <motion.li
                  key={step.title}
                  variants={fadeUpItem}
                  className="relative flex flex-1 flex-col items-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 ring-1 ring-secondary/20">
                    <step.icon className="h-7 w-7 text-secondary" aria-hidden />
                  </div>
                  <span className="mt-4 font-body text-xs font-bold tracking-wide text-secondary uppercase">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* Section 5 — Mutual benefits */}
        <section className="bg-primary px-4 py-16 sm:px-6 md:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeOut }}
              className="text-center font-heading text-3xl font-extrabold text-accent sm:text-4xl"
            >
              Why This Works for Both Sides
            </motion.h2>
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <h3 className="font-heading text-xl font-bold text-accent">
                  What Your Practice Gets
                </h3>
                <ul className="mt-5 flex list-none flex-col gap-3 p-0">
                  {practiceBenefits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                        aria-hidden
                      />
                      <span className="font-body text-base leading-relaxed text-accent/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
              >
                <h3 className="font-heading text-xl font-bold text-accent">
                  What Your Patients Get
                </h3>
                <ul className="mt-5 flex list-none flex-col gap-3 p-0">
                  {patientBenefits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                        aria-hidden
                      />
                      <span className="font-body text-base leading-relaxed text-accent/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 6 — Contact */}
        <section
          id="provider-contact"
          className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeOut }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                Let&apos;s Start the Conversation
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
                Whether you want to schedule a lunch and learn or just learn more
                about how this works — fill out the form below or call me directly.
              </p>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: easeOut }}
                className="flex flex-col justify-center"
              >
                <div className="space-y-5">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3 font-body text-lg font-semibold text-primary transition-colors hover:text-secondary"
                  >
                    <Phone className="h-5 w-5 text-secondary" aria-hidden />
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={EMAIL_HREF}
                    className="flex items-center gap-3 font-body text-lg font-semibold text-primary transition-colors hover:text-secondary"
                  >
                    <Mail className="h-5 w-5 text-secondary" aria-hidden />
                    {EMAIL}
                  </a>
                </div>
                <p className="mt-6 font-body text-sm text-text-secondary">
                  I typically respond within one business day.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
              >
                <ProviderContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
