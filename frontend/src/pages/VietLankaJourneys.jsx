import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Camera,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Leaf,
  MapPinned,
  Mountain,
  Palmtree,
  Plane,
  Sparkles,
  Sprout,
  Sun,
  Utensils,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const experienceItems = [
  { label: 'Leisure & Holiday Travel', icon: Plane },
  { label: 'Wellness & Lifestyle Experiences', icon: Leaf },
  { label: 'Cultural & Heritage Travel', icon: Landmark },
  { label: 'Educational & Learning Journeys', icon: GraduationCap },
  { label: 'Corporate & Incentive Travel', icon: BriefcaseBusiness },
  { label: 'Weddings & Celebrations', icon: Heart },
  { label: 'Film & Media Coordination', icon: Camera },
  { label: 'Special Interest Travel Experiences', icon: MapPinned },
  { label: 'Family & Group Travel', icon: Users },
]

const sriLankaReasons = [
  {
    title: 'Heritage & Culture',
    text: 'Ancient kingdoms, UNESCO World Heritage Sites, living traditions, and rich cultural experiences.',
    icon: Landmark,
  },
  {
    title: 'Buddhist Heritage & Spiritual Journeys',
    text: 'Sacred Buddhist sites, historic temples, pilgrimage destinations, and spiritual experiences deeply connected to Buddhist traditions.',
    icon: Heart,
  },
  {
    title: 'Beaches & Coastal Escapes',
    text: 'Golden beaches, tropical coastlines, island experiences, and seaside relaxation.',
    icon: Palmtree,
  },
  {
    title: 'Tea Country & Scenic Landscapes',
    text: 'Misty mountains, tea plantations, waterfalls, and breathtaking scenery.',
    icon: Mountain,
  },
  {
    title: 'Wildlife & Nature',
    text: 'National parks, diverse ecosystems, marine life, and unforgettable wildlife encounters.',
    icon: Sprout,
  },
  {
    title: 'Wellness & Relaxation',
    text: 'Ayurveda, wellness retreats, holistic experiences, and rejuvenating escapes.',
    icon: Leaf,
  },
  {
    title: 'Weddings & Celebrations',
    text: 'Unique venues and memorable destination celebrations in extraordinary settings.',
    icon: Sparkles,
  },
  {
    title: 'Authentic Experiences',
    text: 'Meaningful opportunities to connect with local culture, traditions, cuisine, and communities.',
    icon: Users,
  },
]

const vietnamReasons = [
  {
    title: 'Rich History & Living Culture',
    text: 'Ancient traditions, vibrant communities, cultural landmarks, and centuries of history.',
    icon: BookOpen,
  },
  {
    title: 'Spiritual & Cultural Experiences',
    text: "Temples, pagodas, religious sites, and cultural traditions that reflect Vietnam's unique identity.",
    icon: Landmark,
  },
  {
    title: 'Heritage & Architecture',
    text: 'Historic cities, imperial landmarks, colonial architecture, and UNESCO World Heritage destinations.',
    icon: Building2,
  },
  {
    title: 'Culinary Discoveries',
    text: 'World-renowned cuisine, regional specialities, street food culture, and authentic dining experiences.',
    icon: Utensils,
  },
  {
    title: 'Scenic Landscapes',
    text: "Mountains, rice terraces, rivers, coastlines, islands, and some of Southeast Asia's most beautiful natural settings.",
    icon: MapPinned,
  },
  {
    title: 'Business & Educational Travel',
    text: 'Growing opportunities for learning, professional engagement, business exchange, and collaboration.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Festivals & Local Traditions',
    text: 'Colourful festivals, cultural celebrations, and authentic local experiences throughout the year.',
    icon: Sun,
  },
  {
    title: 'Contemporary Vietnam',
    text: 'Dynamic cities, modern lifestyles, innovation, and emerging travel opportunities.',
    icon: Sparkles,
  },
]

function SectionHeading({ icon: Icon, title, subtitle, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-start justify-center' : 'items-start',
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
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

function IconCard({ item }) {
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

function ReasonCard({ item }) {
  const Icon = item.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-[#1f4f93]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-bold leading-6 text-[#0f172a]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#55636a] sm:text-base">{item.text}</p>
        </div>
      </div>
    </article>
  )
}

export default function VietLankaJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Viet Lanka Journeys banner"
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
              <span className="block">Traveleye</span>
              <span className="block">Viet Lanka Journeys</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Shared Experiences. Lasting Connections.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Plane} title="Connecting Vietnam and Sri Lanka Through Meaningful Travel" />

          <div className="mx-auto mt-8 max-w-5xl text-center">
            {/* <p className="text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Viet Lanka Journeys is a dedicated platform connecting Vietnam and Sri Lanka through leisure, cultural, heritage, wellness, educational, corporate, celebration, and special interest travel experiences.
            </p>
            {/* <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Built on shared Asian values, rich cultural traditions, growing tourism relationships, and people-to-people connections, the platform seeks to create meaningful travel opportunities while strengthening tourism and long-term engagement between the two countries.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Handshake} title="An Initiative of Traveleye Alliance Sri Lanka" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Viet Lanka Journeys is an initiative of Traveleye Alliance Sri Lanka, a tourism ecosystem developer specialising in People-Powered Tourism and tourism ecosystem development.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The platform is designed to facilitate travel, strengthen tourism connectivity, foster partnerships, and encourage deeper engagement between people, destinations, and tourism stakeholders across Vietnam and Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={MapPinned} title="Travel Opportunities Between Two Nations" />
          {/* <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Whether travelling from Vietnam to Sri Lanka or from Sri Lanka to Vietnam, Viet Lanka Journeys creates opportunities to discover diverse destinations, cultures, traditions, experiences, and connections that enrich both travellers and host communities.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sparkles} title="Experiences We Facilitate" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experienceItems.map((item) => (
              <IconCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Palmtree}
            title="Why Sri Lanka?"
            subtitle="For Vietnamese travellers, Sri Lanka offers a remarkable combination of heritage, spirituality, nature, wildlife, and warm hospitality."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sriLankaReasons.map((item) => (
              <ReasonCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Landmark}
            title="Why Vietnam?"
            subtitle="For Sri Lankan travellers, Vietnam offers an exciting blend of history, culture, natural beauty, modern cities, and authentic local experiences."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {vietnamReasons.map((item) => (
              <ReasonCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Building Viet–Lanka Connections" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Beyond facilitating travel, Traveleye Viet Lanka Journeys seeks to strengthen tourism connectivity, partnerships, and collaboration between Vietnam and Sri Lanka.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The platform aims to foster long-term relationships among travellers, tourism enterprises, destination stakeholders, institutions, and communities, creating opportunities that extend beyond tourism and contribute to deeper cultural understanding, engagement, and cooperation.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            As Viet Lanka Journeys grows, it seeks to develop strategic partnerships and market-focused collaborations across Vietnam and Sri Lanka that support sustainable tourism growth and stronger connections between the two nations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sparkles} title="Meaningful Experiences. Lasting Connections." />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            More than a travel platform, Traveleye Viet Lanka Journeys serves as a bridge between Vietnam and Sri Lanka, connecting people, cultures, destinations, and opportunities through meaningful travel and enduring relationships.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By encouraging exploration, cultural exchange, and tourism collaboration, the platform seeks to create lasting value for travellers, destinations, and tourism stakeholders in both countries.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Begin Your Viet Lanka Journey" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether you are planning a holiday, cultural experience, educational visit, wellness escape, celebration, or special interest journey, we invite you to discover the possibilities that Vietnam and Sri Lanka have to offer.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Traveleye Viet Lanka Journeys</h3>
            <p className="mt-5 text-sm font-semibold leading-7 text-[#475569] sm:text-base sm:leading-8">
              Connecting Vietnam and Sri Lanka Through Meaningful Travel
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin planning your experience.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
