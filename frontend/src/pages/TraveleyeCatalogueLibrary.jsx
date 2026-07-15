import { BookOpen, Compass, Handshake, Network, Sparkles } from 'lucide-react'
import heroImg from '../assets/subhero/about/Traveleye Catalogue Library.jpg'
import { CatalogueCard, catalogues } from '../components/CatalogueLibrarySection'
import FooterLinks from '../components/FooterLinks'

const catalogueGroups = [
  {
    title: 'About Traveleye',
    description:
      'Learn about our organisation, vision, People-Powered Tourism Framework, and the interconnected ecosystem that drives our mission to create meaningful tourism experiences and sustainable opportunities.',
    items: ['Traveleye Alliance Sri Lanka', 'Traveleye Travel Collective'],
  },
  {
    title: 'Travel Collections',
    description:
      'Explore our specialised travel brands, destination guides, curated journeys, and travel experiences designed to connect people and place across Sri Lanka and beyond. Traveleye',
    items: ['Bharat Lanka Journeys'],
  },
  {
    title: 'Ecosystem Opportunities',
    description:
      "Discover opportunities to collaborate, invest, and contribute to the growth of Sri Lanka's tourism ecosystem through strategic partnerships, destination development initiatives, and tourism enterprise opportunities.",
    items: [],
  },
]

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default function TraveleyeCatalogueLibrary() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Catalogue Library banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Traveleye Catalogue Library
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Explore. Discover. Connect.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={BookOpen} title="Traveleye Catalogue Library" />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              The Traveleye Catalogue Library is your gateway to exploring the diverse experiences, services, and opportunities available across the Traveleye ecosystem.
            </p>
            <p>
              Whether you are a traveller planning your next journey, a travel professional seeking destination expertise, a strategic partner exploring collaboration opportunities, or an investor looking to participate in tourism development, our collection of catalogues provides valuable insights into our brands, travel collections, destination guides, partnership programmes, product offerings, and business opportunities.
            </p>
            <p>
              Browse our collection online or download your preferred catalogues to discover how Traveleye is connecting people and place through meaningful travel and sustainable tourism development.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            icon={Network}
            title="About Traveleye"
            subtitle="Learn about our organisation, vision, People-Powered Tourism Framework, and the interconnected ecosystem that drives our mission to create meaningful tourism experiences and sustainable opportunities."
          />

          <div className="mt-8 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {catalogues
              .filter((catalogue) => catalogueGroups[0].items.includes(catalogue.title))
              .map((catalogue) => (
                <CatalogueCard key={catalogue.title} catalogue={catalogue} />
              ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            icon={Compass}
            title="Travel Collections"
            subtitle="Explore our specialised travel brands, destination guides, curated journeys, and travel experiences designed to connect people and place across Sri Lanka and beyond. Traveleye"
          />

          <div className="mt-8 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {catalogues
              .filter((catalogue) => catalogueGroups[1].items.includes(catalogue.title))
              .map((catalogue) => (
                <CatalogueCard key={catalogue.title} catalogue={catalogue} />
              ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            icon={Handshake}
            title="Ecosystem Opportunities"
            subtitle="Discover opportunities to collaborate, invest, and contribute to the growth of Sri Lanka's tourism ecosystem through strategic partnerships, destination development initiatives, and tourism enterprise opportunities."
          />
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sparkles} title="Stay Connected" />
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              Our catalogue library continues to grow with new travel collections, destination guides, partnership programmes, tourism initiatives, and business opportunities.
            </p>
            <p>
              We invite you to explore our latest publications and discover new ways to travel, collaborate, invest, and grow with Traveleye.
            </p>
          </div>
        </div>
      </section>

      <FooterLinks />
    </main>
  )
}
