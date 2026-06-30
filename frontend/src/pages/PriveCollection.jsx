import {
  CalendarHeart,
  ChefHat,
  Crown,
  Handshake,
  Heart,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Trees,
} from 'lucide-react'
import heroImg from '../assets/client/prive.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const differenceCards = [
  {
    title: 'Thoughtfully Curated',
    text:
      'Every journey is individually designed around the traveller, ensuring flexibility, personalization, and attention to detail at every stage of the experience.',
  },
  {
    title: 'Carefully Selected Stays',
    text:
      'Boutique properties, villas, heritage environments, and nature-connected retreats chosen for their character, comfort, hospitality, and sense of place.',
  },
  {
    title: 'Meaningful Experiences',
    text:
      "Privately curated experiences that connect travellers with Sri Lanka's culture, nature, wellness traditions, culinary heritage, and local communities.",
  },
  {
    title: 'Seamless Coordination',
    text:
      'Personalized planning, destination coordination, and attentive support designed to create a smooth and effortless travel experience.',
  },
]

const interestExperiences = [
  { label: 'Cultural & Heritage Experiences', icon: MapPinned },
  { label: 'Wellness & Slow Travel', icon: Leaf },
  { label: 'Culinary Journeys', icon: ChefHat },
  { label: 'Nature & Wildlife Experiences', icon: Trees },
  { label: 'Celebration Travel', icon: CalendarHeart },
  { label: 'Special Interest Journeys', icon: Sparkles },
  { label: 'Lifestyle & Leisure Experiences', icon: Heart },
]

function SectionHeading({ icon: Icon, title, subtitle, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-center justify-center' : 'items-start',
        ].join(' ')}
      >
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-center text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
      {children}
    </span>
  )
}

export default function PriveCollection() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Privé Collection Sri Lanka banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-black/32" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE</span>
              <span className="block">PRIVE COLLECTION SRI LANKA</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Refined Journeys. Meaningful Connections.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Crown}
            title="A More Personal Way to Experience Sri Lanka"
            subtitle="Curated journeys, stays, and experiences across Sri Lanka for travellers who value privacy, authenticity, comfort, and thoughtful attention to detail."
          />

          <div className="mx-auto mt-6 max-w-5xl text-center">
            <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Privé Collection Sri Lanka represents the most refined expression of the Traveleye ecosystem, bringing together elevated journeys, carefully selected stays, curated experiences, and seamless destination coordination.
            </p>
            {/* <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Designed for travellers who seek depth rather than excess, Privé Collection offers a more personal and thoughtful way to experience Sri Lanka, connecting people, places, culture, and experiences through journeys tailored to individual interests, preferences, and aspirations.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Handshake} title="An Initiative of Traveleye Alliance Sri Lanka" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Privé Collection Sri Lanka is an initiative of Traveleye Alliance Sri Lanka, a tourism ecosystem developer specializing in People-Powered Tourism and tourism ecosystem development. The collection brings together carefully selected hospitality partners, experience providers, and destination specialists to create refined travel experiences rooted in authenticity, personalization, and meaningful connection.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sparkles} title="What Makes Privé Different" />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {differenceCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <h3 className="mt-3 text-xl font-bold tracking-tight text-black sm:text-2xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={ShieldCheck} title="Experiences Crafted Around Your Interests" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interestExperiences.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-6 sm:p-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[#1f4f93] sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-left text-sm font-medium leading-6 text-[#141414] sm:text-base">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading icon={Leaf} title="The Privé Philosophy" />
            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">
              Luxury is not defined solely by where you stay or what you see.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">
              It is defined by the care, authenticity, personalization, and meaningful connections that shape every journey.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">
              For Privé Collection, refinement is found not only in comfort and exclusivity, but also in the depth of the experience, the quality of hospitality, and the connection between traveller, host, and destination.
            </p>
            <blockquote className="mx-auto mt-8 max-w-3xl border-l-4 border-[#234c3a] pl-6 text-left text-base italic text-[#3a4b3b] sm:text-lg">
              Because the most memorable journeys are not simply visited, they are genuinely felt.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-0 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
            Refined Journeys. Meaningful Connections.
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          <p className="mt-6 text-sm font-semibold text-[#6b7894] sm:text-base">
            Experience Sri Lanka through thoughtfully curated journeys, stays, and experiences designed around you.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1f4f93] sm:text-2xl">Begin the Conversation</h3>
            <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Whether you are planning a journey, experience, celebration, or special occasion, we would be delighted to help you explore the possibilities.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to discuss your requirements and begin planning your experience.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
