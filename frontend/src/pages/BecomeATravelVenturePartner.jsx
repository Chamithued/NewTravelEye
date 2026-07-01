import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Leaf,
  MapPinned,
  Plane,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/Become a Travel Venture Partner.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const sriLankanOpportunities = [
  'Participating in Travel Corridor initiatives connecting Sri Lanka with international markets',
  'Developing inbound and outbound travel ventures with ecosystem support',
  'Accessing collaborative destination knowledge and tourism networks',
  'Expanding business opportunities through international partnerships',
  'Sharing knowledge, innovation, and market opportunities across the ecosystem',
  'Reducing barriers to business development through collaboration and shared capability',
  'Growing alongside a connected tourism ecosystem that values long-term partnership',
]

const internationalOpportunities = [
  'Building long-term partnerships with experienced local tourism stakeholders',
  'Strengthening destination knowledge and local market access',
  'Developing market-specific travel programmes and bilateral tourism initiatives',
  'Accessing reliable local coordination and destination expertise',
  'Creating authentic and meaningful travel experiences for clients',
  'Exploring opportunities for collaborative business development and destination promotion',
  'Strengthening tourism relationships through shared knowledge and partnership',
]

const sharedValuePoints = [
  'Greater tourism participation',
  'Stronger international tourism relationships',
  'New opportunities for youth and women entrepreneurs',
  'Innovation and entrepreneurship across tourism value chains',
  'More authentic visitor experiences',
  'Better collaboration between destinations and tourism markets',
  'Stronger destination resilience through ecosystem thinking',
  'Long-term shared value for people, places, and tourism enterprises',
]

function SectionHeading({ icon: Icon, title, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-center justify-center' : 'items-start',
        ].join(' ')}
      >
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
    </div>
  )
}

function OpportunityList({ items }) {
  return (
    <ul className="mt-5 divide-y divide-[#e8eef2]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-3 text-sm leading-6 text-[#234c3a] sm:text-base">
          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#2f6b3f]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PartnerCard({ icon: Icon, title, children }) {
  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{title}</h3>
      <div className="mt-4 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base sm:leading-8">{children}</div>
    </article>
  )
}

export default function BecomeATravelVenturePartner() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Become a Travel Venture Partner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/14" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Become a Travel Venture Partner
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Building Meaningful Travel Connections Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Plane} title="Building Meaningful Travel Connections Through People and Place" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Travel has the power to connect people, cultures, destinations, and opportunities in ways that create lasting value for travellers and the places they visit.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages travel entrepreneurship through meaningful partnerships that strengthen tourism participation, collaboration, innovation, and long-term ecosystem development.</p>
            <p>Whether you are an aspiring entrepreneur, an established travel professional, or an international tourism partner, Travel Venture Partnerships create opportunities to become part of a connected tourism ecosystem that links people and place through meaningful travel.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Travel Entrepreneurship Within the Traveleye Ecosystem" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye ecosystem encourages collaborative travel entrepreneurship rather than isolated business development.</p>
            <p>By bringing together local entrepreneurs, international travel partners, destination stakeholders, and tourism professionals, the ecosystem seeks to strengthen tourism through shared knowledge, collaboration, innovation, and long-term partnerships.</p>
            <p>Travel Venture Partners become part of a growing network that values meaningful travel, responsible tourism, and shared success.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Become a Travel Venture Partner?" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Travel Venture Partnerships create opportunities to participate in a connected tourism ecosystem that supports growth through collaboration rather than working alone.</p>
            <p>The ecosystem seeks to create value for entrepreneurs, international partners, destinations, and travellers while strengthening long-term tourism relationships.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <PartnerCard icon={MapPinned} title="For Sri Lankan Travel Entrepreneurs">
            <p>The Traveleye ecosystem provides opportunities for Sri Lankan entrepreneurs to participate in inbound and outbound travel ventures through collaborative business models and ecosystem partnerships.</p>
            <p className="font-bold text-[#0f4d2f]">Potential opportunities include:</p>
            <OpportunityList items={sriLankanOpportunities} />
            <p>The objective is to encourage entrepreneurship through collaboration while creating stronger tourism connections.</p>
          </PartnerCard>

          <PartnerCard icon={Globe2} title="For International Travel Partners">
            <p>Travel Venture Partnerships provide opportunities for international travel companies and tourism organisations to strengthen their engagement with Sri Lanka through trusted local collaboration.</p>
            <p className="font-bold text-[#0f4d2f]">Potential opportunities include:</p>
            <OpportunityList items={internationalOpportunities} />
            <p>The objective is to build trusted, long-term relationships that benefit travellers, destinations, and tourism enterprises alike.</p>
          </PartnerCard>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Creating Shared Value for Tourism" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Travel Venture Partnerships contribute to stronger tourism ecosystems by encouraging:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedValuePoints.map((point) => (
              <div key={point} className="flex min-h-28 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                  <Users className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When more people participate meaningfully, tourism becomes more connected, inclusive, and resilient.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Leaf} title="Growing Together Through Partnership" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">The Traveleye approach recognises that tourism grows stronger when entrepreneurs, destinations, communities, and international partners work together through trust, collaboration, and shared purpose.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Travel Venture Partnerships encourage long-term relationships that help strengthen tourism ecosystems while creating meaningful opportunities for business growth, cultural exchange, destination development, and responsible travel.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Together, we can create journeys that benefit travellers while contributing to stronger destinations and stronger tourism ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Plane} title="Looking Ahead" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As the Traveleye ecosystem continues to expand, Travel Venture Partnerships will continue to create new opportunities for entrepreneurship, international collaboration, destination connectivity, and meaningful tourism development.</p>
            <p>By connecting people and place through partnership and shared purpose, the ecosystem seeks to contribute to a more inclusive, resilient, and people-powered future for tourism.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Begin the Conversation" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Whether you are a Sri Lankan entrepreneur, international travel company, destination specialist, tourism professional, investor, or strategic partner, we welcome opportunities to explore how meaningful collaboration can strengthen tourism and create long-term shared value.</p>
            <p>Together, we can build stronger travel connections between Sri Lanka and the world.</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Closing Reflection" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Every successful travel venture begins with a partnership.</p>
            <p>By working together through collaboration, innovation, and shared purpose, Travel Venture Partners become part of a connected tourism ecosystem that creates meaningful journeys while strengthening people, destinations, and tourism for the future.</p>
            <p><strong>Because stronger tourism is built not only through travel-</strong></p>
            <p><strong>but through the partnerships that connect people and places across borders.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
