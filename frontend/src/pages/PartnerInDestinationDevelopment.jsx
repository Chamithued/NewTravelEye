import {
  Compass,
  Globe2,
  Handshake,
  Leaf,
  MapPinned,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Facilitation4.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const collaborationPoints = [
  'Shared destination stewardship',
  'Local participation',
  'Community engagement',
  'Tourism collaboration',
  'Innovation and entrepreneurship',
  'Women and youth participation',
  'Protection of destination identity',
  'Responsible tourism practices',
  'Long-term destination resilience',
]

const sharedValuePoints = [
  'Greater local participation in tourism',
  'Stronger collaboration between stakeholders',
  'More meaningful visitor experiences',
  'Celebration of local culture and identity',
  'Responsible tourism development',
  'Shared destination stewardship',
  'Greater destination resilience',
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

function ValueCard({ children }) {
  return (
    <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Users className="h-5 w-5" />
      </span>
      <p className="text-sm font-medium leading-6 text-[#141414]">{children}</p>
    </div>
  )
}

export default function PartnerInDestinationDevelopment() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Partner in Destination Development"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Partner in Destination Development
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Stewarding Destinations Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Strong tourism begins with strong destinations.</p>
            <p>Destinations are more than places to visit. They are living environments shaped by people, culture, heritage, landscapes, nature, livelihoods, and community life.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages collaborative destination development through participation, stewardship, collaboration, and shared value creation, helping destinations remain authentic, resilient, and meaningful for generations to come.</p>
            <p>Whether you represent a community, tourism enterprise, entrepreneur, institution, local organisation, or development partner, partnering in destination development offers an opportunity to become part of Sri Lanka's growing People-Powered Tourism Ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Destination Stewardship Within the Traveleye Ecosystem" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Within the Traveleye ecosystem, destination development is more than infrastructure or visitor promotion. It is about nurturing places through collaboration, local participation, stewardship, and long-term thinking.</p>
            <p>The ecosystem encourages tourism that remains connected to the people, culture, identity, and natural character of destinations while creating meaningful opportunities for local communities and visitors alike.</p>
            <p>Every destination has the potential to become stronger when people work together with a shared vision for its future.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Partner in Destination Development?" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Partnering in destination development creates opportunities to steward destinations through collaboration, participation, innovation, and shared responsibility while strengthening their long-term identity and wellbeing.</p>
            <p>Rather than working independently, participants become part of a connected tourism ecosystem that values local engagement, destination stewardship, responsible tourism, and long-term resilience.</p>
            <p>By working together, destinations can create greater value for communities, visitors, and future generations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Compass} title="Who Can Participate?" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye ecosystem welcomes individuals and organisations who share a vision for strengthening destinations through people and place.</p>
            <p>Participation may include local communities, entrepreneurs, tourism enterprises, community organisations, educational institutions, local authorities, government agencies, development organisations, professional bodies, destination stakeholders, and ecosystem collaborators.</p>
            <p>Working together through the People-Powered Tourism Framework, participants can explore opportunities that strengthen destination identity, participation, collaboration, stewardship, and long-term tourism resilience.</p>
            <p>Each opportunity is explored according to the unique character, aspirations, and potential of individual destinations and the people who shape them.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Growing Through Collaboration" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Partnering in destination development is more than supporting tourism initiatives. It is an opportunity to contribute to stronger tourism ecosystems through collective action and shared purpose.</p>
            <p>The ecosystem encourages:</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationPoints.map((point) => (
              <ValueCard key={point}>{point}</ValueCard>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When people work together, destinations become stronger, more inclusive, and better prepared for the future.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={MapPinned} title="Creating Shared Value for Destinations" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Collaborative destination development contributes to stronger tourism ecosystems by encouraging:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedValuePoints.map((point) => (
              <ValueCard key={point}>{point}</ValueCard>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When destinations are stewarded through participation and collaboration, tourism becomes more meaningful, resilient, and sustainable for everyone.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Inspired by Place. Guided by Stewardship." />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye approach recognises that the most successful destinations are shaped by the people who care for them and the partnerships they build together.</p>
            <p>Destination development is not simply about attracting visitors.</p>
            <p>It is about stewarding destinations through participation, collaboration, shared responsibility, and long-term care while preserving the unique identity and character of each place.</p>
            <p>Together, we can help destinations thrive through people and place.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Looking Ahead" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As the Traveleye ecosystem continues to evolve, destination development partnerships will create new opportunities for communities, organisations, entrepreneurs, institutions, and stakeholders to contribute to stronger tourism destinations across Sri Lanka.</p>
            <p>By stewarding destinations through people and place, we believe tourism can create lasting value for communities, travellers, and future generations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Whether you are a community organisation, entrepreneur, tourism enterprise, institution, local authority, development partner, destination stakeholder, or ecosystem collaborator, we welcome opportunities to explore how we can work together to steward destinations through participation, collaboration, and shared purpose.</p>
            <p>Together, we can help build destinations that are more connected, resilient, and meaningful for both local people and visitors.</p>
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
            <p>Strong destinations are shaped by the people who care for them, the culture they preserve, the landscapes they protect, and the partnerships they build together.</p>
            <p>Partnering in destination development is an opportunity to contribute to tourism through shared stewardship, helping destinations remain authentic, resilient, and meaningful for future generations.</p>
            <p>Because meaningful tourism is not only about bringing people to destinations.</p>
            <p>It is about stewarding the people and places that make those destinations worth experiencing.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
