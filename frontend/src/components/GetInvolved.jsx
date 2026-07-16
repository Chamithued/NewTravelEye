import { Building2, Globe2, Leaf, Users, HeartHandshake, Handshake, Plane, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'

import coOwnImg from '../assets/client/Be A Co-Owner2.png'
import inboundImg from '../assets/client/Partner With Us - Inbound1.png'
import collaborateImg from '../assets/client/Collaborate With Us1.png'
import purposeImg from '../assets/client/Travelwith Purpose.png'
import supportLocalImg from '../assets/client/Support Local People & Communities.png'
import movementImg from '../assets/client/Join the movement2.png'
import BTCP from '../assets/involved/Become a Travel Corridor Partner.jpg'
import BTVP from '../assets/involved/Become a Travel Venture Partner.jpg'
import DPAPIE from '../assets/involved/Develop a People & Place-Inspired Experience.jpg'
import DESV from '../assets/involved/Develop an Ecosystem Support Venture.jpg'
import DPIS from '../assets/involved/Develop Place Inspired Stay.jpg'
import JVASI from '../assets/involved/Joint Ventures & Strategic Investments.jpg'


const cards = [
  {
    title: 'Become a Travel Venture Partner',
    subtitle: 'Develop inbound and outbound travel ventures and collaborative partnerships that connect Sri Lanka with international travel markets through meaningful journeys.',
    icon: Building2,
    accent: '#275CAD',
    image: BTVP,
  },
  {
    title: 'Become a Travel Corridor Partner',
    subtitle: 'Develop exclusive travel corridor partnerships that strengthen tourism relationships between Sri Lanka and international destinations through meaningful two-way travel.',
    icon: Sprout,
    accent: '#15803d',
    image: BTCP,
  },
  {
    title: 'Develop a Place-Inspired Host Stay',
    subtitle: 'Create authentic host stays that reflect Sri Lanka\'s culture, hospitality, landscapes, and the unique identity of each destination.',
    icon: Globe2,
    accent: '#0ea5a4',
    image: DPIS,
  },
  {
    title: 'Develop a People & Place-Inspired Experience',
    subtitle: 'Create meaningful tourism experiences inspired by Sri Lanka\'s people, culture, heritage, nature, creativity, traditions, and everyday life.',
    icon: Leaf,
    accent: '#16a34a',
    image: DPAPIE,
  },
  {
    title: 'Develop a Tourism Enterprise Support Venture',
    subtitle: 'Support the growth of tourism enterprises through technology, training, consultancy, innovation, capability development, digital solutions, and ecosystem support services.',
    icon: Globe2,
    accent: '#7c3aed',
    image: DESV,
  },
  {
    title: 'Partner in Destination Development',
    subtitle: 'Collaborate with destinations, communities, tourism enterprises, and institutions to strengthen participation, stewardship, and place-based tourism development.',
    icon: Users,
    accent: '#f59e0b',
    image: movementImg,
  },
  {
    title: 'Joint Ventures & Strategic Investments',
    subtitle: 'Explore collaborative investment and joint venture opportunities that strengthen tourism enterprises, destinations, travel initiatives, and the wider tourism ecosystem.',
    icon: HeartHandshake,
    accent: '#ef4444',
    image: JVASI,
  },
  {
    title: 'Collaborate with Traveleye Alliance',
    subtitle: 'Work alongside government agencies, tourism authorities, development organisations, educational institutions, cooperative movements, NGOs, investors, and industry partners to advance people-powered tourism initiatives.',
    icon: Handshake,
    accent: '#0f766e',
    image: collaborateImg,
  },
  {
    title: 'Travel with Purpose',
    subtitle: 'Experience meaningful journeys that celebrate Sri Lanka\'s people, places, and culture while contributing to stronger destinations and a thriving People-Powered Tourism Ecosystem.',
    icon: Plane,
    accent: '#2563eb',
    image: purposeImg,
  },
]

function InvolvedCard({ card }) {
  const Icon = card.icon
  const readableTextShadow =
    '0 1px 2px rgba(0,0,0,0.65), 0 0 1px rgba(0,0,0,0.85)'

  return (
    <article className="relative min-h-80 overflow-hidden rounded-2xl sm:min-h-96">
      <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#0f2a55]/24 via-[#0f2a55]/12 to-transparent p-5 sm:p-6">
          <div>
          <div className="inline-flex flex-col items-start gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white" style={{ backgroundColor: card.accent }}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3
              className="text-lg font-semibold leading-tight text-white sm:text-xl"
              style={{ textShadow: readableTextShadow }}
            >
              {card.title}
            </h3>
          </div>
        </div>

        <div>
          <p
            className="mb-4 max-w-xl text-sm text-white/90 sm:text-base"
            style={{ textShadow: readableTextShadow }}
          >
            {card.subtitle}
          </p>

          <div>
            {/* <button className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 sm:w-auto">
              <span>Learn More</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-transparent">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button> */}
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
            Grow Together with Traveleye Alliance
          </div>

          <h2 className="home-section-title">Every Contribution Strengthens the Ecosystem</h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mx-auto mt-5 max-w-6xl space-y-6 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
            <p>
              The <strong>Traveleye People-Powered Tourism Ecosystem</strong> is built through the collective contributions of travellers, tourism enterprises, entrepreneurs, destinations, communities, institutions, development partners, and industry stakeholders.
            </p>
            <p>
              Whether you are looking to develop a tourism enterprise, create authentic tourism experiences, strengthen destinations, build strategic partnerships, or contribute your expertise, there are many ways to participate in building a stronger, more connected, and more resilient tourism ecosystem across Sri Lanka.
            </p>
          </div>
          {/* <div className="mt-7">
            <Link
              to="/how-you-can-get-involved"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#275CAD] px-8 py-4 text-center text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
            >
              Join the Traveleye Ecosystem
            </Link>
          </div> */}
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            Become Part of the Traveleye People-Powered Tourism Ecosystem
          </h3>
        </div>

        <div className="mt-8 mx-auto max-w-6xl">
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
