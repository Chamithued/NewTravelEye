import {
  CheckCircle2,
  Compass,
  Handshake,
  Leaf,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/Governance & Ethics.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const governancePrinciples = [
  {
    title: 'Integrity',
    text: 'We act with honesty, professionalism, and ethical responsibility in every relationship, decision, and initiative. Integrity is the foundation of the trust we build with our partners and stakeholders.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparency',
    text: 'We believe open communication builds confidence and strengthens collaboration. We strive to be transparent in our decisions, partnerships, operations, and organisational practices.',
    icon: Compass,
  },
  {
    title: 'Accountability',
    text: 'We take responsibility for our commitments, actions, and outcomes. Accountability strengthens confidence among our partners and supports the long-term credibility of the ecosystem we are building.',
    icon: CheckCircle2,
  },
  {
    title: 'Responsible Leadership',
    text: 'We seek to make informed decisions that balance economic opportunity with social, cultural, and environmental responsibility, ensuring tourism development delivers long-term value.',
    icon: Scale,
  },
  {
    title: 'Fairness and Respect',
    text: 'We treat every individual and organisation with fairness, respect, and professionalism, recognising the diversity of people and perspectives that contribute to stronger tourism.',
    icon: Users,
  },
  {
    title: 'Shared Stewardship',
    text: 'We believe every tourism participant shares responsibility for protecting destinations, respecting local culture, preserving natural environments, and supporting sustainable tourism for future generations.',
    icon: Leaf,
  },
]

const businessPractices = [
  'Acting honestly and ethically in all business relationships.',
  'Promoting transparency and accountability in our operations.',
  'Respecting confidentiality and protecting information entrusted to us.',
  'Managing conflicts of interest responsibly.',
  'Complying with applicable laws, regulations, and professional standards.',
  'Promoting fairness, inclusion, and equal opportunity.',
  'Supporting responsible environmental and social practices.',
  'Encouraging continuous learning and professional development.',
]

const stakeholders = [
  'Tourism entrepreneurs',
  'Tourism enterprises',
  'Hosts and experience creators',
  'Destinations and local communities',
  'Government institutions',
  'Educational and research institutions',
  'Development agencies',
  'Investors',
  'Strategic partners',
  'Travellers',
]

const governanceActions = [
  'Build trust through ethical leadership.',
  'Make transparent and responsible decisions.',
  'Encourage collaboration and shared accountability.',
  'Respect people, places, and cultural heritage.',
  'Support responsible innovation.',
  'Create long-term value for tourism enterprises and destinations.',
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

function CheckList({ items, columns = false, boxed = false }) {
  return (
    <ul className={columns ? 'mt-6 grid gap-3 text-left sm:grid-cols-2' : 'mt-6 space-y-3 text-left'}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-sm leading-7 text-[#55636a] sm:text-base ${
            boxed ? 'rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-6' : ''
          }`}
        >
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1f4f93]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function GovernanceEthics() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Governance & Ethics banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              GOVERNANCE &amp; ETHICS
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">
              Leading with Integrity. Governing with Responsibility. Building with Trust.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={ShieldCheck} title="Leading with Integrity. Governing with Responsibility. Building with Trust." />
          <div className="mt-8 space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>At Traveleye Alliance Sri Lanka, good governance and ethical leadership are fundamental to how we build and steward <strong>Sri Lanka's First People-Powered Tourism Ecosystem</strong>.</p>
            <p>We believe that sustainable tourism depends not only on innovation and collaboration, but also on transparency, accountability, responsible decision-making, and mutual trust. These principles guide how we engage with tourism enterprises, destinations, communities, institutions, travellers, and strategic partners.</p>
            <p>Our commitment to governance and ethics strengthens the relationships that enable tourism to create lasting value for <strong>People, Planet, and Prosperity</strong>.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Compass} title="Our Governance Philosophy" />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Governance is more than compliance or organisational oversight.</p>
            <p>For Traveleye, governance is about creating an environment where decisions are made responsibly, partnerships are built on trust, and every initiative contributes to the long-term wellbeing of tourism enterprises, destinations, and communities.</p>
            <p>Guided by the <strong>People-Powered Tourism Framework</strong>, we seek to uphold governance practices that encourage participation, strengthen accountability, support collaboration, and promote responsible tourism development.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Scale} title="Our Governance Principles" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {governancePrinciples.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1FF] text-[#214F95]"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-black sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base sm:leading-8">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Handshake} title="Ethical Partnerships" />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Collaboration is at the heart of the Traveleye People-Powered Tourism Ecosystem.</p>
            <p>We seek to build partnerships with organisations and individuals who share our commitment to ethical conduct, mutual respect, transparency, and responsible tourism development.</p>
            <p>Our partnerships are guided by shared objectives, clearly defined responsibilities, and a commitment to creating value for all participants while strengthening Sri Lanka's tourism ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={ShieldCheck} title="Ethical Business Practices" />
          <div className="mx-auto mt-8 max-w-4xl">
            <p className="text-center text-sm leading-7 text-[#475569] sm:text-base">We are committed to conducting our activities responsibly and professionally by:</p>
            <CheckList items={businessPractices} columns boxed />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Users} title="Our Commitment to Stakeholders" />
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>We recognise that building a successful tourism ecosystem requires the confidence and trust of many stakeholders.</p>
              <p>We are committed to fostering constructive relationships with:</p>
            </div>
            <CheckList items={stakeholders} columns boxed />
            <p className="mt-6 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">By working together with integrity, openness, and shared responsibility, we create stronger foundations for sustainable tourism development.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={CheckCircle2} title="Governance in Action" />
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>Good governance is reflected not only in policies, but in the way we work every day.</p>
              <p>Across our partnerships, programmes, projects, and ecosystem initiatives, we seek to:</p>
            </div>
            <CheckList items={governanceActions} columns boxed />
            <p className="mt-6 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">These commitments help ensure that the People-Powered Tourism Ecosystem remains resilient, credible, and focused on delivering meaningful outcomes.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Leaf} title="Our Commitment" />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>As the Builder and Steward of <strong>Sri Lanka's First People-Powered Tourism Ecosystem</strong>, Traveleye Alliance is committed to maintaining the highest standards of governance and ethical conduct.</p>
            <p>Through integrity, accountability, transparency, responsible leadership, and shared stewardship, we seek to build lasting relationships, strengthen confidence among our stakeholders, and contribute to a tourism sector that creates enduring value for <strong>People, Planet, and Prosperity</strong>.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
