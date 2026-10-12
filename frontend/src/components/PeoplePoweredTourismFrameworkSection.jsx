import frameworkImg from '../assets/People-Powered Tourism Framework.jpg'
import guidingPrinciplesImg from '../assets/frameworks/New PPT Guiding Principles.jpg'
import alignmentImg from '../assets/frameworks/New PPT Local & Global Alignment.jpg'
import strategicPillarsImg from '../assets/People-Powered Tourism Strategic Pillars.jpg'
import developmentModelsImg from '../assets/People-Powered Tourism Development Models.jpg'
import hostModelImg from '../assets/frameworks/New PPT Host Model.jpg'
import revenueSharingImg from '../assets/frameworks/New PPT Revenue Sharing Model.jpg'
import operationalPlatformsImg from '../assets/frameworks/New PPT Operational Platforms.jpg'
import outcomesImg from '../assets/frameworks/New PPT Outcomes.jpg'
import indicatorsImg from '../assets/frameworks/New PPT Indicators.jpg'
import { ArrowRight } from 'lucide-react'

const frameworkComponents = [
  { title: 'Guiding Principles', description: 'The values and principles that guide how tourism is developed, strengthened, and sustained across Sri Lanka’s tourism ecosystem.', href: '/guiding-principles', image: guidingPrinciplesImg },
  { title: 'Local & Global Alignment', description: 'Connecting Sri Lanka’s heritage, local knowledge, and traditional wisdom with contemporary global thinking on sustainable, responsible, and regenerative tourism.', href: '/globally-aligned-locally-grounded', image: alignmentImg },
  { title: 'Strategic Pillars', description: 'Five connected strategic pillars define where Traveleye focuses its efforts to develop and strengthen tourism enterprises, destinations, experiences, and the wider ecosystem.', href: '/people-powered-tourism-strategic-pillars', image: strategicPillarsImg },
  { title: 'Development Models', description: 'Practical methodologies that guide how tourism is planned, developed, implemented, and continuously strengthened through collaborative approaches.', href: '/people-powered-tourism-development-models', image: developmentModelsImg },
  { title: 'Host Model', description: 'Creating opportunities for people to participate in tourism by welcoming visitors, sharing local knowledge, facilitating experiences, and creating meaningful connections.', href: '/people-powered-tourism-host-model', image: hostModelImg },
  { title: 'Revenue Sharing Model', description: 'A framework for sharing tourism revenue according to contribution, responsibility, and agreed value, helping create broader participation and shared prosperity.', href: '/people-powered-tourism-revenue-sharing-model', image: revenueSharingImg },
  { title: 'Operational Platforms', description: 'The platforms through which Traveleye translates the People-Powered Tourism Framework into practical tourism development and ecosystem action.', href: '/people-powered-tourism-operational-platforms', image: operationalPlatformsImg },
  { title: 'Tourism Outcomes', description: 'The tourism enterprises, stays, experiences, destinations, partnerships, programmes, and projects created through People-Powered Tourism.', href: '/people-powered-tourism-outcomes', image: outcomesImg },
  { title: 'Ecosystem Indicators', description: 'The measures used to track progress, participation, development, and impact across the People-Powered Tourism Ecosystem.', href: '/people-powered-tourism-ecosystem-indicators', image: indicatorsImg },
]

const cardThemes = [
  { panel: '#40200F', button: '#F97316' },
  { panel: '#30163E', button: '#BF83F3' },
  { panel: '#103D3B', button: '#38B6A5' },
  { panel: '#152D4A', button: '#68A8F0' },
  { panel: '#431827', button: '#F18AA7' },
  { panel: '#1A3B24', button: '#8AD18A' },
  { panel: '#253747', button: '#8AC6D6' },
  { panel: '#252052', button: '#A99AF0' },
  { panel: '#3A3C17', button: '#CED87A' },
]

export default function PeoplePoweredTourismFrameworkSection() {
  return (
    <section className="w-full bg-[#fcfbf7] pb-14 pt-14 sm:pb-16 sm:pt-16">
      <div className="w-full">
        <div className="px-4 text-center sm:px-6 lg:px-8">
          <div className="home-section-eyebrow mb-5 justify-center">
            People-Powered Tourism Framework
          </div>

          <h2 className="home-section-title">
            The Strategic Blueprint of the Traveleye People-Powered Tourism Ecosystem
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>
        <div className="relative z-10 mx-auto mt-10 max-w-6xl overflow-hidden lg:grid lg:grid-cols-[minmax(420px,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
          <div className="flex flex-col items-center bg-[#fcfbf7] p-4 sm:p-6 lg:p-0 lg:pt-10">
            <div className="w-full overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(15,23,42,0.12)] sm:rounded-[1.6rem]">
            <img
              src={frameworkImg}
              alt="People collaborating around the People-Powered Tourism Framework"
              className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[495px]"
            />
            </div>

            <a
              href="/people-powered-tourism-framework"
              className="mt-8 w-full rounded-xl bg-[#214f95] px-6 py-4 text-center text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:w-auto sm:px-8 sm:text-[1.05rem]"
            >
              Explore the People-Powered Tourism Framework
            </a>
          </div>

          <div className="bg-[#fcfbf7] p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-xl space-y-5 text-[1rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
              <div>
                <p className="text-center text-[1.12rem] font-extrabold text-[#172544]">
                  Purpose
                </p>
                <p className="mt-2 font-bold text-[#172544]">
                  To provide the strategic blueprint for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
                </p>
              </div>
              <p>
                The <strong>People-Powered Tourism Framework</strong> is the strategic blueprint that guides the <strong>Traveleye People-Powered Tourism Ecosystem</strong>. Built upon its <strong>Guiding Principles</strong> and <strong>Locally Grounded. Globally Aligned.</strong> foundation, it provides a structured and connected approach to tourism development that translates vision into practical action.
              </p>
              <p>
                Through its interconnected <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Host Model</strong>, <strong>Revenue Sharing Model</strong>, <strong>Operational Platforms</strong>, <strong>Tourism Outcomes</strong>, and <strong>Ecosystem Indicators</strong>, the Framework provides a connected pathway for developing stronger tourism enterprises, resilient destinations, meaningful partnerships, and a thriving tourism ecosystem that creates lasting value for <strong>People</strong>, <strong>Places</strong>, <strong>Partnerships</strong>, and <strong>Prosperity</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-semibold text-[#172544]">The Nine Components of the People-Powered Tourism Framework</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frameworkComponents.map(({ title, description, href, image }, index) => (
              <article key={title} className="group flex h-full flex-col overflow-hidden rounded-[1.15rem] bg-[#161616] shadow-[0_16px_36px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-square w-full bg-[#fcfbf7]">
                  <img src={image} alt="" className="absolute inset-0 h-full w-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-5 text-white sm:px-6" style={{ backgroundColor: cardThemes[index % cardThemes.length].panel }}>
                  <h4 className="text-xl font-bold leading-snug">{title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-6 text-white/85">{description}</p>
                  <a
                    className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-center text-sm font-semibold text-[#141414] shadow-[0_5px_0_rgba(0,0,0,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    href={href}
                    style={{ backgroundColor: cardThemes[index % cardThemes.length].button }}
                  >
                    Explore {title}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
