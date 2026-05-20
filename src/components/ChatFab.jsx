import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { faqItems } from '../data/faqItems'

const PHONE_HREF = 'tel:+14053123681'
const SMS_HREF = 'sms:+14053123681'
const PHONE_DISPLAY = '(405) 312-3681'
const SHOW_AFTER_PX = 600

export default function ChatFab() {
  const [fabVisible, setFabVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeFaqIndex, setActiveFaqIndex] = useState(null)

  useEffect(() => {
    const onScroll = () => setFabVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closePanel = () => {
    setOpen(false)
    setActiveFaqIndex(null)
  }

  const toggleOpen = () => {
    if (open) {
      closePanel()
    } else {
      setOpen(true)
      setActiveFaqIndex(null)
    }
  }

  return (
    <>
      <AnimatePresence>
        {fabVisible && (
          <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
              {open && (
                <motion.div
                  role="dialog"
                  aria-label="Chat with common questions"
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-[min(calc(100vw-3rem),22rem)] flex-col overflow-hidden rounded-2xl border border-primary/10 bg-accent shadow-2xl shadow-primary/20 sm:w-96"
                >
                  <div className="flex items-start justify-between gap-3 bg-primary px-4 py-4 text-accent">
                    <div>
                      <p className="font-heading text-base font-bold">
                        Hi, I&apos;m John
                      </p>
                      <p className="mt-0.5 font-body text-xs leading-snug text-accent/80">
                        Tap a question below — or reach out directly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closePanel}
                      className="shrink-0 rounded-lg p-1 text-accent/80 transition-colors hover:bg-white/10 hover:text-accent"
                      aria-label="Close chat"
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </button>
                  </div>

                  <div className="max-h-[min(50vh,20rem)] overflow-y-auto bg-background px-3 py-3">
                    <div className="rounded-xl rounded-bl-sm bg-accent px-3 py-2.5 shadow-sm ring-1 ring-primary/8">
                      <p className="font-body text-sm leading-relaxed text-text-secondary">
                        I&apos;m an independent broker in Oklahoma. Here are
                        answers to questions I hear most often:
                      </p>
                    </div>

                    {activeFaqIndex !== null && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 ml-6 rounded-xl rounded-br-sm bg-secondary px-3 py-2.5 text-white shadow-sm"
                        >
                          <p className="font-body text-sm leading-relaxed">
                            {faqItems[activeFaqIndex].question}
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.06 }}
                          className="mt-2 rounded-xl rounded-bl-sm bg-accent px-3 py-2.5 shadow-sm ring-1 ring-primary/8"
                        >
                          <p className="font-body text-sm leading-relaxed text-text-primary">
                            {faqItems[activeFaqIndex].answer}
                          </p>
                        </motion.div>
                      </>
                    )}

                    <p className="mt-4 px-1 font-body text-xs font-semibold tracking-wide text-text-secondary uppercase">
                      Common questions
                    </p>
                    <ul className="mt-2 flex list-none flex-col gap-1.5 p-0">
                      {faqItems.map((item, index) => (
                        <li key={item.question}>
                          <button
                            type="button"
                            onClick={() => setActiveFaqIndex(index)}
                            className={`w-full rounded-lg border px-3 py-2.5 text-left font-body text-sm leading-snug transition-colors ${
                              activeFaqIndex === index
                                ? 'border-secondary bg-secondary/10 text-primary'
                                : 'border-primary/10 bg-accent text-primary hover:border-secondary/40 hover:bg-secondary/5'
                            }`}
                          >
                            {item.question}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-primary/10 bg-accent px-3 py-3">
                    <p className="mb-2 text-center font-body text-xs text-text-secondary">
                      Prefer to talk? I&apos;m one tap away.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={PHONE_HREF}
                        className="flex items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-3 py-2.5 font-body text-sm font-semibold text-white shadow-md shadow-[#3B82F6]/25 transition-colors hover:bg-[#2563EB]"
                      >
                        <Phone className="h-4 w-4 shrink-0" aria-hidden />
                        Call
                      </a>
                      <a
                        href={SMS_HREF}
                        className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#3B82F6] bg-accent px-3 py-2.5 font-body text-sm font-semibold text-[#3B82F6] transition-colors hover:bg-[#3B82F6]/5"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                        Text
                      </a>
                    </div>
                    <p className="mt-2 text-center font-body text-xs text-text-secondary">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleOpen}
              aria-expanded={open}
              aria-label={open ? 'Close chat' : 'Open chat'}
              className="flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/30 md:h-auto md:w-auto md:rounded-lg md:px-5 md:py-3.5"
            >
              {open ? (
                <X className="h-5 w-5 shrink-0" aria-hidden />
              ) : (
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              )}
              <span className="hidden font-body text-sm font-semibold md:inline">
                {open ? 'Close' : 'Chat'}
              </span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
