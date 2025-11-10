'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HowItWorksSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const steps = [
    {
      number: "01",
      title: "Send Your Receipts",
      description: "Simply snap a photo of your receipts and invoices, then send them via WhatsApp. Our AI instantly captures all the important details - no manual data entry required.",
      image: "/step1.jpg"
    },
    {
      number: "02",
      title: "AI Categorizes Everything",
      description: "Our intelligent system automatically categorizes transactions, matches them to the right accounts, and flags any anomalies. 99% accuracy guaranteed, with human oversight for peace of mind.",
      image: "/step2.jpg"
    },
    {
      number: "03",
      title: "Get Professional Reports",
      description: "Access real-time dashboards, monthly reports, and SARS-compliant documentation. Schedule virtual consultations with our CA(SA) team whenever you need guidance.",
      image: "/step3.jpg"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wide mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple Process, Powerful Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and experience the future of bookkeeping
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div
                className={`animate-fadeInUp ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-[#0066FF]/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-[#0066FF] font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Learn more</span>
                </div>
              </div>

              <div
                className={`animate-fadeInUp animate-delay-200 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-md">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Verified by CA(SA)</div>
              <div className="text-sm text-gray-600">All reports reviewed by chartered accountants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
