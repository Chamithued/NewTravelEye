import { Building2, Globe2, Leaf, Users, HeartHandshake, Handshake, Plane, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'

import coOwnImg from '../assets/client/Be A Co-Owner2.png'
import inboundImg from '../assets/client/Partner With Us - Inbound1.png'
import collaborateImg from '../assets/client/Collaborate With Us1.png'
import purposeImg from '../assets/client/Travelwith Purpose.png'
import supportLocalImg from '../assets/client/Support Local People & Communities.png'
import movementImg from '../assets/client/Join the movement2.png'

const cards = [
  {
    title: 'Become a Travel Venture Partner',
    subtitle: 'Develop inbound and outbound travel ventures and partnerships connecting Sri Lanka with the world.',
    icon: Building2,
    accent: '#275CAD',
    image: coOwnImg,
  },
  {
    title: 'Become a Travel Corridor Partner',
    subtitle: 'Develop exclusive travel corridor partnerships connecting Sri Lanka with your country through meaningful two-way tourism.',
    icon: Sprout,
    accent: '#15803d',
    image: supportLocalImg,
  },
  {
    title: 'Develop a Place-Inspired Stay',
    subtitle: 'Create authentic hospitality that reflects Sri Lanka \'s culture, local character, and sense of place.',
    icon: Globe2,
    accent: '#0ea5a4',
    image: inboundImg,
  },
  {
    title: 'Develop a People & Place-Inspired Experience',
    subtitle: 'Create authentic experiences that connect travellers with Sri Lanka\'s people, culture, nature, heritage, creativity, and traditions.',
    icon: Leaf,
    accent: '#16a34a',
    image: collaborateImg,
  },
  {
    title: ' Develop an Ecosystem Support Venture',
    subtitle: 'Strengthen tourism through technology, training, advisory services, innovation, capability development, and enterprise support.',
    icon: Globe2,
    accent: '#7c3aed',
    image: purposeImg,
  },
  {
    title: 'Partner in Destination Development',
    subtitle: 'Contribute to destination participation, stewardship, and tourism ecosystem development across Sri Lanka.',
    icon: Users,
    accent: '#f59e0b',
    image: supportLocalImg,
  },
  {
    title: 'Joint Ventures & Strategic Investments',
    subtitle: 'Explore strategic partnerships and investment opportunities that strengthen tourism ecosystems.',
    icon: HeartHandshake,
    accent: '#ef4444',
    image: movementImg,
  },
  {
    title: 'Collaborate With Us',
    subtitle: 'Work with government agencies, tourism organisations, development partners, NGOs, institutions, academia, cooperative movements, and industry stakeholders.',
    icon: Handshake,
    accent: '#0f766e',
    image: collaborateImg,
  },
  {
    title: 'Travel With Purpose',
    subtitle: 'Experience meaningful journeys that create positive connections with people and place.',
    icon: Plane,
    accent: '#2563eb',
    image: purposeImg,
  },
]

function InvolvedCard({ card }) {
  const Icon = card.icon

  return (
    <article className="relative min-h-80 overflow-hidden rounded-2xl sm:min-h-96">
      <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#0f2a55]/24 via-[#0f2a55]/12 to-transparent p-5 sm:p-6">
          <div>
          <div className="inline-flex flex-col items-start gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white" style={{ backgroundColor: card.accent }}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">{card.title}</h3>
          </div>
        </div>

        <div>
          <p className="mb-4 max-w-xl text-sm sm:text-base text-white/90">{card.subtitle}</p>

          <div>
            <button className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 sm:w-auto">
              <span>Learn More</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-transparent">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function GetInvolved() {
  return (
    <section className="w-full bg-[#eaf6fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        

        <div className="mx-auto max-w-4xl text-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#dfe7f3] px-5 py-2 text-[1rem] font-bold text-[#214f95] shadow-sm mb-6"> */}
          <div className="home-section-eyebrow mb-5">
            Get Involved
          </div>

          <h2 className="home-section-title">Every Contribution Matters</h2>
          <div className="mx-auto mt-5 max-w-5xl space-y-6 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
            <p>Tourism is more than where people travel.</p>
            <p>It is about the connections, participation, and positive impact created along the way.</p>
            <p>Whether you are a traveller, tourism enterprise, destination stakeholder, entrepreneur, institution, community organisation, or ecosystem partner, there are many ways to become part of the Traveleye People-Powered Tourism Ecosystem.</p>
          </div>
          <div className="mt-7">
            <Link
              to="/how-you-can-get-involved"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#275CAD] px-8 py-4 text-center text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
            >
              Join the Traveleye Ecosystem
            </Link>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <InvolvedCard key={c.title} card={c} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
