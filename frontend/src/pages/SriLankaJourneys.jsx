import {
  BriefcaseBusiness,
  Bus,
  Camera,
  Compass,
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
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const reasons = [
  {
    title: 'Thoughtfully Designed Experiences',
    text: 'Our travel experiences are carefully planned to showcase the diversity of Sri Lanka while creating a balance between discovery, comfort, and authentic engagement.',
    icon: Compass,
  },
  {
    title: 'Local Knowledge & Destination Expertise',
    text: "Our understanding of Sri Lanka's destinations, cultures, heritage, and tourism landscape allows us to create experiences that go beyond conventional sightseeing and provide deeper destination connections.",
    icon: MapPinned,
  },
  {
    title: 'Meaningful Travel Experiences',
    text: 'We believe that the most memorable journeys are often shaped by the people you meet, the stories you discover, and the experiences you share along the way.',
    icon: Users,
  },
  {
    title: 'Carefully Selected Travel Services',
    text: 'From accommodation and transportation to guiding and destination experiences, we work with trusted partners who share our commitment to quality, hospitality, and service.',
    icon: Handshake,
  },
  {
    title: 'Seamless Travel Coordination',
    text: 'From the moment you arrive until your departure, our team manages the details so you can focus on enjoying your Sri Lanka experience.',
    icon: Plane,
  },
]

const experienceTypes = [
  {
    title: 'Cultural & Heritage Experiences',
    text: 'Explore ancient kingdoms, UNESCO World Heritage Sites, sacred temples, living traditions, and the rich cultural heritage that has shaped Sri Lanka for centuries.',
    icon: Landmark,
  },
  {
    title: 'Nature & Wildlife Experiences',
    text: "Discover national parks, wildlife reserves, scenic mountains, forests, rivers, and coastal ecosystems that make Sri Lanka one of Asia's most remarkable natural destinations.",
    icon: Sprout,
  },
  {
    title: 'Beach & Coastal Escapes',
    text: "Experience the beauty of Sri Lanka's coastline through relaxing beach holidays, coastal discoveries, and memorable seaside experiences.",
    icon: Palmtree,
  },
  {
    title: 'Wellness & Lifestyle Experiences',
    text: 'Reconnect through wellness, relaxation, nature-based experiences, and destinations that promote balance and wellbeing.',
    icon: Leaf,
  },
  {
    title: 'Pilgrimage & Spiritual Experiences',
    text: "Visit sacred places, religious landmarks, and spiritual destinations that reflect Sri Lanka's rich religious and cultural traditions.",
    icon: Heart,
  },
  {
    title: 'Educational & Special Interest Experiences',
    text: 'Explore Sri Lanka through learning, discovery, culture, agriculture, wildlife, photography, professional interests, and specialised thematic experiences.',
    icon: GraduationCap,
  },
  {
    title: 'Family Holidays & Group Travel',
    text: 'Create memorable experiences through journeys designed for families, friends, leisure groups, educational groups, pilgrimage groups, and organised travel programmes.',
    icon: Users,
  },
]

const services = [
  'Sri Lanka Holiday Programmes',
  'Cultural & Heritage Tours',
  'Family Holidays',
  'Leisure Travel Programmes',
  'Honeymoon Experiences',
  'Pilgrimage Tours',
  'Educational & Study Tours',
  'Wildlife & Nature Experiences',
  'Wellness & Lifestyle Travel',
  'Special Interest Travel',
  'Group Travel Programmes',
  'Corporate & Incentive Travel',
  'Shore Excursions',
  'Airport Transfers & Transportation',
  'Accommodation Reservations',
  'Professional Tour Guiding Services',
]

const serviceIcons = [
  Sun,
  Landmark,
  Users,
  Plane,
  Heart,
  Sparkles,
  GraduationCap,
  Mountain,
  Leaf,
  Camera,
  Users,
  BriefcaseBusiness,
  Palmtree,
  Bus,
  MapPinned,
  Compass,
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

export default function SriLankaJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Lanka Journeys banner"
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
              <span className="block">Traveleye Lanka Journeys</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Sri Lanka. Authentic Places. Meaningful Experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading icon={MapPinned} title="Discover Sri Lanka Through People and Place" />
          {/* <p className="mx-auto mt-6 max-w-5xl text-center text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Thoughtfully designed travel experiences that connect travellers with the culture, heritage, nature, wildlife, and authentic destinations that make Sri Lanka truly unique.
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Sri Lanka is a destination where ancient heritage, vibrant cultures, breathtaking landscapes, abundant wildlife, and warm hospitality come together to create extraordinary travel experiences.
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            At Traveleye Lanka Journeys, we believe that travel is about more than moving between destinations. It is about discovering the stories, traditions, people, and places that bring a destination to life and create lasting memories.
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            As the flagship inbound travel brand of Traveleye Alliance Sri Lanka, Traveleye Lanka Journeys creates thoughtfully designed travel experiences that connect travellers with the culture, heritage, nature, and people of Sri Lanka through authentic encounters, meaningful experiences, and trusted local expertise.
          </p>
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Whether you are visiting Sri Lanka for leisure, culture, nature, pilgrimage, education, wellness, family travel, or group travel, our team is committed to helping you experience the island through journeys that are enriching, enjoyable, and seamlessly coordinated from arrival to departure.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Compass} title="Why Travel with Traveleye Lanka Journeys?" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sparkles} title="Explore Sri Lanka Through Meaningful Experiences" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Every traveller experiences Sri Lanka differently.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Our travel experiences can be shaped around a variety of interests, destinations, and travel styles, creating opportunities to discover the island in ways that are both meaningful and memorable.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceTypes.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={BriefcaseBusiness} title="Our Travel Services" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Traveleye Lanka Journeys offers a comprehensive range of travel services for individual travellers, families, groups, organisations, and international travel partners.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-center text-sm font-semibold leading-7 text-[#475569] sm:text-base sm:leading-8">
            Our services include:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[index]

              return (
                <div key={service} className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-6 text-[#141414]">{service}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Users} title="Travel Through People and Place" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              At the heart of every memorable travel experience are the people, places, and stories that bring a destination to life.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Guided by the principles of the Traveleye People-Powered Tourism Framework, Traveleye Lanka Journeys seeks to create meaningful connections between travellers, destinations, local communities, and tourism enterprises.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By encouraging authentic engagement, responsible travel practices, and greater participation across the tourism value chain, we strive to create travel experiences that generate lasting value for travellers while contributing positively to destinations and local livelihoods.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Because meaningful travel is not only about where you go.</p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">It is also about the people you meet, the experiences you share, and the connections you create along the way.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Plane} title="Begin Your Sri Lanka Experience" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether you are visiting Sri Lanka for the first time or returning to discover more of the island, Traveleye Lanka Journeys offers thoughtfully designed travel experiences that help you explore the destination with confidence, comfort, and authenticity.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Through local expertise, trusted partnerships, and meaningful destination experiences, we invite you to discover the people, places, and stories that make Sri Lanka truly unique.
          </p>
          <p className="mt-8 text-lg font-bold text-[#1f4f93] sm:text-2xl">
            Discover Sri Lanka Through People and Place.
          </p>
          <p className="mt-4 text-base font-semibold text-[#0f4d2f] sm:text-lg">
            Plan Your Journey | Contact Our Travel Team
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
