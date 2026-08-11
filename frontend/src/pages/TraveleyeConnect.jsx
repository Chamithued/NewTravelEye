import {
  CheckCircle2,
  Compass,
  Handshake,
  Network,
  Route,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'
import heroImg from '../assets/client/SupportServices.jpg'

const connectedStakeholders = [
  'Travellers',
  'Tourism Entrepreneurs',
  'Tourism Enterprises',
  'Host Stays',
  'Travel Experience Creators',
  'Tour Operators',
  'Transport Providers',
  'Tourist Guides',
  'Tourism Service Providers',
  'Destination Organisations',
  'Government Institutions',
  'Strategic Partners',
  'Development Organisations',
]

const connectionAreas = [
  {
    icon: Route,
    title: 'Tourism Coordination',
    description: 'Supporting seamless coordination between tourism stakeholders throughout the visitor journey.',
    subtitle: 'Coordination Areas',
    items: ['Visitor Coordination', 'Tour Coordination', 'Supplier Coordination', 'Accommodation Coordination', 'Experience Coordination', 'Transport Coordination', 'Event Coordination', 'Partnership Coordination'],
  },
  {
    icon: Handshake,
    title: 'Visitor & Partner Support',
    description: 'Providing responsive support that improves communication, service quality, and visitor satisfaction.',
    subtitle: 'Support Areas',
    items: ['Visitor Information', 'Travel Assistance', 'Partner Support', 'Enquiry Management', 'Referral Services', 'Customer Support', 'Tourism Information Services'],
  },
  {
    icon: Network,
    title: 'Ecosystem Connectivity',
    description: 'Connecting tourism enterprises and partners to create stronger collaboration and shared opportunities.',
    subtitle: 'Connectivity Areas',
    items: ['Enterprise Networking', 'Partnership Development', 'Referral Networks', 'Business Connections', 'Knowledge Sharing', 'Industry Collaboration', 'Stakeholder Engagement'],
  },
]

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
        <span><strong>{children}</strong></span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function Copy({ children }) {
  return <div className="mx-auto mt-7 max-w-5xl space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
}

function CheckGrid({ items }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-[#dce5ef] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TraveleyeConnect() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="Traveleye Connect" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"><strong>TRAVELEYE CONNECT</strong></h1>
            <p className="mt-4 text-base font-bold text-white sm:text-xl"><strong>Connecting People. Coordinating Tourism.</strong></p>
            <p className="mt-2 text-sm font-bold text-white/95 sm:text-base lg:text-lg"><strong>Tourism Connection & Coordination Division</strong></p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass}>Connecting People, Enterprises, and Tourism Opportunities</SectionHeading>
        <Copy>
          <p>Tourism succeeds when people, enterprises, destinations, and services work together.</p>
          <p>Every traveller&apos;s journey depends on seamless communication, reliable coordination, trusted partnerships, timely information, and strong connections between everyone involved in delivering the visitor experience.</p>
          <p><strong>Traveleye Connect</strong> is the <strong>Tourism Connection & Coordination Platform</strong> of <strong>Traveleye Alliance Sri Lanka</strong>, established to strengthen collaboration, improve coordination, facilitate communication, and connect tourism stakeholders across Sri Lanka&apos;s tourism ecosystem.</p>
          <p>As an integral part of the <strong>People-Powered Tourism Ecosystem</strong>, Traveleye Connect brings together tourism enterprises, host stays, experience creators, tour operators, transport providers, destinations, strategic partners, and travellers through integrated coordination, information sharing, visitor support, and connected tourism services.</p>
          <p>Whether supporting tourism enterprises, facilitating partnerships, coordinating visitor services, or connecting opportunities across the ecosystem, Traveleye Connect helps tourism work together more effectively.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Target}>Our Purpose</SectionHeading>
        <Copy><p>To strengthen Sri Lanka&apos;s tourism ecosystem by connecting people, enterprises, destinations, services, and opportunities through collaboration, coordination, communication, information sharing, and seamless tourism connectivity.</p></Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users}>Who We Connect</SectionHeading>
          <Copy><p>We connect people and organisations across Sri Lanka&apos;s tourism ecosystem, including:</p></Copy>
          <CheckGrid items={connectedStakeholders} />
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network}>How We Strengthen the Tourism Ecosystem</SectionHeading>
          <Copy><p>Rather than operating as a technology provider, Traveleye Connect strengthens tourism by improving the way people, enterprises, and destinations communicate, collaborate, coordinate, and share information.</p></Copy>

          <div className="mt-10 space-y-6 sm:mt-12">
            {connectionAreas.map(({ title, description, subtitle, items }, index) => (
              <article key={title} className="py-6 sm:py-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f4f93] text-sm font-bold text-white" aria-hidden="true">{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#1f4f93] sm:text-2xl"><strong>{title}</strong></h3>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{description}</p>
                </div>
                <div className="mx-auto mt-7 max-w-5xl rounded-2xl border-t-4 border-[#1f4f93] bg-white p-6 shadow-sm sm:p-8">
                  <h4 className="text-center text-lg font-bold text-[#1f4f93] sm:text-xl"><strong>{subtitle}</strong></h4>
                  <CheckGrid items={items} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake}>Our Connection & Coordination Approach</SectionHeading>
        <Copy>
          <p>Strong tourism ecosystems are built on strong relationships.</p>
          <p>At Traveleye Connect, we bring together people, enterprises, destinations, and support services to improve communication, strengthen collaboration, coordinate activities, and create a more connected tourism ecosystem that benefits everyone.</p>
          <p className="rounded-2xl bg-[#eef4fa] px-5 py-6 font-bold text-[#1f4f93] shadow-sm"><strong>Connect People → Coordinate Services → Share Information → Strengthen Partnerships → Improve Visitor Experiences → Build a Stronger Tourism Ecosystem</strong></p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles}>Our Philosophy</SectionHeading>
        <Copy>
          <p>At Traveleye Connect, we believe tourism achieves its greatest potential when people work together.</p>
          <p>By strengthening communication, building trusted relationships, encouraging collaboration, and connecting tourism stakeholders through practical coordination and digital enablement, we help create an ecosystem where opportunities are shared, services are better connected, and visitor experiences are strengthened.</p>
          <p>Strong tourism is built through connected people, coordinated services, trusted partnerships, and meaningful collaboration. Traveleye Connect exists to bring these elements together across Sri Lanka&apos;s tourism ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles}>Looking Ahead</SectionHeading>
        <Copy>
          <p>As the People-Powered Tourism Ecosystem continues to grow, Traveleye Connect will evolve into a central tourism connection and coordination hub supporting tourism enterprises, destinations, partners, tourism suppliers, and travellers through integrated communication, visitor support, collaboration, service coordination, and stronger tourism connectivity.</p>
          <p>Together, we are building a more connected, collaborative, and people-powered tourism industry for Sri Lanka.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake}>Connect with Traveleye Connect</SectionHeading>
        <Copy>
          <p>Whether you are a tourism enterprise, destination, tourism authority, government agency, development organisation, strategic partner, or traveller, we invite you to explore how Traveleye Connect strengthens communication, coordination, collaboration, visitor support, and knowledge sharing across Sri Lanka&apos;s tourism ecosystem.</p>
          <p>Contact us at <a href="mailto:connect@traveleye.lk" className="font-bold text-[#1f4f93] transition-colors hover:text-[#163b70]">connect@traveleye.lk</a> to explore collaboration and connection opportunities.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
