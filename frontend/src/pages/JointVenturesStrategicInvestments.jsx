import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/Joint Ventures & Strategic Investments.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const participantTypes = [
  'Tourism enterprises',
  'Strategic investors',
  'Entrepreneurs and business leaders',
  'Family businesses',
  'Hospitality organisations',
  'Cooperative movements and cooperative societies',
  'Community groups and community-based organisations',
  'Non-governmental and development organisations',
  'Educational and research institutions',
  'Corporate organisations and CSR initiatives',
  'Financial institutions',
  'Philanthropic organisations and foundations',
  'International tourism partners',
  'Industry associations and professional bodies',
  'Ecosystem collaborators and strategic partners',
]

const ecosystemEncourages = [
  'Long-term partnership',
  'Tourism entrepreneurship',
  'Innovation and knowledge sharing',
  'Community participation',
  'Cooperative engagement',
  'Destination stewardship',
  'Women and youth entrepreneurship',
  'Responsible tourism development',
  'Long-term ecosystem resilience',
]

const sharedValuePoints = [
  'Long-term collaboration',
  'Shared knowledge and expertise',
  'Responsible investment approaches',
  'Tourism entrepreneurship',
  'Innovation and capability development',
  'Stronger destination ecosystems',
  'Community participation',
  'Inclusive tourism growth',
  'Sustainable value creation for people and place',
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
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

export default function JointVenturesStrategicInvestments() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Joint Ventures & Strategic Investments"
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
              Joint Ventures & Strategic Investments
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Building Stronger Tourism Through Partnership and Shared Vision
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Handshake} title="Building Stronger Tourism Through Partnership and Shared Vision" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Meaningful tourism development is built through collaboration, shared purpose, responsible investment, and long-term commitment.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages Joint Ventures and Strategic Investments that strengthen tourism ecosystems through participation, stewardship, collaboration, innovation, and shared value creation.</p>
            <p>Whether you represent a tourism enterprise, cooperative movement, community organisation, institution, investor, entrepreneur, or development partner, there are opportunities to participate in shaping a stronger and more connected future for tourism.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Partnership Within the Traveleye Ecosystem" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Within the Traveleye ecosystem, partnerships are viewed as long-term relationships built on trust, shared values, complementary strengths, and mutual benefit.</p>
            <p>Rather than focusing solely on commercial investment, the ecosystem encourages collaboration that strengthens destinations, tourism enterprises, communities, innovation, entrepreneurship, and long-term ecosystem resilience.</p>
            <p>Partnership becomes a platform for creating lasting value for people and place.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Explore Joint Ventures & Strategic Investments?" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Joint Ventures and Strategic Investments create opportunities to participate in tourism development through collaboration, innovation, knowledge sharing, responsible investment, and long-term partnership.</p>
            <p>The Traveleye ecosystem seeks to bring together people, organisations, expertise, and resources that can contribute to stronger tourism ecosystems while creating sustainable social, cultural, environmental, and economic value.</p>
            <p>Working together creates opportunities that extend beyond individual organisations and contribute to broader tourism ecosystem development.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Handshake} title="Who Can Participate?" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye ecosystem welcomes organisations and individuals who share a long-term vision for strengthening tourism through responsible partnership, collaboration, and shared value creation.</p>
            <p>Participation may include:</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
            <ArrowList items={participantTypes} />
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Each opportunity is explored according to shared objectives, destination priorities, tourism potential, and long-term ecosystem value.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={BriefcaseBusiness} title="Growing Through Partnership" />
          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Joint Ventures and Strategic Investments are about more than business relationships. They create opportunities to strengthen tourism through collaboration, innovation, participation, and shared responsibility.</p>
            <p>The ecosystem encourages:</p>
          </div>
          <ValueGrid items={ecosystemEncourages} icon={Lightbulb} />
          <p className="mx-auto mt-10 max-w-4xl text-center text-lg font-bold text-[#0f4d2f]">
            By combining expertise, resources, networks, and shared purpose, partnerships can help create stronger tourism ecosystems and broader opportunities for participation.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Creating Shared Value Through Collaboration" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Joint Ventures and Strategic Investments contribute to stronger tourism ecosystems by encouraging:
          </p>
          <ValueGrid items={sharedValuePoints} />
          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The objective is not simply to invest in tourism.</p>
            <p>It is to help build tourism ecosystems that create lasting value for destinations, enterprises, communities, and future generations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Leaf} title="Inspired by Shared Purpose. Strengthened Through Partnership." />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye approach recognises that meaningful tourism development is achieved through collaboration rather than isolation.</p>
            <p>Joint Ventures and Strategic Investments encourage organisations and individuals to work together through trust, stewardship, innovation, and shared responsibility, creating opportunities that strengthen tourism ecosystems while benefiting people and places.</p>
            <p>Together, we can help shape a stronger future for tourism through partnership and shared vision.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Looking Ahead" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As the Traveleye ecosystem continues to evolve, opportunities for Joint Ventures and Strategic Investments will continue to emerge through destination initiatives, tourism enterprises, ecosystem development, innovation, and long-term collaboration.</p>
            <p>By bringing together people, expertise, ideas, partnerships, and responsible investment, we believe tourism can create lasting value for communities, destinations, enterprises, and future generations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Whether you are an investor, tourism enterprise, cooperative movement, community organisation, entrepreneur, institution, development organisation, corporate partner, financial institution, or strategic collaborator, we welcome opportunities to explore meaningful partnerships that strengthen tourism through shared purpose and long-term collaboration.</p>
            <p>Together, we can help build stronger tourism ecosystems through people, place, partnership, and responsible investment.</p>
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
          <SectionHeading icon={Banknote} title="Closing Reflection" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>The future of tourism will be shaped by the partnerships we build today.</p>
            <p>Joint Ventures and Strategic Investments create opportunities to combine ideas, expertise, resources, community participation, and shared vision in ways that strengthen destinations, enterprises, communities, and tourism ecosystems.</p>
            <p><strong>Because meaningful tourism is not built through investment alone.</strong></p>
            <p><strong>It is built through partnerships that create lasting value for people, places, and future generations.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
