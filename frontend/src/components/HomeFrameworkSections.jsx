import { Globe2, Sprout } from 'lucide-react'

const featureSections = [
  {
    icon: Sprout,
    label: 'GUIDING PRINCIPLES',
    title: 'The Values That Shape the Traveleye Ecosystem',
    paragraphs: [
      'The Traveleye People-Powered Tourism Framework is guided by principles that encourage tourism to remain authentic, inclusive, participatory, responsible, innovative, and grounded in long-term stewardship.',
      'Together, these principles strengthen tourism by encouraging meaningful participation, shared responsibility, local identity, human-centred innovation, and lasting value for people, place, and future generations.',
    ],
    cta: 'Explore the Guiding Principles',
    to: '/guiding-principles',
  },
  {
    icon: Globe2,
    label: 'GLOBALLY ALIGNED. LOCALLY GROUNDED.',
    title: 'Inspired by Global Thinking. Rooted in Sri Lankan Realities.',
    paragraphs: [
      "The Traveleye People-Powered Tourism Framework draws inspiration from internationally recognised principles of sustainable tourism, regenerative tourism, destination stewardship, community participation, and responsible tourism development, while remaining deeply connected to Sri Lanka's people, place, and local identity.",
      'Designed to be adaptable across different destinations and tourism environments, the framework encourages participation, stewardship, collaboration, innovation, and shared value creation that strengthen tourism ecosystems for the long term and contribute to broader sustainable development aspirations.',
    ],
    cta: 'Explore the Framework',
    to: '/globally-aligned-locally-grounded',
  },
]

export default function HomeFrameworkSections() {
  return (
    <section className="w-full bg-[#fcfbf7] px-4 pb-6 pt-2 sm:px-6 sm:pb-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {featureSections.map((section) => {
          const Icon = section.icon

          return (
            <article
              key={section.label}
              className="relative border-b border-[#d8e2ef] py-8 last:border-b-0 sm:py-10"
            >
              <div className="mx-auto max-w-5xl text-center">
                <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-[#dfe6ef] px-5 py-1.5 text-[1rem] font-extrabold leading-none text-[#1f4f93] shadow-sm sm:text-[1.2rem]">
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="leading-tight">{section.label}</span>
                </div>
                <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#172544] sm:text-4xl">
                  {section.title}
                </h2>

                <div className="mx-auto mt-6 max-w-5xl space-y-7 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <a
                    href={section.to}
                    className="inline-flex rounded-lg bg-[#275CAD] px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96]"
                  >
                    {section.cta}
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
