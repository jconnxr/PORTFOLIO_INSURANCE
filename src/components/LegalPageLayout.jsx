import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function LegalPageLayout({ title, children }) {
  return (
    <div className="flex min-h-svh flex-col bg-accent">
      <header className="border-b border-primary/10 bg-accent">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
          <Link
            to="/"
            className="font-body text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            ← Back to Home
          </Link>
          <Link
            to="/"
            className="font-heading text-lg font-bold text-primary transition-colors hover:text-secondary"
          >
            John Conner
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            {title}
          </h1>
          <div className="mt-8 space-y-8 font-body text-base leading-relaxed text-text-primary">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
