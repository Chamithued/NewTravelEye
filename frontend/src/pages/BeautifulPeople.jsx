import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, Banknote, BookOpen, BriefcaseBusiness, CheckCircle2, Clock3, Cpu, Globe2, GraduationCap, Handshake, HeartHandshake, House, Landmark, Lightbulb, MapPinned, Network, Palette, Rocket, Sparkles, Star, Users, Waypoints, Wrench } from 'lucide-react'
import heroImg from '../assets/subhero/Beautiful People.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const people = [
  'Village hosts', 'Farmers', 'Young Travelpreneurs', 'Women entrepreneurs', 'Tour guides', 'Drivers',
  'Artisans', 'Chefs', 'Wellness practitioners', 'Teachers', 'Monks and religious institution representatives',
  'Conservationists', 'Community leaders', 'Tourism entrepreneurs', 'Researchers', 'Photographers', 'Storytellers',
  'Destination champions', 'Hoteliers', 'Corporate partners', 'Technology entrepreneurs', 'Investors',
  'University students', 'Retired professionals', 'Sri Lankan diaspora',
  'Or simply someone with an idea and the willingness to contribute',
]

const contributions = [
  ['Knowledge', 'Local knowledge, professional expertise, cultural understanding or specialist knowledge.', BookOpen],
  ['Place', 'Land, a home, a farm, a destination or a place with potential.', MapPinned],
  ['Skills', 'Craftsmanship, cooking, guiding, storytelling, hospitality, technology or other capabilities.', Wrench],
  ['Experiences', 'A unique activity, tradition, talent, way of life or local experience that can become meaningful tourism.', Star],
  ['Time', 'The willingness to participate, mentor, volunteer, collaborate or help develop an initiative.', Clock3],
  ['Creativity', 'Ideas, stories, designs, new concepts and innovative approaches to tourism.', Palette],
  ['Relationships', 'Connections with communities, enterprises, destinations, institutions and other people.', Handshake],
  ['Local Knowledge', 'Understanding of places, people, culture, heritage, nature and ways of life.', GraduationCap],
  ['Technology', 'Digital solutions, platforms, systems, innovation and technical capabilities.', Cpu],
  ['Capital', 'Financial resources to support tourism enterprises, ventures or destination development.', Banknote],
  ['Market Access', 'Connections to travellers, businesses, distribution networks and new markets.', Globe2],
  ['Leadership', 'The ability to bring people together, inspire action and mobilise destinations.', Users],
  ['Networks', 'Relationships and connections that can create new opportunities.', Network],
  ['Entrepreneurial Ideas', 'New ideas that can become tourism products, services, enterprises or ventures.', Rocket],
]

const pathways = [
  ['Discover Beautiful People', 'We seek out people with ideas, capabilities, knowledge, passion and potential across Sri Lanka’s tourism ecosystem.'],
  ['Connect Beautiful People', 'We connect people with people, opportunities, enterprises, destinations, markets and resources.'],
  ['Enable Beautiful People', 'We help create access to knowledge, skills, technology, networks, mentoring, opportunities and other forms of support.'],
  ['Develop Beautiful Entrepreneurs & Enterprises', 'We help transform ideas, capabilities and opportunities into stronger entrepreneurs, tourism enterprises, host stays, experiences and tourism ventures.'],
  ['Connect Beautiful Destinations', 'We connect people, enterprises, experiences and opportunities around destinations, helping create stronger and more connected local tourism ecosystems.'],
  ['Create Beautiful Partnerships, Ventures & Collaborations', 'We bring complementary capabilities, resources, markets and ideas together to create meaningful partnerships, ventures and collaborations.'],
]

const pillars = [
  ['Beautiful Journeys', 'Traveleye Travel Collective', Landmark],
  ['Beautiful Stays and Experiences', 'Traveleye Host Experiences', House],
  ['Beautiful Expertise', 'Traveleye Ecosystem Support', BriefcaseBusiness],
  ['Beautiful Destinations', 'Traveleye Destination Facilitation', MapPinned],
]

const beautifulPossibilities = [
  'Beautiful Journeys',
  'Beautiful Stays & Experiences',
  'Beautiful Expertise',
  'Beautiful Destinations',
]

function FlowArrow() {
  return <div className="flex h-14 items-center justify-center" aria-hidden="true"><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#305897] bg-white text-[#305897] shadow-sm"><ArrowDown className="h-5 w-5" strokeWidth={2.5} /></span></div>
}

function BeautifulPossibilitiesFlow() {
  return (
    <div className="mx-auto mt-10 max-w-5xl" aria-label="How Beautiful People help create Beautiful Sri Lanka">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border-2 border-[#1F4F93] bg-white px-6 py-5 text-center text-xl font-bold text-[#172544] shadow-sm sm:text-2xl">Beautiful People</div>
      <FlowArrow />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {beautifulPossibilities.map(item => <div key={item} className="flex min-h-24 items-center justify-center rounded-2xl border border-[#dce5ef] bg-white p-5 text-center font-bold leading-6 text-[#1f4f93] shadow-sm">{item}</div>)}
      </div>
      <FlowArrow />
      <div className="mx-auto w-full max-w-4xl rounded-2xl border-2 border-[#1F4F93] bg-white px-6 py-5 text-center text-lg font-bold text-[#172544] shadow-sm sm:text-xl">Partnerships <span className="text-[#1F4F93]">•</span> Ventures <span className="text-[#1F4F93]">•</span> Collaborations</div>
      <FlowArrow />
      <div className="mx-auto w-full max-w-4xl rounded-2xl border-2 border-[#1F4F93] bg-white px-6 py-5 text-center text-lg font-bold text-[#172544] shadow-sm sm:text-xl">People-Powered Tourism Ecosystem</div>
      <FlowArrow />
      <div className="mx-auto w-full max-w-4xl rounded-2xl border-2 border-[#1F4F93] bg-white px-6 py-5 text-center text-xl font-bold text-[#172544] shadow-sm sm:text-2xl">Beautiful Sri Lanka</div>
    </div>
  )
}

function SectionHeading({ icon: Icon, children }) {
  return <div className="mx-auto max-w-4xl text-center"><h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl"><span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" /></span><span>{children}</span></h2><div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" /></div>
}

const Body = ({ children, className = '' }) => <div className={`mx-auto mt-6 max-w-5xl space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8 ${className}`}>{children}</div>

export default function BeautifulPeople() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="People building Sri Lanka’s tourism ecosystem together" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8"><div><h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"><span className="block">Traveleye</span><span className="block">Beautiful People</span></h1><p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Finding Beautiful People to Build Traveleye’s People-Powered Tourism Ecosystem</p></div></div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Sparkles}>Finding Beautiful People to Build Traveleye’s People-Powered Tourism Ecosystem</SectionHeading><Body><p>A tourism ecosystem is built by people.</p><p>Behind every destination, every stay, every experience, every tourism enterprise and every partnership are people with knowledge, ideas, skills, relationships, creativity and a willingness to contribute.</p><p>At Traveleye Alliance Sri Lanka, we call them <strong>Traveleye Beautiful People</strong>.</p><p>We believe Sri Lanka’s tourism future can be strengthened by finding people with potential — people who have something meaningful to contribute to people, places, enterprises, destinations and partnerships, and who are willing to be part of something bigger than an individual tourism product or business.</p></Body></section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Sparkles}>What Makes a Beautiful Person?</SectionHeading><Body><p>A Beautiful Person is not defined by appearance, profession, position, wealth or the size of an existing business.</p><p><strong>Profession is not the qualification.</strong></p><p>What matters is the person's <strong>relationship with people, place and purpose</strong> — and their willingness to contribute, create, connect and grow.</p><p>A Beautiful Person may bring knowledge, skills, ideas, creativity, local understanding, relationships, leadership, enterprise or simply the willingness to explore what is possible.</p><p>They may already be successful.</p><p>Or they may simply have potential.</p><p>They may have an established tourism business.</p><p>Or they may have an idea that has never yet become a business.</p><p>They may have capital to invest.</p><p>Or they may have nothing to invest except their knowledge, time, skills and passion.</p><p><strong>What matters is what they can contribute and what can be created together.</strong></p></Body></section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Lightbulb}>Beautiful People Create Beautiful Possibilities</SectionHeading><Body><p><strong>Beautiful People curate Beautiful Journeys.</strong></p><p><strong>Beautiful People craft Beautiful Stays and Experiences.</strong></p><p><strong>Beautiful People share Beautiful Expertise.</strong></p><p><strong>Beautiful People develop Beautiful Destinations.</strong></p><p><strong>Together, they help build a People-Powered Tourism Ecosystem.</strong></p></Body><BeautifulPossibilitiesFlow /><Body><p>These four expressions connect Traveleye Beautiful People with the four operational pillars of the People-Powered Tourism Ecosystem:</p></Body><div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">{pillars.map(([title, text, Icon]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm sm:p-6"><span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f6ef] text-[#1f4f93]"><Icon className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 text-lg font-bold leading-tight tracking-tight text-black sm:text-xl">{title}</h3><p className="mt-3 text-sm font-bold leading-6 text-[#475569] sm:text-base">{text}</p></article>)}</div></section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Users}>Who Are Traveleye Beautiful People?</SectionHeading><Body><p>Beautiful People can be found throughout Sri Lanka’s communities, destinations, tourism industry and wider society.</p><p>They may be:</p></Body><div className="mx-auto mt-6 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">{people.map(item => <div key={item} className="flex items-start gap-3 rounded-xl border border-[#e5eee8] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" /><span>{item}</span></div>)}</div><Body><p>There is no single profile.</p><p><strong>Beautiful People can come from anywhere.</strong></p><p>They can be young or experienced, rural or urban, established or emerging, individual or organisational.</p><p>What connects them is their <strong>potential to contribute to a stronger tourism ecosystem</strong>.</p></Body></section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={HeartHandshake}>What Can a Beautiful Person Contribute?</SectionHeading><Body><p>Not everyone contributes in the same way.</p><p>A person may contribute:</p></Body><div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">{contributions.map(([title, text, Icon]) => <article key={title} className="rounded-2xl border-t-4 border-[#1f4f93] bg-white p-6 shadow-sm"><span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef4fa] text-[#1f4f93]"><Icon className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 text-xl font-bold text-[#1f4f93]">{title}</h3><p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">{text}</p></article>)}</div><Body><p><strong>Not everyone needs to contribute money.</strong></p><p><strong>Every contribution has the potential to create value.</strong></p></Body></section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Sparkles}>Discovering Potential</SectionHeading><Body><p>One of the important roles of Traveleye Alliance is to <strong>discover people with potential</strong>.</p><p>Sometimes the most valuable tourism opportunity is not found in an established tourism business.</p><p><strong>It may be found in a person.</strong></p><p>A young person in a village may have extraordinary knowledge of local nature.</p><p>A farmer may have an ideal location for an agro-tourism experience.</p><p>A family may have a beautiful traditional home with the potential to become a meaningful host stay.</p><p>A chef may know an exceptional regional cuisine.</p><p>A retired professional may have decades of knowledge about a destination.</p><p>A guide may have an exceptional ability to tell the stories of a place.</p><p>A university graduate may have the ambition to become a Travelpreneur.</p><p>A technology entrepreneur may have a solution to a tourism challenge.</p><p>A businessperson may have access to a new market.</p><p>A community leader may have the ability to bring people together and mobilise a destination.</p><p>A hotelier may see greater value in collaboration than competition.</p><p><strong>These are the people we are looking for.</strong></p><p>Not necessarily partners at the beginning.</p><p>Not necessarily established entrepreneurs.</p><p>Not necessarily people with financial resources.</p><p>They are <strong>Beautiful People with something to contribute and the potential to become part of something bigger.</strong></p></Body></section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Waypoints}>From People to Possibility</SectionHeading><Body><p>Discovering a Beautiful Person is only the beginning.</p><p>At Traveleye Alliance Sri Lanka, we seek to create pathways through which people can connect their potential with opportunities.</p></Body><div className="mx-auto mt-10 max-w-4xl">{pathways.map(([title, text]) => <div key={title} className="text-center"><article className="rounded-2xl border border-[#dce5ef] bg-white p-6 shadow-sm"><h3 className="font-bold text-[#1f4f93]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p></article><div className="flex h-14 items-center justify-center" aria-hidden="true"><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#c28a5b] bg-white text-[#c28a5b] shadow-sm"><ArrowDown className="h-5 w-5" strokeWidth={2.5} /></span></div></div>)}<article className="rounded-2xl border border-[#dce5ef] bg-white p-6 text-center shadow-sm"><h3 className="font-bold text-[#1f4f93]">Build the People-Powered Tourism Ecosystem</h3><p className="mt-2 text-sm leading-7 text-[#55636a] sm:text-base">Together, these connections progressively strengthen the network of people, enterprises, destinations and partnerships that form the <strong>People-Powered Tourism Ecosystem</strong>.</p></article></div></section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Network}>From Individual Potential to Collective Value</SectionHeading><Body><p>A single person may have an idea.</p><p>Another may have a place.</p><p>Another may have the skills.</p><p>Another may have the market.</p><p>Another may have the technology.</p><p>Another may have the investment.</p><p>Another may have the relationships needed to bring everyone together.</p><p><strong>Separately, each contribution has value.</strong></p><p><strong>Together, they can create something much greater.</strong></p><p>This is the power of a people-powered approach.</p><p>We believe tourism development becomes stronger when individual capabilities are connected, complementary strengths are brought together, and opportunities are created through collaboration.</p></Body></section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Users}>• People • Places • Partnerships • Prosperity</SectionHeading><Body><p>Traveleye Beautiful People connects directly with the four foundations of People-Powered Tourism.</p></Body><div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">{[['People','Discovering and enabling people with potential.'],['Places','Connecting people with the destinations and places they know, represent and can help develop.'],['Partnerships','Bringing complementary people, enterprises, institutions and resources together.'],['Prosperity','Creating lasting economic, social, cultural and environmental value through stronger tourism enterprises and destinations.']].map(([title,text]) => <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm"><h3 className="font-bold text-[#1f4f93]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#55636a] sm:text-base">{text}</p></article>)}</div><Body><p>Through these connections:</p></Body><ul className="mx-auto mt-6 grid max-w-3xl gap-3 text-left sm:grid-cols-2">{['People create possibilities.','Places create opportunities.','Partnerships create value.','Prosperity becomes shared.'].map(item => <li key={item} className="flex items-center gap-3 rounded-xl border border-[#dce5ef] bg-white px-5 py-4 font-bold text-[#172544] shadow-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#305897]" aria-hidden="true" /><span>{item}</span></li>)}</ul></section>

      <section className="bg-[#eef4fa] px-4 py-14 sm:px-6 sm:py-20 lg:px-8"><SectionHeading icon={HeartHandshake}>An Invitation to Sri Lanka’s Beautiful People</SectionHeading><Body><p><strong>Do You Have Something to Contribute?</strong></p><p>You do not need to be an established tourism entrepreneur, own a tourism business, or have financial capital to become part of the <strong>People-Powered Tourism Ecosystem</strong>.</p><p>You may be a <strong>woman entrepreneur</strong>, a young Travelpreneur, a village host, farmer, guide, driver, artisan, chef, wellness practitioner, teacher, community leader, tourism entrepreneur, professional, researcher, storyteller, destination champion, technology entrepreneur, investor, university student, retired professional, member of the Sri Lankan diaspora — or simply someone with an idea and the willingness to contribute.</p><p>You may have:</p><p><strong>• a place • an idea • a skill • an experience • knowledge • creativity • technology • a network • market access • expertise • capital • or simply the willingness to contribute.</strong></p><p><strong>If you are a Beautiful Person with something to contribute, we invite you to connect with Traveleye.</strong></p><p>Together, we can explore where your potential may contribute to:</p></Body><ul className="mx-auto mt-6 grid max-w-3xl gap-3 text-left sm:grid-cols-2">{beautifulPossibilities.map(item => <li key={item} className="flex items-center gap-3 rounded-xl border border-[#dce5ef] bg-white px-5 py-4 font-bold text-[#172544] shadow-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#305897]" aria-hidden="true" /><span>{item}</span></li>)}</ul><Body><p>and create meaningful:</p><p><strong>• Partnerships • Ventures • Collaborations</strong></p><p>to help build a stronger <strong>People-Powered Tourism Ecosystem for Sri Lanka</strong>.</p><div className="pt-3 text-lg text-[#1f4f93]"><p><strong>Bring What You Have.</strong></p><p><strong>Share What You Know.</strong></p><p><strong>Create What Is Possible.</strong></p><p><strong>Build Something Bigger - Together.</strong></p></div><Link to="/how-you-can-grow-with-traveleye" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#1f4f93] px-7 py-3.5 font-bold text-white shadow-sm transition hover:bg-[#173d73]">
      Become a Traveleye Beautiful Family Member <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link></Body></section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
