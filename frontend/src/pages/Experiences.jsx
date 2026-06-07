import React from 'react'
import heroImg from '../assets/client/Experiences2.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

export default function Experiences() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">

      <section className="relative flex items-center min-h-[48vh] w-full overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Host Experiences banner"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-black/28" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">TRAVELEYE</span>
              <span className="block">HOST EXPERIENCES</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">Crafted Through People &amp; Place</p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#214F95]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-xl">🌿</span>
              <span>Host Experiences Within the Traveleye Ecosystem</span>
            </h2>
            <div className="mt-3 h-0.5 w-24 bg-[#c28a5b] rounded mx-auto" />

            <p className="mt-6 text-center max-w-3xl mx-auto text-[1.15rem] leading-7 text-[#475569] sm:text-[1.2rem] sm:leading-8">At Traveleye, host experiences are not treated as isolated tourism activities or accommodation alone. They are part of a broader people-powered tourism ecosystem — connecting travelers with communities, culture, hospitality, nature, creativity, and everyday life across Sri Lanka.</p>

            <p className="mt-6 text-center max-w-3xl mx-auto text-[1.15rem] leading-7 text-[#475569] sm:text-[1.2rem] sm:leading-8">Within the ecosystem, Host Experiences acts as the human connection layer between:</p>
          </div>

          <div className="mx-auto mt-6">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'travelers and local life',
                'hosted stays and meaningful experiences',
                'destinations and lived culture',
                'tourism and participation',
                'hospitality and human connection',
              ].map((chip) => (
                <div key={chip} className="inline-flex items-center justify-center rounded-full bg-[#E8F1FF] border border-[#D6E8FF] px-6 py-3 text-sm font-semibold text-[#214F95] shadow-sm">
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto text-center">
            <p className="mt-6 max-w-4xl mx-auto text-base leading-7 text-[#475569]">Through this approach, experiences become more than activities and stays become more than accommodation. Together, they create meaningful journeys shaped through people, place, culture, and shared experience.</p>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#214F95]">
              <span className="inline-flex h-8 w-8 items-center justify-center text-xl">🧭</span>
              <span>The Role of Traveleye Host Experiences</span>
            </h2>
          </div>
          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#14334a] text-center">Within the ecosystem:</h4>
                <h5 className="mt-3 text-xl font-bold text-[#141414] text-center">Traveleye Host Experiences</h5>
                <p className="mt-3 mx-auto max-w-3xl text-sm text-[#475569] text-center">develops and strengthens hosted experiences and people-connected hospitality ecosystems across Sri Lanka.</p>
                <p className="mt-2 mx-auto max-w-3xl text-sm text-[#475569] text-center">Its role extends beyond offering tourism experiences or accommodation.</p>
                <p className="hidden">Host Experiences works together with:</p>

                <ul className="hidden">
                  {[
                    'local hosts and communities',
                    'hospitality ecosystems and providers',
                    'women and youth entrepreneurs',
                    'emerging Travelpreneurs',
                    'cultural practitioners and creators',
                    'wellness and lifestyle contributors',
                    'tourism stakeholders and ecosystem collaborators',
                  ].map((item) => (
                    <React.Fragment key={item}>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-green-700">✓</span>
                        <span>{item}</span>
                      </li>

                      {item === 'tourism stakeholders and ecosystem collaborators' && (
                        <li className="mt-4 list-none">
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div className="rounded-lg bg-[#f8fafb] border-l-4 border-green-700 p-6">
                                <p className="text-sm text-[#475569]">to help support experiences that remain connected to:</p>

                                <ul className="mt-4 space-y-3 text-sm text-[#475569]">
                                  {['real people', 'destination identity', 'local participation', 'hospitality and care', 'everyday ways of life'].map((sub) => (
                                    <li key={sub} className="flex items-start gap-3">
                                      <span className="mt-1 text-green-700">✓</span>
                                      <span>{sub}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="rounded-lg bg-[#f8fafb] border-l-4 border-green-700 p-6">
                                <p className="text-sm text-[#475569]">Experiences are thoughtfully integrated with:</p>

                                <ul className="mt-4 space-y-3 text-sm text-[#475569]">
                                  {[
                                    'journeys and travel coordination',
                                    'hosted stays and hospitality',
                                    'local participation and community engagement',
                                    'culture, nature, and everyday life',
                                  ].map((sub) => (
                                    <li key={sub} className="flex items-start gap-3">
                                      <span className="mt-1 text-green-700">✓</span>
                                      <span>{sub}</span>
                                    </li>
                                  ))}
                                </ul>
                            </div>
                          </div>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="rounded-lg bg-[#f8fafb] border-l-4 border-green-700 p-6">
                    <p className="text-base font-bold leading-7 text-[#14334a]">Host Experiences works together with:</p>

                    <ul className="mt-4 space-y-3 text-sm text-[#475569]">
                      {[
                        'local hosts and communities',
                        'hospitality ecosystems and providers',
                        'women and youth entrepreneurs',
                        'emerging Travelpreneurs',
                        'cultural practitioners and creators',
                        'wellness and lifestyle contributors',
                        'tourism stakeholders and ecosystem collaborators',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 text-green-700">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-[#f8fafb] border-l-4 border-green-700 p-6">
                    <p className="text-base font-bold leading-7 text-[#14334a]">to help support experiences that remain connected to:</p>

                    <ul className="mt-4 space-y-3 text-sm text-[#475569]">
                      {['real people', 'destination identity', 'local participation', 'hospitality and care', 'everyday ways of life'].map((sub) => (
                        <li key={sub} className="flex items-start gap-3">
                          <span className="mt-1 text-green-700">✓</span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-[#f8fafb] border-l-4 border-green-700 p-6">
                    <p className="text-base font-bold leading-7 text-[#14334a]">Experiences are thoughtfully integrated with:</p>

                    <ul className="mt-4 space-y-3 text-sm text-[#475569]">
                      {[
                        'journeys and travel coordination',
                        'hosted stays and hospitality',
                        'local participation and community engagement',
                        'culture, nature, and everyday life',
                      ].map((sub) => (
                        <li key={sub} className="flex items-start gap-3">
                          <span className="mt-1 text-green-700">✓</span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* right column removed — content now rendered inline under the specific list item to avoid duplication */}
            </div>
          </div>

          <p className="mt-6 text-center italic text-sm text-[#6b7280]">This allows tourism experiences to remain grounded in authenticity, stewardship, and meaningful human connection.</p>
        </div>
      </section>

      <section className="relative bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8">
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
            <h2 className="flex shrink-0 items-center justify-center gap-3 text-center text-2xl font-bold leading-tight tracking-tight text-[#0B3D86]">
              <span className="inline-flex h-8 w-8 items-center justify-center text-xl">🌍</span>
              <span>Hosted Experiences Across Sri Lanka</span>
            </h2>
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg border-t-4 border-[#0B3D86] bg-white p-8 shadow-sm md:p-10">
              <h3 className="max-w-xl text-xl font-bold leading-9 text-[#0B3D86]">
                Host Experiences within the Traveleye ecosystem emerge through:
              </h3>

              <ul className="mt-8 space-y-5 text-base text-[#141414]">
                {[
                  'culture and heritage',
                  'hospitality and local living',
                  'food, agriculture, and nature',
                  'crafts, livelihoods, and local knowledge',
                  'wellness and spiritual traditions',
                  'community interaction and shared moments',
                  'contemporary Sri Lankan lifestyles and evolving destinations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 text-lg font-semibold text-green-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-t-4 border-[#0B3D86] bg-white p-8 shadow-sm md:p-10">
              <h3 className="text-xl font-bold leading-9 text-[#0B3D86]">
                Hosted stays and hospitality environments may include:
              </h3>

              <ul className="mt-8 space-y-5 text-base text-[#141414]">
                {[
                  'heritage and community stays',
                  'nature-connected stays',
                  'boutique host environments',
                  'wellness and retreat spaces',
                  'coastal and lifestyle stays',
                  'contemporary hospitality experiences',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 text-lg font-semibold text-green-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-8 text-[#141414]">
            Together, these experiences help travelers engage more deeply with the people, places, and everyday rhythms that shape Sri Lanka.
          </p>
        </div>
      </section>

      <section className="relative bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8">
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
            <h2 className="flex shrink-0 items-center justify-center gap-3 text-center text-2xl font-bold leading-tight tracking-tight text-[#0B3D86]">
              <span className="inline-flex h-8 w-8 items-center justify-center text-xl">🌿</span>
              <span>A Hospitality &amp; Experience Ecosystem Built Through Participation</span>
            </h2>
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg border-t-4 border-[#0B3D86] bg-white p-8 shadow-sm md:p-10">
              <h3 className="text-xl font-bold leading-9 text-[#0B3D86]">
                As part of its ecosystem-building approach, Traveleye Host Experiences also encourages opportunities for:
              </h3>

              <ul className="mt-8 space-y-5 text-base text-[#141414]">
                {[
                  'local hosts and hospitality providers',
                  'communities and tourism collaborators',
                  'women and youth entrepreneurs',
                  'emerging Travelpreneurs',
                  'creative and cultural tourism initiatives',
                  'wellness and lifestyle experiences',
                  'destination-based hospitality and experience ventures',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 text-lg font-semibold text-green-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-t-4 border-[#0B3D86] bg-white p-8 shadow-sm md:p-10">
              <h3 className="text-xl font-bold leading-9 text-[#0B3D86]">
                Through collaboration and participation, the ecosystem helps strengthen:
              </h3>

              <ul className="mt-8 space-y-5 text-base text-[#141414]">
                {[
                  'local tourism participation',
                  'meaningful traveler-host relationships',
                  'destination identity and continuity',
                  'responsible tourism growth',
                  'people-centered hospitality ecosystems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 text-lg font-semibold text-green-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-5xl text-center text-lg font-semibold leading-8 text-[#141414]">
            Rather than operating through disconnected tourism structures, Host Experiences encourages tourism that remains locally rooted and connected to people and place.
          </p>
        </div>
      </section>

      <section className="relative bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8">
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
            <h2 className="flex shrink-0 items-center justify-center gap-3 text-center text-2xl font-bold leading-tight tracking-tight text-[#0B3D86]">
              <span className="inline-flex h-8 w-8 items-center justify-center text-xl">🤝</span>
              <span>Hospitality Connected to Real Life</span>
            </h2>
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
          </div>

          <div className="mx-auto mt-16 max-w-5xl text-center">
            <p className="text-lg text-[#141414]">Host Experiences are shaped through:</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                'culture and heritage',
                'local communities and everyday life',
                'nature and landscapes',
                'hospitality and human interaction',
                'creativity and contemporary lifestyles',
                'local identity and destination character',
              ].map((chip) => (
                <div key={chip} className="inline-flex items-center justify-center rounded-full border border-[#CFE1D6] bg-[#EEF7F1] px-6 py-3 text-base font-semibold text-[#2F6B4B]">
                  {chip}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-5xl text-lg leading-8 text-[#141414]">
              This allows travelers to experience destinations not only as visitors —but through genuine engagement with the people and places that shape everyday life across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8">
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
            <h2 className="flex shrink-0 items-center justify-center gap-3 text-center text-2xl font-bold leading-tight tracking-tight text-[#0B3D86]">
              <span className="inline-flex h-8 w-8 items-center justify-center text-xl">🌍</span>
              <span>Why Hosted Experiences Matter</span>
            </h2>
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
          </div>

          <div className="mt-16 p-8 md:p-12 lg:p-14">
            <p className="text-lg leading-8 text-[#141414]">
              Meaningful experiences shape how destinations are understood and remembered.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#141414]">
              Thoughtfully developed hosted experiences help encourage tourism systems where:
            </p>

            <ul className="mt-6 space-y-5 text-base text-[#141414]">
              {[
                'people remain at the center of tourism',
                'hospitality becomes more meaningful and human-centered',
                'culture and knowledge are respected rather than performed',
                'tourism value remains connected to destinations and communities',
                'travelers experience deeper connection with place',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 text-lg font-semibold text-green-700">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-r-lg border-l-4 border-[#0B3D86] bg-[#EAF3FF] px-8 py-8">
              <p className="text-base italic leading-8 text-[#0B3D86]">
                Because the most meaningful journeys are often shaped not only by where people travel —but by the people who welcome them along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8">
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
            <h2 className="flex shrink-0 items-center justify-center gap-3 text-center text-2xl font-bold leading-tight tracking-tight text-[#0B3D86]">
              <span className="inline-flex h-8 w-8 items-center justify-center text-xl">🌿</span>
              <span>Closing Reflection</span>
            </h2>
            <div className="hidden h-px flex-1 bg-slate-300 md:block" />
          </div>

          <div className="mx-auto mt-16 max-w-6xl text-center">
            <p className="text-lg leading-8 text-[#141414]">
              Meaningful travel is not created only through sightseeing or accommodation.
            </p>

            <p className="mt-8 text-lg leading-8 text-[#141414]">
              It is shaped through:
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                'hospitality',
                'connection',
                'participation',
                'culture',
                'shared human experience',
              ].map((chip) => (
                <div key={chip} className="inline-flex items-center justify-center rounded-full border border-[#CFE1D6] bg-[#EEF7F1] px-6 py-3 text-base font-semibold text-[#2F6B4B]">
                  {chip}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-5xl text-lg leading-8 text-[#141414]">
              Through Traveleye Host Experiences, tourism is approached not simply as tourism consumption, but as a connected ecosystem of hosted experiences, hospitality, culture, and destination life.
            </p>

            <div className="mx-auto mt-12 max-w-5xl px-8 py-9">
              <p className="text-base italic leading-8 text-[#0B3D86]">
                Because the most meaningful experiences are not simply visited.
              </p>
              <p className="mt-8 text-base italic leading-8 text-[#0B3D86]">
                They are shared, felt, and remembered through genuine human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />

    </main>
  )
}
