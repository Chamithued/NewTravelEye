import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Leaf,
  Link2,
  MapPinned,
  Plane,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../../assets/subhero/pillars/Travel Corridor Development Model.jpg'
import ExploreEcosystem from '../../components/ExploreEcosystem'
import FooterLinks from '../../components/FooterLinks'

const engagementOpportunities = [
  { label: 'Leisure and holiday travel', icon: Plane },
  { label: 'Cultural and heritage journeys', icon: Landmark },
  { label: 'Pilgrimage and spiritual travel', icon: Heart },
  { label: 'Wellness and lifestyle experiences', icon: Leaf },
  { label: 'Educational and learning programmes', icon: GraduationCap },
  { label: 'Business and professional travel', icon: BriefcaseBusiness },
  { label: 'Destination weddings and celebrations', icon: Sparkles },
  { label: 'Meetings, incentives, conferences, and events (MICE)', icon: Building2 },
  { label: 'Special interest travel', icon: Users },
  { label: 'Tourism partnerships and collaborative initiatives', icon: Handshake },
]

const relationshipOutcomes = [
  { label: 'Stronger tourism partnerships', icon: Handshake },
  { label: 'Greater market connectivity', icon: Link2 },
  { label: 'Enhanced destination awareness', icon: MapPinned },
  { label: 'New opportunities for travel and trade', icon: BriefcaseBusiness },
  { label: 'Richer cultural exchange', icon: Landmark },
  { label: 'Sustainable tourism growth', icon: Sprout },
  { label: 'Long-term shared value for people and places', icon: Users },
]

const sharedValuePoints = [
  { label: 'Richer travel experiences', icon: Sparkles },
  { label: 'Stronger tourism partnerships', icon: Handshake },
  { label: 'Greater cultural understanding', icon: Landmark },
  { label: 'Enhanced destination visibility', icon: MapPinned },
  { label: 'Improved market connectivity', icon: Link2 },
  { label: 'Sustainable tourism development', icon: Leaf },
  { label: 'More resilient tourism ecosystems', icon: Sprout },
  { label: 'Long-term shared value creation', icon: Users },
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

function IconCard({ item }) {
  const Icon = item.icon

  return (
    <article className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:p-5">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-sm font-bold leading-6 text-[#214F95] sm:text-base">{item.label}</h3>
    </article>
  )
}

export default function TravelCorridorDevelopmentModel() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Travel Corridor Development Model banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/14" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">Travel Corridor</span>
              <span className="block">Development Model</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting Nations Through Meaningful Travel
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Travel Corridor Development Model" />
          <div className="mx-auto mt-6 max-w-5xl text-center">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Tourism has the power to do more than connect destinations. It can strengthen relationships between countries, encourage cultural understanding, create economic opportunities, and foster meaningful connections between people and places.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Travel Corridor Development Model is a strategic tourism connectivity and market development approach within the Traveleye People-Powered Tourism Framework. The model seeks to strengthen long-term tourism relationships between Sri Lanka and selected international markets through meaningful travel, cultural exchange, education, business engagement, celebrations, and collaborative tourism development.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Rather than viewing tourism as a one-way movement of visitors, the model encourages two-way connections that bring people, cultures, destinations, enterprises, and tourism ecosystems closer together while creating shared value for all stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={MapPinned} title="Beyond Traditional Inbound and Outbound Tourism" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The Travel Corridor Development Model encourages a broader approach to tourism development by fostering meaningful engagement between countries through travel and collaboration.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Travel corridors may support a diverse range of tourism and cross-border engagement opportunities, including:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engagementOpportunities.map((item) => (
              <IconCard key={item.label} item={item} />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By encouraging travel and engagement in both directions, the model helps strengthen relationships between destinations, enterprises, institutions, and communities while fostering deeper connections between nations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Users} title="A People-Powered Approach" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Guided by the principles of the Traveleye People-Powered Tourism Framework, the Travel Corridor Development Model encourages collaboration between tourism enterprises, travel professionals, entrepreneurs, institutions, destination stakeholders, and strategic partners across borders.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The model recognises that stronger tourism relationships are built through participation, collaboration, stewardship, innovation, and shared value creation.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By connecting people and place through meaningful travel, travel corridors contribute to richer visitor experiences while supporting stronger and more resilient tourism ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Strengthening Tourism Relationships Between Nations" />
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Travel corridors are more than tourism marketing initiatives or travel routes.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              They are long-term relationship-building platforms that encourage meaningful engagement between countries through tourism, culture, education, business, wellness, celebrations, and people-to-people connections.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Through collaboration and mutual understanding, travel corridors help create:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relationshipOutcomes.map((item) => (
              <IconCard key={item.label} item={item} />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The objective is to create tourism relationships that extend beyond visitor arrivals and contribute to deeper and more enduring connections between nations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={BookOpen} title="Position Within the Traveleye Ecosystem" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Travel Corridor Development Model operates within the People-Powered Travel Collective (PPTC), one of the four pillars of the Traveleye People-Powered Tourism Framework.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The model supports the development of meaningful tourism relationships between Sri Lanka and selected international markets through travel, cultural exchange, education, business engagement, celebrations, and long-term collaboration.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By strengthening connections between people, destinations, enterprises, and institutions, the model contributes to a more connected, collaborative, and resilient tourism ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Creating Shared Value Through Tourism" />
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Travel Corridor Development Model seeks to create value for travellers, destinations, tourism enterprises, institutions, and partner markets alike.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By encouraging meaningful participation and long-term collaboration, the model contributes to:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedValuePoints.map((item) => (
              <IconCard key={item.label} item={item} />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The model recognises that tourism creates its greatest impact when it benefits both travellers and the destinations they visit.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sparkles} title="Looking Ahead" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            As tourism continues to evolve, the Travel Corridor Development Model seeks to strengthen meaningful connections between Sri Lanka and the world through partnership, collaboration, innovation, and shared purpose.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            By encouraging responsible travel, stronger tourism relationships, and long-term engagement between countries, the model aims to contribute to richer traveller experiences, stronger tourism enterprises, and more resilient destinations.
          </p>
          <p className="mt-8 text-lg font-bold text-[#1f4f93] sm:text-2xl">
            Together, we believe tourism can become a bridge that connects nations, cultures, communities, and opportunities while creating lasting value for people and places.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Plane} title="Connecting Nations. Enriching People. Strengthening Tourism." />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            The Travel Corridor Development Model reflects Traveleye's belief that tourism can be a powerful force for connection, collaboration, cultural understanding, and shared prosperity.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            By strengthening tourism relationships between countries through meaningful travel and long-term engagement, the model seeks to create lasting value for travellers, destinations, enterprises, and communities while contributing to a more connected and resilient future for tourism.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}

