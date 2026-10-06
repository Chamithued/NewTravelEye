import {
  BriefcaseBusiness,
  Home,
  Leaf,
  MapPinned,
  Network,
  Sparkles,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/subhero/Develop Place Inspired Stays.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const supportedGroups = [
  'Aspiring Hosts',
  'Accommodation Entrepreneurs',
  'Existing Accommodation Providers',
  'Villas',
  'Boutique Hotels',
  'Eco Lodges',
  'Heritage Houses',
  'Tree Houses',
  'Farm Stays',
  'Retreats',
  'Camping & Glamping Operators',
  'Community Organisations',
  'Tourism Investors',
  'Development Organisations',
  'Strategic Partners',
]

const accommodationCategories = [
  'Heritage Host Stays',
  'Nature Host Stays',
  'Coastal Host Stays',
  'Rural & Village Host Stays',
  'Agricultural & Farm Host Stays',
  'Wellness & Retreat Host Stays',
  'Boutique Host Stays',
  'Eco Host Stays',
  'Family Host Stays',
  'Tree Houses',
  'Camping & Glamping',
  'Other Themed Host Stays',
]

function IconBadge({ icon: Icon }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <IconBadge icon={Icon} />
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function Copy({ children, className = '' }) {
  return <div className={`mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8 ${className}`}>{children}</div>
}

function ItemGrid({ items }) {
  return (
    <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="flex min-h-20 items-center gap-4 rounded-lg border border-[#e6edf5] bg-white p-4 shadow-sm">
          <IconBadge icon={Home} />
          <p className="text-sm font-medium leading-6 text-[#141414]">{item}</p>
        </div>
      ))}
    </div>
  )
}

function PathwayCard({ title, children }) {
  return (
    <article className="rounded-2xl border border-[#dbe5f0] bg-white p-6 text-left shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">{title}</h3>
      <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
    </article>
  )
}

export default function HostStays() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Traveleye HostNest" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center text-white">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block">Traveleye</span>
              <span className="block">HostNest</span>
            </h1>
            <p className="mt-4 text-sm font-bold sm:text-base lg:text-lg">Creating Authentic Stays Through Place</p>
            <p className="mt-2 text-sm font-bold sm:text-base">Place-Inspired Accommodation Development</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Home} title="Creating Authentic Places Where Every Stay Reflects Its Destination" />
        <Copy className="max-w-5xl">
          <p>A memorable stay is more than comfortable accommodation.</p>
          <p>It reflects the character of a place, the warmth of its people, the richness of its culture, and the stories that make every destination unique.</p>
          <p><strong>Traveleye HostNest</strong> is the place-inspired accommodation development brand of <strong>Traveleye Host Experiences</strong>, established to develop authentic place-inspired host stays that celebrate Sri Lanka&apos;s landscapes, heritage, architecture, traditions, communities, and hospitality while supporting the development and strengthening of micro and small accommodation enterprises.</p>
          <p>As part of the <strong>People-Powered Tourism Ecosystem</strong>, Traveleye HostNest encourages accommodation that is rooted in local identity rather than standardisation, creating meaningful experiences for travellers while generating sustainable opportunities for hosts, entrepreneurs, families, and communities.</p>
          <p>Whether developing a boutique villa, eco lodge, heritage house, farm stay, retreat, or another themed accommodation, every <strong>Traveleye HostNest</strong> is designed to create genuine connections between people and place.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="Our Purpose" />
        <Copy><p>To develop and strengthen micro and small host stay enterprises by creating authentic place-inspired accommodation that celebrates local identity, strengthens tourism enterprises, enriches visitor experiences, and contributes to sustainable destination development.</p></Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={UsersRound} title="Who We Support" />
        <Copy><p>We work with people and organisations interested in developing authentic accommodation experiences, including:</p></Copy>
        <ItemGrid items={supportedGroups} />
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={BriefcaseBusiness} title="Our HostNest Development Categories" />
        <Copy>
          <p>Every destination offers unique opportunities to create accommodation inspired by its landscape, heritage, culture, and community.</p>
          <p>Traveleye HostNest supports the development of a diverse range of place-inspired accommodation, including:</p>
        </Copy>
        <ItemGrid items={accommodationCategories} />
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={MapPinned} title="Our Place-Inspired Development Approach" />
        <Copy>
          <p>Every successful Traveleye HostNest begins by understanding the unique identity of its location.</p>
          <p>Rather than replicating accommodation concepts from elsewhere, we encourage hosts to develop stays that celebrate local architecture, culture, traditions, craftsmanship, cuisine, nature, history, and community life.</p>
          <p>This creates accommodation that is authentic, distinctive, and memorable while strengthening destination identity and supporting local economies.</p>
          <p><strong>Discover the Place → Celebrate Local Identity → Design Authentic Hospitality → Create Meaningful Guest Experiences → Strengthen Local Tourism</strong></p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Authentic Hospitality" />
        <Copy>
          <p>At Traveleye HostNest, hospitality is about creating genuine human connections.</p>
          <p>Guests are welcomed not simply as visitors but as participants in the destination&apos;s story.</p>
          <p>Authentic hospitality reflects local traditions, personalised service, cultural pride, and sincere care, creating memorable stays that leave lasting impressions.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Leaf} title="Sustainability & Stewardship" />
        <Copy>
          <p>Place-inspired accommodation should also protect the places that make it special.</p>
          <p>Traveleye HostNest encourages responsible resource management, environmental stewardship, community participation, cultural preservation, and sustainable business practices that benefit both present and future generations.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Network} title="Choose Your HostNest Pathway" />
        <Copy>
          <p>Every tourism entrepreneur has different aspirations.</p>
          <p>Some wish to develop and operate their own independent accommodation brand, while others may prefer to become part of a recognised network that reflects shared standards, authentic hospitality, and the People-Powered Tourism philosophy.</p>
          <p>Traveleye HostNest offers two pathways to support your journey.</p>
        </Copy>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
          <PathwayCard title="Operate Under Your Own Brand">
            <p>Receive comprehensive support through <strong>Traveleye Host Experiences</strong> to develop, establish, strengthen, and grow your own host stay under your own brand and business identity.</p>
            <p>Whether you are starting a new accommodation enterprise or enhancing an existing property, Traveleye Host Experiences provides the professional guidance, knowledge, and development support needed to transform your vision into a successful and sustainable host stay.</p>
          </PathwayCard>
          <PathwayCard title="Powered by Traveleye HostNest">
            <p>Entrepreneurs seeking a deeper partnership may choose to develop and operate their accommodation as a <strong>Powered by Traveleye HostNest™</strong> property.</p>
            <p>This pathway is designed for entrepreneurs who wish to align with the Traveleye HostNest philosophy, place-inspired hospitality approach, quality standards, and future collaborative marketing opportunities while continuing to own and operate their businesses independently.</p>
            <p>As the Traveleye HostNest Network evolves, participating properties will have opportunities to benefit from shared branding, professional support, market visibility, knowledge sharing, and collaborative growth while remaining independently owned and managed.</p>
          </PathwayCard>
        </div>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Home} title="Our Philosophy" />
        <Copy>
          <p>We believe every destination has its own story, and every Traveleye HostNest should help tell it.</p>
          <p>By creating accommodation inspired by place rather than imitation, we strengthen local identity, celebrate authentic hospitality, support tourism entrepreneurs, and create memorable experiences that connect travellers with the true spirit of Sri Lanka.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={UsersRound} title="Grow with Traveleye HostNest" />
        <Copy>
          <p>Whether you are planning your first accommodation business, upgrading an existing property, developing a themed stay, or seeking to create more authentic guest experiences, Traveleye HostNest invites you to begin your journey with us.</p>
          <p>Whether you choose to develop your own independent host stay or become a <strong>Powered by Traveleye HostNest™</strong> property, we are committed to helping you create authentic accommodation that celebrates place, strengthens your enterprise, and delivers meaningful guest experiences.</p>
          <p>Together, we can develop stronger host stay enterprises, richer visitor experiences, and more vibrant destinations while creating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Home} title="Start Your HostNest Journey" />
        <Copy>
          <p>Whether you are exploring a new host stay concept, transforming an existing property, or interested in becoming a <strong>Powered by Traveleye HostNest</strong> property, we are ready to help you create authentic host stays inspired by people and place.</p>
          <p>Contact us at <a href="mailto:hostnest@traveleye.lk" className="font-semibold text-[#1f4f93]">hostnest@traveleye.lk</a> to explore HostNest development and partnership opportunities.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
