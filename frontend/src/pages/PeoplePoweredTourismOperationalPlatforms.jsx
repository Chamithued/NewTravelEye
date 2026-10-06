import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Globe2,
  Handshake,
  Home,
  Leaf,
  Network,
  Sprout,
  Waypoints,
} from 'lucide-react'
import heroImg from '../assets/subhero/Traveleye Five Operational Platforms.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const platforms = [
  {
    icon: Globe2,
    title: 'Traveleye Travel Collective',
    subtitle: 'Connecting Journeys Through People and Place',
    alliance: 'An Alliance of Travel Businesses & Partners',
    body: (
      <>
        The <strong>Traveleye Travel Collective</strong> develops and connects meaningful travel opportunities that create market access, expand travel opportunities, and strengthen tourism enterprises through connected journeys.
      </>
    ),
    areas: [
      'Inbound Travel',
      'Domestic Travel',
      'Outbound Travel',
      'Travel Corridors',
      'Premium Travel',
      'Celebrations & Events',
    ],
    centeredAreas: true,
  },
  {
    icon: Home,
    title: 'Traveleye Habitats',
    subtitle: 'Creating Distinctive Stays Through People and Place',
    alliance: 'An Alliance of Stay Developers, Hosts & Partners',
    body: (
      <>
        <strong>Traveleye Habitats</strong> develops and connects distinctive accommodation and stay opportunities that reflect the character, culture, nature, and identity of their locations. It supports stay developers and tourism enterprises in creating authentic, place-inspired stays while strengthening quality, market access, enterprise capability, and destination value.
      </>
    ),
    areasTitle: 'Habitat Development Categories',
    areas: [
      'Earth Habitats',
      'Safari Habitats',
      'Forest Habitats',
      'Coastal Habitats',
      'Village Habitats',
      'Heritage Habitats',
      'Wellness Habitats',
      'Glamping Habitats',
      'Other Place-Inspired Habitat Concepts',
    ],
    note: 'These categories provide starting points for discovering and developing distinctive stays shaped by the character, opportunities, and potential of each location.',
  },
  {
    icon: Leaf,
    title: 'Traveleye StoryTrails',
    subtitle: 'Creating Meaningful Experiences Through People and Place',
    alliance: 'An Alliance of Experience Creators, Hosts & Partners',
    body: (
      <>
        <strong>Traveleye StoryTrails</strong> develops and connects meaningful travel experiences shaped by the people, stories, culture, nature, creativity, and distinctive character of each destination. It supports experience creators and tourism enterprises in developing experiences that engage travellers, celebrate local identity, create enterprise opportunities, and enrich destination offerings.
      </>
    ),
    areasTitle: 'Experience Development Categories',
    areas: [
      'Cultural & Heritage Experiences',
      'Nature & Wildlife Experiences',
      'Adventure Experiences',
      'Culinary Experiences',
      'Agricultural Experiences',
      'Wellness Experiences',
      'Creative & Artisan Experiences',
      'Community Experiences',
      'Educational Experiences',
      'Special Interest Experiences',
    ],
    note: 'These categories provide starting points for discovering and developing meaningful experiences shaped by the people, stories, culture, nature, creativity, and distinctive character of each destination.',
  },
  {
    icon: Compass,
    title: 'Traveleye Destination Facilitation Centres',
    subtitle: 'Destinations Through People & Stewardship',
    alliance: 'An Alliance of Destination Stakeholders & Partners',
    body: (
      <>
        <strong>Traveleye Destination Facilitation Centres</strong> develop connected destination ecosystems by facilitating collaboration, coordinating tourism stakeholders, strengthening local tourism enterprises, improving visitor readiness, and supporting destination development.
      </>
    ),
    areas: [
      'Destination Development',
      'Destination Coordination',
      'Tourism Enterprise Facilitation',
      'Stay & Experience Facilitation',
      'Visitor Support Services',
      'Destination Promotion & Market Connectivity',
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Traveleye Ecosystem Support Services',
    subtitle: 'Supporting Tourism Through People and Partnerships',
    alliance: 'An Alliance of Tourism Knowledge, Capability & Support Partners',
    body: (
      <>
        <strong>Traveleye Ecosystem Support Services</strong> strengthen the capability, readiness, innovation, and enabling environment that supports tourism enterprises and destinations through specialised ecosystem support.
      </>
    ),
    areas: [
      'Education & Skills Development',
      'Technology & Digital Solutions',
      'Hospitality Operations',
      'Business Advisory & Enterprise Development',
      'Marketing & Market Development',
      'Tourism Supply Chain Development',
      'Innovation & Sustainability',
      'Research, Knowledge & Insights',
    ],
  },
]

const connectedApproachIntro = [
  <>The <strong>People-Powered Tourism Operational Platforms</strong> function as an integrated implementation system, with each platform contributing a distinct role to the development and strengthening of Sri Lanka&apos;s tourism ecosystem.</>,
]

const connectedApproachPoints = [
  <><strong>Traveleye Travel Collective</strong> creates travel opportunities and connects tourism markets.</>,
  <><strong>Traveleye Habitats</strong> develops distinctive stays and accommodation opportunities inspired by people and place.</>,
  <><strong>Traveleye StoryTrails</strong> develops meaningful people and place-inspired travel experiences.</>,
  <><strong>Traveleye Ecosystem Support Services</strong> strengthen enterprise capability and the enabling environment for tourism development.</>,
  <><strong>Traveleye Destination Facilitation Centres</strong> develop connected destination ecosystems by coordinating tourism stakeholders, supporting local tourism enterprises, strengthening destination readiness, and improving visitor experiences.</>,
]

const connectedApproachClosing = [
  <>Together, these interconnected platforms transform the strategic direction of the <strong>People-Powered Tourism Framework</strong> into coordinated implementation, creating stronger tourism enterprises, resilient destinations, collaborative partnerships, and thriving tourism ecosystems.</>,
]

const frameworkRole = [
  <>The <strong>People-Powered Tourism Operational Platforms</strong> represent the <strong>implementation component</strong> of the <strong>People-Powered Tourism Framework</strong>.</>,
  <>Built upon the Framework&apos;s <strong>Guiding Principles</strong>, its <strong>Locally Grounded. Globally Aligned.</strong> foundation, <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Host Model</strong>, and <strong>Revenue Sharing Model</strong>, they provide the practical mechanisms that implement the Framework across Sri Lanka&apos;s tourism ecosystem.</>,
  'Through these interconnected platforms, tourism stakeholders develop and strengthen tourism enterprises, create place-inspired stays, deliver people and place-inspired travel experiences, strengthen destinations, expand travel opportunities, facilitate tourism programmes and projects, and support ecosystem initiatives.',
  <>The <strong>People-Powered Tourism Outcomes</strong> represent the results created through implementation, while the <strong>People-Powered Tourism Ecosystem Indicators</strong> measure progress and long-term impact across the tourism ecosystem.</>,
  'Together, these interconnected components provide a complete pathway from strategic vision to measurable results.',
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function TextPanel({ paragraphs }) {
  return (
    <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

function PointList({ items }) {
  return (
    <ul className="mx-auto mt-6 max-w-5xl space-y-3 text-left text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 rounded-xl bg-white/70 px-4 py-3 shadow-sm ring-1 ring-slate-200/70">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#c28a5b]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function AreaList({ platform }) {
  if (platform.areaGroups) {
    return (
      <div className="mt-5 space-y-5">
        {platform.areaGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-bold text-[#172544] sm:text-base">{group.title}</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-lg bg-[#f8fafc] px-3 py-2 text-sm leading-6 text-[#55636a]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className={platform.centeredAreas ? 'mx-auto mt-3 grid max-w-sm gap-2' : 'mt-3 grid gap-2 sm:grid-cols-2'}>
      {platform.areas.map((item) => (
        <li
          key={item}
          className={[
            'rounded-lg bg-[#f8fafc] px-3 py-2 text-sm leading-6 text-[#55636a]',
            platform.centeredAreas ? 'text-center' : '',
          ].join(' ')}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function PlatformCard({ platform }) {
  const Icon = platform.icon

  return (
    <article className={`flex flex-col rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7 ${platform.icon === BriefcaseBusiness ? 'lg:col-span-2 lg:w-[calc(50%_-_0.75rem)] lg:justify-self-center' : ''}`}>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{platform.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#1f4f93] sm:text-base">{platform.subtitle}</p>
      <p className="mt-2 text-sm font-medium leading-6 text-[#55636a] sm:text-base">{platform.alliance}</p>
      <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{platform.body}</p>
      <div className={platform.centeredAreas ? 'flex flex-1 flex-col justify-center pb-10' : ''}>
        <h4
          className={[
            'text-sm font-bold text-[#172544] sm:text-base',
            platform.centeredAreas ? '-mt-16 text-center' : 'mt-5',
          ].join(' ')}
        >
          {platform.areasTitle || 'Areas of Operation'}
        </h4>
        <AreaList platform={platform} />
      </div>
      {platform.note ? <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{platform.note}</p> : null}
    </article>
  )
}

export default function PeoplePoweredTourismOperationalPlatforms() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Tourism Operational Platforms banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">PEOPLE-POWERED TOURISM</span>
              <span className="block">OPERATIONAL PLATFORMS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Implementing the People-Powered Tourism Framework Through Connected Platforms
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Purpose</p>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">
            To implement the People-Powered Tourism Framework through connected operational platforms that develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
          </p>
          <div className="mt-12">
            <SectionHeading icon={Network} title="Transforming Strategy into Practical Action" />
          </div>
          <TextPanel
            paragraphs={[
              <>The <strong>People-Powered Tourism Operational Platforms</strong> represent the <strong>implementation component</strong> of the <strong>People-Powered Tourism Framework</strong>.</>,
              <>While the Framework provides the strategic blueprint, the <strong>Strategic Pillars</strong> define where tourism is strengthened, and the <strong>Development Models</strong> provide the methodologies for how tourism is developed, the Operational Platforms provide the practical mechanisms that translate the Framework into coordinated action across Sri Lanka&apos;s tourism ecosystem.</>,
              'Working together, these five interconnected platforms create opportunities to develop and strengthen micro and small tourism enterprises by connecting people, places, destinations, tourism enterprises, institutions, development organisations, investors, and strategic partners through practical tourism initiatives.',
              'Rather than operating independently, the Operational Platforms function as an integrated implementation system that transforms strategic vision into practical action while contributing to stronger tourism enterprises, resilient destinations, collaborative partnerships, and thriving tourism ecosystems.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Waypoints} title="Why Operational Platforms Matter" />
          <TextPanel
            paragraphs={[
              'A strategic framework creates value only when it is effectively implemented.',
              <>The <strong>People-Powered Tourism Operational Platforms</strong> provide the practical environment through which the <strong>People-Powered Tourism Framework</strong> is brought to life.</>,
              'They enable tourism stakeholders to translate strategic direction and practical methodologies into real-world tourism enterprises, authentic visitor experiences, destination development initiatives, travel opportunities, tourism programmes, collaborative projects, and ecosystem initiatives.',
              'By encouraging participation, stewardship, collaboration, innovation, enterprise development, and shared value creation, the Operational Platforms transform ideas into meaningful action that strengthens the broader tourism ecosystem.',
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="The Five Operational Platforms" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Together, the five Operational Platforms provide the practical mechanisms that implement the <strong>People-Powered Tourism Framework</strong>. While each platform performs a distinct operational role, they work together as an integrated implementation system that develops and strengthens micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Each Operational Platform functions as a specialised Traveleye Alliance, bringing together relevant people, enterprises, and partners to translate the People-Powered Tourism Framework into practical tourism development.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {platforms.map((platform) => (
              <PlatformCard key={platform.title} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="A Connected Approach to Implementation" />
          <TextPanel paragraphs={connectedApproachIntro} />
          <div className="py-6 sm:py-10">
            <PointList items={connectedApproachPoints} />
          </div>
          <TextPanel paragraphs={connectedApproachClosing} />
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ArrowRight} title="The Implementation Role Within the Framework" />
          <TextPanel paragraphs={frameworkRole} />
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Looking Ahead" />
          <TextPanel
            paragraphs={[
              <>As tourism continues to evolve, the <strong>People-Powered Tourism Operational Platforms</strong> will continue adapting to emerging opportunities, technologies, partnerships, and changing tourism needs.</>,
              <>By implementing the <strong>People-Powered Tourism Framework</strong> through connected operational platforms, they will continue supporting the development and strengthening of micro and small tourism enterprises while creating stronger connections between people, places, enterprises, destinations, and opportunities.</>,
              <>Through this practical, collaborative, and People-Powered approach, the Operational Platforms will continue transforming strategic direction into meaningful action while creating lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</>,
            ]}
          />
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Home} title="Grow with Traveleye Alliance" />
          <TextPanel
            paragraphs={[
              <>Whether you are a government agency, tourism authority, development organisation, educational institution, investor, entrepreneur, tourism enterprise, community organisation, or strategic partner, <strong>Traveleye Alliance Sri Lanka</strong> invites you to collaborate through the <strong>People-Powered Tourism Operational Platforms</strong>.</>,
              <>Together, we can implement the <strong>People-Powered Tourism Framework</strong> by developing and strengthening micro and small tourism enterprises, creating authentic tourism experiences, strengthening destinations, expanding travel opportunities, supporting local tourism enterprises, and building a thriving <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</>,
            ]}
          />
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
