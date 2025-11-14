'use client'

import Image from 'next/image'
import { imageConfig } from '@/lib/image-config'
import { useState } from 'react'

export default function ImagesAdminPage() {
  const [copiedPath, setCopiedPath] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPath(text)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  const allImages = [
    {
      category: 'Hero Section',
      images: [
        { name: 'Hero Image', path: imageConfig.hero.main, used: 'hero-section.tsx' },
        { name: 'Avatar 1', path: imageConfig.hero.avatars.avatar1, used: 'hero-section.tsx' },
        { name: 'Avatar 2', path: imageConfig.hero.avatars.avatar2, used: 'hero-section.tsx' },
        { name: 'Avatar 3', path: imageConfig.hero.avatars.avatar3, used: 'hero-section.tsx' },
      ]
    },
    {
      category: 'How It Works',
      images: [
        { name: 'Step 1: Send Receipts', path: imageConfig.steps.step1, used: 'how-it-works-section.tsx' },
        { name: 'Step 2: AI Categorizes', path: imageConfig.steps.step2, used: 'how-it-works-section.tsx' },
        { name: 'Step 3: Get Reports', path: imageConfig.steps.step3, used: 'how-it-works-section.tsx' },
      ]
    },
    {
      category: 'Testimonials',
      images: [
        { name: 'David Mokoena', path: imageConfig.testimonials.testimonial1, used: 'testimonials-section.tsx' },
        { name: 'Sarah van der Merwe', path: imageConfig.testimonials.testimonial2, used: 'testimonials-section.tsx' },
        { name: 'James Naidoo', path: imageConfig.testimonials.testimonial3, used: 'testimonials-section.tsx' },
      ]
    },
    {
      category: 'Other Sections',
      images: [
        { name: 'Contact Office', path: imageConfig.contact.office, used: 'contact-section.tsx' },
        { name: 'Social Proof Team', path: imageConfig.socialProof.team, used: 'social-proof-section.tsx' },
        { name: 'Collaboration Team', path: imageConfig.collaboration.team, used: 'collaboration-section.tsx' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Image Management
          </h1>
          <p className="text-gray-600 mb-4">
            This page shows all images used across your site. Click on any file path to copy it.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">How to Replace Images:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
              <li>Place your image in the <code className="bg-blue-100 px-2 py-1 rounded">/public</code> folder</li>
              <li>Name it exactly as shown below (e.g., <code className="bg-blue-100 px-2 py-1 rounded">hero.jpg</code>)</li>
              <li>Or edit <code className="bg-blue-100 px-2 py-1 rounded">/lib/image-config.ts</code> to change the paths</li>
              <li>The changes will appear automatically (hot reload)</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-900 mb-2">For External URLs:</h3>
            <p className="text-sm text-yellow-800">
              If using images from external sources, add the domain to{' '}
              <code className="bg-yellow-100 px-2 py-1 rounded">next.config.js</code> under{' '}
              <code className="bg-yellow-100 px-2 py-1 rounded">images.remotePatterns</code>
            </p>
          </div>
        </div>

        {allImages.map((section) => (
          <div key={section.category} className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
              {section.category}
            </h2>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {section.images.map((img) => (
                <div key={img.path} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                  <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden mb-3 h-80">
                    <Image
                      src={img.path}
                      alt={img.name}
                      fill
                      className="object-contain"
                      unoptimized={img.path.startsWith('http')}
                    />
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">{img.name}</h3>

                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">File Path:</p>
                      <button
                        onClick={() => copyToClipboard(img.path)}
                        className="w-full text-left bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded text-sm font-mono text-gray-700 border border-gray-200 transition-colors"
                      >
                        {img.path}
                      </button>
                      {copiedPath === img.path && (
                        <p className="text-xs text-green-600 mt-1">✓ Copied to clipboard!</p>
                      )}
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Used in:</p>
                      <code className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                        {img.used}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quick Reference
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Image Dimensions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Hero Image: <strong>1200x800px</strong></li>
                <li>• Avatars: <strong>100x100px</strong> (circular)</li>
                <li>• Steps: <strong>800x600px</strong></li>
                <li>• Testimonials: <strong>200x200px</strong> (circular)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Supported Formats</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• JPG / JPEG</li>
                <li>• PNG</li>
                <li>• WebP (recommended for web)</li>
                <li>• SVG (for icons/logos)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
