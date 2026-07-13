import { ArrowDownToLine, ArrowRight, BookOpen, Eye } from 'lucide-react'
import aboutTraveleyeImg from '../assets/catalogues/Traveleye Alliance Catalogue new.jpg'
import bharatLankaImg from '../assets/catalogues/Traveleye Bharat Lanka Journeys Catalogue.jpg'
import travelCollectiveImg from '../assets/catalogues/Traveleye Travel Collective Catalogue.jpg'

const cataloguePdf = '/catalogues/traveleye-pdf.pdf'

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
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
            href={cataloguePdf}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${catalogue.title}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#275CAD] text-[#275CAD] transition-colors hover:bg-[#E8F1FF] hover:text-[#172544]"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={cataloguePdf}
            download="traveleye-pdf.pdf"
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
            <span>Explore Our Catalogue Library</span>
          </div>

          <h2 className="mt-5 text-[1.85rem] font-semibold leading-tight tracking-normal text-[#172544] sm:text-[2.1rem] lg:text-[2.45rem]">
            Discover Publications, Travel Collections, and Tourism Opportunities Across the Traveleye Ecosystem 
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />

        </div>

        <p className="mx-auto mt-8 max-w-6xl text-center text-[1.02rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
          Explore a growing collection of publications, travel collections, destination guides,
          partnership programmes, tourism development resources, and business opportunity
          catalogues that provide deeper insights into the <strong>Traveleye</strong>{' '}
          <strong>People-Powered Tourism Ecosystem</strong>. Whether you are a traveller,
          tourism professional, entrepreneur, investor, educator, development partner, or
          institution, our Catalogue Library offers valuable resources to help you explore,
          collaborate, and grow with Traveleye.
        </p>

        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            Featured Publications
          </h3>
        </div>

        <div className="mt-7 grid gap-7 md:grid-cols-3">
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
