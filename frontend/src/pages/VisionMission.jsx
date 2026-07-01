import {
  Compass,
  Handshake,
  Leaf,
  Lightbulb,
  Network,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/Vision & Mission.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const visionPoints = [
  'People-centred',
  'Inclusive and participatory',
  'Locally connected',
  'Destination-aware',
  'Environmentally conscious',
  'Culturally respectful',
  'Resilient over time',
]

const missionPoints = [
  'Advancing the Traveleye People-Powered Tourism Framework',
  'Encouraging participation across tourism ecosystems',
  'Supporting women and youth entrepreneurship',
  'Strengthening tourism readiness and capability',
  'Encouraging destination stewardship and responsible tourism practices',
  'Supporting collaboration among tourism stakeholders',
  'Promoting innovation, knowledge sharing, and ecosystem development',
  'Creating environments that support long-term tourism resilience',
]

const commitmentPoints = [
  { title: 'People-Powered Participation', icon: Users },
  { title: 'Shared Stewardship', icon: Leaf },
  { title: 'Inclusive Growth', icon: Handshake },
  { title: 'Human-Centred Innovation', icon: Lightbulb },
  { title: 'Transparency & Ethics', icon: Compass },
  { title: 'Destination Wellbeing', icon: Network },
  { title: 'Long-Term Sustainability', icon: Sprout },
]

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

function ValueList({ items }) {
  return (
    <ul className="mx-auto mt-6 max-w-2xl divide-y divide-[#eef6f0] text-left">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-3 py-3">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#ecf8ef] text-[#14532d]">
            <Leaf className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-medium leading-6 text-[#234c3a] sm:text-base">{point}</span>
        </li>
      ))}
    </ul>
  )
}

export default function VisionMission() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Vision & Mission banner"
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
              <span className="block">TRAVELEYE VISION &amp; MISSION</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Shaping the Future of Tourism Through People, Participation, and Stewardship
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Shaping the Future of Tourism Through People, Participation, and Stewardship" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The vision and mission of Traveleye Alliance Sri Lanka are guided by the belief that tourism can create stronger outcomes when it remains connected to people, destinations, culture, participation, and long-term responsibility.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Through the Traveleye People-Powered Tourism Framework, the organization seeks to contribute to a tourism future that is more inclusive, connected, resilient, and sustainable.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="Our Vision" subtitle="A People-Powered Future for Tourism" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            To help shape a future where tourism creates lasting value for people, destinations, enterprises, and future generations through participation, stewardship, collaboration, and responsible growth.
          </p>

          <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#eef4ef] sm:p-6">
            <h3 className="text-center text-base font-bold text-[#0f4d2f] sm:text-lg">We envision tourism ecosystems that are:</h3>
            <ValueList items={visionPoints} />
          </div>

          <p className="mt-8 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            We believe tourism should not be measured solely by visitor numbers or economic activity, but also by how it contributes to the wellbeing of people, places, and destinations.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Our vision is a tourism future where travellers, hosts, enterprises, communities, and destinations remain connected through shared value, meaningful experiences, and long-term stewardship.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Target} title="Our Mission" subtitle={<strong className="font-bold text-[#0f4d2f]">Building Stronger Tourism Ecosystems</strong>} />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            To strengthen tourism through the development of connected, inclusive, and people-powered tourism ecosystems that support meaningful travel experiences, broader participation, destination wellbeing, and long-term resilience.
          </p>

          <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#eef4ef] sm:p-6">
            <h3 className="text-center text-base font-bold text-[#0f4d2f] sm:text-lg">We seek to achieve this by:</h3>
            <ValueList items={missionPoints} />
          </div>

          <p className="mt-8 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Through these efforts, Traveleye Alliance seeks to contribute to tourism that benefits travellers while creating lasting value for destinations, communities, enterprises, and future generations.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Handshake}
            title="Our Commitment"
            subtitle="Traveleye Alliance is guided by a commitment to:"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            {commitmentPoints.map(({ title, icon: Icon }) => (
              <div key={title} className="mx-auto w-full max-w-lg">
                <div className="flex h-full items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-6 sm:p-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8F1FF] text-[#214F95] sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-left text-sm font-medium leading-6 text-[#141414] sm:text-base">{title}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            These principles help guide our decisions, partnerships, initiatives, and contribution to tourism development.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Looking Ahead" />

          <div className="mt-8 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>
              As tourism continues to evolve, Traveleye Alliance remains committed to helping create tourism ecosystems that are more connected, inclusive, and resilient.
            </p>
            <p>
              Guided by the People-Powered Tourism Framework, we believe tourism can become a positive force for people, destinations, enterprises, and society when it is shaped through participation, stewardship, and long-term thinking.
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

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
