import {
  Building2,
  CircleCheck,
  Compass,
  Globe2,
  Handshake,
  Hotel,
  Leaf,
  Map,
  MessageCircle,
  Plane,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const peoplePoweredQualities = [
  'People-centred',
  'Destination-aware',
  'Culturally respectful',
  'Participation-driven',
  'Responsibly coordinated',
  'Stewardship-oriented',
]

const travelPlatforms = [
  {
    icon: Plane,
    title: 'Traveleye Travel Corridors',
    text: 'Connecting nations through meaningful travel, cultural exchange, business engagement, wellness, education, pilgrimage, celebrations, and long-term tourism collaboration.',
  },
  {
    icon: Map,
    title: 'Traveleye Island Journeys',
    text: 'Encouraging Sri Lankans to rediscover their own country through holidays, culture, wellness, education, pilgrimage, and destination experiences.',
  },
  {
    icon: Hotel,
    title: 'Traveleye Privé Collection Sri Lanka',
    text: 'Curated luxury journeys, exclusive experiences, and personalised travel designed for travellers seeking authenticity, privacy, comfort, and exceptional service.',
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

export default function PeoplePoweredTravelCollective() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Travel Collective"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">PEOPLE-POWERED</span>
              <span className="block">TRAVEL COLLECTIVE</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting Journeys Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="People-Powered Travel Collective (PPTC)" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Travel is more than movement between destinations. It is an opportunity to connect people, cultures, communities, and places through meaningful journeys that create lasting value for travellers and destinations alike.</p>
            <p>The People-Powered Travel Collective (PPTC) pillar approaches travel as a connected ecosystem where journeys contribute to stronger tourism experiences, richer cultural understanding, and more resilient destinations through participation, collaboration, stewardship, and shared value creation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Leaf} title="Travel Within the Traveleye Ecosystem" compact />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Within the Traveleye ecosystem, travel is more than transportation or itinerary planning. It is the connecting layer that brings together people, destinations, cultures, tourism enterprises, and opportunities through thoughtfully coordinated journeys.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Whether connecting nations through international travel corridors, encouraging Sri Lankans to rediscover their own country, or curating exceptional luxury experiences, every journey contributes to a broader vision of meaningful and responsible tourism.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Travel becomes a bridge between people and place, creating experiences that enrich travellers while supporting destination wellbeing and long-term tourism resilience.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Compass} title="The Role of the People-Powered Travel Collective" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">The People-Powered Travel Collective pillar strengthens tourism by encouraging journeys that remain connected to people, place, culture, participation, and destination wellbeing.</p>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Rather than treating travel as isolated transactions, the pillar promotes a connected approach where journeys contribute to stronger tourism ecosystems and more meaningful relationships between travellers and destinations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={UsersRound} title="What Makes Travel Coordination People-Powered?" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Travel coordination becomes people-powered when it places people and destinations at the heart of every journey.</p>
            <p>The People-Powered Travel Collective pillar encourages travel that is:</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            By connecting people and place, journeys become opportunities to create meaningful experiences while supporting stronger tourism ecosystems.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Our Travel Platforms" compact />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base">
            The Travel Collective pillar brings together specialised travel platforms that serve different travel aspirations while contributing to a shared vision of People-Powered Tourism.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {travelPlatforms.map(({ icon: Icon, title, text }) => (
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
          <SectionHeading icon={Handshake} title="Strengthening Travel Through Participation and Collaboration" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Travel Collective pillar encourages collaboration between tourism enterprises, travel partners, entrepreneurs, institutions, destination stakeholders, communities, women, youth entrepreneurs, and ecosystem collaborators.</p>
            <p>Through participation and collaboration, travel becomes more connected, inclusive, and capable of creating shared value for people, destinations, and tourism ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Guided by Responsibility and Meaningful Connection" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Travel Collective pillar recognises that how people travel matters just as much as where they travel.</p>
            <p>The Collective therefore encourages travel that respects local culture, supports destination wellbeing, values meaningful participation, and contributes positively to people and place through responsible tourism practices and shared stewardship.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Why the People-Powered Travel Collective Matters" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Tourism becomes stronger when journeys remain connected to destinations, culture, participation, and people.</p>
            <p>The People-Powered Travel Collective pillar seeks to create tourism that enriches traveller experiences while supporting stronger destinations, deeper cultural understanding, meaningful participation, and long-term tourism resilience.</p>
            <p>The objective is not simply to move travellers between places.</p>
            <p>It is to create journeys that strengthen tourism ecosystems through meaningful connection.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Building2} title="Looking Ahead" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As tourism continues to evolve, the People-Powered Travel Collective pillar will continue to encourage meaningful travel connections, responsible journey coordination, and collaborative tourism approaches that strengthen destinations and enrich traveller experiences.</p>
            <p>By connecting journeys through people and place, the Collective seeks to contribute to a more inclusive, resilient, and regenerative future for tourism.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-center shadow-sm sm:p-10">
          <SectionHeading icon={MessageCircle} title="Begin the Conversation" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Whether you are a traveller, travel partner, tourism enterprise, entrepreneur, destination organisation, institution, or ecosystem collaborator, we welcome opportunities to explore how meaningful travel can strengthen people, places, and tourism ecosystems.</p>
            <p>Together, we can create journeys that inspire connection, encourage collaboration, and contribute to a stronger tourism future.</p>
            <p>Contact us at <a className="font-semibold text-[#1f4f93] underline decoration-[#c28a5b] underline-offset-4" href="mailto:info@traveleye.lk">info@traveleye.lk</a> to begin the conversation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Closing Reflection" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Every journey begins with movement, but its true meaning is shaped by the connections it creates between people and place.</p>
            <p>The People-Powered Travel Collective pillar approaches travel not simply as tourism activity, but as a connected ecosystem of journeys, participation, stewardship, and shared value creation.</p>
            <p>Because meaningful travel is not only about where we go.</p>
            <p>It is about how we connect, how we experience, and how we contribute along the way.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
