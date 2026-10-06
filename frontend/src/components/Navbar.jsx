// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import * as React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import asset_nr from "../assets/client/Traveleyelogo.png";
import asset_rr from "../assets/recovered/Beautiful Sri Lanka Logo2.png";
const recovered_ar = [
  {
    top: "Traveleye",
    bottom: "Travel Collective",
    to: "/travel-collective",
    items: [
      {
        label: "About Traveleye Travel Collective",
        to: "/travel-collective",
      },
      {
        label: "Traveleye Lanka Journeys",
        to: "/sri-lanka-journeys",
      },
      {
        label: "Traveleye Travel Corridors",
        to: "/travel-corridors",
      },
      {
        label: "Traveleye Bharat Lanka Journeys",
        to: "/bharat-lanka-journeys",
        indent: true,
        child: "first",
      },
      {
        label: "Traveleye Viet Lanka Journeys",
        to: "/viet-lanka-journeys",
        indent: true,
        child: "middle",
      },
      {
        label: "Traveleye Siam Lanka Journeys",
        to: "/siam-lanka-journeys",
        indent: true,
        child: "last",
      },
      {
        label: "Traveleye Celebrations & Events",
        to: "/celebrations-events",
      },
      {
        label: "Traveleye Global Journeys",
        to: "/global-journeys",
      },
      {
        label: "Traveleye Priv\xE9 Collection",
        to: "/prive-collection",
      },
      {
        label: "Traveleye Island Journeys",
        to: "/island-journeys",
      },
    ],
  },
  {
    top: "Traveleye",
    bottom: "HostNest",
    to: "/traveleye-hostnest",
    // items: [
    //   {
    //     label: "About Traveleye Host Experiences",
    //     to: "/about-traveleye-host-experiences",
    //   },
    //   {
    //     label: "Traveleye HostNest",
    //     to: "/traveleye-hostnest",
    //   },
    // ],
  },
  {
    top: "Traveleye",
    bottom: "StoryTrails",
    to: "/traveleye-storytrail",
  },
  {
    top: "Traveleye Ecosystem",
    bottom: "Support Services",
    to: "/support-services",
    items: [
      {
        label: "About Traveleye Ecosystem Support",
        to: "/support-services",
      },
      {
        label: "Traveleye Guidant",
        to: "/traveleye-guidant",
      },
      {
        label: "Traveleye UpSkills",
        to: "/traveleye-upskills",
      },
      {
        label: "Traveleye Connect",
        to: "/traveleye-connect",
      },
    ],
  },
  {
    top: "Traveleye Destination",
    bottom: "Facilitation Centres",
    to: "/destination-facilitation",
  },
];
const recovered_or = [
  {
    label: "About Traveleye",
    top: "About",
    bottom: "Traveleye",
    items: [
      {
        label: "About Traveleye Alliance",
        to: "/about",
      },
      {
        label: "Our Vision, Mission and Values",
        to: "/vision-mission",
      },
      {
        label: "Our Journey Since 2006",
        to: "/our-journey",
      },
      {
        label: "Building Something Bigger",
        to: "/building-something-bigger",
      },
      {
        label: "Beautiful Sri Lanka",
        to: "/beautiful-sri-lanka",
      },
      {
        label: "Beautiful People",
        to: "/beautiful-people",
      },
      {
        label: "Why Choose Traveleye",
        to: "/why-traveleye",
      },
      {
        label: "Governance and Ethics",
        to: "/governance-ethics",
      },
      {
        label: "Media and Press",
        to: "/media-press",
      },
      {
        label: "Catalogue Library",
        to: "/traveleye-catalogue-library",
      },
      {
        label: "Founder and CEO",
        to: "/founder-ceo",
      },
      {
        label: "Contact Us",
        to: "/contact",
      },
    ],
  },
  {
    label: "Traveleye Ecosystem",
    top: "Traveleye",
    bottom: "Ecosystem",
    items: [
      {
        label: "What Is Traveleye's People-Powered Tourism",
        to: "/what-is-traveleyes-people-powered-tourism",
      },
      {
        label: "Traveleye People-Powered Tourism Ecosystem",
        to: "/traveleye-people-powered-tourism-ecosystem",
      },
      {
        label: "People-Powered Tourism Framework",
        to: "/people-powered-tourism-framework",
      },
      {
        label: "People-Powered Tourism Guiding Principles",
        to: "/guiding-principles",
      },
      {
        label: "People-Powered Tourism Local & Global Alignment",
        to: "/globally-aligned-locally-grounded",
      },
      {
        label: "People-Powered Tourism Strategic Pillars",
        to: "/people-powered-tourism-strategic-pillars",
      },
      {
        label: "People-Powered Tourism Development Models",
        to: "/people-powered-tourism-development-models",
      },
      {
        label: "People-Powered Tourism Host Model",
        to: "/people-powered-tourism-host-model",
      },
      {
        label: "People-Powered Tourism Revenue Sharing Model",
        to: "/people-powered-tourism-revenue-sharing-model",
      },
      {
        label: "People-Powered Tourism Operational Platforms",
        to: "/people-powered-tourism-operational-platforms",
      },
      {
        label: "People-Powered Tourism Outcomes",
        to: "/people-powered-tourism-outcomes",
      },
      {
        label: "People-Powered Tourism Ecosystem Indicators",
        to: "/people-powered-tourism-ecosystem-indicators",
      },
    ],
  },
  {
    label: "Grow With Traveleye",
    top: "Grow With",
    bottom: "Traveleye",
    items: [
      {
        label: "How You Can Grow With Traveleye",
        to: "/how-you-can-grow-with-traveleye",
      },
      {
        label: "Become a Travel Venture Partner",
        to: "/become-a-travel-venture-partner",
      },
      {
        label: "Become a Travel Corridor Partner",
        to: "/become-a-travel-corridor-partner",
      },
      {
        label: "Develop a Place-Inspired Stay",
        to: "/stays",
      },
      {
        label: "Develop a People & Place-Inspired Experience",
        to: "/experiences",
      },
      {
        label: "Develop an Ecosystem Support Venture",
        to: "/develop-an-ecosystem-support-venture",
      },
      {
        label: "Partner in Destination Development",
        to: "/partner-in-destination-development",
      },
      {
        label: "Joint Ventures & Strategic Investments",
        to: "/joint-ventures-strategic-investments",
      },
      {
        label: "Collaborate With Us",
        to: "/collaborate-with-us",
      },
      {
        label: "Travel With Purpose",
        to: "/travel-with-purpose",
      },
      {
        label: "Support People-Powered Tourism",
        to: "/support-people-powered-tourism",
      },
    ],
  },
];
function Component_recovered_sr() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
    >
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
function Navbar() {
  let [e, t] = (0, React.useState)(false),
    [n, r] = (0, React.useState)({}),
    i = useLocation(),
    a = (e) => i.pathname === e,
    o = (e) => a(e.to) || e.items?.some((e) => a(e.to)),
    s = (e) => e.items.some((e) => a(e.to)),
    c = (e) => {
      r((t) => ({
        ...t,
        [e]: !t[e],
      }));
    };
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="relative flex w-full items-center py-3">
        <NavLink to="/" className="flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <img
            src={asset_nr}
            alt="Traveleye Alliance Sri Lanka"
            className="h-12 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[260px] lg:h-20 lg:max-w-[300px]"
          />
        </NavLink>
        <div className="flex-1" />
        <button
          type="button"
          aria-expanded={e}
          onClick={() => t((e) => !e)}
          className="mr-2 inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none xl:hidden"
        >
          {e ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <nav
          className="hidden items-center gap-1 pr-4 sm:pr-6 lg:pr-8 xl:flex"
          aria-label="Primary"
        >
          {recovered_ar.map((e, t) =>
            e.items ? (
              <div
                key={e.to}
                className={`group relative ${t === 0 ? "mr-2" : ""}`}
              >
                <button
                  type="button"
                  className={[
                    "inline-flex items-center gap-1 rounded-md px-2 py-2 text-center text-[1rem] font-semibold leading-none tracking-[0.01em] transition-colors",
                    o(e)
                      ? "text-[#0f3c68]"
                      : "text-[#174c84] hover:text-[#0f3c68]",
                  ].join(" ")}
                >
                  <span className="inline-flex flex-col items-center">
                    <span className="whitespace-nowrap">{e.top}</span>
                    <span className="whitespace-nowrap">{e.bottom}</span>
                  </span>
                  <Component_recovered_sr />
                </button>
                <div
                  className={[
                    "invisible absolute top-full z-50 mt-2 w-max min-w-80 max-w-[calc(100vw-2rem)] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100",
                    t === recovered_ar.length - 1
                      ? "right-0"
                      : "left-1/2 -translate-x-1/2",
                  ].join(" ")}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60">
                    {e.items.map((e) => (
                      <NavLink
                        key={e.label}
                        to={e.to}
                        className={({ isActive: t }) =>
                          [
                            "block whitespace-nowrap rounded-xl px-4 py-3 text-[1rem] font-medium leading-snug transition-colors",
                            e.indent
                              ? "relative ml-4 pl-10 text-[0.95rem]"
                              : "",
                            t
                              ? "bg-[#1C4686] text-white"
                              : "text-slate-700 hover:bg-[#1C4686] hover:text-white",
                          ].join(" ")
                        }
                      >
                        {e.child ? (
                          <span className="inline-flex items-center gap-2 whitespace-nowrap">
                            <span
                              aria-hidden="true"
                              className={[
                                "pointer-events-none absolute left-5 w-px bg-[#1C4686]",
                                e.child === "first"
                                  ? "-top-3 bottom-0"
                                  : e.child === "middle"
                                    ? "top-0 bottom-0"
                                    : "top-0 bottom-1/2",
                              ].join(" ")}
                            />
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute left-5 top-1/2 h-px w-4 -translate-y-1/2 bg-[#1C4686]"
                            />
                            <span>{e.label}</span>
                          </span>
                        ) : (
                          e.label
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={e.to}
                to={e.to}
                className={({ isActive: e }) =>
                  [
                    "inline-flex flex-col items-center rounded-md px-2 py-2 text-center text-[1rem] font-semibold leading-none tracking-[0.01em] transition-colors",
                    t === 0 ? "mr-2" : "",
                    e
                      ? "text-[#0f3c68]"
                      : "text-[#174c84] hover:text-[#0f3c68]",
                  ].join(" ")
                }
              >
                <span className="whitespace-nowrap">{e.top}</span>
                <span className="whitespace-nowrap">{e.bottom}</span>
              </NavLink>
            ),
          )}
          {recovered_or.map((e, t) => (
            <div key={e.label} className="group relative">
              <button
                type="button"
                className={[
                  "inline-flex items-center gap-1 rounded-md px-2 py-2 text-[1rem] font-semibold tracking-[0.01em] transition-colors",
                  s(e)
                    ? "text-[#0f3c68]"
                    : "text-[#174c84] hover:text-[#1C4686]",
                ].join(" ")}
              >
                {e.top && e.bottom ? (
                  <span className="inline-flex flex-col items-center leading-none">
                    <span className="whitespace-nowrap">{e.top}</span>
                    {e.middle && (
                      <span className="whitespace-nowrap">{e.middle}</span>
                    )}
                    <span className="whitespace-nowrap">{e.bottom}</span>
                  </span>
                ) : (
                  <span className="whitespace-nowrap">{e.label}</span>
                )}
                <Component_recovered_sr />
              </button>
              <div
                className={[
                  "invisible absolute top-full z-50 mt-2 w-max min-w-80 max-w-[calc(100vw-2rem)] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100",
                  t === recovered_or.length - 1
                    ? "right-0 left-auto translate-x-0"
                    : "left-1/2 -translate-x-1/2",
                ].join(" ")}
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60">
                  {e.items.map((t) => (
                    <NavLink
                      key={t.label}
                      to={t.to}
                      className={({ isActive: t }) =>
                        [
                          `block whitespace-nowrap rounded-xl px-4 text-[1rem] font-medium leading-snug transition-colors ${e.label === "About Traveleye" || e.label === "Traveleye Ecosystem" ? "py-2" : "py-3"} ${t.indent ? "ml-4" : ""}`,
                          t
                            ? "bg-[#1C4686] text-white"
                            : "text-slate-700 hover:bg-[#1C4686] hover:text-white",
                        ].join(" ")
                      }
                    >
                      {t.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        {/* <NavLink
          to="/beautiful-sri-lanka"
          aria-label="Discover Beautiful Sri Lanka"
          className="mr-3 flex-shrink-0 sm:mr-5 lg:mr-7"
        >
          <img
            src={asset_rr}
            alt="Beautiful Sri Lanka"
            className="h-9 w-auto object-contain sm:h-12 lg:h-16"
          />
        </NavLink> */}
      </div>
      {e && (
        <div className="absolute left-0 right-0 top-full z-40 max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white shadow-md sm:max-h-[calc(100dvh-7.5rem)] lg:max-h-[calc(100dvh-8.5rem)] xl:hidden">
          <div className="flex flex-col gap-1 px-3 pb-6 pt-3">
            {recovered_ar.map((e) =>
              e.items ? (
                <div key={e.to} className="mt-2">
                  <button
                    type="button"
                    onClick={() => c(`${e.top} ${e.bottom}`)}
                    className={[
                      "flex w-full items-center justify-between rounded-md px-2 py-2 text-[0.9rem] font-semibold transition-colors",
                      o(e)
                        ? "text-[#0f3c68]"
                        : "text-slate-700 hover:bg-slate-100 hover:text-[#0f3c68]",
                    ].join(" ")}
                  >
                    <span>
                      {e.top} {e.bottom}
                    </span>
                    <svg
                      className={`h-4 w-4 transition-transform ${n[`${e.top} ${e.bottom}`] ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>
                  {n[`${e.top} ${e.bottom}`] && (
                    <div className="flex flex-col">
                      {e.items.map((e) => (
                        <NavLink
                          key={e.label}
                          to={e.to}
                          onClick={() => t(false)}
                          className={({ isActive: t }) =>
                            [
                              "block rounded-md px-3 py-2 transition-colors",
                              e.indent ? "relative ml-4 pl-9 text-sm" : "",
                              t
                                ? "bg-[#1C4686] font-semibold text-white"
                                : "text-slate-600 hover:bg-[#1C4686] hover:text-white",
                            ].join(" ")
                          }
                        >
                          {e.child ? (
                            <span className="inline-flex items-center gap-2">
                              <span
                                aria-hidden="true"
                                className={[
                                  "pointer-events-none absolute left-4 w-px bg-[#1C4686]",
                                  e.child === "first"
                                    ? "-top-2 bottom-0"
                                    : e.child === "middle"
                                      ? "top-0 bottom-0"
                                      : "top-0 bottom-1/2",
                                ].join(" ")}
                              />
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute left-4 top-1/2 h-px w-4 -translate-y-1/2 bg-[#1C4686]"
                              />
                              <span
                                aria-hidden="true"
                                className="relative text-current"
                              >
                                {"\u21B3"}
                              </span>
                              <span>{e.label}</span>
                            </span>
                          ) : (
                            e.label
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={e.to}
                  to={e.to}
                  onClick={() => t(false)}
                  className={({ isActive: e }) =>
                    [
                      "block rounded-md px-2 py-2 text-[0.9rem] font-semibold transition-colors",
                      e
                        ? "text-[#0f3c68]"
                        : "text-slate-700 hover:text-[#0f3c68]",
                    ].join(" ")
                  }
                >
                  <span>
                    {e.top} {e.bottom}
                  </span>
                </NavLink>
              ),
            )}
            {recovered_or.map((e) => (
              <div key={e.label} className="mt-2">
                <button
                  type="button"
                  onClick={() => c(e.label)}
                  className={[
                    "flex w-full items-center justify-between rounded-md px-2 py-2 text-[0.9rem] font-semibold transition-colors",
                    s(e)
                      ? "text-[#0f3c68]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#0f3c68]",
                  ].join(" ")}
                >
                  <span>{e.label}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${n[e.label] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                {n[e.label] && (
                  <div className="flex flex-col">
                    {e.items.map((n) => (
                      <NavLink
                        key={n.label}
                        to={n.to}
                        onClick={() => t(false)}
                        className={({ isActive: t }) =>
                          [
                            `block rounded-md px-2 text-[0.9rem] transition-colors ${e.label === "About Traveleye" ? "py-1.5" : "py-2"} ${n.indent ? "ml-4" : ""}`,
                            t
                              ? "bg-[#1C4686] font-semibold text-white"
                              : "text-slate-600 hover:bg-[#1C4686] hover:text-white",
                          ].join(" ")
                        }
                      >
                        {n.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;
