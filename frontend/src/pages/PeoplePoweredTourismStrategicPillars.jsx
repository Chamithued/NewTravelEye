import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Globe2,
  Handshake,
  Home,
  Leaf,
  Network,
  Sprout,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/subhero/pillars/Explore the Ecosystem.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const pillars = [
  {
    icon: Globe2,
    title: 'People-Powered Travel Collective',
    subtitle: 'Connecting Journeys Through People and Place',
    body: [
      <>The <strong>People-Powered Travel Collective</strong> identifies meaningful travel as a strategic focus for strengthening tourism. It encourages journeys that connect travellers with people, places, destinations, culture, and opportunities while expanding tourism participation, market connectivity, enterprise growth, and collaborative tourism development.</>,
      'By strengthening travel connections, the pillar contributes to meaningful visitor experiences, resilient tourism enterprises, stronger destination economies, and connected tourism ecosystems.',
    ],
  },
  {
    icon: Home,
    title: 'People-Powered Host Experiences',
    subtitle: 'Crafted Through People and Place',
    body: [
      <>The <strong>People-Powered Host Experiences</strong> pillar identifies authentic place-inspired host stays and people and place-inspired travel experiences as a strategic focus for strengthening tourism enterprises.</>,
      'It encourages local entrepreneurship, authentic hospitality, cultural appreciation, creativity, nature-based experiences, wellness, agriculture, and meaningful engagement between travellers and local communities while celebrating the unique identity of each destination.',
      'Through this strategic focus, the pillar contributes to stronger tourism enterprises, richer visitor experiences, resilient destinations, and thriving tourism ecosystems.',
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'People-Powered Ecosystem Support',
    subtitle: 'Supporting Tourism Through People and Partnerships',
    body: [
      <>The <strong>People-Powered Ecosystem Support</strong> pillar identifies knowledge, capability, innovation, technology, enterprise support, and enabling systems as strategic priorities for strengthening tourism.</>,
      'By encouraging continuous learning, collaboration, digital transformation, enterprise development, operational excellence, and innovation, the pillar supports stronger tourism enterprises while contributing to a connected, resilient, and future-ready tourism ecosystem.',
    ],
  },
  {
    icon: Compass,
    title: 'People-Powered Destination Facilitation',
    subtitle: 'Destinations Through People & Stewardship',
    body: [
      <>The <strong>People-Powered Destination Facilitation</strong> pillar identifies destination ecosystems as a strategic focus for strengthening tourism.</>,
      'It encourages collaboration, participation, stewardship, coordination, local engagement, and destination partnerships to create connected, visitor-ready destinations that support thriving tourism enterprises, meaningful visitor experiences, and long-term destination resilience.',
      'Through this strategic focus, the pillar contributes to stronger local economies, resilient destinations, collaborative tourism development, and thriving tourism ecosystems.',
    ],
  },
]

const connectedApproach = [
  <>The four <strong>People-Powered Tourism Strategic Pillars</strong> are designed to complement one another rather than operate independently.</>,
  'Meaningful journeys create opportunities for authentic host stays and people and place-inspired travel experiences.',
  'Authentic host stays and travel experiences strengthen destination identity and enrich visitor experiences.',
  'Strong destinations create opportunities for thriving tourism enterprises, while ecosystem support strengthens the knowledge, capability, innovation, and enabling environment that allow tourism enterprises and destinations to flourish.',
  'Working together, the Strategic Pillars provide an integrated strategic direction for developing and strengthening micro and small tourism enterprises while contributing to resilient destinations, collaborative partnerships, and connected tourism ecosystems.',
]

const frameworkRoles = [
  <>The <strong>People-Powered Tourism Strategic Pillars</strong> represent the <strong>strategic component</strong> of the <strong>People-Powered Tourism Framework</strong>.</>,
  <>Built upon the Framework's <strong>Guiding Principles</strong> and <strong>Global Alignment</strong>, they define <strong>where tourism is strengthened</strong> across Sri Lanka's tourism ecosystem.</>,
  <>The <strong>People-Powered Tourism Development Models</strong> provide the methodologies for <strong>how tourism is developed</strong>.</>,
  <>The <strong>People-Powered Tourism Operational Platforms</strong> translate strategy into <strong>practical implementation</strong>.</>,
  <>The <strong>People-Powered Tourism Outcomes</strong> represent the <strong>long-term results</strong> created through implementation.</>,
  <>The <strong>People-Powered Tourism Ecosystem Indicators</strong> measure <strong>progress and impact</strong> across the tourism ecosystem.</>,
  <>Together, these interconnected components transform strategic vision into coordinated action while developing and strengthening micro and small tourism enterprises and creating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</>,
]

function SectionHeading({ icon: Icon, title, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-center justify-center' : 'items-start',
        ].join(' ')}
      >
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
    </div>
  )
}

function PillarCard({ pillar }) {
  const Icon = pillar.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{pillar.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#1f4f93] sm:text-base">{pillar.subtitle}</p>
      <div className="mt-4 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base">
        {pillar.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

function TextPanel({ paragraphs }) {
  return (
    <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default function PeoplePoweredTourismStrategicPillars() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Strategic Pillars banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">PEOPLE-POWERED TOURISM</span>
              <span className="block">STRATEGIC PILLARS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Where We Build Tourism
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To define the strategic focus areas for developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Sprout} title="Building Tourism Through Strategic Focus" />
          </div>
          <TextPanel
            paragraphs={[
              <>The <strong>People-Powered Tourism Strategic Pillars</strong> define the primary strategic focus areas of the <strong>People-Powered Tourism Framework</strong>. They identify where the Framework directs its efforts to develop and strengthen micro and small tourism enterprises while encouraging participation, stewardship, collaboration, innovation, and shared value creation across Sri Lanka's tourism ecosystem.</>,
              <>Built upon the Framework's <strong>Guiding Principles</strong> and <strong>Global Alignment</strong>, the Strategic Pillars provide the strategic direction that connects the Framework's vision with practical tourism development.</>,
              'Rather than viewing tourism as a collection of isolated sectors, the Strategic Pillars recognise that stronger tourism ecosystems are created by strengthening the relationships between meaningful journeys, tourism enterprises, host stays, travel experiences, destinations, partnerships, communities, and ecosystem support.',
              'Together, they establish a connected strategic approach that guides tourism development while contributing to inclusive, resilient, and sustainable tourism ecosystems.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="Why Strategic Pillars Matter" />
          <TextPanel
            paragraphs={[
              'Every successful framework requires clear strategic priorities.',
              <>The <strong>People-Powered Tourism Strategic Pillars</strong> identify the key areas where tourism development can create the greatest long-term value. They guide strategic thinking, investment, enterprise development, destination development, innovation, collaboration, and ecosystem strengthening, ensuring that every initiative contributes to the Framework's purpose of developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</>,
              'Rather than operating independently, each Strategic Pillar complements the others, creating an integrated strategic approach that strengthens the entire tourism ecosystem.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="The Four Strategic Pillars" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Together, the four Strategic Pillars create a connected strategic direction for developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="A Connected Strategic Approach" />
          <TextPanel paragraphs={connectedApproach} />
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ArrowRight} title="The Strategic Role Within the Framework" />
          <TextPanel paragraphs={frameworkRoles} />
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Looking Ahead" />
          <TextPanel
            paragraphs={[
              <>As the <strong>People-Powered Tourism Framework</strong> continues to evolve, the Strategic Pillars will continue providing long-term strategic direction for tourism development across Sri Lanka's tourism ecosystem.</>,
              'By guiding strategic priorities, enterprise development, destination development, innovation, collaboration, and ecosystem strengthening, they will continue supporting the development and strengthening of micro and small tourism enterprises while creating stronger connections between people, places, partnerships, destinations, and opportunities.',
              'Through this connected strategic approach, the Framework seeks to build tourism ecosystems that are inclusive, resilient, collaborative, and capable of creating lasting economic, social, cultural, and environmental value for present and future generations.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Grow with Traveleye Alliance" />
          <TextPanel
            paragraphs={[
              <>Whether you are a government agency, tourism authority, development organisation, entrepreneur, tourism enterprise, educational institution, investor, community organisation, or strategic partner, the <strong>People-Powered Tourism Strategic Pillars</strong> provide a shared strategic direction for participation and long-term tourism development.</>,
              'Whether your focus is creating meaningful journeys, developing authentic host stays and travel experiences, strengthening tourism enterprises, supporting destination development, building capability, or fostering collaboration, the Strategic Pillars provide opportunities to contribute to a stronger and more connected tourism ecosystem.',
              <>Together, we can develop and strengthen micro and small tourism enterprises across Sri Lanka's tourism ecosystem while creating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</>,
            ]}
          />
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
