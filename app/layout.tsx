import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Super Construction Company',
  description: 'Premium real estate and construction services — Navi Mumbai',
  titleTemplate: '%s | Super Construction Company — Navi Mumbai',
  openGraph: {
    title: 'Super Construction Company — Real Estate Navi Mumbai',
    description: '40+ years of premium construction and real estate services in Navi Mumbai.',
    siteName: 'Super Construction Company',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Super Construction Company — Navi Mumbai',
      },
    ],
  },
  metadataBase: new URL('https://www.superconstruction.example'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-white text-deep-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
