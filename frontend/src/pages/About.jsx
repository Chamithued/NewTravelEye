import { Compass, Handshake, Leaf, Lightbulb, MapPin, Network, Sprout, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/subhero/about/About Traveleye Alliance.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const purposePoints = ['Entrepreneurship', 'Enterprise development', 'Destination development', 'Tourism experiences', 'Market connections', 'Innovation', 'Collaboration', 'Tourism capability development']

const philosophyCards = [
  { title: 'People', icon: Users, text: 'People are at the heart of tourism.', detail: 'We believe tourism becomes stronger when entrepreneurs, hosts, experience creators, tourism enterprises, communities, travellers, and tourism professionals have opportunities to participate meaningfully and contribute to tourism development.' },
  { title: 'Places', icon: MapPin, text: 'Every destination has its own identity, culture, heritage, nature, and local character.', detail: 'We believe tourism should strengthen places by recognising their unique qualities, supporting responsible development, and creating opportunities that contribute to their long-term vitality.' },
  { title: 'Partnerships', icon: Handshake, text: 'Tourism grows through collaboration.', detail: 'We build meaningful partnerships that connect tourism enterprises, destinations, institutions, communities, governments, investors, development organisations, and strategic partners to create shared opportunities and collective impact.' },
  { title: 'Prosperity', icon: Sprout, text: 'Tourism should create lasting value.', detail: 'By developing stronger tourism enterprises, supporting entrepreneurship, strengthening destinations, and expanding opportunities, tourism can contribute to greater economic and social prosperity for people, places, and future generations.' },
]

const rolePoints = [
  'Develop and strengthen micro and small tourism enterprises.',
  'Create and connect meaningful travel opportunities, stays, and experiences.',
  'Strengthen destinations through collaboration and destination development.',
  'Build meaningful tourism partnerships and travel corridors.',
  'Support tourism capability through education, advisory services, technology, and innovation.',
  'Connect tourism stakeholders through an integrated ecosystem that creates lasting value for People, Places, Partnerships, and Prosperity.',
]

const ecosystemCards = [
  { title: 'People', text: 'Entrepreneurs, youth, hosts, experience creators, tourism professionals, communities, and travellers.' },
  { title: 'Tourism Enterprises', text: 'Micro and small tourism enterprises and other tourism businesses participating in the tourism ecosystem.' },
  { title: 'Places', text: 'Destinations, communities, cultural and heritage assets, natural environments, and local places.' },
  { title: 'Travel', text: 'Journeys, stays, experiences, tourism markets, and travel corridors.' },
  { title: 'Partnerships', text: 'Institutions, government agencies, tourism organisations, investors, development organisations, and strategic partners.' },
]

const platforms = [
  { title: 'Traveleye Travel Collective', tagline: 'Journeys Connected Through People and Places', text: 'Connecting travellers with meaningful journeys, destinations, travel opportunities, and travel partnerships.', to: '/travel-collective' },
  { title: 'Traveleye Host Experiences', tagline: 'Crafted Through People and Place', text: "Developing authentic stays and experiences inspired by Sri Lanka's people, places, culture, nature, wellness, food, and way of life.", to: '/about-traveleye-host-experiences' },
  { title: 'Traveleye Destination Facilitation', tagline: 'Strengthening Destinations Through People and Stewardship', text: 'Facilitating destination development by connecting local tourism enterprises, hosts, experience creators, communities, travellers, and destination stakeholders.', to: '/destination-facilitation' },
  { title: 'Traveleye Ecosystem Support', tagline: 'Supporting Tourism Through People and Partnerships', text: 'Providing capability development, advisory support, technology, education, and other ecosystem support to strengthen tourism participation and enterprise development.', to: '/support-services' },
]

function SectionHeading({ icon: Icon, children, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
        <span>{children}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle && <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p>}
    </div>
  )
}

function Copy({ children }) {
  return <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
}

export default function About() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <img src={heroImg} alt="About Traveleye Alliance banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
        <div className="absolute inset-0 bg-black/16" />
        <div className="relative z-10 flex w-full justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">ABOUT TRAVELEYE ALLIANCE</h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Tourism for People, Planet, and Prosperity</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout}>Building a People-Powered Tourism Ecosystem for Sri Lanka</SectionHeading>
        <Copy>
          <p>Traveleye Alliance Sri Lanka is a <strong className="text-[#0f4d2f]">People-Powered Tourism Ecosystem Builder</strong>, focused on developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p>
          <p>We believe tourism becomes stronger when people are empowered to participate, destinations are strengthened through responsible development, enterprises are supported to grow, and meaningful partnerships create shared value.</p>
          <p>Through a connected ecosystem approach, Traveleye Alliance brings together people, tourism enterprises, destinations, travellers, institutions, communities, and strategic partners to create stronger connections, greater opportunities, and lasting value across Sri Lanka&apos;s tourism ecosystem.</p>
          <p>Our work is guided by the <strong className="text-[#0f4d2f]">People-Powered Tourism Framework</strong>, which provides the strategic foundation for building and developing this ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass}>Our Purpose</SectionHeading>
        <Copy>
          <p>Our purpose is clear:</p>
          <p className="text-lg font-bold text-[#0f4d2f]">To develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p>
          <p>We work towards this purpose by connecting <strong>People, Places, Partnerships, and Opportunities</strong> through an integrated ecosystem that supports:</p>
        </Copy>
        <ul className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {purposePoints.map((point) => <li key={point} className="flex min-h-16 items-center gap-3 rounded-2xl border border-[#dfe9f2] bg-white p-4 text-sm font-semibold text-[#234c3a] shadow-sm"><Leaf className="h-4 w-4 shrink-0 text-[#214F95]" />{point}</li>)}
        </ul>
        <Copy><p>Through these connections, we seek to create stronger tourism enterprises, stronger destinations, meaningful tourism opportunities, and lasting value across Sri Lanka.</p></Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Leaf} subtitle="Together, these interconnected foundations guide how we develop tourism enterprises, strengthen destinations, create partnerships, and contribute to shared prosperity.">Our Guiding Philosophy</SectionHeading>
        <Copy><p>Our philosophy is built around the <strong>Four Ps of the People-Powered Tourism Ecosystem</strong>.</p></Copy>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          {philosophyCards.map(({ title, icon: Icon, text, detail }) => <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8"><span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1FF] text-[#214F95]"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-xl font-bold sm:text-2xl">{title}</h3><p className="mt-3 font-bold text-[#0f4d2f]">{text}</p><p className="mt-3 text-sm leading-7 text-[#55636a] sm:text-base">{detail}</p></article>)}
        </div>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake}>Our Role</SectionHeading>
        <Copy><p>As a <strong>People-Powered Tourism Ecosystem Builder</strong>, Traveleye Alliance works across the tourism ecosystem to:</p></Copy>
        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">{rolePoints.map((point) => <article key={point} className="flex items-start gap-4 rounded-2xl border border-[#dfe9f2] bg-white p-5 shadow-sm"><Compass className="mt-1 h-5 w-5 shrink-0 text-[#214F95]" /><p className="text-sm font-bold leading-7 text-[#234c3a] sm:text-base">{point}</p></article>)}</div>
        <Copy><p>Our role goes beyond individual tourism services.</p><p>We work to connect, facilitate, develop, support, and create opportunities across the wider tourism ecosystem.</p></Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Lightbulb}>The People-Powered Tourism Framework</SectionHeading>
        <Copy>
          <p>The <strong>People-Powered Tourism Framework</strong> is the strategic blueprint that guides the development of the People-Powered Tourism Ecosystem.</p>
          <p>It brings together:</p>
          <p className="text-base font-bold text-[#0f4d2f] sm:text-lg">Guiding Principles → Global Alignment → Strategic Pillars → Development Models → Operational Platforms → Tourism Outcomes → Ecosystem Indicators</p>
          <p>Together, these interconnected elements provide a pathway for transforming strategic vision into practical action and measurable impact.</p>
          <p>The Framework guides our approach to developing stronger tourism enterprises, stronger destinations, meaningful tourism opportunities, and a more connected tourism ecosystem across Sri Lanka.</p>
          <Link to="/people-powered-tourism-framework" className="inline-flex rounded-full bg-[#1f4f93] px-6 py-3 font-bold text-white no-underline transition hover:bg-[#173b70]">Explore the People-Powered Tourism Framework</Link>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Network}>Our Ecosystem</SectionHeading>
        <Copy><p>The People-Powered Tourism Ecosystem connects people, enterprises, places, travel opportunities, and partnerships across Sri Lanka.</p></Copy>
        <div className="mx-auto mt-8 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">{ecosystemCards.map(({ title, text }) => <article key={title} className="rounded-2xl border border-[#dfe9f2] bg-white p-5 text-center shadow-sm"><h3 className="font-bold text-[#1f4f93]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#55636a]">{text}</p></article>)}</div>
        <Copy><p>Through these connections, we seek to create greater opportunities for participation, enterprise development, destination development, market access, collaboration, and shared value.</p></Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass}>Our Operational Platforms</SectionHeading>
        <Copy><p>Our People-Powered Tourism Ecosystem is brought to life through interconnected operational platforms:</p></Copy>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">{platforms.map(({ title, tagline, text, to }) => <Link key={title} to={to} className="rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] p-6 text-left no-underline shadow-sm transition hover:-translate-y-1 hover:shadow-md"><h3 className="text-xl font-bold text-[#1f4f93]">{title}</h3><p className="mt-2 font-bold text-[#0f4d2f]">{tagline}</p><p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p></Link>)}</div>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake}>Our Commitment</SectionHeading>
        <Copy><p>We are committed to building a tourism ecosystem where more people and enterprises can participate, create, connect, grow, and prosper through tourism.</p><p>Our focus is not only on creating tourism opportunities for travellers, but also on strengthening the people, enterprises, destinations, and partnerships that make those opportunities possible.</p><p>Through collaboration, innovation, meaningful partnerships, and a people-powered approach, we seek to contribute to a stronger and more resilient tourism ecosystem for Sri Lanka.</p></Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass}>Looking Ahead</SectionHeading>
        <Copy><p>Tourism continues to evolve, creating new opportunities for people, enterprises, destinations, and markets.</p><p>We believe the future of tourism will be shaped not only by where people travel, but by how tourism creates opportunities, strengthens enterprises, develops destinations, connects people, and generates shared value.</p><p>Traveleye Alliance is committed to building a connected and people-powered tourism ecosystem that transforms strategic vision into practical action and creates lasting value for <strong>People, Planet, and Prosperity</strong>.</p><p>Our focus remains clear:</p><p className="text-lg font-bold text-[#0f4d2f]">Developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem through collaboration, stewardship, innovation, and meaningful partnerships.</p></Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout}>Our Journey</SectionHeading>
        <Copy><p>Traveleye Alliance began its journey in <strong>2006</strong>, rooted in a passion for meaningful travel and a belief in the value tourism can create for people and places.</p><p>Over time, our tourism experience and capabilities evolved, leading to a broader approach to tourism and ultimately to the development of the <strong>People-Powered Tourism Framework</strong> and the vision of building a <strong>People-Powered Tourism Ecosystem for Sri Lanka</strong>.</p></Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
