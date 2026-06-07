import {
  BookOpen,
  BriefcaseBusiness,
  Globe2,
  GraduationCap,
  Heart,
  Landmark,
  Plane,
  Sparkles,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const experienceTypes = [
  { label: 'Leisure & Holiday Travel', icon: Plane },
  { label: 'Pilgrimage & Spiritual Journeys', icon: Heart },
  { label: 'Luxury & Wellness Travel', icon: Sparkles },
  { label: 'Educational & Learning Experiences', icon: GraduationCap },
  { label: 'Family & Group Travel', icon: Users },
  { label: 'Corporate & Incentive Travel', icon: BriefcaseBusiness },
  { label: 'Cultural & Heritage Tours', icon: Landmark },
  { label: 'Special Interest Travel', icon: BookOpen },
  { label: 'Celebration & Event Travel', icon: Sparkles },
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

export default function GlobalJourneys() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Traveleye Global Journeys banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">TRAVELEYE</span>
              <span className="block">GLOBAL JOURNEYS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Connecting People Across Continents
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Globe2} title="Discover the World Through Meaningful Travel" />

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Traveleye Global Journeys creates opportunities for Sri Lankan travellers to explore the world through thoughtfully designed international travel experiences.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            From leisure holidays and pilgrimage tours to educational visits, luxury escapes, wellness retreats, and special interest journeys, the platform connects travellers with destinations, cultures, and experiences across the globe.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            As part of the Traveleye Travel Collective, Global Journeys is guided by the belief that travel has the power to broaden perspectives, foster understanding, and create lasting connections between people, cultures, and destinations.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading icon={Sparkles} title="Global Experiences, Thoughtfully Curated" />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Global Journeys facilitates a diverse range of international travel opportunities, including:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experienceTypes.map(({ label, icon: Icon }) => (
              <article key={label} className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-base font-bold leading-6 text-[#214F95] sm:text-lg">{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Users} title="Connecting People Across Continents" center={false} />
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Travel is more than visiting new places.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              It is about discovering new perspectives, experiencing different cultures, and building connections that transcend borders.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Traveleye Global Journeys seeks to create enriching travel experiences that help travellers engage more meaningfully with the world while creating memorable experiences across continents.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Plane} title="Exploring Beyond Borders" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Whether travelling for discovery, learning, relaxation, faith, celebration, or business, every journey offers an opportunity to experience new destinations, cultures, and ways of life.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Traveleye Global Journeys" />
          <p className="mt-6 text-sm font-semibold text-[#6b7894] sm:text-base">
            Connecting People Across Continents
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-[#FCFBF8] p-6 shadow-sm sm:p-8">
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
