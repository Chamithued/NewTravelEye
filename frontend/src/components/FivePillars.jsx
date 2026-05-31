import { Leaf, Building2, Compass, MapPinned, BriefcaseBusiness } from 'lucide-react'

import staysImg from '../assets/client/Stays.png'
import experientialImg from '../assets/client/PPES.png'
import tourOpsImg from '../assets/client/Coastal sunset road trip view.png'
import supportImg from '../assets/client/Support Services.png'
import facilitationImg from '../assets/client/At the Traveleye Facilitation Center.png'

const pillars = [
    {
    code: 'PPTC',
    title: 'People-Powered Travel Collective ',
    subtitle: 'Thoughtfully Designed Journeys ',
    icon: Compass,
    accent: 'bg-amber-500',
    image: tourOpsImg,
    ctas: [
      { label: 'Discover the PPTC Model ', variant: 'solid' },
      { label: 'Co-Own a Travel Venture', variant: 'ghost' },
    ],
  },
  {
    code: 'PPHE',
    title: 'People-Powered Host Experiences',
    subtitle: 'People-Powered, Immersive, and Regenerative ',
    icon: Building2,
    accent: 'bg-sky-500',
    image: staysImg,
    ctas: [
      { label: 'Explore the PPHE Model', variant: 'solid' },
      { label: 'Co-Own an Experience', variant: 'ghost' },
    ],
  },
  {
    code: 'PPES',
    title: 'People-Powered Ecosystem Support',
    subtitle: 'Enabling Quality and Sustainability',
    icon: Leaf,
    accent: 'bg-emerald-500',
    image: experientialImg,
    ctas: [
      { label: 'Learn About PPES Model', variant: 'solid' },
      { label: 'Co-Own a Support Service', variant: 'ghost' },
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
    title: 'People-Powered Destination Facilitation',
    subtitle: 'Destination Stewardship & Coordination ',
    icon: MapPinned,
    accent: 'bg-orange-500',
    image: facilitationImg,
    ctas: [
      { label: 'Learn About PPDF Model ', variant: 'solid' },
      { label: 'Co-Own a Facilitation Center', variant: 'ghost' },
    ],
  },
]

function PillarCard({ pillar }) {
  const Icon = pillar.icon
  const pillarDescriptions = {
    PPTC: 'Responsible inbound, outbound, and domestic travel journeys connecting stays and experiences through people-powered operations focused on quality, safety, and local value.',
    PPHE: 'Authentic Sri Lanka travel experiences co-created and shaped by local people, communities, experts, women and youth entrepreneurs at the heart of our People-Powered Tourism model.',
    PPES: 'Integrated support services empowering people-powered experiences, and travel, through training, technology, advisory, and trusted systems which are needed to the tourism industry.',
    PPDF: 'Place-based facilitation hubs co-owned by local people, enabling coordinated tourism activity, on-ground support, and balanced destination development rooted in lived realities.',
  }

  return (
    <article className="relative h-[520px] overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(15,23,42,0.12)]">
      <img src={pillar.image} alt={pillar.title} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/30 to-transparent p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="inline-flex flex-col items-start gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${pillar.accent}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white md:text-3xl">{pillar.title}</p>
              <p className="mt-1 text-sm font-bold text-white/90">{pillar.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-6 max-w-xl text-sm sm:text-base text-white/90">{pillarDescriptions[pillar.code] ?? ''}</p>

              <div className="flex flex-col gap-3 items-start">
                {pillar.code === 'PPET' ? (
                  <>
                    <div className="flex gap-3">
                      {pillar.ctas.slice(0, 2).map((cta) => (
                        <button
                          key={cta.label}
                          type="button"
                          className={`inline-flex group items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-semibold transition bg-[#1C4686] text-white hover:bg-[#193F78]`}
                        >
                          {cta.label}
                           <span className="ml-2 inline-flex items-center">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1C4686] group-hover:bg-[#193F78] transition-colors">
                               <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                 <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                               </svg>
                             </span>
                           </span>
                        </button>
                      ))}
                    </div>

                    {pillar.ctas.slice(2).map((cta) => (
                      <button
                        key={cta.label}
                        type="button"
                        className={`inline-flex group items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-semibold transition bg-[#1C4686] text-white hover:bg-[#193F78]`}
                      >
                        {cta.label}
                          <span className="ml-2 inline-flex items-center">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1C4686] group-hover:bg-[#193F78] transition-colors">
                             <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                               <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                               <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                           </span>
                         </span>
                      </button>
                    ))}
                  </>
                ) : (
                  pillar.ctas.map((cta) => (
                    <button
                      key={cta.label}
                      type="button"
                      className={`inline-flex group items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-semibold transition bg-[#1C4686] text-white hover:bg-[#193F78]`}
                    >
                      {cta.label}
                         <span className="ml-2 inline-flex items-center">
                           <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1C4686] group-hover:bg-[#193F78] transition-colors">
                           <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                             <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                          </span>
                        </span>
                    </button>
                  ))
                )}
              </div>
        </div>
      </div>
    </article>
  )
}

export default function FivePillars() {
  return (
    <section className="w-full bg-[#fcfbf7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#e9eef8] px-5 py-2 text-[1.05rem] font-bold text-[#214f95] shadow-sm">
            Our Four Pillars
          </div>
        </div>

        <div className="mx-auto mb-6 max-w-6xl text-center px-4">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-bold leading-tight text-[#172544] sm:text-4xl lg:text-5xl">
             🌿 The Four Pillars That Power Our Ecosystem
            </h2>
          </div>

          <p className="mt-4 text-xl font-semibold text-slate-800 sm:text-2xl">
            The People–Powered Tourism in action
          </p>
        </div>

        <div className="mx-auto max-w-5xl text-center text-[1.02rem] leading-7 text-[#6b7894] sm:text-[1.05rem] sm:leading-8 px-4">
          <p className="mb-6 font-semibold text-[#626D84]">
            Traveleye Alliance connects people, places, and purpose through four integrated pillars that power Sri Lanka’s first People-Powered Tourism Ecosystem.
          </p>

          <p className="mb-6">
            Built on a people-powered philosophy, Traveleye Alliance enables tourism to be co-owned, co-created, and co-managed by local people, communities, experts, and youth entrepreneurs — creating lasting value for people, culture, and destinations.
          </p>

          <p>
            Guided by four interconnected pillars, our ecosystem brings together local wisdom, entrepreneurship, and innovation to develop inclusive, responsible, and regenerative tourism enterprises across Sri Lanka.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-[1200px] px-2">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {pillars.map((p) => (
              <PillarCard key={p.code} pillar={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
