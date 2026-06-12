import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Leaf,
  MapPinned,
  Plane,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const travelPurposes = [
  { label: 'Leisure and holiday travel', icon: Plane },
  { label: 'Cultural and heritage journeys', icon: Landmark },
  { label: 'Pilgrimage and spiritual travel', icon: Heart },
  { label: 'Wellness and lifestyle travel', icon: Leaf },
  { label: 'Educational and learning experiences', icon: GraduationCap },
  { label: 'Business and professional travel', icon: BriefcaseBusiness },
  { label: 'Destination weddings, celebrations, and special occasions', icon: Sparkles },
  { label: 'Meetings, incentives, conferences, and events (MICE)', icon: Building2 },
  { label: 'Special interest and community-based travel', icon: Users },
]

function SectionHeading({ icon: Icon, title, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-center justify-center' : 'items-start',
        ].join(' ')}
      >
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
    </div>
  )
}

function TravelPurposeCard({ item }) {
  const Icon = item.icon

  return (
    <article className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-base font-bold leading-6 text-[#214F95] sm:text-lg">{item.label}</h3>
    </article>
  )
}

export default function TravelCorridors() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Travel Corridors banner"
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
              <span className="block">TRAVEL CORRIDORS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting Nations Through Meaningful Travel
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Travel has the power to do more than connect destinations. It can strengthen relationships, encourage cultural understanding, inspire collaboration, and create lasting value for people and places.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Traveleye Travel Corridors is a people-powered approach to international travel that connects Sri Lanka with partner countries through meaningful journeys, cultural exchange, business engagement, celebrations, and long-term tourism collaboration.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Rather than viewing travel as a one-way movement of visitors, the Travel Corridor approach encourages two-way connections that bring people, cultures, destinations, and tourism ecosystems closer together.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={MapPinned}
            title="Beyond Traditional Inbound and Outbound Tourism"
          />

          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Travel Corridors are designed to strengthen tourism relationships between Sri Lanka and partner countries through authentic, responsible, and meaningful travel.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Each corridor may support a diverse range of travel purposes and cross-border experiences, including:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {travelPurposes.map((item) => (
              <TravelPurposeCard key={item.label} item={item} />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            By encouraging travel in both directions, the corridors help create stronger connections between people, destinations, enterprises, and tourism ecosystems while fostering long-term relationships between nations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Handshake} title="A People-Powered Approach" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Guided by the Traveleye People-Powered Tourism (PPT) Framework, Travel Corridors encourage collaboration between tourism enterprises, entrepreneurs, communities, institutions, destination stakeholders, and travel partners across borders.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By connecting people and place through meaningful travel, the corridor approach seeks to create richer traveller experiences while strengthening tourism ecosystems through participation, stewardship, collaboration, innovation, and shared value creation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Building Long-Term Tourism Relationships" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Travel Corridors are more than travel routes or destination promotions.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            They are long-term platforms that encourage meaningful engagement between countries through tourism, culture, education, business, wellness, celebrations, and people-to-people connections.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            By fostering mutual understanding and collaboration, the corridors contribute to richer traveller experiences, stronger tourism enterprises, and more resilient destinations while supporting sustainable tourism development.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Users} title="Part of the Traveleye Travel Collective" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Traveleye Travel Corridors forms part of the Traveleye Travel Collective, connecting nations through people and place while contributing to the broader Traveleye People-Powered Tourism Ecosystem.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Together, the Travel Collective seeks to create tourism that is meaningful, collaborative, inclusive, and capable of generating long-term value for travellers, destinations, enterprises, and future generations.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sparkles} title="Looking Ahead" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            As tourism continues to evolve, Traveleye Travel Corridors seeks to strengthen meaningful connections between Sri Lanka and the world through people-powered partnerships, shared experiences, and long-term collaboration.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            By encouraging responsible travel, cultural understanding, innovation, and stronger tourism relationships between nations, the Travel Corridor approach aims to contribute to more resilient destinations, richer traveller experiences, and greater shared value for people and places.
          </p>
          <p className="mt-6 text-sm font-semibold leading-7 text-[#2f6b4f] sm:text-base sm:leading-8">
            Together, we believe tourism can become a bridge that connects communities, cultures, opportunities, and nations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Begin the Conversation" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether you are a travel partner, tourism enterprise, entrepreneur, destination organisation, institution, investor, or ecosystem collaborator, we welcome opportunities to explore meaningful travel connections between Sri Lanka and the world.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Together, we can strengthen tourism through collaboration, cultural exchange, and people-powered partnerships that create lasting value for people and places.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
            </p>
            <p className="mt-5 text-lg font-bold text-[#1f4f93] sm:text-2xl">
              Connecting Nations. Enriching People. Strengthening Tourism.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
