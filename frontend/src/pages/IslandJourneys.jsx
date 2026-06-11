import {
  BookOpen,
  Compass,
  GraduationCap,
  Globe2,
  Heart,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPinned,
  Mountain,
  Plane,
  Sparkles,
  TentTree,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Discover Sri Lanka - Domestic.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const experiences = [
  { label: 'Leisure & Holiday Travel', icon: Plane },
  { label: 'Weekend Escapes & Getaways', icon: TentTree },
  { label: 'Pilgrimage & Spiritual Travel', icon: Heart },
  { label: 'Nature & Wildlife Experiences', icon: Leaf },
  { label: 'Cultural & Heritage Travel', icon: Landmark },
  { label: 'Family & Group Travel', icon: Users },
  { label: 'Educational & Learning Journeys', icon: GraduationCap },
  { label: 'Wellness & Lifestyle Travel', icon: Sparkles },
  { label: 'Adventure & Outdoor Experiences', icon: Mountain },
  { label: 'Special Interest Travel', icon: BookOpen },
]

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

export default function IslandJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Island Journeys banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE</span>
              <span className="block">ISLAND JOURNEYS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting Sri Lankans Across the Country - රට වටා රට දකින්න
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Globe2} title="Explore Sri Lanka, Closer to Home" />

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveleye Island Journeys encourages Sri Lankans to discover the diverse destinations, cultures, landscapes, traditions, and experiences that exist across their own country.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            From weekend getaways and family holidays to pilgrimages, nature escapes, educational visits, wellness retreats, and special interest travel, the platform creates opportunities to explore Sri Lanka in meaningful and memorable ways.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            As part of the Traveleye Travel Collective, Island Journeys is guided by the belief that domestic travel strengthens connections between people, communities, cultures, and destinations while encouraging a deeper appreciation of Sri Lanka.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Leaf}
            title="Experiences Across the Country"
            subtitle="Whether travelling for leisure, relaxation, discovery, learning, family time, faith, or celebration, Traveleye Island Journeys offers access to a diverse range of travel opportunities across Sri Lanka."
          />

          <p className="mt-6 text-center text-sm font-semibold text-[#475569] sm:text-base">Experiences may include:</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {experiences.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-[#eef4ef] bg-white p-4 text-center shadow-sm"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-6 text-[#214F95] sm:text-base">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl lg:justify-start">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
                <MapPinned className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>Connecting Sri Lankans Across the Country</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b] lg:mx-0" />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Sri Lanka is more than the places we know.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              It is a country rich in landscapes, cultures, traditions, communities, and stories waiting to be discovered.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Island Journeys seeks to encourage Sri Lankans to travel more widely within their own country, creating opportunities to experience new destinations, support local tourism, and build stronger connections with the people and places that make Sri Lanka unique.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="Rediscover Sri Lanka" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether exploring hidden gems, iconic destinations, cultural traditions, natural wonders, or local experiences, every journey offers an opportunity to see Sri Lanka from a new perspective.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            By encouraging travel across the country, Island Journeys seeks to help Sri Lankans rediscover the richness and diversity of their own island while creating meaningful memories along the way.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={HeartHandshake} title="Traveleye Island Journeys" />
          <p className="mt-6 text-sm font-semibold text-[#6b7894] sm:text-base">
            Connecting Sri Lankans Across the Country
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Begin the Conversation</h3>
            <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Whether you are planning a journey, experience, celebration, or special occasion, we would be delighted to help you explore the possibilities.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to discuss your requirements and begin planning your experience.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
