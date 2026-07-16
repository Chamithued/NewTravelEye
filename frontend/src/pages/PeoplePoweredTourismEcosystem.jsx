import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Compass,
  Drama,
  Folder,
  Globe2,
  Handshake,
  House,
  Leaf,
  MapPin,
  Network,
  Route,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/Traveleye People-Powered Tourism Ecosystem.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const foundations = [
  { icon: UsersRound, emoji: '', title: 'People', text: 'People are at the heart of the ecosystem. Travellers, entrepreneurs, hosts, communities, tourism professionals, educators, governments, investors, development organisations, and strategic partners all play an essential role in building stronger tourism enterprises, destinations, and ecosystems through meaningful participation and shared stewardship.' },
  { icon: MapPin, emoji: '', title: 'Places', text: 'Every destination possesses its own identity, culture, heritage, landscapes, traditions, and stories. The ecosystem celebrates these unique characteristics while encouraging destination stewardship, environmental responsibility, cultural preservation, and place-inspired tourism development that respects and enhances the places people visit.' },
  { icon: Handshake, emoji: '', title: 'Partnerships', text: "Tourism thrives through collaboration. The ecosystem connects people, enterprises, destinations, institutions, governments, investors, educational institutions, development organisations, and strategic partners to create shared opportunities, collective impact, stronger relationships, and long-term value across Sri Lanka's tourism ecosystem." },
  { icon: Sprout, emoji: '', title: 'Prosperity', text: 'Prosperity is created when people, places, and partnerships work together. By developing and strengthening micro and small tourism enterprises, encouraging entrepreneurship, expanding opportunities for participation, and supporting resilient destinations, the ecosystem contributes to lasting economic, social, cultural, and environmental value for present and future generations.' },
]

const participants = ['Tourism entrepreneurs', 'Place-inspired host stays', 'Experience creators', 'Tour operators and travel businesses', 'Tourist guides', 'Transport providers', 'Local producers', 'Artisans and craftspeople', 'Wellness practitioners', 'Community tourism initiatives', 'Tourism support service providers', 'Educational institutions', 'Development organisations', 'Government agencies', 'Investors', 'Destination partners', 'Strategic partners']

const opportunities = [
  { icon: Route, text: 'Meaningful Journeys and Travel Experiences' },
  { icon: House, text: 'Place-Inspired Host Stays' },
  { icon: Drama, text: 'People and Place-Inspired Experiences' },
  { icon: BriefcaseBusiness, text: 'Tourism Enterprise Development' },
  { icon: Compass, text: 'Destination Development and Stewardship' },
  { icon: Globe2, text: 'Travel Corridor Development' },
  { icon: Handshake, text: 'Tourism Partnerships' },
  { icon: Network, text: 'Joint Ventures' },
  { icon: ChartNoAxesCombined, text: 'Tourism Programmes' },
  { icon: Folder, text: 'Tourism Projects' },
  { icon: Sprout, text: 'Ecosystem Initiatives' },
]

function SectionHeading({ icon: Icon, children }) {
  return <><h2 className="flex items-center justify-center gap-3 text-center text-2xl font-bold leading-tight text-[#1f4f93] sm:text-4xl"><span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dfe7f3] text-[#1f4f93]"><Icon className="h-5 w-5" /></span><span>{children}</span></h2><div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" /></>
}

function Copy({ children }) {
  return <div className="mx-auto mt-6 max-w-5xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
}

export default function PeoplePoweredTourismEcosystem() {
  return (
    <main className="content-page flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] items-center overflow-hidden bg-slate-900 sm:min-h-[48vh]">
        <img src={heroImg} alt="Traveleye People-Powered Tourism Ecosystem" className="absolute inset-0 h-full w-full object-cover object-center brightness-90" />
        <div className="absolute inset-0 bg-[#10233d]/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">Traveleye People-Powered Tourism Ecosystem</h1>
          <p className="mt-4 text-base text-white/95 sm:text-xl">Building Stronger Tourism Through Connected Participation</p>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">To develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p>
          <div className="mt-12"><SectionHeading icon={Network}>Building Tourism Through Connected Ecosystems</SectionHeading></div>
          <Copy>
            <p>Tourism is more than journeys, accommodation, attractions, or individual tourism businesses. It is a dynamic ecosystem where people, enterprises, destinations, experiences, institutions, partnerships, and support systems are interconnected, each contributing to the strength, resilience, and long-term success of tourism.</p>
            <p>The <strong>Traveleye People-Powered Tourism Ecosystem</strong> is a connected tourism ecosystem developed by Traveleye Alliance Sri Lanka to strengthen tourism through people, participation, collaboration, stewardship, innovation, and shared value creation.</p>
            <p>Rather than viewing tourism as a collection of isolated activities, the ecosystem strengthens the relationships between travellers, entrepreneurs, hosts, tourism enterprises, destinations, communities, governments, educational institutions, development organisations, investors, and industry partners. By encouraging collaboration and shared stewardship, it creates opportunities for tourism to generate stronger local economies, resilient destinations, meaningful visitor experiences, and lasting prosperity.</p>
            <p>At the heart of the ecosystem is a simple belief:</p>
            <p className="text-lg font-bold italic text-[#0f4d2f]">Stronger tourism begins with stronger connections between People, Places, Partnerships, and Prosperity.</p>
          </Copy>
        </div>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl text-center">
        <SectionHeading icon={Globe2}>What Is the Traveleye People-Powered Tourism Ecosystem?</SectionHeading>
        <Copy><p>The Traveleye People-Powered Tourism Ecosystem provides a connected environment where tourism can be planned, developed, implemented, and strengthened through collaboration.</p><p>Its primary purpose is to develop and strengthen micro and small tourism enterprises while creating stronger destinations, meaningful partnerships, and a more resilient tourism ecosystem.</p><p>The ecosystem connects journeys, travel experiences, place-inspired host stays, people and place-inspired experiences, tourism enterprises, destinations, travel corridors, partnerships, tourism support systems, and opportunities for participation within a single integrated ecosystem.</p><p>By encouraging collaboration rather than fragmentation, stewardship rather than short-term extraction, and shared value rather than isolated success, the ecosystem creates lasting benefits for travellers, tourism enterprises, destinations, communities, and future generations.</p></Copy>
      </div></section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl text-center">
        <SectionHeading icon={UsersRound}>The Four Ps of the People-Powered Tourism Ecosystem</SectionHeading>
        <Copy><p>The Traveleye People-Powered Tourism Ecosystem is built upon four interconnected foundations that guide how tourism is developed, strengthened, and sustained.</p><p>Together, these foundations create an environment where tourism enterprises, destinations, communities, and partnerships can grow, collaborate, and create lasting value.</p></Copy>
        <div className="mt-9 grid gap-5 text-left md:grid-cols-2">{foundations.map(({ icon: Icon, emoji, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"><div className="flex items-center gap-3"><span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe7f3] text-[#1f4f93]"><Icon className="h-5 w-5" /></span><h3 className="text-xl font-bold text-[#172544]"><span aria-hidden="true">{emoji}</span> {title}</h3></div><p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">{text}</p></article>)}</div>
      </div></section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl text-center"><SectionHeading icon={Leaf}>Guided by the People-Powered Tourism Framework</SectionHeading><Copy><p>The ecosystem is guided by the <strong>People-Powered Tourism Framework</strong>, which provides the strategic blueprint for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p><p>Built upon its <strong>Guiding Principles</strong> and <strong>Global Alignment</strong>, and implemented through its <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Operational Platforms</strong>, <strong>Tourism Outcomes</strong>, and <strong>Ecosystem Indicators</strong>, the Framework transforms strategic vision into practical action.</p><p>Together, these interconnected components provide a structured and collaborative approach to developing tourism enterprises, strengthening destinations, encouraging participation, fostering partnerships, and creating measurable long-term impact across Sri Lanka&apos;s tourism ecosystem.</p></Copy></div></section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl text-center"><SectionHeading icon={UsersRound}>Developing Tourism Through Connected Participation</SectionHeading><Copy><p>The Traveleye People-Powered Tourism Ecosystem creates opportunities for a diverse range of participants to contribute to tourism development, including:</p></Copy><div className="mx-auto mt-8 grid max-w-5xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">{participants.map(item => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#334155]"><span className="h-2 w-2 shrink-0 rounded-full bg-[#c28a5b]" />{item}</div>)}</div><Copy><p>By strengthening participation across the tourism ecosystem, the ecosystem supports entrepreneurship, enterprise development, innovation, collaboration, and stronger local economies while creating more resilient destinations and meaningful tourism experiences.</p></Copy></div></section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl text-center"><SectionHeading icon={Sprout}>Creating Opportunities Across the Tourism Ecosystem</SectionHeading><Copy><p>The ecosystem supports a wide range of tourism development opportunities, including:</p></Copy><div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">{opportunities.map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 text-left text-sm font-bold text-[#172544] shadow-sm"><span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dfe7f3] text-[#1f4f93]"><Icon className="h-4 w-4" aria-hidden="true" /></span><span>{text}</span></div>)}</div><Copy><p>Together, these interconnected opportunities strengthen participation, encourage collaboration, and create lasting value throughout Sri Lanka&apos;s tourism ecosystem.</p></Copy></div></section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl text-center"><SectionHeading icon={Globe2}>Why a People-Powered Tourism Ecosystem?</SectionHeading><Copy><p>Tourism achieves its greatest potential when people are active participants rather than passive beneficiaries.</p><p>The Traveleye People-Powered Tourism Ecosystem encourages collaboration instead of fragmentation, stewardship instead of short-term extraction, and shared value instead of isolated success. By connecting people, enterprises, destinations, institutions, and opportunities, it creates an environment where tourism can grow in a more inclusive, resilient, and sustainable way.</p><p>Through the development and strengthening of micro and small tourism enterprises, the ecosystem contributes to stronger destinations, greater local economic participation, meaningful visitor experiences, resilient communities, and lasting prosperity.</p></Copy></div></section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl text-center"><SectionHeading icon={Network}>Looking Ahead</SectionHeading><Copy><p>The Traveleye People-Powered Tourism Ecosystem is designed to evolve through collaboration, innovation, research, implementation, and shared learning.</p><p>Guided by the People-Powered Tourism Framework, the ecosystem will continue creating opportunities to develop and strengthen micro and small tourism enterprises while building stronger connections between people, places, partnerships, destinations, and opportunities.</p><p>As tourism continues to evolve, the ecosystem will provide a collaborative foundation for strengthening tourism enterprises, supporting vibrant destinations, encouraging innovation, expanding partnerships, and creating lasting value for Sri Lanka and future generations.</p><p className="text-lg italic text-[#0f4d2f]">Because stronger tourism begins with stronger <strong>People, Places, Partnerships, and Prosperity</strong>.</p></Copy></div></section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8"><div className="mx-auto max-w-5xl text-center"><h2 className="text-3xl font-bold text-[#1f4f93] sm:text-4xl">Grow with Traveleye Alliance</h2><div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" /><div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8"><p>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, Traveleye Alliance Sri Lanka invites you to become part of the Traveleye People-Powered Tourism Ecosystem.</p><p>Together, we can develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem by fostering meaningful participation, collaborative partnerships, resilient destinations, stronger local economies, and tourism that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p></div></div></section>
      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
