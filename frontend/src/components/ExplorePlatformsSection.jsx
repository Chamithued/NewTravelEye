import staysImg from '../assets/client/Stays.png'
import experiencesImg from '../assets/client/Travelex.png'
import journeyImg from '../assets/client/Plan Your Sri Lanka Journey.png'
import luxuryImg from '../assets/client/Discover Sri Lanka in Ultimate Luxury.jpg'
import weddingImg from '../assets/client/Sri Lankan wedding reception at golden hour.png'
import outboundImg from '../assets/client/Discover the world.png'
import conNation from '../assets/explore/Connecting Nations Through Meaningful Travel.jpg'
import conTourism from '../assets/explore/Connecting Tourism Through Collaboration and Partnerships.jpg'
import discSriLanka from '../assets/explore/Discover Sri Lanka - Domestic1.jpg'

const platforms = [
  {
    id: 1,
    icon: '✈️',
    title: 'Explore Meaningful Journeys Across Sri Lanka Curated Through People and Place',
    description: "Discover thoughtfully curated journeys that connect travellers with Sri Lanka's people, culture, heritage, nature, and local way of life.",
    image: journeyImg,
    link: '/destination-facilitation',
  },
  {
    id: 2,
    icon: '🏡',
    title: 'Discover Authentic Stays in Sri Lanka Inspired by People and Place',
    description: "Discover welcoming host stays that reflect Sri Lanka's hospitality, local character, culture, and sense of place.",
    image: staysImg,
    link: '/stays',
  },
  {
    id: 3,
    icon: '🌿',
    title: 'Discover Authentic Experiences in Sri Lanka Shaped by People and Place',
    description: 'Explore meaningful experiences inspired by local people, culture, creativity, nature, traditions, and everyday life across Sri Lanka.',
    image: experiencesImg,
    link: '/experiences',
  },
  {
    id: 4,
    icon: '✨',
    title: 'Discover Sri Lanka in Ultimate Luxury Inspired by People and Place',
    description: 'Curated luxury journeys, stays, and experiences designed for travellers who value privacy, authenticity, comfort, and personalised attention to detail.',
    image: luxuryImg,
    link: '/stays',
  },
  {
    id: 5,
    icon: '💍',
    title: "Celebrate Life's Special Moments in Sri Lanka Through People and Place",
    description: "Creating memorable weddings, celebrations, events, and special occasions inspired by Sri Lanka's people, culture, hospitality, and place.",
    image: weddingImg,
    link: '/experiences',
  },
  // {
  //   id: 6,
  //   icon: '🌍',
  //   title: 'Discover Sri Lanka and the World with Traveleye (For Sri Lankan Residents)',
  //   subtitle: 'රට වටා රට දකින්න – ලොව වටා ලොව දකින්න',
  //   // description: 'Discover domestic holidays, pilgrimages, weekend escapes, and island-wide travel experiences, together with outbound holidays, pilgrimages, group tours, and international journeys designed for Sri Lankan travellers.',
  //   image: outboundImg,
  //   link: '/destination-facilitation',
  // },
  {
    id: 6,
    icon: '🌍',
    title: 'Explore Sri Lanka, Closer to Home (Exclusively For Sri Lankans)',
    subtitle: 'රට වටා රට දකින්න',
    description: 'Discover holidays, pilgrimages, weekend escapes, family adventures, and island-wide travel experiences designed especially for Sri Lankan residents.',
    // description: 'Discover domestic holidays, pilgrimages, weekend escapes, and island-wide travel experiences, together with outbound holidays, pilgrimages, group tours, and international journeys designed for Sri Lankan travellers.',
    image: outboundImg,
    link: '/destination-facilitation',
  },
  {
    id: 7,
    icon: '🌍',
    title: 'Explore the World, Beyond Borders (Exclusively For Sri Lankans) ',
    subtitle: 'ලොව වටා ලොව දකින්න',
    description: 'Discover outbound holidays, pilgrimages, educational tours, group travel, family holidays, and international journeys designed for Sri Lankan travellers. ',
    // description: 'Discover domestic holidays, pilgrimages, weekend escapes, and island-wide travel experiences, together with outbound holidays, pilgrimages, group tours, and international journeys designed for Sri Lankan travellers.',
    image: conNation,
    link: '/destination-facilitation',
  },
  {
    id: 8,
    icon: '🌍',
    title: 'Connecting Tourism Through Collaboration and Partnerships ',
    description: "A collaborative platform connecting tourism enterprises, destination facilitators, travel partners, service providers, and local communities to strengthen partnerships, improve market access, facilitate destination development, and create shared value across Sri Lanka's tourism ecosystem.",
    // description: 'Discover domestic holidays, pilgrimages, weekend escapes, and island-wide travel experiences, together with outbound holidays, pilgrimages, group tours, and international journeys designed for Sri Lankan travellers.',
    image: conTourism,
    link: '/destination-facilitation',
  },
  {
    id: 9,
    icon: '🌍',
    title: 'Connecting Nations Through Meaningful Travel ',
    description: "Discover country-focused travel platforms that strengthen tourism relationships between Sri Lanka and international markets through meaningful travel, cultural exchange, and long-term partnerships.",
    // description: 'Discover domestic holidays, pilgrimages, weekend escapes, and island-wide travel experiences, together with outbound holidays, pilgrimages, group tours, and international journeys designed for Sri Lankan travellers.',
    image: discSriLanka,
    link: '/destination-facilitation',
  },
]

export default function ExplorePlatformsSection() {
  return (
    <section className="w-full bg-[#eef4fa] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          {/* <div className="mb-4 inline-flex rounded-full bg-[#DFE7F3] px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#214f95] shadow-sm"> */}
          <div className="home-section-eyebrow mb-5">
            Explore Our Platforms
          </div>
          <h2 className="home-section-title">
            Discover Our Specialised Platforms Across the Traveleye Ecosystem
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mt-7 space-y-6 text-[1.05rem] font-normal leading-7 text-[#5f6c87] sm:text-[1.2rem] sm:leading-8">
            <p>
          {/* <p className="mx-auto mt-7 max-w-3xl text-sm font-normal leading-7 text-[#5f6c87] sm:text-base sm:leading-8"> */}
            Explore a portfolio of specialised platforms designed to connect travellers, destinations, tourism enterprises, and meaningful opportunities through people, place, and purpose
          </p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.link}
              className="group mx-auto flex min-h-[360px] w-full max-w-[380px] flex-col overflow-hidden rounded-lg border border-[#dfe7f3] bg-white shadow-[0_4px_18px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={platform.image}
                  alt={platform.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a55]/15 via-transparent to-[#0f2a55]/35" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                  {platform.icon}
                </div> */}
              </div>
              <div className="flex flex-1 flex-col p-4 text-left sm:p-5">
                <h3 className="text-base font-bold leading-snug text-[#1f4f93]">
                  {platform.title}
                </h3>
                {platform.subtitle ? (
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#234c3a]">
                    {platform.subtitle}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-6 text-[#5f6c87]">{platform.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
