import {
  CircleCheck,
  Compass,
  Globe2,
  Handshake,
  Leaf,
  MapPinned,
  MessageCircle,
  Network,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../../assets/subhero/pillars/PPDF Pillar.jpg'
import ExploreEcosystem from '../../components/ExploreEcosystem'
import FooterLinks from '../../components/FooterLinks'

const peoplePoweredQualities = [
  'People-centred',
  'Place-based',
  'Participation-driven',
  'Collaboration-oriented',
  'Community-connected',
  'Culturally respectful',
  'Environmentally aware',
  'Stewardship-focused',
]

const facilitationFocus = [
  {
    icon: MapPinned,
    title: 'Destination Coordination & Readiness',
    text: 'Encouraging coordinated destination participation, tourism readiness, local engagement, and ecosystem continuity.',
  },
  {
    icon: Handshake,
    title: 'Stakeholder Collaboration & Community Participation',
    text: 'Strengthening relationships between communities, tourism enterprises, local organisations, and destination stakeholders through collaboration and shared responsibility.',
  },
  {
    icon: Sprout,
    title: 'Stewardship & Destination Wellbeing',
    text: 'Encouraging responsible tourism practices, cultural respect, environmental awareness, and long-term destination resilience.',
  },
  {
    icon: Globe2,
    title: 'Place-Based Tourism Engagement',
    text: 'Supporting meaningful connections between travellers and destinations while encouraging tourism that remains rooted in local identity and community wellbeing.',
  },
]

function TopicIcon({ icon: Icon, compact = false }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93] ${
        compact ? 'h-9 w-9' : 'h-11 w-11'
      }`}
      aria-hidden="true"
    >
      <Icon className={compact ? 'h-5 w-5' : 'h-6 w-6'} />
    </span>
  )
}

function SectionHeading({ icon, title, compact = false }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <TopicIcon icon={icon} compact={compact} />
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

export default function PeoplePoweredDestinationFacilitation() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Destination Facilitation"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/14" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">PEOPLE-POWERED</span>
              <span className="block">DESTINATION FACILITATION</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Stewarding Destinations Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="People-Powered Destination Facilitation (PPDF)" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Destinations are more than places to visit. They are living environments shaped by people, culture, heritage, landscapes, communities, livelihoods, and everyday life.</p>
            <p>The People-Powered Destination Facilitation (PPDF) pillar approaches destination development as a connected ecosystem where participation, stewardship, collaboration, and place-based engagement help strengthen destinations while creating meaningful tourism experiences and long-term shared value.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Globe2} title="Destinations Within the Traveleye Ecosystem" compact />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Within the Traveleye ecosystem, destinations are not viewed simply as tourism locations or commercial attractions. They are dynamic places where people, culture, nature, hospitality, and local identity come together to create unique tourism experiences.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">By encouraging participation and stewardship, destination facilitation helps tourism remain connected to the people and places that make each destination meaningful.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Destinations become opportunities to enrich travellers while supporting community wellbeing and long-term tourism resilience.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Compass} title="The Role of People-Powered Destination Facilitation" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Destination Facilitation pillar strengthens tourism by encouraging destination participation, local collaboration, ecosystem coordination, and stewardship-oriented tourism engagement.</p>
            <p>Rather than treating destinations as isolated tourism products, the pillar promotes a connected approach where people, communities, tourism enterprises, and destination stakeholders work together to strengthen tourism ecosystems and long-term destination wellbeing.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={UsersRound} title="What Makes Destination Facilitation People-Powered?" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Destination facilitation becomes people-powered when it places people and place at the heart of tourism development.</p>
            <p>The People-Powered Destination Facilitation pillar encourages destination stewardship that is:</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {peoplePoweredQualities.map((quality) => (
              <div key={quality} className="flex items-center gap-3 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ecf8ef] text-[#14532d]">
                  <CircleCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium leading-6 text-[#234c3a] sm:text-base">{quality}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base">
            By strengthening people and place together, destinations become more connected, resilient, and capable of supporting meaningful tourism over the long term.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Our Destination Facilitation Focus" compact />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base">
            The People-Powered Destination Facilitation pillar brings together place-based initiatives that help destinations strengthen tourism through participation and stewardship.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {facilitationFocus.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Strengthening Destinations Through Participation and Collaboration" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Destination Facilitation pillar encourages collaboration between local communities, tourism enterprises, hosts, destination stakeholders, women and youth entrepreneurs, tourism professionals, local organisations, and ecosystem collaborators.</p>
            <p>Through participation and collaboration, destinations become more connected, inclusive, adaptive, and capable of creating shared value for local people, travellers, and tourism ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Guided by Stewardship and Long-Term Thinking" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Destination Facilitation pillar recognises that strong tourism begins with strong destinations.</p>
            <p>The pillar therefore encourages tourism that respects local identity, values culture and heritage, supports environmental awareness, strengthens community participation, and contributes positively to people and place through stewardship and long-term thinking.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Why People-Powered Destination Facilitation Matters" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Tourism becomes stronger when destinations themselves are strengthened through participation, collaboration, stewardship, and local engagement.</p>
            <p>The People-Powered Destination Facilitation pillar seeks to create tourism that enriches traveller experiences while supporting stronger communities, resilient destinations, meaningful participation, and long-term tourism sustainability.</p>
            <p>The objective is not simply to increase tourism activity.</p>
            <p>It is to help destinations grow in ways that remain meaningful, balanced, and connected to the people and places that define them.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={MapPinned} title="Looking Ahead" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As tourism continues to evolve, the People-Powered Destination Facilitation pillar will continue to encourage stronger destination participation, collaborative stewardship, ecosystem coordination, and locally rooted tourism approaches that create lasting value for people and places.</p>
            <p>By stewarding destinations through people and place, the pillar seeks to contribute to a more inclusive, resilient, and regenerative future for tourism.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-center shadow-sm sm:p-10">
          <SectionHeading icon={MessageCircle} title="Begin the Conversation" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Whether you are a local community, tourism enterprise, destination stakeholder, entrepreneur, institution, local authority, development partner, or ecosystem collaborator, we welcome opportunities to explore how stronger destinations can be built through participation, stewardship, collaboration, and shared purpose.</p>
            <p>Together, we can strengthen destinations through people, place, and long-term partnership.</p>
            <p>Contact us at <a className="font-semibold text-[#1f4f93] underline decoration-[#c28a5b] underline-offset-4" href="mailto:info@traveleye.lk">info@traveleye.lk</a> to begin the conversation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Closing Reflection" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Strong destinations are built through the people who live there, the culture they preserve, the landscapes they protect, and the partnerships they create.</p>
            <p>The People-Powered Destination Facilitation pillar approaches tourism as a connected ecosystem of participation, stewardship, collaboration, and place-based engagement.</p>
            <p>Because meaningful tourism is not only about attracting visitors.</p>
            <p>It is about helping destinations grow stronger through the people and places that make them unique.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}

