import {
  Compass,
  Crown,
  HandHeart,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/client/prive.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const valuedByTravelers = [
  'Privacy',
  'Depth',
  'Authenticity',
  'Comfort',
  'Thoughtful attention to detail',
]

const integrationPoints = [
  'Refined travel design',
  'Carefully selected host environments',
  'Authentic people-powered experiences',
  'Private coordination and personalized support',
  'Seamless destination engagement across Sri Lanka',
]

const approachCards = [
  {
    title: 'Personalized Journey Design',
    subtitle: 'Refined Travel Design',
    text:
      'Every Prive journey is individually shaped around the traveler, allowing greater flexibility, privacy, experiential depth, and personal attention.',
  },
  {
    title: 'Selected Host Environments',
    subtitle: 'Boutique Stays & Heritage Settings',
    text:
      'Selected villas, boutique environments, heritage properties, and nature-connected stays are brought together with care and discretion.',
  },
  {
    title: 'Meaningful Experiences',
    subtitle: 'Rooted in People and Place',
    text:
      'Journeys are designed to feel elevated while remaining grounded in local culture, hospitality, destination authenticity, and human connection.',
  },
  {
    title: 'Private Coordination',
    subtitle: 'Seamless Destination Engagement',
    text:
      'Personalized support and trusted local relationships help every journey move with clarity, comfort, and thoughtful attention to detail.',
  },
]

const experiencePoints = [
  'Cultural and heritage immersion',
  'Wellness and slow travel',
  'Curated culinary experiences',
  'Private nature and lifestyle journeys',
  'Celebration and special-interest travel',
  'Personalized access and destination engagement',
]

const connectionPoints = [
  'Local culture',
  'People and hospitality',
  'Destination authenticity',
  'Meaningful human connection',
]

const ecosystemPartners = [
  'Hospitality partners',
  'Experience specialists',
  'Destination facilitators',
  'Travel designers and coordinators',
  'Local experts and cultural practitioners',
]

const ecosystemBenefits = [
  'Deeper destination understanding',
  'Trusted local relationships',
  'Seamless coordination',
  'Refined hospitality ecosystems',
  'Thoughtful destination engagement',
]

const luxuryValues = [
  'Care',
  'Connection',
  'Discretion',
  'Personalization',
  'Experiential depth',
]

const whyPoints = [
  'Refined without becoming disconnected',
  'Personalized without losing authenticity',
  'Elevated while remaining grounded in people and place',
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

export default function Stays() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt={`Traveleye Priv\u00e9 Collection banner`}
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
              <span className="block">{'PRIV\u00c9 COLLECTION'}</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              The Refined Expression of the Traveleye Ecosystem
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Crown}
            title={`Priv\u00e9 Collection Within the Traveleye Ecosystem`}
            subtitle={`Traveleye Priv\u00e9 Collection represents the most refined expression of the Traveleye ecosystem, bringing together elevated journeys, carefully selected stays, meaningful experiences, and seamless destination coordination across Sri Lanka.`}
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {valuedByTravelers.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-5xl text-center">
            <p className="text-sm leading-7 text-slate-700 sm:text-lg">
              {'Priv\u00e9 is shaped around personal connection rather than excess. It is not approached '}
              simply as luxury travel, but as a more refined and deeply personalized way of
              experiencing destinations, people, culture, and place.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {approachCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <h3 className="mt-3 text-xl font-bold tracking-tight text-black sm:text-2xl">{card.title}</h3>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F4F93] sm:text-xs">
                  {card.subtitle}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <SectionHeading
                icon={Compass}
                title={`The Role of Traveleye Priv\u00e9 Collection`}
                center={false}
              />
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
                {'Priv\u00e9 Collection curates and coordinates high-end journeys through thoughtful '}
                integration across travel design, hospitality, people-powered experiences, private
                support, and destination engagement.
              </p>
              <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
                Rather than focusing only on luxury consumption, the approach emphasizes meaningful
                destination connection, thoughtful hospitality, cultural sensitivity, discretion, and
                care-driven personalization.
              </p>
            </div>

            <div className="mx-auto w-full lg:mx-0 lg:flex lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-base font-bold text-[#0f4d2f] sm:text-lg">
                  Thoughtfully Integrating:
                </h3>
                <ul className="mt-5 space-y-2 sm:mt-6">
                  {integrationPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 border-t border-[#eef6f0] pt-4">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#ecf8ef] text-[#14532d]">
                        <Leaf className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium leading-6 text-[#234c3a]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Sprout}
            title="Refined Experiences Rooted in Place"
            subtitle={`Priv\u00e9 Collection brings together selected stays and curated experiences that reflect the character and identity of Sri Lanka.`}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            {experiencePoints.map((point, index) => {
              const icons = [MapPinned, Leaf, Sparkles, Compass, HandHeart, ShieldCheck]
              const Icon = icons[index]
              return (
                <div key={point} className="flex items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-6 sm:p-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[#1f4f93] sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-left text-sm font-medium leading-6 text-[#141414] sm:text-base">{point}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {connectionPoints.map((point) => (
              <Pill key={point}>{point}</Pill>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={UsersRound}
            title="A Connected Luxury Ecosystem"
            subtitle={`Within the broader Traveleye ecosystem, Priv\u00e9 Collection works with trusted partners and practitioners to keep journeys highly personalized and deeply connected.`}
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {ecosystemPartners.map((point) => (
              <Pill key={point}>{point}</Pill>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold tracking-tight text-[#1f4f93] sm:text-2xl">Ecosystem Benefits</h3>
              <ul className="mt-5 divide-y divide-[#eee]">
                {ecosystemBenefits.map((point) => (
                  <li key={point} className="flex items-start gap-4 py-3 text-[#234c3a]">
                    <Leaf className="mt-1 h-4 w-4 shrink-0 text-[#2f6b3f]" />
                    <span className="text-sm leading-6 sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold tracking-tight text-[#1f4f93] sm:text-2xl">Luxury Defined by</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {luxuryValues.map((point) => (
                  <Pill key={point}>{point}</Pill>
                ))}
              </div>
              <p className="mt-8 text-sm leading-7 text-[#475569] sm:text-base">
                Luxury here is not defined only by comfort or exclusivity. It is defined by the
                quality, care, and depth with which each destination is experienced.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 mx-auto max-w-3xl text-center">
            <SectionHeading
              icon={Sparkles}
              title={`Why Priv\u00e9 Collection Matters`}
              subtitle="Meaningful luxury travel is not simply about access. It is about care, connection, authenticity, personalization, and the quality of the experience itself."
            />
          </div>

          <ul className="mx-auto mt-6 max-w-3xl divide-y divide-[#eee]">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 py-4 text-[#234c3a]">
                <Leaf className="mt-1 h-4 w-4 shrink-0 text-[#2f6b3f]" />
                <span className="text-sm leading-6 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-3xl">
            <blockquote className="border-l-4 border-[#234c3a] pl-6 text-base italic text-[#3a4b3b] sm:text-lg">
              Because true luxury is not only about where you stay or what you see. It is about how
              deeply a destination is experienced.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading icon={Leaf} title="Closing Reflection" />
            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">
              {'Priv\u00e9 Collection is the refined expression of the Traveleye ecosystem, where journeys, '}
              hospitality, experiences, and destination relationships come together through thoughtful
              coordination and meaningful human connection.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">
              The most memorable journeys are not defined only by luxury, but by the depth, care,
              authenticity, and personal connection with which they are experienced.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
