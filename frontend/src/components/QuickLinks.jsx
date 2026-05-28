import staysImg from '../assets/client/Stays.png'
import experiencesImg from '../assets/client/Explore People Pwered Travel Experiences.png'
import journeyImg from '../assets/client/Plan Your Sri Lanka Journey.png'
import luxuryImg from '../assets/client/Discover Sri Lanka in Ultimate Luxury.jpg'
import supportImg from '../assets/client/Support Services.png'
import weddingImg from '../assets/client/Sri Lankan wedding reception at golden hour.png'
import domesticImg from '../assets/client/Discover Sri Lanka - Domestic.png'
import outboundImg from '../assets/client/Discover the world.png'

const quickLinksData = [
  // {
  //   id: 1,
  //   title: 'Explore People-Powered Stays in Sri Lanka',
  //   image: staysImg,
  //   link: '/stays',
  // },
  {
    id: 1,
    title: 'Explore People-Powered Travel Experiences',
    image: experiencesImg,
    link: '/experiences',
  },
  {
    id: 2,
    title: 'Plan Your Sri Lanka Journey (Inbound)',
    image: journeyImg,
    link: '/travel',
  },
  {
    id: 3,
    title: 'Discover Sri Lanka in Ultimate Luxury (Inbound)',
    image: luxuryImg,
    link: '/stays',
  },
  // {
  //   id: 5,
  //   title: 'Plan Your Corporate Event in Sri Lanka (MICE)',
  //   image: supportImg,
  //   link: '/support-services',
  // },
  {
    id: 4,
    title: 'Plan Your Event or Celebration in Sri Lanka',
    image: weddingImg,
    link: '/experiences',
  },
    {
    id: 5,
      title: 'Discover Sri Lanka Your Way (Domestic - Sri Lankans)',
      image: domesticImg,
      link: '/travel',
  },
  {
    id: 6,
      title: 'Explore the World with Traveleye (Outbound - Sri Lankans)',
      image: outboundImg,
      link: '/travel',
  },
]

export default function QuickLinks() {
  return (
    <section className="w-full bg-slate-50 -mt-20 sm:-mt-28 lg:-mt-32 py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-blue-100 px-5 py-3">
            <p className="text-base font-bold text-[#1e40af]">Quick Links</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {quickLinksData.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="group relative w-full max-w-[380px] mx-auto h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={link.image}
                alt={link.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a55]/18 via-[#0f2a55]/10 to-[#0f2a55]/28"></div>
              <div className="absolute inset-0 flex items-end justify-center p-6 text-center">
                <h3 className="text-white text-sm sm:text-base font-semibold leading-tight">
                  {link.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
