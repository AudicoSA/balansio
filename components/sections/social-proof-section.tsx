
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Shield, Award, CheckCircle, Users } from 'lucide-react'

const TrustBadge = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default function SocialProofSection() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setTitleVisible(true)
          }
          if (entry.target === imageRef.current && entry.isIntersecting) {
            setImageVisible(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (imageRef.current) observer.observe(imageRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div 
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Built by <span className="text-blue-600">Chartered Accountants</span>,
                <br />
                Powered by AI
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Your financial data deserves professional expertise. Our team of CA(SA)s 
                has built an AI system that understands South African business needs.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">CA(SA) Built</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">SARS Compliant</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Bank-Grade Security</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-3 gap-8">
              <TrustBadge
                icon={Award}
                title="Xero Certified Partner"
                description="Official partnership ensures seamless integration"
                delay={100}
              />
              <TrustBadge
                icon={Shield}
                title="100% SARS Compliant"
                description="VAT201 & eFiling ready reports"
                delay={200}
              />
              <TrustBadge
                icon={Users}
                title="AES-256 Encryption"
                description="Bank-grade security for your data"
                delay={300}
              />
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className={`relative aspect-[4/5] w-full transition-all duration-700 ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-2xl opacity-20 -rotate-3"></div>
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://thumbs.dreamstime.com/b/cheerful-african-businesswoman-smiling-hispanic-businessman-standing-office-stand-together-modern-holding-tablet-digital-382083030.jpg"
                  alt="Professional business team collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: '99%', label: 'AI Accuracy Rate' },
            { number: '15+', label: 'Hours Saved Monthly' },
            { number: '24hrs', label: 'Setup Time' },
            { number: '100%', label: 'SARS Compliant' }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
