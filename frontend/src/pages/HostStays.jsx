import { Binoculars, BriefcaseBusiness, HeartPulse, Home, House, Landmark, Leaf, Lightbulb, MapPinned, Mountain, Network, Sparkles, Sprout, Tent, Trees, UsersRound, Waves } from 'lucide-react'
import heroImg from '../assets/subhero/Develop Place Inspired Stays.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const supportedGroups = ['Aspiring Stay Developers', 'Accommodation Entrepreneurs', 'Existing Accommodation Providers', 'Hosts & Host Teams', 'Families & Local Enterprise Owners', 'Community Organisations', 'Landowners', 'Tourism Investors', 'Development Organisations', 'Strategic Partners']
const collections = [
  ['Earth HostNests', 'Earth-inspired stays using natural and locally appropriate materials, contemporary design and traditional building knowledge.'],
  ['Safari HostNests', 'Nature- and wildlife-inspired stays designed to create immersive experiences within distinctive natural landscapes, supported by people with local knowledge and connection to the environment.'],
  ['Forest HostNests', 'Stays that connect guests closely with forests, trees, wildlife and nature through sensitive, landscape-integrated design and authentic local hospitality.'],
  ['Coastal HostNests', "Distinctive stays inspired by Sri Lanka’s beaches, coastlines, lagoons, fishing communities and coastal way of life."],
  ['Village HostNests', 'Stays connected with rural landscapes, village life, agriculture, local communities and everyday Sri Lankan living.'],
  ['Heritage HostNests', 'Stays inspired by historic buildings, traditional architecture, cultural heritage and the stories of the people and places that shaped them.'],
  ['Wellness HostNests', 'Stays designed around wellness, nature, Ayurveda, relaxation, mindfulness and personal rejuvenation, supported by people with relevant knowledge and skills.'],
  ['Glamping HostNests', 'Distinctive outdoor stays including domes, safari tents, tents, pods, cabins and other contemporary forms of nature-based accommodation.'],
  ['Other People & Place-Inspired HostNest Concepts', 'New HostNest concepts can be developed where the character, people, resources, opportunities and aspirations of a location call for something different.'],
]
const collectionIcons = [Mountain, Binoculars, Trees, Waves, House, Landmark, HeartPulse, Tent, Lightbulb]
const developmentApproaches = [
  ['Permanent HostNests', 'Land + Investment + Long-Term Development', 'Where the landowner is also the developer or long-term investor, permanent accommodation can be developed according to the character and potential of the land.', 'Examples may include villas, boutique properties, cottages, permanent glamping structures, farm stays, nature stays, heritage stays and other forms of long-term accommodation.', 'The accommodation can become a long-term asset connected to the land and destination, with its design, hosting and development shaped by the identity, character and potential of the place.'],
  ['Relocatable HostNests', 'Land + Investment + Flexible Development', 'Where the landowner provides the land and a separate investor provides the accommodation investment, relocatable or modular accommodation can provide a more flexible development and investment approach.', 'Examples may include domes, safari tents, tents, container rooms, modular cabins, pods and other modular or relocatable structures.', 'Where an agreed land-use or commercial arrangement ends, accommodation assets may potentially be dismantled, transported, relocated and re-established at another suitable location, where their design and installation permit relocation and subject to applicable agreements, permits and site requirements.'],
]
const sustainability = ['Responsible resource management', 'Environmental stewardship', 'Community participation', 'Cultural preservation', 'Thoughtful development', 'Sustainable business practices']
const opportunities = ['Exploring a New Stay Concept', 'Transforming an Existing Property', 'Developing a Distinctive Accommodation Business', 'Becoming a Host', 'Joining a Host Team', 'Seeking a Land or Investment Partnership', 'Considering a Powered by Traveleye HostNest Property']

function Section({ title, icon: Icon, children, tone = 'white' }) {
  return <section className={`${tone === 'blue' ? 'bg-[#eef4fa]' : tone === 'warm' ? 'bg-[#fcfbf8]' : 'bg-white'} px-4 py-12 sm:px-6 sm:py-16 lg:px-8`}>
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight text-[#1f4f93] sm:text-4xl"><Icon className="h-8 w-8 shrink-0" aria-hidden="true" />{title}</h2>
        <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      </div>
      <div className="mx-auto mt-7 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
    </div>
  </section>
}
function Cards({ items }) {
  return <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(([title, description], index) => { const Icon = collectionIcons[index]; return <article key={title} className="rounded-xl border border-[#dbe5f0] bg-white p-5 text-left shadow-sm"><span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe7f3] text-[#1f4f93]"><Icon className="h-6 w-6" aria-hidden="true" /></span><h3 className="text-lg font-bold text-[#1f4f93]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#475569]">{description}</p></article> })}</div>
}
function Chips({ items }) {
  return <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">{items.map(item => <span key={item} className="rounded-full border border-[#dbe5f0] bg-white px-4 py-2 text-sm font-medium text-[#1f4f93] shadow-sm">{item}</span>)}</div>
}
function Statement({ children }) {
  return <p className="mx-auto !mt-8 max-w-4xl text-center text-lg font-bold text-[#1f4f93] sm:text-xl">{children}</p>
}

export default function HostStays() {
  return <main className="flex flex-col bg-white text-slate-900">
    <section className="relative flex min-h-[42vh] items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
      <img src={heroImg} alt="Place-inspired accommodation" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20 text-center text-white">
        <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-3xl font-extrabold uppercase leading-none sm:text-5xl">Traveleye HostNest</h1>
        <p className="mt-5 text-lg font-bold sm:text-2xl">Creating Distinctive Stays Through People and Place</p>
        <p className="mt-2 text-sm font-semibold sm:text-base">People &amp; Place-Inspired Accommodation Development</p>
      </div>
    </section>

    <Section title="Creating Distinctive Places Where People, Hospitality and Place Come Together" icon={Home}>
      <p>A memorable stay is more than comfortable accommodation.</p>
      <p>It is shaped by the people who welcome the traveller, the character of the place, its culture and traditions, its stories and landscapes, and the unique ways of life that make every destination different.</p>
      <p><strong>Traveleye HostNest</strong> is the accommodation development platform of <strong>Traveleye Alliance Sri Lanka</strong>, created to develop distinctive stays through people and place, while supporting the development and strengthening of micro and small accommodation enterprises.</p>
      <p>As part of the <strong>People-Powered Tourism Ecosystem</strong>, Traveleye HostNest creates opportunities for Stay Developers, Hosts, Host Teams, entrepreneurs, families, communities, landowners, investors and tourism enterprises to develop accommodation that is distinctive, meaningful and connected to its place.</p>
      <p>Whether developing a boutique villa, eco stay, heritage property, farm stay, retreat, glamping site or another accommodation concept, every HostNest development seeks to bring together:</p>
      <Statement>People + Place + Hospitality + Experience</Statement>
      <p>to create a stay that feels genuinely connected to its destination.</p>
    </Section>

    <Section title="Our Purpose" icon={Sprout} tone="blue"><p>To develop and strengthen micro and small accommodation enterprises by creating distinctive people-and-place-inspired stays that celebrate local identity, empower Hosts, strengthen tourism enterprises, enrich visitor experiences and contribute to sustainable destination development.</p></Section>

    <Section title="Who We Support" icon={UsersRound}>
      <p>We work with people and organisations interested in developing, strengthening or transforming distinctive accommodation, including:</p>
      <Chips items={supportedGroups} />
      <p>We also support diverse accommodation concepts, from villas and boutique hotels to eco stays, heritage properties, tree houses, farm stays, retreats, camping, glamping and other distinctive forms of accommodation.</p>
    </Section>

    <Section title="Our HostNest Development Collections" icon={BriefcaseBusiness} tone="blue">
      <p>Every destination offers unique opportunities to create distinctive stays through its people, place, landscape, heritage, culture and way of life.</p>
      <p>Traveleye HostNest supports diverse collections of stays shaped by the distinctive character, people, opportunities and potential of each location.</p>
      <Cards items={collections} />
    </Section>

    <Section title="From HostNest Concepts to Distinctive Stays" icon={Sparkles}>
      <p>Each HostNest Collection can take different forms depending on the location, landscape, people, development opportunity, investment model and intended guest experience.</p>
      <p>HostNests are developed around experiences, with the accommodation form, design, facilities, hospitality, hosting and supporting elements shaped by what guests are intended to discover, feel and experience in the destination.</p>
      <p>These may include earth villas, cabins, lodges, safari tents, domes, tree houses, pods, modular units, traditional-style stays and other distinctive accommodation forms.</p>
      <p>The objective is to create stays that are rooted in people and place, while giving each HostNest its own identity.</p>
      <Statement>One Place. One Character. One Host. One Distinctive Stay.</Statement>
    </Section>

    <Section title="Micro-Resort Development" icon={Home} tone="warm">
      <Statement>Small-Scale Hospitality. Distinctive Stays. Personalised Hospitality. Meaningful Experiences.</Statement>
      <p>A <strong>Traveleye Micro-Resort</strong> is a small-scale, people-and-place-inspired hospitality development that brings together a collection of distinctive stays, common facilities, personalised hospitality, Hosts or Host Teams, and meaningful experiences to create an integrated guest experience.</p>
      <p>Each Micro-Resort is shaped by the landscape, culture, nature, heritage and people of its location. Stays are developed around experiences, while Hosts, common facilities and personalised hospitality bring the different elements together as one distinctive destination.</p>
      <p>Any HostNest Collection can also be developed as a Micro-Resort, depending on the character, opportunities and potential of the place.</p>
      <p>Micro-Resorts may be developed as a single integrated property, a cluster of accommodation units, or a distributed model connecting several properties, homes, enterprises and experiences within a defined place.</p>
      <p>Examples include Forest, Safari, Village, Heritage, Wellness, Coastal and Glamping Micro-Resorts.</p>
      <Statement>One HostNest. One Place. One Integrated Experience.</Statement>
    </Section>

    <Section title="HostNest Development Approaches" icon={MapPinned} tone="blue">
      <p>Traveleye HostNest supports different approaches to accommodation development according to the character and potential of the place, land ownership, investment structure, Host participation and long-term development objectives.</p>
      <div className="mx-auto mt-8 grid max-w-6xl gap-6 text-left lg:grid-cols-2">{developmentApproaches.map(([title, subtitle, ...paragraphs]) => <article key={title} className="rounded-xl border border-[#dbe5f0] bg-white p-6 shadow-sm"><h3 className="text-xl font-bold text-[#1f4f93]">{title}</h3><p className="mt-2 font-semibold text-[#c28a5b]">{subtitle}</p>{paragraphs.map(p => <p key={p} className="mt-4 text-sm leading-7 text-[#475569]">{p}</p>)}</article>)}</div>
    </Section>

    <Section title="Landowner + Investor + Host Partnerships" icon={Network}>
      <p>Traveleye HostNest can bring together landowners, investors, Stay Developers, Hosts, Host Teams, tourism enterprises and other relevant partners to identify and develop distinctive accommodation opportunities.</p>
      <p>Different parties may contribute land, investment, accommodation assets, development capabilities, hosting, management, market connectivity, local knowledge, experiences or other agreed forms of value depending on the nature of the HostNest.</p>
      <p>Where appropriate, commercial arrangements may incorporate the <strong>People-Powered Tourism Revenue Sharing Model</strong>, with tourism revenue shared according to contribution, responsibility and agreed value.</p>
      <Statement>Different Contributions. Shared Tourism Value.</Statement>
    </Section>

    <Section title="People & Place-Inspired Development" icon={MapPinned} tone="warm">
      <p>Every Traveleye HostNest development begins by understanding the unique people, identity and potential of its location.</p>
      <p>Rather than replicating accommodation concepts from elsewhere, we encourage Stay Developers and partners to discover what makes their place and its people special and translate that character into the design, hospitality, stories, activities, food, architecture, landscape and overall guest experience.</p>
      <p>This may draw upon local architecture, culture, traditions, craftsmanship, cuisine, nature, history, agriculture, community life, local knowledge, and people and their stories.</p>
      <p>The result is accommodation that is distinctive, authentic and memorable, while strengthening destination identity, creating enterprise opportunities and supporting local economies.</p>
      <Statement>Discover the People &amp; Place → Celebrate Local Identity → Develop the HostNest → Create Meaningful Guest Experiences → Share Tourism Value → Strengthen the Destination</Statement>
    </Section>

    <Section title="The Host Makes the Stay" icon={UsersRound}>
      <p>At Traveleye HostNest, hospitality is about creating genuine human connections.</p>
      <p>A stay becomes memorable when guests feel connected not only to the place they have come to discover, but also to the people who welcome them and bring that place to life.</p>
      <p>The Host may be an individual, family, entrepreneur, community member or Host Team. Depending on the nature of the HostNest, Hosts may be responsible for welcoming guests, connecting with guests, housekeeping, meals, caretaking and other agreed responsibilities.</p>
      <p>Through the <strong>People-Powered Tourism Host Model</strong>, Traveleye HostNest creates opportunities for Hosts and Host Teams to participate meaningfully in tourism.</p>
      <p>Through the <strong>People-Powered Tourism Revenue Sharing Model</strong>, appropriate HostNest arrangements can enable participating Hosts and partners to share tourism revenue according to their contribution, responsibility and agreed value.</p>
      <Statement>Host → Welcome → Connect → Create → Share</Statement>
    </Section>

    <Section title="Sustainability & Stewardship" icon={Leaf} tone="blue">
      <p>A distinctive stay should also help protect and strengthen the place that makes it special.</p>
      <p>Traveleye HostNest encourages:</p>
      <Chips items={sustainability} />
      <p>The objective is to develop stays that can contribute positively to the destinations in which they exist — creating value for both present and future generations.</p>
    </Section>

    <Section title="Choose Your HostNest Pathway" icon={Network}>
      <p>Every tourism entrepreneur has different aspirations. Some want to establish and operate their own independent accommodation brand. Others may be looking for professional guidance to transform an existing property. Some may wish to become part of a recognised network that shares a common philosophy, quality approach, market connectivity and commitment to people and place.</p>
      <p>Traveleye HostNest offers two pathways to support your journey.</p>
      <div className="mx-auto mt-8 grid max-w-6xl gap-6 text-left lg:grid-cols-2">
        <article className="rounded-xl border border-[#dbe5f0] bg-white p-6 shadow-sm"><h3 className="text-xl font-bold text-[#1f4f93]">01 — Operate Under Your Own Brand</h3><p className="mt-4">Develop and grow your own accommodation business under your own brand and business identity, with professional guidance and development support from Traveleye HostNest.</p><p className="mt-4">Whether you are starting a new accommodation enterprise, transforming an existing property or developing a new stay concept, we can support you with knowledge, development guidance, product thinking, positioning, hospitality and other capabilities needed to turn your vision into a distinctive and sustainable stay.</p><p className="mt-4">You retain your own brand, ownership and business identity while benefiting from the knowledge and support of the Traveleye HostNest platform.</p></article>
        <article className="rounded-xl border border-[#dbe5f0] bg-white p-6 shadow-sm"><h3 className="text-xl font-bold text-[#1f4f93]">02 — Powered by Traveleye HostNest</h3><p className="mt-4">Entrepreneurs seeking a deeper partnership may choose to develop and operate their accommodation as a <strong>Powered by Traveleye HostNest</strong> property.</p><p className="mt-4">This pathway is designed for entrepreneurs who wish to align with the Traveleye HostNest philosophy, people-and-place-inspired development approach, quality standards and future collaborative marketing opportunities while continuing to own and operate their businesses independently.</p><p className="mt-4">As the Traveleye HostNest Network develops, participating properties may benefit from shared branding, professional support, market visibility, knowledge sharing, technology, partnerships and collaborative growth.</p><p className="mt-4">The objective is to create a network of distinctive stays that remain locally rooted, Host-led and independently operated, while becoming connected through a shared vision for People-Powered Tourism.</p></article>
      </div>
    </Section>

    <Section title="Our Philosophy" icon={Home} tone="blue">
      <p>We believe every destination has its own character, and every place has people who can help bring that character to life.</p>
      <p>A great accommodation experience should help travellers understand where they are, meet the people who make the place special, experience the culture and character of the destination, and discover something that could only be found there.</p>
      <p>By developing accommodation through people and place, Traveleye HostNest seeks to:</p>
      <Chips items={['Strengthen Local Identity', 'Celebrate Authentic Hospitality', 'Support Tourism Entrepreneurs', 'Create Meaningful Visitor Experiences', 'Enable Shared Tourism Value', 'Contribute to Stronger Destinations']} />
    </Section>

    <Section title="Grow with Traveleye HostNest" icon={UsersRound}>
      <p>Whether you are planning your first accommodation business, upgrading an existing property, developing a themed stay, transforming a family property or seeking to create more meaningful guest experiences, Traveleye HostNest invites you to develop your vision with us.</p>
      <p>You may choose to build your own independent accommodation brand or become a <strong>Powered by Traveleye HostNest</strong> property.</p>
      <p>Whatever pathway you choose, our objective is the same: to help you develop a distinctive stay that brings People and Place together, strengthens your enterprise, creates meaningful experiences and contributes to the development of your destination.</p>
      <p>Together, we can develop stronger accommodation enterprises, richer visitor experiences and more vibrant destinations while creating lasting value for:</p>
      <Statement>People. Places. Partnerships. Prosperity.</Statement>
    </Section>

    <Section title="Start Your HostNest Journey" icon={Home} tone="blue">
      <p>Every great stay begins with an idea. Perhaps you are:</p>
      <Chips items={opportunities} />
      <p>Whatever stage you are at, Traveleye HostNest can help you explore the opportunity, understand the potential of your people and place, strengthen your concept and develop a stay that is both commercially viable and meaningful to the destination.</p>
      <Statement>Create a stay that could only belong to its people and its place.</Statement>
      <p>Contact us at <a href="mailto:hostnest@traveleye.lk" className="font-semibold text-[#1f4f93] underline">hostnest@traveleye.lk</a> to explore stay development and collaboration opportunities.</p>
    </Section>
    <ExploreEcosystem />
    <FooterLinks />
  </main>
}
