import { Globe2, Sprout } from 'lucide-react'
import guidingPrinciplesImg from '../assets/8 Guiding Principles.jpg'
import globallyAlignedImg from '../assets/Globally Alligned.jpg'

const featureSections = [
  {
    icon: Sprout,
    label: 'Guiding Principles',
    title: 'The Values That Shape the Traveleye Ecosystem',
    paragraphs: [
      'The Traveleye People-Powered Tourism Framework is guided by principles that encourage tourism to remain authentic, inclusive, participatory, responsible, innovative, and grounded in long-term stewardship.',
      'Together, these principles strengthen tourism by encouraging meaningful participation, shared responsibility, local identity, human-centred innovation, and lasting value for people, place, and future generations.',
    ],
    cta: 'Explore the Guiding Principles',
    to: '/guiding-principles',
    image: guidingPrinciplesImg,
    imageAlt: 'People discussing the People-Powered Tourism framework',
    imageSide: 'left',
  },
  {
    icon: Globe2,
    label: 'Globally Aligned. Locally Grounded.',
    title: 'Inspired by Global Thinking. Rooted in Sri Lankan Realities.',
    paragraphs: [
      "The Traveleye People-Powered Tourism Framework draws inspiration from internationally recognised principles of sustainable tourism, regenerative tourism, destination stewardship, community participation, and responsible tourism development, while remaining deeply connected to Sri Lanka's people, place, and local identity.",
      'Designed to be adaptable across different destinations and tourism environments, the framework encourages participation, stewardship, collaboration, innovation, and shared value creation that strengthen tourism ecosystems for the long term and contribute to broader sustainable development aspirations.',
    ],
    cta: 'Explore the Framework',
    to: '/globally-aligned-locally-grounded',
    image: globallyAlignedImg,
    imageAlt: 'Traveleye People-Powered Tourism framework overview',
    imageSide: 'right',
  },
]

function ImagePanel({ section }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      <div className="absolute -bottom-6 -left-5 h-32 w-32 rounded-full bg-[#dfe7f3] opacity-75 blur-sm" aria-hidden="true" />
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#eef4ff]" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-sm border border-white bg-[#eef4ff] p-3 shadow-[0_20px_42px_rgba(31,79,147,0.16)]">
        <div className="aspect-[1.1/1] overflow-hidden bg-[#dfe7f3]">
          <img
            src={section.image}
            alt={section.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}

function TextPanel({ section }) {
  const Icon = section.icon

  return (
    <div className="mx-auto w-full max-w-[560px] text-center lg:mx-0 lg:text-left">
      <div className="home-section-eyebrow lg:justify-start">
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="leading-tight">{section.label}</span>
      </div>

      <h2 className="mt-5 text-[1.85rem] font-semibold leading-tight tracking-normal text-[#172544] sm:text-[2.1rem] lg:text-[2.45rem]">
        {section.title}
      </h2>

      <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#275CAD] lg:mx-0" />

      <div className="mt-6 space-y-5 text-[1.02rem] leading-7 text-[#6b7894] sm:text-[1.08rem] sm:leading-8">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-7 flex justify-center lg:justify-start">
        <a
          href={section.to}
          className="inline-flex w-full justify-center rounded-lg bg-[#275CAD] px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
        >
          {section.cta}
        </a>
      </div>
    </div>
  )
}

export default function HomeFrameworkSections() {
  return (
    <section className="w-full bg-[#fcfbf7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16 lg:space-y-20">
        {featureSections.map((section) => {
          const imageFirst = section.imageSide === 'left'

          return (
            <article
              key={section.label}
              className="grid items-center gap-10 border-b border-[#d8e2ef] pb-16 last:border-b-0 last:pb-0 lg:grid-cols-2 lg:gap-16"
            >
              {imageFirst ? (
                <>
                  <ImagePanel section={section} />
                  <TextPanel section={section} />
                </>
              ) : (
                <>
                  <div className="lg:order-2">
                    <ImagePanel section={section} />
                  </div>
                  <div className="lg:order-1">
                    <TextPanel section={section} />
                  </div>
                </>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
