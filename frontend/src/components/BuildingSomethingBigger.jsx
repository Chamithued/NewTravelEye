// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import asset_sa from "../assets/client/Join the movement2.png";
function BuildingSomethingBigger() {
  return (
    <section className="w-full bg-[#fcfbf7] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-5 flex justify-center">
            <div className="home-section-eyebrow">
              {"Building Something Bigger"}
            </div>
          </div>
          <h2 className="home-section-title">
            {"A Growing Organisation. A Bigger Vision for Sri Lanka."}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="order-2 text-center lg:text-left">
            <div className="space-y-4 text-[1.02rem] leading-7 text-[#5f6c87] sm:text-[1.1rem] sm:leading-8">
              <p>
                {
                  "Traveleye Alliance Sri Lanka is building a People-Powered Tourism Ecosystem for Sri Lanka, with a focus on developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem."
                }
              </p>
              <p>
                {
                  "We are at the beginning of building an ecosystem that connects people, places, enterprises, destinations, travellers, and partners through collaboration, stewardship, innovation, and meaningful partnerships."
                }
              </p>
              <p>
                {
                  "Every relationship we build, every partnership we establish, every traveller we serve, and every tourism opportunity we create helps us strengthen our capacity to support more enterprises and create greater opportunities across Sri Lanka's tourism ecosystem."
                }
              </p>
              <p>
                {
                  "When you choose to work with Traveleye, you become part of something that is still being built - and your participation helps shape what it can become."
                }
              </p>
              <p className="text-center text-xl font-bold text-[#1f4f93]">
                {"Together, we can build something bigger."}
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/building-something-bigger"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1f4f93] px-7 py-3.5 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#173f78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f4f93] focus-visible:ring-offset-2"
              >
                {"Be Part of It"}
                <ArrowRight
                  className="h-5 w-5"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
          <div className="order-1 relative mx-auto w-full max-w-[560px]">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.75rem] border border-[#c28a5b]/35 sm:-bottom-5 sm:-right-5"
              aria-hidden="true"
            />
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
              <img
                src={asset_sa}
                alt="People working together to build something bigger"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BuildingSomethingBigger;
