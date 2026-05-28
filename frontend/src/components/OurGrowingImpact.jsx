import { Users, HeartHandshake, Leaf, MapPin, Sparkles, BriefcaseBusiness, Globe2, Building2, Home } from 'lucide-react'

const items = [
  { icon: Users, value: '120+', label: "Youth Entrepreneurs Trained & Supported" },
  { icon: HeartHandshake, value: '300+', label: 'Women Empowered' },
  { icon: BriefcaseBusiness, value: '500+', label: 'People-Powered Travel Experiences Across Sri Lanka ' },
  { icon: MapPin, value: '20+', label: "Destination Facilitation Centers Across Sri Lanka " },
  { icon: Sparkles, value: '100+', label: 'Regenerative Tourism Activities' },
  { icon: Leaf, value: '100+', label: 'Developed Ecosystem Support Services Across Sri Lanka' },
  { icon: Building2, value: '100+', label: 'Inbound Travelers Served' },
  { icon: Globe2, value: '100+', label: 'Outbound Travelers Served' },
  { icon: Home, value: '100+', label: 'Domestic Travelers Served' },
]

function ImpactCard({ item }) {
  const Icon = item.icon
  return (
    <div className="rounded-2xl bg-[#395E96] p-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#395E96] text-white">
          <Icon className="h-8 w-8" />
        </div>
      <p className="text-2xl font-bold text-white">{item.value}</p>
      <p className="mt-3 text-sm text-white/90">{item.label}</p>
    </div>
  )
}

export default function OurGrowingImpact() {
  return (
    <section className="w-full bg-[#1C4686] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#214f95]/30 px-4 py-2 text-sm font-semibold text-white shadow-sm mb-6">
          <span className="text-base">🌱</span>
          Our Growing Impact
        </div>

        <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Our Growing Impact</h2>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg font-semibold text-white/90">Real numbers that reflect our commitment to people, planet, and prosperity.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <ImpactCard key={it.label} item={it} />
          ))}
        </div>
      </div>
    </section>
  )
}
