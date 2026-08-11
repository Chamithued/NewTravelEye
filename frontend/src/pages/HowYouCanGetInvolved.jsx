import {
  ArrowRight,
  Building2,
  Globe2,
  Handshake,
  HeartHandshake,
  Network,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Join the movement2.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const ambitionPoints = [
  <><strong>develop and strengthen micro and small tourism enterprises</strong> across Sri Lanka;</>,
  <>create opportunities for youth and tourism entrepreneurs;</>,
  <>strengthen destinations and local tourism ecosystems;</>,
  <>connect tourism enterprises with tourism markets and strategic partnerships;</>,
  <>create memorable stays and meaningful experiences;</>,
  <>develop stronger travel corridors and international tourism relationships; and</>,
  <>create greater value for <strong>People, Places, Partnerships, and Prosperity</strong>.</>,
]

const relationshipPoints = [
  'Every traveller who chooses us helps us build greater capacity.',
  'Every tourism enterprise that works with us strengthens our network.',
  'Every destination partner expands our ability to create opportunities.',
  'Every strategic partnership helps us connect Sri Lanka with new markets, knowledge, resources, and possibilities.',
]

const participationPoints = [
  'Every relationship helps us learn.',
  'Every partnership helps us connect.',
  'Every journey helps us grow.',
  'Every enterprise we help strengthen expands the ecosystem.',
]

function IconBadge({ icon: Icon }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f1ff] text-[#1f4f93]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

function SectionHeading({ icon, children }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <IconBadge icon={icon} />
        <span>{children}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function TextBlock({ children }) {
  return (
    <div className="mx-auto mt-7 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
      {children}
    </div>
  )
}

export default function HowYouCanGetInvolved() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <img
          src={heroImg}
          alt="Building Something Bigger"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Building Something Bigger
            </h1>
            <p className="mt-4 text-sm font-semibold text-white/95 sm:text-base lg:text-lg">
              A Growing Organisation. A Bigger Vision for Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Network}>A Growing Organisation. A Bigger Vision for Sri Lanka.</SectionHeading>
          <TextBlock>
            <p>Traveleye Alliance Sri Lanka is building a <strong>People-Powered Tourism Ecosystem for Sri Lanka</strong>, with a focus on <strong>developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem</strong>.</p>
            <p>We are at the beginning of building an ecosystem that connects people, places, tourism enterprises, destinations, travellers, and partners through collaboration, stewardship, innovation, and meaningful partnerships.</p>
            <p>What we are building goes beyond tourism services. It is a long-term vision to create stronger connections, greater opportunities, and shared value across Sri Lanka&apos;s tourism ecosystem.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake}>Every Relationship Matters</SectionHeading>
          <TextBlock>
            <p>Building an ecosystem is a collective effort. Every relationship we build contributes to our ability to connect more people, strengthen more enterprises, develop more destinations, and create more opportunities.</p>
          </TextBlock>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
            {relationshipPoints.map((point) => (
              <div key={point} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#2f6b3f]" aria-hidden="true" />
                <p className="text-sm leading-7 text-[#475569] sm:text-base">{point}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-lg font-bold text-[#0f4d2f]">As we grow, every relationship matters to us.</p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Users}>Your Choice Becomes Part of Our Growth</SectionHeading>
          <TextBlock>
            <p>When you choose Traveleye, you are not simply choosing a tourism service.</p>
            <p>You are choosing to work with an organisation that is <strong>building, learning, connecting, and growing</strong> — and your participation helps us increase our capacity to do more.</p>
            <p>Whether you travel with us, stay with us, experience Sri Lanka with us, develop your tourism enterprise with us, or partner with us, your relationship contributes to our ability to create more opportunities across the tourism ecosystem.</p>
            <p><strong>Every journey, every enterprise, every destination, and every partnership can become part of something bigger.</strong></p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2}>Our Ambition Is Bigger Than Us</SectionHeading>
          <TextBlock>
            <p>Our ambition is not simply to grow Traveleye Alliance Sri Lanka.</p>
            <p>It is to grow the opportunities that tourism can create for Sri Lanka.</p>
            <p>Through the People-Powered Tourism Ecosystem, we aim to:</p>
          </TextBlock>
          <ul className="mx-auto mt-7 max-w-4xl divide-y divide-[#e7e5df] rounded-xl border border-[#ece8df] bg-white px-5 shadow-sm sm:px-8">
            {ambitionPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4 py-4 text-sm leading-7 text-[#475569] sm:text-base">
                <Sprout className="mt-1 h-4 w-4 shrink-0 text-[#62a84d]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Building2}>Building With People</SectionHeading>
          <TextBlock>
            <p>We believe an ecosystem cannot be built by one organisation alone.</p>
            <p>It grows through the participation of tourism entrepreneurs, enterprises, hosts, experience creators, destination stakeholders, communities, travellers, institutions, investors, and strategic partners.</p>
            <p>Our role is to <strong>connect, facilitate, develop, coordinate, and create opportunities</strong> so that more people and enterprises can participate in Sri Lanka&apos;s tourism economy.</p>
            <p>As the ecosystem grows, we want more people to have the opportunity to contribute, create, connect, and prosper through tourism.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Handshake}>We Invite You to Be Part of It</SectionHeading>
          <TextBlock>
            <p>We are building something bigger, step by step.</p>
            <p>You can become part of that growth by <strong>choosing us, working with us, partnering with us, and sharing the opportunities we create</strong>.</p>
          </TextBlock>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {participationPoints.map((point) => (
              <p key={point} className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium leading-6 text-[#234c3a] shadow-sm">{point}</p>
            ))}
          </div>
          <div className="mt-8 space-y-2 text-xl font-bold text-[#1f4f93] sm:text-2xl">
            <p>Together, we can build something bigger for Sri Lanka.</p>
            <p>A Growing Organisation.</p>
            <p>A Bigger Vision.</p>
            <p>A People-Powered Tourism Ecosystem.</p>
          </div>
          <p className="mt-8 text-xl font-bold text-[#1f4f93] sm:text-2xl">Be Part of It</p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
