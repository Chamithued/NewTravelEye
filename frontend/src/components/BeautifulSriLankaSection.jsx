// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import asset_Ii from "../assets/Beautiful Sri Lanka.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
function BeautifulSriLankaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fcfbf7] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c28a5b]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-28 h-96 w-96 rounded-full bg-[#1f4f93]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-5 flex justify-center">
            <div className="home-section-eyebrow">{"Beautiful Sri Lanka"}</div>
          </div>
          <h2 className="home-section-title">
            {"Beautiful People. Beautiful Places. Beautiful Experiences."}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <h3 className="mt-6 text-xl font-semibold leading-snug text-[#1f4f93] sm:text-2xl">
            {"Celebrating the Beauty of Sri Lanka Through People and Places"}
          </h3>
        </div>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[590px] lg:mx-0">
            <div
              className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] border border-[#c28a5b]/35 sm:-bottom-5 sm:-left-5"
              aria-hidden="true"
            />
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
              <img
                src={asset_Ii}
                alt="The people and places that make Sri Lanka beautiful"
                className="h-full w-full object-contain"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0f2f4f]/25 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="space-y-4 text-[1.02rem] leading-7 text-[#5f6c87] sm:text-[1.1rem] sm:leading-8">
              <p>
                {
                  "Sri Lanka is beautiful in many ways - through its people, culture, heritage, nature, wellness, spirituality, hospitality, experiences, destinations, and the sense of connection and inner peace that travellers can discover across the island."
                }
              </p>
              <p>
                {"Traveleye Alliance Sri Lanka embraces "}
                <strong>{"\u201CBeautiful Sri Lanka\u201D"}</strong>
                {
                  " as its destination-brand positioning and works to strengthen a People-Powered Tourism Ecosystem that brings this beauty to life through meaningful journeys, authentic stays and experiences, stronger destinations, empowered tourism enterprises, and lasting partnerships."
                }
              </p>
              <p>
                {
                  "Through our Travel Collective, Host Experiences, Destination Facilitation, and Ecosystem Support platforms, we work with people, places, enterprises, and partners to create a Sri Lanka that is not only beautiful to discover, but meaningful to experience and valuable to its people."
                }
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/beautiful-sri-lanka"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1f4f93] px-6 py-3.5 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#173f78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f4f93] focus-visible:ring-offset-2 sm:px-8 sm:text-[1.05rem]"
              >
                {"Explore Our Beautiful Sri Lanka Brand"}
                <ArrowRight
                  className="h-5 w-5"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BeautifulSriLankaSection;
