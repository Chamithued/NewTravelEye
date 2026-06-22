const featureSections = [
  {
    title: '🌿 GUIDING PRINCIPLES',
    subtitle: 'The Values That Shape the Traveleye Ecosystem',
    paragraphs: [
      'The Traveleye People-Powered Tourism Framework is guided by principles that encourage tourism to remain authentic, inclusive, participatory, responsible, innovative, and grounded in long-term stewardship.',
      'Together, these principles strengthen tourism by encouraging meaningful participation, shared responsibility, local identity, human-centred innovation, and lasting value for people, place, and future generations.',
    ],
    cta: 'Explore the Guiding Principles',
  },
  {
    title: '🌏 GLOBALLY ALIGNED. LOCALLY GROUNDED.',
    subtitle: 'Inspired by Global Thinking. Rooted in Sri Lankan Realities.',
    paragraphs: [
      "The Traveleye People-Powered Tourism Framework draws inspiration from internationally recognised principles of sustainable tourism, regenerative tourism, destination stewardship, community participation, and responsible tourism development, while remaining deeply connected to Sri Lanka's people, place, and local identity.",
      'Designed to be adaptable across different destinations and tourism environments, the framework encourages participation, stewardship, collaboration, innovation, and shared value creation that strengthen tourism ecosystems for the long term and contribute to broader sustainable development aspirations.',
    ],
    cta: 'Explore the Framework',
  },
]

export default function HomeFrameworkSections() {
  return (
    <section className="w-full bg-[#fcfbf7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {featureSections.map((section) => (
          <article
            key={section.title}
            className="relative border-b border-[#d8e2ef] py-12 last:border-b-0 sm:py-16"
          >
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-bold leading-tight text-[#172544] sm:text-4xl">
                {section.title}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl font-semibold leading-8 text-[#1f4f93] sm:text-2xl">
                {section.subtitle}
              </p>

              <div className="mx-auto mt-6 max-w-5xl space-y-7 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="/people-powered-tourism-framework"
                  className="inline-flex rounded-lg bg-[#275CAD] px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96]"
                >
                  {section.cta}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
