import type { Metadata } from 'next'
import SectorsHero     from '@/components/sectors/SectorsHero'
import SectorsGrid     from '@/components/sectors/SectorsGrid'

export const metadata: Metadata = {
  title: 'Sectors | Coldeck Solutions Cold Chain Consultancy',
  description: 'Cold chain consultancy for pharmaceutical & healthcare, F&B, modern retail, logistics, and Q-commerce sectors across India.',
}

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <SectorsGrid />
    </>
  )
}

