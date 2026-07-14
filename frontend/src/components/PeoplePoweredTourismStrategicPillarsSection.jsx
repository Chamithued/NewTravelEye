import { ArrowRight } from 'lucide-react'
import bagIcon from '../assets/pillarIcon/bag_icon.png'
import compassIcon from '../assets/pillarIcon/compass_icon.png'
import globeIcon from '../assets/pillarIcon/globe_icon.png'
import houseIcon from '../assets/pillarIcon/house_icon.png'
import strategicPillarsImg from '../assets/People-Powered Tourism Strategic Pillars.jpg'

const strategicPillars = [
  {
    icon: globeIcon,
    title: 'People-Powered Travel Collective',
    color: '#f5b21b',
  },
  {
    icon: houseIcon,
    title: 'People-Powered Host Experiences',
    color: '#1f75d6',
  },
  {
    icon: bagIcon,
    title: 'People-Powered Ecosystem Support',
    color: '#28a745',
  },
  {
    icon: compassIcon,
    title: 'People-Powered Destination Facilitation',
    color: '#ff7a1a',
  },
]

export default function PeoplePoweredTourismStrategicPillarsSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="home-section-eyebrow mb-5 justify-center">
            People-Powered Tourism Strategic Pillars
          </div>

          <h2 className="home-section-title">
            Four Connected Strategic Pillars Strengthening Tourism Ecosystems
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="space-y-5 text-center text-[1rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8 lg:text-left">
            <p>
              The <strong>People-Powered Tourism Strategic Pillars</strong> define the four primary focus areas of the <strong>People-Powered Tourism Framework</strong>, identifying where tourism is strengthened through the development and strengthening of micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
            </p>
            <p>
              Working together, these four interconnected strategic pillars create opportunities for meaningful journeys, authentic host experiences, enterprise development, ecosystem support, and destination facilitation. By encouraging participation, stewardship, collaboration, innovation, and shared value creation, they contribute to stronger tourism enterprises, resilient destinations, thriving tourism ecosystems, and lasting value for people, places, partnerships, and future generations.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl lg:max-w-none">
            <img
              src={strategicPillarsImg}
              alt="People-Powered Tourism four strategic pillars model"
              className="aspect-[1.2/1] w-full rounded-2xl object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            Our Four Strategic Pillars
          </h3>
        </div>

        <div className="mx-auto mt-9 grid max-w-6xl grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {strategicPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="strategic-pillar-card"
              style={{ '--pillar-accent': pillar.color }}
            >
              <span className="strategic-pillar-card__dot" aria-hidden="true" />
              <span className="strategic-pillar-card__arrow" aria-hidden="true" />
              <span className="strategic-pillar-card__icon" aria-hidden="true">
                <img src={pillar.icon} alt="" />
              </span>
              <div className="strategic-pillar-card__body">
                <h4>{pillar.title}</h4>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/people-powered-tourism-strategic-pillars"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#214f95] px-6 py-3.5 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:px-8 sm:text-[1.05rem]"
          >
            Explore the People-Powered Tourism Strategic Pillars
            <ArrowRight className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
