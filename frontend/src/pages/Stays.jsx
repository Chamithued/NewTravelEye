import {
  BriefcaseBusiness,
  Globe2,
  Handshake,
  HeartHandshake,
  Home,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/client/stays_new.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const collaborationPoints = [
  'Authentic local hospitality',
  'Tourism entrepreneurship',
  'Community participation',
  'Destination identity',
  'Responsible tourism practices',
  'Women and youth entrepreneurship',
  'Meaningful visitor experiences',
  'Long-term destination resilience',
]

const sharedValuePoints = [
  'Greater local participation in tourism',
  'More authentic visitor experiences',
  'Cultural understanding and exchange',
  'Support for local entrepreneurship',
  'Stronger destination identity',
  'Responsible tourism practices',
  'Shared stewardship',
  'Long-term value creation for people and place',
]

function IconBadge({ icon: Icon }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? <IconBadge icon={Icon} /> : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function TextBlock({ children, tone = 'blue' }) {
  const color = tone === 'green' ? 'text-[#234c3a]' : tone === 'slate' ? 'text-slate-700' : 'text-[#475569]'

  return (
    <div className={`mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 ${color} sm:text-base sm:leading-8`}>
      {children}
    </div>
  )
}

function ValueCard({ icon: Icon, children }) {
  return (
    <div className="flex min-h-24 items-center gap-4 rounded-lg border border-[#eef4ef] bg-white p-4 shadow-sm">
      <IconBadge icon={Icon} />
      <p className="text-sm font-medium leading-6 text-[#141414]">{children}</p>
    </div>
  )
}

export default function Stays() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Develop a Place-Inspired Stay"
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
              Develop a Place-Inspired Stay
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Creating Authentic Hospitality Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Every destination has its own character, stories, traditions, landscapes, and way of life. The places where travellers stay should reflect that uniqueness.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages the development of Place-Inspired Stays that celebrate the identity of destinations through local hospitality, culture, heritage, nature, creativity, and meaningful human connection.</p>
            <p>Whether you are an individual, family, entrepreneur, property owner, or community organisation, developing a Place-Inspired Stay offers an opportunity to become part of Sri Lanka&apos;s growing People-Powered Tourism Ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Hospitality Within the Traveleye Ecosystem" />
          <TextBlock>
            <p>Within the Traveleye ecosystem, hospitality is more than providing accommodation. It is an opportunity to introduce travellers to the people, culture, traditions, landscapes, and everyday life that make each destination unique.</p>
            <p>Rather than focusing only on where travellers sleep, Place-Inspired Stays encourage hospitality experiences that reflect the spirit of a destination while strengthening local participation and long-term destination wellbeing.</p>
            <p>Every stay becomes an opportunity to experience a place through the people who know it best.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Develop a Place-Inspired Stay?" />
          <TextBlock>
            <p>Developing a Place-Inspired Stay creates opportunities to participate in tourism through authentic hospitality while becoming part of a connected tourism ecosystem.</p>
            <p>The Traveleye approach encourages collaboration, innovation, responsible tourism, and long-term destination stewardship, helping participants create meaningful hospitality experiences that celebrate the unique identity of their destinations.</p>
            <p>Hospitality becomes a way of sharing stories, culture, traditions, and local ways of life while creating value for both travellers and host communities.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Home} title="Who Can Participate?" />
          <TextBlock tone="slate">
            <p>The Traveleye ecosystem welcomes individuals and organisations interested in developing hospitality experiences inspired by the places they represent.</p>
            <p>Participation may include families, entrepreneurs, property owners, estate owners, hospitality providers, community organisations, and others who share a passion for authentic hospitality and meaningful tourism.</p>
            <p>Working together through the People-Powered Tourism Framework, participants can explore opportunities to develop Place-Inspired Stays that reflect the unique people, culture, heritage, nature, creativity, and identity of their destinations.</p>
            <p>Each opportunity is explored according to its local context, tourism potential, and the aspirations of participating hosts and communities.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Growing Through Collaboration" />
          <TextBlock>
            <p>Developing a Place-Inspired Stay is more than creating a tourism offering. It is an opportunity to become part of a collaborative tourism ecosystem that values participation, stewardship, innovation, and shared growth.</p>
            <p>The ecosystem seeks to strengthen:</p>
          </TextBlock>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collaborationPoints.map((point, index) => {
              const icons = [HeartHandshake, BriefcaseBusiness, UsersRound, MapPinned, ShieldCheck, Sprout, Sparkles, Leaf]
              const Icon = icons[index]
              return <ValueCard key={point} icon={Icon}>{point}</ValueCard>
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            By working together, local hospitality can create greater value for travellers, destinations, and communities alike.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Creating Shared Value Through Hospitality" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Place-Inspired Stays contribute to stronger tourism ecosystems by encouraging:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedValuePoints.map((point) => (
              <ValueCard key={point} icon={UsersRound}>{point}</ValueCard>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When hospitality reflects the character of a destination, tourism becomes more meaningful for everyone.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Inspired by Place. Shaped by People." />
          <TextBlock>
            <p>The Traveleye approach recognises that the most memorable places to stay are often those that reflect the people, culture, landscapes, traditions, and everyday life of the communities that welcome travellers.</p>
            <p>Place-Inspired Stays encourage local people to share the uniqueness of their destinations through hospitality that feels authentic, personal, and deeply connected to place.</p>
            <p>Together, we can create hospitality experiences that celebrate the diversity and richness of Sri Lanka.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={MapPinned} title="Looking Ahead" />
          <TextBlock>
            <p>As the Traveleye ecosystem continues to grow, Place-Inspired Stays will create new opportunities for people and communities to participate in tourism while strengthening destinations and preserving their unique identity.</p>
            <p>By developing hospitality through people and place, we believe tourism can create lasting value for travellers, communities, destinations, and future generations.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" />
          <TextBlock>
            <p>Whether you are a family, property owner, entrepreneur, hospitality provider, community organisation, or tourism stakeholder, we welcome opportunities to explore how you can develop a Place-Inspired Stay within the Traveleye People-Powered Tourism Ecosystem.</p>
            <p>Together, we can create authentic hospitality experiences that celebrate people, place, and meaningful connection.</p>
          </TextBlock>
          <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at<a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a>to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Closing Reflection" />
          <TextBlock>
            <p>The most memorable places to stay are shaped not only by buildings or facilities, but by the people who welcome us, the stories they share, and the places they call home.</p>
            <p>Place-Inspired Stays celebrate the unique identity of destinations through authentic hospitality that connects travellers with local people and place.</p>
            <p>Because meaningful hospitality is not simply about providing a place to stay.</p>
            <p>It is about creating experiences that reflect the heart, character, and spirit of the places we visit.</p>
          </TextBlock>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
