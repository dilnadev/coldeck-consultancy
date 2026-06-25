import type { Metadata } from 'next'
import ServicesHero    from '@/components/services/ServicesHero'
import ServicesExpanded from '@/components/services/ServicesExpanded'

export const metadata: Metadata = {
  title: 'Services | Coldeck Solutions Cold Chain Consultancy',
  description: 'Feasibility & strategic planning, cold storage design, operations optimization, and post-implementation support for cold chain businesses across India.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesExpanded />
    </>
  )
}

