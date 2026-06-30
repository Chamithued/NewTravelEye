import {
  BriefcaseBusiness,
  Building2,
  Globe2,
  Handshake,
  Landmark,
  Megaphone,
  Network,
  Plane,
  Rocket,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/Become a Travel Corridor Partner.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const partnerRoles = [
  { label: 'Tourism market development', icon: Globe2 },
  { label: 'Travel trade engagement', icon: Handshake },
  { label: 'Destination promotion', icon: Megaphone },
  { label: 'Joint marketing initiatives', icon: Network },
  { label: 'Group travel programs', icon: Users },
  { label: 'Cultural and educational exchanges', icon: Landmark },
  { label: 'Business networking opportunities', icon: BriefcaseBusiness },
  { label: 'Travel product development', icon: Plane },
  { label: 'Events and tourism promotions', icon: Building2 },
  { label: 'Long-term corridor growth initiatives', icon: Sprout },
]

const partnerTypes = [
  'Licensed Tour Operators',
  'Destination Management Companies (DMCs)',
  'Travel Agencies',
  'Tourism Marketing Organisations',
  'Tourism Associations',
  'Travel Consortiums',
  'MICE Specialists',
  'Pilgrimage and Special Interest Travel Operators',
  'Tourism Entrepreneurs with strong market networks',
]

const partnerBenefits = [
  'Local destination expertise',
  'Trusted tourism relationships',
  'Market development support',
  'Access to ecosystem networks',
  'Product development collaboration',
  'Travel trade connectivity',
  'Joint growth opportunities',
  'Long-term strategic partnership',
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

function IconCard({ item }) {
  const Icon = item.icon

  return (
    <article className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-base font-bold leading-6 text-[#214F95] sm:text-lg">{item.label}</h3>
    </article>
  )
}

function SimpleCard({ text, icon: Icon }) {
  return (
    <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:p-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-5 w-5" />
      </span>
      <p className="text-sm font-medium leading-6 text-[#141414] sm:text-base">{text}</p>
    </div>
  )
}

export default function BecomeATravelCorridorPartner() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Become a Travel Corridor Partner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/14" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Become a Travel Corridor Partner
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting Nations Through Meaningful Travel
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Globe2} title="Connecting Nations Through Meaningful Travel" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Tourism has the power to build lasting relationships between countries, strengthen cultural understanding, create economic opportunities, and connect people through shared experiences.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">The Traveleye Travel Corridor Program is designed to foster long-term tourism relationships between Sri Lanka and selected international markets through strategic partnerships, market development, travel trade collaboration, and meaningful travel connections.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Travel Corridor Partners play a key role in representing, developing, and strengthening tourism connections between Sri Lanka and their respective countries while contributing to the growth of a people-powered tourism ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Handshake} title="What is a Travel Corridor Partner?" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>A Travel Corridor Partner is a carefully selected tourism company or organisation that collaborates with Traveleye Travel Collective to develop and strengthen tourism relationships between Sri Lanka and a designated international market.</p>
            <p>The partnership extends beyond traditional travel sales and focuses on building long-term tourism connectivity through collaboration, trust, shared growth, and market development.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Globe2} title="One Market. One Partner. One Shared Vision." center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Travel Corridor Program is built on the principle of exclusive market partnerships.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Each designated market may be represented by a selected Travel Corridor Partner who shares Traveleye's vision of meaningful travel, responsible tourism, and long-term relationship building.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              This approach encourages deeper collaboration, stronger market engagement, and sustainable corridor development.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Target} title="Role of a Travel Corridor Partner" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Travel Corridor Partners may collaborate on:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerRoles.map((item) => (
              <IconCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Who Can Become a Travel Corridor Partner?" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            We welcome discussions with:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((text) => (
              <SimpleCard key={text} text={text} icon={Building2} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Landmark} title="Why Partner With Sri Lanka Through Traveleye?" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Travel Corridor Partners benefit from:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((text) => (
              <SimpleCard key={text} text={text} icon={Network} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-lg font-bold leading-8 text-[#0f4d2f]">
            Together, we seek to create meaningful travel experiences while strengthening tourism relationships between countries.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Rocket} title="Looking Ahead" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>The Travel Corridor Program aims to establish a network of trusted international partners who share a common vision of connecting nations through meaningful travel.</p>
            <p>As tourism continues to evolve, these partnerships can serve as foundations for stronger tourism relationships, collaborative ventures, new travel opportunities, and future corridor development initiatives.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Begin the Conversation" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>If your organisation is interested in developing stronger tourism connections with Sri Lanka and becoming a Travel Corridor Partner for your market, we welcome the opportunity to begin a conversation.</p>
            <p>Together, we can build meaningful tourism relationships that connect people, destinations, and opportunities across borders.</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Closing Reflection" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Tourism is most powerful when it creates lasting connections between people and nations.</p>
            <p>Through the Travel Corridor Program, we seek to build trusted partnerships that strengthen tourism relationships, encourage meaningful travel, and create shared value for destinations, enterprises, and communities.</p>
            <p className="text-lg font-bold text-[#1f4f93] sm:text-2xl">Connecting Nations Through Meaningful Travel.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
