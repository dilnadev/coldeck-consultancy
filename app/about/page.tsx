import type { Metadata } from 'next'
import AboutHero     from '@/components/about/AboutHero'
import FounderStory  from '@/components/about/FounderStory'
import MissionVision from '@/components/about/MissionVision'
import CompanyValues from '@/components/about/CompanyValues'

export const metadata: Metadata = {
  title: 'About Coldeck Solutions | Cold Chain Consultancy',
  description: 'Meet the founder and team behind Coldeck Solutions. Over two decades of cold chain expertise across pharma, F&B, retail and logistics.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <MissionVision />
      <CompanyValues />
    </>
  )
}

