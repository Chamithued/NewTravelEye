import { ArrowRight, Users, HeartHandshake, Leaf, BriefcaseBusiness, Globe2, Building2, Home, Handshake, Target, Network, Plane, Compass } from 'lucide-react'

const items = [
  { icon: HeartHandshake, value: '-', label: 'Women Entrepreneurs Supported' },
  { icon: Users, value: '-', label: 'Youth Entrepreneurs Supported' },
  { icon: Building2, value: '-', label: 'Micro & Small Tourism Enterprises Developed' },
  { icon: Home, value: '-', label: 'Place-Inspired Host Stays Developed' },
  { icon: Leaf, value: '-', label: 'People & Place-Inspired Experiences Developed' },
  { icon: Compass, value: '-', label: 'Destination Development Initiatives Facilitated' },
  { icon: Globe2, value: '-', label: 'Travel Corridor Partnerships Established' },
  { icon: Handshake, value: '-', label: 'Strategic Partnerships & Joint Ventures Facilitated' },
  { icon: Target, value: '-', label: 'Tourism Programmes Delivered' },
  { icon: BriefcaseBusiness, value: '-', label: 'Tourism Projects Implemented' },
  { icon: Network, value: '-', label: 'Tourism Ecosystem Initiatives Launched' },
  { icon: Plane, value: '-', label: 'Travellers Connected Through Meaningful Journeys' },
]

function ImpactCard({ item }) {
  const Icon = item.icon
  return (
    <div className="rounded-2xl bg-[#395E96] p-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#395E96] text-white">
        <Icon className="h-8 w-8" />
      </div>
      {/* <p className="text-2xl font-bold text-white">{item.value}</p> */}
      <p className="mt-3 text-sm text-white/90">{item.label}</p>
    </div>
  )
}

export default function OurGrowingImpact() {
  return (
    <section className="w-full bg-[#1C4686] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <div className="home-section-eyebrow mb-6 bg-[#214f95]/30 text-white">
          <Leaf className="h-5 w-5" aria-hidden="true" />
          People-Powered Tourism Ecosystem Indicators
        </div>

        <h2 className="home-section-title home-section-title-on-dark">Measuring Progress Towards a Stronger People-Powered Tourism Ecosystem </h2>
        <p className="mx-auto mt-8 max-w-5xl text-base font-semibold text-white/90 sm:text-lg">The People-Powered Tourism Ecosystem Indicators measure the long-term impact of developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem. Together, these indicators reflect how participation, stewardship, collaboration, innovation, and shared value creation contribute to stronger enterprises, resilient destinations, meaningful travel experiences, and lasting value for people, places, partnerships, and future generations.</p>

        <h3 className="mt-10 text-2xl font-bold text-white sm:text-3xl">Key Impact Indicators</h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <ImpactCard key={it.label} item={it} />
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/people-powered-tourism-ecosystem-indicators"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#395E96] px-8 py-4 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#31517f] sm:w-auto sm:text-lg"
          >
            <span>Explore the People-Powered Tourism Ecosystem Indicators</span>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
