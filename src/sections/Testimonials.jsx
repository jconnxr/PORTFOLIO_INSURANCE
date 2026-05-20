import SectionHeader from '../components/SectionHeader'
import TestimonialCard from '../components/TestimonialCard'

/* Replace with real client testimonials */
const testimonials = [
  {
    quote:
      'John made the Medicare process feel easy for the first time. He explained everything clearly, compared my options, and I ended up saving over $80 a month on my plan.',
    name: 'Mary T.',
    location: 'Oklahoma City, OK',
    stars: 5,
  },
  {
    quote:
      'I was overwhelmed trying to pick a life insurance policy for my family. John walked me through everything, never rushed me, and found us coverage that fit our budget perfectly.',
    name: 'Daniel R.',
    location: 'Edmond, OK',
    stars: 5,
  },
  {
    quote:
      "I've referred three family members to John already. He's patient, knowledgeable, and actually answers his phone. That's rare.",
    name: 'Susan M.',
    location: 'Broken Arrow, OK',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-background px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader>
          <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            What Clients Are Saying
          </h2>
        </SectionHeader>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
