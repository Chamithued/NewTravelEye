import frameworkImg from '../assets/People-Powered Tourism Framework.jpg'

export default function PeoplePoweredTourismFrameworkSection() {
  return (
    <section className="w-full bg-[#eef4fa] pb-14 pt-14 sm:pb-16 sm:pt-16">
      <div className="w-full">
        <div className="px-4 text-center sm:px-6 lg:px-8">
          <div className="home-section-eyebrow mb-5 justify-center">
            People-Powered Tourism Framework
          </div>

          <h2 className="home-section-title">
            The Strategic Blueprint of the Traveleye People-Powered Tourism Ecosystem
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>

        <div className="relative z-10 mt-10 overflow-hidden lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="flex items-center bg-[#eef4fa] p-4 sm:p-6 lg:py-8 lg:pl-48 lg:pr-0">
            <div className="w-full overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(15,23,42,0.12)] sm:rounded-[1.6rem]">
            <img
              src={frameworkImg}
              alt="People collaborating around the People-Powered Tourism Framework"
              className="h-[320px] w-full object-cover object-[58%_center] sm:h-[420px] lg:h-[495px]"
            />
            </div>
          </div>

          <div className="bg-[#eef4fa] p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-xl space-y-5 text-[1rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
              <p>
                The <strong>People-Powered Tourism Framework</strong> provides the strategic blueprint for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem. As the guiding framework of the <strong>Traveleye People-Powered Tourism Ecosystem</strong>, it establishes a structured and connected approach to tourism development through the <strong>People-Powered Tourism Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Operational Platforms</strong>, and <strong>Tourism Outcomes</strong>.
              </p>
              <p>
                Together, these interconnected components transform strategic direction into practical action, creating stronger tourism enterprises, meaningful travel experiences, resilient destinations, collaborative partnerships, and thriving tourism ecosystems that generate lasting value for people, places, partnerships, and future generations.
              </p>

              <a
                href="/people-powered-tourism-framework"
                className="mx-auto mt-8 flex w-fit items-center rounded-xl bg-[#214f95] px-6 py-3.5 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:px-8 sm:text-[1.05rem]"
              >
                Explore the People-Powered Tourism Framework
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
