import {
  Building2,
  Handshake,
  Landmark,
  Leaf,
  Lightbulb,
  Network,
  Rocket,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/Why Traveleye.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const reasons = [
  {
    icon: Network,
    title: 'Tourism Ecosystem Building',
    paragraphs: [
      <>We take a whole-of-ecosystem approach to tourism development. By connecting people, tourism enterprises, destinations, institutions, and strategic partners, we create stronger networks that encourage collaboration, shared value, and long-term resilience across Sri Lanka&apos;s tourism sector.</>,
    ],
  },
  {
    icon: Rocket,
    title: 'Enterprise Development',
    paragraphs: [
      <>Micro and small tourism enterprises are the foundation of a vibrant tourism economy.</>,
      <>We support entrepreneurs, tourism enterprises, hosts, and experience creators by providing opportunities for development, collaboration, market access, capacity building, and sustainable business growth.</>,
    ],
  },
  {
    icon: Landmark,
    title: 'Destination Development',
    paragraphs: [
      <>Strong tourism begins with strong destinations.</>,
      <>We work alongside destinations to encourage stewardship, strengthen local tourism enterprises, support authentic visitor experiences, and foster collaboration among local stakeholders to create resilient and competitive destinations.</>,
    ],
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    paragraphs: [
      <>Tourism succeeds through collaboration.</>,
      <>We bring together tourism enterprises, communities, government agencies, investors, development organisations, educational institutions, and strategic partners to create meaningful partnerships that strengthen the tourism ecosystem.</>,
    ],
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    paragraphs: [
      <>Innovation creates value when it addresses real-world opportunities.</>,
      <>Through the <strong>People-Powered Tourism Framework</strong>, Development Models, and Operational Platforms, we transform strategic thinking into practical solutions that support tourism enterprises, destinations, and collaborative initiatives.</>,
    ],
  },
  {
    icon: Leaf,
    title: 'Sustainable Tourism Development',
    paragraphs: [
      <>We believe tourism should create lasting benefits that extend beyond individual journeys.</>,
      <>Our work supports tourism that contributes to stronger enterprises, thriving destinations, empowered communities, environmental stewardship, and shared prosperity while creating long-term economic, social, cultural, and environmental value.</>,
    ],
  },
]

const partnerTypes = [
  'A tourism entrepreneur',
  'A tourism enterprise',
  'A destination or destination organisation',
  'A community group',
  'A government institution',
  'A university or training institution',
  'A development agency',
  'An investor',
  'A strategic partner',
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function TextPanel({ children, className = '' }) {
  return (
    <div className={`mx-auto mt-8 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8 ${className}`}>
      {children}
    </div>
  )
}

export default function WhyTraveleyePage() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Why Choose Traveleye banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Why Choose Traveleye
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">
              Building Stronger Tourism Through People, Partnerships, and Purpose
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Building2} title="Why Choose Traveleye" />
          <TextPanel>
            <p>Tourism creates its greatest impact when people, enterprises, destinations, and partnerships work together toward a shared purpose.</p>
            <p>At Traveleye Alliance Sri Lanka, we take a connected approach to tourism development by building <strong>Sri Lanka&apos;s First People-Powered Tourism Ecosystem</strong>. Rather than focusing on individual tourism services alone, we strengthen the relationships that enable tourism enterprises, destinations, and communities to grow together.</p>
            <p>Guided by the <strong>People-Powered Tourism Framework</strong>, we develop and strengthen micro and small tourism enterprises while fostering collaboration, encouraging innovation, and creating lasting value for <strong>People, Planet, and Prosperity</strong>.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Why Organisations Choose Traveleye" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reasons.map(({ icon: Icon, title, paragraphs }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dfe7f3] text-[#1f4f93]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#172544]">{title}</h3>
                </div>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569] sm:text-base">
                  {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Our Difference" />
          <TextPanel>
            <p>What makes Traveleye different is not simply what we do, but how we do it.</p>
            <p>We build connections between people, enterprises, destinations, partnerships, and opportunities, creating an integrated ecosystem where tourism participants can grow together rather than in isolation.</p>
            <p>This connected approach enables stronger collaboration, practical innovation, and sustainable development while creating opportunities that benefit the entire tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Why Partner With Traveleye?" />
          <TextPanel>
            <p>Whether you are:</p>
          </TextPanel>
          <ul className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((type) => (
              <li key={type} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#234c3a] shadow-sm sm:text-base">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecf8ef] text-[#14532d]">
                  <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {type}
              </li>
            ))}
          </ul>
          <TextPanel>
            <p>Traveleye Alliance provides opportunities to collaborate, innovate, develop tourism enterprises, strengthen destinations, and contribute to a more inclusive and resilient tourism ecosystem.</p>
          </TextPanel>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Let's Build Stronger Tourism Together" />
          <TextPanel>
            <p>Tourism achieves its greatest potential when people, enterprises, destinations, and partnerships are connected through a shared vision for sustainable growth.</p>
            <p>Whether you are looking to develop tourism enterprises, strengthen destinations, build strategic partnerships, or create new opportunities, we invite you to join us in building <strong>Sri Lanka&apos;s First People-Powered Tourism Ecosystem</strong>.</p>
            <p className="text-lg font-bold text-[#0f4d2f]">Tourism for People, Planet, and Prosperity.</p>
          </TextPanel>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
