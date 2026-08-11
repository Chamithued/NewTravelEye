import { ArrowDown, CircleCheck, Clock3, Compass, Hourglass, Network, Route, Sprout } from 'lucide-react'
import heroImg from '../assets/subhero/about/About Traveleye Alliance.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const milestones = [
  {
    year: '2006',
    title: 'A Journey Rooted in Purpose',
    icon: Hourglass,
    paragraphs: [
      <>Traveleye Alliance was founded on a passion for meaningful travel and a belief that tourism should connect travellers with Sri Lanka&apos;s people, culture, heritage, nature, and local way of life.</>,
      <>From the beginning, our vision extended beyond travel to creating opportunities for broader participation and shared value across the tourism sector.</>,
      <>The early years built the foundation of our tourism experience and capabilities and deepened our understanding of the relationships between travellers, tourism enterprises, destinations, and local communities.</>,
    ],
  },
  {
    year: '2012',
    title: 'From Travel to Experiences',
    icon: Clock3,
    paragraphs: [
      <>As tourism continued to evolve, so did Traveleye.</>,
      <>Our approach expanded beyond conventional travel towards <strong>authentic experiences, local participation, destination stewardship, enterprise development, and collaborative tourism approaches</strong> that strengthen both people and places.</>,
      <>The focus increasingly moved towards creating deeper connections between travellers, destinations, enterprises, and the people who bring tourism experiences to life.</>,
      <>This evolution broadened our understanding of tourism — from delivering individual journeys and experiences towards creating stronger connections and opportunities across the wider tourism ecosystem.</>,
    ],
  },
  {
    year: 'Today',
    title: 'Building a People-Powered Tourism Ecosystem',
    icon: CircleCheck,
    paragraphs: [
      <>Today, Traveleye Alliance serves as the <strong>Builder of Sri Lanka&apos;s First People-Powered Tourism Ecosystem</strong>, bringing together journeys, host stays, travel experiences, tourism enterprises, destinations, travel partnerships, and ecosystem support through a connected and collaborative approach to tourism development.</>,
      <>Our focus is to <strong>develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem</strong>, while creating stronger destinations and lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</>,
      <>The <strong>People-Powered Tourism Framework</strong> provides the strategic blueprint for this new phase, connecting our principles, strategic pillars, development models, operational platforms, tourism outcomes, and ecosystem indicators into a coherent approach to tourism development.</>,
    ],
  },
]

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
        <span>{children}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function Copy({ children }) {
  return <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8 [&_strong]:font-bold [&_strong]:text-[#234c3a]">{children}</div>
}

function TimelineLabel({ year, title, alignRight }) {
  return (
    <div className={`mx-auto max-w-[500px] text-center ${alignRight ? 'lg:ml-auto lg:mr-0 lg:text-right' : 'lg:mx-0 lg:text-left'}`}>
      <p className="text-[1.5rem] font-extrabold leading-none tracking-normal text-[#1f4f93]">{year}</p>
      <h2 className="mt-2 text-[0.98rem] font-medium leading-snug text-[#828282]">{title}</h2>
    </div>
  )
}

function TimelineCard({ paragraphs, side }) {
  const isLeft = side === 'left'
  return (
    <article className={`relative mx-auto w-full max-w-[500px] rounded-md border border-[#ececec] bg-white px-6 py-4 text-[#777] shadow-[0_4px_14px_rgba(15,23,42,0.14)] ${isLeft ? 'lg:ml-auto lg:mr-0 lg:border-r-[3px] lg:border-r-[#1f4f93] lg:text-right' : 'lg:ml-0 lg:mr-auto lg:border-l-[3px] lg:border-l-[#1f4f93] lg:text-left'}`}>
      <span className={`absolute top-[22px] hidden h-5 w-5 rotate-45 bg-white lg:block ${isLeft ? '-right-[11px] border-r-[3px] border-t-[3px] border-[#1f4f93]' : '-left-[11px] border-b-[3px] border-l-[3px] border-[#1f4f93]'}`} aria-hidden="true" />
      <div className="space-y-3 text-center text-[0.94rem] font-medium leading-[1.5] lg:text-inherit [&_strong]:font-extrabold">
        {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </article>
  )
}

function TimelineItem({ milestone, index }) {
  const cardIsLeft = index % 2 === 1
  const Icon = milestone.icon
  return (
    <div className="relative grid gap-5 lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_66px_minmax(0,1fr)] lg:items-start lg:gap-0">
      <div className={`${cardIsLeft ? 'order-3' : 'order-1'} flex justify-center lg:order-none lg:justify-end lg:pr-6`}>
        {cardIsLeft ? <TimelineCard paragraphs={milestone.paragraphs} side="left" /> : <TimelineLabel year={milestone.year} title={milestone.title} alignRight />}
      </div>

      <div className="relative z-10 order-2 flex justify-center lg:order-none">
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#d9dde2]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f4f93] text-white shadow-[0_2px_8px_rgba(15,23,42,0.16)]">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
        </span>
      </div>

      <div className={`${cardIsLeft ? 'order-1' : 'order-3'} flex justify-center lg:order-none lg:justify-start lg:pl-6`}>
        {cardIsLeft ? <TimelineLabel year={milestone.year} title={milestone.title} /> : <TimelineCard paragraphs={milestone.paragraphs} side="right" />}
      </div>
    </div>
  )
}

export default function OurJourneyPage() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <img src={heroImg} alt="Our Journey banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex w-full justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center text-white">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight sm:text-4xl lg:text-5xl">Our Journey</h1>
            <p className="mt-4 text-sm font-bold text-white/95 sm:text-base lg:text-lg">From Purpose-Driven Travel to Building Sri Lanka&apos;s First People-Powered Tourism Ecosystem</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass}>From Purpose-Driven Travel to Building Sri Lanka&apos;s First People-Powered Tourism Ecosystem</SectionHeading>
        <Copy>
          <p>Traveleye Alliance began its journey in <strong>2006</strong> with a simple belief: tourism should create meaningful value not only for travellers, but also for the people, places, and enterprises that make every journey possible.</p>
          <p>What began as a passion for meaningful travel gradually evolved through experience into a broader approach to tourism — with greater emphasis on authentic experiences, local participation, destination stewardship, enterprise development, collaboration, innovation, and meaningful partnerships.</p>
          <p>Working alongside destinations, tourism enterprises, communities, and industry stakeholders provided valuable insights into both the opportunities and challenges shaping Sri Lanka&apos;s tourism sector.</p>
          <p>These experiences shaped a new way of thinking about tourism — one that recognises tourism as an interconnected ecosystem where <strong>people, enterprises, destinations, partnerships, and supporting organisations</strong> can work together to create greater collective value.</p>
        </Copy>
      </section>

      <section className="w-full bg-[#fcfbf7] px-4 py-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="relative mx-auto max-w-[1120px] pt-0 lg:pt-[70px]">
          <div className="absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 bg-[#d6d7d9] lg:block" />
          <span className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-[#d6d7d9] lg:block" />
          <span className="absolute bottom-0 left-1/2 hidden h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#d6d7d9] lg:block" />
          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => <TimelineItem key={milestone.year} milestone={milestone} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout}>Entering a New Phase</SectionHeading>
        <Copy>
          <p>After building our tourism experience and capabilities since 2006, Traveleye Alliance Sri Lanka is now entering a new phase — <strong>building a People-Powered Tourism Ecosystem to develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</strong></p>
          <p>This represents the natural evolution of our journey:</p>
          <p><strong>from meaningful travel, to tourism experiences, to building a connected ecosystem that creates greater opportunities for people and enterprises across Sri Lanka.</strong></p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Route}>The Journey Continues</SectionHeading>
        <Copy>
          <p>Our journey is not simply a reflection of where we have come from. It is the foundation for what we are building next.</p>
          <p>The experience, relationships, insights, and capabilities developed over the years now provide the foundation for Traveleye Alliance to build a more connected, collaborative, and people-powered tourism ecosystem for Sri Lanka.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Network}>Our Evolution</SectionHeading>
        <div className="mx-auto mt-9 flex max-w-4xl flex-col items-center text-center text-base font-bold text-[#1f4f93] sm:text-lg">
          <p>2006 - A Journey Rooted in Purpose</p>
          <ArrowDown className="my-3 h-6 w-6" />
          <p>2012 - From Travel to Experiences</p>
          <ArrowDown className="my-3 h-6 w-6" />
          <p>Today - Building a People-Powered Tourism Ecosystem</p>
        </div>
        <p className="mx-auto mt-10 max-w-4xl text-center text-lg font-bold text-[#0f4d2f] sm:text-xl">Tourism for People, Planet, and Prosperity</p>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
