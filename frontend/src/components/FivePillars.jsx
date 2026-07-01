import { Leaf, Building2, Compass, MapPinned, BriefcaseBusiness } from 'lucide-react'

import staysImg from '../assets/client/stays_new.jpg'
import experientialImg from '../assets/client/PPES.png'
import tourOpsImg from '../assets/client/TC.png'
import supportImg from '../assets/client/Support Services.png'
import facilitationImg from '../assets/client/At the Traveleye Facilitation Center.png'
import { Link } from 'react-router-dom'

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
    title: 'People-Powered Host Experiences',
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
    title: 'People-Powered Ecosystem Support',
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
    title: 'People-Powered Destination Facilitation',
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
  const pillarDescriptions = {
    PPTC:(<> 'Meaningful <strong>inbound, domestic, outbound, premium, celebration, and travel corridor journeys</strong> that connect travellers with Sri Lanka through authentic people, places, and experiences.'</>),
    PPHE:(<> Authentic <strong>host stays and people & place-inspired experiences</strong> shaped by local culture, hospitality, heritage, nature, creativity, and meaningful human connection.</>),
    PPES:(<> Supporting tourism through <strong>knowledge, collaboration, innovation, technology, capability development, enterprise support, and ecosystem services.</strong> </>),
    PPDF:( <>Encouraging <strong>local participation, destination stewardship, place-based collaboration, and ecosystem facilitation</strong> for stronger tourism ecosystems. </>),
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
                        <Link
                          key={cta.label}
                          to={cta.to}
                          className={`inline-flex group w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-center text-sm font-semibold transition bg-[#1C4686] text-white hover:bg-[#193F78] sm:w-auto sm:justify-start`}
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
                        </Link>
                      ))}
                    </div>

                    {pillar.ctas.slice(2).map((cta) => (
                      <Link
                        key={cta.label}
                        to={cta.to}
                        className={`inline-flex group w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-center text-sm font-semibold transition bg-[#1C4686] text-white hover:bg-[#193F78] sm:w-auto sm:justify-start`}
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
                      </Link>
                    ))}
                  </>
                ) : (
                  pillar.ctas.map((cta) => (
                    <Link
                      key={cta.label}
                      to={cta.to}
                      className={`inline-flex group w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-center text-sm font-semibold transition bg-[#1C4686] text-white hover:bg-[#193F78] sm:w-auto sm:justify-start`}
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
                    </Link>
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
    <section className="w-full bg-[#fcfbf7] px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8 lg:pb-12 lg:pt-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex justify-center">
          {/* <div className="inline-flex items-center gap-3 rounded-full bg-[#e9eef8] px-5 py-2 text-[1.05rem] font-bold text-[#214f95] shadow-sm"> */}
          <div className="home-section-eyebrow">
            Our Four Pillars
          </div>
        </div>

        <div className="mx-auto mb-6 max-w-6xl text-center px-4">
          <div className="flex items-center justify-center gap-4">
            <h2 className="home-section-title">
             🌿 Four Connected Pillars Strengthening Tourism Ecosystems 
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
            The <strong>Traveleye People-Powered Tourism (PPT) Framework</strong> is brought to life through four interconnected pillars that strengthen <strong>journeys, stays, experiences, destinations, participation, and tourism ecosystems</strong> across Sri Lanka
          </p>

          <p>
            Together, these pillars create meaningful opportunities for <strong>travel, hosting, collaboration, destination stewardship, and ecosystem development</strong>, while creating long-term value for <strong>people, place, and tourism.</strong> 
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
