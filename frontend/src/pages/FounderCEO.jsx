import {
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  MessageCircle,
  Network,
  Quote,
  UserRound,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/About Traveleye Alliance.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const leadershipPrinciples = [
  'Empower entrepreneurs and local communities.',
  'Develop and strengthen micro and small tourism enterprises.',
  'Create authentic host stays and travel experiences inspired by people and place.',
  'Strengthen destinations through shared stewardship and local participation.',
  'Foster strategic partnerships that generate collective impact.',
  'Encourage practical innovation that addresses real-world opportunities.',
  'Create long-term economic, social, cultural, and environmental value.',
]

const leadershipAreas = [
  'People-Powered Tourism',
  'Tourism Ecosystem Development',
  'Tourism Enterprise Development',
  'Destination Development & Stewardship',
  'Place-Inspired Host Stay Development',
  'People & Place-Inspired Travel Experience Development',
  'Travel Corridor Development',
  'Tourism Entrepreneurship',
  'Tourism Partnerships & Joint Ventures',
  'Tourism Innovation & Digital Solutions',
  'Sustainable Tourism Development',
  'Tourism Strategy & Ecosystem Design',
]

const qualifications = [
  'Associate Member of Institute of Chartered Accountants of Sri Lanka (ACA)',
  'Associate Member of the Chartered Institute of Management Accountants – Sri Lanka (ACMA (SL))',
  'Member of the Chartered Professional Managers of Sri Lanka (MCPM)',
  'Master of Tourism Economics and Hotel Management (MTEHM), University of Colombo',
]

const experience = ['Tourism', 'Finance', 'Strategic Management', 'Entrepreneurship', 'Business Development', 'Education', 'Organisational Leadership']

const collaboration = [
  'Keynote presentations',
  'Conferences and tourism forums',
  'Panel discussions',
  'Strategic advisory',
  'University lectures',
  'Professional workshops',
  'Tourism policy dialogue',
  'Partnership development',
  'Ecosystem collaboration',
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" /></span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function CheckList({ items, columns = true }) {
  return (
    <ul className={`mt-7 grid gap-3 text-left ${columns ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl border border-[#eef4ef] bg-white p-5 text-sm leading-7 text-[#55636a] shadow-sm sm:text-base">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1f4f93]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Copy({ children }) {
  return <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
}

export default function FounderCEO() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <img src={heroImg} alt="Founder & CEO banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">FOUNDER &amp; CEO</h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Leading a Vision for People-Powered Tourism</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-3xl bg-gradient-to-br from-[#e8eff8] to-[#dbe6f3] shadow-lg">
            <div className="text-center text-[#1f4f93]"><UserRound className="mx-auto h-24 w-24" /><p className="mt-4 font-semibold">Professional Portrait</p></div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f4f93] sm:text-4xl">Pradeepthi Hemachandra</h2>
            <p className="mt-3 font-bold text-[#0f4d2f]">ACA | ACMA (SL) | MCPM | MTEHM</p>
            <p className="mt-5 text-lg font-bold text-slate-800">Founder &amp; Chief Executive Officer</p>
            <p className="font-bold text-slate-800">Traveleye Alliance Sri Lanka</p>
            <p className="font-bold text-slate-800">People-Powered Tourism Architect</p>
            <blockquote className="relative mt-8 rounded-2xl border-l-4 border-[#c28a5b] bg-[#FCFBF8] p-6 text-base italic leading-8 text-[#475569]">
              <Quote className="mb-3 h-7 w-7 text-[#c28a5b]" />
              &quot;Tourism has the power to transform destinations when it creates value not only for travellers, but also for the people and places that make every journey possible.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass} title="Building Tourism Beyond Traditional Travel" />
        <Copy>
          <p>Pradeepthi Hemachandra is the Founder and Chief Executive Officer of <strong>Traveleye Alliance Sri Lanka</strong>, the organisation behind <strong>Sri Lanka&apos;s First People-Powered Tourism Ecosystem</strong> and the <strong>People-Powered Tourism Framework</strong>.</p>
          <p>With more than 25 years of professional experience spanning tourism, finance, strategic management, entrepreneurship, and education, he has dedicated his career to reimagining tourism as a catalyst for enterprise development, destination stewardship, and shared prosperity.</p>
          <p>His vision extends beyond promoting travel. It is about empowering people, developing tourism enterprises, strengthening destinations, creating meaningful partnerships, and building a connected tourism ecosystem where every participant has the opportunity to contribute and grow.</p>
        </Copy>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={BriefcaseBusiness} title="The Journey" /><Copy><p>Tourism has the unique ability to connect people, cultures, places, and opportunities. Throughout his professional journey, Pradeepthi recognised that tourism creates its greatest impact not simply by increasing visitor numbers, but by creating opportunities for the people and places that make every journey possible.</p><p>This belief inspired the establishment of <strong>Traveleye Alliance Sri Lanka</strong> and the development of the <strong>People-Powered Tourism Framework</strong>—a strategic framework designed to strengthen tourism through participation, collaboration, shared stewardship, innovation, and enterprise development.</p><p>Today, that vision has evolved into <strong>Sri Lanka&apos;s First People-Powered Tourism Ecosystem</strong>, creating practical opportunities for entrepreneurs, tourism enterprises, destinations, institutions, communities, and strategic partners to build stronger tourism together.</p></Copy></section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Lightbulb} title="A Vision for People-Powered Tourism" /><Copy><p>At the heart of Pradeepthi&apos;s work is a simple but powerful belief:</p><p className="text-lg font-bold text-[#0f4d2f]">Tourism becomes stronger when people become active participants in creating its value.</p><p>Rather than viewing tourism as a collection of individual businesses or isolated destinations, he believes tourism flourishes as an interconnected ecosystem where entrepreneurs, tourism enterprises, hosts, experience creators, destinations, institutions, investors, governments, and travellers collaborate to create meaningful and sustainable outcomes.</p><p>This philosophy forms the foundation of the <strong>People-Powered Tourism Framework</strong>, which guides the development of tourism through connected Strategic Pillars, Development Models, Operational Platforms, and collaborative initiatives that transform strategic vision into practical action.</p></Copy></section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><SectionHeading icon={Network} title="Building Sri Lanka's First People-Powered Tourism Ecosystem" /><Copy><p>Under Pradeepthi&apos;s leadership, Traveleye Alliance is building an ecosystem with a clear purpose:</p><p className="text-lg font-bold text-[#0f4d2f]">To develop and strengthen micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem.</p><p>The ecosystem creates opportunities that strengthen tourism through entrepreneurship, collaboration, innovation, destination development, strategic partnerships, and shared stewardship.</p><p>Rather than operating as a traditional tourism business, Traveleye serves as an ecosystem builder and steward—bringing together people, enterprises, destinations, institutions, and strategic partners to create stronger tourism for the benefit of <strong>People, Planet, and Prosperity</strong>.</p></Copy></section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-5xl"><SectionHeading icon={Handshake} title="Leadership Philosophy" /><Copy><p>Pradeepthi&apos;s leadership is guided by the belief that sustainable tourism is created through collaboration rather than competition, stewardship rather than short-term thinking, and shared value rather than individual success.</p><p>He believes that meaningful tourism should:</p></Copy><CheckList items={leadershipPrinciples} /><p className="mt-7 text-center text-sm leading-7 text-[#475569] sm:text-base">These principles continue to guide the growth and evolution of the Traveleye People-Powered Tourism Ecosystem.</p></div></section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-5xl"><SectionHeading icon={Compass} title="Areas of Leadership & Development" /><Copy><p>Pradeepthi&apos;s work focuses on developing practical tourism solutions that strengthen enterprises, destinations, and collaborative tourism ecosystems.</p><p>His areas of leadership and development include:</p></Copy><CheckList items={leadershipAreas} /></div></section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-5xl"><SectionHeading icon={GraduationCap} title="Professional Credentials" /><Copy><p>Pradeepthi combines professional qualifications in finance, management, and tourism with extensive experience in business leadership and tourism development.</p></Copy><div className="mx-auto mt-9 max-w-4xl space-y-12"><div><h3 className="text-center text-xl font-bold text-[#1f4f93]">Qualifications</h3><CheckList items={qualifications} columns={false} /></div><div><h3 className="text-center text-xl font-bold text-[#1f4f93]">Professional Experience</h3><p className="mt-4 text-center text-sm text-[#475569] sm:text-base">More than 25 years of professional experience across:</p><CheckList items={experience} /></div></div></div></section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-5xl"><SectionHeading icon={MessageCircle} title="Speaking, Advisory & Collaboration" /><Copy><p>Pradeepthi actively engages with governments, tourism authorities, universities, development organisations, tourism enterprises, investors, and strategic partners through speaking engagements, advisory services, collaborative initiatives, and thought leadership.</p><p>He welcomes opportunities related to:</p></Copy><CheckList items={collaboration} /></div></section>

      <section className="w-full bg-[#1f4f93] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto max-w-4xl text-center"><Quote className="mx-auto h-10 w-10 text-[#d9ad87]" /><h2 className="mt-5 text-2xl font-bold sm:text-4xl">A Personal Message</h2><p className="mt-7 text-sm italic leading-8 text-white/90 sm:text-lg sm:leading-9">&quot;Tourism is more than an industry - it is a powerful platform for creating opportunities, strengthening communities, connecting cultures, and building lasting prosperity. My vision is to create a tourism ecosystem where entrepreneurs, enterprises, destinations, and communities work together through collaboration, innovation, and shared stewardship. Together, we can build a future where tourism creates meaningful value for People, Planet, and Prosperity.&quot;</p><p className="mt-6 font-bold">— Pradeepthi Hemachandra</p></div></section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl text-center"><SectionHeading icon={Mail} title="Connect with the Founder" /><p className="mt-8 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">If you would like to explore strategic partnerships, tourism development initiatives, speaking engagements, advisory opportunities, or learn more about the <strong>People-Powered Tourism Framework</strong>, we welcome the opportunity to connect.</p><p className="mt-6 font-bold text-[#1f4f93]">Email:</p></div></section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
