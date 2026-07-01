import { Check, Globe2, Leaf, Link as LinkIcon, Sprout } from 'lucide-react'
import heroImg from '../assets/client/Facilitation4.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const destinationCharacteristics = [
  'Identity and culture',
  'Local realities and rhythms',
  'Communities and ecosystems',
  'Opportunities and sensitivities',
  'Destination character and capacity',
]

const experienceAreas = [
  {
    title: 'Working together with:',
    items: [
      'communities',
      'local hosts',
      'women and youth entrepreneurs',
      'emerging Travelpreneurs',
      'cultural practitioners and creators',
      'hospitality ecosystems and providers',
      'tourism stakeholders',
      'destination communities',
    ],
  },
  {
    title: 'The ecosystem encourages experiences that reflect the:',
    items: ['identity', 'culture', 'nature', 'hospitality', 'everyday life'],
    ending: 'of each destination.',
  },
  {
    title: 'This may include:',
    items: [
      'hosted experiences',
      'hospitality environments',
      'culture and lifestyle experiences',
      'nature and wellness experiences',
      'community-connected tourism initiatives',
      'destination-based tourism participation',
    ],
    ending:
      'Rather than imposing standardized tourism concepts, experiences evolve organically through the people, character, and realities of each destination.',
  },
]

const journeyConnections = [
  'Connecting hosted experiences, stays, and journeys',
  'Supporting travelers within local destination contexts',
  'Strengthening collaboration among tourism stakeholders',
  'Improving destination-level coordination',
  'Helping journeys remain smooth, respectful, and connected to place',
]

const supportStructures = [
  'Local participation and leadership',
  'Destination stewardship and continuity',
  'Collaboration among tourism stakeholders',
  'Responsible tourism growth',
  'Community-connected tourism ecosystems',
  'Long-term destination resilience',
]

const connectedEcosystemQualities = [
  'Locally connected',
  'Culturally respectful',
  'Environmentally aware',
  'Balanced over time',
  'Collaborative in approach',
  'Grounded in destination realities',
]

const closingFacilitationValues = [
  'Connection',
  'Coordination',
  'Participation',
  'Stewardship',
  'Destination wellbeing',
]

const facilitationMatters = [
  {
    lead: 'Destinations grow with balance and care',
  },
  {
    lead: 'Tourism supports rather than disrupts everyday life',
  },
  {
    lead: 'Local identity and destination character remain respected',
  },
  {
    lead: 'Journeys remain seamless while connected to place',
  },
  {
    lead: 'Tourism ecosystems strengthen through collaboration',
  },
]

function SectionHeading({ icon: Icon, title, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-center justify-center' : 'items-start',
        ].join(' ')}
      >
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
    </div>
  )
}


export default function DestinationFacilitation() {
  return (
    <main className="flex flex-col w-full bg-white text-slate-900">
      <section className="relative h-[48vh] w-full overflow-hidden">
        <img src={heroImg} alt="Destination hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/14" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1
            style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
            className="translate-y-4 text-center text-2xl font-extrabold leading-none tracking-tight text-white sm:translate-y-6 sm:text-4xl lg:translate-y-8 lg:text-5xl"
          >
            <span className="block">TRAVELEYE</span>
            <span className="block">DESTINATION FACILITATION</span>
          </h1>
          <p className="mt-5 translate-y-4 text-sm font-normal text-white/95 sm:translate-y-6 sm:text-base lg:translate-y-8 lg:text-lg">Destinations Through People &amp; Stewardship</p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-14 text-slate-900 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading icon={Globe2} title="Destination Facilitation Within the Traveleye Ecosystem" />

          {/* <p className="mx-auto mt-6 max-w-6xl text-base leading-7 text-[#1f2933] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Tourism does not happen in isolation. It happens within real destinations where people live, work, create, host, and shape everyday life.
          </p>

          {/* <p className="mx-auto mt-6 max-w-6xl text-base leading-7 text-[#1f2933] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Within the Traveleye ecosystem, Destination Facilitation helps strengthen place-based tourism coordination across Sri Lanka &mdash; supporting tourism ecosystems that remain connected, balanced, and grounded in local realities.
          </p>

          {/* <p className="mx-auto mt-10 max-w-6xl text-base leading-7 text-[#1f2933] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Rather than functioning through centralized control structures, facilitation helps journeys, hosted experiences, hospitality ecosystems, and local participation work together in ways that respect these pillars.
          </p>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4">
            {[
              'People',
              'Place',
              'Culture',
              'Destination Identity',
              'Long-term Destination Wellbeing',
            ].map((pillar) => (
              <span
                key={pillar}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#cbddec] bg-[#edf6fc] px-5 py-3 text-sm font-bold text-[#00466f] sm:px-7 sm:text-base"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-y border-slate-200 bg-[#fcfbf8] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex justify-center">
          <div className="w-full max-w-5xl border-l-4 border-[#e0aa18] pl-6 sm:pl-8">
            <SectionHeading icon={Globe2} title="A Place-Based Approach to Tourism" center={false} />

            {/* <p className="mt-5 text-base leading-7 text-[#27333f] sm:text-lg"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Destination Facilitation is rooted in destinations rather than imposed through centralized systems.
            </p>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm mt-6">
              <h3 className="text-sm font-extrabold text-[#00466f]">Each destination has its own : </h3>
              <ul className="mt-5 space-y-4">
                {destinationCharacteristics.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#27333f]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* <p className="mt-8 text-base leading-7 text-[#27333f] sm:text-lg"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Facilitation helps tourism remain responsive to these realities while encouraging more connected, coordinated, and destination-sensitive tourism experiences.
            </p>

          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <SectionHeading icon={Leaf} title="Developing Experiences Through Local Participation" />

            {/* <p className="mt-5 text-sm italic leading-7 text-[#5f6368] sm:text-base"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Destination Facilitation also helps support the emergence and strengthening of locally rooted hosted experiences across destinations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experienceAreas.slice(0, 3).map((area) => (
              <article key={area.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-extrabold text-[#00466f]">{area.title}</h3>
                {area.items ? (
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[#27333f]">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-sm leading-7 text-[#27333f]">{area.text}</p>
                )}
                {area.ending ? (
                  <p className="mt-4 text-sm leading-7 text-[#27333f]">{area.ending}</p>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experienceAreas.slice(3).map((area) => (
              <article key={area.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-extrabold text-[#00466f]">{area.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#27333f]">{area.text}</p>
              </article>
            ))}
          </div>

          {/* <p className="mx-auto mt-12 max-w-5xl bg-[#fcfbf8] px-6 py-7 text-center text-base font-semibold leading-8 text-[#00466f]">
            &quot;Rather than imposing standardized tourism concepts, experiences evolve organically through the people, character, and realities of each destination.&quot;
          </p> */}
        </div>
      </section>

      <section className="w-full bg-[#fcfbf8] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading icon={LinkIcon} title="Connecting People, Places, and Journeys" />

          <p className="mx-auto mt-8 max-w-5xl text-base leading-7 text-[#1f2933] sm:text-lg">
            Within the ecosystem:
          </p>

          {/* <p className="mx-auto mt-4 max-w-5xl text-base leading-7 text-[#1f2933] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Traveleye Destination Facilitation helps connect different parts of the tourism ecosystem into more coherent and locally grounded destination experiences.
          </p>

          <p className="mt-6 text-base font-semibold leading-7 text-[#1f2933] sm:text-lg">
            This includes:
          </p>

          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">
            {journeyConnections.map((item) => (
              <span key={item} className="inline-flex max-w-full items-center justify-center rounded-full border border-[#cbddec] bg-[#edf6fc] px-5 py-3 text-xs font-bold text-[#00466f] sm:text-sm">
                {item}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-4xl text-center text-sm font-bold leading-7 text-[#00466f]">
            Facilitation acts as the bridge between tourism movement and destination reality , helping tourism function as a connected ecosystem rather than fragmented tourism activity.
            {/* Traveleye Destination Facilitation helps connect different parts of the tourism ecosystem into more coherent and locally grounded destination experiences &mdash; helping tourism function as a connected ecosystem rather than fragmented tourism activity. */}
          </p>
        </div>
      </section>

      <section className="w-full border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionHeading icon={Sprout} title="Strengthening Destinations Through Participation" />

            {/* <p className="mt-5 text-sm italic leading-7 text-[#5f6368] sm:text-base">
              As part of its ecosystem building approach, Traveleye Destination Facilitation strengthens tourism from within destinations themselves.
            </p> */}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-[#00466f] text-center">As part of its ecosystem-building approach, Traveleye Destination Facilitation encourages : </h3>
              <ul className="mt-5 space-y-4 mx-auto w-full max-w-md text-left">
                {supportStructures.map((item) => (
                  <li key={item} className="flex items-start gap-6 text-sm text-[#27333f]">
                    <div className="w-8 flex-shrink-0 flex items-start justify-center">
                      <Check className="h-4 w-4 text-[#16a34a]" aria-hidden="true" />
                    </div>
                    <span className="block ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading icon={Leaf} title="Supporting More Connected Destination Ecosystems" />

          {/* <p className="mx-auto mt-8 max-w-4xl text-base leading-7 text-[#27333f] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Destination Facilitation helps tourism ecosystems remain:
          </p>

          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4">
            {connectedEcosystemQualities.map((quality) => (
              <span
                key={quality}
                className="inline-flex max-w-full items-center justify-center rounded-full border border-[#CFE1D6] bg-[#EEF7F1] px-5 py-3 text-sm font-semibold text-[#2F6B4B] sm:px-6 sm:text-base"
              >
                {quality}
              </span>
            ))}
          </div>

          {/* <p className="mx-auto mt-10 max-w-4xl text-base font-semibold leading-7 text-[#27333f] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            The focus is not only on tourism growth.
          </p>

          {/* <p className="mx-auto mt-4 max-w-5xl text-base leading-7 text-[#27333f] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            It is on helping destinations remain healthy, meaningful, resilient, and sustainable as tourism evolves over time.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl border-t border-slate-300 pt-14">
          <div className="text-center">
            <SectionHeading icon={Globe2} title="Why Destination Facilitation Matters" />

            {/* <p className="mt-5 text-sm italic leading-7 text-[#5f6368] sm:text-base"> */}
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Without thoughtful coordination, tourism can become fragmented, uneven, and disconnected from local realities.
            </p>
          </div>

          {/* <p className="mx-auto mt-10 max-w-4xl text-left text-base leading-7 text-[#27333f] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Meaningful facilitation helps encourage tourism systems where:
          </p>

          <ul className="mx-auto mt-4 max-w-4xl divide-y divide-slate-200">
            {facilitationMatters.map((item) => (
              <li key={item.lead} className="flex gap-4 py-5 text-sm leading-7 text-[#27333f]">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b83c5]" />
                <span>
                  <strong>{item.lead}</strong>
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-12 max-w-5xl border-l-4 border-[#0b83c5] bg-[#edf6fc] px-6 py-7 text-center text-base font-semibold leading-8 text-[#00466f]">
            &quot;Because tourism is strongest when it remains connected to the people and places where it exists.&quot;
          </p>
        </div>
      </section>

      <section className="w-full bg-[#fcfbf8] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Leaf} title="Closing Reflection" />

          {/* <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-[#27333f] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Facilitation is not about controlling destinations.
          </p>

          {/* <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-[#27333f] sm:text-lg"> */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            It is about helping tourism function more responsibly through:
          </p>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {closingFacilitationValues.map((value) => (
              <span
                key={value}
                className="inline-flex rounded-full border border-[#CFE1D6] bg-white px-5 py-2 text-sm font-semibold text-[#2F6B4B] sm:text-base"
              >
                {value}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-sm leading-7 text-[#5f6368] sm:text-base">
            Through Traveleye Destination Facilitation, tourism is approached as a place-based ecosystem shaped by people, relationships, hosted experiences, and long-term destination resilience.
          </p>

          <p className="mx-auto mt-8 max-w-4xl text-base font-semibold leading-8 text-[#00466f]">
            Because meaningful tourism depends not only on movement , but also on how destinations are supported, connected, and sustained over time.
          </p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
