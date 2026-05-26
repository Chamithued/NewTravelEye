import {
  Handshake,
  Globe2,
  House,
  Leaf,
  MapPinned,
  Sprout,
} from 'lucide-react'

const reasons = [
  {
    icon: Leaf,
    title: 'People-Powered',
    description:
      'Co-owned, co-created, and co-managed by local people, communities, youth entrepreneurs, and experts.',
    iconBg: 'bg-emerald-500',
  },
  {
    icon: Globe2,
    title: 'Regenerative Impact',
    description:
      'Experiences that restore ecosystems, preserve heritage, and uplift local livelihoods.',
    iconBg: 'bg-blue-800',
  },
  {
    icon: House,
    title: 'Authentic Experiences',
    description:
      'Go beyond the guidebook into living villages, traditions, and real stories.',
    iconBg: 'bg-amber-500',
  },
  {
    icon: Handshake,
    title: 'Innovative Partnerships',
    description:
      'Collaboration and shared ownership that replace traditional hierarchies.',
    iconBg: 'bg-sky-500',
  },
  {
    icon: Sprout,
    title: 'Inclusive & Sustainable',
    description:
      'Empowering women, youth, and rural communities through equitable tourism ventures.',
    iconBg: 'bg-lime-500',
  },
  {
    icon: MapPinned,
    title: 'Island-Wide Reach',
    description:
      'Our People-Powered Facilitation Centers connect travelers, operators, and local experiences seamlessly across Sri Lanka.',
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
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#dfe7f3] px-5 py-2 text-[1.05rem] font-bold text-[#214f95] shadow-sm">
            <span className="text-xl leading-none">✦</span>
            Why Traveleye
          </div>
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <div className="flex items-start justify-center gap-0">
            <span className="mr-0 text-5xl leading-none">🌿</span>
            <h2 className="max-w-5xl text-[1.85rem] font-semibold leading-tight text-[#172544] sm:text-[2.2rem] lg:text-[2.8rem]">
              Because Sri Lanka needs a People-Powered Tourism Ecosystem – not another tour operator
            </h2>
          </div>

          <p className="mt-5 text-xl font-semibold leading-8 text-slate-600 sm:text-2xl">
            Transforming travel into a shared journey that creates value for People, Planet, and Prosperity.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-xl bg-[#275CAD] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96]"
          >
            Discover More Why Traveleye?
          </button>
        </div>
      </div>
    </section>
  )
}
