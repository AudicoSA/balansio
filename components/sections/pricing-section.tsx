'use client'

import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'

export default function PricingSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!mounted) return null

  const plans = [
    {
      name: "Starter",
      price: "R599",
      period: "/month",
      description: "Perfect for solo entrepreneurs and freelancers",
      features: [
        "Up to 100 transactions/month",
        "WhatsApp receipt capture",
        "Basic AI categorization",
        "Monthly financial reports",
        "Xero integration",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "R999",
      period: "/month",
      description: "Ideal for growing small businesses",
      features: [
        "Up to 500 transactions/month",
        "WhatsApp receipt capture",
        "Advanced AI categorization",
        "Real-time dashboards",
        "Xero integration",
        "Monthly CA(SA) consultation",
        "SARS compliance check",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R2,999",
      period: "/month",
      description: "For established businesses with complex needs",
      features: [
        "Up to 5000 transactions/month",
        "Everything in Professional",
        "Multiple business entities",
        "Dedicated account manager",
        "Quarterly CA(SA) reviews",
        "Custom integrations",
        "API access",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wide mb-3">
            PRICING
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all animate-fadeInUp ${
                plan.popular ? 'ring-2 ring-[#0066FF] transform scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-[#0066FF] text-white hover:bg-[#0052CC] hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fadeInUp">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Setup in 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
