// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import asset_Bi from "../assets/client/Plan Your Sri Lanka Journey.png";
import asset_Ri from "../assets/client/Stays.png";
import asset_zi from "../assets/client/Travelex.jpg";
import asset_Vi from "../assets/client/Discover Sri Lanka in Ultimate Luxury.jpg";
import asset_Hi from "../assets/client/Sri Lankan wedding reception at golden hour.png";
import asset_Xi from "../assets/recovered/Discover Sri Lanka - Domestic1.jpg";
import asset_Ui from "../assets/client/Discover the world.png";
import asset_Zi from "../assets/recovered/Access Tourism Enterprise Growth Services.jpg";
import asset_Qi from "../assets/recovered/Support Destination Development _ Facilitation.jpg";
const recovered_$i = [
  {
    id: 1,
    icon: "\u2708\uFE0F",
    title: "Explore Beautiful Journeys Across Sri Lanka",
    description:
      "Thoughtfully curated journeys connecting travellers with Sri Lanka's people, culture, heritage, nature and local way of life through authentic and meaningful travel.",
    image: asset_Bi,
    link: "/sri-lanka-journeys",
  },
  {
    id: 2,
    icon: "\uD83C\uDFE1",
    title: "Discover Beautiful Host Stays in Sri Lanka",
    description:
      "Welcoming host stays reflecting Sri Lankan hospitality, local culture, traditions, landscapes and the unique identity of each destination.",
    image: asset_Ri,
    link: "/traveleye-hostnest",
  },
  {
    id: 3,
    icon: "\uD83C\uDF3F",
    title: "Discover Beautiful People & Place-Inspired Experiences",
    description:
      "Meaningful experiences shaped by local people, culture, heritage, creativity, nature, agriculture, wellness, and everyday life across Sri Lanka.",
    image: asset_zi,
    link: "/traveleye-storytrail",
  },
  {
    id: 4,
    icon: "\u2728",
    title: "Discover Beautiful Sri Lanka Through Priv\xE9 Collection",
    description:
      "Discover a more refined Sri Lanka through exclusive private journeys, exceptional stays and personalised experiences, crafted for discerning travellers who value privacy, elegance, comfort, exceptional service and meaningful connections.",
    image: asset_Vi,
    link: "/prive-collection",
  },
  {
    id: 5,
    icon: "\uD83D\uDC8D",
    title: "Celebrate Life's Beautiful Moments in Sri Lanka",
    description:
      "Memorable celebrations inspired by Sri Lanka's people, culture, hospitality, landscapes, and extraordinary locations for life's most special moments.",
    image: asset_Hi,
    link: "/celebrations-events",
  },
  {
    id: 6,
    icon: "\uD83C\uDF0D",
    title: "Explore Beautiful Sri Lanka, Closer to Home",
    subtitle:
      "\u0DBB\u0DA7 \u0DC0\u0DA7\u0DCF \u0DBB\u0DA7 \u0DAF\u0D9A\u0DD2\u0DB1\u0DCA\u0DB1",
    description:
      "Holidays, pilgrimages, family getaways, weekend escapes and island-wide travel experiences created for Sri Lankan residents.",
    image: asset_Xi,
    link: "/island-journeys",
  },
  {
    id: 7,
    icon: "\uD83C\uDF0D",
    title: "Explore the World Beyond Beautiful Sri Lanka",
    subtitle:
      "\u0DBD\u0DDC\u0DC0 \u0DC0\u0DA7\u0DCF \u0DBD\u0DDC\u0DC0 \u0DAF\u0D9A\u0DD2\u0DB1\u0DCA\u0DB1",
    description:
      "Outbound holidays, pilgrimages, educational tours, family vacations, group travel and international journeys designed for Sri Lankan travellers.",
    image: asset_Ui,
    link: "/global-journeys",
  },
  {
    id: 8,
    icon: "\uD83C\uDF0D",
    title:
      "Access Tourism Enterprise Growth Services Through Beautiful Expertise",
    description:
      "Access specialised services that help tourism enterprises strengthen capabilities, improve business performance, embrace innovation and unlock new opportunities for sustainable growth.",
    image: asset_Zi,
    link: "/support-services",
  },
  {
    id: 9,
    icon: "\uD83C\uDF0D",
    title:
      "Support Destination Development & Facilitation Driven by Beautiful People",
    description:
      "Supporting collaborative destination development by connecting communities, tourism enterprises, institutions and partners to strengthen stewardship, participation and resilient tourism destinations.",
    image: asset_Qi,
    link: "/destination-facilitation",
  },
];
function ExplorePlatformsSection() {
  return (
    <section className="w-full bg-[#eef4fa] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-6xl text-center">
          <div className="home-section-eyebrow mb-5">
            {"Explore Our Beautiful Tourism Collection"}
          </div>
          <h2 className="home-section-title">
            {"Discover Beautiful Journeys, Stays, Experiences & More"}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mx-auto mt-7 max-w-5xl space-y-6 text-[1.05rem] font-normal leading-7 text-[#5f6c87] sm:text-[1.2rem] sm:leading-8">
            <p>
              {
                "Explore a thoughtfully curated collection of beautiful journeys, host stays, experiences, celebrations, travel opportunities and tourism development services - connecting people, places, enterprises and destinations while contributing to a stronger People-Powered Tourism Ecosystem."
              }
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recovered_$i.map((e) => (
            <article
              key={e.id}
              className="mx-auto flex min-h-[360px] w-full max-w-[380px] flex-col overflow-hidden rounded-lg border border-[#dfe7f3] bg-white shadow-[0_4px_18px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-xl"
            >
              <a
                href={e.link}
                aria-label={e.title}
                className="group/image relative block h-44 overflow-hidden"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                />
              </a>
              <div className="flex flex-1 flex-col p-4 text-left sm:p-5">
                <h3 className="text-base font-bold leading-snug text-[#1f4f93]">
                  <a
                    href={e.link}
                    className="transition-colors hover:text-[#172544]"
                  >
                    {e.title}
                  </a>
                </h3>
                {e.subtitle ? (
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#234c3a]">
                    {e.subtitle}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-6 text-[#5f6c87]">
                  {e.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ExplorePlatformsSection;
