import {
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Network,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const frameworkPoints = [
  'People-centred',
  'Inclusive and participatory',
  'Destination-aware',
  'Culturally respectful',
  'Environmentally conscious',
  'Resilient over time',
]

const glanceCards = [
  {
    icon: '🌍',
    title: 'People-Powered Tourism',
    text: 'Guided by a tourism framework centred on participation, stewardship, and long-term value creation.',
  },
  {
    icon: '🤝',
    title: 'Inclusive Participation',
    text: 'Encouraging broader participation across tourism ecosystems, including opportunities for women and youth entrepreneurs.',
  },
  {
    icon: '🌿',
    title: 'Destination Stewardship',
    text: 'Supporting tourism that remains connected to people, place, culture, and long-term destination wellbeing.',
  },
  {
    icon: '💡',
    title: 'Human-Centred Innovation',
    text: 'Encouraging innovation that strengthens tourism while remaining grounded in people and destinations.',
  },
  {
    icon: '🌏',
    title: 'Connected Ecosystems',
    text: 'Strengthening relationships between travellers, hosts, enterprises, destinations, and tourism stakeholders.',
  },
  {
    icon: '📈',
    title: 'Long-Term Resilience',
    text: 'Supporting tourism ecosystems that are more inclusive, adaptable, and sustainable over time.',
  },
]

const approachSections = [
  {
    icon: Users,
    title: 'People-Powered Participation',
    paragraphs: [
      'We believe tourism becomes stronger when opportunities for participation are more accessible and inclusive.',
      'The Traveleye ecosystem encourages participation from tourism enterprises, hosts, entrepreneurs, tourism professionals, community members, institutions, and ecosystem partners who contribute to strengthening tourism in different ways.',
      'Particular importance is placed on encouraging opportunities for women and youth participation, helping create tourism ecosystems that are more diverse, resilient, and locally connected.',
    ],
  },
  {
    icon: Leaf,
    title: 'Meaningful Travel Experiences',
    paragraphs: [
      'Travel is about more than visiting destinations.',
      'It is about connecting with people, culture, nature, heritage, hospitality, and place.',
      'Through our ecosystem approach, we seek to encourage travel experiences that help travellers engage more meaningfully with destinations while supporting broader participation and destination wellbeing.',
    ],
  },
  {
    icon: Sprout,
    title: 'Destination Stewardship and Long-Term Thinking',
    paragraphs: [
      'Destinations are more than places to visit.',
      'They are living environments shaped by people, culture, heritage, nature, and community life.',
      'The Traveleye approach encourages tourism that respects these connections and recognises the importance of long-term destination wellbeing.',
      'By promoting participation, stewardship, collaboration, and responsible tourism practices, we seek to contribute to stronger and more resilient destinations over time.',
    ],
  },
  {
    icon: Handshake,
    title: 'Collaboration Creates Stronger Tourism',
    paragraphs: [
      'We believe tourism is strengthened through collaboration.',
      'Meaningful tourism outcomes are rarely created by a single organization alone.',
      'They emerge through the collective efforts of travellers, hosts, enterprises, communities, institutions, tourism professionals, and ecosystem partners working together.',
      'The Traveleye ecosystem seeks to create environments where these connections can grow and where tourism stakeholders can contribute to shared long-term success.',
    ],
  },
]

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

function CheckList({ items }) {
  return (
    <ul className="mx-auto mt-6 max-w-2xl divide-y divide-[#eef6f0] text-left">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-3">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#ecf8ef] text-[#14532d]">
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium leading-6 text-[#234c3a] sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function WhyTraveleyePage() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Why Traveleye banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">WHY TRAVELEYE</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              A Different Approach to Tourism
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading icon={Globe2} title="A Different Approach to Tourism" />

          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Alliance Sri Lanka was established on the belief that tourism can create stronger and more lasting outcomes when it remains connected to people, destinations, participation, and stewardship.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              While many tourism businesses focus primarily on transactions, products, or visitor movement, Traveleye approaches tourism as a connected ecosystem where travellers, hosts, enterprises, communities, destinations, and tourism stakeholders all contribute to the visitor experience.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              This perspective guides everything we do and shapes our role as a People-Powered Tourism Ecosystem Builder.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Network} title="Guided by the People-Powered Tourism Framework" />

          <div className="mx-auto mt-7 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              The Traveleye People-Powered Tourism Framework provides the strategic foundation for our approach to tourism.
            </p>
          </div>

          <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#eef4ef] sm:p-6">
            <h3 className="text-center text-base font-bold text-[#0f4d2f] sm:text-lg">
              The framework encourages tourism that is:
            </h3>
            <CheckList items={frameworkPoints} />
          </div>

          <div className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              By strengthening the connections between people, places, experiences, enterprises, and destinations, we seek to contribute to tourism that creates lasting value beyond individual journeys.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {approachSections.map(({ icon: Icon, title, paragraphs }) => (
              <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <h2 className="flex items-start gap-3 text-xl font-bold leading-tight text-[#1f4f93] sm:text-2xl">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>{title}</span>
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" />

          <div className="mt-8 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>
              As tourism continues to evolve, Traveleye Alliance remains committed to strengthening tourism through participation, stewardship, innovation, collaboration, and long-term value creation.
            </p>
            <p>
              Guided by the People-Powered Tourism Framework, we seek to help create tourism ecosystems that benefit travellers while supporting destinations, communities, enterprises, and future generations.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
              Tourism for People, Planet, and Prosperity.
            </span>
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
              Tourism Shaped by the People Who Make It Possible.
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Lightbulb} title="Why Traveleye at a Glance" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            {glanceCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm">
                <div className="flex h-full items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-2xl">
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-tight text-[#1f4f93]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#475569]">{card.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Handshake} title="Begin the Conversation" />

          <p className="mt-8 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Interested in learning more about Traveleye Alliance, the People-Powered Tourism Framework, ecosystem collaboration, partnerships, or participation opportunities?
          </p>
          <p className="mt-5 text-base font-bold leading-7 text-[#00466f] sm:text-lg">
            Contact us at info@traveleye.lk to begin the conversation.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
