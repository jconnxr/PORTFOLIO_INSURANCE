import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Carriers from './sections/Carriers'
import Resources from './sections/Resources'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Carriers />
        <About />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
