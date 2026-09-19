// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import { Building2 } from "lucide-react";
import { Sprout } from "lucide-react";
import { Earth } from "lucide-react";
import { Leaf } from "lucide-react";
import { Users } from "lucide-react";
import asset_sa from "../assets/client/Join the movement2.png";
import travelVentureImage from "../assets/client/Partner With Us - Inbound1.jpg";
import travelCorridorImage from "../assets/client/TC.jpg";
import hostStayImage from "../assets/involved/Develop a Place-Inspired Host Stay.jpg";
import experienceImage from "../assets/involved/Develop a People & Place-Inspired Experience.jpg";
import ecosystemSupportImage from "../assets/involved/Develop an Ecosystem Support Venture.jpg";
import jointVenturesImage from "../assets/involved/Joint Ventures & Strategic Investments.jpg";
import collaborateImage from "../assets/client/Collaborate With Us1.jpg";
import purposeImage from "../assets/client/Travelwith Purpose.png";
import { HeartHandshake } from "lucide-react";
import { Handshake } from "lucide-react";
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const recovered_Ka = [
  {
    title: "Become a Travel Venture Partner",
    subtitle:
      "Develop inbound and outbound travel ventures and collaborative partnerships that connect Sri Lanka with international travel markets through meaningful journeys.",
    icon: Building2,
    accent: "#275CAD",
    image: travelVentureImage,
    to: "/become-a-travel-venture-partner",
  },
  {
    title: "Become a Travel Corridor Partner",
    subtitle:
      "Develop exclusive travel corridor partnerships that strengthen tourism relationships between Sri Lanka and international destinations through meaningful two-way travel.",
    icon: Sprout,
    accent: "#15803d",
    image: travelCorridorImage,
    to: "/become-a-travel-corridor-partner",
  },
  {
    title: "Develop a Place-Inspired Host Stay",
    subtitle:
      "Create authentic host stays that reflect Sri Lanka's culture, hospitality, landscapes, and the unique identity of each destination.",
    icon: Earth,
    accent: "#0ea5a4",
    image: hostStayImage,
    to: "/stays",
  },
  {
    title: "Develop a People & Place-Inspired Experience",
    subtitle:
      "Create meaningful tourism experiences inspired by Sri Lanka's people, culture, heritage, nature, creativity, traditions, and everyday life.",
    icon: Leaf,
    accent: "#16a34a",
    image: experienceImage,
    to: "/experiences",
  },
  {
    title: "Develop a Tourism Enterprise Support Venture",
    subtitle:
      "Support the growth of tourism enterprises through technology, training, consultancy, innovation, capability development, digital solutions, and ecosystem support services.",
    icon: Earth,
    accent: "#7c3aed",
    image: ecosystemSupportImage,
    to: "/develop-an-ecosystem-support-venture",
  },
  {
    title: "Partner in Destination Development",
    subtitle:
      "Collaborate with destinations, communities, tourism enterprises, and institutions to strengthen participation, stewardship, and place-based tourism development.",
    icon: Users,
    accent: "#f59e0b",
    image: asset_sa,
    to: "/partner-in-destination-development",
  },
  {
    title: "Joint Ventures & Strategic Investments",
    subtitle:
      "Explore collaborative investment and joint venture opportunities that strengthen tourism enterprises, destinations, travel initiatives, and the wider tourism ecosystem.",
    icon: HeartHandshake,
    accent: "#ef4444",
    image: jointVenturesImage,
    to: "/joint-ventures-strategic-investments",
  },
  {
    title: "Collaborate with Traveleye Alliance",
    subtitle:
      "Work alongside government agencies, tourism authorities, development organisations, educational institutions, cooperative movements, NGOs, investors, and industry partners to advance people-powered tourism initiatives.",
    icon: Handshake,
    accent: "#0f766e",
    image: collaborateImage,
    to: "/collaborate-with-us",
  },
  {
    title: "Travel with Purpose",
    subtitle:
      "Experience meaningful journeys that celebrate Sri Lanka's people, places, and culture while contributing to stronger destinations and a thriving People-Powered Tourism Ecosystem.",
    icon: Plane,
    accent: "#2563eb",
    image: purposeImage,
    to: "/travel-with-purpose",
  },
];
function Component_recovered_qa({ card: e }) {
  let Component_t = e.icon,
    n = "0 1px 2px rgba(0,0,0,0.65), 0 0 1px rgba(0,0,0,0.85)";
  return (
    <article className="relative min-h-80 overflow-hidden rounded-2xl sm:min-h-96">
      <img
        src={e.image}
        alt={e.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#0f2a55]/24 via-[#0f2a55]/12 to-transparent p-5 sm:p-6">
        <div>
          <div className="inline-flex flex-col items-start gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
              style={{
                backgroundColor: e.accent,
              }}
            >
              <Component_t className="h-5 w-5 text-white" />
            </div>
            <h3
              className="text-lg font-semibold leading-tight text-white sm:text-xl"
              style={{
                textShadow: n,
              }}
            >
              {e.title}
            </h3>
          </div>
        </div>
        <div>
          <p
            className="mb-4 max-w-xl text-sm text-white/90 sm:text-base"
            style={{
              textShadow: n,
            }}
          >
            {e.subtitle}
          </p>
          <div>
            <Link
              to={e.to}
              aria-label={`Learn more about ${e.title}`}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/40 bg-[#0f2a55]/25 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
            >
              <span>{"Learn More"}</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-transparent">
                <svg
                  className="h-3.5 w-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
function GetInvolved() {
  return (
    <section className="w-full bg-[#eef4fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="home-section-eyebrow mb-5">
            {"Grow Together with Traveleye Alliance"}
          </div>
          <h2 className="home-section-title">
            {"Every Contribution Strengthens the Ecosystem"}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mx-auto mt-5 max-w-6xl space-y-6 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
            <p>
              {"The "}
              <strong>{"Traveleye People-Powered Tourism Ecosystem"}</strong>
              {
                " is built through the collective contributions of travellers, tourism enterprises, entrepreneurs, destinations, communities, institutions, development partners, and industry stakeholders."
              }
            </p>
            <p>
              {
                "Whether you are looking to develop a tourism enterprise, create authentic tourism experiences, strengthen destinations, build strategic partnerships, or contribute your expertise, there are many ways to participate in building a stronger, more connected, and more resilient tourism ecosystem across Sri Lanka."
              }
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
            {"Become Part of the Traveleye People-Powered Tourism Ecosystem"}
          </h3>
        </div>
        <div className="mt-8 mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recovered_Ka.map((e) => (
              <Component_recovered_qa key={e.title} card={e} />
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/how-you-can-grow-with-traveleye"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#275CAD] px-6 py-4 text-center text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto sm:px-8 sm:text-[1.05rem]"
          >
            {"Explore How You Can Grow Together With Traveleye Alliance"}
            <ArrowRight
              className="h-5 w-5 shrink-0"
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default GetInvolved;
