
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Users, Target, TrendingUp, Shield } from 'lucide-react'

const FeatureCard = ({ 
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
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function CollaborationSection() {
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
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className={`relative aspect-[4/5] w-full transition-all duration-700 ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20 -rotate-2"></div>
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://thumbs.dreamstime.com/b/business-team-working-together-laptop-office-meeting-vertical-shot-businesspeople-collaborating-laptops-engaging-teamwork-387116550.jpg"
                  alt="Business team collaborating with modern technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div 
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Business Deserves 
                <span className="text-blue-600"> Professional-Grade</span> Bookkeeping
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Join the growing community of South African businesses that have transformed 
                their financial management with AI-powered automation. Focus on what matters 
                most - growing your business.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard
                icon={Users}
                title="Expert Support Team"
                description="Dedicated CA(SA)s available to help with complex accounting questions and ensure compliance."
                delay={100}
              />
              <FeatureCard
                icon={Target}
                title="Tailored Solutions"
                description="Every business is unique. Our AI learns your specific patterns and preferences over time."
                delay={200}
              />
              <FeatureCard
                icon={TrendingUp}
                title="Business Growth"
                description="Real-time insights and reports help you make informed decisions to drive growth."
                delay={300}
              />
              <FeatureCard
                icon={Shield}
                title="Enterprise Security"
                description="Bank-grade encryption and security protocols protect your sensitive financial data."
                delay={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
