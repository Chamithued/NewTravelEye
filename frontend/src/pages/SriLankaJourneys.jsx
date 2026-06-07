import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const experiences = [
  'Leisure & Holiday Travel',
  'Cultural & Heritage Journeys',
  'Nature & Wildlife Experiences',
  'Wellness & Slow Travel',
  'Pilgrimage & Spiritual Travel',
  'Family & Group Travel',
  'Educational & Learning Journeys',
  'Culinary Experiences',
  'Celebration & Special Occasion Travel',
  'Special Interest Experiences',
]

export default function SriLankaJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Sri Lanka Journeys banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/28" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE</span>
              <span className="block">SRI LANKA JOURNEYS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting People, Places and Experiences
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFE7F3] text-lg">🌍</span>
            <span>Discover Sri Lanka Through Meaningful Journeys</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveleye Sri Lanka Journeys connects travellers with the people, places, experiences, and stories that make Sri Lanka unique.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            From coastal escapes and cultural discoveries to nature adventures, wellness retreats, family holidays, pilgrimage journeys, and special interest travel, the platform creates opportunities to experience Sri Lanka in meaningful and memorable ways.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            As part of the Traveleye Travel Collective, Sri Lanka Journeys is guided by the belief that travel becomes more rewarding when it creates genuine connections between travellers, hosts, communities, and destinations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ecf8ef] text-3xl">🌿</span>
              <span>Experiences Across the Island</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Whether travelling for leisure, discovery, relaxation, learning, celebration, or personal enrichment, Traveleye Sri Lanka Journeys offers access to a diverse range of travel experiences across Sri Lanka.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#475569] sm:text-base">Experiences may include:</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {experiences.map((experience) => (
              <div
                key={experience}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-[#eef4ef] bg-white p-4 text-center text-sm font-semibold leading-6 text-[#214F95] shadow-sm sm:text-base"
              >
                {experience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl lg:justify-start">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFE7F3] text-lg">🧭</span>
              <span>Connecting People, Places and Experiences</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b] lg:mx-0" />
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Sri Lanka is more than a collection of destinations.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              It is a living tapestry of cultures, landscapes, traditions, hospitality, and stories.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Sri Lanka Journeys seeks to create travel experiences that connect visitors with the people and places that shape each destination, helping create meaningful memories while supporting more inclusive and sustainable tourism development.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-2xl">🌍</span>
            <span>Explore Sri Lanka More Meaningfully</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether discovering hidden gems, iconic attractions, cultural traditions, or local experiences, every journey offers an opportunity to connect more deeply with Sri Lanka and the people who call it home.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-2xl">🌿</span>
            <span>Traveleye Sri Lanka Journeys</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          <p className="mt-6 text-sm font-semibold text-[#6b7894] sm:text-base">
            Connecting People, Places and Experiences
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Begin the Conversation</h3>
            <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Whether you are planning a journey, experience, celebration, or special occasion, we would be delighted to help you explore the possibilities.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to discuss your requirements and begin planning your experience.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
