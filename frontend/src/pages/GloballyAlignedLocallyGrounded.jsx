import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  Lightbulb,
  Network,
  Recycle,
  Sprout,
  Target,
  Users,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/subhero/pillars/Explore the Ecosystem.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const tourismAlignment = [
  {
    icon: Recycle,
    title: 'Sustainable Tourism',
    body: 'Supporting tourism that balances economic prosperity, environmental responsibility, cultural integrity, and social wellbeing, ensuring tourism creates long-term value for present and future generations.',
  },
  {
    icon: Sprout,
    title: 'Regenerative Tourism',
    body: 'Encouraging tourism that not only sustains destinations but actively contributes to the renewal of communities, ecosystems, local economies, and cultural heritage.',
  },
  {
    icon: HeartHandshake,
    title: 'Responsible Tourism',
    body: 'Promoting ethical tourism practices that encourage accountability, transparency, respect for local cultures, environmental stewardship, and meaningful benefits for host communities.',
  },
  {
    icon: Compass,
    title: 'Destination Stewardship',
    body: 'Recognising that resilient destinations require shared responsibility among governments, tourism enterprises, communities, travellers, and institutions to protect, strengthen, and continuously improve tourism destinations.',
  },
  {
    icon: Handshake,
    title: 'Community-Centred Development',
    body: 'Supporting meaningful participation, local entrepreneurship, capability development, and collaborative decision-making that enables communities to actively contribute to and benefit from tourism development.',
  },
]

const sdgs = [
  {
    icon: BriefcaseBusiness,
    title: 'SDG 1 – No Poverty',
    body: 'through entrepreneurship, income generation, and local economic participation.',
  },
  {
    icon: Users,
    title: 'SDG 5 – Gender Equality',
    body: 'by supporting women and youth entrepreneurship, leadership, and meaningful participation.',
  },
  {
    icon: Building2,
    title: 'SDG 8 – Decent Work and Economic Growth',
    body: 'through the development and strengthening of micro and small tourism enterprises.',
  },
  {
    icon: Landmark,
    title: 'SDG 11 – Sustainable Cities and Communities',
    body: 'by encouraging destination stewardship, cultural heritage preservation, and resilient communities.',
  },
  {
    icon: Recycle,
    title: 'SDG 12 – Responsible Consumption and Production',
    body: 'through responsible tourism practices and shared stewardship.',
  },
  {
    icon: Leaf,
    title: 'SDG 13 – Climate Action',
    body: 'by promoting environmentally responsible tourism development and long-term environmental stewardship.',
  },
  {
    icon: Globe2,
    title: 'SDG 14 – Life Below Water',
    body: 'by encouraging responsible tourism that supports the protection of coastal and marine ecosystems.',
  },
  {
    icon: Sprout,
    title: 'SDG 15 – Life on Land',
    body: 'by promoting stewardship of natural landscapes, biodiversity, and terrestrial ecosystems.',
  },
]

const localAlignment = [
  {
    icon: Users,
    title: 'People-Centred Tourism',
    body: 'People are at the heart of tourism development. The Framework encourages tourism that empowers entrepreneurs, hosts, tourism enterprises, communities, women, youth, institutions, and industry stakeholders to actively participate in shaping stronger tourism ecosystems.',
  },
  {
    icon: Handshake,
    title: 'Meaningful Participation',
    body: 'Participation extends beyond consultation. The Framework encourages people to become active contributors, collaborators, innovators, and stewards of tourism development, creating shared ownership, shared responsibility, and shared value.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation for Impact',
    body: 'Innovation should create practical value for people and places. The Framework encourages human-centred innovation that strengthens tourism enterprises, improves visitor experiences, supports destinations, and expands opportunities across the tourism ecosystem.',
  },
  {
    icon: Leaf,
    title: 'Long-Term Stewardship',
    body: 'Tourism should leave destinations stronger than they were before. The Framework encourages responsible leadership, collaborative governance, and stewardship that protects tourism assets while creating long-term value for present and future generations.',
  },
  {
    icon: Globe2,
    title: 'Sri Lankan Realities',
    body: "The Framework reflects Sri Lanka's distinctive tourism landscape, recognising its diverse cultures, heritage, communities, destinations, natural environments, and entrepreneurial potential. Rather than applying global concepts uniformly, it adapts them to support the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem.",
  },
]

const frameworkComponents = [
  'Strategic Pillars',
  'Development Models',
  'Operational Platforms',
  'Tourism Outcomes',
  'Ecosystem Indicators',
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

function TextPanel({ children }) {
  return (
    <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
      {children}
    </div>
  )
}

function InfoCard({ item }) {
  const Icon = item.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{item.body}</p>
    </article>
  )
}

function SdgCard({ item }) {
  const Icon = item.icon

  return (
    <article className="flex gap-4 rounded-2xl border border-[#eef4ef] bg-white p-5 text-left shadow-sm">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="text-sm leading-7 text-[#55636a] sm:text-base">
        <strong className="font-bold text-black">{item.title}</strong> {item.body}
      </p>
    </article>
  )
}

export default function GloballyAlignedLocallyGrounded() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Global Alignment banner"
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
              <span className="block">PEOPLE-POWERED TOURISM</span>
              <span className="block">GLOBAL ALIGNMENT</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-white/95 sm:text-base lg:text-lg">
              Connecting Global Perspectives with Sri Lankan Realities
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To demonstrate how the People-Powered Tourism Framework aligns with internationally recognised tourism concepts and global development priorities while remaining grounded in the unique realities, opportunities, and aspirations of Sri Lanka.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Globe2} title="A Framework Informed by Global Thinking" />
          </div>
          <TextPanel>
            <p>The <strong>People-Powered Tourism Global Alignment</strong> forms the external foundation of the <strong>People-Powered Tourism Framework</strong>. It demonstrates how the Framework is informed by internationally recognised tourism concepts and global development priorities while remaining responsive to the unique characteristics of Sri Lanka&apos;s tourism ecosystem.</p>
            <p>While the <strong>People-Powered Tourism Guiding Principles</strong> establish the internal values that guide every decision within the Framework, <strong>Global Alignment</strong> provides the broader international context that informs its development.</p>
            <p>Rather than replicating existing tourism models, the Framework draws upon recognised tourism thinking and adapts it through a People-Powered approach that reflects Sri Lanka&apos;s people, places, tourism enterprises, destinations, culture, and development priorities.</p>
            <p>Together, these global and local perspectives ensure that the Framework remains internationally relevant while delivering practical and meaningful solutions for Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="Why Global Alignment Matters" />
          <TextPanel>
            <p>Tourism operates within an increasingly connected world where destinations, travellers, tourism enterprises, governments, investors, development organisations, and educational institutions share common aspirations for sustainable, inclusive, and resilient tourism development.</p>
            <p>By aligning with internationally recognised tourism concepts and global development priorities, the People-Powered Tourism Framework builds upon established knowledge while recognising that every destination must respond to its own social, cultural, environmental, and economic context.</p>
            <p>Rather than applying international models unchanged, the Framework interprets global perspectives through the realities of Sri Lanka, creating an approach that is both internationally informed and locally relevant.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="International Tourism Alignment" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The People-Powered Tourism Framework aligns with internationally recognised tourism concepts that encourage responsible, inclusive, resilient, and sustainable tourism development.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {tourismAlignment.map((item) => (
              <InfoCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Target} title="Supporting the United Nations Sustainable Development Goals" />
          <TextPanel>
            <p>The People-Powered Tourism Framework also contributes to the broader aspirations of the <strong>United Nations Sustainable Development Goals (SDGs)</strong> by encouraging tourism that creates inclusive economic opportunities, strengthens communities, supports environmental stewardship, and promotes long-term prosperity.</p>
            <p>Rather than treating the SDGs as isolated objectives, the Framework integrates their underlying principles throughout its interconnected components, encouraging tourism that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
            <p>The Framework particularly contributes to:</p>
          </TextPanel>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {sdgs.map((item) => (
              <SdgCard key={item.title} item={item} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-5xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By contributing to these global priorities, the Framework demonstrates how tourism can support not only stronger tourism enterprises and destinations but also broader economic, social, cultural, and environmental wellbeing.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Local People-Powered Alignment" />
          <TextPanel>
            <p>While informed by global tourism thinking, the Framework is distinguished by its <strong>People-Powered interpretation</strong> of tourism development, shaped by Sri Lanka&apos;s unique context, opportunities, and aspirations.</p>
          </TextPanel>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {localAlignment.map((item) => (
              <InfoCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Globally Aligned, Locally Grounded" />
          <TextPanel>
            <p>The strength of the People-Powered Tourism Framework lies in its ability to connect internationally recognised tourism thinking with practical action that responds to Sri Lanka&apos;s unique context.</p>
            <p>Rather than viewing global and local perspectives as competing approaches, the Framework integrates them into a connected model that is internationally credible, locally relevant, and practically applicable.</p>
            <p>This balanced approach enables the Framework to contribute to stronger tourism enterprises, resilient destinations, collaborative partnerships, thriving local economies, and more connected tourism ecosystems.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ArrowRight} title="Supporting the People-Powered Tourism Framework" />
          <TextPanel>
            <p>Together with the <strong>People-Powered Tourism Guiding Principles</strong>, <strong>Global Alignment</strong> provides the foundation upon which the Framework&apos;s:</p>
          </TextPanel>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {frameworkComponents.map((item) => (
              <div key={item} className="rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] px-4 py-5 text-center text-sm font-bold leading-6 text-[#1f4f93] shadow-sm sm:text-base">
                {item}
              </div>
            ))}
          </div>
          <TextPanel>
            <p>are developed and continuously strengthened.</p>
            <p>By combining international perspectives with local relevance, the Framework transforms recognised tourism thinking into practical strategies that develop and strengthen micro and small tourism enterprises while creating lasting value across Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" />
          <TextPanel>
            <p>Tourism continues to evolve in response to changing economies, technologies, traveller expectations, environmental priorities, and global development agendas.</p>
            <p>The People-Powered Tourism Framework is designed as a living framework that continues to evolve alongside these changes while remaining grounded in its commitment to People-Powered Tourism.</p>
            <p>By learning from international perspectives while responding to Sri Lanka&apos;s changing needs and opportunities, the Framework will remain relevant, adaptable, and capable of supporting stronger tourism enterprises, resilient destinations, collaborative partnerships, and lasting prosperity for future generations.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Grow with Traveleye Alliance" />
          <TextPanel>
            <p>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to contribute to a tourism future that is <strong>globally aligned and locally grounded</strong>.</p>
            <p>Together, we can develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem by combining international perspectives with local knowledge, meaningful participation, collaborative partnerships, responsible stewardship, and a shared commitment to creating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
