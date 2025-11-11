
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://balansio.co.za'),
  title: 'BALANSIO | AI Bookkeeping for SA Businesses',
  description: 'AI-powered bookkeeping for South African businesses. Automate your accounting on Xero. Save 15+ hours per month.',
  keywords: ['AI bookkeeping', 'South Africa', 'Xero', 'small business', 'accounting', 'automation'],
  authors: [{ name: 'Balansio' }],
  openGraph: {
    title: 'BALANSIO | AI Bookkeeping for SA Businesses',
    description: 'AI-powered bookkeeping for South African businesses. Automate your accounting on Xero. Save 15+ hours per month.',
    url: '/',
    siteName: 'Balansio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Balansio AI Bookkeeping Service',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BALANSIO | AI Bookkeeping for SA Businesses',
    description: 'AI-powered bookkeeping for South African businesses. Automate your accounting on Xero. Save 15+ hours per month.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
