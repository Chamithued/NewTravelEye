import {
  Compass,
  Handshake,
  Leaf,
  MapPin,
  Network,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from "../assets/subhero/pillars/Explore the Ecosystem.jpg"
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const foundations = [
  {
    icon: Users,
    title: 'People',
    text: 'People are at the heart of tourism. People-Powered Tourism encourages meaningful participation, entrepreneurship, leadership, collaboration, and shared opportunities that strengthen tourism enterprises, communities, and livelihoods.',
  },
  {
    icon: MapPin,
    title: 'Places',
    text: 'Every destination has its own identity, culture, heritage, landscapes, traditions, and stories. People-Powered Tourism celebrates these distinctive characteristics while promoting destination stewardship, local identity, environmental responsibility, and place-inspired tourism development.',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    text: 'Tourism becomes stronger through meaningful collaboration. People-Powered Tourism connects people, enterprises, destinations, institutions, governments, investors, development organisations, and strategic partners to create shared opportunities, collective impact, and lasting value.',
  },
  {
    icon: Sprout,
    title: 'Prosperity',
    text: 'Prosperity is created when people, places, and partnerships work together. By developing and strengthening micro and small tourism enterprises, encouraging entrepreneurship, and expanding opportunities for participation, People-Powered Tourism contributes to lasting economic, social, cultural, and environmental value while supporting resilient destinations and thriving tourism ecosystems for present and future generations.',
  },
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

function TextPanel({ children, className = '' }) {
  return (
    <div className={`mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8 ${className}`}>
      {children}
    </div>
  )
}

export default function WhatIsTraveleyesPeoplePoweredTourism() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="What Is Traveleye's People-Powered Tourism banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">What Is <strong>Traveleye&apos;s</strong></span>
              <span className="block">People-Powered Tourism?</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-white/95 sm:text-base lg:text-lg">
              <strong>Tourism That Creates Lasting Value for People and Places</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To place people at the heart of tourism development by fostering meaningful participation, collaboration, and enterprise development that create lasting value for people, places, partnerships, and prosperity.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Users} title="Defining People-Powered Tourism" />
          </div>
          <TextPanel>
            <p>At Traveleye Alliance Sri Lanka, we define <strong>People-Powered Tourism</strong> as an approach to tourism development that places people at the heart of creating, strengthening, and sustaining tourism. Built upon the interconnected foundations of <strong>People, Places, Partnerships, and Prosperity</strong>, it encourages meaningful participation, shared stewardship, collaboration, innovation, and enterprise development to create resilient destinations, thriving tourism enterprises, and lasting economic, social, cultural, and environmental value for present and future generations.</p>
            <p>Our interpretation of People-Powered Tourism recognises that tourism is strongest when travellers, hosts, entrepreneurs, tourism enterprises, communities, women and youth, institutions, development organisations, governments, investors, and strategic partners all have meaningful opportunities to participate, collaborate, and contribute to tourism development.</p>
            <p>By strengthening the connections between people, places, partnerships, and tourism enterprises, People-Powered Tourism encourages tourism that is more authentic, inclusive, resilient, and sustainable. It develops and strengthens micro and small tourism enterprises while creating shared value that benefits travellers, empowers local communities, strengthens destinations, and contributes to the long-term wellbeing of Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="The Four Ps of People-Powered Tourism" />
          <TextPanel>
            <p>The Traveleye interpretation of People-Powered Tourism is built upon four interconnected foundations that guide how tourism is developed, strengthened, and sustained. Together, these foundations create an environment where tourism enterprises, destinations, communities, and partnerships can grow, collaborate, and create lasting value.</p>
          </TextPanel>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {foundations.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dfe7f3] text-[#1f4f93]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#172544]">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Compass} title="Why People-Powered Tourism?" />
          <TextPanel>
            <p>Tourism creates its greatest value when people are active participants rather than passive beneficiaries. People-Powered Tourism recognises that resilient tourism is built through collaboration, entrepreneurship, stewardship, and shared responsibility rather than through isolated businesses or individual projects.</p>
            <p>By encouraging meaningful participation across the tourism ecosystem, this approach helps create stronger tourism enterprises, more resilient destinations, greater local economic opportunities, richer visitor experiences, and stronger partnerships between the public sector, private sector, communities, and development organisations.</p>
            <p>Rather than viewing tourism as a collection of individual products and services, People-Powered Tourism recognises tourism as a connected ecosystem where people, places, partnerships, and enterprises work together to create shared value and long-term prosperity.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="From Philosophy to Action" />
          <TextPanel>
            <p>People-Powered Tourism is more than a philosophy; it provides the foundation for practical and measurable tourism development.</p>
            <p>At Traveleye Alliance Sri Lanka, this philosophy is translated into action through the <strong>People-Powered Tourism Framework</strong>, which provides the strategic blueprint for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p>
            <p>Built upon its <strong>Guiding Principles</strong> and <strong>Global Alignment</strong>, and implemented through its <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Operational Platforms</strong>, <strong>Tourism Outcomes</strong>, and <strong>Ecosystem Indicators</strong>, the Framework transforms strategic vision into practical action. Together, these interconnected components provide a structured and collaborative approach to strengthening tourism enterprises, supporting destination development, encouraging participation, fostering partnerships, and creating lasting value across Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Why Traveleye's Approach Is Different" />
          <TextPanel>
            <p>People-Powered Tourism is not simply another tourism programme or development initiative. It is a holistic approach that views tourism as a connected ecosystem where people, enterprises, destinations, institutions, and partnerships all contribute to shared success.</p>
            <p>While informed by internationally recognised tourism concepts such as sustainable tourism, regenerative tourism, responsible tourism, and destination stewardship, Traveleye&apos;s interpretation is uniquely grounded in the realities, opportunities, and aspirations of Sri Lanka. Its primary focus is on developing and strengthening micro and small tourism enterprises while empowering people to become active participants in shaping the future of tourism.</p>
            <p>By combining global perspectives with local relevance, People-Powered Tourism provides a practical pathway towards more inclusive, resilient, and sustainable tourism development.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Grow with Traveleye Alliance" />
          <TextPanel>
            <p>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to become part of the People-Powered Tourism movement.</p>
            <p>Together, we can develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem, fostering meaningful participation, collaborative partnerships, thriving destinations, resilient local economies, and tourism that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
            <p className="font-bold text-[#0f4d2f]"><strong>People-Powered Tourism</strong>(philosophy) → <strong>People-Powered Tourism Ecosystem</strong>(connected environment) → <strong>People-Powered Tourism Framework</strong>(strategic blueprint) → <strong>Guiding Principles</strong>(internal foundation) → <strong>Global Alignment</strong>(external foundation) → <strong>Strategic Pillars, Development Models, Operational Platforms, Outcomes, and Indicators</strong>(implementation and impact).</p>
          </TextPanel>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
