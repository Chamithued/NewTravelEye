import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import OurJourney from '../components/OurJourney'
import FivePillars from '../components/FivePillars'
import WhyTraveleye from '../components/WhyTraveleye'
import EcosystemSection from '../components/EcosystemSection'
import GetInvolved from '../components/GetInvolved'
import OurGrowingImpact from '../components/OurGrowingImpact'
import FooterLinks from '../components/FooterLinks'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <QuickLinks />
      <OurJourney />
      <EcosystemSection />
      <FivePillars />
      <WhyTraveleye />
      <GetInvolved />
      <OurGrowingImpact />
      <FooterLinks />
    </main>
  )
}