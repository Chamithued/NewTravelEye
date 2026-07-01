import { Users, HeartHandshake, Leaf, MapPin, Sparkles, BriefcaseBusiness, Globe2, Building2, Home, Handshake, Target, Network, Plane, Compass } from 'lucide-react'

const items = [
  { icon: HeartHandshake, value: '—', label: 'Women Entrepreneurs Supported' },
  { icon: Users, value: '—', label: 'Youth Entrepreneurs Supported' },
  { icon: Compass, value: '—', label: 'Travel Corridor Ventures Established' },
  { icon: Home, value: '—', label: 'Place-Inspired Stays Developed' },
  { icon: Sparkles, value: '—', label: 'People & Place-Inspired Experiences Developed' },
  { icon: Target, value: '—', label: 'Destination Development Initiatives' },
  { icon: Handshake, value: '—', label: 'Destination & Ecosystem Partnerships' },
  { icon: Network, value: '—', label: 'Ecosystem Support Ventures Developed' },
  { icon: BriefcaseBusiness, value: '—', label: 'Tourism Enterprises Supported' },
  { icon: Plane, value: '—', label: 'Inbound Travellers Served' },
  { icon: Building2, value: '—', label: 'Domestic Travellers Served' },
  { icon: Globe2, value: '—', label: 'Outbound Travellers Served' },
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
          Key Indicators
        </div>

        <h2 className="home-section-title home-section-title-on-dark">Strengthening Tourism Through People, Participation, and Partnership</h2>
        <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg font-semibold text-white/90">Our journey continues through participation, stewardship, collaboration, innovation, and ecosystem development, creating meaningful opportunities that strengthen people, place, and tourism ecosystems across Sri Lanka.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <ImpactCard key={it.label} item={it} />
          ))}
        </div>
      </div>
    </section>
  )
}
