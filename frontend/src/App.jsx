import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import TravelCollective from './pages/TravelCollective'
import PeoplePoweredTravelCollective from './pages/PeoplePoweredTravelCollective'
import PeoplePoweredHostExperiences from './pages/PeoplePoweredHostExperiences'
import PeoplePoweredEcosystemSupport from './pages/PeoplePoweredEcosystemSupport'
import PeoplePoweredDestinationFacilitation from './pages/PeoplePoweredDestinationFacilitation'
import PeoplePoweredTourismFramework from './pages/PeoplePoweredTourismFramework'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import SupportServices from './pages/SupportServices'
import Stays from './pages/Stays'
import DestinationFacilitation from './pages/DestinationFacilitation'
import SriLankaJourneys from './pages/SriLankaJourneys'
import IslandJourneys from './pages/IslandJourneys'
import PriveCollection from './pages/PriveCollection'
import TravelCorridors from './pages/TravelCorridors'
import BharatLankaJourneys from './pages/BharatLankaJourneys'
import VietLankaJourneys from './pages/VietLankaJourneys'
import SiamLankaJourneys from './pages/SiamLankaJourneys'
import CelebrationsEvents from './pages/CelebrationsEvents'
import GlobalJourneys from './pages/GlobalJourneys'
import ExploreEcosystemPage from './pages/ExploreEcosystemPage'
import GovernanceEthics from './pages/GovernanceEthics'
import MediaPress from './pages/MediaPress'
import OurEcosystemApproach from './pages/OurEcosystemApproach'
import VisionMission from './pages/VisionMission'
import WhyTraveleyePage from './pages/WhyTraveleyePage'
import BecomeATravelCorridorPartner from './pages/BecomeATravelCorridorPartner'
import BecomeATravelVenturePartner from './pages/BecomeATravelVenturePartner'
import DevelopEcosystemSupportVenture from './pages/DevelopEcosystemSupportVenture'
import PartnerInDestinationDevelopment from './pages/PartnerInDestinationDevelopment'
import HowYouCanGetInvolved from './pages/HowYouCanGetInvolved'
import JointVenturesStrategicInvestments from './pages/JointVenturesStrategicInvestments'
import CollaborateWithUs from './pages/CollaborateWithUs'
import TravelWithPurpose from './pages/TravelWithPurpose'
import SupportPeoplePoweredTourism from './pages/SupportPeoplePoweredTourism'
import DestinationStewardshipModel from './pages/DestinationStewardshipModel'
import TravelCorridorDevelopmentModel from './pages/TravelCorridorDevelopmentModel'
import ParticipationSharedStewardship from './pages/ParticipationSharedStewardship'
import GloballyAlignedLocallyGrounded from './pages/GloballyAlignedLocallyGrounded'
import GuidingPrinciples from './pages/GuidingPrinciples'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="travel-collective" element={<TravelCollective />} />
          <Route path="people-powered-travel-collective" element={<PeoplePoweredTravelCollective />} />
          <Route path="people-powered-host-experiences" element={<PeoplePoweredHostExperiences />} />
          <Route path="people-powered-ecosystem-support" element={<PeoplePoweredEcosystemSupport />} />
          <Route path="people-powered-destination-facilitation" element={<PeoplePoweredDestinationFacilitation />} />
          <Route path="people-powered-tourism-framework" element={<PeoplePoweredTourismFramework />} />
          <Route path="destination-stewardship-model" element={<DestinationStewardshipModel />} />
          <Route path="travel-corridor-development-model" element={<TravelCorridorDevelopmentModel />} />
          <Route path="participation-shared-stewardship" element={<ParticipationSharedStewardship />} />
          <Route path="globally-aligned-locally-grounded" element={<GloballyAlignedLocallyGrounded />} />
          <Route path="guiding-principles" element={<GuidingPrinciples />} />
          <Route path="sri-lanka-journeys" element={<SriLankaJourneys />} />
          <Route path="island-journeys" element={<IslandJourneys />} />
          <Route path="prive-collection" element={<PriveCollection />} />
          <Route path="travel-corridors" element={<TravelCorridors />} />
          <Route path="bharat-lanka-journeys" element={<BharatLankaJourneys />} />
          <Route path="viet-lanka-journeys" element={<VietLankaJourneys />} />
          <Route path="siam-lanka-journeys" element={<SiamLankaJourneys />} />
          <Route path="celebrations-events" element={<CelebrationsEvents />} />
          <Route path="global-journeys" element={<GlobalJourneys />} />
          <Route path="explore-ecosystem" element={<ExploreEcosystemPage />} />
          <Route path="our-ecosystem-approach" element={<OurEcosystemApproach />} />
          <Route path="governance-ethics" element={<GovernanceEthics />} />
          <Route path="media-press" element={<MediaPress />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="why-traveleye" element={<WhyTraveleyePage />} />
          <Route path="how-you-can-get-involved" element={<HowYouCanGetInvolved />} />
          <Route path="become-a-travel-corridor-partner" element={<BecomeATravelCorridorPartner />} />
          <Route path="become-a-travel-venture-partner" element={<BecomeATravelVenturePartner />} />
          <Route path="develop-an-ecosystem-support-venture" element={<DevelopEcosystemSupportVenture />} />
          <Route path="partner-in-destination-development" element={<PartnerInDestinationDevelopment />} />
          <Route path="joint-ventures-strategic-investments" element={<JointVenturesStrategicInvestments />} />
          <Route path="collaborate-with-us" element={<CollaborateWithUs />} />
          <Route path="travel-with-purpose" element={<TravelWithPurpose />} />
          <Route path="support-people-powered-tourism" element={<SupportPeoplePoweredTourism />} />
          <Route path="stays" element={<Stays />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="destination-facilitation" element={<DestinationFacilitation />} />
          <Route path="support-services" element={<SupportServices />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="host-experiences" element={<PeoplePoweredHostExperiences />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
