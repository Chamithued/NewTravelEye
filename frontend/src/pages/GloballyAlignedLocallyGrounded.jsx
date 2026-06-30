import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Landmark,
  Leaf,
  MapPinned,
  Network,
  Recycle,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/client/PPT Framework.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const alignmentPrinciples = [
  { text: 'Regenerative Tourism', icon: Sprout },
  { text: 'Sustainable Tourism', icon: Recycle },
  { text: 'Destination Stewardship', icon: MapPinned },
  { text: 'Community-Centred Tourism Development', icon: Handshake },
  { text: 'Responsible Tourism', icon: ShieldCheck },
  { text: 'Ethical Tourism Participation', icon: Scale },
  { text: 'Collaborative Ecosystem Development', icon: Network },
]

const collaborators = [
  { text: 'Government and public sector institutions', icon: Landmark },
  { text: 'Destination Management Organisations (DMOs)', icon: Building2 },
  { text: 'Tourism enterprises and industry partners', icon: Handshake },
  { text: 'Local communities and tourism entrepreneurs', icon: Users },
  { text: 'Educational institutions and researchers', icon: GraduationCap },
  { text: 'Development agencies and non-government organisations', icon: Sprout },
  { text: 'International tourism partners and ecosystem collaborators', icon: Network },
]

const developmentPriorities = [
  { text: 'Inclusive participation', icon: Handshake },
  { text: 'Entrepreneurship and local enterprise development', icon: BriefcaseBusiness },
  { text: 'Women and youth empowerment', icon: Users },
  { text: 'Environmental stewardship', icon: Leaf },
  { text: 'Cultural preservation and continuity', icon: Landmark },
  { text: 'Destination resilience', icon: MapPinned },
  { text: 'Responsible tourism practices', icon: Recycle },
  { text: 'Long-term ecosystem sustainability', icon: Sprout },
]

const sdgs = [
  'SDG 1 — No Poverty',
  'SDG 5 — Gender Equality',
  'SDG 8 — Decent Work and Economic Growth',
  'SDG 11 — Sustainable Cities and Communities',
  'SDG 12 — Responsible Consumption and Production',
  'SDG 13 — Climate Action',
  'SDG 14 — Life Below Water',
  'SDG 15 — Life on Land',
]

function SectionHeading({ icon: Icon, title, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
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
    <article className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-5 sm:p-5">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <p className="text-sm font-semibold leading-6 text-[#141414] sm:text-base">{item.text}</p>
    </article>
  )
}

export default function GloballyAlignedLocallyGrounded() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Globally Aligned. Locally Grounded. banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/32" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">GLOBALLY ALIGNED.</span>
              <span className="block">LOCALLY GROUNDED.</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Inspired by Global Thinking. Rooted in Sri Lankan Realities.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Inspired by Global Thinking. Rooted in Sri Lankan Realities." />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>
              The Traveleye People-Powered Tourism Framework (PPT Framework) has been developed in Sri Lanka while drawing inspiration from internationally recognised approaches to sustainable tourism, regenerative tourism, destination stewardship, responsible tourism, and collaborative destination development.
            </p>
            <p>
              Rather than adopting a one-size-fits-all model, the framework adapts global thinking to Sri Lanka's unique tourism landscape-placing people, destinations, participation, and long-term stewardship at the centre of tourism development.
            </p>
            <p>
              Designed to be practical, adaptable, and collaborative, the PPT Framework strengthens tourism ecosystems by encouraging meaningful participation, innovation, responsible coordination, and shared value creation across destinations.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="International Alignment" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The PPT Framework is informed by internationally recognised principles associated with:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alignmentPrinciples.map((item) => (
              <IconCard key={item.text} item={item} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-5xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            These globally recognised principles enable the framework to work alongside tourism institutions, destination managers, tourism enterprises, development partners, community organisations, and ecosystem collaborators while remaining firmly grounded in Sri Lanka's people, places, and local identity.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Designed for Collaboration" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The People-Powered Tourism Framework provides a practical ecosystem approach that can support collaboration among:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collaborators.map((item) => (
              <IconCard key={item.text} item={item} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Its flexible structure also creates opportunities for future adaptation across different destinations, regions, and international tourism partnerships.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Contributing to Sustainable Development" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Through its people-powered ecosystem approach, the PPT Framework contributes to broader sustainable development priorities by encouraging:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {developmentPriorities.map((item) => (
              <IconCard key={item.text} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="United Nations Sustainable Development Goals (SDGs)" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            These outcomes support several United Nations Sustainable Development Goals (SDGs), including:
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
            {sdgs.map((sdg) => (
              <div key={sdg} className="rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] px-5 py-4 text-sm font-semibold leading-6 text-[#234c3a] shadow-sm sm:text-base">
                {sdg}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="A Framework for the Future" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            The Traveleye People-Powered Tourism Framework demonstrates that globally informed thinking and locally grounded action can work together to build stronger, more resilient tourism ecosystems. By connecting people, destinations, enterprises, and partnerships through shared stewardship and collaboration, the framework creates lasting value for tourism, communities, and future generations.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
