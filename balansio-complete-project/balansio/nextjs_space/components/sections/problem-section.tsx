
'use client'

import { useState, useEffect, useRef } from 'react'
import { Clock, AlertCircle, BarChart3, RefreshCw } from 'lucide-react'

const ProblemCard = ({ 
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
      className={`card p-6 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-red-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function ProblemSection() {
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stop Wasting Hours on Tasks That{' '}
            <span className="text-red-500">Should Be Automatic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional bookkeeping is eating your time. While you're buried in receipts and spreadsheets, 
            your competitors are growing their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProblemCard
            icon={Clock}
            title="Receipt entry takes hours"
            description="Manually typing every receipt detail steals precious time from growing your business."
            delay={100}
          />
          <ProblemCard
            icon={AlertCircle}
            title="Categorizing is tedious"
            description="Endless dropdown menus and guesswork lead to inconsistent, time-consuming categorization."
            delay={200}
          />
          <ProblemCard
            icon={BarChart3}
            title="Bank reconciliation eats your day"
            description="Matching transactions one by one is mind-numbing work that kills productivity."
            delay={300}
          />
          <ProblemCard
            icon={RefreshCw}
            title="Reports are always outdated"
            description="By the time you finish your books, the information is already old and less useful."
            delay={400}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-semibold">
            There's a <span className="text-blue-600">better way</span>
          </p>
        </div>
      </div>
    </section>
  )
}
