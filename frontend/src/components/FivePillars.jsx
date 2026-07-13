import { ArrowRight, Leaf, Building2, Compass, MapPinned, BriefcaseBusiness } from 'lucide-react'

import staysImg from '../assets/client/stays_new.jpg'
import experientialImg from '../assets/client/PPES.png'
import tourOpsImg from '../assets/client/TC.png'
import supportImg from '../assets/client/Support Services.png'
import facilitationImg from '../assets/client/At the Traveleye Facilitation Center.png'

const pillars = [
    {
    code: 'PPTC',
    title: 'Traveleye Travel Collective',
    subtitle: 'Connecting Journeys Through People and Place ',
    icon: Compass,
    accent: 'bg-amber-500',
    image: tourOpsImg,
    ctas: [
      { label: 'Explore the Travel Collective', variant: 'solid', to: '/people-powered-travel-collective' },
      // { label: 'Co-Own a Travel Venture', variant: 'ghost' },
    ],
  },
  {
    code: 'PPHE',
    title: 'Traveleye Host Experiences',
    subtitle: 'Crafting Experiences Through People and Place',
    icon: Building2,
    accent: 'bg-sky-500',
    image: staysImg,
    ctas: [
      { label: 'Explore Host Experiences', variant: 'solid', to: '/people-powered-host-experiences' },
      // { label: 'Co-Own an Experience', variant: 'ghost' },
    ],
  },
  {
    code: 'PPES',
    title: 'Traveleye Ecosystem Support',
    subtitle: 'Strengthening Tourism Through People and Place',
    icon: Leaf,
    accent: 'bg-emerald-500',
    image: experientialImg,
    ctas: [
      { label: 'Explore Ecosystem Support', variant: 'solid', to: '/people-powered-ecosystem-support' },
      // { label: 'Co-Own a Support Service', variant: 'ghost' },
    ],
  },
  // {
  //   code: 'PPSS',
  //   title: 'People-Powered Support Services',
  //   subtitle: 'Enabling Local Enterprises to Thrive',
  //   icon: BriefcaseBusiness,
  //   accent: 'bg-amber-500',
  //   image: supportImg,
  //   ctas: [
  //     { label: 'Explore the PPSS Model', variant: 'solid' },
  //     { label: 'Co-Own a Support Service', variant: 'ghost' },
  //   ],
  // },
  {
    code: 'PPDF',
    title: 'Traveleye Destination Facilitation',
    subtitle: 'Stewarding Destinations Through People and Place',
    icon: MapPinned,
    accent: 'bg-orange-500',
    image: facilitationImg,
    ctas: [
      { label: 'Explore Destination Facilitation', variant: 'solid', to: '/people-powered-destination-facilitation' },
      // { label: 'Co-Own a Facilitation Center', variant: 'ghost' },
    ],
  },
]

function PillarCard({ pillar }) {
  const Icon = pillar.icon
  const readableTextShadow =
    '0 1px 2px rgba(0,0,0,0.65), 0 0 1px rgba(0,0,0,0.85)'
  const pillarDescriptions = {
    PPTC:(<> Connecting meaningful journeys, destinations, travellers, and travel partnerships through people and place.</>),
    PPHE:(<> Developing authentic place-inspired host stays and people and place-inspired experiences that celebrate local identity and hospitality.</>),
    PPES:(<> Strengthening tourism enterprises through knowledge, capability development, innovation, digital solutions, and ecosystem support services. </>),
    PPDF:( <>Facilitating collaborative destination development through participation, stewardship, ecosystem coordination, and local engagement. </>),
  }

  return (
    <article className="relative min-h-[520px] overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(15,23,42,0.12)]">
      <img src={pillar.image} alt={pillar.title} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 md:p-8">
        <div className="flex items-start justify-between">
          <div className="inline-flex flex-col items-start gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${pillar.accent}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-[1.35rem] font-bold leading-tight text-white sm:text-2xl md:text-3xl">{pillar.title}</p>
              {/* <p className="mt-1 text-sm font-bold text-white/90">{pillar.subtitle}</p> */}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p
            className="mb-6 max-w-xl text-sm sm:text-base text-white/90"
            style={{ textShadow: readableTextShadow }}
          >
            {pillarDescriptions[pillar.code] ?? ''}
          </p>

              {/* Pillar card buttons hidden by request. */}
        </div>
      </div>
    </article>
  )
}

export default function FivePillars() {
  return (
    <section className="w-full bg-[#fcfbf7] px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8 lg:pb-12 lg:pt-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex justify-center">
          {/* <div className="inline-flex items-center gap-3 rounded-full bg-[#e9eef8] px-5 py-2 text-[1.05rem] font-bold text-[#214f95] shadow-sm"> */}
          <div className="home-section-eyebrow">
            People-Powered Tourism Operational Platforms
          </div>
        </div>

        <div className="mx-auto mb-6 max-w-6xl text-center px-4">
          <div className="flex items-center justify-center gap-4">
            <h2 className="home-section-title">
             🌿 Implementing the People-Powered Tourism Framework Through Connected Platforms 
            </h2>
          </div>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />

          {/* <p className="mt-4 text-xl font-semibold text-slate-800 sm:text-2xl">
            The People–Powered Tourism in action
          </p> */}
        </div>

        <div className="mx-auto max-w-5xl text-center text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8 px-4">
          {/* <p className="mb-6 font-semibold text-[#626D84]">
            Traveleye Alliance connects people, places, and purpose through four integrated pillars that power Sri Lanka’s first People-Powered Tourism Ecosystem.
          </p> */}

          <p className="mb-6">
            The <strong>People-Powered Tourism Operational Platforms</strong> are the implementation mechanisms of the People-Powered Tourism Framework, translating strategic direction into practical action. Working together, they implement people-powered tourism by connecting people, places, enterprises, destinations, partnerships, and opportunities while supporting the development and strengthening of micro and small tourism enterprises across Sri Lanka's tourism ecosystem. 
          </p>

          {/* <p>
            Together, these pillars create meaningful opportunities for <strong>travel, hosting, collaboration, destination stewardship, and ecosystem development</strong>, while creating long-term value for <strong>people, place, and tourism.</strong> 
          </p> */}
        </div>

        <div className="mt-10 mx-auto max-w-[1200px] px-2">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {pillars.map((p) => (
              <PillarCard key={p.code} pillar={p} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/people-powered-tourism-operational-platforms"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#214f95] px-6 py-3.5 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:px-8 sm:text-[1.05rem]"
          >
            Explore the People-Powered Tourism Operational Platforms
            <ArrowRight className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
