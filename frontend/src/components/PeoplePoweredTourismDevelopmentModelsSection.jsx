import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Globe2,
  Handshake,
  Leaf,
  Network,
  Route,
  Sprout,
} from 'lucide-react'

const developmentModels = [
  {
    title: 'People-Powered Participation Model',
    description:
      'Encouraging meaningful participation through collaboration, inclusion, shared ownership, and collective action.',
    icon: Handshake,
    color: '#9be447',
    darkColor: '#65bd22',
  },
  {
    title: 'Shared Stewardship Model',
    description:
      'Promoting shared responsibility for destinations, communities, culture, heritage, and nature.',
    icon: Leaf,
    color: '#20c8bb',
    darkColor: '#0a9a92',
  },
  {
    title: 'People-Powered Tourism Enterprise Development Model',
    description:
      'Supporting the development and strengthening of resilient micro and small tourism enterprises.',
    icon: BriefcaseBusiness,
    color: '#35c9f4',
    darkColor: '#168fe8',
  },
  {
    title: 'Destination Stewardship Model',
    description:
      'Strengthening destinations through collaborative planning, coordination, and long-term stewardship.',
    icon: Compass,
    color: '#60241E',
    darkColor: '#60241E',
  },
  {
    title: 'Travel Corridor Development Model',
    description:
      'Building connected tourism corridors through strategic partnerships, cultural exchange, and long-term international collaboration.',
    icon: Route,
    color: '#f2b24a',
    darkColor: '#d88921',
  },
  {
    title: 'Tourism Ecosystem Connectivity Model',
    description:
      'Connecting people, enterprises, destinations, institutions, and support systems to strengthen tourism ecosystem collaboration and resilience.',
    icon: Network,
    color: '#ff9b7a',
    darkColor: '#df6247',
  },
  {
    title: 'Shared Value Creation Model',
    description:
      'Creating balanced economic, social, cultural, and environmental value for people, places, partnerships, and future generations.',
    icon: Globe2,
    color: '#112E81',
    darkColor: '#112E81',
  },
  {
    title: 'Living Framework Evolution Model',
    description:
      'Supporting continuous learning, innovation, adaptation, and the ongoing evolution of tourism development.',
    icon: Sprout,
    color: '#f08ac6',
    darkColor: '#c95a9b',
  },
]

export default function PeoplePoweredTourismDevelopmentModelsSection() {
  return (
    <section className="w-full bg-[#f4f6f8] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="home-section-eyebrow mb-5 justify-center">
            People-Powered Tourism Development Models
          </div>

          <h2 className="home-section-title">
            Guiding Tourism Development Through Practical, People-Powered Methodologies
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>

        <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-[1rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
          <p>
            The <strong>People-Powered Tourism Development Models</strong> provide the practical methodologies that transform the <strong>People-Powered Tourism Framework</strong> into meaningful action. While the Framework provides the strategic blueprint and the Strategic Pillars identify where tourism is strengthened, the Development Models demonstrate how tourism can be developed through structured, collaborative, and people-powered approaches.
          </p>
          <p>
            Together, these eight interconnected models guide the planning, development, implementation, and continuous strengthening of micro and small tourism enterprises, place-inspired host stays, people and place-inspired experiences, destinations, travel corridors, partnerships, programmes, projects, and ecosystem initiatives across Sri Lanka&apos;s tourism ecosystem.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            Our Development Models
          </h3>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {developmentModels.map((model) => {
            const Icon = model.icon

            return (
              <article
                key={model.title}
                className="relative mx-auto flex h-[268px] w-full max-w-[240px] flex-col rounded-[0.8rem] px-[12px] pb-[17px] pt-[60px] text-center text-white shadow-[0_5px_0_rgba(15,23,42,0.1),0_14px_18px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${model.color} 0%, ${model.darkColor} 100%)`,
                }}
              >
                <div className="absolute left-1/2 top-[-34px] h-[166px] w-[166px] -translate-x-1/2 rounded-full bg-white" />

                <div className="absolute left-1/2 top-[12px] z-10 flex -translate-x-1/2 items-center justify-center">
                  <Icon
                    className="h-10 w-10"
                    style={{ color: model.darkColor }}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </div>

                <div className="relative z-10 flex h-[148px] flex-col bg-white px-5 pb-4 pt-[21px] shadow-[0_4px_7px_rgba(15,23,42,0.16)]">
                  <h4
                    className="min-h-[38px] text-[0.76rem] font-extrabold uppercase leading-[1.15]"
                    style={{ color: model.darkColor }}
                  >
                    {model.title}
                  </h4>
                  <p className="mt-2 overflow-hidden text-[0.76rem] leading-[1.72] text-[#67707c]">
                    {model.description}
                  </p>
                </div>

              </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/people-powered-tourism-development-models"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#214f95] px-6 py-3.5 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:px-8 sm:text-[1.05rem]"
          >
            Explore the People-Powered Tourism Development Models
            <ArrowRight className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
