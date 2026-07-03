import { MapPinned, TrendingUp, UsersRound } from 'lucide-react'
import peoplePoweredTourismImg from '../assets/What Is People-Powered Tourism.jpg'

const principles = [
  {
    icon: UsersRound,
    title: 'People',
    body: 'Encouraging broader participation and meaningful opportunities across tourism ecosystems.',
    iconBg: 'bg-[#EEF4FF]',
    iconColor: 'text-[#1F4F93]',
  },
  {
    icon: MapPinned,
    title: 'Place',
    body: 'Supporting destinations through stewardship, culture, heritage, environmental awareness, and local identity.',
    iconBg: 'bg-[#F2F7EF]',
    iconColor: 'text-[#2F6B3F]',
  },
  {
    icon: TrendingUp,
    title: 'Prosperity',
    body: 'Creating long-term social, cultural, environmental, and economic value through tourism.',
    iconBg: 'bg-[#FFF4E8]',
    iconColor: 'text-[#B66A2C]',
  },
]

export default function PeoplePoweredTourismIntro() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-6xl text-center">
          <div className="home-section-eyebrow mb-5 justify-center">
            What Is People-Powered Tourism?
          </div>

          <h2 className="home-section-title">
            Tourism That Creates Value for People and Places
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
          <div className="space-y-5 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
            <blockquote className="mx-auto max-w-[560px] border-l-4 border-[#1F4F93] bg-[#DFE7F3] px-4 py-5 text-left text-base font-semibold italic leading-7 text-[#1f4f93] shadow-sm sm:px-5 sm:text-lg sm:leading-8 lg:mx-0 lg:ml-auto">
              &ldquo;People-Powered Tourism is an approach to tourism that places people at the heart of tourism development through participation, stewardship, collaboration, and shared value creation&mdash;creating richer traveller experiences while strengthening destinations and tourism ecosystems for the long term.&rdquo;
            </blockquote>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#e8eef2] bg-[#f7fafc] shadow-[0_18px_46px_rgba(15,23,42,0.12)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(31,79,147,0.08),rgba(194,138,91,0.06))]" aria-hidden="true" />
            <img
              src={peoplePoweredTourismImg}
              alt="What Is People-Powered Tourism"
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
          <p>
            It recognises that tourism becomes stronger when travellers, hosts, enterprises, communities, women and youth entrepreneurs, institutions, and tourism stakeholders all have opportunities to contribute meaningfully to the visitor experience and the long-term wellbeing of destinations.
          </p>
          <p>
            By fostering stronger connections between people and place, People-Powered Tourism seeks to create more authentic, inclusive, and memorable travel experiences while generating lasting social, cultural, environmental, and economic value for destinations and future generations.
          </p>
        </div>

        {/* <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, body, iconBg, iconColor }) => (
            <article
              key={title}
              className="rounded-lg border border-[#e8eef2] bg-white p-6 text-center shadow-[0_4px_18px_rgba(15,23,42,0.06)]"
            >
              <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
                <Icon className="h-6 w-6" strokeWidth={2.3} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#1f4f93]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5f6c87]">{body}</p>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  )
}
