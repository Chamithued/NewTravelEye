import {
  BriefcaseBusiness,
  Compass,
  Globe2,
  Handshake,
  House,
  Megaphone,
  Network,
  Sparkles,
  Sprout,
  Users,
  Workflow,
} from 'lucide-react'
import heroImg from '../assets/client/Facilitation4.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const operationAreas = [
  { icon: Compass, title: 'Destination Development', subtitle: 'Building Stronger Tourism Destinations', paragraphs: [
    <>Supporting destinations to identify tourism opportunities, strengthen destination identity, improve visitor readiness, and encourage balanced tourism development.</>,
    <>Working collaboratively with destination stakeholders, this area helps destinations become authentic, resilient, connected, and prepared for sustainable tourism growth.</>,
  ] },
  { icon: Workflow, title: 'Destination Coordination', subtitle: 'Connecting Tourism Through Collaboration', paragraphs: [
    <>Facilitating coordination among tourism enterprises, accommodation providers, experience creators, local tour operators, transport providers, guides, local authorities, community organisations, educational institutions, and development partners.</>,
    <>By improving destination coordination, tourism becomes more connected, efficient, and capable of delivering better visitor experiences.</>,
  ] },
  { icon: House, title: 'Host Stay & Travel Experience Facilitation', subtitle: 'Strengthening Local Tourism Experiences', paragraphs: [
    <>Supporting the identification, development, coordination, and continuous improvement of authentic place-inspired host stays and people and place-inspired travel experiences within destinations.</>,
    <>Working closely with <strong>Traveleye Host Experiences</strong>, this area strengthens local hosts and experience creators while expanding tourism opportunities across the destination.</>,
  ] },
  { icon: BriefcaseBusiness, title: 'Tourism Enterprise Facilitation', subtitle: 'Supporting Local Tourism Enterprises', paragraphs: [
    <>Helping micro and small tourism enterprises strengthen collaboration, market readiness, product development, business visibility, service quality, and participation in destination tourism.</>,
    <>This creates opportunities for tourism enterprises to become active contributors to destination development while supporting their long-term growth and sustainability.</>,
  ] },
  { icon: Globe2, title: 'Visitor Support Services', subtitle: 'Enhancing the Visitor Experience', paragraphs: [
    <>Helping travellers access reliable information, destination services, authentic experiences, local tourism enterprises, and visitor support throughout their journey.</>,
    <>By improving destination connectivity and visitor readiness, this area contributes to smoother, safer, and more meaningful travel experiences.</>,
  ] },
  { icon: Megaphone, title: 'Destination Promotion & Market Connectivity', subtitle: 'Connecting Destinations with Tourism Markets', paragraphs: [
    <>Supporting destinations and local tourism enterprises to strengthen market visibility and access through collaboration with the <strong>Traveleye Travel Collective</strong>, tourism partners, travel corridor initiatives, and strategic marketing collaborations.</>,
    <>By improving market connectivity, destinations create greater opportunities for local tourism enterprises while attracting visitors and expanding tourism opportunities.</>,
  ] },
]

const stakeholders = ['Travellers', 'Tourism entrepreneurs', 'Micro and small tourism enterprises', 'Hosts and experience creators', 'Local tour operators', 'Guides and transport providers', 'Tourism authorities', 'Local authorities', 'Government agencies', 'Community organisations', 'Educational institutions', 'Development organisations', 'Industry associations', 'Investors', 'Strategic partners']

const ecosystemRoles = [
  'Tourism enterprises provide products and services.',
  'Hosts create authentic places to stay.',
  'Experience creators bring destinations to life.',
  'Communities contribute local identity, culture, and hospitality.',
  'Travellers enrich destinations through meaningful engagement and responsible participation.',
  'Public institutions provide leadership and destination support.',
  'Strategic partners expand opportunities for investment, innovation, and collaboration.',
]

function SectionHeading({ icon: Icon, title }) {
  return <div className="mx-auto max-w-4xl text-center">
    <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" /></span>
      <span>{title}</span>
    </h2>
    <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
  </div>
}

function Copy({ children, wide = false }) {
  return <div className={`mx-auto mt-6 ${wide ? 'max-w-7xl' : 'max-w-5xl'} space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8`}>{children}</div>
}

function CheckList({ items }) {
  return <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) =>
    <li key={item} className="flex items-start gap-3 rounded-xl border border-[#e5eee8] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
      <span className="mt-0.5 font-bold text-green-700">✓</span><span>{item}</span>
    </li>
  )}</ul>
}

export default function DestinationFacilitation() {
  return <main className="flex flex-col bg-slate-50 text-slate-900">
    <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
      <img src={heroImg} alt="Traveleye Destination Facilitation" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
        <div><h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"><span className="block">Traveleye</span><span className="block">Destination Facilitation</span></h1>
          <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Destinations Through People &amp; Stewardship</p></div>
      </div>
    </section>

    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-5xl text-center">
      <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
      <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">To develop and strengthen destination ecosystems by coordinating tourism enterprises, host stays, travel experiences, visitor services, local participation, and destination partnerships while supporting the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</p>
    </div></section>

    <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Sparkles} title="Strengthening Destinations Through Collaboration and Coordination" /><Copy wide>
      <p>Strong destinations are built when people, enterprises, communities, institutions, and partnerships work together with a shared purpose.</p>
      <p><strong>Traveleye Destination Facilitation</strong> is one of the four <strong>People-Powered Tourism Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>. It transforms the Framework into practical action by developing and coordinating destination ecosystems that connect tourism enterprises, host stays, travel experiences, visitor services, destination stakeholders, and local opportunities while supporting the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</p>
      <p>Rather than viewing destinations as collections of individual businesses, Destination Facilitation creates connected destination ecosystems where tourism enterprises, communities, visitors, and supporting organisations work together to deliver authentic, coordinated, and meaningful visitor experiences.</p>
      <p>Through collaboration, coordination, participation, enterprise development, and destination stewardship, the platform helps destinations become more connected, visitor-ready, resilient, and sustainable.</p>
    </Copy></section>

    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Handshake} title="Why Destination Facilitation Matters" /><Copy>
      <p>Every destination has unique people, culture, heritage, landscapes, enterprises, and opportunities.</p>
      <p>However, many destinations lack the coordination needed to connect these assets into a seamless visitor experience. Tourism enterprises often work independently, visitor services may be fragmented, and local opportunities may remain underutilised.</p>
      <p><strong>Traveleye Destination Facilitation</strong> addresses these challenges by strengthening destination coordination, supporting enterprise participation, improving visitor readiness, facilitating collaboration, and creating stronger connections between travellers and destinations.</p>
      <p>Through this connected approach, destinations become places where tourism creates shared value for travellers, tourism enterprises, communities, and local economies.</p>
    </Copy></section>

    <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><SectionHeading icon={Network} title="Our Areas of Operation" /><Copy><p>The <strong>Traveleye Destination Facilitation</strong> platform operates across six interconnected areas that strengthen destination ecosystems while supporting the development and strengthening of micro and small tourism enterprises.</p></Copy>
      <div className="mt-10 grid gap-7 lg:grid-cols-2">{operationAreas.map((area) => {
        const AreaIcon = area.icon
        return <article key={area.title} className="rounded-2xl border-t-4 border-[#1f4f93] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
        <AreaIcon className="h-9 w-9 text-[#1f4f93]" aria-hidden="true" /><h3 className="mt-4 text-2xl font-bold text-[#1f4f93]">{area.title}</h3><p className="mt-2 font-bold text-[#14334a]">{area.subtitle}</p>
        {area.paragraphs.map((paragraph, index) => <p key={index} className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">{paragraph}</p>)}
      </article>})}</div>
    </div></section>

    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><SectionHeading icon={Users} title="Who We Work With" /><Copy><p><strong>Traveleye Destination Facilitation</strong> works collaboratively with a diverse network of destination stakeholders to create connected, visitor-ready destinations, including:</p></Copy><CheckList items={stakeholders} /><Copy><p>Together, these stakeholders contribute to stronger destination ecosystems that improve visitor experiences, support local tourism enterprises, strengthen destination collaboration, and create lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p></Copy></div></section>

    <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><SectionHeading icon={Network} title="A Connected Approach to Destination Development" /><Copy><p><strong>Traveleye Destination Facilitation</strong>recognises that thriving destinations are built through collaboration rather than individual effort.</p></Copy><CheckList items={ecosystemRoles} /><Copy><p>By coordinating these participants within a connected destination ecosystem, Destination Facilitation strengthens tourism enterprises, improves visitor experiences, enhances destination readiness, and contributes to resilient destinations that generate lasting value for everyone.</p></Copy></div></section>

    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Sprout} title="The Role of Destination Facilitation Within the Framework" /><Copy>
      <p><strong>Traveleye Destination Facilitation</strong> is one of the four <strong>Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
      <p>Built upon the Framework's <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, <strong>Strategic Pillars</strong>, and <strong>Development Models</strong>, it provides one of the practical mechanisms through which the Framework is implemented.</p>
      <p>Working closely with the <strong>Traveleye Travel Collective</strong>, <strong>Traveleye Host Experiences</strong>, and <strong>Traveleye Ecosystem Support</strong>, Destination Facilitation develops coordinated destination ecosystems that connect tourism enterprises, host stays, travel experiences, visitor services, destination stakeholders, and local opportunities.</p>
      <p>Through this integrated approach, the platform contributes directly to the Framework's <strong>Tourism Outcomes</strong> while supporting measurable progress through the <strong>People-Powered Tourism Ecosystem Indicators</strong>.</p>
    </Copy></section>

    <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Sparkles} title="Looking Ahead" /><Copy>
      <p>As Sri Lanka's tourism destinations continue to evolve, <strong>Traveleye Destination Facilitation</strong> will continue strengthening destination ecosystems through collaboration, coordination, enterprise participation, visitor support, and shared stewardship.</p>
      <p>By helping destinations become more connected, better organised, and visitor-ready, the platform will continue supporting the development and strengthening of micro and small tourism enterprises while creating richer visitor experiences, stronger local economies, and more resilient destinations.</p>
      <p>Because great destinations are not created by individual businesses alone.</p><p>They are built by connected people, coordinated enterprises, authentic experiences, collaborative partnerships, and a shared commitment to creating places where tourism benefits everyone.</p>
    </Copy></section>

    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={BriefcaseBusiness} title="Grow with Traveleye Alliance" /><Copy>
      <p>Whether you are a traveller, tourism entrepreneur, tourism enterprise, host, experience creator, local tour operator, community organisation, government agency, tourism authority, educational institution, development organisation, investor, or strategic partner, <strong>Traveleye Alliance Sri Lanka</strong> invites you to become part of <strong>Traveleye Destination Facilitation</strong>.</p>
      <p>Together, we can develop stronger destination ecosystems, support micro and small tourism enterprises, coordinate authentic tourism experiences, strengthen visitor services, expand destination opportunities, and build a thriving <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
    </Copy></section>

    <ExploreEcosystem /><FooterLinks />
  </main>
}
