import { Check, CircleDot, Globe2, Handshake, Leaf, Sprout, UsersRound } from 'lucide-react'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'
import heroImg from '../assets/client/SupportServices.png'

const supportFocus = [
  'Enabling participation',
  'Strengthening capability',
  'Supporting collaboration',
  'Improving ecosystem readiness',
  'Encouraging long-term resilience',
]

const collaboratorGroups = [
  'Tourism stakeholders',
  'Communities and local collaborators',
  'Women and youth entrepreneurs',
  'Emerging Travelpreneurs',
  'Hospitality ecosystems',
  'Destination ecosystems',
  'Emerging tourism enterprises',
  'Ecosystem collaborators',
]

const strengthenAreas = [
  'Capability and practical readiness',
  'Coordination and ecosystem quality',
  'Communication and collaboration',
  'Access to knowledge, systems, and shared resources',
  'Responsible use of tools and innovation',
  'Long-term tourism resilience and continuity',
]

const capabilityOutcomes = [
  'Confidence',
  'Participation',
  'Responsibility',
  'Collaboration',
  'Long-term local capability',
]

const participationPoints = [
  'Tourism participation and destination readiness',
  'Collaboration across tourism networks',
  'Ecosystem coordination and continuity',
  'Community confidence and leadership',
  'Inclusive and sustainable tourism growth',
  'Long-term tourism resilience',
]

const futureValues = [
  'People-centered',
  'Collaborative',
  'Locally connected',
  'Adaptable over time',
  'Ethically guided',
  'Regenerative in outlook',
]

const whySupportMatters = [
  'People are prepared rather than overwhelmed',
  'Destinations grow with balance and continuity',
  'Tourism remains inclusive and future-aware',
  'Ecosystems strengthen through collaboration',
  'Growth happens without losing authenticity or local identity',
]

const reflectionPillars = [
  'People',
  'Participation',
  'Capability',
  'Collaboration',
  'Long-term destination resilience',
]

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle ? (
        <p className="mx-auto mt-6 max-w-4xl text-sm font-semibold not-italic leading-7 text-[#6b7894] sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function CheckList({ items, color = 'green' }) {
  const iconColor = color === 'blue' ? 'text-[#1f4f93]' : 'text-green-700'

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#234c3a]">
          <Check className={`mt-1 h-4 w-4 shrink-0 ${iconColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SupportServices() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Support services hero"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">TRAVELEYE</span>
              <span className="block">ECOSYSTEM SUPPORT</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Supporting Tourism Through People
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              Ecosystem Support Within the Traveleye Ecosystem
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />

            <p className="mx-auto mt-5 max-w-5xl text-sm font-semibold leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Tourism does not grow through ideas alone.
            </p>
            <p className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
              It grows when people, destinations, participation systems, and tourism ecosystems are prepared, connected, and able to evolve responsibly over time.
            </p>
            <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Within the Traveleye ecosystem, Ecosystem Support helps strengthen the human, ecosystem, and participation foundations that support more connected and resilient tourism development across Sri Lanka.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl text-center">
            <p className="mx-auto max-w-4xl text-sm leading-7 text-[#475569] sm:text-base">
              Rather than functioning as an external service or one-time intervention, Ecosystem Support is approached as an ongoing ecosystem process focused on:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {supportFocus.map((item) => (
                <span key={item} className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-[#0f4d2f] sm:text-base">Across the broader tourism ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Sprout}
            title="The Role of Traveleye Ecosystem Support"
            subtitle="Within the ecosystem :"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold tracking-tight text-[#0f4d2f]">Works Together With : </h3>
              <p className="mt-3 text-sm leading-7 text-[#55636a]">Within the ecosystem, Traveleye Ecosystem Support works alongside:</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {collaboratorGroups.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-[#eef6f0] bg-[#FCFBF8] p-3">
                    <UsersRound className="mt-0.5 h-4 w-4 shrink-0 text-[#1f4f93]" />
                    <span className="text-sm font-medium leading-6 text-[#234c3a]">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold tracking-tight text-[#0f4d2f]">To help strengthen : </h3>
              <p className="mt-3 text-sm leading-7 text-[#55636a]">Support strengthens the foundations that help tourism ecosystems function with quality and continuity.</p>
              <div className="mt-6">
                <CheckList items={strengthenAreas} />
              </div>
            </article>
          </div>

          <div className="mx-auto mt-10 max-w-5xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base">
              Support is designed not to create dependency, but to help strengthen :
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {capabilityOutcomes.map((item) => (
                <span key={item} className="inline-flex rounded-full border border-[#CFE1D6] bg-[#EEF7F1] px-5 py-2 text-sm font-semibold text-[#2F6B4B]">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold leading-7 text-[#0f4d2f] sm:text-base">Across the tourism ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Handshake}
            title="Strengthening Participation Across the Ecosystem"
            subtitle="Tourism functions best when destinations, people, and ecosystems remain connected."
          />

          <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base">
            As part of its ecosystem-building approach, Traveleye Ecosystem Support helps strengthen :
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {participationPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ecf8ef] text-[#14532d]">
                    <CircleDot className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium leading-6 text-[#234c3a] sm:text-base">{point}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Through this connected ecosystem approach, tourism becomes more adaptive, collaborative, and future-aware while remaining grounded in people and place.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Leaf}
            title="Supporting a More Connected Tourism Future"
            subtitle="Ecosystem Support encourages tourism development that remains : "
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {futureValues.map((value) => (
              <span key={value} className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
                {value}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The focus is not only on tourism growth. It is on helping tourism ecosystems remain healthier, stronger, more participatory, and more resilient over time.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl border-t border-[#d8e0e8] pt-12">
          <SectionHeading
            icon={Globe2}
            title="Why Ecosystem Support Matters"
            subtitle="Without thoughtful ecosystem support, tourism can become fragmented, uneven, and disconnected from local realities."
          />

          <p className="mt-8 text-center text-sm font-semibold text-[#475569] sm:text-base">
            Meaningful ecosystem support helps encourage tourism systems where :
          </p>

          <ul className="mx-auto mt-6 max-w-4xl divide-y divide-[#eee]">
            {whySupportMatters.map((point) => (
              <li key={point} className="flex items-start gap-4 py-4 text-[#234c3a]">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f4f93]" />
                <span className="text-sm leading-6 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mx-auto mt-10 max-w-4xl border-l-4 border-[#234c3a] bg-[#FCFBF8] px-6 py-6 text-center text-base font-bold leading-8 text-[#0f4d2f] sm:text-lg">
            Because strong tourism ecosystems are built through people who are supported, connected, and empowered to grow sustainably.
          </blockquote>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Leaf}
            title="Closing Reflection"
            subtitle="Support is not always the most visible part of tourism, but it is what helps tourism ecosystems function responsibly over time."
          />

          <div className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#6b7894] sm:text-base">
              Through Traveleye Ecosystem Support, tourism is strengthened not only through systems or infrastructure, but through:
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {reflectionPillars.map((pillar) => (
                <span key={pillar} className="inline-flex rounded-full border border-[#CFE1D6] bg-white px-5 py-2 text-sm font-semibold text-[#2F6B4B]">
                  {pillar}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold leading-7 text-[#0f4d2f] sm:text-base">
              Because sustainable tourism depends not only on growth, but on the strength of the ecosystem that supports it.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
