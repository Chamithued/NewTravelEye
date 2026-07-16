import {
  BedDouble,
  CircleCheck,
  Compass,
  Globe2,
  Handshake,
  Home,
  Leaf,
  MessageCircle,
  Sparkles,
  Sprout,
  UsersRound,
  Waypoints,
} from 'lucide-react'
import heroImg from '../../assets/subhero/pillars/PPHE Pillar.jpg'
import ExploreEcosystem from '../../components/ExploreEcosystem'
import FooterLinks from '../../components/FooterLinks'

const peoplePoweredQualities = [
  'People-centred',
  'Locally connected',
  'Culturally authentic',
  'Hospitality-driven',
  'Participation-oriented',
  'Environmentally responsible',
  'Stewardship-focused',
]

const experiencePlatforms = [
  {
    icon: BedDouble,
    title: 'Traveleye People-Powered Stays',
    text: 'Hosted accommodation experiences inspired by local hospitality, culture, heritage, nature, wellness, creativity, and destination identity.',
  },
  {
    icon: Sparkles,
    title: 'Traveleye People-Powered Experiences',
    text: 'Immersive travel experiences shaped through local people, culture, traditions, food, nature, creativity, learning, and meaningful participation.',
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

export default function PeoplePoweredHostExperiences() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Host Experiences"
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
              <span className="block">HOST EXPERIENCES</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Crafting Experiences Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="People-Powered Host Experiences (PPHE)" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Tourism is more than accommodation and activities. It is an opportunity to connect people, culture, nature, heritage, and hospitality through meaningful experiences that create lasting value for travellers and destinations alike.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">The People-Powered Host Experiences (PPHE) pillar approaches hosted stays and travel experiences as a connected ecosystem where people and place shape authentic, immersive, and memorable tourism experiences while strengthening destinations through participation, stewardship, and shared value creation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Globe2} title="Experiences Within the Traveleye Ecosystem" compact />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Within the Traveleye ecosystem, hosted experiences are more than places to stay or activities to enjoy. They are opportunities to engage with local people, traditions, landscapes, creativity, food, wellness, and everyday life in meaningful ways.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Whether staying with local hosts, participating in cultural experiences, discovering nature, or exploring authentic ways of life, every experience contributes to a broader vision of tourism that values people, place, and connection.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Experiences become opportunities to enrich travellers while supporting destination wellbeing and long-term tourism resilience.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Compass} title="The Role of People-Powered Host Experiences" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Host Experiences pillar strengthens tourism by encouraging hosted stays and travel experiences that remain connected to people, culture, hospitality, participation, and destination identity.</p>
            <p>Rather than treating experiences as isolated tourism products, the pillar promotes a connected approach where hospitality and local engagement contribute to stronger tourism ecosystems and more meaningful relationships between travellers and destinations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={UsersRound} title="What Makes Host Experiences People-Powered?" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Host experiences become people-powered when they place people and place at the heart of every experience.</p>
            <p>The People-Powered Host Experiences pillar encourages tourism that is:</p>
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
            By connecting travellers with people and place, experiences become more meaningful while contributing to stronger tourism ecosystems.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Home} title="Our Experience Platforms" compact />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base">
            The People-Powered Host Experiences pillar brings together specialised platforms that encourage authentic stays and immersive travel experiences inspired by local people and destinations.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {experiencePlatforms.map(({ icon: Icon, title, text }) => (
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
          <SectionHeading icon={Handshake} title="Strengthening Experiences Through Participation and Collaboration" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Host Experiences pillar encourages collaboration between hosts, communities, tourism enterprises, artisans, farmers, guides, wellness practitioners, creators, women, youth entrepreneurs, and ecosystem collaborators.</p>
            <p>Through participation and collaboration, tourism experiences become more authentic, inclusive, and capable of creating shared value for travellers, destinations, and local people.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Guided by Stewardship and Authenticity" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Host Experiences pillar recognises that how destinations are experienced matters just as much as where people travel.</p>
            <p>The pillar therefore encourages tourism experiences that respect local culture, celebrate hospitality, strengthen destination identity, support meaningful participation, and contribute positively to people and place through responsible tourism practices and shared stewardship.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Why People-Powered Host Experiences Matter" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Tourism becomes more meaningful when experiences remain connected to people and place.</p>
            <p>The People-Powered Host Experiences pillar seeks to create tourism that enriches traveller experiences while supporting stronger destinations, deeper cultural understanding, meaningful local participation, and long-term tourism resilience.</p>
            <p>The objective is not simply to create more tourism experiences.</p>
            <p>It is to create experiences that strengthen relationships between travellers, hosts, communities, and destinations through meaningful human connection.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="Looking Ahead" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As tourism continues to evolve, the People-Powered Host Experiences pillar will continue to encourage authentic hospitality, immersive experiences, and responsible tourism approaches that strengthen destinations while enriching traveller experiences.</p>
            <p>By crafting experiences through people and place, the pillar seeks to contribute to a more inclusive, resilient, and regenerative future for tourism.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-center shadow-sm sm:p-10">
          <SectionHeading icon={MessageCircle} title="Begin the Conversation" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Whether you are a host, experience creator, tourism enterprise, entrepreneur, community organisation, destination stakeholder, or ecosystem collaborator, we welcome opportunities to explore how meaningful hosted experiences can strengthen people, places, and tourism ecosystems.</p>
            <p>Together, we can create experiences that inspire connection, celebrate local identity, and contribute to a stronger tourism future.</p>
            <p>Contact us at <a className="font-semibold text-[#1f4f93] underline decoration-[#c28a5b] underline-offset-4" href="mailto:info@traveleye.lk">info@traveleye.lk</a> to begin the conversation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Closing Reflection" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Every memorable experience begins with people and place.</p>
            <p>The People-Powered Host Experiences pillar approaches tourism not simply as accommodation or activities, but as a connected ecosystem of hospitality, participation, stewardship, and shared human experience.</p>
            <p>Because the most meaningful journeys are not only shaped by where we travel.</p>
            <p>They are shaped by the people who welcome us, the stories we share, and the places that leave a lasting impression.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}

