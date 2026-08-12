import { ArrowRight, Heart, Leaf, MapPin, Sparkles } from 'lucide-react'
import beautifulSriLankaImg from '../assets/subhero/Beautiful Sri Lanka Banner.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const propositions = [
  {
    title: 'Beautiful People',
    lead: "Sri Lanka's greatest beauty is found in its people.",
    paragraphs: [
      'Warmth, kindness, hospitality, generosity, local knowledge, human connection, and the willingness to welcome and share are central to the Sri Lankan experience. A warm welcome, a shared meal, a thoughtful gesture, a local recommendation, a conversation, or the simple act of making someone feel at home can create lasting memories.',
      'Beautiful People celebrates the individuals, families, hosts, entrepreneurs, guides, artisans, farmers, communities, and tourism professionals who give destinations their character and make travellers feel welcomed, connected, and genuinely cared for. It recognises that the beauty of a destination is shaped not only by its places and facilities, but by the people who bring those places to life and the way they make visitors feel.',
    ],
  },
  {
    title: 'Beautiful Culture',
    lead: "Sri Lanka's culture is a living expression of its people and their way of life.",
    paragraphs: [
      'Traditional arts, music, dance, customs, festivals, crafts, beliefs, rituals, stories, languages, and everyday traditions create opportunities for travellers to understand and experience the cultural richness of the island.',
      'Beautiful Culture is not simply something to observe. It is something to discover, respect, experience, and share.',
    ],
  },
  {
    title: 'Beautiful Heritage',
    lead: "Sri Lanka's heritage reflects a long and remarkable history shaped by ancient civilisations, kingdoms, religious traditions, architecture, craftsmanship, knowledge, and living cultural practices.",
    paragraphs: [
      "Ancient cities, sacred sites, temples, monuments, historic places, traditional settlements, and living heritage connect today's travellers with generations of Sri Lankan history.",
      'Beautiful Heritage brings the past into meaningful connection with the present.',
    ],
  },
  {
    title: 'Beautiful Nature',
    lead: "Sri Lanka's natural beauty extends far beyond its famous landscapes.",
    paragraphs: [
      'Mountains, forests, rivers, waterfalls, beaches, oceans, wetlands, wildlife, biodiversity, agricultural landscapes, gardens, and rural environments create remarkable opportunities for exploration and discovery.',
      'Beautiful Nature also reflects the responsibility to protect, respect, and steward the natural environments that make Sri Lanka special.',
    ],
  },
  {
    title: 'Beautiful Wellness',
    lead: 'Sri Lanka offers diverse pathways to wellbeing through nature, traditional knowledge, Ayurveda, yoga, mindfulness, healthy living, movement, relaxation, retreats, and holistic experiences.',
    paragraphs: [
      "Beautiful Wellness recognises Sri Lanka's potential to offer travellers opportunities to slow down, reconnect with themselves, restore wellbeing, and experience healthier ways of living.",
      'Wellness is not only a tourism product. It can be part of the way Sri Lanka is experienced.',
    ],
  },
  {
    title: 'Beautiful Spirituality',
    lead: "Sri Lanka's spiritual character is deeply connected with its history, culture, sacred places, traditions, and ways of life.",
    paragraphs: [
      'Temples, monasteries, pilgrimage sites, sacred landscapes, religious traditions, meditation, reflection, rituals, and quiet moments create opportunities for travellers seeking spiritual discovery and personal reflection.',
      "Beautiful Spirituality respects the diversity and authenticity of Sri Lanka's spiritual traditions while creating space for reflection, connection, and discovery.",
    ],
  },
  {
    title: 'Beautiful Living',
    lead: 'Beautiful Sri Lanka can be experienced through the way people live.',
    paragraphs: [
      'Village life, family traditions, agriculture, community relationships, craftsmanship, everyday routines, connection with nature, simplicity, and the sharing of ordinary moments can become extraordinary travel experiences.',
      'Beautiful Living invites travellers to go beyond simply visiting Sri Lanka and experience aspects of life in Sri Lanka.',
      'It is about discovering the beauty that exists in everyday places, everyday people, and everyday moments.',
    ],
  },
  {
    title: 'Beautiful Food',
    lead: "Sri Lanka's food reflects the island's diverse culture, traditions, natural abundance, and ways of life.",
    paragraphs: [
      'Traditional cuisine, regional flavours, indigenous ingredients, spices, home cooking, street food, tea, seafood, sweets, cooking traditions, and shared meals offer travellers opportunities to discover Sri Lanka through taste, stories, people, and place.',
      'Beautiful Food celebrates not only what Sri Lanka eats, but the knowledge, traditions, hospitality, relationships, and cultural identity shared through food.',
    ],
  },
  {
    title: 'Beautiful Inner Peace',
    lead: "Perhaps one of Sri Lanka's most distinctive forms of beauty is the sense of peace that can emerge through time spent in its natural, cultural, and spiritual environments.",
    paragraphs: [
      'A quiet temple, a forest path, a mountain sunrise, the sound of the ocean, a meditation experience, a rural landscape, a shared conversation, or simply time away from the pressures of everyday life can create moments of stillness and reflection.',
      'Beautiful Inner Peace represents the opportunity to slow down, reconnect, reflect, and discover a deeper sense of wellbeing and connection.',
    ],
  },
  {
    title: 'Beautiful Places',
    lead: (
      <>Sri Lanka brings together an extraordinary diversity of <strong>destinations and places</strong>, each with its own character, identity, stories, landscapes, communities, and opportunities for discovery.</>
    ),
    paragraphs: [
      'From coastal towns and mountain destinations to heritage cities, sacred places, rural villages, islands, wildlife areas, agricultural landscapes, wellness destinations, and vibrant urban centres, each place contributes to the richness and diversity of the Sri Lankan tourism experience.',
      <><strong>Beautiful Places</strong> celebrates both well-known and emerging destinations, recognising the people, culture, nature, heritage, enterprises, experiences, and local character that make each destination distinctive and worth discovering.</>,
    ],
  },
]

const destinationContributors = [
  'people participate,',
  'communities share their identity and knowledge,',
  'tourism entrepreneurs develop opportunities,',
  'accommodation providers create welcoming places to stay,',
  'experience creators bring places to life,',
  'destinations coordinate their tourism ecosystem,',
  'travellers engage responsibly,',
  'and partners work together to create shared value.',
]

const frameworkActions = [
  'develop and strengthen micro and small tourism enterprises;',
  'create opportunities for youth and tourism entrepreneurs;',
  'strengthen women-led tourism enterprise opportunities;',
  'develop authentic host stays and travel experiences;',
  'strengthen destination ecosystems;',
  'connect destinations with tourism markets;',
  'develop travel corridors and international tourism partnerships;',
  'support tourism capability and enterprise development;',
  'facilitate collaboration among tourism stakeholders; and',
]

const platforms = [
  {
    title: 'Traveleye Travel Collective',
    tagline: 'Journeys Connected Through People and Places',
    body: 'Connects travellers with Sri Lanka through meaningful journeys and travel opportunities.',
  },
  {
    title: 'Traveleye Host Experiences',
    tagline: 'Crafted Through People and Place',
    body: 'Creates authentic host stays and travel experiences inspired by people and place.',
  },
  {
    title: 'Traveleye Destination Facilitation',
    tagline: 'Strengthening Destinations Through People and Stewardship',
    body: 'Develops and coordinates destination ecosystems so that tourism experiences, enterprises, visitor services, and local opportunities work together.',
  },
  {
    title: 'Traveleye Ecosystem Support',
    tagline: 'Supporting Tourism Through People and Partnerships',
    body: 'Strengthens the people, enterprises, capabilities, partnerships, and support systems that enable a stronger tourism ecosystem.',
  },
]

function SectionHeading({ children }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">{children}</h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

export default function BeautifulSriLankaBrand() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img src={beautifulSriLankaImg} alt="Beautiful Sri Lanka banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">BEAUTIFUL SRI LANKA</h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              More Than a Destination. A Beautiful Way to Experience Life.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>More Than a Destination. A Beautiful Way to Experience Life.</SectionHeading>
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Sri Lanka is beautiful in many ways — through its people, culture, heritage, nature, wellness, spirituality, hospitality, experiences, destinations, and the sense of connection and inner peace that travellers can discover across the island.</p>
            <p>For Traveleye Alliance Sri Lanka, <strong>Beautiful Sri Lanka</strong> is more than a description of the country&apos;s scenic beauty. It is a destination-brand positioning that celebrates the many dimensions of Sri Lanka and the diverse ways in which people can discover, experience, connect with, and appreciate the island.</p>
            <p>It reflects a Sri Lanka where the beauty of a destination is found not only in what travellers see, but also in the people they meet, the stories they hear, the traditions they encounter, the experiences they share, the places they stay, the nature they explore, and the sense of wellbeing, connection, and inner peace they may carry with them.</p>
            <p>Traveleye Alliance Sri Lanka adopts <strong>Beautiful Sri Lanka</strong> as its destination-brand positioning and works to strengthen a <strong>People-Powered Tourism Ecosystem</strong> that brings this destination promise to life through meaningful journeys, authentic stays and experiences, stronger destinations, empowered tourism enterprises, and lasting partnerships.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>What Makes Sri Lanka Beautiful</SectionHeading>
          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Beautiful Sri Lanka brings together ten distinctive destination propositions that reflect the many ways in which the island can be discovered, experienced, and remembered. These propositions go beyond the visual beauty of landscapes to embrace the people, culture, heritage, nature, wellness, spirituality, living, food, inner peace, and places that give Sri Lanka its unique character.</p>
            <p>Together, they provide a foundation for developing memorable stays and meaningful experiences that allow travellers to connect more deeply with Sri Lanka and its people and places.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {propositions.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-lg font-bold text-[#1f4f93]">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 font-semibold leading-7 text-[#172544]">{item.lead}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base">
                  {item.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-5xl text-center text-xl font-bold leading-8 text-[#1f4f93]">
            Together, these interconnected destination propositions create opportunities for memorable stays and meaningful experiences that bring the beauty of Sri Lanka to life.
          </p>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-[#1f4f93] px-6 py-8 text-center text-white shadow-lg sm:px-10">
            <p className="text-2xl font-bold">Beautiful Sri Lanka</p>
            <p className="mt-2 text-xl font-bold sm:text-2xl">Beautiful People. Beautiful Places. Beautiful Experiences.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading>Beauty Beyond What We See</SectionHeading>
          <div className="mt-6 space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Beautiful Sri Lanka is not limited to visual beauty.</p>
            <p>It is about <strong>what people see, what they experience, what they feel, what they learn, and what they take home with them.</strong></p>
            <div className="my-8 grid gap-3 sm:grid-cols-2">
              {['A beautiful destination can create beautiful memories.', 'A beautiful encounter can create a lasting connection.', 'A beautiful experience can change a perspective.', 'A beautiful place can create a moment of peace.'].map((line) => (
                <p key={line} className="rounded-xl border-l-4 border-[#c28a5b] bg-[#fcfbf7] px-5 py-4 font-medium text-[#172544]">{line}</p>
              ))}
            </div>
            <p>And a beautiful journey can create a deeper understanding between people and places.</p>
            <p>This is why Beautiful Sri Lanka looks beyond attractions and destinations to the complete human experience of travel.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>From Beautiful Sri Lanka to Memorable Stays and Meaningful Experiences</SectionHeading>
          <div className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Traveleye Alliance Sri Lanka believes that Sri Lanka&apos;s destination potential is not created by attractions alone.</p>
            <p className="mt-4 font-semibold text-[#172544]">It emerges when:</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {destinationContributors.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#c28a5b]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">Through this approach, the beauty of Sri Lanka can become more accessible, authentic, connected, and beneficial to the people and places that make the destination what it is.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading>Beautiful Sri Lanka Through People-Powered Tourism</SectionHeading>
          <div className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p className="text-center text-xl font-bold text-[#1f4f93]">Beautiful Sri Lanka is the destination promise.</p>
            <p className="mt-3 text-center text-xl font-bold text-[#1f4f93]">People-Powered Tourism is the approach through which Traveleye Alliance Sri Lanka seeks to strengthen and bring that promise to life.</p>
            <p className="mt-5 text-center">The People-Powered Tourism Framework provides the strategic foundation for developing and strengthening the tourism ecosystem through people, places, partnerships, enterprise development, destination stewardship, meaningful travel, and shared value.</p>
            <p className="mt-4 font-semibold text-[#172544]">Through the Framework, Traveleye Alliance Sri Lanka works to:</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {frameworkActions.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#c28a5b]" />{item}</li>
              ))}
              <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#c28a5b]" /><span>create lasting value for <strong>People, Places, Partnerships, and Prosperity</strong>.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>Bringing Beautiful Sri Lanka to Life</SectionHeading>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">The Traveleye ecosystem brings different dimensions of Beautiful Sri Lanka together through its operational platforms.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {platforms.map((platform, index) => {
              const icons = [MapPin, Heart, Leaf, Sparkles]
              const Icon = icons[index]
              return (
                <article key={platform.title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-black sm:text-2xl">{platform.title}</h3>
                  <p className="mt-2 font-bold text-[#172544]">{platform.tagline}</p>
                  <p className="mt-4 text-sm leading-7 text-[#55636a] sm:text-base">{platform.body}</p>
                </article>
              )
            })}
          </div>
          <p className="mx-auto mt-9 max-w-5xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">Together, these platforms help transform the idea of Beautiful Sri Lanka into experiences that travellers can discover and communities can benefit from.</p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading>A Sri Lanka Worth Discovering, Experiencing and Sharing</SectionHeading>
          <div className="mt-6 space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Beautiful Sri Lanka is about more than attracting visitors.</p>
            <p>It is about creating a destination where:</p>
            <p>It is about creating a destination where people are valued, places are respected, culture and heritage are celebrated, nature is protected, wellness and spirituality are embraced, living traditions and food culture are valued, inner peace can be discovered, enterprises can prosper, and partnerships create shared value.</p>
            <p>Through this destination-brand positioning, Traveleye Alliance Sri Lanka seeks to contribute to a Sri Lanka that is beautiful to discover, beautiful to experience, beautiful to live, and valuable to the people and places that call it home.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EEF4FA] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">Our Destination Promise</p>
          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">Beautiful Sri Lanka</h2>
          <p className="mt-4 text-lg font-bold text-[#172544] sm:text-2xl">Beautiful People. Beautiful Places. Beautiful Experiences.</p>
          <p className="mx-auto mt-7 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">A Sri Lanka where the beauty of people and place comes together through culture, heritage, nature, wellness, spirituality, living, food, meaningful journeys, memorable stays, and moments of inner peace.</p>
          <p className="mx-auto mt-6 max-w-4xl text-sm font-bold leading-7 text-[#1f4f93] sm:text-base sm:leading-8">Traveleye Alliance Sri Lanka is committed to helping bring that beauty to life through a People-Powered Tourism Ecosystem.</p>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
