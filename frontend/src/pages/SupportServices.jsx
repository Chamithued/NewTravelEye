import {
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Hotel,
  Lightbulb,
  Megaphone,
  Network,
  PackageCheck,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'
import heroImg from '../assets/client/SupportServices.jpg'

const operationAreas = [
  {
    icon: GraduationCap,
    title: 'Education & Skills Development',
    copy: 'Strengthening tourism through education, professional development, entrepreneurship, mentoring, leadership development, workforce readiness, and lifelong learning.',
  },
  {
    icon: Network,
    title: 'Technology & Digital Solutions',
    copy: 'Supporting tourism enterprises through digital transformation, technology adoption, digital platforms, business systems, artificial intelligence, online connectivity, and digital innovation.',
  },
  {
    icon: Hotel,
    title: 'Hospitality Operations',
    copy: 'Strengthening operational excellence across tourism enterprises through hospitality standards, housekeeping, guest services, front office operations, food and beverage practices, service quality, and operational management.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business Advisory & Enterprise Development',
    copy: 'Supporting tourism entrepreneurs and enterprises through business advisory, enterprise development, business planning, market readiness, mentoring, business improvement, and sustainable growth.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Market Development',
    copy: 'Helping tourism enterprises strengthen branding, promotion, digital marketing, sales, distribution, customer engagement, market visibility, and access to domestic and international tourism markets.',
  },
  {
    icon: PackageCheck,
    title: 'Tourism Supply Chain Development',
    copy: 'Supporting stronger tourism value chains by connecting tourism enterprises with suppliers, producers, artisans, logistics providers, procurement systems, and locally sourced products and services.',
  },
  {
    icon: Sprout,
    title: 'Innovation & Sustainability',
    copy: 'Encouraging innovation, regenerative approaches, sustainable tourism practices, environmental responsibility, resource efficiency, and continuous improvement across tourism enterprises.',
  },
  {
    icon: BarChart3,
    title: 'Research, Knowledge & Insights',
    copy: 'Supporting evidence-based tourism development through research, market intelligence, data analysis, knowledge management, monitoring, evaluation, and industry insights.',
  },
]

const deliveryMechanisms = [
  {
    icon: Target,
    title: 'Traveleye Guidant',
    copy: 'Providing strategic advisory, consultancy, facilitation, enterprise development, tourism planning, destination support, and professional guidance.',
  },
  {
    icon: GraduationCap,
    title: 'TraveleyeUpSkills',
    copy: 'Building tourism capability through education, entrepreneurship programmes, mentoring, professional development, leadership training, and practical learning.',
  },
  {
    icon: Network,
    title: 'Traveleye Connect',
    copy: 'Strengthening tourism through digital solutions, technology platforms, innovation, information systems, ecosystem connectivity, and knowledge sharing.',
  },
]

const participants = [
  'Tourism entrepreneurs',
  'Micro and small tourism enterprises',
  'Women and youth entrepreneurs',
  'Tourism professionals',
  'Emerging Travelpreneurs',
  'Tourism service providers',
  'Communities and local organisations',
  'Tourism authorities',
  'Government agencies',
  'Educational institutions',
  'Development organisations',
  'Investors',
  'Technology and innovation partners',
  'Strategic partners',
]

const connectedAreas = [
  'Education develops knowledge and professional capability.',
  'Technology improves connectivity and innovation.',
  'Hospitality operations strengthen service quality and visitor satisfaction.',
  'Business advisory supports enterprise growth.',
  'Marketing expands market opportunities.',
  'Supply chain development strengthens local economic participation.',
  'Research and innovation encourage continuous improvement and informed decision-making.',
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" />
        </span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function Copy({ children, className = '' }) {
  return <div className={`mx-auto mt-6 max-w-5xl space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8 ${className}`}>{children}</div>
}

function CheckList({ items }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-[#e5eee8] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
          <span className="mt-0.5 font-bold text-green-700">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SupportServices() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="Traveleye Ecosystem Support" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div>
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">Traveleye</span><span className="block">Ecosystem Support</span>
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Supporting Tourism Through People and Partnerships</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">To develop and strengthen micro and small tourism enterprises by building the capability, connectivity, readiness, and enabling environment that supports a stronger, more resilient, and future-ready tourism ecosystem across Sri Lanka.</p>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Lightbulb} title="Strengthening Tourism Through Knowledge, Innovation and Enterprise Support" />
        <Copy>
          <p>Strong tourism ecosystems are built when tourism enterprises have access to the knowledge, skills, technology, systems, and support they need to grow, innovate, and remain competitive.</p>
          <p><strong>Traveleye Ecosystem Support</strong> is one of the four <strong>People-Powered Tourism Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>. It transforms the Framework into practical action by strengthening the capability, readiness, innovation, and enabling environment that supports the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</p>
          <p>Rather than functioning as a collection of independent support services, Ecosystem Support provides an integrated approach that helps tourism enterprises, entrepreneurs, destinations, institutions, and tourism stakeholders build capability, improve performance, embrace innovation, and respond to changing tourism opportunities.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake} title="Why Ecosystem Support Matters" />
        <Copy>
          <p>Tourism enterprises require more than market access to succeed.</p>
          <p>They require knowledge, professional skills, operational excellence, technology, business support, innovation, market readiness, and continuous improvement.</p>
          <p>As Sri Lanka's tourism industry evolves, entrepreneurs and tourism enterprises need practical ecosystem support that enables them to adapt to changing visitor expectations, emerging technologies, new business opportunities, and sustainable tourism practices.</p>
          <p>By strengthening the enabling environment for tourism development, <strong>Traveleye Ecosystem Support</strong> helps tourism enterprises become more capable, connected, resilient, and future-ready while contributing to stronger destinations and a thriving tourism ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={BriefcaseBusiness} title="Our Areas of Operation" />
          <Copy><p>The <strong>Traveleye Ecosystem Support</strong> platform operates across key functional areas that strengthen tourism enterprises and support the long-term development of Sri Lanka's tourism ecosystem.</p></Copy>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {operationAreas.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-2xl border-t-4 border-[#1f4f93] bg-white p-6 shadow-sm sm:p-8">
                <Icon className="h-9 w-9 text-[#1f4f93]" />
                <h3 className="mt-4 text-xl font-bold text-[#1f4f93]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#475569] sm:text-base">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Target} title="Delivering Ecosystem Support" />
          <Copy><p>The <strong>Traveleye Ecosystem Support</strong> platform delivers these areas of operation through three complementary implementation mechanisms:</p></Copy>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {deliveryMechanisms.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-2xl border border-[#e5eee8] bg-[#FCFBF8] p-6 text-center shadow-sm sm:p-8">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 text-xl font-bold text-[#1f4f93]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#475569] sm:text-base">{copy}</p>
              </article>
            ))}
          </div>
          <Copy><p>Together, these implementation mechanisms provide practical support that enables tourism enterprises and destinations to grow with confidence.</p></Copy>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Who We Work With" />
          <Copy><p><strong>Traveleye Ecosystem Support</strong> works with a diverse network of tourism stakeholders, including:</p></Copy>
          <CheckList items={participants} />
          <Copy><p>Together, these participants contribute to a stronger, more capable, and more connected tourism ecosystem.</p></Copy>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="A Connected Approach to Ecosystem Support" />
          <Copy><p><strong>Traveleye Ecosystem Support</strong>recognises that successful tourism enterprises require integrated support rather than isolated interventions.</p></Copy>
          <CheckList items={connectedAreas} />
          <Copy><p>Working together, these interconnected areas create an enabling environment that helps tourism enterprises grow, destinations become more resilient, and Sri Lanka's tourism ecosystem continue to evolve.</p></Copy>
        </div>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="The Role of Ecosystem Support Within the Framework" />
        <Copy>
          <p><strong>Traveleye Ecosystem Support</strong> is one of the four <strong>Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
          <p>Built upon the Framework's <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, <strong>Strategic Pillars</strong>, and <strong>Development Models</strong>, it provides one of the practical mechanisms through which the Framework is implemented.</p>
          <p>By strengthening enterprise capability, knowledge, innovation, operational excellence, technology adoption, and ecosystem readiness, Ecosystem Support contributes directly to the Framework's <strong>Tourism Outcomes</strong> while supporting measurable progress through the <strong>People-Powered Tourism Ecosystem Indicators</strong>.</p>
          <p>Together with the <strong>Traveleye Travel Collective</strong>, <strong>Traveleye Host Experiences</strong>, and <strong>Traveleye Destination Facilitation</strong>, it transforms the <strong>People-Powered Tourism Framework</strong> into practical action across Sri Lanka's tourism ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Lightbulb} title="Looking Ahead" />
        <Copy>
          <p>As Sri Lanka's tourism industry continues to evolve, <strong>Traveleye Ecosystem Support</strong> will continue strengthening the knowledge, capability, innovation, and systems that enable tourism enterprises to thrive.</p>
          <p>By encouraging continuous learning, digital transformation, operational excellence, business development, and sustainable innovation, the platform will continue supporting the development and strengthening of micro and small tourism enterprises while contributing to stronger destinations, more capable tourism stakeholders, and a resilient <strong>People-Powered Tourism Ecosystem</strong>.</p>
          <p>Because strong tourism is not built by individual enterprises alone.</p>
          <p>It is built through capable people, innovative enterprises, connected systems, supportive partnerships, and an ecosystem that enables everyone to grow together.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={BriefcaseBusiness} title="Grow with Traveleye Alliance" />
        <Copy>
          <p>Whether you are a tourism entrepreneur, tourism enterprise, educational institution, community organisation, government agency, tourism authority, development organisation, investor, technology partner, or strategic collaborator, <strong>Traveleye Alliance Sri Lanka</strong> invites you to become part of <strong>Traveleye Ecosystem Support</strong>.</p>
          <p>Together, we can strengthen tourism enterprises through knowledge, innovation, technology, professional development, operational excellence, and business support while building a stronger <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
