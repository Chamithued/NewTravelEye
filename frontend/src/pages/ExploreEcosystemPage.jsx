import {
  Bed,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Landmark,
  Network,
  Store,
  Users,
  UserRoundCheck,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import FooterLinks from '../components/FooterLinks'

const pillarCards = [
  {
    title: '&#127757;Traveleye Travel Collective',
    text: [
      'Facilitating journeys and travel experiences that connect travellers with destinations, people, and experiences.',
      'The Travel Collective brings together a portfolio of travel brands and initiatives that support inbound, domestic, outbound, corridor, premium, and celebration travel experiences.',
    ],
  },
  {
    title: '&#127807;Traveleye Host Experiences',
    text: [
      'Supporting authentic host-led stays, experiences, and tourism offerings shaped through local people, culture, hospitality, nature, creativity, and place.',
      'The pillar encourages meaningful visitor engagement while creating opportunities for broader participation within tourism.',
    ],
  },
  {
    title: '&#128188;Traveleye Ecosystem Support',
    text: [
      'Supporting tourism readiness, capability development, knowledge sharing, collaboration, and ecosystem strengthening initiatives that help tourism stakeholders grow sustainably.',
      'The pillar contributes to stronger tourism participation, enterprise development, and long-term ecosystem resilience.',
    ],
  },
  {
    title: '&#129517;Traveleye Destination Facilitation',
    text: [
      'Supporting destination participation, local engagement, stewardship, and tourism ecosystem development.',
      'The pillar seeks to strengthen connections between destinations, communities, tourism stakeholders, and opportunities for sustainable tourism growth.',
    ],
  },
]

const participantGroups = [
  { label: 'Tourism enterprises', icon: Store },
  { label: 'Community hosts', icon: Users },
  { label: 'Experience providers', icon: Waypoints },
  { label: 'Accommodation providers', icon: Bed },
  { label: 'Women and youth entrepreneurs', icon: UserRoundCheck },
  { label: 'Tourism professionals', icon: BriefcaseBusiness },
  { label: 'Destination stakeholders', icon: Landmark },
  { label: 'Institutions and associations', icon: Building2 },
  { label: 'Support service providers', icon: Handshake },
  { label: 'Ecosystem partners', icon: Network },
]

const sharedValuePoints = [
  'Meaningful travel experiences',
  'Stronger tourism enterprises',
  'Increased participation opportunities',
  'Destination wellbeing',
  'Community engagement',
  'Sustainable tourism growth',
  'Long-term ecosystem resilience',
]

export default function ExploreEcosystemPage() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Explore the Traveleye Ecosystem"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/32" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="w-full max-w-[96rem] text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="mx-auto max-w-5xl text-3xl font-extrabold leading-none tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl"
            >
              EXPLORE THE TRAVELEYE ECOSYSTEM  
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Building Stronger Tourism Through Connected Participation
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            Building Stronger Tourism Through Connected Participation
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>The Traveleye Ecosystem is a connected tourism ecosystem guided by the Traveleye People-Powered Tourism (PPT) Framework.</p>
            <p>It brings together journeys, experiences, destinations, enterprises, support systems, and participation opportunities within a broader ecosystem designed to strengthen tourism through collaboration, stewardship, and shared value creation.</p>
            <p>Rather than operating through isolated tourism activities, the ecosystem encourages stronger connections between people, destinations, enterprises, communities, travellers, and tourism stakeholders.</p>
            <p>At its core, the ecosystem seeks to support tourism that is more inclusive, locally connected, destination-aware, and resilient over time.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              A Connected Ecosystem Approach
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          </div>

          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Tourism is shaped by many interconnected participants.</p>
            <p>Travellers, hosts, tourism enterprises, communities, destinations, institutions, support providers, and ecosystem partners all play a role in creating meaningful tourism experiences and stronger destinations.</p>
            <p>The Traveleye Ecosystem encourages collaboration among these participants while supporting opportunities for tourism participation, enterprise development, destination engagement, and ecosystem growth.</p>
            <p>Through this approach, tourism becomes more than individual products or services. It becomes a connected system that creates value for people, destinations, and the wider tourism economy.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              The Four People-Powered Pillars
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">
              The ecosystem operates through four interconnected pillars that together contribute to stronger tourism participation, destination development, and ecosystem resilience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillarCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <h3
                  className="text-xl font-bold tracking-tight text-black sm:text-2xl"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base">
                  {card.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              Participation Across the Ecosystem
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">
              The Traveleye Ecosystem encourages participation from a wide range of tourism stakeholders.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#1f4f93] sm:text-base">These may include:</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {participantGroups.map(({ label, icon: Icon }) => (
              <div key={label} className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-[#eef4ef] bg-white p-4 text-center shadow-sm">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium leading-6 text-[#234c3a]">{label}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base">
            Participation is encouraged through collaboration, entrepreneurship, hosting, facilitation, innovation, stewardship, and contribution to tourism development.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              Creating Shared Value
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">
              The ecosystem is guided by the belief that tourism creates stronger outcomes when value is shared more broadly across people, enterprises, destinations, and tourism stakeholders.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">
              By strengthening connections across the tourism ecosystem, Traveleye seeks to support:
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {sharedValuePoints.map((point) => (
              <div
                key={point}
                className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-center text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            Looking Ahead
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          <div className="mx-auto mt-6 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>The Traveleye Ecosystem continues to evolve through partnerships, participation, collaboration, and innovation.</p>
            <p>Guided by the People-Powered Tourism Framework, the ecosystem seeks to create an environment where travellers, hosts, enterprises, destinations, and tourism stakeholders can contribute to a stronger, more connected, and more sustainable tourism future.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-center shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
            Begin the Conversation
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#475569] sm:text-base">
            Interested in learning more about the Traveleye Ecosystem, ecosystem partnerships, destination collaboration, participation opportunities, or tourism initiatives?
          </p>
          <p className="mt-5 text-sm font-semibold leading-7 text-[#1f4f93] sm:text-base">
            Contact us at <a className="underline decoration-[#c28a5b] underline-offset-4" href="mailto:info@traveleye.lk">info@traveleye.lk</a> to begin the conversation.
          </p>
        </div>
      </section>

      <FooterLinks />
    </main>
  )
}
