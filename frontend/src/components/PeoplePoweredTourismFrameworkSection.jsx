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

        <div className="relative z-10 mx-auto mt-10 max-w-6xl overflow-hidden lg:grid lg:grid-cols-[minmax(420px,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
          <div className="flex flex-col items-center bg-[#eef4fa] p-4 sm:p-6 lg:p-0 lg:pt-10">
            <div className="w-full overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(15,23,42,0.12)] sm:rounded-[1.6rem]">
            <img
              src={frameworkImg}
              alt="People collaborating around the People-Powered Tourism Framework"
              className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[495px]"
            />
            </div>

            <a
              href="/people-powered-tourism-framework"
              className="mt-8 w-full rounded-xl bg-[#214f95] px-6 py-4 text-center text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:w-auto sm:px-8 sm:text-[1.05rem]"
            >
              Explore the People-Powered Tourism Framework
            </a>
          </div>

          <div className="bg-[#eef4fa] p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-xl space-y-5 text-[1rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
              <div>
                <p className="text-center text-[1.12rem] font-extrabold text-[#172544]">
                  Purpose
                </p>
                <p className="mt-2 font-bold text-[#172544]">
                  To provide the strategic blueprint for developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.
                </p>
              </div>
              <p>
                The <strong>People-Powered Tourism Framework</strong> is the strategic blueprint that guides the <strong>Traveleye People-Powered Tourism Ecosystem</strong>. Built upon its <strong>Guiding Principles</strong> and <strong>Global Alignment</strong>, it provides a structured and connected approach to tourism development that translates vision into practical action.
              </p>
              <p>
                Through its interconnected <strong>Strategic Pillars</strong>, <strong>Development Models</strong>, <strong>Operational Platforms</strong>, <strong>Tourism Outcomes</strong>, and <strong>Ecosystem Indicators</strong>, the Framework supports the development of stronger tourism enterprises, resilient destinations, meaningful partnerships, and a thriving tourism ecosystem that creates lasting value for <strong>People</strong>, <strong>Places</strong>, <strong>Partnerships</strong>, and <strong>Prosperity</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
