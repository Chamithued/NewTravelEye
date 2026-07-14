import { Handshake, Leaf, MapPin, Users } from 'lucide-react'
// import peoplePoweredTourismImg from '../assets/What Is People-Powered Tourism.jpg'
import peoplePoweredTourismImg from "../assets/What is Traveleye's People-Powered Tourism.jpg"

const principles = [
  {
    icon: Users,
    title: 'People',
    body: 'Empowering people through participation, entrepreneurship, and shared opportunities.',
    iconBg: 'bg-[#fff4e8]',
    iconColor: 'text-[#b66a2c]',
  },
  {
    icon: MapPin,
    title: 'Places',
    body: 'Celebrating the identity, heritage, and stewardship of destinations.',
    iconBg: 'bg-[#eef4ff]',
    iconColor: 'text-[#1f4f93]',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    body: 'Connecting people, enterprises, institutions, and destinations through collaboration.',
    iconBg: 'bg-[#f7eefc]',
    iconColor: 'text-[#7a4fa3]',
  },
  {
    icon: Leaf,
    title: 'Prosperity',
    body: 'Creating lasting economic, social, cultural, and environmental value through stronger tourism enterprises.',
    iconBg: 'bg-[#f2f7ef]',
    iconColor: 'text-[#2f6b3f]',
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
            Tourism That Creates Lasting Value for People and Places
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
          <div className="mx-auto max-w-[560px] space-y-5 text-center text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8 lg:mx-0 lg:ml-auto lg:text-left">
            <p>
              At Traveleye Alliance Sri Lanka, <strong>People-Powered Tourism</strong> places people at the heart of tourism development. It is our approach to developing and strengthening micro and small tourism enterprises by encouraging meaningful participation, shared stewardship, collaboration, innovation, and enterprise development across Sri Lanka&apos;s tourism ecosystem.
            </p>
            <p>
              Built upon the interconnected foundations of <strong>People</strong>, <strong>Places</strong>, <strong>Partnerships</strong>, and <strong>Prosperity</strong>, People-Powered Tourism creates stronger tourism enterprises, resilient destinations, and lasting value for present and future generations.
            </p>
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

        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            The Four Foundations of People-Powered Tourism
          </h3>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, body, iconBg, iconColor }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#cfe0f6] bg-white p-5 text-center shadow-[0_4px_14px_rgba(15,23,42,0.08)] sm:p-6"
            >
              <h3 className="text-xl font-bold text-[#1f4f93]">{title}</h3>
              <div className={`mx-auto mt-3 flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}>
                <Icon className={`h-7 w-7 ${iconColor}`} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm leading-6 text-[#5f6c87]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
