import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Globe2,
  Handshake,
  Leaf,
  Link2,
  Network,
  Route,
  Sprout,
} from 'lucide-react'
import heroImg from '../assets/ecosystem/7. People-Powered Tourism Development Models.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const models = [
  {
    icon: Handshake,
    title: 'Traveleye People-Powered Participation Model',
    subtitle: 'Building Tourism Through Meaningful Participation',
    body: [
      'Meaningful tourism is built through meaningful participation.',
      'This model provides a structured methodology for engaging individuals, communities, tourism enterprises, institutions, governments, and development partners in tourism development. By encouraging collaboration, inclusion, shared ownership, and collective responsibility, it strengthens participation throughout the tourism ecosystem.',
    ],
  },
  {
    icon: Leaf,
    title: 'Traveleye Shared Stewardship Model',
    subtitle: 'Protecting What Makes Tourism Meaningful',
    body: [
      'Thriving tourism depends upon shared stewardship.',
      'This model promotes collective responsibility for destinations, cultural heritage, natural environments, and local communities by encouraging long-term care, responsible tourism practices, and collaborative action. It helps protect the assets that make destinations meaningful while supporting resilient and sustainable tourism development.',
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Traveleye People-Powered Tourism Enterprise Development Model',
    subtitle: 'Developing Stronger Tourism Enterprises',
    body: [
      'Strong tourism ecosystems are built upon strong tourism enterprises.',
      'This model provides practical methodologies for developing and strengthening micro and small tourism enterprises through entrepreneurship, capability development, innovation, collaboration, and sustainable business growth. It expands opportunities for enterprise development while strengthening destination economies and tourism participation.',
    ],
  },
  {
    icon: Compass,
    title: 'Traveleye Destination Stewardship Model',
    subtitle: 'Strengthening Destinations Through Stewardship',
    body: [
      'Successful destinations require more than promotion—they require stewardship.',
      'This model supports collaborative destination planning, participation, coordination, governance, and long-term destination management that strengthens destination identity, enhances visitor experiences, and encourages balanced, resilient, and sustainable tourism development.',
    ],
  },
  {
    icon: Globe2,
    title: 'Traveleye Travel Corridor Development Model',
    subtitle: 'Connecting Destinations Beyond Borders',
    body: [
      'Travel corridors create opportunities beyond individual destinations.',
      'This model guides the development of connected tourism corridors by strengthening destination connectivity, enterprise collaboration, market integration, cultural exchange, education, investment, and long-term international partnerships that create shared value for participating destinations, regions, and countries.',
    ],
  },
  {
    icon: Link2,
    title: 'Traveleye Tourism Ecosystem Connectivity Model',
    subtitle: 'Connecting Tourism Through Collaboration',
    body: [
      'Tourism flourishes when people, enterprises, destinations, and support systems are connected.',
      'This model strengthens relationships across the tourism ecosystem through collaboration, knowledge sharing, coordinated action, and ecosystem integration, creating tourism systems that are resilient, adaptive, and future-ready.',
    ],
  },
  {
    icon: Globe2,
    title: 'Traveleye Shared Value Creation Model',
    subtitle: 'Creating Value That Benefits Everyone',
    body: [
      'Tourism should create value for everyone it touches.',
      'This model encourages balanced value creation across economic, social, cultural, and environmental dimensions, ensuring tourism generates lasting benefits for travellers, tourism enterprises, destinations, communities, partners, and future generations through equitable and sustainable development.',
    ],
  },
  {
    icon: Sprout,
    title: 'Traveleye Living Framework Evolution Model',
    subtitle: 'Learning, Adapting, and Evolving',
    body: [
      'Tourism is constantly evolving, and development methodologies must evolve with it.',
      'This model supports the continuous improvement of the People-Powered Tourism Framework through research, innovation, implementation, monitoring, evaluation, collaboration, and shared learning. It ensures the Framework remains relevant, adaptable, and capable of responding to emerging opportunities and future challenges.',
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

function ModelCard({ model }) {
  const Icon = model.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{model.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#1f4f93] sm:text-base">{model.subtitle}</p>
      <div className="mt-4 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base">
        {model.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default function PeoplePoweredTourismDevelopmentModels() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Development Models banner"
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
              <span className="block">DEVELOPMENT MODELS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Practical Methodologies for Developing Stronger Tourism
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To provide practical methodologies for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem through structured, collaborative, and People-Powered approaches.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Network} title="Transforming Strategy into Practical Action" />
          </div>
          <TextPanel>
            <p>The <strong>People-Powered Tourism Development Models</strong> are the methodology component of the <strong>People-Powered Tourism Framework</strong>. While the Framework provides the strategic blueprint and the <strong>Strategic Pillars</strong> define where tourism is strengthened, the Development Models explain <strong>how tourism is planned, developed, implemented, and continuously strengthened</strong>.</p>
            <p>Together, these interconnected models provide practical and adaptable methodologies for developing and strengthening micro and small tourism enterprises, place-inspired host stays, people and place-inspired experiences, destinations, travel corridors, partnerships, programmes, projects, and ecosystem initiatives.</p>
            <p>Rather than prescribing a single approach, the Development Models form a flexible library of methodologies that can be applied individually or in combination to respond to different tourism contexts, opportunities, and development priorities.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Why Development Models Matter" />
          <TextPanel>
            <p>Every destination, enterprise, and tourism initiative is unique.</p>
            <p>While strategic direction provides clarity about <strong>where tourism should be strengthened</strong>, practical methodologies determine <strong>how that vision becomes reality</strong>.</p>
            <p>The People-Powered Tourism Development Models provide structured yet adaptable approaches that help governments, tourism authorities, development organisations, educational institutions, entrepreneurs, tourism enterprises, investors, communities, and strategic partners apply consistent, collaborative, and People-Powered methodologies across different tourism contexts.</p>
            <p>By translating strategic direction into practical action, the models support innovation, collaboration, enterprise development, destination stewardship, and long-term ecosystem resilience.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="The Eight People-Powered Tourism Development Models" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Together, these eight interconnected models provide practical methodologies for strengthening tourism across multiple dimensions.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {models.map((model) => (
              <ModelCard key={model.title} model={model} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Route} title="A Connected Approach to Tourism Development" />
          <TextPanel>
            <p>The People-Powered Tourism Development Models are designed as a connected library of methodologies that support the implementation of the <strong>People-Powered Tourism Framework</strong>.</p>
            <p>Although each model addresses a distinct aspect of tourism development, they are designed to complement one another and may be applied individually or combined to address different development priorities.</p>
            <p>Whether developing tourism enterprises, strengthening destinations, creating place-inspired host stays, designing people and place-inspired experiences, building travel corridors, facilitating partnerships, or supporting ecosystem initiatives, the models provide practical methodologies that are flexible, scalable, and responsive to local needs.</p>
            <p>Working together, they transform strategic direction into coordinated action, contributing to stronger tourism enterprises, resilient destinations, collaborative partnerships, and thriving tourism ecosystems.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ArrowRight} title="The Methodological Role Within the Framework" />
          <TextPanel>
            <p>The <strong>People-Powered Tourism Development Models</strong> represent the <strong>methodology component</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
            <p>Built upon the Framework&apos;s <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, and <strong>Strategic Pillars</strong>, they define <strong>how tourism is developed</strong>.</p>
            <p>The <strong>Operational Platforms</strong> translate these methodologies into practical implementation.</p>
            <p>The <strong>Tourism Outcomes</strong> represent the long-term value created through implementation.</p>
            <p>The <strong>Ecosystem Indicators</strong> measure the progress and impact of tourism development across the ecosystem.</p>
            <p>Together, these interconnected components provide a structured pathway for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" />
          <TextPanel>
            <p>As tourism continues to evolve, the People-Powered Tourism Development Models will continue providing practical methodologies that respond to changing opportunities, emerging challenges, and new forms of collaboration.</p>
            <p>By combining structured approaches with the flexibility to adapt across different tourism contexts, the models will continue supporting the development and strengthening of micro and small tourism enterprises while encouraging innovation, collaboration, destination stewardship, and resilient tourism ecosystems.</p>
            <p>Through this connected and People-Powered approach, the Framework will continue transforming strategic vision into practical action that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Grow with Traveleye Alliance" />
          <TextPanel>
            <p>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to apply the <strong>People-Powered Tourism Development Models</strong> to develop and strengthen micro and small tourism enterprises, facilitate resilient destinations, strengthen collaborative partnerships, and contribute to a stronger People-Powered Tourism Ecosystem.</p>
            <p>Together, we can transform strategic vision into practical action while creating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
