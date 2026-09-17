// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import * as JSXRuntime from "react/jsx-runtime";
import { Sprout } from "lucide-react";
import { Earth } from "lucide-react";
const recovered_xa = [
  {
    icon: Sprout,
    label: "People-Powered Tourism Guiding Principles",
    title:
      "The Values That Guide the Traveleye People-Powered Tourism Framework",
    paragraphs: [
      <JSXRuntime.Fragment>
        {"The "}
        <strong>{"People-Powered Tourism Framework"}</strong>
        {" is built upon a shared set of "}
        <strong>{"Guiding Principles"}</strong>
        {
          " that shape how tourism is planned, developed, implemented, and strengthened across Sri Lanka's tourism ecosystem. These principles encourage tourism that is authentic, inclusive, participatory, collaborative, innovative, responsible, and grounded in long-term stewardship."
        }
      </JSXRuntime.Fragment>,
      <JSXRuntime.Fragment>
        {
          "Together, they guide decision-making, strengthen partnerships, inspire meaningful participation, and promote shared responsibility, helping create lasting economic, social, cultural, and environmental value for "
        }
        <strong>{"People"}</strong>
        {", "}
        <strong>{"Places"}</strong>
        {", "}
        <strong>{"Partnerships"}</strong>
        {", and "}
        <strong>{"Prosperity"}</strong>
        {"."}
      </JSXRuntime.Fragment>,
    ],
    cta: "Explore the People-Powered Tourism Guiding Principles",
    to: "/guiding-principles",
    image:
      "/assets/People-Powered%20Tourism%20Guiding%20Principles-YeP2Cqv-.jpg",
    imageAlt: "People discussing the People-Powered Tourism framework",
    imageSide: "left",
    background: "bg-[#eef4fa]",
  },
  {
    icon: Earth,
    label: "People-Powered Tourism Local & Global Alignment",
    title: "Locally Grounded. Globally Aligned.",
    paragraphs: [
      <JSXRuntime.Fragment>
        {"The People-Powered Tourism Framework is grounded in "}
        <strong>
          {
            "Sri Lanka's long heritage of practices that reflect principles of sustainability, stewardship, resource conservation, community participation, and living in harmony with nature"
          }
        </strong>
        {
          " \u2014 from traditional water management and agriculture to food preservation, Hela Wedakama, traditional crafts, indigenous knowledge, and other practices passed from generation to generation. This knowledge and wisdom can also inspire contemporary tourism journeys, host stays, experiences, enterprise development, and destination development when shared and applied respectfully."
        }
      </JSXRuntime.Fragment>,
      <JSXRuntime.Fragment>
        {"Building upon this local foundation, the "}
        <strong>
          {
            "People-Powered Tourism Framework is also informed by internationally recognised tourism concepts"
          }
        </strong>
        {
          ", including sustainable tourism, regenerative tourism, responsible tourism, destination stewardship, and community-centred development. While engaging with contemporary global thinking, the Framework remains firmly grounded in Sri Lanka's Beautiful People, places, culture, local realities, and generations of traditional knowledge and wisdom."
        }
      </JSXRuntime.Fragment>,
    ],
    belowTitle: "Connecting Local Wisdom with Global Thinking",
    belowParagraphs: [
      "The Framework does not simply bring global sustainability thinking to Sri Lanka. It connects contemporary global thinking with knowledge and wisdom that Sri Lankan people have developed and practised across generations.",
      <JSXRuntime.Fragment>
        {"Aligned with the "}
        <strong>{"United Nations Sustainable Development Goals (SDGs)"}</strong>
        {
          ", the Framework provides a connected and adaptable approach to developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem. By encouraging participation, stewardship, collaboration, innovation, and shared value creation, it contributes to stronger tourism enterprises, resilient destinations, and lasting value for "
        }
        <strong>{"People"}</strong>
        {", "}
        <strong>{"Places"}</strong>
        {", "}
        <strong>{"Partnerships"}</strong>
        {", and "}
        <strong>{"Prosperity"}</strong>
        {"."}
      </JSXRuntime.Fragment>,
    ],
    cta: "Explore the People-Powered Tourism Local & Global Alignment",
    to: "/globally-aligned-locally-grounded",
    image: "/assets/People-Powered%20Tourism%20Global%20Alignment-D5mABAMA.jpg",
    imageAlt: "Traveleye People-Powered Tourism framework overview",
    imageSide: "right",
    background: "bg-white",
  },
];
function Component_recovered_Sa({ section: e }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      <div
        className="absolute -bottom-6 -left-5 h-32 w-32 rounded-full bg-[#dfe7f3] opacity-75 blur-sm"
        aria-hidden="true"
      />
      <div
        className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#eef4ff]"
        aria-hidden="true"
      />
      <div className="relative aspect-[1.1/1] overflow-hidden rounded-sm">
        <img
          src={e.image}
          alt={e.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
function Component_recovered_Ca({ section: e }) {
  let Component_t = e.icon;
  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      <div className="home-section-eyebrow justify-center">
        <Component_t className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="leading-tight">{e.label}</span>
      </div>
      <h2 className="mt-5 text-[1.85rem] font-semibold leading-tight tracking-normal text-[#172544] sm:text-[2.1rem] lg:text-[2.45rem]">
        {e.title}
      </h2>
      <div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#275CAD]" />
      {e.subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-[1.08rem] font-semibold leading-7 text-[#214f95] sm:text-[1.18rem]">
          {e.subtitle}
        </p>
      )}
    </div>
  );
}
function Component_recovered_wa({ section: e }) {
  return (
    <div className="mx-auto w-full max-w-[560px] text-center lg:mx-0 lg:text-left">
      <div className="mt-6 space-y-5 text-[1.02rem] leading-7 text-[#6b7894] sm:text-[1.08rem] sm:leading-8">
        {e.paragraphs.map((t, n) => (
          <p key={`${e.label}-${n}`}>{t}</p>
        ))}
      </div>
      {!e.belowParagraphs && (
        <div className="mt-7 flex justify-center lg:justify-start">
          <a
            href={e.to}
            className="inline-flex w-full justify-center rounded-lg bg-[#275CAD] px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
          >
            {e.cta}
          </a>
        </div>
      )}
    </div>
  );
}
function HomeFrameworkSections() {
  return (
    <div className="w-full">
      {recovered_xa.map((e) => {
        let t = e.imageSide === "left";
        return (
          <section
            key={e.label}
            className={`w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 ${e.background}`}
          >
            <article className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="lg:col-span-2">
                <Component_recovered_Ca section={e} />
              </div>
              {t ? (
                <JSXRuntime.Fragment>
                  <Component_recovered_Sa section={e} />
                  <Component_recovered_wa section={e} />
                </JSXRuntime.Fragment>
              ) : (
                <JSXRuntime.Fragment>
                  <div className="lg:order-2">
                    <Component_recovered_Sa section={e} />
                  </div>
                  <div className="lg:order-1">
                    <Component_recovered_wa section={e} />
                  </div>
                </JSXRuntime.Fragment>
              )}
              {e.belowParagraphs && (
                <div className="lg:order-3 lg:col-span-2">
                  <div className="mx-auto max-w-6xl text-center">
                    <h3 className="text-xl font-semibold text-[#172544] sm:text-2xl">
                      {e.belowTitle}
                    </h3>
                    <div className="mx-auto mt-3 h-0.5 w-20 rounded bg-[#c28a5b]" />
                    <div className="mt-6 space-y-5 text-[1.02rem] leading-7 text-[#6b7894] sm:text-[1.08rem] sm:leading-8">
                      {e.belowParagraphs.map((t, n) => (
                        <p key={`${e.label}-below-${n}`}>{t}</p>
                      ))}
                    </div>
                    <div className="mt-7 flex justify-center">
                      <a
                        href={e.to}
                        className="inline-flex w-full justify-center rounded-lg bg-[#275CAD] px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#224a96] sm:w-auto"
                      >
                        {e.cta}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </section>
        );
      })}
    </div>
  );
}
export default HomeFrameworkSections;
