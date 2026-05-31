import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TravelCollective from './pages/TravelCollective'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import SupportServices from './pages/SupportServices'
import Stays from './pages/Stays'
import Travel from './pages/Travel'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="travel-collective" element={<TravelCollective />} />
        <Route path="stays" element={<Stays />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="travel" element={<Travel />} />
        <Route path="support-services" element={<SupportServices />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
