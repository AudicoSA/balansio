'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Calculator, FileCheck, BarChart3, Shield, Clock } from 'lucide-react'

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Send receipts directly via WhatsApp. Our AI extracts data instantly, making bookkeeping as easy as sending a message."
    },
    {
      icon: Calculator,
      title: "Smart Categorization",
      description: "AI-powered transaction categorization learns from your business patterns, ensuring 99% accuracy with every entry."
    },
    {
      icon: FileCheck,
      title: "SARS Compliance",
      description: "Stay compliant with automated tax calculations and properly formatted documentation ready for SARS submissions."
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Monitor your financial health with beautiful, easy-to-understand dashboards updated in real-time."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption and secure cloud storage."
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Access your books anytime, anywhere. Desktop, mobile, or tablet - your data syncs across all devices."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-wide mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need for effortless bookkeeping
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for small business owners in South Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="service-card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-circle">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
