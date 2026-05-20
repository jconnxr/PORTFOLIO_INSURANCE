import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ctaHoverTap } from '../lib/motionPresets'

const practiceTypes = [
  'Medical Office',
  'Dental Office',
  'Specialty Clinic',
  'Other',
]

const interestOptions = [
  'Schedule a Lunch & Learn',
  'Learn More First',
  'Discuss a Patient Situation',
  'Other',
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

export default function ProviderContactForm() {
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
          Thanks — I&apos;ll be in touch within one business day.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="practiceName" className={labelClass}>
          Practice Name <span className="text-secondary">*</span>
        </label>
        <input
          id="practiceName"
          type="text"
          className={inputClass}
          aria-invalid={errors.practiceName ? 'true' : 'false'}
          {...register('practiceName', { required: 'Practice name is required' })}
        />
        <FieldError message={errors.practiceName?.message} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="yourName" className={labelClass}>
            Your Name <span className="text-secondary">*</span>
          </label>
          <input
            id="yourName"
            type="text"
            autoComplete="name"
            className={inputClass}
            aria-invalid={errors.yourName ? 'true' : 'false'}
            {...register('yourName', { required: 'Your name is required' })}
          />
          <FieldError message={errors.yourName?.message} />
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            Role / Title <span className="text-secondary">*</span>
          </label>
          <input
            id="role"
            type="text"
            placeholder="e.g. Office Manager, Dentist, MD"
            className={inputClass}
            aria-invalid={errors.role ? 'true' : 'false'}
            {...register('role', { required: 'Role or title is required' })}
          />
          <FieldError message={errors.role?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="providerPhone" className={labelClass}>
            Phone Number <span className="text-secondary">*</span>
          </label>
          <input
            id="providerPhone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={errors.providerPhone ? 'true' : 'false'}
            {...register('providerPhone', { required: 'Phone number is required' })}
          />
          <FieldError message={errors.providerPhone?.message} />
        </div>
        <div>
          <label htmlFor="providerEmail" className={labelClass}>
            Email Address <span className="text-secondary">*</span>
          </label>
          <input
            id="providerEmail"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={errors.providerEmail ? 'true' : 'false'}
            {...register('providerEmail', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          <FieldError message={errors.providerEmail?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="practiceType" className={labelClass}>
            Practice Type <span className="text-secondary">*</span>
          </label>
          <select
            id="practiceType"
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
            aria-invalid={errors.practiceType ? 'true' : 'false'}
            {...register('practiceType', { required: 'Please select a practice type' })}
          >
            <option value="" disabled>
              Select practice type
            </option>
            {practiceTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError message={errors.practiceType?.message} />
        </div>
        <div>
          <label htmlFor="providerInterest" className={labelClass}>
            What are you interested in? <span className="text-secondary">*</span>
          </label>
          <select
            id="providerInterest"
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
            aria-invalid={errors.providerInterest ? 'true' : 'false'}
            {...register('providerInterest', {
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
          <FieldError message={errors.providerInterest?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="providerMessage" className={labelClass}>
          Message{' '}
          <span className="font-normal text-text-secondary">(optional)</span>
        </label>
        <textarea
          id="providerMessage"
          rows={4}
          placeholder="Anything else we should know?"
          className={`${inputClass} resize-y`}
          {...register('providerMessage')}
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
