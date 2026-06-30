import {
  BriefcaseBusiness,
  CalendarHeart,
  Crown,
  Globe2,
  Handshake,
  Heart,
  Landmark,
  Leaf,
  MapPinned,
  Plane,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const engagementCards = [
  {
    title: 'Traveleye Lanka Journeys',
    subtitle: 'Sri Lanka. Authentic Places. Meaningful Experiences.',
    text: 'Thoughtfully curated travel experiences that showcase the culture, heritage, nature, wildlife, and diverse destinations of Sri Lanka through meaningful and authentic journeys.',
    icon: MapPinned,
  },
  {
    title: 'Traveleye Travel Corridors',
    subtitle: 'Connecting Nations Through Meaningful Travel',
    text: 'Strengthening tourism relationships between Sri Lanka and partner countries through travel, cultural exchange, education, business engagement, celebrations, and long-term collaboration.',
    icon: Plane,
  },
  {
    title: 'Traveleye Privé Collection',
    subtitle: 'Sri Lanka. Refined Journeys. Bespoke Experiences.',
    text: 'A collection of luxury and bespoke travel experiences designed for discerning travellers seeking exceptional hospitality, privacy, authenticity, and personalised service.',
    icon: Crown,
  },
  {
    title: 'Traveleye Celebrations & Events',
    subtitle: 'Sri Lanka. Meaningful Moments. Lasting Memories.',
    text: 'Creating memorable weddings, celebrations, retreats, incentive programmes, corporate gatherings, and special events through thoughtful planning and destination expertise.',
    icon: CalendarHeart,
  },
  {
    title: 'Traveleye Global Journeys',
    subtitle: 'Sri Lankans. Connecting. The World.',
    line: 'ලොව වටා ලොව දකින්න',
    text: 'Helping Sri Lankan travellers discover new destinations, cultures, experiences, and opportunities through carefully planned outbound travel programmes.',
    icon: Globe2,
  },
  {
    title: 'Traveleye Island Journeys',
    subtitle: 'Sri Lankans. Discovering. Sri Lanka.',
    line: 'රට වටා රට දකින්න',
    text: 'Encouraging Sri Lankans to explore, appreciate, and reconnect with the culture, heritage, nature, and diversity of their own country through meaningful domestic travel experiences.',
    icon: Landmark,
  },
]
const responsibilityPoints = [
  'Respect for people and destinations',
  'Cultural awareness and authenticity',
  'Responsible tourism practices',
  'Meaningful local engagement',
  'Collaboration and shared value creation',
  'Long-term destination wellbeing',
]

function SectionHeading({ icon: Icon, title, center = true }) {
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
    </div>
  )
}

function EngagementCard({ item }) {
  const Icon = item.icon

  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{item.title}</h3>
      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F4F93] sm:text-xs">{item.subtitle}</p>
      {item.line ? <p className="mt-3 text-sm font-semibold leading-7 text-[#0f4d2f] sm:text-base">{item.line}</p> : null}
      <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{item.text}</p>
    </article>
  )
}

export default function TravelCollective() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Travel Collective banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/14" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE</span>
              <span className="block">TRAVEL COLLECTIVE</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting Journeys Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Travel Reimagined" />
          <div className="mx-auto mt-6 max-w-5xl text-center">
            <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              Travel is more than movement between destinations. It is an opportunity to connect people, cultures, and places through meaningful journeys that create lasting value for travellers and destinations alike.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              The Traveleye Travel Collective brings together a portfolio of travel platforms that encourage meaningful journeys while strengthening tourism through collaboration, stewardship, and shared value creation. By connecting people and place, every journey contributes to richer travel experiences and stronger tourism ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Plane} title="Our Travel Engagements" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The Traveleye Travel Collective brings together a portfolio of specialised travel brands and initiatives designed to create meaningful connections between travellers, destinations, experiences, and people.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Each engagement serves a distinct purpose while contributing to a shared vision of people-powered tourism and meaningful travel.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engagementCards.map((item) => (
              <EngagementCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Landmark} title="Travel Within the Traveleye Ecosystem" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Within the Traveleye ecosystem, travel is more than transportation or itinerary planning. It is the connecting layer that brings together people, destinations, cultures, enterprises, and tourism opportunities through thoughtfully coordinated journeys.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Whether connecting nations through international travel corridors, encouraging Sri Lankans to rediscover their own country, or delivering curated luxury travel experiences, every journey contributes to a broader vision of meaningful and responsible tourism.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Travel becomes a bridge between people and place, creating experiences that enrich travellers while supporting destination wellbeing and long-term tourism resilience.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Handshake} title="The Role of Traveleye Travel Collective" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Traveleye Travel Collective coordinates a portfolio of specialised travel brands that connect journeys through people and place.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Together, these brands support international travel connections, domestic discovery, and curated luxury travel while encouraging meaningful engagement between travellers and destinations.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Rather than operating as isolated travel products, the Travel Collective helps strengthen tourism by connecting journeys, destinations, partnerships, and people within a shared ecosystem approach.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Guided by Responsibility and Meaningful Connection" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Across all travel engagements, journeys are guided by a commitment to:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            {responsibilityPoints.map((point, i) => (
              <div key={point} className="mx-auto w-full max-w-lg">
                <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-6 sm:p-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93] sm:h-14 sm:w-14">
                    {[Users, Landmark, Leaf, Heart, Handshake, Sprout].map((Icon, index) =>
                      index === i ? <Icon key={point} className="h-6 w-6" /> : null
                    )}
                  </div>
                  <div className="text-left text-sm font-medium leading-6 text-[#141414] sm:text-base">{point}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            Because how people travel is just as important as where they travel.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Users} title="Strengthening Travel Through Participation and Collaboration" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Guided by the People-Powered Tourism Framework, the Travel Collective encourages collaboration between tourism enterprises, travel partners, entrepreneurs, institutions, destination stakeholders, and ecosystem collaborators.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            By strengthening relationships between people and place, the Travel Collective seeks to create richer traveller experiences while contributing to stronger tourism ecosystems through participation, stewardship, innovation, and collaboration.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Heart} title="Why Thoughtful Travel Matters" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Thoughtfully coordinated travel helps create tourism that benefits both travellers and destinations.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            It encourages cultural understanding, supports stronger tourism relationships, and contributes to richer travel experiences while helping destinations remain vibrant, welcoming, and resilient for future generations.
          </p>
          <blockquote className="mx-auto mt-8 max-w-3xl border-l-4 border-[#234c3a] pl-6 text-left text-base italic leading-7 text-[#3a4b3b] sm:text-lg">
            Meaningful travel is not simply about reaching a destination-it is about the connections created along the way and the positive value left behind.
          </blockquote>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sparkles} title="Looking Ahead" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            As tourism continues to evolve, the Traveleye Travel Collective will continue to strengthen international travel connections, encourage domestic discovery, and develop meaningful journeys that create lasting value for people, places, and tourism ecosystems.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            By connecting journeys through people and place, we believe travel can contribute to stronger communities, deeper cultural understanding, and a more resilient future for tourism.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Begin the Conversation" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether you are a traveller, travel partner, tourism enterprise, entrepreneur, destination organisation, institution, or ecosystem collaborator, we welcome opportunities to explore how meaningful travel can strengthen people, places, and tourism ecosystems.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Together, we can create journeys that inspire connection, encourage collaboration, and contribute to a stronger tourism future.
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at<a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a>to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Closing Reflection" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Every journey begins with movement, but its true meaning is shaped by the connections it creates between people and place.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Through the Traveleye Travel Collective, travel is approached not simply as an activity, but as a people-powered force that encourages understanding, collaboration, destination stewardship, and shared value creation.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Because meaningful travel is not only about where we go.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            It is about how we connect, how we experience, and how we contribute along the way.
          </p>
          <p className="mt-8 text-lg font-bold text-[#1f4f93] sm:text-2xl">
            Connecting Journeys Through People and Place.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}

