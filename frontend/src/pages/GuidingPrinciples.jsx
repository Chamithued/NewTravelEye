import {
  BriefcaseBusiness,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  Lightbulb,
  Recycle,
  Search,
  ShieldCheck,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/PPT Framework.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const principles = [
  {
    icon: Landmark,
    title: 'Authenticity',
    text: 'Tourism should remain connected to real people, authentic places, living cultures, local traditions, and the unique identity of every destination.',
  },
  {
    icon: Handshake,
    title: 'Participation & Shared Stewardship',
    text: 'Tourism becomes stronger when communities, tourism enterprises, travellers, and stakeholders actively participate in shaping, supporting, and stewarding destinations together.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Women & Youth Entrepreneurship',
    text: 'Women and young people should be empowered as entrepreneurs, hosts, experience creators, innovators, facilitators, and future leaders within the tourism ecosystem.',
  },
  {
    icon: Lightbulb,
    title: 'Human-Centred Innovation',
    text: 'Innovation should enhance tourism while remaining connected to people, culture, destinations, local needs, and meaningful visitor experiences.',
  },
  {
    icon: Search,
    title: 'Transparency & Shared Value',
    text: 'Responsible governance, ethical business practices, openness, and fair collaboration help build trust and create lasting value for everyone involved.',
  },
  {
    icon: Users,
    title: 'Inclusive Participation',
    text: 'Tourism should create opportunities that are accessible, locally connected, and open to people from diverse communities, backgrounds, and enterprises.',
  },
  {
    icon: Leaf,
    title: 'Sustainability & Stewardship',
    text: 'Tourism should protect and responsibly manage natural environments, cultural heritage, local communities, and destination resources for future generations.',
  },
  {
    icon: Recycle,
    title: 'Regenerative Development',
    text: 'Tourism should go beyond sustainability by contributing positively to destinations, strengthening local livelihoods, supporting cultural continuity, restoring ecosystems, and enhancing community wellbeing.',
  },
]

const developmentPriorities = [
  { text: 'Inclusive participation', icon: Handshake },
  { text: 'Entrepreneurship and local enterprise development', icon: BriefcaseBusiness },
  { text: 'Women and youth empowerment', icon: Users },
  { text: 'Environmental stewardship', icon: Leaf },
  { text: 'Cultural preservation and continuity', icon: Landmark },
  { text: 'Destination resilience', icon: ShieldCheck },
  { text: 'Responsible tourism practices', icon: Recycle },
  { text: 'Long-term ecosystem sustainability', icon: Sprout },
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function PrincipleCard({ item }) {
  const Icon = item.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{item.text}</p>
    </article>
  )
}

function PriorityCard({ item }) {
  const Icon = item.icon

  return (
    <article className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-5 sm:p-5">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="text-sm font-semibold leading-6 text-[#141414] sm:text-base">{item.text}</p>
    </article>
  )
}

export default function GuidingPrinciples() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Guiding Principles banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/32" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">GUIDING</span>
              <span className="block">PRINCIPLES</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              The Values That Shape the Traveleye People-Powered Tourism Framework
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="The Values That Shape the Traveleye People-Powered Tourism Framework" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>
              The Traveleye People-Powered Tourism Framework (PPT Framework) is guided by a set of principles that encourage tourism to be authentic, inclusive, collaborative, responsible, innovative, and sustainable.
            </p>
            <p>
              Together, these principles strengthen tourism by fostering meaningful participation, shared stewardship, local identity, ethical collaboration, and long-term value for people, places, and future generations.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake} title="The Eight Guiding Principles" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <PrincipleCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Contributing to Sustainable Development" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Through its people-powered ecosystem approach, the PPT Framework contributes to broader sustainable development priorities by encouraging:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {developmentPriorities.map((item) => (
              <PriorityCard key={item.text} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={ShieldCheck} title="Our Commitment" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            At Traveleye Alliance Sri Lanka, these principles guide how we design partnerships, strengthen destinations, support tourism enterprises, and connect travellers with authentic experiences. They form the foundation of our commitment to Tourism for People, Planet, and Prosperity.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
