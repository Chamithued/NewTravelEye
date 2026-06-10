import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import TravelCollective from './pages/TravelCollective'
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
import BharatLankaJourneys from './pages/BharatLankaJourneys'
import CelebrationsEvents from './pages/CelebrationsEvents'
import GlobalJourneys from './pages/GlobalJourneys'
import ExploreEcosystemPage from './pages/ExploreEcosystemPage'
import GovernanceEthics from './pages/GovernanceEthics'
import MediaPress from './pages/MediaPress'
import OurEcosystemApproach from './pages/OurEcosystemApproach'
import VisionMission from './pages/VisionMission'
import WhyTraveleyePage from './pages/WhyTraveleyePage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="travel-collective" element={<TravelCollective />} />
          <Route path="people-powered-tourism-framework" element={<PeoplePoweredTourismFramework />} />
          <Route path="sri-lanka-journeys" element={<SriLankaJourneys />} />
          <Route path="island-journeys" element={<IslandJourneys />} />
          <Route path="prive-collection" element={<PriveCollection />} />
          <Route path="bharat-lanka-journeys" element={<BharatLankaJourneys />} />
          <Route path="celebrations-events" element={<CelebrationsEvents />} />
          <Route path="global-journeys" element={<GlobalJourneys />} />
          <Route path="explore-ecosystem" element={<ExploreEcosystemPage />} />
          <Route path="our-ecosystem-approach" element={<OurEcosystemApproach />} />
          <Route path="governance-ethics" element={<GovernanceEthics />} />
          <Route path="media-press" element={<MediaPress />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="why-traveleye" element={<WhyTraveleyePage />} />
          <Route path="stays" element={<Stays />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="destination-facilitation" element={<DestinationFacilitation />} />
          <Route path="support-services" element={<SupportServices />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
