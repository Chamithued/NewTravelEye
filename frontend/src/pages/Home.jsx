import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import PeoplePoweredTourismIntro from '../components/PeoplePoweredTourismIntro'
import ExplorePlatformsSection from '../components/ExplorePlatformsSection'
import OurJourney from '../components/OurJourney'
import FivePillars from '../components/FivePillars'
import HomeFrameworkSections from '../components/HomeFrameworkSections'
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
      <PeoplePoweredTourismIntro />
      <ExplorePlatformsSection />
      <OurJourney />
      <EcosystemSection />
      <FivePillars />
      <HomeFrameworkSections />
      <WhyTraveleye />
      <GetInvolved />
      <OurGrowingImpact />
      <FooterLinks />
    </main>
  )
}
