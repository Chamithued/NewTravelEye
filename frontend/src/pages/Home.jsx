import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import PeoplePoweredTourismIntro from '../components/PeoplePoweredTourismIntro'
import ExplorePlatformsSection from '../components/ExplorePlatformsSection'
import OurJourney from '../components/OurJourney'
import CatalogueLibrarySection from '../components/CatalogueLibrarySection'
import FivePillars from '../components/FivePillars'
import HomeFrameworkSections from '../components/HomeFrameworkSections'
import WhyTraveleye from '../components/WhyTraveleye'
import EcosystemSection from '../components/EcosystemSection'
import PeoplePoweredTourismFrameworkSection from '../components/PeoplePoweredTourismFrameworkSection'
import PeoplePoweredTourismDevelopmentModelsSection from '../components/PeoplePoweredTourismDevelopmentModelsSection'
import PeoplePoweredTourismStrategicPillarsSection from '../components/PeoplePoweredTourismStrategicPillarsSection'
import PeoplePoweredTourismOutcomesSection from '../components/PeoplePoweredTourismOutcomesSection'
import GetInvolved from '../components/GetInvolved'
import OurGrowingImpact from '../components/OurGrowingImpact'
import FooterLinks from '../components/FooterLinks'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      {/* <QuickLinks /> */}
      <ExplorePlatformsSection />
      <OurJourney />
      <PeoplePoweredTourismIntro />
      <EcosystemSection />
      <PeoplePoweredTourismFrameworkSection />
      <PeoplePoweredTourismStrategicPillarsSection />
      <PeoplePoweredTourismDevelopmentModelsSection />
      <FivePillars />
      <HomeFrameworkSections />
      <PeoplePoweredTourismOutcomesSection />
      <WhyTraveleye />
      <GetInvolved />
      <OurGrowingImpact />
      <CatalogueLibrarySection />
      <FooterLinks />
    </main>
  )
}
