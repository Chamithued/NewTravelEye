import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Handshake,
  Home,
  Leaf,
  LineChart,
  Plane,
  Sprout,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/subhero/How to Get Involved.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const opportunityCards = [
  {
    icon: Plane,
    title: 'Become a Travel Venture Partner',
    text: 'Help create meaningful travel connections through Travel Corridors, Island Journeys, and other travel initiatives that connect people and places through responsible tourism.',
    action: 'Explore Travel Venture Opportunities',
    to: '/become-a-travel-venture-partner',
  },
  {
    icon: Home,
    title: 'Create a Host Stay',
    text: 'Open your doors to authentic hospitality by developing hosted accommodation inspired by local culture, nature, wellness, heritage, and community life.',
    action: 'Explore Host Stay Opportunities',
    to: '/stays',
  },
  {
    icon: Leaf,
    title: 'Create a Travel Experience',
    text: 'Transform your knowledge, skills, traditions, creativity, or local way of life into authentic tourism experiences that connect travellers with people and place.',
    action: 'Explore Travel Experience Opportunities',
    to: '/experiences',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Develop an Ecosystem Support Venture',
    text: 'Contribute to stronger tourism through education, technology, advisory services, innovation, marketing, research, capability development, and ecosystem support initiatives.',
    action: 'Explore Ecosystem Support Opportunities',
    to: '/develop-an-ecosystem-support-venture',
  },
  {
    icon: Compass,
    title: 'Partner in Destination Development',
    text: 'Work alongside communities and tourism stakeholders to strengthen destinations through participation, stewardship, collaboration, and place-based tourism development.',
    action: 'Explore Destination Development Opportunities',
    to: '/destination-facilitation',
  },
  {
    icon: LineChart,
    title: 'Joint Ventures & Strategic Investments',
    text: 'Partner with Traveleye to explore collaborative tourism ventures, strategic investments, destination initiatives, and long-term ecosystem development opportunities.',
    action: 'Explore Partnership Opportunities',
    to: '/contact',
  },
  {
    icon: Handshake,
    title: 'Collaborate With Us',
    text: 'We welcome collaboration with government agencies, provincial tourism organisations, universities, NGOs, development partners, international organisations, chambers of commerce, and ecosystem collaborators who share our vision for stronger tourism.',
    action: 'Explore Collaboration Opportunities',
    to: '/contact',
  },
  {
    icon: Users,
    title: 'Travel With Purpose',
    text: 'Choose journeys that create meaningful experiences while supporting local people, culture, destinations, and responsible tourism across Sri Lanka.',
    action: 'Discover Purpose-Driven Travel',
    to: '/travel-collective',
  },
  {
    icon: Sprout,
    title: 'Support People-Powered Tourism',
    text: 'Help strengthen tourism participation, destination stewardship, women and youth entrepreneurship, local enterprises, and ecosystem initiatives that contribute to a more inclusive and resilient tourism future.',
    action: 'Explore Ways to Support Tourism Development',
    to: '/support-services',
  },
]

const participationPoints = [
  'Tourism becomes stronger when people have opportunities to contribute their ideas, knowledge, creativity, hospitality, leadership, investment, collaboration, and stewardship.',
  'Meaningful participation helps create tourism that is more connected, inclusive, resilient, and beneficial for destinations and future generations.',
  'Every partnership, every experience, every venture, and every journey has the potential to strengthen tourism through people and place.',
]

function IconBadge({ icon: Icon }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-[#1f4f93]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

function SectionHeading({ icon: Icon, title, ruleWidth = 'w-24' }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <IconBadge icon={Icon} />
        <span>{title}</span>
      </h2>
      <div className={`mx-auto mt-3 h-0.5 ${ruleWidth} rounded bg-[#c28a5b]`} />
    </div>
  )
}

export default function HowYouCanGetInvolved() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="How You Can Get Involved"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/18" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
               HOW YOU CAN GET INVOLVED
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Join the Traveleye People-Powered Tourism Ecosystem
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Users} title="Join the Traveleye People-Powered Tourism Ecosystem" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Tourism becomes stronger when more people have meaningful opportunities to participate, collaborate, create, and contribute.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">At Traveleye Alliance, we believe tourism should not only be experienced by travellers but also shaped by the people, communities, enterprises, institutions, and partners who make destinations meaningful.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Whether you are an entrepreneur, host, tourism professional, community organisation, investor, institution, development partner, or traveller, there are many ways to become part of Sri Lanka&apos;s growing People-Powered Tourism Ecosystem.</p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Together, we can strengthen tourism through participation, stewardship, collaboration, innovation, and shared value creation.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              <IconBadge icon={Users} />
              <span> Participation That Creates Shared Value</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>The Traveleye People-Powered Tourism Framework encourages meaningful participation across the tourism ecosystem, creating opportunities that strengthen people, destinations, enterprises, experiences, and long-term tourism resilience.</p>
              <p>Whether your contribution is large or small, every action has the potential to create positive impact for people and place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {opportunityCards.map(({ icon: Icon, title, text, action, to }) => (
              <article key={title} className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <IconBadge icon={Icon} />
                <h3 className="mt-4 text-xl font-bold leading-tight text-[#111827]">{title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p>
                <Link
                  to={to}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1f4f93] transition-colors hover:text-[#0f4d2f]"
                >
                  <span>{action}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              <IconBadge icon={Leaf} />
              <span> Why Participation Matters</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          </div>

          <ul className="mx-auto mt-8 max-w-4xl divide-y divide-[#eee]">
            {participationPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 py-4 text-[#234c3a]">
                <Leaf className="mt-1 h-4 w-4 shrink-0 text-[#62a84d]" aria-hidden="true" />
                <span className="text-sm leading-6 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" ruleWidth="w-20" />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>The Traveleye People-Powered Tourism Ecosystem will continue to expand opportunities for individuals, communities, enterprises, institutions, and partners to participate in shaping the future of tourism across Sri Lanka.</p>
            <p>By encouraging collaboration, stewardship, innovation, and shared value creation, we believe tourism can become a powerful platform for strengthening people, destinations, and prosperity for generations to come.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" ruleWidth="w-20" />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>If you share our vision for a more connected, inclusive, and people-powered tourism future, we would be delighted to explore how we can work together.</p>
            <p>Whether you wish to create, collaborate, invest, partner, host, travel, or support tourism development, we welcome the opportunity to begin the conversation.</p>
            <p className="font-bold text-[#0f4d2f]">Contact us at info@traveleye.lk to explore how you can get involved.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Closing Reflection" ruleWidth="w-20" />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Tourism is more than an industry.</p>
            <p>It is a shared opportunity to connect people, places, ideas, cultures, and communities in ways that create lasting value.</p>
            <p>The Traveleye People-Powered Tourism Ecosystem invites everyone to play a meaningful role in shaping that future.</p>
            <p className="font-bold text-[#0f4d2f]">Because stronger tourism is built not only by those who travel, but by everyone who chooses to participate.</p>
            
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
