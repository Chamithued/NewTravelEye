import {
  CircleCheck,
  Compass,
  Handshake,
  Leaf,
  MapPinned,
  MessageCircle,
  Sparkles,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/subhero/Develop People & place Inspired Experience.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const collaborationPoints = [
  'Authentic local participation',
  'Tourism entrepreneurship',
  'Cultural appreciation and exchange',
  'Community engagement',
  'Destination identity',
  'Responsible tourism practices',
  'Women and youth entrepreneurship',
  'Meaningful visitor experiences',
  'Long-term destination resilience',
]

const sharedValuePoints = [
  'Greater local participation in tourism',
  'Authentic visitor engagement',
  'Cultural understanding and appreciation',
  'Support for local entrepreneurship and creativity',
  'Stronger destination identity',
  'Responsible tourism practices',
  'Shared stewardship',
  'Long-term value creation for people and place',
]

const participantPoints = [
  'local residents',
  'entrepreneurs',
  'artists',
  'craftspeople',
  'educators',
  'guides',
  'wellness practitioners',
  'farmers',
  'producers',
  'community organisations',
  'tourism enterprises',
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
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex max-w-full items-center justify-center rounded-lg border border-[#D6E8FF] bg-white px-4 py-2 text-center text-xs font-semibold text-[#214F95] shadow-sm sm:px-5 sm:py-3 sm:text-sm">
      {children}
    </span>
  )
}

function IconCard({ icon: Icon, children }) {
  return (
    <div className="flex min-h-24 items-center gap-4 rounded-lg border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-5 sm:p-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-left text-sm font-medium leading-6 text-[#141414] sm:text-base">{children}</span>
    </div>
  )
}

export default function Experiences() {
  const collaborationIcons = [
    UsersRound,
    Compass,
    Sparkles,
    Handshake,
    MapPinned,
    CircleCheck,
    Sprout,
    MessageCircle,
    Leaf,
  ]

  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Develop a People & Place-Inspired Experience banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/16" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">Develop a</span>
              <span className="block">People &amp; Place-Inspired Experience</span>
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Creating Meaningful Experiences Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Sprout} title="Creating Meaningful Experiences Through People and Place" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Every destination has stories waiting to be shared, traditions waiting to be experienced, and people whose knowledge, creativity, and way of life make each place unique.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages the development of People &amp; Place-Inspired Experiences that celebrate the identity of destinations through local culture, heritage, nature, creativity, hospitality, and meaningful human connection, creating authentic visitor experiences shaped by the people and places that make each destination unique.</p>
            <p>Whether you are an individual, entrepreneur, artisan, community organisation, educator, guide, farmer, wellness practitioner, or simply someone with a passion for sharing your destination, developing a People &amp; Place-Inspired Experience offers an opportunity to become part of Sri Lanka&apos;s growing People-Powered Tourism Ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={MapPinned} title="Experiences Within the Traveleye Ecosystem" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Within the Traveleye ecosystem, experiences are more than tourism activities. They are opportunities to connect travellers with the people, traditions, culture, landscapes, creativity, and everyday life that shape the identity of a destination.</p>
            <p>Rather than offering standard activities, People &amp; Place-Inspired Experiences encourage authentic engagement that helps travellers discover destinations through meaningful participation, local connection, and shared experiences shaped by people and place.</p>
            <p className="font-bold text-[#0f4d2f]">Every experience becomes an opportunity to understand a place through the people who live there.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Develop a People & Place-Inspired Experience?" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Developing a People &amp; Place-Inspired Experience creates opportunities to share local knowledge, culture, creativity, traditions, skills, and ways of life while participating in a connected tourism ecosystem that celebrates authentic local identity.</p>
            <p>The Traveleye approach encourages collaboration, innovation, responsible tourism, and long-term destination stewardship, helping participants create authentic experiences that celebrate the unique identity of their destinations.</p>
            <p>Experiences become opportunities to inspire learning, cultural exchange, appreciation, and meaningful connection between travellers and local communities.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={UsersRound} title="Who Can Participate?" />
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye ecosystem welcomes individuals and organisations interested in developing authentic tourism experiences inspired by the places they represent.</p>
            <p>Participation may include local residents, entrepreneurs, artists, craftspeople, educators, guides, wellness practitioners, farmers, producers, community organisations, tourism enterprises, and others who wish to share the uniqueness of their destinations through meaningful visitor engagement.</p>
            <p>Working together through the People-Powered Tourism Framework, participants can explore opportunities to develop People &amp; Place-Inspired Experiences that reflect the people, culture, heritage, nature, creativity, traditions, and identity of their destinations.</p>
            <p>Each opportunity is explored according to its local context, tourism potential, and the aspirations of participating individuals and communities.</p>
          </div>
          {/* <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {participantPoints.map((point) => (
                <Pill key={point}>{point}</Pill>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Growing Through Collaboration" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Developing a People &amp; Place-Inspired Experience is more than creating a tourism activity. It is an opportunity to become part of a collaborative tourism ecosystem that values participation, stewardship, innovation, and shared growth.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The ecosystem seeks to strengthen:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collaborationPoints.map((point, index) => {
              const Icon = collaborationIcons[index]
              return <IconCard key={point} icon={Icon}>{point}</IconCard>
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            By working together, local knowledge and creativity can create greater value for travellers, destinations, and communities alike.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sparkles} title="Creating Shared Value Through Experiences" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            People &amp; Place-Inspired Experiences contribute to stronger tourism ecosystems by encouraging:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedValuePoints.map((point) => (
              <div key={point} className="flex min-h-28 items-center gap-4 rounded-lg border border-[#eef4ef] bg-white p-4 shadow-sm">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                  <Leaf className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When experiences reflect the character of a destination, tourism becomes more meaningful for everyone.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Inspired by Place. Shared by People." />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye approach recognises that the most memorable travel experiences often emerge through genuine human connection, local knowledge, creativity, traditions, and everyday life.</p>
            <p>People &amp; Place-Inspired Experiences encourage local people to share the uniqueness of their destinations in ways that are authentic, engaging, and deeply connected to both people and place.</p>
            <p className="font-bold text-[#0f4d2f]">Together, we can create experiences that celebrate the diversity, creativity, and living culture of Sri Lanka.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={MapPinned} title="Looking Ahead" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As the Traveleye ecosystem continues to grow, People &amp; Place-Inspired Experiences will create new opportunities for people and communities to participate in tourism while strengthening destinations and celebrating their unique identity.</p>
            <p>By developing experiences through people and place, we believe tourism can create lasting value for travellers, communities, destinations, and future generations.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Whether you are an entrepreneur, guide, artisan, educator, community organisation, tourism enterprise, wellness practitioner, local resident, or destination stakeholder, we welcome opportunities to explore how you can develop a People &amp; Place-Inspired Experience within the Traveleye People-Powered Tourism Ecosystem.</p>
            <p>Together, we can create authentic experiences that celebrate people, place, and meaningful connection.</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <span>
                Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Closing Reflection" />
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>The most meaningful travel experiences are often created not by attractions alone, but by the people who share their knowledge, traditions, creativity, and way of life with others.</p>
            <p>People &amp; Place-Inspired Experiences celebrate the unique identity of destinations through authentic human connection that brings people and place together in meaningful and memorable ways.</p>
            <p><strong>Because meaningful tourism is not simply about seeing a destination.</strong></p>
            <p><strong>It is about experiencing the people, stories, traditions, and places that make it truly unforgettable.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
