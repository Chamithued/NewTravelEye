import {
  BriefcaseBusiness,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  Lightbulb,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/pillars/Participation & Shared Stewerdship.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const connectedPoints = [
  'More inclusive',
  'More locally connected',
  'More culturally aware',
  'More environmentally conscious',
  'More responsive to destination needs',
  'Better positioned for long-term resilience',
]

const participationForms = [
  'Hosting',
  'Entrepreneurship',
  'Experience creation',
  'Tourism services',
  'Enterprise development',
  'Collaboration',
  'Innovation',
  'Destination engagement',
]

const stewardshipSupports = [
  'Respect for people and place',
  'Appreciation of culture and heritage',
  'Responsible visitor engagement',
  'Environmental awareness',
  'Destination-sensitive thinking',
  'Long-term responsibility',
]

const sharedValueItems = [
  'Meaningful visitor experiences',
  'Stronger tourism participation',
  'Enterprise development',
  'Local opportunity creation',
  'Community engagement',
  'Destination wellbeing',
  'Long-term ecosystem resilience',
]

const pointIcons = [Users, Handshake, Landmark, Leaf, HeartHandshake, Sprout, BriefcaseBusiness, Lightbulb]

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

function PointGrid({ items, icons = pointIcons }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length]

        return (
          <div key={item} className="mx-auto w-full max-w-lg">
            <div className="flex min-h-24 items-center gap-4 rounded-2xl border border-[#eef4ef] bg-white p-4 shadow-sm sm:gap-6 sm:p-5">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93] sm:h-14 sm:w-14">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-left text-sm font-medium leading-6 text-[#141414] sm:text-base">{item}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ParticipationSharedStewardship() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="People-Powered Participation and Shared Stewardship"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/16" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">PEOPLE-POWERED PARTICIPATION</span>
              <span className="block">& SHARED STEWARDSHIP</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Tourism Shaped Through People, Participation, and Care
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake} title="People-Powered Participation & Shared Stewardship" />
          <p className="mx-auto mt-6 max-w-5xl text-center text-sm font-semibold leading-7 text-[#1f4f93] sm:text-lg sm:leading-8">
            Tourism Shaped Through People, Participation, and Care
          </p>
          <div className="mx-auto mt-6 max-w-5xl text-center">
            {/* <p className="text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Traveleye People-Powered Tourism Framework is guided by the belief that tourism becomes stronger when people are able to participate meaningfully and destinations are approached with care, respect, and long-term responsibility.
            </p>
            {/* <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Tourism is not shaped solely by travellers, businesses, or infrastructure.
            </p>
            {/* <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              It is also shaped by hosts, communities, entrepreneurs, tourism enterprises, destinations, cultural traditions, natural environments, and the many people who contribute to the visitor experience.
            </p>
            {/* <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              People-Powered Participation & Shared Stewardship reflects the belief that tourism creates stronger outcomes when these relationships remain connected and mutually beneficial.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="A More Connected Approach to Tourism" />
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Tourism does not exist in isolation.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Every destination is influenced by the people who live there, the culture that defines it, the landscapes that sustain it, and the experiences that visitors come to enjoy.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Traveleye ecosystem encourages a tourism approach that values these connections and recognises the importance of maintaining balance between tourism growth, destination wellbeing, and long-term sustainability.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              This approach seeks to foster tourism that remains:
            </p>
          </div>
          <PointGrid items={connectedPoints} icons={[Users, Handshake, Landmark, Leaf, HeartHandshake, Sprout]} />
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Users} title="Participation as a Foundation for Stronger Tourism" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Participation is a defining characteristic of the Traveleye ecosystem.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The framework recognises that tourism becomes stronger when opportunities are accessible to a wider range of people and stakeholders.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Participation may take many forms, including:
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <PointGrid items={participationForms} />
        </div>
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The ecosystem encourages participation from tourism enterprises, hosts, entrepreneurs, community members, tourism professionals, institutions, support service providers, and ecosystem partners who contribute to strengthening tourism in different ways.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Participation is viewed not only as economic involvement, but also as contribution, collaboration, shared growth, and long-term engagement within the tourism ecosystem.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SectionHeading icon={Handshake} title="Inclusive Participation" center={false} />
          </div>

          <div className="rounded-2xl border-l-[6px] border-l-[#1F4F93] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Traveleye People-Powered Tourism Framework encourages participation that is inclusive, accessible, and locally connected.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The framework recognises that stronger tourism ecosystems are created when people from different communities, backgrounds, age groups, and sectors are able to contribute their knowledge, skills, creativity, and entrepreneurial potential.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Particular emphasis is placed on encouraging opportunities for women and youth participation as entrepreneurs, hosts, facilitators, innovators, experience providers, and emerging tourism leaders.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By supporting broader participation, the framework seeks to help create tourism ecosystems that are more diverse, resilient, and capable of generating long-term value for destinations and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Leaf} title="Understanding Shared Stewardship" />
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Shared stewardship reflects the belief that destinations thrive when responsibility for their long-term wellbeing is shared among those who influence, benefit from, and participate in tourism.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Destinations are more than places to visit.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              They are living environments shaped by culture, heritage, nature, identity, and community life.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Traveleye framework encourages tourism approaches that support:
            </p>
          </div>
          <PointGrid items={stewardshipSupports} icons={[Users, Landmark, Handshake, Leaf, Sprout, HeartHandshake]} />
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Shared stewardship is not about control.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              It is about recognising that tourism outcomes are strongest when people work together to support the places that make travel meaningful.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={BriefcaseBusiness} title="Creating Shared Value" />
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The Traveleye ecosystem seeks to encourage tourism that creates value beyond individual transactions.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By strengthening connections between travellers, hosts, enterprises, destinations, and tourism stakeholders, tourism can contribute to:
            </p>
          </div>
          <PointGrid items={sharedValueItems} />
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            This approach encourages tourism growth that remains connected to people, places, and long-term outcomes.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Lightbulb} title="Looking Ahead" />
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            As tourism continues to evolve, participation and stewardship will play an increasingly important role in shaping resilient and sustainable tourism futures.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The Traveleye ecosystem seeks to foster an environment where travellers, hosts, enterprises, destinations, and tourism stakeholders can contribute to tourism that is more connected, inclusive, and responsible.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Because meaningful tourism is not defined only by where people travel.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            It is also shaped by how tourism supports the people, places, and destinations that make those journeys possible.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Tourism Shaped Through People and Place" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Meaningful tourism is built through participation, hospitality, collaboration, stewardship, and respect for destinations.
          </p>
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            By encouraging these values, the Traveleye People-Powered Tourism Framework seeks to support a future where tourism creates lasting value for travellers, communities, enterprises, and destinations alike.
          </p>
          <p className="mt-8 text-lg font-bold text-[#1f4f93] sm:text-2xl">
            Tourism Shaped by the People Who Make It Possible.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BriefcaseBusiness} title="Begin the Conversation" />
          <p className="mt-6 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            Interested in learning more about participation opportunities, ecosystem partnerships, destination collaboration, or the Traveleye People-Powered Tourism Framework?
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
