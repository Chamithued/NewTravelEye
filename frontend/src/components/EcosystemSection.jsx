// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import asset_ka from "../assets/Traveleye People-Powered Tourism Ecosystem.jpg";
import { Link } from "react-router-dom";
function EcosystemSection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="home-section-eyebrow">
            {"Traveleye People-Powered Tourism Ecosystem"}
          </div>
          <h2 className="home-section-title mt-4">
            {"Building Stronger Tourism Through Connected Participation"}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(420px,0.88fr)] lg:gap-14">
          <div>
            <div className="mt-6 max-w-3xl space-y-5 text-[1.02rem] leading-7 text-[#6b7894] sm:text-[1.08rem] sm:leading-8">
              <div>
                <p className="text-center text-[1.2rem] font-extrabold text-[#172544]">
                  {"Purpose"}
                </p>
                <p className="mt-2 font-bold text-[#172544]">
                  {
                    "To develop and strengthen micro and small tourism enterprises across Sri Lanka's tourism ecosystem."
                  }
                </p>
              </div>
              <p>
                {"The "}
                <strong>{"Traveleye People-Powered Tourism Ecosystem"}</strong>
                {
                  " is a connected tourism ecosystem developed by Traveleye Alliance Sri Lanka to strengthen tourism through people, participation, collaboration, stewardship, innovation, and shared value creation."
                }
              </p>
              <p>
                {"Guided by the "}
                <strong>{"People-Powered Tourism Framework"}</strong>
                {
                  ", the ecosystem creates opportunities for entrepreneurs, hosts, experience creators, tourism enterprises, destinations, institutions, communities, and strategic partners to participate in building stronger tourism together. Through a connected and collaborative approach, it transforms strategic vision into practical action, strengthening tourism enterprises, destinations, local economies, and the broader tourism ecosystem."
                }
              </p>
              <p>
                {
                  "More than a collection of tourism businesses or initiatives, the "
                }
                <strong>{"Traveleye People-Powered Tourism Ecosystem"}</strong>
                {" is built upon the interconnected foundations of "}
                <strong>{"People"}</strong>
                {", "}
                <strong>{"Places"}</strong>
                {", "}
                <strong>{"Partnerships"}</strong>
                {", and "}
                <strong>{"Prosperity"}</strong>
                {
                  ". It connects people, places, enterprises, partnerships, and opportunities to create lasting value for Sri Lanka's tourism industry and future generations."
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:pt-10">
            <div className="w-full overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(15,23,42,0.12)] sm:rounded-[1.6rem]">
              <img
                src={asset_ka}
                alt="People collaborating on a tourism ecosystem framework"
                className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[495px]"
              />
            </div>
            <Link
              to="/traveleye-people-powered-tourism-ecosystem"
              className="mt-8 w-full whitespace-nowrap rounded-xl bg-[#214f95] px-6 py-4 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:w-auto sm:px-8 sm:text-[1.05rem]"
            >
              {"Explore the Traveleye People-Powered Tourism Ecosystem"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EcosystemSection;
