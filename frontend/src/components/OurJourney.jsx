// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import * as JSXRuntime from "react/jsx-runtime";
import { Hourglass } from "lucide-react";
import { Clock3 } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
const recovered_ta = [
  {
    year: "2006",
    eyebrow: "A Journey Rooted in Purpose",
    title: "Humble Beginnings",
    icon: Hourglass,
    cardSide: "right",
    rowClass: "lg:min-h-[285px]",
    body: [
      <JSXRuntime.Fragment>
        {
          "Traveleye Alliance was founded on a passion for meaningful travel and a belief that tourism should connect visitors with Sri Lanka's people, culture, heritage, nature, and local way of life. From the beginning, our vision extended beyond travel to creating opportunities that encourage broader participation and shared value across the tourism sector."
        }
      </JSXRuntime.Fragment>,
    ],
  },
  {
    year: "2012",
    eyebrow: "From Travel to Experiences",
    title: "The Birth of Experiential Ventures",
    icon: Clock3,
    cardSide: "left",
    rowClass: "lg:min-h-[275px]",
    body: [
      <JSXRuntime.Fragment>
        {
          "As tourism continued to evolve, so did Traveleye. Greater emphasis was placed on authentic experiences, local participation, destination stewardship, enterprise development, and collaborative tourism approaches that strengthen both people and places."
        }
      </JSXRuntime.Fragment>,
      <JSXRuntime.Fragment>
        {
          "These ideas gradually evolved into the People-Powered Tourism Framework - the strategic blueprint that guides Traveleye's vision of building a People-Powered Tourism Ecosystem."
        }
      </JSXRuntime.Fragment>,
    ],
  },
  {
    year: "Today",
    eyebrow: "Building a People-Powered Tourism Ecosystem",
    title: "A People-Powered Tourism Ecosystem",
    icon: CircleCheck,
    cardSide: "right",
    rowClass: "lg:min-h-[360px]",
    body: [
      <JSXRuntime.Fragment>
        {"Today, Traveleye Alliance serves as a "}
        <strong>{"People-Powered Tourism Ecosystem Builder"}</strong>
        {
          ", bringing together journeys, host stays, experiences, tourism enterprises, destinations, travel partnerships, and supporting organisations through a connected and collaborative approach to tourism development."
        }
      </JSXRuntime.Fragment>,
      <JSXRuntime.Fragment>
        {
          "By developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem, we seek to create meaningful travel, resilient destinations, thriving local enterprises, and lasting value for people, places, partnerships, and future generations."
        }
      </JSXRuntime.Fragment>,
    ],
  },
];
function Component_recovered_na({ icon: Component_e }) {
  return (
    <div className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#d9dde2]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f4f93] text-white shadow-[0_2px_8px_rgba(15,23,42,0.16)]">
        <Component_e className="h-6 w-6 stroke-[2.4]" />
      </div>
    </div>
  );
}
function Component_recovered_ra({ item: e, align: t }) {
  return (
    <div
      className={`mx-auto max-w-[500px] text-center ${t === "right" ? "lg:mx-0 lg:text-left" : "lg:ml-auto lg:mr-0 lg:text-right"}`}
    >
      <p className="text-[1.5rem] font-extrabold leading-none tracking-normal text-[#1f4f93]">
        {e.year}
      </p>
      <p className="mt-2 text-[0.98rem] font-medium leading-snug text-[#828282]">
        {e.eyebrow}
      </p>
    </div>
  );
}
function Component_recovered_ia({ item: e }) {
  let t = e.cardSide === "left";
  return (
    <article
      className={`relative mx-auto w-full max-w-[500px] rounded-md border border-[#ececec] bg-white px-6 py-4 text-[#777] shadow-[0_4px_14px_rgba(15,23,42,0.14)] ${t ? "lg:ml-auto lg:mr-0 lg:border-r-[3px] lg:border-r-[#1f4f93] lg:text-right" : "lg:ml-0 lg:mr-auto lg:border-l-[3px] lg:border-l-[#1f4f93] lg:text-left"}`}
    >
      <span
        className={`absolute top-[22px] hidden h-5 w-5 rotate-45 bg-white lg:block ${t ? "-right-[11px] border-r-[3px] border-t-[3px] border-[#1f4f93]" : "-left-[11px] border-b-[3px] border-l-[3px] border-[#1f4f93]"}`}
        aria-hidden="true"
      />
      <div className="mt-3 space-y-3 text-[0.94rem] font-medium leading-[1.5]">
        {e.body.map((t, n) => (
          <p key={`${e.year}-${n}`} className="[&_strong]:font-extrabold">
            {t}
          </p>
        ))}
      </div>
    </article>
  );
}
function Component_recovered_aa({ item: e }) {
  let t = e.cardSide === "left",
    n = t ? "right" : "left",
    r = t ? "order-3 lg:order-none" : "order-2 lg:order-none",
    i = t ? "order-2 lg:order-none" : "order-3 lg:order-none";
  return (
    <div
      className={`relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_66px_minmax(0,1fr)] lg:items-start lg:gap-0 ${e.rowClass}`}
    >
      <div className={`flex justify-center lg:justify-end lg:pr-6 ${r}`}>
        {t ? (
          <Component_recovered_ia item={e} />
        ) : (
          <Component_recovered_ra item={e} align={n} />
        )}
      </div>
      <div className="order-1 flex justify-center lg:order-none lg:pt-0">
        <Component_recovered_na icon={e.icon} />
      </div>
      <div className={`flex justify-center lg:justify-start lg:pl-6 ${i}`}>
        {t ? (
          <Component_recovered_ra item={e} align={n} />
        ) : (
          <Component_recovered_ia item={e} />
        )}
      </div>
    </div>
  );
}
function OurJourney() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="mx-auto max-w-[1470px]">
        <div className="mx-auto mb-14 max-w-[1110px] text-center lg:mb-16">
          <div className="mb-8 flex justify-center">
            <div className="home-section-eyebrow">
              {"Our Journey Since 2006"}
            </div>
          </div>
          <h2 className="home-section-title">
            {
              "From Purpose-Driven Travel to People-Powered Tourism Ecosystem Building"
            }
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
          <div className="mt-7 space-y-6 text-[1.05rem] font-normal leading-7 text-[#5f6c87] sm:text-[1.2rem] sm:leading-8">
            <p>
              {
                "Traveleye Alliance began in 2006 with a simple belief that tourism should create meaningful value not only for travellers, but also for the people, places, and enterprises that make travel possible."
              }
            </p>
            <p>
              {
                "As our journey evolved, so did our vision. What began with meaningful travel expanded into a long-term commitment to developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem through participation, stewardship, collaboration, innovation, and meaningful partnerships."
              }
            </p>
            <p>
              {"Today, guided by the "}
              <strong>{"People-Powered Tourism Framework"}</strong>
              {
                ", Traveleye Alliance is building a more connected, inclusive, and resilient "
              }
              <strong>{"People-Powered Tourism Ecosystem"}</strong>
              {
                " that creates lasting value for people, places, partnerships and prosperity for future generations."
              }
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-[1120px] pt-0 lg:pt-[70px]">
          <div className="absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 bg-[#d6d7d9] lg:block" />
          <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-[#d6d7d9] lg:block" />
          <div className="absolute bottom-0 left-1/2 hidden h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#d6d7d9] lg:block" />
          <div className="space-y-12 lg:space-y-0">
            {recovered_ta.map((e) => (
              <Component_recovered_aa key={e.year} item={e} />
            ))}
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-5xl text-center text-[1.05rem] leading-7 text-[#5f6c87] sm:text-[1.15rem] sm:leading-8">
          {
            "After building our tourism experience and capabilities since 2006, Traveleye Alliance Sri Lanka is now entering a new phase - building a "
          }
          <strong>{"People-Powered Tourism Ecosystem"}</strong>
          {
            " to develop and strengthen micro and small tourism enterprises across Sri Lanka's tourism ecosystem."
          }
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-lg bg-[#1f4f93] px-7 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#173f78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f4f93] focus-visible:ring-offset-2 sm:text-base"
          >
            {"Explore About Traveleye Alliance Sri Lanka"}
          </Link>
        </div>
      </div>
    </section>
  );
}
export default OurJourney;
