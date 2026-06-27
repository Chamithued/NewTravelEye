import {
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Plane,
  Sparkles,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const reasons = [
  {
    title: 'Carefully Planned Travel Experiences',
    text: 'Every journey is designed to provide a balance of comfort, discovery, cultural engagement, and memorable experiences.',
    icon: Compass,
  },
  {
    title: 'Trusted Travel Expertise',
    text: 'We work with trusted travel partners and destination specialists to create travel experiences that are reliable, seamless, and enriching.',
    icon: Handshake,
  },
  {
    title: 'Diverse Travel Opportunities',
    text: 'From iconic destinations and cultural landmarks to spiritual sites and educational experiences, our journeys are designed to cater to a wide range of travel interests.',
    icon: Globe2,
  },
  {
    title: 'Meaningful Cultural Connections',
    text: 'Travel offers opportunities to engage with different cultures, traditions, communities, and perspectives while fostering greater understanding and appreciation of the world.',
    icon: Users,
  },
  {
    title: 'Seamless Travel Coordination',
    text: 'From planning and reservations to travel arrangements and on-ground support, we strive to make international travel smooth and enjoyable.',
    icon: Plane,
  },
]

const travelTypes = [
  {
    title: 'Leisure & Holiday Travel',
    text: "Discover some of the world's most popular destinations through carefully planned holiday experiences.",
    icon: Plane,
  },
  {
    title: 'Pilgrimage & Spiritual Journeys',
    text: 'Visit sacred sites and destinations of religious and spiritual significance across different faiths and traditions.',
    icon: Heart,
  },
  {
    title: 'Family & Group Travel',
    text: 'Create lasting memories through shared travel experiences with family, friends, and organised groups.',
    icon: Users,
  },
  {
    title: 'Educational & Learning Experiences',
    text: 'Explore destinations through learning, cultural exchange, study visits, and educational programmes.',
    icon: GraduationCap,
  },
  {
    title: 'Cultural & Heritage Journeys',
    text: 'Experience the history, traditions, architecture, and cultural richness of destinations around the world.',
    icon: Landmark,
  },
  {
    title: 'Special Interest Travel',
    text: 'Travel built around unique interests, passions, hobbies, events, and experiences.',
    icon: BookOpen,
  },
  {
    title: 'Corporate & Incentive Travel',
    text: 'Support business travel, incentive programmes, professional visits, and group travel initiatives.',
    icon: BriefcaseBusiness,
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

function FeatureCard({ item }) {
  const Icon = item.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{item.text}</p>
    </article>
  )
}

export default function GlobalJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Global Journeys banner"
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
              <span className="block">Traveleye Global Journeys</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-white/95 sm:text-base lg:text-lg">
              Sri Lankans. Connecting. The World.
            </p>
            <p className="mt-2 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              ලොව වටා ලොව දකින්න
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Explore the World, Beyond Borders" />
          <p className="mx-auto mt-6 max-w-5xl text-center text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Thoughtfully planned international travel experiences designed to connect Sri Lankan travellers with destinations, cultures, and opportunities across the globe.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Sparkles} title="Discover the World Through Meaningful Travel" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Travel has the power to broaden perspectives, inspire new ideas, create lasting memories, and deepen our understanding of the world around us.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            At Traveleye Global Journeys, we believe that international travel is about more than visiting new destinations. It is about experiencing different cultures, discovering new ways of life, building meaningful connections, and creating journeys that enrich both the traveller and the experiences they encounter.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            As the outbound travel platform of Traveleye Alliance Sri Lanka, Global Journeys helps Sri Lankan travellers explore the world through thoughtfully planned travel experiences designed around discovery, learning, leisure, faith, culture, and personal enrichment.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Whether travelling independently, with family and friends, as part of a group, or through a specialised travel programme, Global Journeys seeks to create memorable experiences that connect Sri Lankans with the world beyond our shores.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Compass} title="Why Travel with Global Journeys?" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Explore the World Your Way" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Every traveller seeks something different from their journey.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Global Journeys offers opportunities to explore the world through a variety of travel experiences.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {travelTypes.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Users} title="Connecting Sri Lankans with the World" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Every international journey creates opportunities for discovery, understanding, and connection.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Through Global Journeys, we seek to help Sri Lankan travellers experience the diversity of our world while creating meaningful connections between people, cultures, and destinations.
          </p>
          <p className="mt-8 text-base font-semibold leading-7 text-[#1f4f93] sm:text-lg">
            Because travel is not simply about reaching a destination.
          </p>
          {/* <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8"> */}
          <p className="mt-8 text-base font-semibold leading-7 text-[#1f4f93] sm:text-lg">
            It is about the experiences, perspectives, and memories gained along the way.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Plane} title="Start Your Global Journey" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            The world offers endless opportunities for exploration, learning, discovery, and connection.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether you are planning a holiday, pilgrimage, educational visit, cultural journey, family getaway, or group travel experience, Global Journeys is ready to help you explore the world with confidence and purpose.
          </p>
          <p className="mt-8 text-lg font-bold text-[#1f4f93] sm:text-2xl">
            Sri Lankans. Connecting. The World.
          </p>
          <p className="mt-3 text-base font-semibold text-[#0f4d2f] sm:text-lg">
            ලොව වටා ලොව දකින්න
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
