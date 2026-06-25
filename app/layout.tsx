import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageLoader from '@/components/ui/PageLoader'
import ScrollProgress from '@/components/ui/ScrollProgress'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coldeck | Cold Chain Consultancy India',
  description:
    'Expert cold chain consultancy for pharma, F&B, retail & logistics. Pan India & international. Book a free consultation.',
  keywords:
    'cold chain consultancy, cold storage India, pharmaceutical cold chain, food logistics India, cold storage design, temperature controlled warehouse',
  authors: [{ name: 'Coldeck' }],
  openGraph: {
    title: 'Coldeck | Cold Chain Consultancy India',
    description:
      'Expert cold chain consultancy for pharma, F&B, retail & logistics. Pan India & international.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Coldeck',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coldeck | Cold Chain Consultancy India',
    description: 'Expert cold chain consultancy — Pan India & International.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <PageLoader />
        <ScrollProgress />
        <WhatsAppButton />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

