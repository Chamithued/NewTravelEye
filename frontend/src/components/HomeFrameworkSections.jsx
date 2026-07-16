import { Globe2, Sprout } from 'lucide-react'
import guidingPrinciplesImg from '../assets/People-Powered Tourism Guiding Principles.jpg'
import globallyAlignedImg from '../assets/People-Powered Tourism Global Alignment.jpg'

const featureSections = [
  {
    icon: Sprout,
    label: 'People-Powered Tourism Guiding Principles',
    title: 'The Values That Guide the Traveleye People-Powered Tourism Framework',
    paragraphs: [
      <>The <strong>People-Powered Tourism Framework</strong> is built upon a shared set of <strong>Guiding Principles</strong> that shape how tourism is planned, developed, implemented, and strengthened across Sri Lanka&apos;s tourism ecosystem. These principles encourage tourism that is authentic, inclusive, participatory, collaborative, innovative, responsible, and grounded in long-term stewardship.</>,
      <>Together, they guide decision-making, strengthen partnerships, inspire meaningful participation, and promote shared responsibility, helping create lasting economic, social, cultural, and environmental value for <strong>People</strong>, <strong>Places</strong>, <strong>Partnerships</strong>, and <strong>Prosperity</strong>.</>,
    ],
    cta: 'Explore the People-Powered Tourism Guiding Principles',
    to: '/guiding-principles',
    image: guidingPrinciplesImg,
    imageAlt: 'People discussing the People-Powered Tourism framework',
    imageSide: 'left',
  },
  {
    icon: Globe2,
    label: 'People-Powered Tourism Global Alignment',
    title: 'Globally Aligned. Locally Grounded.',
    paragraphs: [
      "The People-Powered Tourism Framework is informed by internationally recognised tourism concepts, including sustainable tourism, regenerative tourism, responsible tourism, destination stewardship, and community-centred development, while remaining firmly grounded in Sri Lanka's people, places, culture, and local realities.",
      <>Aligned with the <strong>United Nations Sustainable Development Goals (SDGs)</strong>, the Framework provides a connected and adaptable approach to developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem. By encouraging participation, stewardship, collaboration, innovation, and shared value creation, it contributes to stronger tourism enterprises, resilient destinations, and lasting value for <strong>People</strong>, <strong>Places</strong>, <strong>Partnerships</strong>, and <strong>Prosperity</strong>.</>,
    ],
    cta: 'Explore the People-Powered Tourism Global Alignment',
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

      <div className="relative aspect-[1.1/1] overflow-hidden rounded-sm">
        <img
          src={section.image}
          alt={section.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  )
}

function SectionHeader({ section }) {
  const Icon = section.icon

  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      <div className="home-section-eyebrow justify-center">
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="leading-tight">{section.label}</span>
      </div>

      <h2 className="mt-5 text-[1.85rem] font-semibold leading-tight tracking-normal text-[#172544] sm:text-[2.1rem] lg:text-[2.45rem]">
        {section.title}
      </h2>
      <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#275CAD]" />
      {section.subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-[1.08rem] font-semibold leading-7 text-[#214f95] sm:text-[1.18rem]">
          {section.subtitle}
        </p>
      )}

      
    </div>
  )
}

function TextPanel({ section }) {
  return (
    <div className="mx-auto w-full max-w-[560px] text-center lg:mx-0 lg:text-left">

      <div className="mt-6 space-y-5 text-[1.02rem] leading-7 text-[#6b7894] sm:text-[1.08rem] sm:leading-8">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${section.label}-${index}`}>{paragraph}</p>
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
              <div className="lg:col-span-2">
                <SectionHeader section={section} />
              </div>

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
