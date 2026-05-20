import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ctaHoverTap } from '../lib/motionPresets'

const interestOptions = [
  'Medicare Plans',
  'Life Insurance',
  'Not Sure Yet',
  'Both',
]

const inputClass =
  'w-full rounded-lg border border-primary/15 bg-accent px-4 py-3 font-body text-text-primary transition-colors placeholder:text-text-secondary/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25'

const labelClass = 'mb-1.5 block font-body text-sm font-medium text-text-primary'

function FieldError({ message }) {
  if (!message) return null
  return (
    <p className="mt-1 font-body text-sm text-red-600" role="alert">
      {message}
    </p>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-primary/10 bg-background px-6 py-12 text-center"
      >
        <p className="font-heading text-xl font-bold text-primary">
          Thanks! I&apos;ll be in touch within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-secondary">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClass}
            aria-invalid={errors.firstName ? 'true' : 'false'}
            {...register('firstName', { required: 'First name is required' })}
          />
          <FieldError message={errors.firstName?.message} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-secondary">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            className={inputClass}
            aria-invalid={errors.lastName ? 'true' : 'false'}
            {...register('lastName', { required: 'Last name is required' })}
          />
          <FieldError message={errors.lastName?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number <span className="text-secondary">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          aria-invalid={errors.phone ? 'true' : 'false'}
          {...register('phone', { required: 'Phone number is required' })}
        />
        <FieldError message={errors.phone?.message} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-secondary">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>
          What are you interested in? <span className="text-secondary">*</span>
        </label>
        <select
          id="interest"
          className={`${inputClass} cursor-pointer`}
          defaultValue=""
          aria-invalid={errors.interest ? 'true' : 'false'}
          {...register('interest', {
            required: 'Please select an option',
          })}
        >
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError message={errors.interest?.message} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message{' '}
          <span className="font-normal text-text-secondary">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${inputClass} resize-y`}
          {...register('message')}
        />
      </div>

      <motion.button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-primary py-3.5 font-body text-base font-semibold text-accent transition-colors hover:bg-secondary"
        {...ctaHoverTap}
      >
        Send My Information
      </motion.button>
    </form>
  )
}
