import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactMain from '@/components/contact/ContactMain'

export const metadata: Metadata = {
  title: 'Contact Coldeck Solutions | Book a Free Cold Chain Consultation',
  description: 'Book a free 30-minute cold chain consultation with Devidas Narayanan, Founder of Coldeck Solutions. Pan India & international.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
    </>
  )
}

