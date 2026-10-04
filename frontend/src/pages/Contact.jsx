import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
} from 'lucide-react'
import heroImg from '../assets/subhero/How to Get Involved.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const travelCollections = [
  <><strong>Traveleye Lanka Journeys</strong> – Explore Meaningful Journeys Across Sri Lanka.</>,
  <><strong>Traveleye Privé Collection</strong> – Discover Sri Lanka in Ultimate Luxury.</>,
  <><strong>Traveleye Celebrations & Events</strong> – Celebrate Life&apos;s Special Moments in Sri Lanka.</>,
  <><strong>Traveleye Global Journeys</strong> – Helping Sri Lankans Discover the World.</>,
  <><strong>Traveleye Island Journeys</strong> – Helping Sri Lankans Discover Sri Lanka.</>,
]

const travelCorridors = [
  <><strong>Traveleye Bharat Lanka Journeys</strong> – India–Sri Lanka Travel Corridor.</>,
  <><strong>Traveleye Siam Lanka Journeys</strong> – Thailand–Sri Lanka Travel Corridor.</>,
  <><strong>Traveleye Viet Lanka Journeys</strong> – Vietnam–Sri Lanka Travel Corridor.</>,
]

const supportBrands = [
  <><strong>Traveleye Guidant</strong> – Building Stronger Tourism Enterprises.</>,
  <><strong>TraveleyeUpSkills</strong> – Developing People. Strengthening Tourism.</>,
  <><strong>Traveleye Connect</strong> – Connecting People. Coordinating Tourism.</>,
]

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>{children}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function DetailList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm leading-7 text-[#475569] sm:text-base">
          <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-[#c28a5b]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ServiceCard({ icon: Icon, title, brand, children, className = '' }) {
  return (
    <article className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef4fa] text-[#1f4f93]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-bold leading-tight text-[#0f4d2f] sm:text-2xl">{title}</h3>
      <p className="mt-3 text-lg text-[#1f4f93]"><strong>{brand}</strong></p>
      {children}
    </article>
  )
}

export default function Contact() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <img src={heroImg} alt="Contact Us" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 w-full px-4 pb-10 pt-16 text-center sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <h1
            style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
            className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            <strong>CONTACT US</strong>
          </h1>
          <p className="mt-4 text-base text-white/95 sm:text-xl"><strong>Let&apos;s Build Better Tourism Together</strong></p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            Let&apos;s Build Better Tourism Together
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mt-7 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Whether you&apos;re planning your next journey, developing a tourism enterprise, creating authentic stays or travel experiences, strengthening a destination, exploring partnership opportunities, or simply learning more about the People-Powered Tourism Ecosystem, we&apos;re here to help.</p>
            <p>We welcome travellers, tourism entrepreneurs, stay developers, experience creators, communities, government agencies, tourism authorities, educational institutions, development organisations, investors, strategic partners, and everyone who shares our vision of building stronger tourism through people, place, partnerships, and meaningful collaboration.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake}>How Can We Help You?</SectionHeading>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            <ServiceCard icon={Plane} title="Explore & Travel" brand="Traveleye Travel Collective" className="h-full pt-10 sm:pt-12">
              <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">Whether you&apos;re looking to explore Sri Lanka, discover the world, celebrate life&apos;s special moments, experience luxury travel, or travel through our international travel corridors, Traveleye Travel Collective connects travellers with meaningful journeys through its specialised travel brands.</p>
              <p className="mt-5 text-[#0f4d2f]"><strong>Travel Collections</strong></p>
              <DetailList items={travelCollections} />
              <p className="mt-6 text-[#0f4d2f]"><strong>Travel Corridors</strong></p>
              <p className="mt-2 text-sm leading-7 text-[#475569] sm:text-base">Connecting Nations, People and Places.</p>
              <DetailList items={travelCorridors} />
            </ServiceCard>

            <div className="flex flex-col gap-6">
              <ServiceCard icon={BriefcaseBusiness} title="Build & Strengthen Your Tourism Enterprise" brand="Traveleye Ecosystem Support Services">
                <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">Whether you&apos;re starting a tourism business, strengthening an existing enterprise, developing new capabilities, or improving business performance, Traveleye Ecosystem Support provides the professional advisory, learning, digital connectivity, and enterprise support needed to build stronger tourism businesses.</p>
                <p className="mt-5 text-[#0f4d2f]"><strong>Ecosystem Support Services</strong></p>
                <DetailList items={supportBrands} />
              </ServiceCard>

              <ServiceCard icon={Building2} title="Develop Distinctive Stays" brand="Traveleye Habitats">
                <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">Whether you&apos;re planning to develop a villa, boutique hotel, glamping site, homestay, farm stay, heritage stay, nature stay, rural or village stay, wellness or retreat stay, or eco stay, Traveleye Habitats supports stay developers and tourism entrepreneurs in creating distinctive stays inspired by the character, culture, nature, and identity of their locations.</p>
              </ServiceCard>

              <ServiceCard icon={Compass} title="Create Meaningful Experiences" brand="Traveleye StoryTrails">
                <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">Whether you&apos;re planning to create a cultural, heritage, nature, wildlife, adventure, culinary, agricultural, wellness, creative, community, educational, or special-interest experience, Traveleye StoryTrails supports experience creators and tourism entrepreneurs in developing meaningful experiences shaped by people, stories, culture, nature, creativity, and the distinctive character of each destination.</p>
              </ServiceCard>

            </div>
          </div>
          <div className="mx-auto mt-6 w-full lg:w-3/5">
            <ServiceCard icon={Compass} title="Develop Stronger Destinations" brand="Traveleye Destination Facilitation Centres">
              <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">Whether you&apos;re a destination, community, tourism authority, local government institution, tourism association, development organisation, or strategic partner, Traveleye Destination Facilitation brings people and organisations together to support destination development, collaboration, stewardship, enterprise development, and visitor services.</p>
            </ServiceCard>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Handshake}>Partnership Opportunities</SectionHeading>
          <div className="mx-auto mt-7 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Tourism grows stronger through meaningful partnerships.</p>
            <p>If you represent a tourism enterprise, travel company, government agency, tourism authority, educational institution, development organisation, investor, industry association, community organisation, cooperative, financial institution, or strategic partner, we welcome the opportunity to explore how we can work together.</p>
            <p>Together, we can develop stronger tourism enterprises, create richer visitor experiences, strengthen destinations, and generate lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={MessageCircle}>Get in Touch</SectionHeading>
          <div className="mt-7 space-y-3 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>We&apos;d love to hear from you.</p>
            <p>Whether you have a question, an idea, a partnership proposal, or would simply like to learn more about Traveleye Alliance Sri Lanka, our team is ready to assist.</p>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-4 text-left">
            {[
              [Building2, 'Head Office', '[Office Address]'],
              [Phone, 'Telephone', '[Telephone Number]'],
              [MessageCircle, 'WhatsApp', '[WhatsApp Number]'],
              [Mail, 'Email', '[Email Address]'],
              [Globe2, 'Website', '[Website Address]'],
            ].map(([Icon, label, value]) => (
              <div key={label} className="flex w-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />
                <p className="text-sm leading-6 text-[#475569]"><strong className="block text-slate-900">{label}</strong>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Globe2}>Follow Our Journey</SectionHeading>
          <div className="mx-auto mt-7 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Stay connected with Traveleye Alliance Sri Lanka to discover inspiring tourism stories, travel opportunities, programmes, partnerships, events, and the latest developments from Sri Lanka&apos;s first People-Powered Tourism Ecosystem.</p>
            <p>Follow us on our official social media channels and become part of a growing community committed to building better tourism together.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={MapPin}>Join the People-Powered Tourism Ecosystem</SectionHeading>
          <div className="mx-auto mt-7 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>At Traveleye Alliance Sri Lanka, we believe tourism creates its greatest value when it empowers people, celebrates places, strengthens partnerships, and contributes to shared prosperity.</p>
            <p>Whether you&apos;re travelling, investing, developing a tourism enterprise, strengthening a destination, or exploring opportunities to collaborate, we invite you to connect with us and become part of a growing People-Powered Tourism Ecosystem that is building a stronger future for tourism in Sri Lanka.</p>
            <p className="pt-2 text-xl text-[#0f4d2f]"><strong>Tourism for People, Planet, and Prosperity.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
