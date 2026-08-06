import {
  Compass,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
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
        <img src={heroImg} alt="Traveleye StoryTrail" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div>
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              TRAVELEYE STORYTRAIL
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Creating Meaningful Experiences Through People</p>
            <p className="mt-2 text-sm font-bold text-white/95 sm:text-base">People &amp; Place-Inspired Experience Development</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sparkles} title="Creating Authentic Experiences That Connect Travellers with People and Place" />
        <Copy>
          <p>The most memorable journeys are not defined simply by the places people visit.</p>
          <p>They are shaped by the people they meet, the stories they hear, the traditions they experience, the flavours they taste, the landscapes they explore, and the genuine connections they create along the way.</p>
          <p><strong>TraveleyeStoryTrail</strong> is the people and place-inspired experience development brand of <strong>Traveleye Host Experiences</strong>, established to develop authentic travel experiences that celebrate Sri Lanka&apos;s people, culture, heritage, nature, traditions, creativity, and local way of life while supporting the development and strengthening of micro and small experience enterprises.</p>
          <p>As part of the <strong>People-Powered Tourism Ecosystem</strong>, TraveleyeStoryTrail encourages tourism experiences that are locally inspired, community connected, and authentically delivered, creating meaningful opportunities for experience creators, entrepreneurs, local communities, and travellers.</p>
          <p>Whether developing a cultural encounter, culinary journey, wellness retreat, village experience, nature adventure, or specialised interest experience, every TraveleyeStoryTrail experience is designed to create lasting memories while strengthening destination identity and local tourism enterprises.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Target} title="Our Purpose" />
        <Copy><p>To develop and strengthen micro and small travel experience enterprises by creating meaningful people and place-inspired visitor experiences that celebrate local identity, strengthen tourism enterprises, enrich visitor journeys, and contribute to sustainable destination development.</p></Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Users} title="Who We Support" />
        <Copy><p>We work with people and organisations interested in creating authentic visitor experiences, including:</p></Copy>
        <CheckList items={supportedCreators} />
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass} title="Our StoryTrail Development Categories" />
        <Copy>
          <p>Every destination has unique stories, traditions, landscapes, skills, and communities waiting to be experienced.</p>
          <p>TraveleyeStoryTrail supports the development of a diverse range of people and place-inspired experiences, including:</p>
        </Copy>
        <CheckList items={experienceCategories} />
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Lightbulb} title="Our Experience Development Approach" />
        <Copy>
          <p>Every meaningful TraveleyeStoryTrail experience begins with understanding what makes a destination unique.</p>
          <p>Rather than creating generic tourism activities, we encourage experience creators to design experiences inspired by local people, culture, heritage, traditions, landscapes, creativity, and everyday life.</p>
          <p>By transforming local knowledge and authentic traditions into engaging visitor experiences, experience creators contribute to stronger tourism enterprises, more memorable journeys, and vibrant destinations.</p>
          <p><strong>Discover Local Stories → Celebrate People &amp; Place → Design Authentic Experiences → Create Meaningful Visitor Connections → Strengthen Local Tourism</strong></p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={HeartHandshake} title="Meaningful Visitor Experiences" />
        <Copy>
          <p>At TraveleyeStoryTrail, meaningful experiences create genuine connections between visitors and destinations.</p>
          <p>Every StoryTrail experience should inspire curiosity, encourage participation, celebrate local identity, and leave travellers with lasting memories that extend beyond sightseeing.</p>
          <p>By encouraging interaction, storytelling, creativity, learning, and shared experiences, TraveleyeStoryTrail transforms visitors from observers into active participants in the destination.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Leaf} title="Sustainability & Shared Stewardship" />
        <Copy>
          <p>Authentic experiences should also contribute to protecting the places and communities that make them possible.</p>
          <p>TraveleyeStoryTrail encourages responsible tourism practices that respect local culture, preserve heritage, protect natural environments, strengthen community participation, and create shared economic value.</p>
          <p>Through shared stewardship, experience creators help ensure tourism continues to benefit both present and future generations.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Network} title="Choose Your StoryTrail Pathway" />
        <Copy>
          <p>Every experience creator has a unique vision.</p>
          <p>Some wish to develop and operate their own independent experience brand, while others may prefer to become part of a recognised network that reflects authentic experiences, shared standards, and the People-Powered Tourism philosophy.</p>
          <p>TraveleyeStoryTrail offers two pathways to support your journey.</p>
        </Copy>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#dfe8f1] bg-[#eef4fa] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Operate Under Your Own Brand</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>Receive comprehensive support through <strong>Traveleye Host Experiences</strong> to develop, establish, strengthen, and grow your own travel experience enterprise under your own brand and business identity.</p>
              <p>Whether you are creating your first visitor experience or expanding an existing tourism product, Traveleye Host Experiences provides the professional guidance, knowledge, and development support needed to transform your ideas into authentic and memorable visitor experiences.</p>
            </div>
          </article>
          <article className="rounded-2xl border border-[#dfe8f1] bg-[#eef4fa] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Powered by TraveleyeStoryTrail</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>Experience creators seeking a deeper partnership may choose to develop and deliver their visitor experiences as <strong>Powered by TraveleyeStoryTrail</strong> experiences.</p>
              <p>This pathway is designed for experience creators who wish to align with the TraveleyeStoryTrail philosophy, people and place-inspired experience approach, quality standards, and future collaborative marketing opportunities while continuing to own and operate their businesses independently.</p>
              <p>As the TraveleyeStoryTrail Network evolves, participating experience creators will have opportunities to benefit from shared branding, professional support, market visibility, knowledge sharing, and collaborative growth while remaining independently owned and managed.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Sprout} title="Our Philosophy" />
        <Copy>
          <p>We believe every community has stories worth sharing, every destination has experiences worth discovering, and every person has the potential to create meaningful visitor experiences.</p>
          <p>By developing experiences inspired by people and place, we celebrate authentic culture, strengthen local entrepreneurship, encourage community participation, and create memorable journeys that benefit travellers, destinations, and future generations.</p>
        </Copy>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake} title="Grow with TraveleyeStoryTrail" />
        <Copy>
          <p>Whether you are developing your first visitor experience, expanding an existing tourism product, sharing your local knowledge, or creating innovative ways for travellers to experience Sri Lanka, TraveleyeStoryTrail invites you to begin your journey with us.</p>
          <p>Whether you choose to operate under your own brand or become a <strong>Powered by TraveleyeStoryTrail™</strong> experience creator, we are committed to helping you create authentic experiences that celebrate people and place, strengthen your enterprise, and deliver meaningful visitor experiences.</p>
          <p>Together, we can develop stronger travel experience enterprises, create richer visitor experiences, strengthen destination identity, and build a thriving <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
        </Copy>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
