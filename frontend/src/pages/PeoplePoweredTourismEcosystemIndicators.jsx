import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Compass,
  FolderKanban,
  Globe2,
  Handshake,
  Home,
  Leaf,
  LineChart,
  Network,
  Sprout,
  Users,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/subhero/pillars/Explore the Ecosystem.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const indicators = [
  {
    icon: Users,
    title: 'People & Participation',
    subtitle: 'Measuring Participation and Capability',
    intro: 'People are at the heart of the Framework.',
    items: [
      'Women Entrepreneurs Supported',
      'Youth Entrepreneurs Supported',
      'Communities Engaged',
      'Tourism Stakeholders Participating',
      'Tourism Participants Trained and Upskilled',
    ],
    closing: 'These indicators measure how the Framework expands participation, strengthens capability, and creates opportunities for people to contribute to tourism development.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Tourism Enterprise Development',
    subtitle: 'Measuring Enterprise Growth',
    intro: 'Strong tourism ecosystems depend on strong tourism enterprises.',
    items: [
      'Micro and Small Tourism Enterprises Developed',
      'Tourism Start-ups Supported',
      'Tourism Enterprise Support Ventures Established',
      'Tourism Enterprises Strengthened',
      'Tourism Innovations Facilitated',
    ],
    closing: 'These indicators measure enterprise development, innovation, entrepreneurship, and business resilience across the tourism ecosystem.',
  },
  {
    icon: Home,
    title: 'Host Stays & Experiences',
    subtitle: 'Measuring Authentic Tourism Experiences',
    intro: 'Meaningful tourism is created through authentic hospitality and experiences.',
    items: [
      'Place-Inspired Host Stays Developed',
      'People and Place-Inspired Experiences Developed',
      'Experience Creators Supported',
      'Host Families Participating',
    ],
    closing: 'These indicators measure the growth of authentic tourism products while expanding opportunities for hosts, experience creators, and local communities.',
  },
  {
    icon: Compass,
    title: 'Destination Development',
    subtitle: 'Measuring Destination Strength',
    intro: 'Successful destinations are strengthened through participation and stewardship.',
    items: [
      'Destination Development Initiatives Facilitated',
      'Destination Stewardship Initiatives Supported',
      'Destinations Strengthened',
      'Community Tourism Initiatives Supported',
    ],
    closing: 'These indicators measure destination resilience, stewardship, collaboration, and community participation.',
  },
  {
    icon: Globe2,
    title: 'Travel Connectivity',
    subtitle: 'Measuring Connected Tourism',
    intro: 'Travel connectivity strengthens tourism relationships.',
    items: [
      'Travel Venture Partnerships Established',
      'Travel Corridor Partnerships Established',
      'International Tourism Partnerships Established',
      'Countries Connected Through Travel Corridors',
    ],
    closing: 'These indicators measure the growth of travel networks, market connectivity, and international collaboration.',
  },
  {
    icon: Handshake,
    title: 'Collaboration & Partnerships',
    subtitle: 'Measuring Collaborative Impact',
    intro: 'Strong ecosystems are built through strong partnerships.',
    items: [
      'Strategic Partnerships Established',
      'Joint Ventures Facilitated',
      'Government & Institutional Partnerships',
      'Academic & Research Partnerships',
      'Development Partner Collaborations',
    ],
    closing: 'These indicators measure collaboration across public, private, academic, and development sectors.',
  },
  {
    icon: FolderKanban,
    title: 'Programmes & Projects',
    subtitle: 'Measuring Practical Implementation',
    intro: 'Practical implementation creates measurable progress.',
    items: [
      'Tourism Programmes Delivered',
      'Tourism Projects Implemented',
      'Tourism Ecosystem Initiatives Launched',
      'Digital Tourism Solutions Developed',
    ],
    closing: 'These indicators measure implementation across programmes, projects, innovation, and ecosystem initiatives.',
  },
  {
    icon: LineChart,
    title: 'Tourism Markets',
    subtitle: 'Measuring Tourism Reach',
    intro: 'Tourism markets demonstrate how participation expands through travel.',
    items: [
      'Inbound Travellers Served',
      'Domestic Travellers Served',
      'Outbound Travellers Served',
      'Events & Celebrations Facilitated',
    ],
    closing: 'These indicators measure market participation and the reach of People-Powered tourism initiatives.',
  },
  {
    icon: Sprout,
    title: 'Ecosystem Impact',
    subtitle: 'Measuring Long-Term Value',
    intro: 'The ultimate purpose of the Framework is to strengthen the tourism ecosystem.',
    items: [
      'Tourism Ecosystems Strengthened',
      'Local Economic Opportunities Created',
      'Employment Opportunities Supported',
      'Sustainable Tourism Initiatives Supported',
      'Shared Value Partnerships Created',
    ],
    closing: 'These indicators measure the broader contribution of the Framework to stronger tourism ecosystems and lasting economic, social, cultural, and environmental value.',
  },
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

function IndicatorCard({ indicator }) {
  const Icon = indicator.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{indicator.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#1f4f93] sm:text-base">{indicator.subtitle}</p>
      <div className="mt-4 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base">
        <p>{indicator.intro}</p>
        <div>
          <p>Key indicators include:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            {indicator.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p>{indicator.closing}</p>
      </div>
    </article>
  )
}

export default function PeoplePoweredTourismEcosystemIndicators() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Ecosystem Indicators banner"
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
              <span className="block">ECOSYSTEM INDICATORS</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-white/95 sm:text-base lg:text-lg">
              Measuring Progress Towards a Stronger People-Powered Tourism Ecosystem
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To measure the progress and long-term impact of developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem through the implementation of the People-Powered Tourism Framework.
          </p>
          <div className="mt-12">
            <SectionHeading icon={BarChart3} title="Measuring What Matters" />
          </div>
          <TextPanel>
            <p>The <strong>People-Powered Tourism Ecosystem Indicators</strong> represent the <strong>measurement component</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
            <p>While the <strong>Tourism Outcomes</strong> represent what is created through implementation, the <strong>Ecosystem Indicators</strong> measure the progress, performance, and long-term impact of those outcomes across Sri Lanka&apos;s tourism ecosystem.</p>
            <p>Together, these indicators provide a practical framework for monitoring how participation, stewardship, collaboration, innovation, and shared value creation contribute to stronger tourism enterprises, resilient destinations, meaningful visitor experiences, collaborative partnerships, and thriving tourism ecosystems.</p>
            <p>Rather than focusing solely on visitor numbers or financial performance, the Indicators measure balanced economic, social, cultural, and environmental progress that contributes to lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="Why Ecosystem Indicators Matter" />
          <TextPanel>
            <p>Tourism development should be measured by the value it creates.</p>
            <p>The People-Powered Tourism Ecosystem Indicators provide a structured approach to monitoring progress across the tourism ecosystem, helping governments, tourism authorities, development organisations, educational institutions, investors, tourism enterprises, and strategic partners understand how the Framework contributes to meaningful and measurable change.</p>
            <p>By tracking progress across people, enterprises, destinations, partnerships, programmes, projects, travel markets, and ecosystem development, the Indicators support informed decision-making, continuous improvement, accountability, and long-term stewardship.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="The People-Powered Tourism Ecosystem Indicators" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Together, these indicators measure progress across the key dimensions of the People-Powered Tourism Ecosystem.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {indicators.map((indicator) => (
              <div key={indicator.title} className={indicator.title === 'Ecosystem Impact' ? 'lg:col-span-2 lg:mx-auto lg:w-1/2' : ''}>
                <IndicatorCard indicator={indicator} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Measuring a Connected Tourism Ecosystem" />
          <TextPanel>
            <p>The People-Powered Tourism Ecosystem Indicators are designed to work together rather than in isolation.</p>
            <p>Progress in participation contributes to stronger tourism enterprises.</p>
            <p>Stronger enterprises support authentic host stays and meaningful experiences.</p>
            <p>These experiences strengthen destinations.</p>
            <p>Stronger destinations create opportunities for travel corridors, partnerships, programmes, projects, and wider ecosystem initiatives.</p>
            <p>Together, these interconnected indicators provide a holistic view of how the <strong>People-Powered Tourism Framework</strong> contributes to the development and strengthening of micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ArrowRight} title="The Measurement Role Within the Framework" />
          <TextPanel>
            <p>The <strong>People-Powered Tourism Ecosystem Indicators</strong> represent the <strong>measurement component</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
            <p>Built upon the Framework&apos;s <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Operational Platforms</strong>, and <strong>Tourism Outcomes</strong>, they measure the progress and long-term impact of implementation.</p>
            <p>Together, these interconnected components provide a complete pathway from <strong>strategic vision</strong>, to <strong>implementation</strong>, to <strong>results</strong>, and finally to <strong>measurement</strong>, supporting continuous learning, improvement, accountability, and long-term stewardship.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Looking Ahead" />
          <TextPanel>
            <p>As the <strong>People-Powered Tourism Framework</strong> evolves, the Ecosystem Indicators will continue providing meaningful evidence of progress and long-term impact.</p>
            <p>By measuring participation, enterprise development, destination stewardship, partnerships, implementation, and ecosystem performance, they will support better decision-making, continuous improvement, and stronger collaboration across Sri Lanka&apos;s tourism ecosystem.</p>
            <p>Through this evidence-based approach, the Framework will continue creating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Grow with Traveleye Alliance" />
          <TextPanel>
            <p>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to use the <strong>People-Powered Tourism Ecosystem Indicators</strong> to measure progress, strengthen collaboration, and support informed tourism development.</p>
            <p>Together, we can monitor meaningful progress while developing and strengthening micro and small tourism enterprises that create lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
