import FAQAccordion from '../components/FAQAccordion'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'

export default function FAQPage() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main className="bg-accent px-4 py-16 sm:px-6 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeader>
            <h1 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
              Common Questions
            </h1>
            <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
              Medicare and life insurance don&apos;t have to be confusing. Here are
              answers to what most people ask first.
            </p>
          </SectionHeader>

          <div className="mt-10 md:mt-12">
            <FAQAccordion />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
