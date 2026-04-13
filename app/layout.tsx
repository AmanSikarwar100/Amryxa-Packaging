'use client'
import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/ui/Cursor'
import Ticker from '@/components/ui/Ticker'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <title>Amryxa — Premium Custom Packaging</title>
        <meta name="description" content="India's premium B2B custom packaging manufacturer. Luxury rigid boxes, folding cartons, carry bags, and labels." />
      </head>
      <body>
        <Cursor />
        <div className="fixed inset-x-0 top-0 z-[1000]">
          <Navbar />
          <Ticker />
        </div>
        <main className="pt-[138px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
