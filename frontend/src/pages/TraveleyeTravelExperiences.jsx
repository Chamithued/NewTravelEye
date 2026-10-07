import {
  Compass,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Mail,
  Network,
  Sparkles,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/Develop People & place Inspired Experience.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const supportedCreators = [
  'Experience Creators', 'Tourism Entrepreneurs', 'Local Guides', 'Cultural Practitioners',
  'Artisans & Creative Professionals', 'Farmers & Agricultural Communities', 'Wellness Practitioners',
  'Nature & Adventure Guides', 'Community Organisations', 'Tourism Enterprises',
  'Educational Institutions', 'Development Organisations', 'Strategic Partners',
]

const experienceCategories = [
  'Cultural & Heritage Experiences', 'Nature & Wildlife Experiences', 'Adventure Experiences',
  'Culinary Experiences', 'Agricultural Experiences', 'Wellness Experiences',
  'Creative & Artisan Experiences', 'Community Experiences', 'Educational Experiences',
  'Spiritual & Mindfulness Experiences', 'Conservation Experiences', 'Special Interest Experiences',
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" aria-hidden="true" />
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
    <ul className="mx-auto mt-8 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-[#e5eee8] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
          <span className="mt-0.5 font-bold text-green-700">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TraveleyeTravelExperiences() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="Traveleye StoryTrails" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div>
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">TRAVELEYE</span>
              <span className="block">STORYTRAILS</span>
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Creating Meaningful Experiences Through People and Place</p>
            <p className="mt-2 text-sm font-bold text-white/95 sm:text-base">People &amp; Place-Inspired Travel Experience Development</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Creating Meaningful Experiences That Connect Travellers with People and Place" />
        <Copy>
          <p>The most memorable journeys are not defined simply by the places people visit.</p>
          <p>They are shaped by the people they meet, the stories they discover, the traditions they encounter, the flavours they taste, the landscapes they explore, and the connections they make along the way.</p>
          <p><strong>Traveleye StoryTrails</strong> is the experience development platform of <strong>Traveleye Alliance Sri Lanka</strong>, established to develop and connect meaningful visitor experiences that celebrate Sri Lanka&apos;s people, culture, heritage, nature, traditions, creativity, knowledge, and ways of life while supporting the development and strengthening of micro and small experience enterprises.</p>
          <p>As part of the <strong>People-Powered Tourism Ecosystem</strong>, Traveleye StoryTrails creates opportunities for experience creators, tourism entrepreneurs, local communities, practitioners, and other participants to transform local knowledge, skills, stories, places, and passions into meaningful experiences for travellers.</p>
          <p>Whether developing a cultural encounter, culinary experience, wellness programme, village immersion, nature adventure, agricultural experience, creative workshop, educational programme, or specialised interest experience, every StoryTrails development seeks to create genuine connections between travellers, people, and place while strengthening local tourism enterprises and destination identity.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Target} title="Our Purpose" />
        <Copy><p>To develop and strengthen micro and small experience enterprises by creating meaningful people and place-inspired visitor experiences that celebrate local identity, strengthen tourism enterprises, enrich visitor journeys, and contribute to sustainable destination development.</p></Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Users} title="Who We Support" />
        <Copy><p>We work with people and organisations interested in creating, developing, or strengthening meaningful visitor experiences, including:</p></Copy>
        <CheckList items={supportedCreators} />
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass} title="Our StoryTrails Development Categories" />
        <Copy>
          <p>Every destination has unique stories, traditions, landscapes, knowledge, skills, creativity, and communities waiting to be discovered.</p>
          <p>Traveleye StoryTrails supports the development of a diverse range of people and place-inspired experiences, including:</p>
        </Copy>
        <CheckList items={experienceCategories} />
        <Copy><p>These categories provide a broad canvas for experience development. The most meaningful experiences often emerge by bringing several elements together — people, stories, culture, nature, food, knowledge, creativity, and the distinctive character of a place.</p></Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Lightbulb} title="Our Experience Development Approach" />
        <Copy>
          <p>Every meaningful StoryTrails experience begins by understanding what makes its people and place unique.</p>
          <p>Rather than creating generic tourism activities, we encourage experience creators to discover the stories, knowledge, skills, traditions, landscapes, culture, and everyday life that already exist within a destination and transform them into experiences that travellers can genuinely participate in.</p>
          <p>An experience may invite travellers to learn, create, taste, explore, work alongside local people, hear stories, discover traditions, or simply see a familiar place through a different perspective.</p>
          <p>By transforming local knowledge and authentic resources into engaging visitor experiences, experience creators can strengthen tourism enterprises, create new income opportunities, enrich visitor journeys, and contribute to more vibrant destinations.</p>
          <p><strong>Discover People &amp; Place → Uncover Stories → Design Meaningful Experiences → Create Genuine Connections → Strengthen Local Tourism</strong></p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={HeartHandshake} title="Meaningful Visitor Experiences" />
        <Copy>
          <p>At Traveleye StoryTrails, an experience becomes meaningful when it creates a genuine connection between the traveller and the destination.</p>
          <p>Every StoryTrails experience should inspire curiosity, encourage participation, celebrate local identity, and leave travellers with memories that extend beyond sightseeing.</p>
          <p>Through interaction, storytelling, creativity, learning, discovery, and shared experiences, travellers become participants rather than simply observers — gaining a deeper understanding of the people and places they encounter.</p>
          <p>Through the <strong>People-Powered Tourism Host Model</strong>, Traveleye StoryTrails creates opportunities for Experience Hosts and Host Teams to welcome, guide, facilitate, and create meaningful connections with travellers.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Leaf} title="Sustainability & Shared Stewardship" />
        <Copy>
          <p>Meaningful experiences should also contribute to protecting the people, culture, communities, and places that make them possible.</p>
          <p>Traveleye StoryTrails encourages responsible tourism practices that respect local culture, preserve heritage, protect natural environments, strengthen community participation, and create shared economic value.</p>
          <p>Through shared stewardship, experience creators and destination stakeholders can help ensure that tourism remains a positive force for communities and places, benefiting both present and future generations.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Network} title="Choose Your StoryTrails Pathway" />
        <Copy>
          <p>Every experience creator has a unique vision.</p>
          <p>Some want to develop and operate their own independent experience business. Others may want professional support to transform an idea, local skill, or existing tourism activity into a stronger market-ready experience. Some may wish to become part of a recognised network connected through a shared philosophy, quality approach, market visibility, and commitment to People-Powered Tourism.</p>
          <p>Traveleye StoryTrails offers two pathways to support your journey.</p>
        </Copy>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#dfe8f1] bg-[#eef4fa] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Operate Under Your Own Brand</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>Develop and grow your own experience enterprise under your own brand and business identity, with professional guidance and development support from Traveleye StoryTrails.</p>
              <p>Whether you are creating your first visitor experience, improving an existing tourism product, or developing a portfolio of experiences, we can support you with experience design, product development, positioning, customer thinking, market readiness, and other capabilities needed to transform your ideas into meaningful and sustainable experiences.</p>
              <p>You retain your own brand, ownership, and business identity while benefiting from the knowledge and support of the Traveleye StoryTrails platform.</p>
            </div>
          </article>
          <article className="rounded-2xl border border-[#dfe8f1] bg-[#eef4fa] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Powered by Traveleye StoryTrails</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>Experience creators seeking a deeper partnership may choose to develop and deliver their experiences as <strong>Powered by Traveleye StoryTrails</strong> experiences.</p>
              <p>This pathway is designed for experience creators who wish to align with the Traveleye StoryTrails philosophy, people and place-inspired development approach, quality standards, and future collaborative marketing opportunities while continuing to own and operate their businesses independently.</p>
              <p>As the Traveleye StoryTrails Network develops, participating experience creators may benefit from shared branding, professional support, market visibility, knowledge sharing, technology, partnerships, and collaborative growth.</p>
              <p>The objective is to create a connected portfolio of meaningful experiences that remain rooted in their local communities and destinations while reaching wider tourism markets.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="Our Philosophy" />
        <Copy>
          <p>We believe every community has stories worth sharing, every destination has experiences worth discovering, and every person has the potential to create something meaningful for travellers.</p>
          <p>A great travel experience should not simply show people a destination. It should help them connect with it.</p>
          <p>By developing experiences inspired by people and place, we seek to celebrate authentic culture, strengthen local entrepreneurship, encourage community participation, preserve and share local knowledge, and create memorable journeys that benefit travellers, destinations, and future generations.</p>
          <p>The role of Traveleye StoryTrails is not to standardise experiences. It is to help experience creators discover what makes their experience special, develop it with purpose, and connect it with travellers who value meaningful encounters.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake} title="Grow with Traveleye StoryTrails" />
        <Copy>
          <p>Whether you are developing your first visitor experience, expanding an existing tourism product, sharing your local knowledge, turning a skill or passion into a tourism opportunity, or creating innovative ways for travellers to discover Sri Lanka, Traveleye StoryTrails invites you to develop your idea with us.</p>
          <p>You may choose to operate under your own brand or become a <strong>Powered by Traveleye StoryTrails</strong> experience creator.</p>
          <p>Whatever pathway you choose, our objective is the same: to help you transform local knowledge, creativity, skills, stories, and places into meaningful experiences that strengthen your enterprise and enrich the traveller&apos;s journey.</p>
          <p>Together, we can develop stronger experience enterprises, create richer visitor experiences, strengthen destination identity, and build a thriving <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Mail} title="Create Your StoryTrails Experience" />
        <Copy>
          <p>Every meaningful experience begins with something already present — a story, a skill, a place, a tradition, a passion, a person, or a community.</p>
          <p>Perhaps you are planning your first travel experience, expanding an existing tourism product, sharing your local knowledge, developing a new community experience, or looking for new ways to connect travellers with your destination.</p>
          <p>Whatever your starting point, Traveleye StoryTrails can help you explore the opportunity, strengthen the concept, develop the experience, and prepare it for travellers.</p>
          <p>Turn what you know, what you love, and what your place has to offer into an experience worth discovering.</p>
          <p>Whether you choose to develop your own independent experience or become a <strong>Powered by Traveleye StoryTrails</strong> experience creator, we are ready to help you create meaningful experiences inspired by people and place.</p>
          <p>
            Contact us at{' '}
            <a className="font-semibold text-[#1f4f93]" href="mailto:storytrails@traveleye.lk">
              storytrails@traveleye.lk
            </a>{' '}
            to explore experience development and collaboration opportunities.
          </p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
