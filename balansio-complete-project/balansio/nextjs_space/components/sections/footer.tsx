
'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">BALANSIO</div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered bookkeeping for South African businesses. 
              Save time, reduce costs, and focus on growing your business 
              while we handle your books automatically.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@balansio.co.za</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Serving South African businesses</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('pricing')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} BALANSIO. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SARS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Xero Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Bank-Grade Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
