import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const ecosystemElements = [
  'journeys',
  'stays',
  'experiences',
  'destinations',
  'tourism enterprises',
  'ecosystem support services',
  'opportunities for participation',
]

const pillarCards = [
  {
    icon: '🌍',
    title: 'Traveleye Travel Collective',
    subtitle: 'Connecting Journeys Through People and Place',
    text:
      'Meaningful travel experiences that connect travellers with destinations across domestic, inbound, outbound, premium, corridor, and celebration travel.',
  },
  {
    icon: '🌿',
    title: 'Traveleye Host Experiences',
    subtitle: 'Crafting Experiences Through People and Place',
    text:
      'Authentic stays and immersive experiences inspired by local hospitality, culture, heritage, creativity, and nature.',
  },
  {
    icon: '💼',
    title: 'Traveleye Ecosystem Support',
    subtitle: 'Strengthening Tourism Through People and Place',
    text:
      'Knowledge, collaboration, innovation, capability development, and support systems that strengthen tourism ecosystems.',
  },
  {
    icon: '🧭',
    title: 'Traveleye Destination Facilitation',
    subtitle: 'Stewarding Destinations Through People and Place',
    text:
      'Destination engagement, stewardship, participation, and place-based initiatives that contribute to stronger tourism ecosystems.',
  },
]

const approachPoints = [
  'Tourism succeeds when travellers enjoy memorable experiences, destinations remain vibrant, enterprises thrive, and local people have meaningful opportunities to participate.',
  'An ecosystem approach helps strengthen these relationships by encouraging collaboration instead of fragmentation and long-term stewardship instead of short-term extraction.',
  'It creates stronger connections between tourism and the people and places that make travel meaningful.',
]

export default function OurEcosystemApproach() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Our Ecosystem Approach"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/32" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              OUR ECOSYSTEM APPROACH 
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Strengthening Tourism Through People, Place, and Participation
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Tourism is more than journeys, accommodation, attractions, or services. It is a living ecosystem where people, destinations, enterprises, experiences, and support systems are interconnected and mutually dependent.</p>
            <p>At Traveleye Alliance Sri Lanka, we believe tourism becomes stronger when these connections are nurtured through participation, collaboration, stewardship, and shared value creation.</p>
            <p>Our ecosystem approach recognises that meaningful tourism extends beyond individual businesses or destinations. It is about creating relationships that benefit travellers, local people, tourism enterprises, destinations, and future generations alike.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              A Connected Tourism Ecosystem
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          </div>

          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The Traveleye Ecosystem brings together journeys, stays, experiences, destinations, tourism enterprises, ecosystem support services, and opportunities for participation within a connected and people-powered approach to tourism.</p>
            <p>Rather than operating as isolated activities, these elements work together to create richer visitor experiences, stronger tourism enterprises, healthier destinations, and more resilient tourism ecosystems.</p>
            <p>By strengthening the connections between people and place, tourism can generate lasting social, cultural, environmental, and economic value.</p>
          </div>

          {/* <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {ecosystemElements.map((item) => (
              <div
                key={item}
                className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-center text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              Guided by the People-Powered Tourism Framework
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>The Traveleye Ecosystem is guided by the Traveleye People-Powered Tourism (PPT) Framework, which promotes participation, stewardship, collaboration, innovation, and long-term value creation across tourism ecosystems.</p>
              <p>This framework encourages tourism development that is inclusive, destination-aware, and people-centred while remaining responsive to changing visitor expectations and emerging opportunities.</p>
              <p>Rather than viewing tourism as a series of transactions, the framework encourages tourism as a system of relationships that creates value for everyone involved.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              Tourism Through People and Place
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>At the heart of our ecosystem approach is a simple belief:</p>
              <p className="text-lg font-bold leading-8 text-[#0f4d2f]">Meaningful tourism is created through people and place.</p>
              <p>Travellers seek authentic connections with local culture, heritage, nature, hospitality, creativity, and everyday life.</p>
              <p>Destinations become stronger when local participation, stewardship, entrepreneurship, and collaboration are encouraged alongside visitor experiences.</p>
              <p>Tourism flourishes when people and places grow together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              Four Connected Pillars
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">
              The Traveleye Ecosystem is supported through four interconnected pillars that strengthen different dimensions of tourism while contributing to a shared vision of People-Powered Tourism.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillarCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-2xl">
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">{card.title}</h3>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F4F93] sm:text-xs">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#55636a] sm:text-base">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              Why an Ecosystem Approach?
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          </div>

          <ul className="mx-auto mt-8 max-w-4xl divide-y divide-[#eee]">
            {approachPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 py-4 text-[#234c3a]">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-[#2f6b3f]">🌿</span>
                <span className="text-sm leading-6 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            Looking Ahead
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>As tourism continues to evolve, Traveleye Alliance remains committed to building a People-Powered Tourism Ecosystem that encourages participation, innovation, stewardship, and collaboration while creating long-term value for Sri Lanka's people, destinations, tourism enterprises, and visitors.</p>
            <p className="font-bold text-[#0f4d2f]">Because stronger tourism begins with stronger connections between people and place.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
