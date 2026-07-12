import { CircleCheck, Clock3, Hourglass } from 'lucide-react'

const journeyItems = [
  {
    year: '2006',
    eyebrow: 'A Journey Rooted in Purpose',
    title: 'Humble Beginnings',
    icon: Hourglass,
    cardSide: 'right',
    rowClass: 'lg:min-h-[285px]',
    body: [
      // <>
      //   What began with a single individual and a deep respect for travel was shaped by a simple
      //   belief: <strong>tourism should connect visitors with Sri Lanka&apos;s culture, nature, and
      //   people while creating real opportunities for local communities to participate
      //   meaningfully.</strong>
      // </>,
      // <>
      //   This early conviction laid the foundation for a journey that would later evolve into a
      //   people-powered tourism ecosystem.
      // </>,
      <>
        Traveleye Alliance was founded on a passion for meaningful travel and a belief that tourism should 
        connect visitors with Sri Lanka's people, culture, heritage, nature, and local way of life. From the 
        beginning, our vision extended beyond travel to creating opportunities that encourage broader participation 
        and shared value across the tourism sector. 
      </>,
    ],
  },
  {
    year: '2012',
    eyebrow: 'Towards People-Powered Tourism',
    title: 'The Birth of Experiential Ventures',
    icon: Clock3,
    cardSide: 'left',
    rowClass: 'lg:min-h-[275px]',
    body: [
      // <>
      //   In <strong>2012</strong>, we launched our first <strong>Experiential Tourism
      //   Ventures</strong>, marking a transformative chapter in Sri Lanka&apos;s tourism journey.
      // </>,
      // <>
      //   These people-powered ventures <strong>co-owned and co-created</strong> with local people,
      //   communities, experts, women and youth entrepreneurs enable authentic experiences that
      //   <strong> enrich lives, protect cultural heritage, and strengthen local livelihoods.</strong>
      // </>,
      <>
        As tourism continued to evolve, so did Traveleye. Greater emphasis was placed on authentic experiences,
         local participation, destination stewardship, enterprise development, and collaborative tourism approaches 
         that strengthen both people and places.  
      </>,
      <>
        These ideas gradually evolved into the People-Powered Tourism Framework-the strategic blueprint that guides Traveleye's vision of building a People-Powered Tourism Ecosystem. 
      </>
    ],
  },
  {
    year: 'Today',
    eyebrow: 'Building a People-Powered Tourism Ecosystem',
    title: 'A People-Powered Tourism Ecosystem',
    icon: CircleCheck,
    cardSide: 'right',
    rowClass: 'lg:min-h-[360px]',
    body: [
      <>
        Today, Traveleye Alliance serves as a <strong>People-Powered Tourism Ecosystem Builder</strong>, bringing together journeys,
         host stays, experiences, tourism enterprises, destinations, travel partnerships, and supporting organisations through a connected 
         and collaborative approach to tourism development.  
      </>,
      <>
        By developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem, we seek to create meaningful 
        travel, resilient destinations, thriving local enterprises, and lasting value for people, places, partnerships, and future generations. 
      </>,
    ],
  },
]

function TimelineMarker({ icon: Icon }) {
  return (
    <div className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#d9dde2]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f4f93] text-white shadow-[0_2px_8px_rgba(15,23,42,0.16)]">
        <Icon className="h-6 w-6 stroke-[2.4]" />
      </div>
    </div>
  )
}

function YearLabel({ item, align }) {
  return (
    <div
      className={`mx-auto max-w-[500px] text-center ${
        align === 'right' ? 'lg:mx-0 lg:text-left' : 'lg:ml-auto lg:mr-0 lg:text-right'
      }`}
    >
      <p className="text-[1.5rem] font-extrabold leading-none tracking-normal text-[#1f4f93]">
        {item.year}
      </p>
      <p className="mt-2 text-[0.98rem] font-medium leading-snug text-[#828282]">
        {item.eyebrow}
      </p>
    </div>
  )
}

function JourneyCard({ item }) {
  const isLeft = item.cardSide === 'left'

  return (
    <article
      className={`relative mx-auto w-full max-w-[500px] rounded-md border border-[#ececec] bg-white px-6 py-4 text-[#777] shadow-[0_4px_14px_rgba(15,23,42,0.14)] ${
        isLeft ? 'lg:ml-auto lg:mr-0 lg:border-r-[3px] lg:border-r-[#1f4f93] lg:text-right' : 'lg:ml-0 lg:mr-auto lg:border-l-[3px] lg:border-l-[#1f4f93] lg:text-left'
      }`}
    >
      <span
        className={`absolute top-[22px] hidden h-5 w-5 rotate-45 bg-white lg:block ${
          isLeft
            ? '-right-[11px] border-r-[3px] border-t-[3px] border-[#1f4f93]'
            : '-left-[11px] border-b-[3px] border-l-[3px] border-[#1f4f93]'
        }`}
        aria-hidden="true"
      />

      {/* <h3 className="text-[1.08rem] font-extrabold leading-tight text-[#1f4f93]">{item.title}</h3> */}
      <div className="mt-3 space-y-3 text-[0.94rem] font-medium leading-[1.5]">
        {item.body.map((paragraph, index) => (
          <p key={`${item.year}-${index}`} className="[&_strong]:font-extrabold">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}

function TimelineRow({ item }) {
  const cardIsLeft = item.cardSide === 'left'
  const labelAlign = cardIsLeft ? 'right' : 'left'
  const leftColumnOrder = cardIsLeft ? 'order-3 lg:order-none' : 'order-2 lg:order-none'
  const rightColumnOrder = cardIsLeft ? 'order-2 lg:order-none' : 'order-3 lg:order-none'

  return (
    <div
      className={`relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_66px_minmax(0,1fr)] lg:items-start lg:gap-0 ${item.rowClass}`}
    >
      <div className={`flex justify-center lg:justify-end lg:pr-6 ${leftColumnOrder}`}>
        {cardIsLeft ? <JourneyCard item={item} /> : <YearLabel item={item} align={labelAlign} />}
      </div>

      <div className="order-1 flex justify-center lg:order-none lg:pt-0">
        <TimelineMarker icon={item.icon} />
      </div>

      <div className={`flex justify-center lg:justify-start lg:pl-6 ${rightColumnOrder}`}>
        {cardIsLeft ? <YearLabel item={item} align={labelAlign} /> : <JourneyCard item={item} />}
      </div>
    </div>
  )
}

export default function OurJourney() {
  return (
    <section className="w-full bg-[#fcfbf7] px-4 py-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="mx-auto max-w-[1470px]">
        <div className="mx-auto mb-14 max-w-[1110px] text-center lg:mb-16">
          <div className="mb-8 flex justify-center">
            <div className="home-section-eyebrow">
              Our Journey
            </div>
          </div>

          <h2 className="home-section-title">
            From Purpose-Driven Travel to People-Powered Tourism Ecosystem Building
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />

          {/* <p className="mt-5 text-[1.32rem] font-bold leading-tight text-[#121c35] sm:text-[1.48rem]">
            Building Sri Lanka&apos;s first People-Powered Tourism Ecosystem
          </p> */}

          <div className="mt-7 space-y-6 text-[1.05rem] font-normal leading-7 text-[#5f6c87] sm:text-[1.2rem] sm:leading-8">
            <p>
              {/* What began in 2006 as a purpose-driven tour operation focused on meaningful travel
              and strengthening Sri Lanka&apos;s domestic tourism sector has evolved into Traveleye
              Alliance, an ecosystem reimagining tourism as a platform for shared value, community
              leadership, and regenerative impact. */}
              Traveleye Alliance began in 2006 with a simple belief that tourism should create meaningful value not only for travellers, but also for the people, places, and enterprises that make travel possible.  
            </p>
            <p>
              {/* Today, we bring together communities, women, youth entrepreneurs, experience creators,
              partners, and travelers to co-create tourism that is authentic, inclusive, and
              people-powered. */}
              As our journey evolved, so did our vision. What began with meaningful travel expanded into a long-term commitment to developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem through participation, stewardship, collaboration, innovation, and meaningful partnerships.  
            </p>

            <p>
              Today, guided by the <strong>People-Powered Tourism Framework</strong>, Traveleye Alliance is building a more connected, inclusive, and resilient <strong>People-Powered Tourism Ecosystem</strong> that creates lasting value for people, places, partnerships, and future generations. 
               </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1120px] pt-0 lg:pt-[70px]">
          <div className="absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 bg-[#d6d7d9] lg:block" />
          <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-[#d6d7d9] lg:block" />
          <div className="absolute bottom-0 left-1/2 hidden h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#d6d7d9] lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {journeyItems.map((item) => (
              <TimelineRow key={item.year} item={item} />
            ))}
          </div>
        </div>

        {/* <div className="mt-12 flex flex-col items-center text-center lg:mt-8">
          <p className="max-w-[1140px] text-[1.12rem] font-extrabold italic leading-relaxed text-[#1f4f93] sm:text-[1.28rem] lg:text-[1.45rem]">
            &ldquo;This is not tourism as usual. It is tourism reimagined &mdash; By the People. For
            the People. With the People.&rdquo;
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-[#1f4f93] px-8 py-3 text-[1.05rem] font-bold text-white shadow-sm transition-colors hover:bg-[#173f78]"
          >
            Learn More
          </button>
        </div> */}
      </div>
    </section>
  )
}
