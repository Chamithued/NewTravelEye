import {
  ArrowUpRight,
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
  Store,
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
    subtitle: 'Connecting Sri Lankans with the World Through Meaningful Travel',
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
  'Tourism entrepreneurs',
  'Micro and small tourism enterprises',
  'Stay developers',
  'Hosts and travel experience creators',
  'Tour operators and destination management companies',
  'Transport providers',
  'Local communities',
  'Tourism authorities',
  'Government agencies',
  'Educational institutions',
  'Development organisations',
  'Investors',
  'Strategic partners',
]

const travelBusinesses = [
  { title: 'Traveleye Lanka Journeys', description: 'Sri Lanka Inbound Travel', href: '/sri-lanka-journeys', link: 'Explore Traveleye Lanka Journeys' },
  { title: 'Traveleye Privé Collection', description: 'Premium & Bespoke Travel', href: '/prive-collection', link: 'Explore Traveleye Privé Collection' },
  { title: 'Traveleye Celebrations & Events', description: 'Celebrations, Events & Special Journeys', href: '/celebrations-events', link: 'Explore Traveleye Celebrations & Events' },
  { title: 'Traveleye Bharat Lanka Journeys', description: 'Sri Lanka–India Travel Corridor', href: '/bharat-lanka-journeys', link: 'Explore Bharat Lanka Journeys' },
  { title: 'Traveleye Siam Lanka Journeys', description: 'Sri Lanka–Thailand Travel Corridor', href: '/siam-lanka-journeys', link: 'Explore Traveleye Siam Lanka Journeys' },
  { title: 'Traveleye Viet Lanka Journeys', description: 'Sri Lanka–Vietnam Travel Corridor', href: '/viet-lanka-journeys', link: 'Explore Traveleye Viet Lanka Journeys' },
  { title: 'Traveleye Island Journeys', description: 'Domestic Travel for Sri Lankans', href: '/island-journeys', link: 'Explore Traveleye Island Journeys' },
  { title: 'Traveleye Global Journeys', description: 'Outbound Travel for Sri Lankans', href: '/global-journeys', link: 'Explore Traveleye Global Journeys' },
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
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Connecting Journeys Through People and Places</p>
            <p className="mt-2 text-sm text-white/95 sm:text-base">People &amp; Place-Connected Travel &amp; Tour Business Development</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">To develop and strengthen micro and small travel enterprises by creating meaningful journeys that connect people, places, destinations, opportunities, and tourism partners across Sri Lanka's tourism ecosystem.</p>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Reimagining Travel Through People and Place" />
        <Copy>
          <p>Travel is more than movement between destinations—it is an opportunity to connect people, places, cultures, communities, and experiences in ways that create lasting value for travellers, tourism enterprises, and destinations.</p>
          <p><strong>Traveleye Travel Collective</strong> is one of the five <strong>People-Powered Tourism Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>. It transforms the Framework into practical action by connecting meaningful journeys through people and place while supporting the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</p>
          <p>Rather than viewing travel as a series of isolated products and services, the Travel Collective creates meaningful connections between travellers, destinations, tourism enterprises, host communities, tourism partners, and opportunities. Every journey contributes to stronger tourism enterprises, richer visitor experiences, resilient destinations, collaborative partnerships, and thriving tourism ecosystems.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="Why the Travel Collective Matters" />
        <Copy>
          <p>Meaningful travel creates value far beyond the journey itself.</p>
          <p>Every thoughtfully designed journey supports local entrepreneurs, strengthens destinations, encourages cultural understanding, expands market opportunities, and creates lasting connections between travellers and the places they visit.</p>
          <p>The <strong>Traveleye Travel Collective</strong> promotes travel that is authentic, collaborative, responsible, and people-powered. By connecting travellers with local tourism enterprises, destinations, and communities, it creates opportunities that benefit both visitors and the people who make travel possible.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Our Connected Travel Segments" />
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

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Store} title="Our Travel Businesses" />
          <p className="mt-4 text-center text-lg font-semibold text-[#14334a]">Specialised Travel Businesses Connecting People, Places &amp; Markets</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {travelBusinesses.map(({ title, description, href, link }) => (
              <article key={title} className="flex flex-col rounded-2xl border border-[#dce6f0] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold leading-6 text-[#1f4f93]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#475569]">{description}</p>
                <a href={href} className="mt-6 inline-flex items-center gap-1 font-semibold text-[#1f4f93] hover:text-[#163b70] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4f93]">
                  {link}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
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
          <p>The <strong>People-Powered Tourism Host Model</strong> enables Hosts and Host Teams to participate in connected travel by welcoming travellers, facilitating experiences, and creating meaningful connections with people and places.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="The Role of the Travel Collective Within the Framework" />
        <Copy>
          <p>The <strong>Traveleye Travel Collective</strong> is one of the five <strong>Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
          <p>Built upon the Framework's <strong>Guiding Principles</strong>, <strong>Locally Grounded. Globally Aligned.</strong> foundation, <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Host Model</strong>, and <strong>Revenue Sharing Model</strong>, it provides one of the practical mechanisms through which the Framework is implemented.</p>
          <p>Through connected travel opportunities, destination connectivity, market development, enterprise participation, and collaborative travel initiatives, the Travel Collective contributes directly to the Framework's <strong>Tourism Outcomes</strong> while supporting measurable progress through the <strong>People-Powered Tourism Ecosystem Indicators</strong>.</p>
          <p>Together with <strong>Traveleye Host Experiences</strong>, <strong>Traveleye Habitats</strong>, <strong>Traveleye StoryTrails</strong>, <strong>Traveleye Ecosystem Support Services</strong>, and <strong>Traveleye Destination Facilitation Centres</strong>, it helps transform the <strong>People-Powered Tourism Framework</strong> into practical action across Sri Lanka's tourism ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Looking Ahead" />
        <Copy>
          <p>As tourism continues to evolve, the <strong>Traveleye Travel Collective</strong> will continue expanding meaningful travel opportunities, strengthening destination connectivity, encouraging domestic discovery, building international relationships, and supporting innovative travel initiatives.</p>
          <p>By connecting travellers with people, places, enterprises, and destinations, the platform will continue supporting the development and strengthening of micro and small tourism enterprises while creating richer visitor experiences, stronger tourism partnerships, resilient destinations, and a thriving <strong>People-Powered Tourism Ecosystem</strong>.</p>
          <p>Meaningful travel is more than reaching a destination - it is about the people we meet, the places we experience, the connections we build, and the lasting value we create together.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={BriefcaseBusiness} title="Grow with Traveleye Alliance" />
        <Copy>
          <p>Whether you are a traveller, tourism entrepreneur, tourism enterprise, destination partner, government agency, tourism authority, educational institution, investor, development organisation, or strategic partner, we invite you to become part of the <strong>Traveleye Travel Collective</strong>.</p>
          <p>Contact us at <a href="mailto:travel@traveleye.lk" className="font-semibold text-[#1f4f93] transition-colors hover:text-[#163b70]">travel@traveleye.lk</a> to explore travel opportunities, partnerships, and collaboration.</p>
          <p>Together, we can create meaningful journeys, strengthen tourism enterprises, connect destinations, expand travel opportunities, and contribute to a stronger <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
