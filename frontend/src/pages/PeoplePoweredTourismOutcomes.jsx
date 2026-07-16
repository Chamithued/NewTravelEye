import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  FolderKanban,
  Globe2,
  Handshake,
  Home,
  Leaf,
  LineChart,
  Network,
  Route,
  Sprout,
  Theater,
} from 'lucide-react'
import heroImg from '../assets/subhero/pillars/Explore the Ecosystem.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const outcomes = [
  {
    icon: BriefcaseBusiness,
    title: 'Tourism Enterprises',
    subtitle: 'Stronger Enterprises. Stronger Tourism.',
    body: [
      'Thriving tourism ecosystems are built upon thriving tourism enterprises.',
      'The Framework supports the development and strengthening of micro and small tourism enterprises that create employment, encourage entrepreneurship, generate local economic opportunities, and strengthen destination economies.',
      'From accommodation providers and guides to artisans, transport providers, experience creators, and tourism service providers, stronger enterprises contribute to stronger destinations and more resilient tourism ecosystems.',
    ],
  },
  {
    icon: Home,
    title: 'Place-Inspired Host Stays',
    subtitle: 'Celebrating Hospitality Through Place',
    body: [
      'The Framework encourages the development of authentic place-inspired host stays that reflect the culture, hospitality, landscapes, and identity of each destination.',
      'These welcoming environments provide travellers with genuine local hospitality while creating meaningful enterprise opportunities for hosts, families, and communities.',
    ],
  },
  {
    icon: Theater,
    title: 'People and Place-Inspired Experiences',
    subtitle: 'Creating Meaningful Experiences',
    body: [
      'Meaningful journeys are shaped by authentic experiences.',
      'The Framework supports the creation of people and place-inspired experiences that celebrate local culture, heritage, nature, wellness, agriculture, creativity, and everyday life while creating opportunities for participation, entrepreneurship, and enterprise development.',
    ],
  },
  {
    icon: Compass,
    title: 'Tourism Destinations',
    subtitle: 'Strengthening Destinations Together',
    body: [
      'The Framework contributes to collaborative, resilient, and place-inspired destination development.',
      'Through participation, stewardship, and coordinated destination development, it strengthens destination identity, enhances visitor experiences, supports environmental responsibility, and contributes to long-term community wellbeing.',
    ],
  },
  {
    icon: Globe2,
    title: 'Travel Corridors',
    subtitle: 'Connecting Destinations Beyond Borders',
    body: [
      'Travel Corridors strengthen long-term tourism relationships by connecting destinations, tourism enterprises, institutions, and strategic partners.',
      'They encourage meaningful travel, cultural exchange, education, investment, collaboration, and people-to-people connections that create shared value across participating regions and countries.',
    ],
  },
  {
    icon: Handshake,
    title: 'Tourism Partnerships',
    subtitle: 'Building Tourism Through Collaboration',
    body: [
      'Strong tourism ecosystems are built through meaningful partnerships.',
      'The Framework encourages collaboration among governments, tourism authorities, tourism enterprises, communities, educational institutions, development organisations, investors, and strategic partners to strengthen tourism through shared purpose, coordinated action, and long-term commitment.',
    ],
  },
  {
    icon: Handshake,
    title: 'Joint Ventures',
    subtitle: 'Creating Shared Opportunities',
    body: [
      'The Framework supports strategic tourism joint ventures that combine complementary expertise, investment, innovation, and resources.',
      'Through shared ownership and collaborative leadership, these ventures strengthen tourism enterprises, destination initiatives, travel programmes, and long-term partnerships.',
    ],
  },
  {
    icon: LineChart,
    title: 'Tourism Programmes',
    subtitle: 'Building Capability and Opportunity',
    body: [
      'Tourism programmes provide structured pathways for strengthening people, enterprises, destinations, and tourism ecosystems.',
      'The Framework supports programmes that build capability, encourage participation, strengthen tourism readiness, promote innovation, and expand opportunities for sustainable tourism development.',
    ],
  },
  {
    icon: FolderKanban,
    title: 'Tourism Projects',
    subtitle: 'Turning Ideas into Action',
    body: [
      'Collaborative tourism projects transform ideas into practical implementation.',
      'The Framework supports projects that respond to destination opportunities, strengthen tourism enterprises, improve visitor experiences, expand local participation, and contribute to balanced tourism development.',
    ],
  },
  {
    icon: Sprout,
    title: 'Ecosystem Initiatives',
    subtitle: 'Strengthening the Tourism Ecosystem',
    body: [
      'Tourism ecosystems flourish through continuous collaboration and innovation.',
      'The Framework supports ecosystem initiatives that strengthen tourism through knowledge sharing, capability development, digital transformation, stewardship, innovation, and ecosystem connectivity, creating stronger relationships between people, enterprises, destinations, partnerships, and opportunities.',
    ],
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

function TextPanel({ children }) {
  return (
    <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
      {children}
    </div>
  )
}

function OutcomeCard({ outcome }) {
  const Icon = outcome.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{outcome.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#1f4f93] sm:text-base">{outcome.subtitle}</p>
      <div className="mt-4 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base">
        {outcome.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default function PeoplePoweredTourismOutcomes() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Outcomes banner"
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
              <span className="block">OUTCOMES</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Creating Lasting Value Through People, Places, Partnerships, and Prosperity
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To create meaningful tourism outcomes by developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem through the implementation of the People-Powered Tourism Framework.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Leaf} title="Creating Meaningful Tourism Outcomes" />
          </div>
          <TextPanel>
            <p>The <strong>People-Powered Tourism Outcomes</strong> represent the <strong>results component</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
            <p>While the Framework provides the strategic blueprint, the <strong>Strategic Pillars</strong> define where tourism is strengthened, the <strong>Development Models</strong> guide how tourism is developed, and the <strong>Operational Platforms</strong> implement the Framework, the <strong>Tourism Outcomes</strong> represent what is created through this connected and People-Powered approach.</p>
            <p>Together, these interconnected outcomes contribute to developing and strengthening micro and small tourism enterprises while creating stronger destinations, authentic tourism experiences, collaborative partnerships, connected travel corridors, and thriving tourism ecosystems that generate lasting economic, social, cultural, and environmental value.</p>
            <p>Rather than measuring success solely by visitor numbers or economic growth, the Framework focuses on creating balanced outcomes that strengthen <strong>People, Places, Partnerships, and Prosperity</strong> across Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Why Tourism Outcomes Matter" />
          <TextPanel>
            <p>The success of tourism is measured not only by what is done but by what is created.</p>
            <p>The People-Powered Tourism Outcomes demonstrate how strategic direction, practical methodologies, and collaborative implementation contribute to meaningful and lasting results across the tourism ecosystem.</p>
            <p>Together, these outcomes strengthen tourism enterprises, enrich destinations, expand participation, encourage collaboration, create new opportunities, and contribute to a resilient and connected tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="The Ten People-Powered Tourism Outcomes" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Together, these interconnected outcomes demonstrate the value created through the implementation of the People-Powered Tourism Framework.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {outcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} outcome={outcome} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Route} title="A Connected Approach to Tourism Outcomes" />
          <TextPanel>
            <p>The People-Powered Tourism Outcomes are designed to complement and reinforce one another.</p>
            <p>Stronger tourism enterprises create authentic host stays and meaningful experiences.</p>
            <p>These experiences strengthen destinations.</p>
            <p>Stronger destinations create opportunities for travel corridors, partnerships, joint ventures, programmes, projects, and ecosystem initiatives.</p>
            <p>Together, these interconnected outcomes contribute to a thriving <strong>People-Powered Tourism Ecosystem</strong>, where tourism grows through participation, stewardship, collaboration, innovation, and shared value creation.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ArrowRight} title="The Results Role Within the Framework" />
          <TextPanel>
            <p>The <strong>People-Powered Tourism Outcomes</strong> represent the <strong>results component</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
            <p>Built upon the Framework&apos;s <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, and <strong>Operational Platforms</strong>, they demonstrate what is created through implementation.</p>
            <p>The <strong>People-Powered Tourism Ecosystem Indicators</strong> then measure the progress and long-term impact of these outcomes across Sri Lanka&apos;s tourism ecosystem.</p>
            <p>Together, these interconnected components provide a complete pathway from strategic vision to measurable results.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" />
          <TextPanel>
            <p>As the People-Powered Tourism Framework continues to evolve, the Tourism Outcomes will continue demonstrating the value created through connected and collaborative tourism development.</p>
            <p>By developing and strengthening micro and small tourism enterprises while creating stronger destinations, richer visitor experiences, collaborative partnerships, and resilient tourism ecosystems, these outcomes will continue contributing to lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Grow with Traveleye Alliance" />
          <TextPanel>
            <p>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to become part of creating meaningful tourism outcomes through the <strong>People-Powered Tourism Framework</strong>.</p>
            <p>Together, we can develop and strengthen micro and small tourism enterprises, create resilient destinations, expand meaningful partnerships, and contribute to a thriving <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
