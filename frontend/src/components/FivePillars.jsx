import { ArrowRight, Building2, Compass, Leaf, MapPinned } from 'lucide-react'
import { Link } from 'react-router-dom'

import staysImg from '../assets/client/stays_new.jpg'
import experientialImg from '../assets/client/PPES.jpg'
import tourOpsImg from '../assets/client/TC.jpg'
import supportImg from '../assets/client/Support Services.png'
import facilitationImg from '../assets/client/At the Traveleye Facilitation Center.png'
import ReadMoreLink from './ReadMoreLink.jsx'

const pillars = [
    {
    code: 'PPTC',
    title: 'Traveleye Travel Collective',
    subtitle: 'Connecting Journeys Through People and Place ',
    icon: Compass,
    accent: 'bg-amber-500',
    image: tourOpsImg,
    ctas: [
      { label: 'Explore Traveleye Travel Collective', variant: 'solid', to: '/travel-collective' },
      // { label: 'Co-Own a Travel Venture', variant: 'ghost' },
    ],
  },
  {
    code: 'HOSTNEST',
    title: 'Traveleye HostNest',
    subtitle: 'Developing Authentic People & Place-Inspired Stays',
    icon: Building2,
    accent: 'bg-sky-500',
    image: staysImg,
    ctas: [
      { label: 'Explore Traveleye HostNest', variant: 'solid', to: '/traveleye-hostnest' },
      // { label: 'Co-Own an Experience', variant: 'ghost' },
    ],
  },
  {
    code: 'STORYTRAILS',
    title: 'Traveleye StoryTrails',
    subtitle: 'Developing People & Place-Inspired Experiences',
    icon: Building2,
    accent: 'bg-violet-500',
    image: experientialImg,
    ctas: [
      { label: 'Explore Traveleye StoryTrails', variant: 'solid', to: '/traveleye-storytrail' },
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
    title: 'Traveleye Destination Facilitation Centres',
    subtitle: 'Stewarding Destinations Through People and Place',
    icon: MapPinned,
    accent: 'bg-orange-500',
    image: facilitationImg,
    ctas: [
      { label: 'Explore Traveleye Destination Facilitation Centres', variant: 'solid', to: '/destination-facilitation' },
      // { label: 'Co-Own a Facilitation Center', variant: 'ghost' },
    ],
  },
  {
    code: 'PPES',
    title: 'Traveleye Ecosystem Support Services',
    subtitle: 'Strengthening Tourism Through People and Place',
    icon: Leaf,
    accent: 'bg-emerald-500',
    image: supportImg,
    ctas: [
      { label: 'Explore Traveleye Ecosystem Support Services', variant: 'solid', to: '/support-services' },
    ],
  },
]

function PillarCard({ pillar }) {
  const Icon = pillar.icon
  const pillarDescriptions = {
    PPTC: 'Connecting meaningful journeys, destinations, travellers, and travel partnerships through people and places.',
    HOSTNEST: 'Developing authentic people and place-inspired stays that reflect local identity, hospitality, culture, landscapes, and the character of each destination.',
    STORYTRAILS: 'Developing people and place-inspired experiences that connect travellers with local people, culture, heritage, creativity, nature, and everyday life.',
    PPES: 'Strengthening tourism enterprises through knowledge, capability development, innovation, digital solutions, and ecosystem support services.',
    PPDF: 'Developing connected destination ecosystems through collaboration, coordination, participation, stewardship, and enterprise development.',
  }

  return (
    <article className="flex h-full flex-col overflow-hidden bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
      <Link to={pillar.ctas[0].to} className="relative block bg-slate-100">
        <img src={pillar.image} alt="" className="block h-auto w-full" loading="lazy" />
        <div className="absolute inset-x-0 top-0 p-5 sm:p-6">
          <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg text-white shadow-md ${pillar.accent}`}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-xl font-bold leading-tight text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] sm:text-2xl">
            {pillar.title}
          </h3>
        </div>
      </Link>
      <div className="flex flex-1 flex-col items-center px-4 py-5 text-center">
        <p className="text-sm font-semibold leading-5 text-[#172544]">{pillar.subtitle}</p>
        <p className="mt-4 text-sm leading-6 text-[#59677d]">{pillarDescriptions[pillar.code]}</p>
        <div className="mt-auto pt-5">
          <ReadMoreLink to={pillar.ctas[0].to} />
        </div>
      </div>
    </article>
  )
}

export default function FivePillars() {
  return (
    <section className="w-full bg-white px-4 pb-8 pt-18 sm:px-6 sm:pb-10 sm:pt-24 lg:px-8 lg:pb-12 lg:pt-28">
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
             Implementing the People-Powered Tourism Framework Through Connected Platforms 
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
            The <strong>People-Powered Tourism Operational Platforms</strong> are the implementation mechanisms of the People-Powered Tourism Framework, translating strategic direction and practical methodologies into coordinated action. Working together, these five interconnected platforms support the development and strengthening of micro and small tourism enterprises while creating meaningful journeys, people and place-inspired stays and experiences, connected destination ecosystems, collaborative partnerships, and ecosystem initiatives across Sri Lanka&apos;s tourism ecosystem.
          </p>

          {/* <p>
            Together, these pillars create meaningful opportunities for <strong>travel, hosting, collaboration, destination stewardship, and ecosystem development</strong>, while creating long-term value for <strong>people, place, and tourism.</strong> 
          </p> */}
        </div>

        <div className="mt-10 mx-auto max-w-[1200px] px-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {pillars.map((p) => (
              <PillarCard
                key={p.code}
                pillar={p}
              />
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
