import {
  BriefcaseBusiness,
  CalendarHeart,
  Crown,
  Globe2,
  Handshake,
  Landmark,
  Network,
  Plane,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const travelSegments = [
  {
    title: 'Inbound Travel',
    subtitle: 'Showcasing Sri Lanka to the World',
    text: "Developing meaningful inbound travel experiences that showcase Sri Lanka's culture, heritage, nature, wildlife, communities, and destinations while creating opportunities for local tourism enterprises, hosts, experience creators, guides, and destination partners.",
    icon: Landmark,
  },
  {
    title: 'Domestic Travel',
    subtitle: 'Encouraging Sri Lankans to Discover Their Own Country',
    text: "Promoting meaningful domestic travel that encourages Sri Lankans to explore the diversity of their own country while strengthening local destinations, supporting tourism enterprises, and fostering pride in Sri Lanka's people, places, and heritage.",
    icon: MapPinIcon,
  },
  {
    title: 'Outbound Travel',
    subtitle: 'Connecting Sri Lankans with the World',
    text: 'Creating thoughtfully designed outbound travel opportunities that connect Sri Lankan travellers with international destinations for leisure, education, business, cultural exchange, and special-interest travel while building global connections and experiences.',
    icon: Plane,
  },
  {
    title: 'Travel Corridors',
    subtitle: 'Connecting Nations Through Meaningful Travel',
    text: 'Developing long-term travel corridor partnerships that strengthen tourism through connected travel, cultural exchange, education, business collaboration, investment, and people-to-people relationships between Sri Lanka and international destinations.',
    icon: Globe2,
  },
  {
    title: 'Premium Travel',
    subtitle: 'Curating Refined Travel Experiences',
    text: 'Designing personalised and premium travel experiences for travellers seeking exceptional hospitality, authenticity, privacy, and bespoke service while supporting high-quality tourism enterprises and destination experiences.',
    icon: Crown,
  },
  {
    title: 'Celebrations & Events',
    subtitle: 'Creating Meaningful Moments Through Travel',
    text: 'Facilitating destination weddings, celebrations, retreats, conferences, incentive travel, corporate gatherings, and special events that generate opportunities for tourism enterprises while creating memorable experiences for participants.',
    icon: CalendarHeart,
  },
]

const stakeholders = [
  'Travellers',
  'Tour operators and destination management companies',
  'Tourism entrepreneurs',
  'Micro and small tourism enterprises',
  'Hosts and experience creators',
  'Transport providers',
  'Local communities',
  'Tourism authorities',
  'Government agencies',
  'Educational institutions',
  'Development organisations',
  'Investors',
  'Strategic partners',
]

const connectedTravelPoints = [
  'Inbound travel creates opportunities for local tourism enterprises and destinations.',
  'Domestic travel encourages Sri Lankans to explore and support their own country.',
  'Outbound travel strengthens international connections and broadens global perspectives.',
  'Travel Corridors build long-term partnerships between destinations and countries.',
  'Premium travel showcases exceptional hospitality and personalised experiences.',
  'Celebrations and Events create memorable occasions while generating new opportunities for destinations and tourism enterprises.',
]

function MapPinIcon({ className }) {
  return <Landmark className={className} />
}

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

function Copy({ children }) {
  return <div className="mx-auto mt-6 max-w-5xl space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
}

function CheckList({ items }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-[#e5eee8] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
          <span className="mt-0.5 font-bold text-green-700">✓</span><span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TravelCollective() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="Traveleye Travel Collective" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div>
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">Traveleye</span><span className="block">Travel Collective</span>
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Connecting Journeys Through People and Place</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">To develop and strengthen micro and small travel and tourism enterprises by creating meaningful journeys that connect people, places, enterprises, destinations, and opportunities across Sri Lanka's tourism ecosystem.</p>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Reimagining Travel Through People and Place" />
        <Copy>
          <p>Travel is more than movement between destinations—it is an opportunity to connect people, places, cultures, communities, and experiences in ways that create lasting value for travellers, tourism enterprises, and destinations.</p>
          <p><strong>Traveleye Travel Collective</strong> is one of the four <strong>People-Powered Tourism Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>. It transforms the Framework into practical action by connecting meaningful journeys through people and place while supporting the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</p>
          <p>Rather than viewing travel as a series of isolated products and services, the Travel Collective creates meaningful connections between travellers, destinations, tourism enterprises, host communities, tourism partners, and opportunities. Every journey contributes to stronger tourism enterprises, richer visitor experiences, resilient destinations, collaborative partnerships, and thriving tourism ecosystems.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="Why the Travel Collective Matters" />
        <Copy>
          <p>Meaningful travel creates value far beyond the journey itself.</p>
          <p>Every thoughtfully designed journey supports local entrepreneurs, strengthens destinations, encourages cultural understanding, expands market opportunities, and creates lasting connections between travellers and the places they visit.</p>
          <p>The <strong>Traveleye Travel Collective</strong> promotes travel that is authentic, collaborative, responsible, and People-Powered. By connecting travellers with local tourism enterprises, destinations, and communities, it creates opportunities that benefit both visitors and the people who make travel possible.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Our Areas of Operation" />
          <Copy><p>The <strong>Traveleye Travel Collective</strong> operates across six interconnected travel segments that serve different traveller needs while contributing to one shared purpose—developing and strengthening micro and small tourism enterprises through meaningful journeys and connected travel opportunities.</p></Copy>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {travelSegments.map(({ title, subtitle, text, icon: Icon }) => (
              <article key={title} className="rounded-2xl border-t-4 border-[#1f4f93] bg-white p-6 shadow-sm">
                <Icon className="h-9 w-9 text-[#1f4f93]" />
                <h3 className="mt-4 text-xl font-bold text-[#1f4f93]">{title}</h3>
                <p className="mt-2 font-bold leading-6 text-[#14334a]">{subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Who We Work With" />
          <Copy><p>The <strong>Traveleye Travel Collective</strong> works with a diverse network of tourism stakeholders who contribute to creating meaningful journeys across Sri Lanka and beyond, including:</p></Copy>
          <CheckList items={stakeholders} />
          <Copy><p>Together, these stakeholders contribute to a more connected, collaborative, and resilient tourism ecosystem.</p></Copy>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake} title="A Connected Approach to Travel Development" />
        <Copy>
          <p>The <strong>Traveleye Travel Collective</strong> operates as an integrated travel platform where each area of operation complements and strengthens the others.</p>
          <ul className="mx-auto grid max-w-4xl gap-4 text-left">
            {connectedTravelPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-[#cfe0f6] bg-white px-5 py-4 shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f4f93]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p>Together, these interconnected travel segments strengthen the tourism ecosystem through participation, collaboration, innovation, and shared value creation.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="The Role of the Travel Collective Within the Framework" />
        <Copy>
          <p>The <strong>Traveleye Travel Collective</strong> is one of the four <strong>Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
          <p>Built upon the Framework's <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, <strong>Strategic Pillars</strong>, and <strong>Development Models</strong>, it provides one of the practical mechanisms through which the Framework is implemented.</p>
          <p>Through connected travel opportunities, destination connectivity, market development, enterprise participation, and collaborative travel initiatives, the Travel Collective contributes directly to the Framework's <strong>Tourism Outcomes</strong> while supporting measurable progress through the <strong>People-Powered Tourism Ecosystem Indicators</strong>.</p>
          <p>Together with <strong>Traveleye Host Experiences</strong>, <strong>Traveleye Ecosystem Support</strong>, and <strong>Traveleye Destination Facilitation</strong>, it helps transform the <strong>People-Powered Tourism Framework</strong> into practical action across Sri Lanka's tourism ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Looking Ahead" />
        <Copy>
          <p>As tourism continues to evolve, the <strong>Traveleye Travel Collective</strong> will continue expanding meaningful travel opportunities, strengthening destination connectivity, encouraging domestic discovery, building international relationships, and supporting innovative travel initiatives.</p>
          <p>By connecting travellers with people, places, enterprises, and destinations, the platform will continue supporting the development and strengthening of micro and small tourism enterprises while creating richer visitor experiences, stronger tourism partnerships, resilient destinations, and a thriving <strong>People-Powered Tourism Ecosystem</strong>.</p>
          <p>Because meaningful travel is not simply about reaching a destination.</p>
          <p>It is about the people we meet, the places we experience, the connections we build, and the lasting value we create together.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={BriefcaseBusiness} title="Grow with Traveleye Alliance" />
        <Copy>
          <p>Whether you are a traveller, tourism entrepreneur, tourism enterprise, destination partner, government agency, tourism authority, educational institution, investor, development organisation, or strategic partner, <strong>Traveleye Alliance Sri Lanka</strong> invites you to become part of the <strong>Traveleye Travel Collective</strong>.</p>
          <p>Together, we can create meaningful journeys, strengthen tourism enterprises, connect destinations, expand travel opportunities, and contribute to a stronger <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
