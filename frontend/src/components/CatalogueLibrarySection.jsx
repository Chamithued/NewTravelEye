import { ArrowRight, BookOpen, Building2, Globe2, Network } from 'lucide-react'

const catalogueItems = [
  {
    title: 'Traveleye Alliance Sri Lanka',
    icon: Network,
  },
  {
    title: 'Traveleye Travel Collective',
    icon: Globe2,
  },
  {
    title: 'Bharat Lanka Journeys',
    icon: Building2,
  },
]

export default function CatalogueLibrarySection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="home-section-eyebrow justify-center">
            <BookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Catalogue Library</span>
          </div>

          <h2 className="mt-5 text-[1.85rem] font-semibold leading-tight tracking-normal text-[#172544] sm:text-[2.1rem] lg:text-[2.45rem]">
            Explore Our Catalogue Library
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />

        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="mt-6 text-[1.02rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
              Discover our collection of brand profiles, destination guides, travel collections,
              product catalogues, partnership guides, and business opportunity publications.
              Explore the diverse experiences, services, and opportunities available across the
              Traveleye ecosystem, and gain deeper insights into our brands, destinations,
              partnerships, and tourism initiatives.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="/traveleye-catalogue-library"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#275CAD] px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
              >
                Explore the Complete Catalogue Library
                <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {catalogueItems.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="flex min-h-[112px] items-center gap-4 rounded-md border border-[#d8e2ef] bg-[#fcfbf7] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dfe6ef] text-[#1f4f93]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-left text-base font-bold leading-snug text-[#1f4f93]">
                    {item.title}
                  </h3>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
