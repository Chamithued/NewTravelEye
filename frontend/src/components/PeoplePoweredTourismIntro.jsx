import { Globe2, Handshake, Leaf } from 'lucide-react'
// import peoplePoweredTourismImg from '../assets/What Is People-Powered Tourism.jpg'
import peoplePoweredTourismImg from "../assets/What is Traveleye's People-Powered Tourism.jpg"

const principles = [
  {
    icon: Handshake,
    title: 'People',
    body: 'Placing people at the heart of tourism by encouraging meaningful participation, entrepreneurship, collaboration, and shared opportunities that strengthen tourism enterprises, communities, and livelihoods.',
    iconBg: 'bg-[#fff4e8]',
    iconColor: 'text-[#b66a2c]',
  },
  {
    icon: Leaf,
    title: 'Place',
    body: 'Celebrating the unique identity of places by supporting destination stewardship, cultural heritage, local identity, environmental responsibility, and place-inspired tourism development.',
    iconBg: 'bg-[#eef4ff]',
    iconColor: 'text-[#1f4f93]',
  },
  {
    icon: Globe2,
    title: 'Prosperity',
    body: 'Creating lasting economic, social, cultural, and environmental value by developing and strengthening micro and small tourism enterprises while supporting resilient destinations and thriving tourism ecosystems for present and future generations.',
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
            Tourism That Creates Value for People and Places
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
          <div className="space-y-5 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
            <blockquote className="mx-auto max-w-[560px] border-l-4 border-[#1F4F93] bg-[#DFE7F3] px-4 py-5 text-left text-base font-semibold italic leading-7 text-[#1f4f93] shadow-sm sm:px-5 sm:text-lg sm:leading-8 lg:mx-0 lg:ml-auto">
              &ldquo;At Traveleye Alliance Sri Lanka, we define People-Powered Tourism as an approach to tourism that places people at the heart of tourism development through participation, stewardship, collaboration, innovation, and shared value creation. It develops and strengthens micro and small tourism enterprises while creating meaningful journeys, authentic host stays, people and place-inspired experiences, and collaborative destination development that contribute to thriving tourism ecosystems and lasting value for people, places, partnerships, and future generations.&rdquo;
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

        <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
          <p>
            Traveleye's People-Powered Tourism recognises that tourism is strongest when travellers, hosts, tourism enterprises, communities, women and youth entrepreneurs, institutions, development partners, and tourism stakeholders all have meaningful opportunities to participate, collaborate, and contribute to tourism development.
          </p>
          <p>
            By strengthening the connections between people, places, enterprises, destinations, and tourism stakeholders, our approach encourages tourism that is more authentic, inclusive, resilient, and sustainable. It seeks to create shared value that benefits travellers, empowers local enterprises, strengthens destinations, and contributes to the long-term wellbeing of Sri Lanka's tourism ecosystem. 
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
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
