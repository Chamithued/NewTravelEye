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
  'Family Host Stays',
]

const travelExperienceAreas = [
  'Cultural & Heritage Experiences', 'Nature & Wildlife Experiences',
  'Adventure Experiences', 'Culinary Experiences', 'Agricultural Experiences',
  'Wellness Experiences', 'Creative & Artisan Experiences', 'Community Experiences',
  'Educational Experiences', 'Spiritual & Mindfulness Experiences',
  'Conservation Experiences', 'Special Interest Experiences',
]

const participants = [
  'Local hosts and hospitality providers', 'Experience creators', 'Tourism entrepreneurs',
  'Micro and small tourism enterprises', 'Women and youth entrepreneurs',
  'Artisans and cultural practitioners', 'Farmers and local producers',
  'Wellness practitioners', 'Nature and adventure guides', 'Community organisations',
  'Tourism authorities', 'Educational institutions', 'Development organisations',
  'Strategic partners', 'Travellers seeking meaningful experiences',
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
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To develop and strengthen micro and small host stay and experience enterprises by creating authentic place-inspired host stays and people and place-inspired travel experiences across Sri Lanka's tourism ecosystem.
          </p>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Creating Meaningful Experiences Through People and Place" />
        <Copy>
          <p>Tourism becomes truly meaningful when travellers connect with the people, places, cultures, traditions, and everyday life that make each destination unique.</p>
          <p><strong>Traveleye Host Experiences</strong> is one of the four <strong>People-Powered Tourism Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>. It transforms the Framework into practical action by developing authentic place-inspired host stays and people and place-inspired travel experiences while supporting the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem.</p>
          <p>Rather than treating accommodation and tourism experiences as separate activities, Host Experiences brings them together through authentic hospitality, local participation, cultural identity, creativity, wellness, nature, and shared human connection. Every host stay and every travel experience creates opportunities to strengthen tourism enterprises, enrich visitor experiences, celebrate destination identity, and generate lasting value for people, places, partnerships, and prosperity.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={HeartHandshake} title="Why Host Experiences Matter" />
        <Copy>
          <p>Travellers increasingly seek experiences that are authentic, personal, and connected to local people and places.</p>
          <p>Meaningful host stays and travel experiences encourage visitors to engage with destinations beyond traditional sightseeing while creating new opportunities for local hosts, experience creators, tourism entrepreneurs, families, artisans, farmers, wellness practitioners, guides, and communities.</p>
          <p>By encouraging participation, entrepreneurship, collaboration, stewardship, and innovation, <strong>Traveleye Host Experiences</strong> helps tourism remain locally rooted while creating memorable visitor experiences that benefit travellers, destinations, and local tourism enterprises.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Our Areas of Operation" />
          <Copy><p>The <strong>Traveleye Host Experiences</strong> platform operates across two interconnected areas that together create authentic visitor experiences while supporting the development and strengthening of micro and small host stay and experience enterprises.</p></Copy>
          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            <article className="rounded-2xl border-t-4 border-[#1f4f93] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
              <House className="h-9 w-9 text-[#1f4f93]" />
              <h3 className="mt-4 text-2xl font-bold text-[#1f4f93]">Host Stays</h3>
              <p className="mt-2 font-bold text-[#14334a]">Creating Authentic Places to Stay</p>
              <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">Host Stays focus on developing place-inspired accommodation that reflects the unique identity, culture, hospitality, traditions, and character of each destination while creating sustainable opportunities for local hosts and tourism entrepreneurs.</p>
              <p className="mt-5 font-bold text-[#14334a]">Areas include:</p>
              <CheckList items={hostStayAreas} />
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">Every host stay encourages authentic hospitality while strengthening local tourism enterprises and creating meaningful connections between travellers and destinations.</p>
            </article>
            <article className="rounded-2xl border-t-4 border-[#1f4f93] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
              <Leaf className="h-9 w-9 text-[#1f4f93]" />
              <h3 className="mt-4 text-2xl font-bold text-[#1f4f93]">Travel Experiences</h3>
              <p className="mt-2 font-bold text-[#14334a]">Creating Meaningful Experiences Through People and Place</p>
              <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">Travel Experiences focus on developing people and place-inspired experiences that celebrate Sri Lanka's culture, heritage, landscapes, traditions, creativity, and everyday life while creating opportunities for local experience creators and tourism enterprises.</p>
              <p className="mt-5 font-bold text-[#14334a]">Areas include:</p>
              <CheckList items={travelExperienceAreas} />
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">Every travel experience is designed to celebrate local identity while encouraging participation, entrepreneurship, and shared value creation.</p>
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
          <p>Place-inspired host stays provide authentic hospitality rooted in local identity.</p>
          <p>People and place-inspired travel experiences bring destinations to life through culture, nature, heritage, creativity, and community participation.</p>
          <p>Together, these two interconnected areas of operation create richer visitor experiences while supporting local entrepreneurship, strengthening tourism enterprises, celebrating destination identity, and encouraging shared stewardship.</p>
          <p>Working together, they contribute to resilient destinations, collaborative partnerships, and thriving tourism ecosystems that create lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="The Role of Host Experiences Within the Framework" />
        <Copy>
          <p><strong>Traveleye Host Experiences</strong> is one of the four <strong>Operational Platforms</strong> of the <strong>People-Powered Tourism Framework</strong>.</p>
          <p>Built upon the Framework's <strong>Guiding Principles</strong>, <strong>Global Alignment</strong>, <strong>Strategic Pillars</strong>, and <strong>Development Models</strong>, it provides one of the practical mechanisms through which the Framework is implemented.</p>
          <p>By developing authentic place-inspired host stays, people and place-inspired travel experiences, local entrepreneurship, and authentic hospitality, Host Experiences contributes directly to the Framework's <strong>Tourism Outcomes</strong> while supporting measurable progress through the <strong>People-Powered Tourism Ecosystem Indicators</strong>.</p>
          <p>Together with the <strong>Traveleye Travel Collective</strong>, <strong>Traveleye Ecosystem Support</strong>, and <strong>Traveleye Destination Facilitation</strong>, it helps transform the <strong>People-Powered Tourism Framework</strong> into practical action across Sri Lanka's tourism ecosystem.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Looking Ahead" />
        <Copy>
          <p>As tourism continues to evolve, <strong>Traveleye Host Experiences</strong> will continue expanding opportunities for authentic hospitality, experience creation, and local entrepreneurship.</p>
          <p>By encouraging innovation, participation, collaboration, and shared stewardship, the platform will continue supporting the development and strengthening of micro and small host stay and experience enterprises while creating richer visitor experiences, stronger destinations, and more connected tourism ecosystems.</p>
          <p>Because the most meaningful journeys are not defined simply by where people travel.</p>
          <p>They are shaped by the people who welcome them, the places they experience, and the stories they share along the way.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={BriefcaseBusiness} title="Grow with Traveleye Alliance" />
        <Copy>
          <p>Whether you are a host, experience creator, tourism entrepreneur, tourism enterprise, community organisation, government agency, tourism authority, educational institution, development organisation, investor, strategic partner, or traveller, <strong>Traveleye Alliance Sri Lanka</strong> invites you to become part of <strong>Traveleye Host Experiences</strong>.</p>
          <p>Together, we can develop and strengthen micro and small host stay and experience enterprises while creating authentic hospitality, meaningful visitor experiences, stronger destinations, and a thriving <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
