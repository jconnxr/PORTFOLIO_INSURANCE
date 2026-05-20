import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../sections/About'
import AnnualReview from '../sections/AnnualReview'
import Contact from '../sections/Contact'
import FAQ from '../sections/FAQ'
import Hero from '../sections/Hero'
import HowItWorks from '../sections/HowItWorks'
import Medicare101 from '../sections/Medicare101'
import MidPageCta from '../sections/MidPageCta'
import PostTestimonialsCta from '../sections/PostTestimonialsCta'
import WhyIndependent from '../sections/WhyIndependent'
import Carriers from '../sections/Carriers'
import Newsletter from '../sections/Newsletter'
import ProviderGateway from '../sections/ProviderGateway'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import { scrollToSection } from '../utils/scrollToSection'

export default function Home() {
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
        <Hero />
        <WhyIndependent />
        <Services />
        <MidPageCta />
        <Medicare101 />
        <HowItWorks />
        <Carriers />
        <AnnualReview />
        <Testimonials />
        <PostTestimonialsCta />
        <About />
        <FAQ />
        <ProviderGateway />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
