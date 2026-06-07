import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TravelCollective from './pages/TravelCollective'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import SupportServices from './pages/SupportServices'
import Stays from './pages/Stays'
import DestinationFacilitation from './pages/DestinationFacilitation'
import SriLankaJourneys from './pages/SriLankaJourneys'
import PriveCollection from './pages/PriveCollection'
import BharatLankaJourneys from './pages/BharatLankaJourneys'
import CelebrationsEvents from './pages/CelebrationsEvents'
import GlobalJourneys from './pages/GlobalJourneys'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="travel-collective" element={<TravelCollective />} />
        <Route path="sri-lanka-journeys" element={<SriLankaJourneys />} />
        <Route path="prive-collection" element={<PriveCollection />} />
        <Route path="bharat-lanka-journeys" element={<BharatLankaJourneys />} />
        <Route path="celebrations-events" element={<CelebrationsEvents />} />
        <Route path="global-journeys" element={<GlobalJourneys />} />
        <Route path="stays" element={<Stays />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="destination-facilitation" element={<DestinationFacilitation />} />
        <Route path="support-services" element={<SupportServices />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
