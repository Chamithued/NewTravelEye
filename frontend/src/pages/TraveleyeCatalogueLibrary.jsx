import {
  BookOpen,
  Building2,
  Compass,
  HandHeart,
  HeartHandshake,
  Sparkles,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/Traveleye Catalogue Library.jpg'
import { CatalogueCard, catalogues } from '../components/CatalogueLibrarySection'
import FooterLinks from '../components/FooterLinks'

const catalogueSections = [
  {
    title: 'About Traveleye Alliance',
    tagline: "Building Sri Lanka's First People-Powered Tourism Ecosystem",
    description:
      'Explore our corporate publications and gain a deeper understanding of Traveleye Alliance, our People-Powered Tourism Framework, strategic direction, and organisational vision.',
    icon: Building2,
    featuredCatalogues: ['Traveleye Alliance Sri Lanka', 'Traveleye Travel Collective'],
  },
  {
    title: 'Traveleye Travel Collective',
    tagline: 'Journeys Connected Through People',
    description:
      'Discover our travel collections, curated journeys, travel corridors, destination guides, and partnership opportunities that connect travellers with authentic experiences across Sri Lanka and beyond.',
    icon: Compass,
  },
  {
    title: 'Traveleye Host Experiences',
    tagline: 'Crafted Through People & Place',
    description:
      'Explore authentic host stays, place-inspired experiences, wellness, nature, culture, adventure, culinary journeys, and community-led tourism experiences.',
    icon: HandHeart,
  },
  {
    title: 'Traveleye Destination Facilitation',
    tagline: 'Destinations Through People & Stewardship',
    description:
      'Discover destination development programmes, destination partnerships, facilitation services, destination investment opportunities, and collaborative initiatives that strengthen local tourism ecosystems.',
    icon: HeartHandshake,
  },
  {
    title: 'Traveleye Ecosystem Support',
    tagline: 'Supporting Tourism Through People',
    description:
      'Explore consultancy services, tourism capacity building, digital solutions, partnership programmes, investment opportunities, ecosystem services, and tourism development initiatives.',
    icon: Sparkles,
  },
]

function SectionHeading({ icon: Icon, title, tagline }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {tagline ? (
        <p className="mt-5 text-base font-bold leading-7 text-[#172544] sm:text-lg">{tagline}</p>
      ) : null}
    </div>
  )
}

export default function TraveleyeCatalogueLibrary() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Traveleye Catalogue Library banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              Traveleye Catalogue Library
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Explore. Discover. Connect.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={BookOpen} title="Traveleye Catalogue Library" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>The <strong>Traveleye Catalogue Library</strong> brings together our collection of corporate publications, travel collections, destination guides, tourism programmes, partnership opportunities, and business resources.</p>
            <p>Organised around the Traveleye People-Powered Tourism Ecosystem, our catalogues provide valuable information for travellers, tourism enterprises, entrepreneurs, destinations, strategic partners, investors, institutions, and development organisations.</p>
            <p>Whether you are exploring our organisation, planning a journey, developing tourism enterprises, strengthening destinations, or building new partnerships, our catalogue library offers practical insights into the diverse opportunities available across the Traveleye ecosystem.</p>
          </div>
        </div>
      </section>

      {catalogueSections.map((section, index) => (
        <section key={section.title} className={`w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 ${index % 2 === 0 ? 'bg-[#eef4fa]' : 'bg-white'}`}>
          <div className="mx-auto max-w-6xl">
            <SectionHeading icon={section.icon} title={section.title} tagline={section.tagline} />
            <p className="mx-auto mt-5 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{section.description}</p>
            <h3 className="mt-8 text-center text-lg font-bold text-[#172544] sm:text-xl">Featured Catalogues</h3>
            {section.featuredCatalogues ? (
              <div className="mx-auto mt-8 grid max-w-3xl gap-10 text-left md:grid-cols-2 md:gap-12">
                {catalogues
                  .filter((catalogue) => section.featuredCatalogues.includes(catalogue.title))
                  .map((catalogue) => <CatalogueCard key={catalogue.title} catalogue={catalogue} />)}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sparkles} title="Stay Connected" />
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Our catalogue library continues to grow as new travel collections, tourism programmes, destination initiatives, partnership opportunities, and ecosystem resources are developed.</p>
            <p>We invite you to explore our publications and discover new opportunities to travel, collaborate, invest, develop tourism enterprises, strengthen destinations, and become part of <strong>Sri Lanka's First People-Powered Tourism Ecosystem</strong>.</p>
          </div>
        </div>
      </section>

      <FooterLinks />
    </main>
  )
}
