import {
  Compass,
  Handshake,
  Leaf,
  Lightbulb,
  Mail,
  Network,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const philosophyCards = [
  {
    title: 'People-Powered Participation',
    text:
      'Tourism becomes stronger when people are able to participate meaningfully as hosts, entrepreneurs, experience providers, facilitators, collaborators, and tourism contributors.',
    icon: Users,
  },
  {
    title: 'Shared Stewardship',
    text:
      'Destinations thrive when tourism is guided by responsibility, respect for place, and long-term care for the people, cultures, environments, and communities that shape them.',
    icon: Leaf,
  },
  {
    title: 'Shared Value',
    text:
      'Tourism should seek to create broader value for travellers, enterprises, destinations, communities, and tourism stakeholders.',
    icon: Handshake,
  },
  {
    title: 'Regenerative Thinking',
    text:
      'Tourism should contribute positively to destinations and help strengthen long-term social, cultural, environmental, and economic wellbeing.',
    icon: Sprout,
  },
]

const rolePoints = [
  'As a People-Powered Tourism Ecosystem Builder',
  'Tourism participation',
  'Ecosystem collaboration',
  'Destination engagement',
  'Enterprise development',
  'Tourism readiness',
  'Ecosystem support',
  'Knowledge sharing',
  'Tourism innovation',
  'Long-term stewardship',
]

function SectionHeading({ icon: Icon, title, subtitle, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
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
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

function TextCard({ children }) {
  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
      <div className="space-y-5 text-sm leading-7 text-[#55636a] sm:text-base sm:leading-8">{children}</div>
    </article>
  )
}

export default function About() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="About Traveleye Alliance banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/16" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">ABOUT TRAVELEYE ALLIANCE</span> 
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Tourism for People, Planet, and Prosperity
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          {/* <SectionHeading
            icon={Network}
            title="About Traveleye Alliance"
            subtitle="Tourism for People, Planet, and Prosperity"
          /> */}
          <SectionHeading icon={Sprout} title="Tourism for People, Planet, and Prosperity" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Alliance Sri Lanka is a People-Powered Tourism Ecosystem Builder dedicated to strengthening tourism through participation, stewardship, collaboration, and long-term value creation.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Guided by the Traveleye People-Powered Tourism (PPT) Framework, Traveleye seeks to help create tourism ecosystems that are more inclusive, connected, destination-aware, and resilient over time.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The organization works to strengthen the relationships between travellers, destinations, tourism enterprises, hosts, communities, support systems, and tourism stakeholders while encouraging tourism that benefits both visitors and the places they visit.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading icon={Compass} title="Our Journey" center={false} />
            <div className="mt-8">
              <TextCard>
                <p>Traveleye Alliance began with a simple belief:</p>
                <p className="font-semibold text-[#1f4f93]">
                  Tourism should create value not only for travellers, but also for the people and places that make travel meaningful.
                </p>
                <p>
                  Years of engagement across destinations, tourism enterprises, communities, and tourism markets provided valuable insight into both the opportunities and challenges facing tourism.
                </p>
                <p>
                  These experiences reinforced the importance of participation, destination stewardship, local engagement, and long-term thinking in building stronger tourism futures.
                </p>
                <p>
                  Over time, this journey evolved beyond traditional tourism operations and contributed to the development of the Traveleye People-Powered Tourism Framework, which continues to guide the organization's direction today.
                </p>
              </TextCard>
            </div>
          </div>

          <div>
            <SectionHeading icon={Lightbulb} title="Our Evolution" center={false} />
            <div className="mt-8">
              <TextCard>
                <p>
                  Traveleye Alliance has evolved from a travel-focused business into a broader tourism ecosystem initiative.
                </p>
                <p>
                  Today, the organization focuses on strengthening tourism through a connected ecosystem approach that encourages participation, collaboration, destination engagement, and shared stewardship.
                </p>
                <p>
                  Rather than viewing tourism as a collection of isolated products and services, Traveleye approaches tourism as a connected ecosystem where journeys, experiences, destinations, enterprises, support systems, and tourism stakeholders contribute to broader tourism wellbeing.
                </p>
                <p>
                  This evolution reflects a commitment to helping create tourism ecosystems that remain locally connected, people-centred, and resilient over the long term.
                </p>
              </TextCard>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Leaf}
            title="Our Philosophy"
            subtitle="The Traveleye philosophy is guided by several interconnected beliefs."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {philosophyCards.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1FF] text-[#214F95]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-black sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-4xl">
            <SectionHeading icon={Handshake} title="Our Role" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <strong className="font-bold text-[#0f4d2f]">As a People-Powered Tourism Ecosystem Builder</strong>, Traveleye Alliance works to encourage stronger connections across tourism ecosystems through:
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-5xl gap-3 text-center sm:grid-cols-2 lg:grid-cols-3">
            {rolePoints.map((point) => (
              <li key={point} className="flex min-h-16 items-center justify-center gap-3 rounded-2xl border border-[#eef4ef] bg-white p-4 text-center shadow-sm">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ecf8ef] text-[#14532d]">
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium leading-6 text-[#234c3a]">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Through the Traveleye People-Powered Tourism Framework and its interconnected pillars, the organization seeks to contribute to stronger tourism ecosystems that create meaningful opportunities for people while supporting long-term destination wellbeing.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="Looking Ahead" />

          <div className="mt-8 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>Tourism continues to evolve, creating new opportunities and new responsibilities.</p>
            <p>
              Traveleye Alliance believes that the future of tourism will be shaped not only by where people travel, but also by how tourism supports destinations, communities, enterprises, and future generations.
            </p>
            <p>
              Guided by the People-Powered Tourism Framework, Traveleye remains committed to strengthening tourism through participation, stewardship, collaboration, innovation, and shared value creation.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
              Tourism That Gives Back More Than It Takes.
            </span>
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
              Tourism Shaped by the People Who Make It Possible.
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading icon={Mail} title="Begin the Conversation" />

          <div className="mx-auto mt-8 rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Whether you are a traveller, tourism enterprise, destination stakeholder, institution, community partner, or ecosystem collaborator, we welcome opportunities to connect and explore how stronger tourism ecosystems can be built together.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
