import Hero         from '@/components/home/Hero'
import StatsBar      from '@/components/home/StatsBar'
import TrustedBar    from '@/components/home/TrustedBar'
import WhoWeAre      from '@/components/home/WhoWeAre'
import Services      from '@/components/home/Services'
import Sectors     from '@/components/home/Sectors'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import FAQ         from '@/components/home/FAQ'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBar />
      <WhoWeAre />
      <StatsBar />
      <Services />
      <WhyChooseUs />
      <Sectors />
      <FAQ />
    </>
  )
}

