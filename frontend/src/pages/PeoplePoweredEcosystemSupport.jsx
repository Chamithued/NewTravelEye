import {
  BookOpen,
  Brain,
  BriefcaseBusiness,
  CircleCheck,
  Compass,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  MessageCircle,
  Network,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/client/PPES.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const peoplePoweredQualities = [
  'People-centred',
  'Place-connected',
  'Capability-driven',
  'Collaboration-oriented',
  'Knowledge-based',
  'Innovation-enabled',
  'Stewardship-focused',
]

const supportAreas = [
  {
    icon: GraduationCap,
    title: 'Capability & Knowledge Development',
    text: 'Learning, mentoring, leadership development, and knowledge-sharing initiatives that strengthen tourism capability and professional readiness.',
  },
  {
    icon: Handshake,
    title: 'Collaboration & Ecosystem Coordination',
    text: 'Encouraging partnerships, communication, shared learning, and stronger relationships across tourism ecosystems and destination stakeholders.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Enterprise Enablement',
    text: 'Supporting innovation, entrepreneurship, technology adoption, and enterprise readiness that contribute to stronger tourism ecosystems.',
  },
  {
    icon: Sprout,
    title: 'Destination & Ecosystem Readiness',
    text: 'Supporting tourism ecosystems through shared resources, participation structures, ecosystem communication, destination visibility, and long-term resilience.',
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

export default function PeoplePoweredEcosystemSupport() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Ecosystem Support"
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
              <span className="block">ECOSYSTEM SUPPORT</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Strengthening Tourism Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="People-Powered Ecosystem Support (PPES)" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Meaningful tourism depends on more than journeys and experiences. It also depends on the people, knowledge, collaboration, innovation, and support systems that help tourism ecosystems grow responsibly and sustainably over time.</p>
            <p>The People-Powered Ecosystem Support (PPES) pillar approaches tourism support as a connected ecosystem where people, enterprises, destinations, and institutions strengthen together through shared capability, collaboration, stewardship, and long-term value creation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Network} title="Support Within the Traveleye Ecosystem" compact />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Within the Traveleye ecosystem, support is more than services or systems. It is the enabling layer that strengthens people, enterprises, destinations, and tourism ecosystems through knowledge, innovation, collaboration, and continuous learning.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Whether supporting tourism capability, encouraging entrepreneurship, strengthening partnerships, or enabling innovation, every initiative contributes to a broader vision of tourism that values people, place, participation, and shared growth.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Support becomes an investment in stronger tourism ecosystems and more resilient destinations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Compass} title="The Role of People-Powered Ecosystem Support" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Ecosystem Support pillar strengthens tourism by encouraging capability development, knowledge sharing, collaboration, innovation, and ecosystem readiness.</p>
            <p>Rather than treating support as an isolated function, the pillar promotes a connected approach where people, enterprises, destinations, and institutions work together to create stronger tourism ecosystems and long-term destination resilience.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={UsersRound} title="What Makes Ecosystem Support People-Powered?" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Ecosystem support becomes people-powered when it places people and place at the centre of tourism development.</p>
            <p>The People-Powered Ecosystem Support pillar encourages support that is:</p>
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
            By strengthening people and place together, tourism ecosystems become more connected, adaptive, and resilient.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={BookOpen} title="Our Ecosystem Support Areas" compact />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base">
            The People-Powered Ecosystem Support pillar brings together diverse support functions that strengthen tourism participation and ecosystem capability.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportAreas.map(({ icon: Icon, title, text }) => (
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
          <SectionHeading icon={Handshake} title="Strengthening Tourism Through Participation and Collaboration" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Ecosystem Support pillar encourages collaboration between tourism enterprises, destination stakeholders, institutions, educators, innovators, entrepreneurs, women, youth entrepreneurs, communities, and ecosystem collaborators.</p>
            <p>Through participation and collaboration, tourism ecosystems become more connected, capable, inclusive, and prepared to adapt to changing opportunities and future challenges.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Guided by Stewardship and Long-Term Thinking" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The People-Powered Ecosystem Support pillar recognises that strong tourism ecosystems begin with strong people and strong places.</p>
            <p>The pillar therefore encourages support systems that strengthen capability, encourage collaboration, promote responsible innovation, support destination wellbeing, and contribute positively to people and place through shared stewardship and long-term thinking.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Network} title="Why People-Powered Ecosystem Support Matters" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Tourism becomes stronger when people and places are supported through knowledge, collaboration, innovation, and shared capability.</p>
            <p>The People-Powered Ecosystem Support pillar seeks to strengthen tourism by encouraging learning, participation, resilience, and collaboration that help destinations, enterprises, and tourism ecosystems thrive over the long term.</p>
            <p>The objective is not simply to provide support services.</p>
            <p>It is to create stronger tourism ecosystems through meaningful collaboration and shared capability.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Brain} title="Looking Ahead" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As tourism continues to evolve, the People-Powered Ecosystem Support pillar will continue to strengthen tourism capability, encourage collaboration, support innovation, and build resilient ecosystems that create lasting value for people and places.</p>
            <p>By strengthening tourism through people and place, the pillar seeks to contribute to a more inclusive, adaptive, and regenerative future for tourism.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-center shadow-sm sm:p-10">
          <SectionHeading icon={MessageCircle} title="Begin the Conversation" compact />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Whether you are a tourism enterprise, entrepreneur, educator, institution, destination stakeholder, technology provider, development partner, or ecosystem collaborator, we welcome opportunities to explore how stronger tourism ecosystems can be built through knowledge, collaboration, innovation, and shared purpose.</p>
            <p>Together, we can strengthen tourism through people, place, and long-term partnership.</p>
            <p>Contact us at <a className="font-semibold text-[#1f4f93] underline decoration-[#c28a5b] underline-offset-4" href="mailto:info@traveleye.lk">info@traveleye.lk</a> to begin the conversation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Closing Reflection" compact />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Strong tourism ecosystems are built not only through journeys and experiences, but through the people, partnerships, knowledge, and support systems that make those journeys possible.</p>
            <p>The People-Powered Ecosystem Support pillar approaches tourism as a connected ecosystem of capability, collaboration, stewardship, and shared learning.</p>
            <p>Because the future of tourism depends not only on where people travel.</p>
            <p>It depends on how people, places, and ecosystems grow stronger together.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
