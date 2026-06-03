import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const connectionCards = [
  'Travelers and destinations',
  'Hosted stays and hospitality',
  'Experiences and local connection',
  'Movement and meaning',
  'Journeys and participation',
]

const rolePoints = [
  'destinations',
  'hosted experiences',
  'hospitality ecosystems',
  'local participation',
  'events and celebrations',
  'destination engagement',
]

const engagementCards = [
  {
    title: 'Traveleye Inbound Journeys',
    subtitle: 'Meaningful Journeys Across Sri Lanka',
    text:
      'Our inbound journeys are thoughtfully shaped around the landscapes, culture, heritage, and everyday life of Sri Lanka. Each journey is guided through destination understanding, seamless coordination, and culturally aware travel design — allowing travelers to experience Sri Lanka with greater depth, authenticity, comfort, and connection. From iconic destinations to lesser-known places, journeys remain connected to the spirit and diversity of the island. ',
  },
  {
    title: 'Traveleye Outbound Journeys',
    subtitle: 'Expanding Perspectives Beyond Borders',
    text:
      'Designed for Sri Lankan travelers exploring the world, Outbound Journeys extends the Traveleye travel philosophy beyond national boundaries. Each journey is coordinated through careful planning, trusted partnerships, and meaningful travel experiences shaped with comfort, clarity, and responsible coordination. Our global travel engagement encourages broader perspectives, cultural understanding, and international connection through thoughtfully coordinated journeys. ',
  },
  {
    title: 'Traveleye Local Journeys',
    subtitle: 'Rediscover Sri Lanka, Thoughtfully',
    text:
      'Local Journeys encourages deeper connection with Sri Lanka’s destinations, landscapes, culture, and everyday life. These journeys move beyond routine travel experiences — creating more personal, immersive, and locally connected ways of exploring the island. Short escapes, cultural journeys, wellness retreats, and destination-based experiences are approached with authenticity, care, and local insight. ',
  },
  {
    title: 'Traveleye Events & Celebrations',
    subtitle: 'Purposeful Gatherings, Thoughtfully Coordinated',
    text:
      'From destination weddings and private celebrations to corporate gatherings, retreats, and special occasions, Traveleye coordinates events that balance creativity, elegance, and thoughtful coordination. Each gathering is shaped through careful planning, cultural sensitivity, and meaningful destination connection — helping experiences feel refined, memorable, and deeply connected to place. ',
  },
]

const responsibilityPoints = [
  'Respect for destinations and communities',
  'Thoughtful coordination and care',
  'Cultural awareness and sensitivity',
  'Meaningful local engagement',
  'Responsible tourism values',
  'Long-term destination wellbeing',
]

const collaborationPoints = [
  'Hospitality providers',
  'Destination collaborators',
  'Tourism stakeholders',
  'Local hosts and experience contributors',
  'Women and youth entrepreneurs',
  'Emerging Travelpreneurs',
  'Ecosystem collaborators',
]

const whyPoints = [
  'Destinations are respected rather than overwhelmed',
  'Local communities remain connected to tourism value creation',
  'Journeys encourage understanding and human connection',
  'Tourism contributes positively to destination wellbeing',
  'Travel experiences remain meaningful rather than transactional',
]

export default function TravelCollective() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">

      <section className="relative flex items-center min-h-[42vh] sm:min-h-[48vh] w-full overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Travel Collective banner"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-black/28" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">TRAVELEYE</span>
              <span className="block">TRAVEL COLLECTIVE</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Journeys Connected Through People
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Our Travel Engagements */}
      <section className="w-full bg-white px-4 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-8 lg:px-8 lg:pt-16 lg:pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 mx-auto max-w-3xl text-center">
            <h2 className="mt-0 flex items-center justify-center w-full gap-3 text-xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-3xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFE7F3] text-lg">🌍</span>
              <span>Our Travel Engagements</span>
            </h2>
            <div className="mt-3 h-0.5 w-24 bg-[#c28a5b] rounded mx-auto" />

          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {engagementCards.map((card) => {
              const isKey = /Inbound|Outbound|Local|Events/i.test(card.title)
              return (
                <article key={card.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                  <h3 className={`mt-3 text-xl font-bold tracking-tight sm:text-2xl ${isKey ? 'text-black' : 'text-[#0f4d2f]'}`}>{card.title}</h3>
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1F4F93] sm:text-xs sm:font-bold ${isKey ? 'mt-4' : ''}`}>{card.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{card.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="absolute inset-0 bg-transparent" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pt-6 pb-16 sm:px-6 sm:pt-8 sm:pb-20 lg:px-8 lg:pt-10 lg:pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="mt-0 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">Travel Within the Traveleye Ecosystem</h2>
            <div className="mt-3 h-0.5 w-24 bg-[#c28a5b] rounded mx-auto" />

            <p className="mt-4 max-w-5xl mx-auto text-center text-sm leading-7 text-slate-700 sm:text-lg">
              At Traveleye, travel is approached as more than transportation, bookings, or movement
              between destinations.
            </p>

            <p className="mt-4 max-w-5xl mx-auto text-center text-sm leading-7 text-slate-700 sm:text-lg">
              It is the thoughtful coordination of journeys — connecting travelers, destinations,
              hosted experiences, hospitality ecosystems, and local participation through meaningful
              and responsibly coordinated travel experiences.
            </p>

            <p className="mt-4 max-w-4xl mx-auto text-center text-xs tracking-wide text-slate-600 sm:text-base">
              Within the Traveleye ecosystem, travel acts as the connecting layer between:
            </p>

          </div>

          <div className="mx-auto mt-6">
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {connectionCards.map((item) => (
                <div
                  key={item}
                  className="inline-flex max-w-full items-center justify-center rounded-full bg-[#E8F1FF] border border-[#D6E8FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
 
          <div className="mx-auto mt-6">
            <p className="mx-auto max-w-6xl text-center italic text-base leading-7 text-slate-600 sm:text-xl">
              Through this approach, travel becomes more than an itinerary. It becomes a connected journey shaped through people, place, culture, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Role of Traveleye Travel Collective (two-column) */}
      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left column: intro text */}
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="mt-6 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFE7F3] text-lg">🧭</span>
                <span>The Role of Traveleye Travel Collective</span>
              </h2>
              <div className="mt-4 h-0.5 w-24 bg-[#c28a5b] rounded mx-auto" />
                {/* <h2 className="mt-6 text-4xl font-bold text-[#0f4d2f]">The Role of Traveleye Travel Collective</h2> */}

              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Travel within the ecosystem is coordinated through the Traveleye Travel Collective, the travel coordination ecosystem of Traveleye Alliance Sri Lanka.</p>

              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Its role extends beyond organizing travel. Rather than functioning as isolated tour operations, the Travel Collective helps bring together different parts of the tourism ecosystem to create journeys that feel more immersive, locally connected, and meaningfully coordinated.</p>
            </div>

            {/* Right column: white card with list */}
            <div className="mx-auto w-full lg:mx-0 lg:flex lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-base font-bold text-[#0f4d2f] sm:text-lg">Coordinating Seamless Experiences Across Sri Lanka & Beyond:</h3>

                <ul className="mt-5 space-y-2 sm:mt-6">
                  {rolePoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 border-t border-[#eef6f0] pt-4">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#ecf8ef] text-[#14532d]">🌿</span>
                      <span className="text-sm font-medium leading-6 text-[#234c3a]">{p.charAt(0).toUpperCase() + p.slice(1)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Guided by Responsibility */}
      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-transparent text-4xl mr-2 -translate-y-1">🌿</span>
              <span>Guided by Responsibility and Meaningful Connection</span>
            </h2>
            <div className="mt-3 h-0.5 w-20 bg-[#c28a5b] rounded mx-auto" />
            <p className="mt-6 text-sm text-[#475569] sm:text-base">Across all travel engagements, journeys are guided by a steadfast set of values:</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            {responsibilityPoints.map((point, i) => (
              <div key={point} className="mx-auto w-full max-w-lg">
                <div className="flex items-center gap-4 rounded-2xl bg-white border border-[#eef4ef] p-4 shadow-sm sm:gap-6 sm:p-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-transparent text-2xl sm:h-14 sm:w-14 sm:text-3xl">{['🤝','🌱','🙏','🏡','✨','🌍'][i]}</div>
                  <div className="text-left text-sm font-medium leading-6 text-[#141414] sm:text-base">{point}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mx-auto max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">"Because how people travel matters as much as where they travel."</p>
          </div>
        </div>
      </section>

            {/* Collaboration: Strengthening Travel Through Participation & Collaboration */}
      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ecf8ef] text-3xl">🤝</span>
              <span>Strengthening Travel Through Participation &amp; Collaboration</span>
            </h2>
            <div className="mt-3 h-0.5 w-20 bg-[#c28a5b] rounded mx-auto" />
            <p className="mt-6 text-sm text-[#475569] sm:text-base">Traveleye Travel Collective develops and coordinates journeys through collaboration with : </p>
          </div>

          <div className="mt-8 flex justify-center flex-wrap gap-3 sm:gap-4">
            {collaborationPoints.map((point) => (
              <div key={point} className="inline-flex max-w-full items-center justify-center rounded-full bg-[#E8F1FF] border border-[#efe6da] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mx-auto max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Through this collaborative ecosystem approach, travel becomes more than a commercial activity. It becomes a connected system that helps strengthen participation, destination value, and long-term tourism resilience across Sri Lanka.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Why Thoughtful Travel Matters */}
      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 max-w-3xl mx-auto text-center">
            <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-2xl">🌍</span>
              <span>Why Thoughtful Travel Matters</span>
            </h2>
            <div className="mt-3 h-0.5 w-24 bg-[#c28a5b] rounded mx-auto" />
            <p className="mt-4 text-center italic text-base text-[#6b7b6a] sm:text-lg">Thoughtfully coordinated travel helps encourage tourism systems where:</p>
          </div>

          <ul className="mt-6 max-w-3xl mx-auto divide-y divide-[#eee]">
            {whyPoints.map((point, i) => (
              <li key={point} className="flex items-start gap-4 py-4 text-[#234c3a]">
                <span className="inline-flex h-6 w-6 items-center justify-center text-[#2f6b3f]">🌿</span>
                <span className="text-sm leading-6 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-[#234c3a] pl-6 italic text-base text-[#3a4b3b] sm:text-lg">
              Travel is not simply about reaching a destination. It is about how the journey is experienced, how people connect along the way, and how tourism engages with the places it touches.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 7: Closing Reflection */}
      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-2xl">🌿</span>
              <span>Closing Reflection</span>
            </h2>
            <div className="mt-3 h-0.5 w-20 bg-[#c28a5b] rounded mx-auto" />

            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">Every journey begins with movement — but its meaning is shaped by how that movement connects with people and place.</p>

            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">Through Traveleye Travel Collective, travel is approached not simply as tourism activity, but as a connected ecosystem of journeys, experiences, participation, and destination responsibility.</p>
            <p className="mt-4 text-sm leading-7 text-[#6b7894] sm:text-base">Because meaningful travel is not only about where we go. It is about how we move, how we connect, and how we contribute along the way.</p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />

    </main>
  )
}
