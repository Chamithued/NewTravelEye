import { Link } from 'react-router-dom'

const defaultLinks = [
  { label: 'Explore People-Powered Travel Experiences', to: '/experiences' },
  { label: 'Discover People-Powered Host Stays', to: '/stays' },
  { label: 'Plan Your Sri Lanka Journey', to: '/travel-collective' },
  { label: 'Discover Sri Lanka in Ultimate Luxury', to: '/stays' },
  { label: 'Plan Your Celebration or Event in Sri Lanka', to: '/experiences' },
  { label: 'Explore the World with Traveleye (Outbound For Sri Lankans)', to: '/travel-collective' },
  { label: 'Discover Sri Lanka Your Way (Domestic For Sri Lankans)', to: '/travel-collective' },
  { label: 'Discover the People-Powered Tourism Framework', to: '/travel-collective' },
  { label: 'Join the Traveleye Ecosystem', to: '/contact' },
]

export default function ExploreEcosystem({
  title = 'Explore the Traveleye Ecosystem',
  links = defaultLinks,
}) {
  return (
    <section className="bg-[#1C4686] px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl p-5 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#e6f1e6] sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 justify-items-center md:grid-cols-3 md:gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="inline-flex min-h-14 w-full max-w-[420px] items-center justify-center rounded-md bg-[#395E96] px-5 py-4 text-center text-sm font-semibold leading-6 text-white transition hover:bg-[#2f4f78] sm:px-10"
            >
              <span aria-hidden="true" className="mr-2 shrink-0">
                -&gt;
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
