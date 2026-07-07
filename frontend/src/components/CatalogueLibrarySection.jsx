import { ArrowDownToLine, ArrowRight, BookOpen, Eye } from 'lucide-react'
import employmentLetterPdf from '../assets/Dummy_Formal_Funny_Document.pdf'
import aboutTraveleyeImg from '../assets/involved/Develop Place Inspired Stay.jpg'
import bharatLankaImg from '../assets/involved/Develop Place Inspired Stay.jpg'
import travelCollectiveImg from '../assets/involved/Develop Place Inspired Stay.jpg'

export const catalogues = [
  {
    title: 'Traveleye Alliance Sri Lanka',
    category: 'About Traveleye',
    description:
      'A brand profile introducing the Traveleye Alliance vision, ecosystem approach, and tourism collaboration model.',
    edition: '2026 Edition',
    pages: '24 Pages',
    image: aboutTraveleyeImg,
    coverClass: 'from-[#f7efe4] via-[#e9d0b5] to-[#b88457]',
  },
  {
    title: 'Traveleye Travel Collective',
    category: 'Travel Collections',
    description:
      'A curated overview of specialist travel experiences, destination expertise, and collective tourism services.',
    edition: '2026 Edition',
    pages: '32 Pages',
    image: travelCollectiveImg,
    coverClass: 'from-[#e8f1ff] via-[#b9cceb] to-[#275CAD]',
  },
  {
    title: 'Bharat Lanka Journeys',
    category: 'Travel Collections',
    description:
      'A journey catalogue connecting Sri Lanka and India through meaningful routes, cultural discovery, and hospitality.',
    edition: '2026 Edition',
    pages: '28 Pages',
    image: bharatLankaImg,
    coverClass: 'from-[#fff4d8] via-[#dfb66a] to-[#8d4d2f]',
  },
]

export function CatalogueCard({ catalogue }) {
  return (
    <article key={catalogue.title} className="group flex h-full flex-col">
      <div
        className={`relative min-h-[230px] overflow-hidden rounded-sm bg-gradient-to-br ${catalogue.coverClass}`}
      >
        <img
          src={catalogue.image}
          alt={`${catalogue.title} catalogue cover`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172544]/25 via-transparent to-white/10" />
        {/* <div className="absolute inset-x-5 bottom-5 rounded-sm bg-white/90 p-4 shadow-sm backdrop-blur">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eef4fa] text-[#1f4f93]">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c28a5b]">
            Catalogue
          </p>
          <h3 className="mt-1 text-lg font-bold leading-tight text-[#172544]">
            {catalogue.title}
          </h3>
        </div> */}
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p className="text-sm font-bold leading-tight text-[#172544]">
          {catalogue.title}
        </p>
        {/* <p className="mt-2 text-sm text-[#7a7a7a]">{catalogue.category}</p> */}
        <p className="mt-2 flex-1 text-sm leading-6 text-[#4f5f76]">
          {catalogue.description}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="font-semibold text-[#172544]">Edition</dt>
            <dd className="mt-1 text-[#6f7785]">{catalogue.edition}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#172544]">Number of Pages</dt>
            <dd className="mt-1 text-[#6f7785]">{catalogue.pages}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={employmentLetterPdf}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${catalogue.title}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#275CAD] text-[#275CAD] transition-colors hover:bg-[#E8F1FF] hover:text-[#172544]"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={employmentLetterPdf}
            download
            aria-label={`Download ${catalogue.title}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#275CAD] text-[#275CAD] transition-colors hover:bg-[#E8F1FF] hover:text-[#172544]"
          >
            <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}

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

        <p className="mx-auto mt-8 max-w-4xl text-center text-[1.02rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
          Discover our collection of brand profiles, destination guides, travel collections,
          product catalogues, partnership guides, and business opportunity publications.
          Explore the diverse experiences, services, and opportunities available across the
          Traveleye ecosystem, and gain deeper insights into our brands, destinations,
          partnerships, and tourism initiatives.
        </p>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {catalogues.map((catalogue) => (
            <CatalogueCard key={catalogue.title} catalogue={catalogue} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/traveleye-catalogue-library"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#275CAD] px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
          >
            Explore the Complete Catalogue Library
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
