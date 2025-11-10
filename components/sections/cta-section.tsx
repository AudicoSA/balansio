
'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Clock, CheckCircle, DollarSign } from 'lucide-react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
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

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div 
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Stop Wasting Time on{' '}
            <br className="hidden sm:block" />
            <span className="text-blue-200">Manual Bookkeeping?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of South African businesses saving 15+ hours every month 
            with AI-powered bookkeeping that actually works.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-2 text-blue-100">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Setup in 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">99% accurate AI</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <DollarSign className="w-5 h-5" />
              <span className="font-semibold">30-day guarantee</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Start Your 14-Day Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-blue-100 text-sm">
              No credit card required
            </p>
          </div>

          {/* Trust indicator */}
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-200 text-sm">
              Trusted by 500+ South African businesses • SARS compliant • Xero certified
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
