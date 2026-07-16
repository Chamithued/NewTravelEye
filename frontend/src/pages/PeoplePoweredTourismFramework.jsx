import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Compass,
  Globe2,
  Handshake,
  Home,
  Leaf,
  Network,
  Recycle,
  Sprout,
  Users,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/People-Powered Tourism Framework.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const characteristics = [
  'People-centred',
  'Destination-aware',
  'Inclusive and participatory',
  'Locally connected',
  'Collaborative and innovative',
  'Environmentally responsible',
  'Resilient and future-focused',
]

const principles = [
  'Authenticity',
  'Participation & Shared Stewardship',
  'Women & Youth Entrepreneurship',
  'Human-Centred Innovation',
  'Transparency & Shared Value',
  'Inclusive Participation',
  'Sustainability & Stewardship',
  'Regenerative Development',
]

const internationalAlignment = [
  'Sustainable Tourism',
  'Regenerative Tourism',
  'Responsible Tourism',
  'Destination Stewardship',
  'Community-Centred Development',
]

const localAlignment = [
  'People-Centred Tourism',
  'Meaningful Participation',
  'Innovation for Impact',
  'Long-Term Stewardship',
  'Sri Lankan Realities',
]

const pillars = [
  {
    icon: Globe2,
    title: 'People-Powered Travel Collective',
  },
  {
    icon: Leaf,
    title: 'People-Powered Host Experiences',
  },
  {
    icon: BriefcaseBusiness,
    title: 'People-Powered Ecosystem Support',
  },
  {
    icon: Compass,
    title: 'People-Powered Destination Facilitation',
  },
]

const developmentModels = [
  {
    icon: Handshake,
    title: 'People-Powered Participation Model',
  },
  {
    icon: Leaf,
    title: 'Shared Stewardship Model',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Tourism Enterprise Development Model',
  },
  {
    icon: Compass,
    title: 'Destination Stewardship Model',
  },
  {
    icon: Globe2,
    title: 'Travel Corridor Development Model',
  },
  {
    icon: Network,
    title: 'Tourism Ecosystem Connectivity Model',
  },
  {
    icon: Globe2,
    title: 'Shared Value Creation Model',
  },
  {
    icon: Sprout,
    title: 'Living Framework Evolution Model',
  },
]

const platforms = [
  {
    icon: Globe2,
    title: 'Traveleye Travel Collective',
  },
  {
    icon: Leaf,
    title: 'Traveleye Host Experiences',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Traveleye Ecosystem Support',
  },
  {
    icon: Compass,
    title: 'Traveleye Destination Facilitation',
  },
]

const outcomes = [
  'Tourism Enterprises',
  'Place-Inspired Host Stays',
  'People & Place-Inspired Experiences',
  'Tourism Destinations',
  'Travel Corridors',
  'Tourism Partnerships',
  'Joint Ventures',
  'Tourism Programmes',
  'Tourism Projects',
  'Ecosystem Initiatives',
]

const indicators = [
  'Women Entrepreneurs Supported',
  'Youth Entrepreneurs Supported',
  'Micro and Small Tourism Enterprises Developed',
  'Place-Inspired Host Stays Developed',
  'People & Place-Inspired Experiences Developed',
  'Destination Development Initiatives Facilitated',
  'Travel Corridor Partnerships Established',
  'Strategic Partnerships Established',
  'Tourism Programmes Delivered',
  'Tourism Projects Implemented',
  'Inbound Travellers Served',
  'Domestic Travellers Served',
  'Outbound Travellers Served',
]

function SectionHeading({ icon: Icon, title, subtitle }) {
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
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-[#1f4f93] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
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

function SimpleList({ items, columns = 'sm:grid-cols-2 lg:grid-cols-4' }) {
  return (
    <ul className={`mx-auto mt-7 grid max-w-5xl gap-3 ${columns}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-xl border border-[#dfe7f3] bg-white px-4 py-3 text-center text-sm font-semibold leading-6 text-[#172544] shadow-sm sm:text-base"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function IconCardGrid({ items }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title }) => (
        <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 text-center shadow-sm">
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-bold leading-tight tracking-tight text-black">{title}</h3>
        </article>
      ))}
    </div>
  )
}

export default function PeoplePoweredTourismFramework() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Framework banner"
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
              <span className="block">FRAMEWORK</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-white/95 sm:text-base lg:text-lg">
              The Strategic Blueprint of the <strong>Traveleye</strong> People-Powered Tourism Ecosystem
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To provide the strategic blueprint for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Network} title="Building Tourism Through a Connected Framework" />
          </div>
          <TextPanel>
            <p>The <strong>People-Powered Tourism Framework</strong> is the strategic blueprint of the Traveleye People-Powered Tourism Ecosystem. Developed by Traveleye Alliance Sri Lanka, it provides a structured and connected approach to planning, developing, implementing, and continuously strengthening tourism across Sri Lanka.</p>
            <p>While the <strong>Traveleye People-Powered Tourism Ecosystem</strong> provides the connected environment where tourism grows through participation, collaboration, and shared value creation, the <strong>People-Powered Tourism Framework</strong> provides the strategic direction that guides how the ecosystem is developed, implemented, and measured.</p>
            <p>Developed in Sri Lanka, the Framework reimagines tourism as more than journeys, hospitality, or individual tourism businesses. It approaches tourism as a connected ecosystem where people, enterprises, destinations, experiences, institutions, partnerships, and communities work together to create shared value, strengthen local economies, and contribute to long-term prosperity.</p>
            <p>At its core is a simple belief:</p>
            <p className="mx-auto max-w-3xl text-lg font-bold italic text-[#0f4d2f]">
              Tourism should create value not only for <strong>travellers</strong>, but also for the people, places, and destinations that make travel meaningful.
            </p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Recycle} title="What Is the People-Powered Tourism Framework?" />
          <TextPanel>
            <p>The People-Powered Tourism Framework provides a practical and strategic approach to developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p>
            <p>Rather than viewing tourism through isolated sectors or individual businesses, the Framework strengthens the relationships between people, enterprises, destinations, institutions, communities, and tourism support systems. Through this connected approach, tourism becomes more inclusive, resilient, collaborative, and sustainable.</p>
            <p>The Framework encourages tourism that is:</p>
          </TextPanel>
          <SimpleList items={characteristics} columns="sm:grid-cols-2 lg:grid-cols-3" />
          <TextPanel>
            <p>Together, these characteristics provide a foundation for strengthening tourism enterprises, supporting destination development, encouraging meaningful participation, and creating lasting value across Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="Framework Architecture" />
          <TextPanel>
            <p>The People-Powered Tourism Framework consists of seven interconnected components that together transform strategic vision into practical action.</p>
            <p>Built upon its <strong>Guiding Principles</strong> and <strong>Global Alignment</strong>, and implemented through its <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Operational Platforms</strong>, <strong>Tourism Outcomes</strong>, and <strong>Ecosystem Indicators</strong>, the Framework provides a structured pathway for developing and strengthening micro and small tourism enterprises while creating stronger destinations, partnerships, and tourism ecosystems.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="People-Powered Tourism Guiding Principles" subtitle="The Internal Foundation of the Framework" />
          <TextPanel>
            <p>The Guiding Principles establish the values and philosophy that influence every decision, initiative, and action within the Framework. They ensure that tourism development remains authentic, inclusive, collaborative, responsible, and people-centred.</p>
            <p>The Framework is guided by eight interconnected principles:</p>
          </TextPanel>
          <SimpleList items={principles} />
          <TextPanel>
            <p>Together, these principles create the internal foundation upon which the Framework is built.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="People-Powered Tourism Global Alignment" subtitle="Aligning Global Perspectives with Sri Lankan Realities" />
          <TextPanel>
            <p>While developed in Sri Lanka, the Framework is informed by internationally recognised tourism concepts and development approaches while remaining grounded in the realities, opportunities, and aspirations of Sri Lanka.</p>
            <p><strong>International Tourism Alignment</strong></p>
            <p>The Framework aligns with globally recognised approaches including:</p>
          </TextPanel>
          <SimpleList items={internationalAlignment} columns="sm:grid-cols-2 lg:grid-cols-5" />
          <TextPanel>
            <p><strong>Local People-Powered Alignment</strong></p>
            <p>Traveleye&apos;s interpretation of People-Powered Tourism is shaped by:</p>
          </TextPanel>
          <SimpleList items={localAlignment} columns="sm:grid-cols-2 lg:grid-cols-5" />
          <TextPanel>
            <p>Together, these global and local perspectives ensure that the Framework remains internationally relevant while responding to the unique needs of Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Compass} title="People-Powered Tourism Strategic Pillars" subtitle="Where We Build Tourism" />
          <TextPanel>
            <p>The Strategic Pillars define the primary areas where the Framework focuses its efforts to develop and strengthen tourism.</p>
            <p>The Framework is built around four interconnected Strategic Pillars:</p>
          </TextPanel>
          <IconCardGrid items={pillars} />
          <TextPanel>
            <p>Together, these pillars provide the strategic direction for developing tourism enterprises, supporting destinations, strengthening tourism ecosystems, and creating opportunities for meaningful participation.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="People-Powered Tourism Development Models" subtitle="How We Develop Tourism" />
          <TextPanel>
            <p>The Development Models provide practical methodologies for translating strategy into action.</p>
            <p>The Framework currently includes eight interconnected Development Models:</p>
          </TextPanel>
          <IconCardGrid items={developmentModels} />
          <TextPanel>
            <p>Together, these models provide adaptable methodologies for developing tourism enterprises, destinations, partnerships, travel corridors, programmes, projects, and ecosystem initiatives.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={BriefcaseBusiness} title="People-Powered Tourism Operational Platforms" subtitle="How We Implement Tourism" />
          <TextPanel>
            <p>The Operational Platforms transform the Framework into practical action by supporting implementation across the tourism ecosystem.</p>
            <p>The Framework is implemented through four interconnected Operational Platforms:</p>
          </TextPanel>
          <IconCardGrid items={platforms} />
          <TextPanel>
            <p>Together, these platforms operationalise the Framework while supporting the development and strengthening of micro and small tourism enterprises.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ArrowRight} title="People-Powered Tourism Outcomes" subtitle="What We Create" />
          <TextPanel>
            <p>The Tourism Outcomes represent the long-term value created through implementation of the Framework.</p>
            <p>Key outcomes include:</p>
          </TextPanel>
          <SimpleList items={outcomes} columns="sm:grid-cols-2 lg:grid-cols-5" />
          <TextPanel>
            <p>Together, these outcomes demonstrate how the Framework contributes to stronger tourism enterprises, resilient destinations, collaborative partnerships, and thriving tourism ecosystems.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={BarChart3} title="People-Powered Tourism Ecosystem Indicators" subtitle="Measuring Progress and Impact" />
          <TextPanel>
            <p>The Ecosystem Indicators measure the long-term progress and impact of the People-Powered Tourism Framework.</p>
            <p>Key indicators include:</p>
          </TextPanel>
          <SimpleList items={indicators} columns="sm:grid-cols-2 lg:grid-cols-3" />
          <TextPanel>
            <p>Together, these indicators provide meaningful measures of how the Framework contributes to stronger tourism enterprises, destinations, partnerships, and the wider tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Participation and Shared Stewardship" />
          <TextPanel>
            <p>Participation is the foundation of the People-Powered Tourism Framework.</p>
            <p>The Framework encourages entrepreneurs, communities, tourism enterprises, governments, educational institutions, development organisations, investors, and strategic partners to actively contribute to tourism development through entrepreneurship, collaboration, innovation, hosting, and shared stewardship.</p>
            <p>By encouraging meaningful participation across the tourism ecosystem, the Framework supports tourism that creates lasting value for people, places, partnerships, and prosperity.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" />
          <TextPanel>
            <p>The People-Powered Tourism Framework is designed as a living framework that continues to evolve through research, innovation, collaboration, implementation, and shared learning.</p>
            <p>As the strategic blueprint of the Traveleye People-Powered Tourism Ecosystem, it will continue guiding the development and strengthening of micro and small tourism enterprises while creating stronger connections between people, places, partnerships, destinations, and opportunities.</p>
            <p>Through this connected approach, the Framework seeks to build tourism ecosystems that are inclusive, resilient, collaborative, and capable of creating lasting economic, social, cultural, and environmental value for Sri Lanka and future generations.</p>
            <p className="font-bold text-[#0f4d2f]">Tourism That Gives Back More Than It Takes.</p>
            <p className="font-bold text-[#0f4d2f]">Tourism Shaped by the People Who Make It Possible.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Home} title="Grow with Traveleye Alliance" />
          <TextPanel>
            <p>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to become part of the People-Powered Tourism Framework.</p>
            <p>Together, we can transform strategic vision into practical action by developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem, creating stronger destinations, meaningful partnerships, resilient local economies, and lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
