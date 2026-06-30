import {
  BriefcaseBusiness,
  Check,
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/Develop an Ecosystem Support Venture.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const strengthenPoints = [
  'Tourism capability and knowledge',
  'Innovation and entrepreneurship',
  'Collaboration and partnership',
  'Enterprise development',
  'Destination readiness',
  'Professional growth',
  'Women and youth entrepreneurship',
  'Responsible tourism practices',
  'Long-term ecosystem resilience',
]

const sharedValuePoints = [
  'Greater participation across tourism value chains',
  'Knowledge sharing and capability development',
  'Innovation and creative problem solving',
  'Collaboration between tourism stakeholders',
  'Enterprise growth and entrepreneurship',
  'Stronger destination readiness',
  'Responsible tourism practices',
  'Long-term value creation for people and place',
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function CheckList({ items }) {
  return (
    <ul className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex min-h-20 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
            <Check className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium leading-6 text-[#234c3a]">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function DevelopEcosystemSupportVenture() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Develop an Ecosystem Support Venture"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/34" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Develop an Ecosystem Support Venture
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Strengthening Tourism Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            Strengthening Tourism Through People and Place
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Meaningful tourism depends not only on journeys and experiences, but also on the people, knowledge, innovation, collaboration, and support systems that help tourism ecosystems grow and thrive.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages the development of Ecosystem Support Ventures that strengthen tourism by supporting people, enterprises, destinations, and tourism ecosystems through knowledge, capability, innovation, and collaboration.</p>
            <p>Whether you are an entrepreneur, professional, educator, technology provider, consultant, researcher, creative practitioner, institution, or organisation, developing an Ecosystem Support Venture offers an opportunity to become part of Sri Lanka&apos;s growing People-Powered Tourism Ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Support Within the Traveleye Ecosystem" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Within the Traveleye ecosystem, support extends far beyond operational services. It includes the knowledge, capability, innovation, technology, communication, collaboration, and leadership that enable tourism ecosystems to grow sustainably.</p>
            <p>Ecosystem Support Ventures help strengthen tourism by creating solutions that improve capability, encourage participation, foster innovation, and build stronger connections across the tourism value chain.</p>
            <p>Every support initiative becomes an opportunity to strengthen people, places, and tourism ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Develop an Ecosystem Support Venture?" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Developing an Ecosystem Support Venture creates opportunities to contribute to tourism through knowledge, innovation, professional expertise, technology, education, collaboration, and enterprise development.</p>
            <p>Rather than working in isolation, participants become part of a connected ecosystem that encourages partnership, shared learning, responsible innovation, and long-term tourism resilience.</p>
            <p>Supporting tourism can be just as valuable as delivering tourism itself.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Users} title="Who Can Participate?" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye ecosystem welcomes individuals and organisations interested in strengthening tourism through ideas, expertise, technology, services, innovation, education, research, communication, collaboration, and enterprise development.</p>
            <p>Participation may include entrepreneurs, consultants, educators, trainers, researchers, technology providers, media professionals, creative practitioners, financial service providers, sustainability specialists, institutions, and organisations that share a vision for stronger tourism ecosystems.</p>
            <p>Working together through the People-Powered Tourism Framework, participants can explore opportunities to develop Ecosystem Support Ventures that strengthen tourism through people, place, knowledge, collaboration, and innovation.</p>
            <p>Each opportunity is explored according to local needs, ecosystem priorities, and the strengths of participating individuals and organisations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Growing Through Collaboration" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Developing an Ecosystem Support Venture is more than building a business or service. It is an opportunity to contribute to the long-term capability and resilience of tourism ecosystems.</p>
            <p>The ecosystem seeks to strengthen:</p>
          </div>
          <CheckList items={strengthenPoints} />
          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By working together, support ventures can create lasting value for people, destinations, enterprises, and tourism ecosystems.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Lightbulb} title="Creating Shared Value Through Ecosystem Support" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Ecosystem Support Ventures contribute to stronger tourism ecosystems by encouraging:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedValuePoints.map((point) => (
              <div key={point} className="flex min-h-28 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                  <Leaf className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When tourism ecosystems are well supported, destinations become more connected, resilient, and sustainable.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Leaf} title="Inspired by Purpose. Strengthened Through Collaboration." />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye approach recognises that successful tourism depends on many people working together behind the scenes.</p>
            <p>Ecosystem Support Ventures encourage individuals and organisations to contribute their expertise, innovation, and leadership in ways that strengthen tourism while creating opportunities for collaboration and shared growth.</p>
            <p>Together, we can build stronger tourism ecosystems through people, place, knowledge, and partnership.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Looking Ahead" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As the Traveleye ecosystem continues to evolve, Ecosystem Support Ventures will create new opportunities for entrepreneurs, professionals, institutions, and organisations to contribute to stronger tourism ecosystems through collaboration, innovation, and shared purpose.</p>
            <p>By strengthening tourism through people and place, supported by knowledge and innovation, we believe tourism can create lasting value for destinations and future generations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Whether you are an entrepreneur, consultant, educator, researcher, technology provider, creative professional, institution, development partner, or organisation, we welcome opportunities to explore how you can develop an Ecosystem Support Venture within the Traveleye People-Powered Tourism Ecosystem.</p>
            <p>Together, we can strengthen tourism through knowledge, collaboration, innovation, and shared purpose.</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Closing Reflection" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Strong tourism ecosystems are built not only through journeys and experiences, but through the people, ideas, knowledge, innovation, and partnerships that support them.</p>
            <p>Ecosystem Support Ventures create opportunities to contribute to tourism in ways that strengthen destinations, enterprises, and communities through collaboration and shared value creation.</p>
            <p><strong>Because stronger tourism is not built by one sector alone.</strong></p>
            <p><strong>It is built by people and organisations working together to strengthen the ecosystems that make meaningful tourism possible.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
