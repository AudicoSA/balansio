import Navbar from '@/components/ui/navbar'
import HeroSection from '@/components/sections/hero-section'
import FeaturesSection from '@/components/sections/features-section'
import HowItWorksSection from '@/components/sections/how-it-works-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import PricingSection from '@/components/sections/pricing-section'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/sections/footer'

export const dynamic = 'force-static'
export const revalidate = false

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
