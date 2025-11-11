'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
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

  return (
    <section id="home" className="relative overflow-hidden pt-20 min-h-[90vh]">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Professional accountant managing finances"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content with Semi-Transparent Grey Overlay - Left Half */}
      <div className="relative min-h-[90vh] flex items-center">
        <div className="w-full lg:w-1/2">
          {/* Semi-transparent grey block - Full height, left half */}
          <div className="bg-gray-900/75 backdrop-blur-md px-8 py-16 lg:px-16 lg:py-20 min-h-[90vh] flex items-center">
            <div className="animate-fadeInUp">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
                ✨ Trusted by 500+ SA Small Businesses
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Manage your finances in a better way
              </h1>

              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
                AI-powered bookkeeping that integrates with Xero. Send receipts via WhatsApp and watch your books update automatically. Save 15+ hours monthly while staying SARS compliant.
              </p>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="bg-[#0066FF] text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#0052CC] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Get A Quote
              </button>

              {/* Customer Reviews Indicator */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-300">
                    <Image
                      src="/avatar1.jpg"
                      alt="Happy Balansio customer - business owner"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-300">
                    <Image
                      src="/avatar2.jpg"
                      alt="Satisfied customer - entrepreneur"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-300">
                    <Image
                      src="/avatar3.jpg"
                      alt="Successful client - startup founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-[#0066FF] font-bold text-sm">
                    +2K
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-white/90 font-medium">Customer Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
