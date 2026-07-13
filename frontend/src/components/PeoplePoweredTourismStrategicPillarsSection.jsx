const strategicPillars = [
  {
    icon: '\uD83C\uDF0D',
    title: 'People-Powered Travel Collective',
  },
  {
    icon: '\uD83C\uDF3F',
    title: 'People-Powered Host Experiences',
  },
  {
    icon: '\uD83D\uDCBC',
    title: 'People-Powered Ecosystem Support',
  },
  {
    icon: '\uD83E\uDDED',
    title: 'People-Powered Destination Facilitation',
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

        <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-[1rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
          <p>
            The <strong>People-Powered Tourism Strategic Pillars</strong> define the four primary focus areas of the <strong>People-Powered Tourism Framework</strong>, identifying where tourism is strengthened through the development and strengthening of micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
          </p>
          <p>
            Working together, these four interconnected strategic pillars create opportunities for meaningful journeys, authentic host experiences, enterprise development, ecosystem support, and destination facilitation. By encouraging participation, stewardship, collaboration, innovation, and shared value creation, they contribute to stronger tourism enterprises, resilient destinations, thriving tourism ecosystems, and lasting value for people, places, partnerships, and future generations.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            Our Four Strategic Pillars
          </h3>
        </div>

        <div className="mx-auto mt-7 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strategicPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-[#d8e2ef] bg-white px-5 py-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {pillar.icon}
              </span>
              <h4 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#172544]">
                {pillar.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
