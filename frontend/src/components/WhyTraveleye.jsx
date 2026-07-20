import {
  Handshake,
  Globe2,
  Lightbulb,
  MapPinned,
  Rocket,
  Sprout,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const reasons = [
  {
    icon: Globe2,
    title: 'Tourism Ecosystem Builder',
    description:
      'We build and steward a connected tourism ecosystem that brings together people, enterprises, destinations, and partners to create lasting value.',
    iconBg: 'bg-emerald-500',
  },
  {
    icon: Rocket,
    title: 'Enterprise Development',
    description:
      'We develop and strengthen micro and small tourism enterprises, empowering entrepreneurs to grow sustainable and resilient businesses.',
    iconBg: 'bg-blue-800',
  },
  {
    icon: MapPinned,
    title: 'Destination Development',
    description:
      'We support destination development through stewardship, collaboration, enterprise growth, and community participation.',
    iconBg: 'bg-amber-500',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description:
      'We create meaningful partnerships that connect tourism enterprises, institutions, communities, governments, investors, and strategic partners.',
    iconBg: 'bg-sky-500',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description:
      'We transform ideas into practical tourism solutions through connected development models, operational platforms, and ecosystem initiatives.',
    iconBg: 'bg-lime-500',
  },
  {
    icon: Sprout,
    title: 'Sustainable Prosperity',
    description:
      'We strengthen tourism for the long term by creating economic, social, cultural, and environmental value for people, destinations, and local communities.',
    iconBg: 'bg-red-600',
  },
]

function ReasonCard({ reason }) {
  const Icon = reason.icon

  return (
    <article className="rounded-xl border border-[#b8d2fb] bg-white px-4 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
      <div className="flex items-start gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white ${reason.iconBg}`}>
          <Icon className="h-7 w-7" />
        </div>

        <div>
          <h3 className="text-[1.05rem] font-bold leading-tight text-[#111827] sm:text-[1.15rem]">
            {reason.title}
          </h3>
          <p className="mt-1 text-[0.85rem] font-medium leading-5 text-[#4b5563] sm:text-[0.79rem]">
            {reason.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function WhyTraveleye() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex justify-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#dfe7f3] px-5 py-2 text-[1.05rem] font-bold text-[#214f95] shadow-sm"> */}
          <div className="home-section-eyebrow">
            <span className="text-xl leading-none">✦ </span>
            Why Choose Traveleye
          </div>
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2">
            {/* <span className="mr-0 text-4xl leading-none sm:text-5xl">🌿</span> */}
            <h2 className="home-section-title mx-0 max-w-5xl">
              {/* Because Sri Lanka needs a People-Powered Tourism Ecosystem – not another tour operator */}
              Building Stronger Tourism Through People, Partnerships, and Purpose
            </h2>
          </div>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />

          {/* <p className="mt-5 text-xl font-semibold leading-8 text-slate-600 sm:text-2xl">
            Transforming travel into a shared journey that creates value for People, Planet, and Prosperity.
          </p> */}
          <div className="mx-auto mt-5 max-w-5xl space-y-6 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
            <p>
              Traveleye Alliance Sri Lanka is building <strong>Sri Lanka&apos;s First People-Powered Tourism Ecosystem</strong> bringing together people, tourism enterprises, destinations, institutions, and strategic partners to create stronger, more connected tourism.
            </p>
            <p>
              Guided by the <strong>People-Powered Tourism Framework</strong>, we develop and strengthen micro and small tourism enterprises while supporting destination development, meaningful partnerships, innovation, and long-term prosperity across Sri Lanka&apos;s tourism ecosystem.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            Why Choose Traveleye?
          </h3>
        </div>

        <div className="mx-auto mt-7 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/why-traveleye"
            className="w-full rounded-xl bg-[#275CAD] px-8 py-4 text-center text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
          >
            Discover Why Traveleye
          </Link>
        </div>
      </div>
    </section>
  )
}
