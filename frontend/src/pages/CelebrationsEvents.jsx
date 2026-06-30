import {
  CalendarHeart,
  CheckCircle2,
  Gem,
  Heart,
  MapPin,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import heroImg from '../assets/client/Sri Lankan wedding reception at golden hour.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const differenceCards = [
  {
    title: 'Thoughtfully Curated',
    text: 'Every celebration and event is designed around the people, purpose, and vision behind the occasion.',
    icon: Sparkles,
  },
  {
    title: 'Carefully Selected Venues',
    text: 'From beachfront settings and heritage properties to boutique environments, nature retreats, and unique destination venues, each location is selected for its character, atmosphere, and experience.',
    icon: MapPin,
  },
  {
    title: 'Personalized Experiences',
    text: 'Celebrations are enhanced through curated experiences, cultural elements, hospitality, entertainment, and destination engagement that create memorable moments for hosts and guests alike.',
    icon: Heart,
  },
  {
    title: 'Seamless Coordination',
    text: 'From travel arrangements and accommodation to event planning, logistics, and on-site coordination, every detail is managed with care and attention.',
    icon: CheckCircle2,
  },
]

const occasionCards = [
  {
    title: 'Destination Weddings',
    text: "Beautiful weddings in distinctive locations across Sri Lanka, thoughtfully designed around each couple's vision and story.",
  },
  {
    title: 'Proposals & Engagements',
    text: "Meaningful experiences created to celebrate life's most important commitments.",
  },
  {
    title: 'Honeymoons & Romantic Escapes',
    text: 'Personalized journeys designed for connection, relaxation, and memorable experiences.',
  },
  {
    title: 'Anniversaries & Family Celebrations',
    text: 'Bringing families and loved ones together through meaningful gatherings and shared experiences.',
  },
  {
    title: 'Birthdays & Milestone Celebrations',
    text: "Thoughtfully curated celebrations designed around life's important milestones, bringing together family, friends, and memorable experiences in distinctive destinations.",
  },
  {
    title: 'Corporate Events & Incentive Programmes',
    text: 'Meetings, incentives, retreats, recognition events, and corporate celebrations designed to inspire, engage, and connect people.',
  },
  {
    title: 'Private Events & Special Occasions',
    text: 'Tailored gatherings, reunions, and personalized experiences created around individual interests, achievements, and meaningful moments.',
  },
]

const philosophyParagraphs = [
  'The most memorable celebrations are not defined by scale alone.',
  'They are defined by the people who come together, the experiences they share, and the memories they create.',
  "For Traveleye Celebrations & Events, every occasion is an opportunity to create meaningful connections between people, places, and experiences while celebrating life's most important moments.",
  'Because the moments that matter most are remembered long after the event itself.',
]

export default function CelebrationsEvents() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Celebrations & Events banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/16" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE</span>
              <span className="block">CELEBRATIONS &amp; EVENTS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Sri Lanka. Meaningful Moments. Lasting Memories.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              <CalendarHeart className="h-9 w-9 rounded-full bg-[#DFE7F3] p-2 text-[#1f4f93]" />
              <span>Celebrating Life's Special Moments</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Curated celebrations, events, and destination experiences designed to bring people together through meaningful moments and memorable experiences.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>
              Traveleye Celebrations & Events brings together destination expertise, hospitality, travel, experiences, and event coordination to create occasions that are thoughtfully planned, personally meaningful, and memorable for hosts and guests alike.
            </p>
            <p>
              Whether intimate or grand, every celebration is shaped around the people, relationships, and experiences that make it unique.
            </p>
            <p>
              As an initiation of the TraveleyeAlliance Sri Lanka, Traveleye Celebrations & Events is guided by the belief that life's most meaningful occasions become even more memorable when they bring people together through shared experiences, genuine connections, and distinctive destinations.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-3xl">
              <Gem className="h-9 w-9 rounded-full bg-[#DFE7F3] p-2 text-[#1f4f93]" />
              <span>What Makes Traveleye Celebrations & Events Different</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {differenceCards.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <Icon className="h-9 w-9 text-[#1f4f93]" />
                <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
              <Sparkles className="h-10 w-10 rounded-full bg-white p-2 text-[#1f4f93]" />
              <span>Celebrations & Events Crafted Around Your Occasion</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {occasionCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#dfe9f2] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f4d2f]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#475569]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <UsersRound className="h-10 w-10 rounded-full bg-[#ecf8ef] p-2 text-[#1f4f93]" />
              <span>The Celebrations Philosophy</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            {philosophyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl">
              <CalendarHeart className="h-10 w-10 rounded-full bg-[#DFE7F3] p-2 text-[#1f4f93]" />
              <span>Meaningful Moments. Lasting Memories.</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
            <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base">
              Celebrate weddings, special occasions, corporate events, and personal milestones through thoughtfully curated experiences designed around people, place, and meaningful connection.
            </p>

            <div className="mt-10 rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-[#0f4d2f] sm:text-2xl">Begin the Conversation</h3>
              <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">
                Whether you are planning a journey, experience, celebration, or special occasion, we would be delighted to help you explore the possibilities.
              </p>
              <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">
                Contact us at info@traveleye.lk to discuss your requirements and begin planning your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
