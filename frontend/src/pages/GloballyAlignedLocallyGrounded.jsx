// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import asset_Vd from "../assets/ecosystem/5. People-Powered Tourism Global Alignment.jpg";
import { Droplets } from "lucide-react";
import { Utensils } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { Palette } from "lucide-react";
import { Leaf } from "lucide-react";
import { Users } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { Sprout } from "lucide-react";
import { Landmark } from "lucide-react";
import { Handshake } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Earth } from "lucide-react";
import ExploreEcosystem from "../components/ExploreEcosystem.jsx";
import FooterLinks from "../components/FooterLinks.jsx";
const recovered_Hd = [
  {
    icon: Droplets,
    title: "Traditional Water & Resource Management",
    body: "Ancient tank systems, irrigation practices, water management, and approaches to living with and managing natural resources demonstrate generations of knowledge about water, agriculture, landscapes, and community life.",
  },
  {
    icon: Utensils,
    title: "Traditional Agriculture & Food Knowledge",
    body: "Indigenous agricultural practices, traditional crops, seasonal knowledge, food preparation, and methods of preserving fruits, vegetables, and other foods reflect generations of knowledge developed around local resources and ways of life.",
  },
  {
    icon: HeartHandshake,
    title: "Hela Wedakama & Traditional Wellness Knowledge",
    body: "Hela Wedakama and related traditional knowledge of herbs, plants, wellness, healing, and healthy living represent an important part of Sri Lanka's inherited knowledge and cultural heritage.",
  },
  {
    icon: Palette,
    title: "Traditional Crafts, Skills & Creativity",
    body: "Craftsmanship, traditional skills, materials, artistic practices, and knowledge passed from generation to generation provide opportunities to connect people, culture, creativity, and place.",
  },
  {
    icon: Leaf,
    title: "Knowledge of Nature & Biodiversity",
    body: "Generations of knowledge about plants, forests, wildlife, landscapes, seasons, and natural environments provide valuable perspectives for nature-based tourism, destination development, and responsible interaction with the environment.",
  },
  {
    icon: Users,
    title: "Community Knowledge & Cultural Practices",
    body: "Traditional ways of working together, sharing knowledge, supporting one another, celebrating culture, and maintaining relationships within communities reflect the social foundations of Sri Lankan life.",
  },
];
const recovered_Ud = [
  {
    icon: Sprout,
    title: "Sustainable Tourism",
    body: "Encouraging tourism development that creates lasting economic, social, cultural, and environmental value while supporting the long-term wellbeing of destinations.",
  },
  {
    icon: Leaf,
    title: "Regenerative Tourism",
    body: "Exploring approaches that seek not only to reduce negative impacts, but also to contribute positively to the people, places, cultures, and natural systems connected with tourism.",
  },
  {
    icon: HeartHandshake,
    title: "Responsible Tourism",
    body: "Encouraging responsible behaviour, meaningful participation, respect for local communities and cultures, and greater awareness of tourism's impacts.",
  },
  {
    icon: Landmark,
    title: "Destination Stewardship",
    body: "Promoting shared responsibility for the long-term wellbeing, identity, heritage, culture, communities, and natural assets of destinations.",
  },
  {
    icon: Handshake,
    title: "Community-Centred Development",
    body: "Recognising the importance of local participation, inclusion, local knowledge, enterprise development, and shared opportunities in tourism development.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Inclusive Tourism Entrepreneurship",
    body: "Supporting opportunities for micro and small enterprises, entrepreneurs, women, youth, local communities, and other participants across the tourism ecosystem.",
  },
  {
    icon: Lightbulb,
    title: "Tourism Innovation & Digital Transformation",
    body: "Embracing innovation, technology, digital solutions, and new approaches that can strengthen tourism enterprises, connectivity, competitiveness, and ecosystem development.",
  },
  {
    icon: Earth,
    title: "Resilient Tourism Development",
    body: "Encouraging tourism enterprises and destinations to build the capacity to adapt to changing economic, social, environmental, technological, and market conditions.",
  },
];
const recovered_Wd = [
  [
    "SDG 1 \u2014 No Poverty",
    "Supporting livelihood opportunities and stronger micro and small tourism enterprises.",
  ],
  [
    "SDG 5 \u2014 Gender Equality",
    "Encouraging women's participation and entrepreneurship in tourism.",
  ],
  [
    "SDG 8 \u2014 Decent Work & Economic Growth",
    "Supporting entrepreneurship, enterprise development, employment, and inclusive economic opportunities.",
  ],
  [
    "SDG 11 \u2014 Sustainable Cities & Communities",
    "Strengthening destinations, local participation, heritage, and place-based development.",
  ],
  [
    "SDG 12 \u2014 Responsible Consumption & Production",
    "Encouraging responsible tourism practices and more sustainable use of resources.",
  ],
  [
    "SDG 13 \u2014 Climate Action",
    "Supporting greater awareness, resilience, and climate-responsive tourism development.",
  ],
  [
    "SDG 14 \u2014 Life Below Water",
    "Recognising the importance of protecting marine and coastal environments connected with tourism.",
  ],
  [
    "SDG 15 \u2014 Life on Land",
    "Supporting responsible relationships with terrestrial ecosystems, biodiversity, and natural destinations.",
  ],
];
const recovered_Gd = [
  "Meaningful Journeys",
  "Place-Inspired Stays",
  "People & Place-Inspired Experiences",
  "Micro & Small Tourism Enterprises",
  "Tourism Destinations",
  "Travel Corridors",
  "Tourism Partnerships",
  "Joint Ventures",
  "Tourism Programmes & Projects",
  "Ecosystem Initiatives",
];
function Component_recovered_Kd({ eyebrow: e, title: t }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {e && (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#c28a5b]">
          {e}
        </p>
      )}
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {t}
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  );
}
function Component_recovered_qd({ children: e }) {
  return (
    <div className="mx-auto mt-7 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
      {e}
    </div>
  );
}
function Component_recovered_Jd({ items: e }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {e.map(({ icon: Component_e, title: t, body: n }) => (
        <article
          key={t}
          className="rounded-2xl border border-[#e8eef2] bg-white p-6 shadow-sm sm:p-7"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Component_e className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">
            {t}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#55636a] sm:text-base">
            {n}
          </p>
        </article>
      ))}
    </div>
  );
}
function Component_recovered_Yd({
  items: e,
  compact: t = false,
  compactItems: n = [],
}) {
  return (
    <div
      className={`mx-auto mt-8 flex flex-col items-center ${t ? "max-w-md" : "max-w-3xl"}`}
    >
      {e.map((t, r) => (
        <div key={t} className="contents">
          <div
            className={`w-full rounded-xl border border-[#dce7f2] bg-white px-5 py-4 text-center font-bold text-[#1f4f93] shadow-sm ${n.includes(t) ? "max-w-md" : ""}`}
          >
            {t}
          </div>
          {r < e.length - 1 && (
            <ArrowDown
              className="my-2 h-5 w-5 text-[#c28a5b]"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
function GloballyAlignedLocallyGrounded() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <img
          src={asset_Vd}
          alt="People-Powered Tourism Local and Global Alignment"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1
              style={{
                fontFamily:
                  '"League Spartan", system-ui, -apple-system, sans-serif',
              }}
              className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">People-Powered Tourism</span>
              <span className="block">Local &amp; Global Alignment</span>
            </h1>
            <p className="mt-4 text-sm font-semibold text-white/95 sm:text-base lg:text-lg">
              {"Locally Grounded. Globally Aligned."}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Component_recovered_Kd title="Locally Grounded. Globally Aligned." />
        <Component_recovered_qd>
          <p>
            {"The "}
            <strong>{"People-Powered Tourism Framework"}</strong>
            {
              " is grounded in Sri Lanka while connected to contemporary global thinking on tourism and sustainable development."
            }
          </p>
          <p>
            {
              "It recognises that meaningful tourism development can draw from both "
            }
            <strong>
              {
                "the knowledge and wisdom developed by Sri Lankan people across generations"
              }
            </strong>
            {" and "}
            <strong>
              {
                "evolving international thinking, practices, and development priorities"
              }
            </strong>
            {"."}
          </p>
          <p>
            {
              "Together, these perspectives provide a strong foundation for developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem."
            }
          </p>
        </Component_recovered_qd>
      </section>
      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Component_recovered_Kd
            eyebrow="Locally Grounded"
            title="Rooted in Sri Lanka's People, Places, Knowledge and Wisdom"
          />
          <Component_recovered_qd>
            <p>
              {
                "Sri Lanka's tourism future can be strengthened by recognising the knowledge, wisdom, traditions, practices, and lived experiences that have evolved across generations."
              }
            </p>
            <p>
              {
                "Long before many contemporary concepts of sustainability, resilience, resource conservation, community participation, and responsible living became internationally recognised, Sri Lankan people developed and practised approaches shaped by their relationship with "
              }
              <strong>
                {
                  "land, water, nature, agriculture, health, food, culture, community, and place"
                }
              </strong>
              {"."}
            </p>
            <p>
              {
                "This inherited knowledge forms an important part of Sri Lanka's identity and can provide inspiration and practical opportunities for contemporary tourism development."
              }
            </p>
            <p>
              {"It can be found in many aspects of Sri Lankan life, including:"}
            </p>
          </Component_recovered_qd>
          <Component_recovered_Jd items={recovered_Hd} />
          <Component_recovered_qd>
            <p>
              {
                "This knowledge is not simply something to preserve as part of the past."
              }
            </p>
            <p>
              {"It can become a source of "}
              <strong>
                {
                  "meaningful journeys, stays, people and place-inspired experiences, tourism enterprises, destination development, learning opportunities, and new partnerships"
                }
              </strong>
              {
                " \u2014 when developed respectfully and with the meaningful participation of the people who carry and share that knowledge."
              }
            </p>
          </Component_recovered_qd>
        </div>
      </section>
      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Component_recovered_Kd title="From Inherited Knowledge to New Tourism Opportunities" />
          <Component_recovered_Yd
            compact={true}
            items={[
              "Knowledge & Wisdom",
              "People & Places",
              "Journeys \u2022 Stays \u2022 Experiences",
              "Tourism Enterprises",
              "Destination Development",
              "People-Powered Tourism Ecosystem",
            ]}
          />
          <Component_recovered_qd>
            <p>
              {"The "}
              <strong>{"People-Powered Tourism Framework"}</strong>
              {
                " therefore seeks to recognise and connect Sri Lanka's own knowledge, wisdom, people, places, and lived experiences with new opportunities for tourism development."
              }
            </p>
          </Component_recovered_qd>
        </div>
      </section>
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Component_recovered_Kd
            eyebrow="Globally Aligned"
            title="Connecting with Contemporary Global Tourism Thinking"
          />
          <Component_recovered_qd>
            <p>
              {"While firmly rooted in Sri Lanka, the "}
              <strong>{"People-Powered Tourism Framework"}</strong>
              {
                " is also informed by contemporary international thinking and evolving approaches to tourism and sustainable development."
              }
            </p>
            <p>
              {
                "It recognises the value of learning from global knowledge, international experience, emerging practices, and internationally recognised development priorities."
              }
            </p>
            <p>{"The Framework is informed by concepts including:"}</p>
          </Component_recovered_qd>
          <Component_recovered_Jd items={recovered_Ud} />
        </div>
      </section>
      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Component_recovered_Kd title="Aligned with Global Development Priorities" />
          <Component_recovered_qd>
            <p>
              {"The "}
              <strong>{"People-Powered Tourism Framework"}</strong>
              {" is also aligned with the "}
              <strong>
                {"United Nations Sustainable Development Goals (SDGs)"}
              </strong>
              {
                " and their broader vision for inclusive, sustainable, and resilient development."
              }
            </p>
            <p>
              {
                "Its contribution is particularly connected with areas including:"
              }
            </p>
          </Component_recovered_qd>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {recovered_Wd.map(([e, t]) => (
              <article
                key={e}
                className="rounded-2xl border border-[#e8eef2] bg-white p-5 shadow-sm"
              >
                <p className="text-sm leading-7 text-[#55636a] sm:text-base">
                  <strong className="text-black">{e}</strong>
                  <br />
                  {t}
                </p>
              </article>
            ))}
          </div>
          <Component_recovered_qd>
            <p>
              {
                "Global perspectives therefore provide a wider reference point for the Framework while allowing its application to remain "
              }
              <strong>
                {
                  "relevant to Sri Lanka's people, places, enterprises, culture, and local realities"
                }
              </strong>
              {"."}
            </p>
          </Component_recovered_qd>
        </div>
      </section>
      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Component_recovered_Kd
            eyebrow="Connecting Local Wisdom with Global Thinking"
            title="Bringing Sri Lankan Knowledge and Contemporary Global Thinking Together"
          />
          <Component_recovered_qd>
            <p>
              {"The "}
              <strong>{"People-Powered Tourism Framework"}</strong>
              {
                " does not view local knowledge and global knowledge as separate or competing approaches."
              }
            </p>
            <p>{"Instead, it seeks to connect them."}</p>
            <p>
              {
                "Sri Lanka's inherited knowledge, wisdom, cultural practices, and lived experiences can provide valuable foundations for contemporary tourism development, while global thinking can offer new perspectives, knowledge, tools, practices, and opportunities to strengthen and evolve those foundations."
              }
            </p>
            <p>
              {"This creates an approach that is "}
              <strong>
                {
                  "locally grounded without being inward-looking, and globally aligned without losing Sri Lanka's own identity."
                }
              </strong>
            </p>
          </Component_recovered_qd>
          <h3 className="mt-10 text-center text-2xl font-bold text-[#1f4f93]">
            {"Local Knowledge + Global Thinking"}
          </h3>
          <Component_recovered_Yd
            compactItems={[
              "People-Powered Tourism Approaches",
              "Practical Tourism Development",
            ]}
            items={[
              "Sri Lankan Knowledge & Wisdom + Contemporary Global Tourism Thinking",
              "People-Powered Tourism Approaches",
              "Practical Tourism Development",
              "Stronger Enterprises \u2022 Resilient Destinations \u2022 Meaningful Experiences \u2022 Connected Partnerships",
            ]}
          />
          <Component_recovered_qd>
            <p>
              {
                "Through this connection, the Framework can help transform knowledge, skills, culture, traditions, places, and ideas into meaningful opportunities for "
              }
              <strong>
                {"people, enterprises, destinations, travellers, and partners"}
              </strong>
              {"."}
            </p>
            <p>
              {"It provides a foundation for developing and strengthening:"}
            </p>
          </Component_recovered_qd>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recovered_Gd.map((e) => (
              <div
                key={e}
                className={`rounded-xl border border-[#dce7f2] bg-white px-5 py-4 text-center font-bold text-[#1f4f93] shadow-sm ${e === "Ecosystem Initiatives" ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)] lg:col-span-1 lg:col-start-2 lg:w-full" : ""}`}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Component_recovered_Kd title="A Framework Rooted in Sri Lanka, Connected to the World" />
          <Component_recovered_qd>
            <p>
              {"The "}
              <strong>{"People-Powered Tourism Framework"}</strong>
              {
                " brings together local knowledge and global perspectives to create a tourism development approach that is relevant to Sri Lanka's present while remaining open to learning, innovation, collaboration, and continuous evolution."
              }
            </p>
            <p>
              <strong>
                {
                  "The Framework does not simply bring global sustainability thinking to Sri Lanka. It connects contemporary global thinking with knowledge and wisdom that Sri Lankan people have developed and practised across generations."
                }
              </strong>
            </p>
            <p>
              {"Through this approach, the Framework remains "}
              <strong>{"Locally Grounded. Globally Aligned"}</strong>
              {". This provides an important foundation for the "}
              <strong>{"Traveleye People-Powered Tourism Ecosystem"}</strong>
              {
                ", supporting the development and strengthening of micro and small tourism enterprises and creating lasting value for:"
              }
            </p>
            <p className="text-xl font-bold text-[#1f4f93] sm:text-2xl">
              <strong>
                {"People \u2022 Places \u2022 Partnerships \u2022 Prosperity"}
              </strong>
            </p>
          </Component_recovered_qd>
        </div>
      </section>
      <section className="bg-[#FCFBF8] px-4 py-12 text-center text-[#1f4f93] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xl font-bold sm:text-2xl">
            {"Locally Grounded. Globally Aligned. People-Powered."}
          </p>
          <p className="mt-4 text-base font-medium sm:text-xl">
            {"Building a People-Powered Tourism Ecosystem for Sri Lanka."}
          </p>
        </div>
      </section>
      <ExploreEcosystem />
      <FooterLinks />
    </main>
  );
}
export default GloballyAlignedLocallyGrounded;
