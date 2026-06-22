import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const collaboratorTypes = [
  'Government agencies',
  'Tourism authorities and destination organisations',
  'Provincial and local government institutions',
  'Universities and educational institutions',
  'Research organisations',
  'Cooperative movements and cooperative societies',
  'Community groups and community-based organisations',
  'Chambers of commerce and business associations',
  'Industry associations and professional bodies',
  'Non-governmental and development organisations',
  'International organisations and development partners',
  'Corporate organisations and CSR initiatives',
  'Tourism enterprises and hospitality organisations',
  'Media organisations and communication partners',
  'Technology and innovation organisations',
  'Ecosystem collaborators and strategic partners',
]

const collaborationEncourages = [
  'Knowledge sharing',
  'Tourism innovation',
  'Destination stewardship',
  'Community participation',
  'Research and education',
  'Entrepreneurship and capability development',
  'Women and youth empowerment',
  'Responsible tourism practices',
  'Sustainable tourism development',
  'Long-term ecosystem resilience',
]

const sharedValuePoints = [
  'Cross-sector partnerships',
  'Shared learning and knowledge exchange',
  'Innovation and creative problem solving',
  'Greater participation across tourism value chains',
  'Destination stewardship and local engagement',
  'Stronger institutional relationships',
  'Responsible tourism development',
  'Long-term value creation for people and place',
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

function ArrowList({ items }) {
  return (
    <ul className="divide-y divide-[#e8eef2]">
      {items.map((item) => (
        <li key={item} className="mx-auto grid max-w-xl grid-cols-[1rem_minmax(0,1fr)] items-center gap-3 py-3 text-left text-sm leading-6 text-[#234c3a] sm:text-base">
          <ArrowRight className="h-4 w-4 text-[#2f6b3f]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ValueGrid({ items, icon: Icon = Users }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((point) => (
        <div key={point} className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
          <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
        </div>
      ))}
    </div>
  )
}

export default function CollaborateWithUs() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Collaborate With Us"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Collaborate With Us
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Strengthening Tourism Through Partnership and Shared Purpose
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Tourism becomes stronger when people and organisations work together with a shared vision for creating positive and lasting impact.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages collaboration that brings together knowledge, experience, innovation, partnerships, and shared stewardship to strengthen tourism ecosystems through people and place.</p>
            <p>Whether you represent a public institution, private organisation, cooperative movement, community group, educational institution, development agency, tourism enterprise, or international organisation, we welcome opportunities to collaborate for the benefit of tourism and destinations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Collaboration Within the Traveleye Ecosystem" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Collaboration within the Traveleye ecosystem is built on working together to develop ideas, initiatives, programmes, knowledge, innovation, and partnerships that strengthen tourism through shared expertise and collective action.</p>
            <p>By bringing together diverse expertise and perspectives, collaboration can help strengthen destinations, tourism enterprises, local participation, entrepreneurship, sustainability, and long-term tourism resilience.</p>
            <p>Together, we can create solutions that benefit both people and place.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Collaborate WithTraveleye?" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Collaboration creates opportunities to share ideas, combine strengths, develop innovative initiatives, and contribute to the long-term development of tourism ecosystems.</p>
            <p>The Traveleye ecosystem encourages partnerships that create social, cultural, environmental, educational, and economic value while strengthening tourism through participation and shared responsibility.</p>
            <p>Working together enables greater impact than working alone.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Handshake} title="Who Can Collaborate?" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye ecosystem welcomes collaboration with organisations and institutions that share a commitment to strengthening tourism through people and place.</p>
            <p>Potential collaborators may include:</p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
            <ArrowList items={collaboratorTypes} />
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Each collaboration is explored according to shared objectives, complementary strengths, and opportunities to create long-term value for tourism ecosystems.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Growing Through Collaboration" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Collaboration creates opportunities to encourage:
          </p>
          <ValueGrid items={collaborationEncourages} icon={Lightbulb} />
          <p className="mx-auto mt-10 max-w-4xl text-center text-lg font-bold text-[#0f4d2f]">
            When organisations work together, tourism becomes more connected, inclusive, and adaptive.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Creating Shared Value Through Collaboration" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Collaborative initiatives contribute to stronger tourism ecosystems by encouraging:
          </p>
          <ValueGrid items={sharedValuePoints} />
          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Collaboration helps transform individual efforts into collective impact.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Inspired by Shared Purpose. Connected Through Partnership." />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye approach recognises that meaningful tourism development depends on collaboration between people, organisations, institutions, communities, and destinations.</p>
            <p>By working together through trust, shared purpose, and mutual respect, collaboration can create stronger tourism ecosystems that benefit both present and future generations.</p>
            <p>Together, we can strengthen tourism through people and place.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Looking Ahead" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As the Traveleye ecosystem continues to evolve, collaboration will remain central to strengthening tourism through knowledge sharing, innovation, participation, stewardship, and ecosystem development.</p>
            <p>By bringing together diverse partners and perspectives, we believe tourism can become more connected, resilient, inclusive, and sustainable.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Whether you represent a government institution, tourism organisation, university, cooperative movement, community group, NGO, development agency, corporate organisation, research institution, media organisation, tourism enterprise, or international partner, we welcome opportunities to explore meaningful collaboration that strengthens tourism through shared purpose and long-term partnership.</p>
            <p>Together, we can create initiatives that benefit people, places, destinations, and future generations.</p>
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
          <SectionHeading icon={BriefcaseBusiness} title="Closing Reflection" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Meaningful tourism is strengthened through the relationships we build, the knowledge we share, and the partnerships we create.</p>
            <p>Collaboration brings together people, organisations, ideas, and experience to create solutions that no single organisation can achieve alone.</p>
            <p><strong>Because stronger tourism is not built through individual effort alone.</strong></p>
            <p><strong>It is built through collaboration that connects people, places, and purpose for the benefit of future generations.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
