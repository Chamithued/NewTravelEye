import {
  BriefcaseBusiness,
  Handshake,
  HeartHandshake,
  House,
  Leaf,
  Network,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/Host Experiencesnew.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const hostStayAreas = [
  'Heritage Host Stays', 'Nature Host Stays', 'Coastal Host Stays',
  'Rural & Village Host Stays', 'Agricultural & Farm Host Stays',
  'Wellness & Retreat Host Stays', 'Boutique Host Stays', 'Eco Host Stays',
  'Family Host Stays', 'Other Themed Host Stays',
]

const travelExperienceAreas = [
  'Cultural & Heritage Experiences', 'Nature & Wildlife Experiences',
  'Adventure Experiences', 'Culinary Experiences', 'Agricultural Experiences',
  'Wellness Experiences', 'Creative & Artisan Experiences', 'Community Experiences',
  'Educational Experiences', 'Spiritual & Mindfulness Experiences',
  'Conservation Experiences', 'Special Interest Experiences',
]

const participants = [
  'Local Hosts & Hospitality Providers', 'Travel Experience Creators', 'Tourism Entrepreneurs',
  'Micro & Small Tourism Enterprises', 'Women & Youth Entrepreneurs',
  'Artisans & Cultural Practitioners', 'Farmers & Local Producers',
  'Wellness Practitioners', 'Nature & Adventure Guides', 'Community Organisations',
  'Tourism Authorities', 'Educational Institutions', 'Development Organisations',
  'Strategic Partners', 'Travellers seeking meaningful experiences',
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

function Copy({ children, className = '' }) {
  return <div className={`mx-auto mt-6 max-w-5xl space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8 ${className}`}>{children}</div>
}

function CheckList({ items }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-[#e5eee8] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
          <span className="mt-0.5 font-bold text-green-700">✓</span><span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function HostExperiences() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="Traveleye Host Experiences" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div>
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">Traveleye</span><span className="block">Host Experiences</span>
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Crafted Through People and Place</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Our Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To develop and strengthen micro and small host stay and travel experience enterprises by creating authentic place-inspired host stays and meaningful people and place-inspired travel experiences across Sri Lanka's tourism ecosystem.
          </p>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Creating Meaningful Tourism Through People and Place" />
        <Copy>
          <p>Tourism becomes truly meaningful when travellers connect with the people, places, cultures, traditions, and everyday life that make each destination unique.</p>
          <p><strong>Traveleye Host Experiences</strong> is one of the four <strong>People-Powered Tourism Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>. It transforms the Framework into practical action by developing authentic place-inspired host stays and meaningful people and place-inspired travel experiences while supporting the development and strengthening of micro and small tourism enterprises across Sri Lanka.</p>
          <p>Rather than treating accommodation and visitor experiences as separate tourism products, <strong>Traveleye Host Experiences</strong> brings them together through authentic hospitality, local participation, cultural identity, creativity, wellness, nature, and shared human connection.</p>
          <p>Every host stay and every travel experience creates opportunities to strengthen tourism enterprises, enrich visitor experiences, celebrate destination identity, and generate lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={HeartHandshake} title="Why Host Experiences Matter" />
        <Copy>
          <p>Today's travellers increasingly seek experiences that are authentic, personal, and deeply connected to local people and places.</p>
          <p>Meaningful host stays and travel experiences encourage visitors to explore destinations beyond traditional sightseeing while creating new opportunities for local hosts, experience creators, tourism entrepreneurs, families, artisans, farmers, wellness practitioners, guides, and communities.</p>
          <p>By encouraging participation, entrepreneurship, collaboration, stewardship, and innovation, <strong>Traveleye Host Experiences</strong> helps tourism remain locally rooted while creating memorable visitor experiences that benefit travellers, destinations, and local tourism enterprises.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="How We Develop Host Experiences" />
          <Copy>
            <p><strong>Traveleye Host Experiences</strong> brings together two specialised product development brands-<strong>TraveleyeHostNest</strong> and <strong>TraveleyeStoryTrail</strong>.</p>
            <p>Together, they develop authentic place-inspired host stays and meaningful people and place-inspired travel experiences while supporting the development and strengthening of micro and small host stay and travel experience enterprises across Sri Lanka.</p>
          </Copy>
          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            <article className="rounded-2xl border-t-4 border-[#1f4f93] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
              <House className="h-9 w-9 text-[#1f4f93]" />
              <h3 className="mt-4 text-2xl font-bold text-[#1f4f93]">TraveleyeHostNest</h3>
              <p className="mt-2 font-bold text-[#14334a]">Creating Authentic Stays Through Place</p>
              <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base"><strong>TraveleyeHostNest</strong> focuses on developing place-inspired accommodation that reflects the unique identity, culture, hospitality, traditions, architecture, landscapes, and character of each destination while creating sustainable opportunities for local hosts and tourism entrepreneurs.</p>
              <p className="mt-5 font-bold text-[#14334a]">Development Categories</p>
              <CheckList items={hostStayAreas} />
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">Every <strong>TraveleyeHostNest</strong> stay celebrates authentic hospitality, strengthens local tourism enterprises, and creates meaningful connections between travellers and the places they visit.</p>
            </article>
            <article className="rounded-2xl border-t-4 border-[#1f4f93] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
              <Leaf className="h-9 w-9 text-[#1f4f93]" />
              <h3 className="mt-4 text-2xl font-bold text-[#1f4f93]">TraveleyeStoryTrail</h3>
              <p className="mt-2 font-bold text-[#14334a]">Creating Meaningful Experiences Through People and Place</p>
              <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base"><strong>TraveleyeStoryTrail</strong> focuses on developing people and place-inspired visitor experiences that celebrate Sri Lanka's culture, heritage, landscapes, traditions, creativity, and everyday life while creating sustainable opportunities for local experience creators and tourism enterprises.</p>
              <p className="mt-5 font-bold text-[#14334a]">Development Categories</p>
              <CheckList items={travelExperienceAreas} />
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">Every <strong>TraveleyeStoryTrail</strong> experience is designed to celebrate local identity while encouraging participation, entrepreneurship, collaboration, and shared value creation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Who We Work With" />
          <Copy><p><strong>Traveleye Host Experiences</strong> brings together a diverse network of participants who contribute to creating authentic host stays and meaningful travel experiences, including:</p></Copy>
          <CheckList items={participants} />
          <Copy><p>Together, these participants contribute to stronger tourism enterprises, richer visitor experiences, resilient destinations, and thriving tourism ecosystems.</p></Copy>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake} title="A Connected Approach to Hospitality and Experiences" />
        <Copy>
          <p><strong>Traveleye Host Experiences</strong> is built upon the belief that meaningful tourism is created through genuine relationships between people and place.</p>
          <p><strong>TraveleyeHostNest</strong> develops authentic place-inspired accommodation that reflects the unique identity, hospitality, culture, and character of each destination. <strong>TraveleyeStoryTrail</strong> develops meaningful people and place-inspired experiences that celebrate local culture, heritage, nature, creativity, traditions, and everyday life.</p>
          <p>Together, these two complementary product development brands create authentic hospitality, meaningful visitor experiences, stronger tourism enterprises, and more vibrant destinations while generating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="The Role of Host Experiences Within the Framework" />
        <Copy>
          <p><strong>Traveleye Host Experiences</strong> is one of the four <strong>Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
          <p>Built upon the Framework's <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, <strong>Strategic Pillars</strong>, and <strong>Development Models</strong>, it provides one of the practical mechanisms through which the Framework is implemented.</p>
          <p>By developing authentic place-inspired <strong>TraveleyeHostNest</strong> stays, meaningful people and place-inspired <strong>TraveleyeStoryTrail</strong> experiences, local entrepreneurship, and authentic hospitality, Host Experiences contributes directly to the Framework's <strong>Tourism Outcomes</strong> while supporting measurable progress through the <strong>People-Powered Tourism Ecosystem Indicators</strong>.</p>
          <p>Together with <strong>Traveleye Travel Collective</strong>, <strong>Traveleye Destination Facilitation</strong>, and <strong>Traveleye Ecosystem Support</strong>, it transforms the <strong>People-Powered Tourism Framework</strong> into practical action across Sri Lanka's tourism ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Looking Ahead" />
        <Copy>
          <p>As tourism continues to evolve, <strong>Traveleye Host Experiences</strong> will continue expanding opportunities for authentic hospitality, experience creation, and local entrepreneurship.</p>
          <p>By encouraging innovation, participation, collaboration, and shared stewardship, the platform will continue supporting the development and strengthening of micro and small <strong>TraveleyeHostNest</strong> and <strong>TraveleyeStoryTrail</strong> enterprises while creating richer visitor experiences, stronger destinations, and a more connected <strong>People-Powered Tourism Ecosystem</strong>.</p>
          <p>Because the most meaningful journeys are not defined simply by where people travel.</p>
          <p>They are shaped by the people who welcome them, the places they experience, and the stories they share along the way.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={BriefcaseBusiness} title="Grow with Traveleye Alliance" />
        <Copy>
          <p>Whether you are a host, experience creator, tourism entrepreneur, tourism enterprise, community organisation, government agency, tourism authority, educational institution, development organisation, investor, strategic partner, or traveller, <strong>Traveleye Alliance Sri Lanka</strong> invites you to become part of <strong>Traveleye Host Experiences</strong>.</p>
          <p>Together, we can develop and strengthen micro and small <strong>TraveleyeHostNest</strong> and <strong>TraveleyeStoryTrail</strong> enterprises while creating authentic host stays, meaningful travel experiences, stronger destinations, and a thriving <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake} title="Create Authentic Host Stays and Travel Experiences" />
        <Copy>
          <p>Whether you are planning a host stay, creating a travel experience, strengthening an existing tourism enterprise, or exploring new opportunities within Sri Lanka&apos;s tourism ecosystem, <strong>Traveleye Host Experiences</strong> is ready to support your journey through collaboration, guidance, and practical development.</p>
          <p>Contact us at <a href="mailto:hostexperiences@traveleye.lk" className="font-semibold text-[#1f4f93]">hostexperiences@traveleye.lk</a> to explore host stay development, travel experience development, and collaboration opportunities.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
