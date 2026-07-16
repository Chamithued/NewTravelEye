import {
  BriefcaseBusiness,
  Compass,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  Lightbulb,
  Recycle,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/People-Powered Tourism Guiding Principles.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const principles = [
  {
    icon: Leaf,
    title: 'Authenticity',
    text: 'Authenticity encourages tourism that reflects the genuine identity of people and places. It values local culture, heritage, traditions, stories, and everyday experiences, creating meaningful connections between visitors and destinations while preserving what makes each place unique.',
  },
  {
    icon: Handshake,
    title: 'Participation & Shared Stewardship',
    text: 'People-Powered Tourism encourages meaningful participation from travellers, entrepreneurs, hosts, communities, institutions, governments, and strategic partners. Shared stewardship recognises that everyone has a role in protecting, strengthening, and sustaining tourism for present and future generations.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Women & Youth Entrepreneurship',
    text: 'Women and young people represent a powerful source of innovation, creativity, and economic opportunity. The Framework encourages entrepreneurship, leadership, skills development, and participation that enable women and youth to become active contributors to tourism development.',
  },
  {
    icon: Lightbulb,
    title: 'Human-Centred Innovation',
    text: "Innovation is most valuable when it improves people's lives and strengthens tourism ecosystems. The Framework encourages practical, inclusive, and purpose-driven innovation that creates better opportunities, enhances visitor experiences, and supports sustainable tourism enterprises.",
  },
  {
    icon: Scale,
    title: 'Transparency & Shared Value',
    text: 'Strong tourism ecosystems are built on trust, accountability, and collaboration. The Framework promotes transparent relationships, fair partnerships, ethical practices, and shared value creation that benefits travellers, enterprises, destinations, communities, and the wider tourism ecosystem.',
  },
  {
    icon: Users,
    title: 'Inclusive Participation',
    text: 'Tourism creates greater value when more people can participate. The Framework encourages opportunities that are accessible, inclusive, and welcoming, enabling individuals, enterprises, communities, and organisations from diverse backgrounds to contribute to and benefit from tourism development.',
  },
  {
    icon: Sprout,
    title: 'Sustainability & Stewardship',
    text: 'Tourism should contribute positively to environmental, cultural, social, and economic wellbeing. The Framework encourages responsible resource management, destination stewardship, and long-term thinking that protects the assets upon which tourism depends.',
  },
  {
    icon: Recycle,
    title: 'Regenerative Development',
    text: 'Beyond sustaining tourism, the Framework encourages tourism that helps destinations become stronger over time. Regenerative development supports the renewal of communities, environments, local economies, and cultural heritage so that tourism leaves places better than they were before.',
  },
]

const frameworkComponents = [
  'The Strategic Pillars that define where tourism is strengthened.',
  'The Development Models that guide how tourism is developed.',
  'The Operational Platforms that translate strategy into action.',
  'The Tourism Outcomes that represent the value created.',
  'The Ecosystem Indicators that measure long-term progress and impact.',
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

function TextPanel({ paragraphs }) {
  return (
    <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
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

export default function GuidingPrinciples() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Guiding Principles banner"
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
              <span className="block">GUIDING PRINCIPLES</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              The Values That Guide the People-Powered Tourism Framework
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To establish the core principles that guide every decision, initiative, and action within the People-Powered Tourism Framework.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Compass} title="Guiding Tourism Through Shared Principles" />
          </div>
          <TextPanel
            paragraphs={[
              <>The <strong>People-Powered Tourism Guiding Principles</strong> form the internal foundation of the Traveleye People-Powered Tourism Framework. They establish the shared values and philosophy that guide how tourism is planned, developed, implemented, and continuously strengthened across Sri Lanka&apos;s tourism ecosystem.</>,
              <>While the <strong>People-Powered Tourism Global Alignment</strong> connects the Framework with internationally recognised tourism concepts and development approaches, the Guiding Principles define the internal values that shape Traveleye&apos;s interpretation of People-Powered Tourism.</>,
              'Together, they ensure that tourism development remains people-centred, collaborative, inclusive, responsible, and focused on creating lasting value for people, places, partnerships, and prosperity.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake} title="Why Guiding Principles Matter" />
          <TextPanel
            paragraphs={[
              'Tourism is shaped by the decisions people make every day. Whether developing a tourism enterprise, designing an experience, supporting a destination, or creating partnerships, those decisions influence the long-term success and sustainability of the tourism ecosystem.',
              'The Guiding Principles provide a consistent foundation for decision-making across the People-Powered Tourism Framework. They encourage tourism development that values participation over exclusion, stewardship over short-term exploitation, collaboration over fragmentation, and shared value over individual gain.',
              'By embedding these principles throughout the Framework, Traveleye promotes tourism that strengthens enterprises, empowers communities, supports resilient destinations, and contributes to lasting economic, social, cultural, and environmental value.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="The Eight Guiding Principles" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The People-Powered Tourism Framework is guided by eight interconnected principles that influence every aspect of tourism development.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <PrincipleCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ShieldCheck} title="Guiding Every Component of the Framework" />
          <TextPanel
            paragraphs={[
              'The Guiding Principles are embedded throughout every component of the People-Powered Tourism Framework.',
              'They influence:',
            ]}
          />
          <ul className="mx-auto mt-7 max-w-4xl divide-y divide-[#d8e2ef] rounded-2xl border border-[#d8e2ef] bg-white px-5 shadow-sm sm:px-8">
            {frameworkComponents.map((item) => (
              <li key={item} className="flex items-start gap-4 py-4 text-[#234c3a]">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-[#1f4f93]">
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-6 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <TextPanel
            paragraphs={[
              "Together, these principles provide a consistent ethical and strategic foundation that ensures every part of the Framework remains aligned with the vision of developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem.",
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Landmark} title="From Principles to Practice" />
          <TextPanel
            paragraphs={[
              'Guiding Principles are meaningful only when they influence action.',
              'Within the People-Powered Tourism Framework, these principles shape how tourism enterprises are developed, destinations are strengthened, partnerships are built, and opportunities are created. They encourage decisions that balance economic opportunity with social responsibility, cultural integrity, environmental stewardship, and long-term prosperity.',
              'By applying these principles consistently, the Framework transforms shared values into practical action that benefits people, places, partnerships, and the wider tourism ecosystem.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" />
          <TextPanel
            paragraphs={[
              'As the People-Powered Tourism Framework continues to evolve, its Guiding Principles will remain its enduring foundation.',
              'While tourism trends, technologies, and markets may change, these principles provide a consistent compass for developing tourism that is inclusive, resilient, collaborative, and capable of creating lasting value for Sri Lanka and future generations.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Grow with Traveleye Alliance" />
          <TextPanel
            paragraphs={[
              'Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to embrace the People-Powered Tourism Guiding Principles as a shared foundation for tourism development.',
              <>Together, we can develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem while fostering authentic participation, responsible stewardship, collaborative partnerships, resilient destinations, and lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</>,
            ]}
          />
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
