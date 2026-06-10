import heroImg from '../assets/client/PPT Framework.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const approachPoints = [
  'People-centred',
  'Destination-aware',
  'Locally connected',
  'Inclusive and participatory',
  'Environmentally conscious',
  'Resilient and future-focused',
]

const pillars = [
  {
    icon: '🌍',
    title: 'People-Powered Travel Collective',
    text: 'Supporting meaningful journeys and travel experiences that strengthen connections between travellers, destinations, and tourism ecosystems.',
  },
  {
    icon: '🌿',
    title: 'People-Powered Host Experiences',
    text: 'Encouraging authentic experiences shaped through local people, culture, hospitality, creativity, nature, and place.',
  },
  {
    icon: '💼',
    title: 'People-Powered Ecosystem Support',
    text: 'Strengthening tourism participation, capability, readiness, collaboration, and long-term ecosystem resilience.',
  },
  {
    icon: '🧭',
    title: 'People-Powered Destination Facilitation',
    text: 'Supporting destination participation, stewardship, local engagement, and tourism ecosystem development.',
  },
]

const principles = [
  {
    title: 'Authenticity',
    text: 'Tourism should remain connected to people, culture, place, and local identity.',
  },
  {
    title: 'Participation & Shared Stewardship',
    text: 'Tourism thrives when people participate meaningfully and contribute to long-term destination wellbeing.',
  },
  {
    title: 'Women & Youth Entrepreneurship',
    text: 'Women and youth play an important role as creators, innovators, hosts, facilitators, and future tourism leaders.',
  },
  {
    title: 'Human-Centred Innovation',
    text: 'Innovation should remain connected to people, destinations, and lived realities.',
  },
  {
    title: 'Transparency & Shared Value',
    text: 'Tourism should encourage ethical participation, trust, and responsible value creation.',
  },
  {
    title: 'Inclusive Participation',
    text: 'Tourism becomes stronger when opportunities remain accessible and locally connected.',
  },
  {
    title: 'Sustainability & Stewardship',
    text: 'Natural, cultural, and social assets should be approached responsibly and thoughtfully.',
  },
  {
    title: 'Regenerative Development',
    text: 'Tourism should contribute positively to destinations, communities, and future generations.',
  },
]

const developmentPoints = [
  'Local participation and entrepreneurship',
  'Women and youth involvement',
  'Inclusive economic opportunity',
  'Cultural continuity and heritage appreciation',
  'Environmental awareness and stewardship',
  'Destination resilience and long-term wellbeing',
]

export default function PeoplePoweredTourismFramework() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye People-Powered Tourism Framework"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/32" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE PEOPLE-POWERED</span>
              <span className="block">TOURISM FRAMEWORK</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Tourism That Gives Back More Than It Takes
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFE7F3] text-lg">🌍</span>
            <span>Tourism That Gives Back More Than It Takes</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />

          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              The Traveleye People-Powered Tourism (PPT) Framework is a tourism innovation framework developed by Traveleye Alliance Sri Lanka to help create more connected, inclusive, and resilient tourism ecosystems.
            </p>
            <p>
              The framework reimagines tourism as more than travel, hospitality, or individual tourism businesses. Instead, it approaches tourism as a living ecosystem shaped by people, destinations, experiences, participation, stewardship, and long-term value creation.
            </p>
            <p>At its core, the framework is guided by a simple belief:</p>
            <p className="mx-auto max-w-3xl text-lg font-bold italic text-[#0f4d2f]">
              Tourism should create value not only for travellers, but also for the people, places, and destinations that make travel meaningful.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 pb-14 sm:px-6 sm:pb-18 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">A People-Powered Approach to Tourism</h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-lg">The PPT Framework encourages tourism systems that are:</p>
          </div>

          <div className="mx-auto mt-7 flex max-w-5xl flex-wrap justify-center gap-3">
            {approachPoints.map((point) => (
              <div
                key={point}
                className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              Rather than viewing tourism through isolated sectors, the framework encourages stronger connections between travellers, hosts, enterprises, destinations, communities, and tourism support systems.
            </p>
            <p>
              Through this approach, tourism becomes an opportunity to create meaningful experiences while contributing to broader social, cultural, environmental, and economic wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="mt-6 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl lg:justify-start">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFE7F3] text-lg">🧭</span>
                <span>Traveleye Alliance Sri Lanka</span>
              </h2>
              <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b] lg:mx-0" />
              <p className="mt-5 text-lg font-bold text-[#0f4d2f]">A People-Powered Tourism Ecosystem Builder</p>
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
                The PPT Framework serves as the strategic foundation of the Traveleye ecosystem.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
                As a People-Powered Tourism Ecosystem Builder, Traveleye Alliance seeks to strengthen tourism through participation, collaboration, stewardship, and ecosystem development.
              </p>
            </div>

            <div className="mx-auto w-full lg:mx-0 lg:flex lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
                  By helping connect people, destinations, enterprises, experiences, and tourism support systems, Traveleye works to foster tourism ecosystems that are more inclusive, connected, and sustainable over the long term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFE7F3] text-lg">🌿</span>
              <span>The Four People-Powered Pillars</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">
              The PPT Framework operates through four interconnected pillars that together contribute to stronger tourism ecosystems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <div className="text-3xl">{pillar.icon}</div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ecf8ef] text-3xl">🤝</span>
              <span>Participation and Shared Stewardship</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>A defining characteristic of the PPT Framework is its emphasis on participation.</p>
            <p>
              The framework recognises that tourism becomes stronger when people, enterprises, communities, and stakeholders are able to contribute meaningfully to its development.
            </p>
            <p>
              Participation is encouraged not only through tourism services and entrepreneurship, but also through collaboration, innovation, hosting, stewardship, and destination engagement.
            </p>
            <p>
              The framework promotes a culture of shared stewardship, where tourism stakeholders collectively contribute to the wellbeing, sustainability, and future of the destinations they help shape.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-transparent text-4xl">🌿</span>
              <span>Guiding Principles</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm text-[#475569] sm:text-base">
              The PPT Framework is guided by a set of interconnected principles that shape how tourism ecosystems are approached and strengthened.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-[#0f4d2f]">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-2xl">🌍</span>
              <span>International Alignment & Global Compatibility</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          </div>

          <div className="mx-auto max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              The Traveleye People-Powered Tourism Framework is informed by internationally recognised principles associated with regenerative tourism, sustainable tourism, destination stewardship, community-centred development, and responsible tourism participation.
            </p>
            <p>
              While developed in Sri Lanka, the framework is designed to remain adaptable across different destinations, cultures, and tourism environments.
            </p>
            <p>
              Its people-powered approach supports collaboration among tourism enterprises, destinations, communities, institutions, development partners, and ecosystem stakeholders while remaining grounded in local identity, participation, and stewardship.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-2xl">🌿</span>
              <span>Contribution to Sustainable Development</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mt-4 text-center italic text-base text-[#6b7b6a] sm:text-lg">
              Through its people-powered ecosystem approach, the framework seeks to contribute to broader sustainable development outcomes by encouraging:
            </p>
          </div>

          <ul className="mx-auto mt-6 max-w-3xl divide-y divide-[#eee]">
            {developmentPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 py-4 text-[#234c3a]">
                <span className="inline-flex h-6 w-6 items-center justify-center text-[#2f6b3f]">🌿</span>
                <span className="text-sm leading-6 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The framework aligns with the broader aspirations of the United Nations Sustainable Development Goals (SDGs), particularly those related to poverty reduction, gender equality, decent work, sustainable communities, responsible consumption, climate action, and ecosystem stewardship.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-2xl">🌿</span>
              <span>Looking Ahead</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />

            <div className="mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base">
              <p>
                The Traveleye People-Powered Tourism Framework was first developed in Sri Lanka but is designed to remain adaptable across destinations, cultures, and tourism ecosystems.
              </p>
              <p>
                By strengthening the connections between people, places, experiences, enterprises, and destinations, the framework seeks to support a future where tourism creates meaningful experiences, strengthens local participation, and contributes to long-term destination wellbeing.
              </p>
              <p className="font-bold text-[#0f4d2f]">Tourism That Gives Back More Than It Takes.</p>
              <p className="font-bold text-[#0f4d2f]">Tourism Shaped by the People Who Make It Possible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-[#1f4f93] sm:text-4xl">Begin the Conversation</h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Interested in learning more about the Traveleye People-Powered Tourism Framework, participation opportunities, ecosystem partnerships, or destination collaboration?
          </p>
          <p className="mt-4 text-sm font-bold leading-7 text-[#0f4d2f] sm:text-base">
            Contact us at info@traveleye.lk to begin the conversation.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
