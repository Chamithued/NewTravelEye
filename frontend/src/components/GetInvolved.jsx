import { Building2, Globe2, Leaf, Users, HeartHandshake } from 'lucide-react'

import coOwnImg from '../assets/client/Join the movement2.png'
import inboundImg from '../assets/client/Partner with Us for Inbound.png'
import collaborateImg from '../assets/client/Colleborate with Us.png'
import purposeImg from '../assets/client/Travelwith Purpose.png'
import supportLocalImg from '../assets/client/Support Local People & Communities.png'
import movementImg from '../assets/client/Discover the world.png'

const cards = [
  {
    title: 'Be a Co-Owner',
    subtitle: 'Co-own a Traveleye venture and participate in building regenerative, people-centered tourism.',
    icon: Building2,
    accent: '#275CAD',
    image: coOwnImg,
  },
  {
    title: 'Partner With Us (Inbound)',
    subtitle: 'Access tailor-made journeys, luxury travel programs, and MICE opportunities in Sri Lanka.',
    icon: Globe2,
    accent: '#0ea5a4',
    image: inboundImg,
  },
  {
    title: 'Collaborate With Us',
    subtitle: 'Collaboration with NGOs and development partners to support inclusive, community-led initiatives.',
    icon: Leaf,
    accent: '#16a34a',
    image: collaborateImg,
  },
  {
    title: 'Travel With Purpose',
    subtitle: 'Experience authentic journeys that benefit local people, culture, and destinations.',
    icon: Globe2,
    accent: '#7c3aed',
    image: purposeImg,
  },
  {
    title: 'Support Local People & Communities',
    subtitle: 'Contribute to initiatives that empower women, youth, and local enterprises.',
    icon: Users,
    accent: '#f59e0b',
    image: supportLocalImg,
  },
  {
    title: 'A Growing Movement',
    subtitle: 'People-powered tourism shaping a more inclusive and regenerative future for Sri Lanka.',
    icon: HeartHandshake,
    accent: '#ef4444',
    image: movementImg,
  },
]

function InvolvedCard({ card }) {
  const Icon = card.icon

  return (
    <article className="relative overflow-hidden rounded-2xl h-80 sm:h-96">
      <img src={card.image} alt={card.title} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-between">
          <div>
          <div className="inline-flex flex-col items-start gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white" style={{ backgroundColor: card.accent }}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
          </div>
        </div>

        <div>
          <p className="mb-4 max-w-xl text-sm text-white/85">{card.subtitle}</p>

          <div>
            <button className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/5">
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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#dfe7f3] px-5 py-2 text-[1rem] font-bold text-[#214f95] shadow-sm mb-6">
            <span className="text-xl">☀️</span>
            Get Involved
          </div>

          <h2 className="text-3xl font-semibold text-[#172544] sm:text-4xl lg:text-5xl">Every Journey Matters</h2>
          <p className="mt-4 mx-auto max-w-3xl text-center text-base font-medium text-[#40566a]">
            Tourism is more than where you go — it's about the impact you create and the people you empower. Traveleye Alliance's People-Powered Tourism Ecosystem exists for People, Planet, and Prosperity.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <InvolvedCard key={c.title} card={c} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="italic font-bold text-lg sm:text-xl text-[#1f4a78]">“Join the People-Powered Tourism Movement — where every action creates impact.”</p>
        </div>
      </div>
    </section>
  )
}
