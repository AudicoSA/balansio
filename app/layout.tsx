import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BALANSIO - AI-Powered Bookkeeping for South African Businesses',
  description: 'Save 15+ hours every month on bookkeeping. AI automatically captures receipts, categorizes transactions, and reconciles your books on Xero.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
