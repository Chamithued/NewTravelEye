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
  Plane,
  Sparkles,
  Sprout,
  Utensils,
  Waves,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const experienceItems = [
  { label: 'Leisure & Holiday Travel', icon: Plane },
  { label: 'Luxury & Wellness Experiences', icon: Sparkles },
  { label: 'Pilgrimage & Heritage Travel', icon: Landmark },
  { label: 'Educational & Learning Journeys', icon: GraduationCap },
  { label: 'Corporate & Incentive Travel', icon: BriefcaseBusiness },
  { label: 'Weddings & Celebrations', icon: Heart },
  { label: 'Film & Media Coordination', icon: Camera },
  { label: 'Special Interest Travel Experiences', icon: MapPinned },
]

const sriLankaReasons = [
  {
    title: 'Buddhist Heritage & Spiritual Journeys',
    text: 'Sacred Buddhist sites, ancient monasteries, temples, and places of historical significance connected to Theravada Buddhism.',
    icon: Landmark,
  },
  {
    title: 'Culture & Heritage',
    text: 'Ancient kingdoms, UNESCO World Heritage Sites, traditional arts, and living cultural traditions.',
    icon: BookOpen,
  },
  {
    title: 'Beaches & Coastal Escapes',
    text: 'Golden beaches, tropical coastlines, marine experiences, and island relaxation.',
    icon: Waves,
  },
  {
    title: 'Tea Country & Scenic Landscapes',
    text: 'Tea plantations, mountain scenery, waterfalls, and breathtaking hill country experiences.',
    icon: Leaf,
  },
  {
    title: 'Wildlife & Nature',
    text: 'National parks, elephants, leopards, biodiversity, and unforgettable nature experiences.',
    icon: Sprout,
  },
  {
    title: 'Wellness & Ayurveda',
    text: 'Traditional Ayurveda, wellness retreats, yoga, and holistic relaxation.',
    icon: Heart,
  },
  {
    title: 'Luxury & Curated Experiences',
    text: 'Private journeys and personalised travel designed around individual interests and preferences.',
    icon: Sparkles,
  },
]

const thailandReasons = [
  {
    title: 'Buddhist Culture & Living Heritage',
    text: 'Magnificent temples, monastic traditions, and rich Buddhist cultural experiences.',
    icon: Landmark,
  },
  {
    title: 'Cities & Modern Lifestyle',
    text: 'Bangkok and other dynamic cities offering shopping, entertainment, architecture, and urban experiences.',
    icon: Building2,
  },
  {
    title: 'Beaches & Island Escapes',
    text: 'World-famous tropical islands, coastal resorts, and marine adventures.',
    icon: Waves,
  },
  {
    title: 'Wellness & Thai Traditions',
    text: 'Thai wellness, spa therapies, holistic treatments, and traditional healing practices.',
    icon: Leaf,
  },
  {
    title: 'Cuisine & Culinary Experiences',
    text: 'Authentic Thai cuisine, street food culture, regional flavours, and culinary discovery.',
    icon: Utensils,
  },
  {
    title: 'Business & Educational Travel',
    text: 'Regional business opportunities, educational exchanges, exhibitions, and professional engagement.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Festivals & Cultural Celebrations',
    text: 'Traditional festivals, cultural performances, and vibrant seasonal celebrations.',
    icon: Sparkles,
  },
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

export default function SiamLankaJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Siam Lanka Journeys banner"
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
              <span className="block">SIAM LANKA JOURNEYS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Shared Traditions. Lasting Connections.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Connecting Thailand and Sri Lanka Through Meaningful Travel" />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Siam Lanka Journeys is a dedicated platform connecting Thailand and Sri Lanka through leisure, luxury, pilgrimage, wellness, cultural, educational, corporate, and celebration travel experiences.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Inspired by the longstanding Buddhist heritage, cultural exchange, maritime history, and people-to-people connections between the two nations, the platform seeks to create meaningful travel opportunities while strengthening tourism and long-term relationships between Thailand and Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Handshake} title="An Initiative of Traveleye Alliance Sri Lanka" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Siam Lanka Journeys is an initiative of Traveleye Alliance Sri Lanka, a tourism ecosystem developer specialising in People-Powered Tourism and tourism ecosystem development.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The platform is designed to facilitate travel, strengthen tourism connectivity, foster partnerships, and encourage deeper engagement between people, destinations, and tourism stakeholders across Thailand and Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={MapPinned} title="Travel Opportunities Between Two Nations" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Whether travelling from Thailand to Sri Lanka or from Sri Lanka to Thailand, Siam Lanka Journeys creates opportunities to discover diverse destinations, cultures, traditions, experiences, and connections that enrich both travellers and host communities.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sparkles} title="Experiences We Facilitate" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experienceItems.map((item) => (
              <IconCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Why Sri Lanka?" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            For Thai travellers, Sri Lanka offers a unique combination of Buddhist heritage, tropical landscapes, authentic culture, and meaningful experiences.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sriLankaReasons.map((item) => (
              <ReasonCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Plane} title="Why Thailand?" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            For Sri Lankan travellers, Thailand offers a vibrant blend of culture, spirituality, hospitality, wellness, and contemporary experiences.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {thailandReasons.map((item) => (
              <ReasonCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Building Siam–Lanka Connections" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Beyond facilitating travel, Traveleye Siam Lanka Journeys seeks to strengthen tourism connectivity, partnerships, and collaboration between Thailand and Sri Lanka.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The platform aims to foster long-term relationships among travellers, tourism enterprises, destination stakeholders, institutions, and communities, creating opportunities that extend beyond tourism and contribute to deeper cultural understanding, engagement, and regional cooperation.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            As Siam Lanka Journeys grows, it seeks to develop strategic partnerships and market-focused collaborations across Thailand and Sri Lanka that support sustainable tourism growth and stronger connections between the two nations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sparkles} title="Shared Traditions. Lasting Connections." />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            More than a travel platform, Traveleye Siam Lanka Journeys serves as a bridge between Thailand and Sri Lanka, connecting people, cultures, destinations, and opportunities through meaningful travel and enduring relationships.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Begin the Conversation" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether you are planning a journey, pilgrimage, celebration, business visit, or special occasion, we would be delighted to help you explore the possibilities.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
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
