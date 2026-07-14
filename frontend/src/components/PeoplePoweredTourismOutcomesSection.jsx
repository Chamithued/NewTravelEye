import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  FolderKanban,
  Globe2,
  Handshake,
  Home,
  LineChart,
  Route,
  Sprout,
  Theater,
} from 'lucide-react'

import outcomesImg from '../assets/People-Powered Tourism Outcomes.jpg'

const outcomes = [
  {
    title: 'Tourism Enterprises',
    description:
      'Developing and strengthening resilient micro and small tourism enterprises that create livelihoods, encourage entrepreneurship, and expand local economic opportunities.',
    icon: BriefcaseBusiness,
    accent: '#2f9e7e',
  },
  {
    title: 'Place-Inspired Host Stays',
    description:
      'Creating authentic host stays that celebrate the culture, hospitality, landscapes, and unique identity of each destination.',
    icon: Home,
    accent: '#c28a5b',
  },
  {
    title: 'People & Place-Inspired Experiences',
    description:
      'Developing meaningful experiences inspired by local people, culture, heritage, nature, creativity, wellness, and everyday life.',
    icon: Theater,
    accent: '#9b5fb7',
  },
  {
    title: 'Tourism Destinations',
    description:
      'Strengthening destinations through participation, stewardship, collaboration, and place-based tourism development.',
    icon: Compass,
    accent: '#1f6fa8',
  },
  {
    title: 'Travel Corridors',
    description:
      'Connecting Sri Lanka with international markets through collaborative travel corridors that encourage meaningful travel, cultural exchange, business collaboration, and long-term partnerships.',
    icon: Route,
    accent: '#dc8b2f',
  },
  {
    title: 'Tourism Partnerships',
    description:
      'Building collaborative partnerships that strengthen tourism ecosystems through shared vision, collective action, and long-term collaboration.',
    icon: Handshake,
    accent: '#348f95',
  },
  {
    title: 'Joint Ventures',
    description:
      'Creating strategic tourism joint ventures that bring together expertise, investment, innovation, and shared opportunities.',
    icon: Globe2,
    accent: '#5470b8',
  },
  {
    title: 'Tourism Programmes',
    description:
      'Supporting programmes that build capability, strengthen participation, improve tourism readiness, and foster innovation.',
    icon: LineChart,
    accent: '#6aa83f',
  },
  {
    title: 'Tourism Projects',
    description:
      'Delivering collaborative projects that strengthen tourism enterprises, destinations, and visitor experiences through practical action.',
    icon: FolderKanban,
    accent: '#b66b48',
  },
  {
    title: 'Ecosystem Initiatives',
    description:
      'Supporting collaborative initiatives that strengthen tourism ecosystems through knowledge sharing, stewardship, innovation, and ecosystem connectivity.',
    icon: Sprout,
    accent: '#4f9c58',
  },
]

export default function PeoplePoweredTourismOutcomesSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="home-section-eyebrow mb-5 justify-center">
            People-Powered Tourism Outcomes
          </div>

          <h2 className="home-section-title">
            Creating Lasting Value Through People, Places, Partnerships, and Prosperity
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>

        <div className="mt-10 grid items-center gap-8 lg:-ml-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative mx-auto w-full max-w-[460px] lg:mr-0 lg:max-w-[420px]">
            <div className="absolute -bottom-5 left-8 right-8 h-12 rounded-full bg-[#214f95]/12 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl bg-[#eef4ee] shadow-[0_22px_44px_rgba(15,23,42,0.16)]">
              <img
                src={outcomesImg}
                alt="People discussing the People-Powered Tourism outcomes"
                className="h-full min-h-[320px] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start">
            <div className="mx-auto max-w-[560px] space-y-5 text-center text-[1rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
              <p>
                The <strong>People-Powered Tourism Outcomes</strong> represent the results created through the implementation of the <strong>People-Powered Tourism Framework</strong>. Built upon its <strong>Guiding Principles</strong> and <strong>Global Alignment</strong>, and achieved through its <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, and <strong>Operational Platforms</strong>, these interconnected outcomes contribute to developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
              </p>
              <p>
                Together, they create stronger tourism enterprises, authentic host stays, people and place-inspired experiences, resilient destinations, collaborative partnerships, travel corridors, and thriving tourism ecosystems that generate lasting economic, social, cultural, and environmental value for <strong>People</strong>, <strong>Places</strong>, <strong>Partnerships</strong>, and <strong>Prosperity</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            Our Tourism Outcomes
          </h3>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon
            const centeredLastRowClass =
              index === 8 ? 'lg:col-start-2' : index === 9 ? 'lg:col-start-3' : ''

            return (
              <article
                key={outcome.title}
                className={`group relative flex min-h-[238px] w-full max-w-[286px] flex-col items-center justify-center bg-white px-5 pb-5 pt-12 text-center shadow-[0_8px_16px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_22px_rgba(15,23,42,0.12)] ${centeredLastRowClass}`}
                style={{
                  border: `2px solid ${outcome.accent}`,
                  borderTopLeftRadius: '2.25rem',
                  borderTopRightRadius: '0.15rem',
                  borderBottomRightRadius: '2.25rem',
                  borderBottomLeftRadius: '0.15rem',
                }}
              >
                <div
                  className="absolute left-1/2 top-[-2px] flex h-[44px] w-[92px] -translate-x-1/2 items-center justify-center rounded-b-lg text-white shadow-[0_6px_12px_rgba(15,23,42,0.12)]"
                  style={{ backgroundColor: outcome.accent }}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.4} aria-hidden="true" />
                </div>

                <span
                  className="absolute right-[-6px] top-[-6px] h-6 w-6"
                  style={{
                    borderTop: `6px solid ${outcome.accent}`,
                    borderRight: `6px solid ${outcome.accent}`,
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-[-6px] left-[-6px] h-6 w-6"
                  style={{
                    borderBottom: `6px solid ${outcome.accent}`,
                    borderLeft: `6px solid ${outcome.accent}`,
                  }}
                  aria-hidden="true"
                />

                <h4
                  className="text-[0.82rem] font-extrabold uppercase leading-snug tracking-[0.02em]"
                  style={{ color: outcome.accent }}
                >
                  {outcome.title}
                </h4>
                <p className="mt-3 text-[0.82rem] font-medium leading-6 text-[#344154]">
                  {outcome.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/people-powered-tourism-outcomes"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#214f95] px-6 py-3.5 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:px-8 sm:text-[1.05rem]"
          >
            Explore the People-Powered Tourism Outcomes
            <ArrowRight className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
