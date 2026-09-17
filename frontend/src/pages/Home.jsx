// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import Hero from "../components/Hero.jsx";
import BeautifulSriLankaSection from "../components/BeautifulSriLankaSection.jsx";
import ExplorePlatformsSection from "../components/ExplorePlatformsSection.jsx";
import OurJourney from "../components/OurJourney.jsx";
import BuildingSomethingBigger from "../components/BuildingSomethingBigger.jsx";
import WhyTraveleye from "../components/WhyTraveleye.jsx";
import PeoplePoweredTourismIntro from "../components/PeoplePoweredTourismIntro.jsx";
import EcosystemSection from "../components/EcosystemSection.jsx";
import PeoplePoweredTourismFrameworkSection from "../components/PeoplePoweredTourismFrameworkSection.jsx";
import HomeFrameworkSections from "../components/HomeFrameworkSections.jsx";
import PeoplePoweredTourismStrategicPillarsSection from "../components/PeoplePoweredTourismStrategicPillarsSection.jsx";
import PeoplePoweredTourismDevelopmentModelsSection from "../components/PeoplePoweredTourismDevelopmentModelsSection.jsx";
import FivePillars from "../components/FivePillars.jsx";
import PeoplePoweredTourismOutcomesSection from "../components/PeoplePoweredTourismOutcomesSection.jsx";
import GetInvolved from "../components/GetInvolved.jsx";
import OurGrowingImpact from "../components/OurGrowingImpact.jsx";
import { Newspaper } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import asset_Zi from "../assets/recovered/Access Tourism Enterprise Growth Services.jpg";
import { MapPinned } from "lucide-react";
import asset_Qi from "../assets/recovered/Support Destination Development _ Facilitation.jpg";
import { Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CatalogueLibrarySection from "../components/CatalogueLibrarySection.jsx";
import FooterLinks from "../components/FooterLinks.jsx";
import partnershipImage from "../assets/client/Partner With Us - Inbound1.jpg";
const recovered_ga = [
  {
    icon: BriefcaseBusiness,
    image: asset_Zi,
    title: "Tourism Enterprise Development",
    description:
      "News, announcements, and stories about tourism enterprise development, programmes, and projects.",
  },
  {
    icon: MapPinned,
    image: asset_Qi,
    title: "Destination Initiatives",
    description:
      "Updates and insights from destination initiatives and the continued evolution of People-Powered Tourism.",
  },
  {
    icon: Handshake,
    image: partnershipImage,
    title: "Strategic Partnerships",
    description:
      "Media releases covering strategic partnerships, industry participation, and ecosystem milestones.",
  },
];
function Component_recovered__a() {
  return (
    <section className="w-full bg-[#FCFBF8] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="home-section-eyebrow justify-center">
            <Newspaper className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>{"Media and Press"}</span>
          </div>
          <h2 className="mt-5 text-[1.85rem] font-semibold leading-tight tracking-normal text-[#172544] sm:text-[2.1rem] lg:text-[2.45rem]">
            {"News, Insights and Stories from Traveleye"}
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
        </div>
        <div className="mx-auto mt-8 max-w-6xl space-y-5 text-center text-[1.02rem] leading-7 text-[#5f6c87] sm:text-[1.08rem] sm:leading-8">
          <p>
            {
              "Stay connected with the latest news, announcements, insights, media releases, and stories from Traveleye Alliance Sri Lanka as we build Sri Lanka\u2019s First People-Powered Tourism Ecosystem."
            }
          </p>
          <p>
            {
              "Discover updates on our tourism enterprise development, destination initiatives, strategic partnerships, programmes, projects, industry participation, and the continued evolution of People-Powered Tourism."
            }
          </p>
          <p>
            {
              "Through our Media and Press Centre, we share the developments, ideas, perspectives, and milestones that reflect our journey towards building a stronger, more connected, and more resilient tourism ecosystem for Sri Lanka."
            }
          </p>
        </div>
        <h3 className="mt-10 text-center text-[1.45rem] font-semibold leading-tight text-[#172544] sm:text-[1.75rem]">
          {"Latest from Traveleye"}
        </h3>
        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {recovered_ga.map(({ image: e, title: t, description: n }) => (
            <article key={t} className="group flex h-full flex-col">
              <div className="relative min-h-[230px] overflow-hidden rounded-sm bg-slate-100">
                <img
                  src={e}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172544]/20 via-transparent to-white/5" />
              </div>
              <div className="flex flex-1 flex-col pt-4">
                <h4 className="text-lg font-bold leading-tight text-[#172544]">
                  {t}
                </h4>
                <p className="mt-3 flex-1 text-[1.02rem] leading-7 text-[#4f5f76]">
                  {n}
                </p>
                <Link
                  to="/media-press"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#275CAD] hover:text-[#172544]"
                >
                  {"Read More "}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/media-press"
            className="w-full rounded-xl bg-[#275CAD] px-8 py-4 text-center text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
          >
            {"Explore Media and Press"}
          </Link>
        </div>
      </div>
    </section>
  );
}
function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <BeautifulSriLankaSection />
      <ExplorePlatformsSection />
      <OurJourney />
      <BuildingSomethingBigger />
      <WhyTraveleye />
      <PeoplePoweredTourismIntro />
      <EcosystemSection />
      <PeoplePoweredTourismFrameworkSection />
      <HomeFrameworkSections />
      <PeoplePoweredTourismStrategicPillarsSection />
      <PeoplePoweredTourismDevelopmentModelsSection />
      <FivePillars />
      <PeoplePoweredTourismOutcomesSection />
      <GetInvolved />
      <OurGrowingImpact />
      <Component_recovered__a />
      <CatalogueLibrarySection />
      <FooterLinks />
    </main>
  );
}
export default Home;
