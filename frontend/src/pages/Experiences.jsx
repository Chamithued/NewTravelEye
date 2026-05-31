import React from 'react'
import heroImg from '../assets/client/Experiences2.png'

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
          <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-4xl text-center font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            HOST EXPERIENCES
          </h1>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#214F95]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-xl">🌿</span>
              <span>Traveleye Host Experiences</span>
            </h2>
            <p className="mt-3 text-lg text-[#2f6b3f]">Crafted Through People &amp; Place</p>

            <h3 className="mt-6 text-center text-lg font-bold text-[#141414]">Host Experiences Within the Traveleye Ecosystem</h3>

            <p className="mt-6 text-center max-w-3xl mx-auto text-base leading-7 text-[#475569]">At Traveleye, host experiences are not treated as isolated tourism activities or accommodation alone. They are part of a broader people-powered tourism ecosystem — connecting travelers with communities, culture, hospitality, nature, creativity, and everyday life across Sri Lanka.</p>

            <p className="mt-6 text-center max-w-3xl mx-auto text-base leading-7 text-[#475569]">Within the ecosystem, Host Experiences acts as the human connection layer between:</p>
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
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#214F95]">
              <span className="inline-flex h-8 w-8 items-center justify-center text-xl">🧭</span>
              <span>The Role of Traveleye Host Experiences</span>
            </h2>
          </div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#14334a]">Within the ecosystem:</h4>
                <h5 className="mt-3 text-xl font-bold text-[#141414]">Traveleye Host Experiences</h5>
                <p className="mt-3 text-sm text-[#475569]">develops and strengthens hosted experiences and people-connected hospitality ecosystems across Sri Lanka.</p>
                <p className="mt-2 text-sm text-[#475569]">Its role extends beyond offering tourism experiences or accommodation.</p>
                <p className="mt-4 text-sm text-[#475569]">Host Experiences works together with:</p>

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
                    <React.Fragment key={item}>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-green-700">✓</span>
                        <span>{item}</span>
                      </li>

                      {item === 'tourism stakeholders and ecosystem collaborators' && (
                        <li className="mt-4 list-none">
                          <div className="rounded-lg bg-[#f8fafb] border-l-4 border-green-700 p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
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

                              <div>
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
                          </div>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>

              {/* right column removed — content now rendered inline under the specific list item to avoid duplication */}
            </div>
          </div>

          <p className="mt-6 text-center italic text-sm text-[#6b7280]">This allows tourism experiences to remain grounded in authenticity, stewardship, and meaningful human connection.</p>
        </div>
      </section>

    </main>
  )
}
