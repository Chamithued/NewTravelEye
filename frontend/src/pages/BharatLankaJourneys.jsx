import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Leaf,
  MapPinned,
  Mountain,
  Palmtree,
  Plane,
  Sailboat,
  Sparkles,
  Sprout,
  Sun,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/collectives/Traveleye Bharat Lanka Journeys.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const facilitatedExperiences = [
  'Leisure & Holiday Travel',
  'Luxury & Wellness Experiences',
  'Pilgrimage & Heritage Travel',
  'Educational & Learning Journeys',
  'Corporate & Incentive Travel',
  'Weddings & Celebrations',
  'Film & Media Coordination',
  'Special Interest Travel Experiences',
]

const sriLankaReasons = [
  {
    title: 'Heritage & Culture',
    text: 'Ancient kingdoms, living traditions, and rich cultural experiences.',
    icon: Landmark,
  },
  {
    title: 'Pilgrimage & Spiritual Journeys',
    text: 'Buddhist heritage sites, Ramayana connections, and sacred places of worship.',
    icon: Heart,
  },
  {
    title: 'Beaches & Coastal Escapes',
    text: 'Tropical coastlines, island experiences, and seaside relaxation.',
    icon: Palmtree,
  },
  {
    title: 'Tea Country & Scenic Landscapes',
    text: 'Misty mountains, tea plantations, waterfalls, and breathtaking views.',
    icon: Mountain,
  },
  {
    title: 'Wildlife & Nature',
    text: 'National parks, biodiversity, and unforgettable wildlife encounters.',
    icon: Sprout,
  },
  {
    title: 'Wellness & Relaxation',
    text: 'Ayurveda, wellness retreats, and rejuvenating escapes.',
    icon: Leaf,
  },
  {
    title: 'Weddings & Celebrations',
    text: 'Unique venues and memorable destination celebrations.',
    icon: Sparkles,
  },
  {
    title: 'Luxury & Personalized Travel',
    text: 'Curated experiences designed around individual interests and preferences.',
    icon: Sailboat,
  },
]

const indiaReasons = [
  {
    title: 'Shared Heritage & Living Cultures',
    text: 'Deep historical connections, vibrant traditions, and cultural diversity.',
    icon: Users,
  },
  {
    title: 'Spiritual & Pilgrimage Experiences',
    text: 'Sacred destinations and faith journeys across multiple religions and traditions.',
    icon: Heart,
  },
  {
    title: 'Architecture & Heritage',
    text: 'Ancient temples, palaces, forts, monuments, and UNESCO World Heritage Sites.',
    icon: Building2,
  },
  {
    title: 'Wellness & Traditional Knowledge',
    text: 'Yoga, Ayurveda, holistic wellness, and centuries-old healing traditions.',
    icon: Leaf,
  },
  {
    title: 'Culinary Diversity',
    text: 'Regional cuisines, culinary traditions, and authentic food experiences.',
    icon: Sparkles,
  },
  {
    title: 'Business & Educational Travel',
    text: 'Opportunities for learning, professional engagement, and collaboration.',
    icon: GraduationCap,
  },
  {
    title: 'Festivals & Celebrations',
    text: 'Colorful festivals, cultural events, and unique seasonal experiences.',
    icon: Sun,
  },
  {
    title: 'Diverse Landscapes',
    text: 'From the Himalayas and deserts to forests, beaches, backwaters, and dynamic cities.',
    icon: MapPinned,
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

function Pill({ children }) {
  return (
    <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-center text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
      {children}
    </span>
  )
}

function ReasonCard({ reason }) {
  const Icon = reason.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-black sm:text-xl">{reason.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#55636a] sm:text-base">{reason.text}</p>
        </div>
      </div>
    </article>
  )
}

export default function BharatLankaJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Bharat Lanka Journeys banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/14" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE</span>
              <span className="block">BHARAT LANKA JOURNEYS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Shared Heritage, Lasting Connections
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Plane}
            title="Connecting India and Sri Lanka Through Meaningful Travel"
          />

          <div className="mx-auto mt-8 max-w-5xl text-center space-y-4">
            {/* <p className="text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Bharat Lanka Journeys is a dedicated platform connecting India and Sri Lanka through leisure, luxury, pilgrimage, wellness, cultural, educational, corporate, and celebration travel experiences.
            </p>
            {/* <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Built on centuries of shared heritage, cultural exchange, spiritual connections, and people-to-people relationships, the platform seeks to create meaningful travel opportunities while strengthening tourism and long-term connections between the two countries.
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
              Traveleye Bharat Lanka Journeys is an initiative of Traveleye Alliance Sri Lanka, a tourism ecosystem developer specializing in People-Powered Tourism and tourism ecosystem development. The platform is designed to facilitate travel, strengthen tourism connectivity, foster partnerships, and encourage deeper engagement between people, destinations, and tourism stakeholders across India and Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={MapPinned} title="Travel Opportunities Between Two Nations" />
          {/* <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Whether travelling from India to Sri Lanka or from Sri Lanka to India, Bharat Lanka Journeys creates opportunities to discover diverse destinations, cultures, traditions, experiences, and connections that enrich both travellers and host communities.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sparkles} title="Experiences We Facilitate" />

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {facilitatedExperiences.map((experience) => (
              <Pill key={experience}>{experience}</Pill>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Palmtree}
            title="Why Sri Lanka?"
            subtitle="For Indian travellers, Sri Lanka offers a unique combination of familiarity and discovery."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {sriLankaReasons.map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Landmark}
            title="Why India?"
            subtitle="For Sri Lankan travellers, India offers an extraordinary diversity of cultures, landscapes, traditions, and experiences."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {indiaReasons.map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BookOpen} title="Building Bharat–Lanka Connections" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Beyond facilitating travel, Traveleye Bharat Lanka Journeys seeks to strengthen tourism connectivity, partnerships, and collaboration between India and Sri Lanka.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            The platform aims to foster long-term relationships among travellers, tourism enterprises, destination stakeholders, institutions, and communities, creating opportunities that extend beyond tourism and contribute to deeper cultural understanding, engagement, and cooperation.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            As Bharat Lanka Journeys grows, it seeks to develop strategic partnerships and market-focused collaborations across India and Sri Lanka that support sustainable tourism growth and stronger connections between the two nations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Shared Heritage. Lasting Connections." />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            More than a travel platform, Traveleye Bharat Lanka Journeys serves as a bridge between India and Sri Lanka, connecting people, cultures, destinations, and opportunities through meaningful travel and enduring relationships.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
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
