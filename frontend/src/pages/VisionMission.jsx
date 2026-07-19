import {
  Compass,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Network,
  Rocket,
  Scale,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/Vision & Mission.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const values = [
  {
    title: 'Participation',
    icon: Users,
    text: 'We believe tourism becomes stronger when people are empowered to participate meaningfully as entrepreneurs, hosts, experience creators, tourism enterprises, communities, travellers, and tourism professionals.',
  },
  {
    title: 'Stewardship',
    icon: Leaf,
    text: 'We care for destinations through responsible leadership, long-term thinking, and a shared commitment to protecting the people, culture, heritage, and environment that make every place unique.',
  },
  {
    title: 'Collaboration',
    icon: Handshake,
    text: 'We believe meaningful partnerships create stronger tourism. By working together across tourism enterprises, destinations, institutions, communities, governments, investors, and strategic partners, we create greater collective impact.',
  },
  {
    title: 'Innovation',
    icon: Lightbulb,
    text: 'We embrace creativity, technology, knowledge, and continuous learning to develop practical solutions that strengthen tourism enterprises, enhance visitor experiences, and support sustainable tourism development.',
  },
  {
    title: 'Entrepreneurship',
    icon: Rocket,
    text: 'We believe resilient tourism begins with resilient enterprises. We support entrepreneurs and the growth of micro and small tourism enterprises as drivers of inclusive economic development.',
  },
  {
    title: 'Integrity',
    icon: Scale,
    text: 'We build trust through honesty, transparency, accountability, professionalism, and ethical leadership in everything we do.',
  },
  {
    title: 'Sustainability',
    icon: Sprout,
    text: 'We promote tourism that creates long-term environmental, social, cultural, and economic value while supporting resilient destinations and responsible growth.',
  },
  {
    title: 'Shared Prosperity',
    icon: HeartHandshake,
    text: "We believe tourism should generate opportunities and lasting value that benefit people, tourism enterprises, destinations, communities, and local economies across Sri Lanka's tourism ecosystem.",
  },
]

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" />
        </span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle ? <p className="mt-5 text-base font-bold leading-7 text-[#0f4d2f] sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

export default function VisionMission() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Traveleye Vision, Mission & Values banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Vision, Mission &amp; Values
            </h1>
            <p className="mt-4 text-sm font-bold text-white/95 sm:text-base lg:text-lg">
              Inspired by Our Vision. Guided by Our Mission. Defined by Our Values.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
          <p>
            At Traveleye Alliance Sri Lanka, our Vision, Mission, and Values define who we are, inspire what we aspire to achieve, and guide how we work together to build <strong className="font-bold text-[#234c3a]">Sri Lanka&apos;s First People-Powered Tourism Ecosystem</strong>.
          </p>
          <p>
            Together, they reflect our commitment to developing and strengthening micro and small tourism enterprises while creating lasting value for <strong className="font-bold text-[#234c3a]">People, Planet, and Prosperity</strong>.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="Our Vision" subtitle="Building a Future Where Tourism Empowers People, Strengthens Destinations, and Creates Shared Prosperity" />
          <p className="mt-7 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            We envision a future where tourism is powered by people, strengthened through meaningful partnerships, and guided by shared stewardship—a future where thriving tourism enterprises, resilient destinations, and connected communities create lasting value for <strong className="font-bold text-[#234c3a]">People, Planet, and Prosperity</strong>.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Target} title="Our Mission" subtitle="To Build and Steward Sri Lanka's First People-Powered Tourism Ecosystem by Developing and Strengthening Micro and Small Tourism Enterprises" />
          <p className="mt-7 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Guided by the <strong className="font-bold text-[#234c3a]">People-Powered Tourism Framework</strong>, we connect people, places, partnerships, and opportunities to develop stronger tourism enterprises, strengthen destinations, foster collaboration, encourage innovation, and create sustainable prosperity across Sri Lanka&apos;s tourism ecosystem.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Our Values" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            At Traveleye Alliance, our values shape how we lead, collaborate, innovate, and build the <strong className="font-bold text-[#234c3a]">People-Powered Tourism Ecosystem</strong>. They guide our decisions, partnerships, and actions as we work to create lasting value for people, places, and tourism enterprises.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {values.map(({ title, icon: Icon, text }) => (
              <article key={title} className="flex h-full gap-4 rounded-2xl border border-[#e7eee9] bg-white p-5 shadow-sm sm:gap-5 sm:p-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-[#214F95]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#0f4d2f] sm:text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#475569] sm:text-base">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Living Our Purpose" />
          <div className="mt-7 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Our Vision, Mission, and Values are more than statements—they guide how we build partnerships, support tourism enterprises, strengthen destinations, and contribute to the development of Sri Lanka&apos;s tourism ecosystem.</p>
            <p>Together, they reflect our commitment to building a tourism future where <strong className="font-bold text-[#234c3a]">People, Places, Partnerships, and Prosperity</strong> remain at the heart of every journey, every enterprise, and every destination.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-bold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">Tourism for People, Planet, and Prosperity.</span>
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-bold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">Building Sri Lanka&apos;s First People-Powered Tourism Ecosystem</span>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
