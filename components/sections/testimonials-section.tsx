'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const testimonials = [
    {
      name: "David Mokoena",
      role: "Owner, Tech Solutions SA",
      image: "/testimonial1.jpg",
      text: "Balansio has saved me countless hours every month. The AI categorization is incredibly accurate, and the Xero integration is seamless. I can now focus on growing my business instead of wrestling with spreadsheets."
    },
    {
      name: "Sarah van der Merwe",
      role: "Restaurant Owner",
      image: "/testimonial2.jpg",
      text: "As a restaurant owner, I deal with dozens of receipts daily. Balansio's WhatsApp integration is a game-changer. I simply snap a photo and send it - everything else is automatic. It's like having a dedicated bookkeeper at a fraction of the cost."
    },
    {
      name: "James Naidoo",
      role: "Retail Shop Owner",
      image: "/testimonial3.jpg",
      text: "I was skeptical about AI bookkeeping at first, but Balansio has proven to be more reliable than my previous bookkeeper. The SARS compliance features give me peace of mind, and the monthly reports are crystal clear."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wide mb-3">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of small business owners who trust Balansio with their bookkeeping
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#F5F3FF] rounded-xl p-8 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative bg-gray-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
