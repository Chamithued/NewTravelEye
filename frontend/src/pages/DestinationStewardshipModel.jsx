import {
  Building2,
  Compass,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPinned,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Discussing People-Powered Tourism framework.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const supportPoints = [
  'Destination wellbeing',
  'Community participation',
  'Responsible tourism practices',
  'Heritage preservation',
  'Environmental stewardship',
  'Visitor experience enhancement',
  'Local enterprise development',
  'Long-term destination resilience',
]

const collaborators = [
  'Local communities',
  'Tourism enterprises',
  'Entrepreneurs',
  'Accommodation providers',
  'Experience creators',
  'Local authorities',
  'Educational institutions',
  'Industry associations',
  'Destination stakeholders',
]

const collaborationPoints = [
  'Stakeholder engagement',
  'Shared responsibility',
  'Local participation',
  'Knowledge sharing',
  'Partnership building',
  'Innovation and problem solving',
  'Collaborative destination initiatives',
]

const valueGroups = [
  {
    title: 'For Destinations',
    items: [
      'Stronger destination identity',
      'Improved collaboration',
      'Enhanced resilience',
      'Sustainable tourism growth',
    ],
    icon: MapPinned,
  },
  {
    title: 'For Communities',
    items: [
      'Greater participation',
      'Increased opportunities',
      'Stronger local engagement',
    ],
    icon: Users,
  },
  {
    title: 'For Tourism Enterprises',
    items: [
      'Better collaboration',
      'Shared opportunities',
      'Stronger destination appeal',
    ],
    icon: Building2,
  },
  {
    title: 'For Visitors',
    items: [
      'More authentic experiences',
      'Better destination experiences',
      'Meaningful connections with people and place',
    ],
    icon: Compass,
  },
]

const pointIcons = [HeartHandshake, Users, Leaf, Landmark, Sprout, Compass, Building2, Handshake, MapPinned]

function SectionHeading({ icon: Icon, title, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-center justify-center' : 'items-start',
        ].join(' ')}
      >
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
    </div>
  )
}

function PointGrid({ points, columns = 'md:grid-cols-4' }) {
  return (
    <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${columns} sm:gap-6`}>
      {points.map((point, index) => {
        const Icon = pointIcons[index % pointIcons.length]

        return (
          <div key={point} className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-5 sm:p-5">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93] sm:h-12 sm:w-12">
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-left text-sm font-semibold leading-6 text-[#141414] sm:text-base">{point}</div>
          </div>
        )
      })}
    </div>
  )
}

function ValueCard({ group }) {
  const Icon = group.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-6">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black">{group.title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-[#55636a] sm:text-base">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default function DestinationStewardshipModel() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-[#1f4f93] sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Destination Stewardship Model banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">DESTINATION</span>
              <span className="block">STEWARDSHIP MODEL</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Destinations Through People & Stewardship
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Destination Stewardship Model" />
          <div className="mx-auto mt-6 max-w-5xl text-center">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Tourism destinations thrive when the people, enterprises, institutions, and stakeholders connected to them work together with a shared commitment to their long-term wellbeing.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Destination Stewardship Model is a collaborative destination development approach within the Traveleye People-Powered Tourism Framework. The model encourages participation, stewardship, and shared responsibility among tourism stakeholders to help destinations remain vibrant, welcoming, resilient, and beneficial for both visitors and local communities.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Rather than viewing destinations solely as places to attract visitors, the model promotes a broader perspective that recognises destinations as living systems shaped by people, culture, heritage, nature, enterprises, and community participation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Compass} title="Moving Beyond Destination Promotion" />
          <div className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Successful destinations require more than marketing and visitor arrivals.</p>
            <p className="mt-4">
              They require collaboration, planning, stewardship, and active participation from the people and organisations that influence the visitor experience and the long-term health of the destination.
            </p>
            <p className="mt-4">The Destination Stewardship Model encourages a more holistic approach that supports:</p>
          </div>
          <PointGrid points={supportPoints} />
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="A People-Powered Approach" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Guided by the principles of People-Powered Participation and Shared Stewardship, the model encourages collaboration between:
          </p>
          <PointGrid points={collaborators} columns="md:grid-cols-3" />
          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By bringing people together around a shared vision for their destination, the model seeks to strengthen both tourism outcomes and community benefits.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Stewardship Through Collaboration" />
          <div className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              The Destination Stewardship Model recognises that no single organisation can shape a destination alone.
            </p>
            <p className="mt-4">
              Meaningful destination development requires ongoing collaboration between stakeholders who collectively influence how destinations are experienced, managed, and sustained.
            </p>
            <p className="mt-4">The model encourages:</p>
          </div>
          <PointGrid points={collaborationPoints} columns="md:grid-cols-3" />
          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Through cooperation and shared ownership, destinations become stronger, more resilient, and better prepared for future opportunities and challenges.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Landmark} title="Position Within the Traveleye Ecosystem" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The Destination Stewardship Model operates within the People-Powered Destination Facilitation (PPDF) pillar of the Traveleye People-Powered Tourism Framework.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The model supports destination-focused initiatives that encourage collaboration, participation, stewardship, and shared value creation among tourism stakeholders.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By strengthening relationships between people, enterprises, institutions, and places, the model contributes to healthier destinations and more sustainable tourism development.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake} title="Creating Shared Value for Destinations" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The Destination Stewardship Model seeks to create value for multiple stakeholders across the tourism ecosystem.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {valueGroups.map((group) => (
              <ValueCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Looking Ahead" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            As tourism continues to evolve, destinations will increasingly depend on collaboration, stewardship, and shared responsibility to remain competitive, resilient, and welcoming.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            The Destination Stewardship Model seeks to support this future by encouraging meaningful participation and long-term collaboration between the people and organisations that shape tourism destinations.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Together, we believe stronger destinations are built not only through investment and promotion, but through stewardship, participation, and shared commitment.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Strengthening Destinations Through Participation and Stewardship" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The Destination Stewardship Model reflects Traveleye's belief that tourism destinations flourish when people work together to protect, enhance, and celebrate the places they call home.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By encouraging collaboration, stewardship, and shared value creation, the model seeks to contribute to destinations that are more resilient, inclusive, and beneficial for both visitors and local communities.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
