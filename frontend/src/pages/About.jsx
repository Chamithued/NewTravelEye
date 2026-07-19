import {
  Compass,
  Handshake,
  Leaf,
  Lightbulb,
  MapPin,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/About Traveleye Alliance.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const philosophyCards = [
  {
    title: 'People',
    text: 'People are the driving force behind tourism. We believe tourism becomes stronger when entrepreneurs, hosts, experience creators, tourism enterprises, communities, travellers, and tourism professionals are empowered to participate meaningfully and contribute to tourism development.',
    icon: Users,
  },
  {
    title: 'Places',
    text: 'Every destination has its own identity, culture, heritage, and environment. We believe tourism should strengthen places through responsible stewardship, protecting what makes each destination unique while enhancing its long-term vitality.',
    icon: MapPin,
  },
  {
    title: 'Partnerships',
    text: 'Tourism thrives through collaboration. We foster meaningful partnerships that connect tourism enterprises, destinations, institutions, communities, governments, investors, and strategic partners to create shared opportunities and collective impact.',
    icon: Handshake,
  },
  {
    title: 'Prosperity',
    text: 'Tourism should create lasting economic and social value. By developing resilient tourism enterprises, supporting entrepreneurship, strengthening destinations, and expanding opportunities, tourism can generate inclusive prosperity for people, places, and future generations.',
    icon: Sprout,
  },
]

const journeyMilestones = [
  {
    year: '2006',
    title: 'A Journey Rooted in Purpose',
    text: "Founded on a passion for meaningful travel, Traveleye Alliance believed tourism should connect travellers with Sri Lanka's people, culture, heritage, nature, and local way of life while creating value for the communities and enterprises that make travel possible.",
  },
  {
    year: '2012',
    title: 'Towards People-Powered Tourism',
    text: <>As tourism evolved, so did our vision. Greater emphasis was placed on authentic experiences, local participation, destination stewardship, enterprise development, and collaborative tourism approaches. These ideas gradually evolved into the <strong className="font-bold text-[#0f4d2f]">People-Powered Tourism Framework</strong>.</>,
  },
  {
    year: 'Today',
    title: "Building Sri Lanka's First People-Powered Tourism Ecosystem",
    text: "Today, Traveleye Alliance serves as the Builder and Steward of Sri Lanka's First People-Powered Tourism Ecosystem, connecting journeys, host stays, travel experiences, tourism enterprises, destinations, travel partnerships, and ecosystem support through an integrated approach to tourism development.",
  },
]

const rolePoints = [
  'Develop and strengthen micro and small tourism enterprises.',
  'Support authentic host stays and people-inspired travel experiences.',
  'Strengthen destination ecosystems through collaboration and stewardship.',
  'Build meaningful tourism partnerships and travel corridors.',
  'Enhance tourism capability through education, advisory services, technology, and innovation.',
  'Connect tourism stakeholders through an integrated ecosystem that creates long-term value for people, places, partnerships, and prosperity.',
]

function SectionHeading({ icon: Icon, title, subtitle, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
      <h2 className={`mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl ${center ? 'items-center justify-center' : 'items-start'}`}>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>{title}</span>
      </h2>
      <div className={`mt-3 h-0.5 w-24 rounded bg-[#c28a5b] ${center ? 'mx-auto' : ''}`} />
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

export default function About() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <img src={heroImg} alt="About Traveleye Alliance banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
        <div className="absolute inset-0 bg-black/16" />
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">ABOUT TRAVELEYE ALLIANCE</h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Tourism for People, Planet, and Prosperity</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Sprout} title="Tourism for People, Planet, and Prosperity" />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Traveleye Alliance Sri Lanka is <strong className="font-bold text-[#0f4d2f]">the Builder and Steward of Sri Lanka's First People-Powered Tourism Ecosystem</strong>, dedicated to developing and strengthening micro and small tourism enterprises while creating lasting value for <strong className="font-bold text-[#0f4d2f]">People, Planet, and Prosperity</strong>.</p>
            <p>We believe tourism becomes stronger when people are empowered to participate, destinations are responsibly stewarded, enterprises are supported to grow, and partnerships create shared value.</p>
            <p>Through a connected ecosystem approach, Traveleye Alliance brings together entrepreneurs, hosts, experience creators, tourism enterprises, destinations, institutions, communities, travellers, governments, investors, development organisations, and strategic partners to strengthen tourism across Sri Lanka.</p>
            <p>Guided by the <strong className="font-bold text-[#0f4d2f]">People-Powered Tourism Framework</strong>, we transform strategic vision into practical action through interconnected Guiding Principles, Global Alignment, Strategic Pillars, Development Models, Operational Platforms, Tourism Outcomes, and Ecosystem Indicators. Together, these components create a coherent pathway for developing stronger tourism enterprises, more resilient destinations, and thriving local economies.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Compass} title="Our Journey" subtitle={<strong className="font-bold text-[#0f4d2f]">From Purpose-Driven Travel to Building Sri Lanka's First People-Powered Tourism Ecosystem</strong>} />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Traveleye Alliance began its journey in <strong className="font-bold text-[#0f4d2f]">2006</strong> with a simple belief that tourism should create meaningful value not only for travellers, but also for the people, places, and enterprises that make every journey possible.</p>
            <p>What began as a passion for meaningful travel gradually evolved into a broader vision of strengthening tourism through participation, shared stewardship, collaboration, innovation, and meaningful partnerships. Working alongside destinations, tourism enterprises, communities, and industry stakeholders provided valuable insights into both the opportunities and the challenges shaping Sri Lanka's tourism sector.</p>
            <p>These experiences inspired a new way of thinking about tourism—one that views tourism as an interconnected ecosystem where people, enterprises, destinations, partnerships, and supporting organisations work together to create greater collective value.</p>
            <p>This journey ultimately led to the development of the <strong className="font-bold text-[#0f4d2f]">People-Powered Tourism Framework</strong>, the strategic blueprint that now guides the development of <strong className="font-bold text-[#0f4d2f]">Sri Lanka's First People-Powered Tourism Ecosystem</strong>.</p>
            <p>Today, Traveleye Alliance continues that journey by developing and strengthening micro and small tourism enterprises while creating stronger destinations and lasting value for <strong className="font-bold text-[#0f4d2f]">People, Places, Partnerships, and Prosperity</strong>.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Lightbulb} title="Our Journey at a Glance" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {journeyMilestones.map(({ year, title, text }) => (
              <article key={year} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
                <p className="text-lg font-bold text-[#1f4f93]">{year} — {title}</p>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Our Purpose" />
          <p className="mt-7 text-sm leading-7 text-[#475569] sm:text-base">Our purpose is clear:</p>
          <p className="mt-3 text-lg font-bold leading-8 text-[#0f4d2f]">To develop and strengthen micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</p>
          <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">We achieve this by connecting people, places, partnerships, and opportunities through an integrated ecosystem that supports entrepreneurship, destination development, enterprise growth, innovation, collaboration, and long-term stewardship.</p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Our Guiding Philosophy" subtitle={<>Our philosophy is built on the <strong className="font-bold text-[#0f4d2f]">Four Ps of the People-Powered Tourism Ecosystem</strong>. Together, these four interconnected foundations guide how we strengthen tourism enterprises, develop destinations, and create lasting value across Sri Lanka's tourism ecosystem.</>} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {philosophyCards.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1FF] text-[#214F95]"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-black sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading icon={Handshake} title="Our Role" />
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">As the Builder and Steward of Sri Lanka's First People-Powered Tourism Ecosystem, Traveleye Alliance works to:</p>
          <ul className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rolePoints.map((point) => (
              <li key={point} className="flex min-h-20 items-center gap-3 rounded-2xl border border-[#eef4ef] bg-white p-4 text-left shadow-sm">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ecf8ef] text-[#14532d]"><Leaf className="h-4 w-4" /></span>
                <span className="text-sm font-medium leading-6 text-[#234c3a]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="Looking Ahead" />
          <div className="mt-8 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Tourism is continuously evolving, bringing new opportunities and new responsibilities.</p>
            <p>We believe the future of tourism will be shaped not only by where people travel, but by how tourism empowers people, strengthens destinations, supports entrepreneurship, and creates shared prosperity.</p>
            <p>Guided by the <strong className="font-bold text-[#0f4d2f]">People-Powered Tourism Framework</strong>, Traveleye Alliance remains committed to building a connected, inclusive, and resilient tourism ecosystem that transforms strategic vision into practical action and measurable impact across Sri Lanka.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Tourism for People, Planet, and Prosperity', "Building Sri Lanka's First People-Powered Tourism Ecosystem", 'Developing Stronger Tourism Enterprises. Creating Stronger Destinations.'].map((line) => <span key={line} className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-bold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">{line}</span>)}
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
