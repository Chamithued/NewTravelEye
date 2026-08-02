import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Handshake,
  Leaf,
  Lightbulb,
  MessageCircle,
  Settings,
  Target,
  Users,
} from 'lucide-react'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'
import heroImg from '../assets/client/SupportServices.jpg'

const supportedStakeholders = [
  'Aspiring Tourism Entrepreneurs',
  'Micro & Small Tourism Enterprises',
  'Accommodation Providers',
  'Travel Experience Creators',
  'Tour Operators',
  'Tourism Investors',
  'Destination Organisations',
  'Community Organisations',
  'Government Institutions',
  'Development Partners',
]

const serviceAreas = [
  {
    icon: Lightbulb,
    title: 'Enterprise Development',
    intro: 'Helping entrepreneurs establish strong foundations for successful tourism enterprises.',
    groups: [
      { title: 'Tourism Business Strategy & Planning', items: ['Tourism business planning', 'Business model development', 'Feasibility studies', 'Strategic planning', 'Business transformation', 'Growth planning'] },
      { title: 'Tourism Enterprise Development', items: ['Business start-up advisory', 'Enterprise development', 'Business improvement', 'Expansion planning', 'Business mentoring', 'Enterprise diagnostics'] },
      { title: 'Tourism Product & Experience Development', items: ['Host stay development', 'Themed accommodation', 'Travel experience development', 'Tour product development', 'Tourism package development', 'Product innovation'] },
    ],
  },
  {
    icon: Settings,
    title: 'Enterprise Management',
    intro: 'Strengthening business operations, management systems, and organisational capability.',
    groups: [
      { title: 'Tourism Operations & Service Excellence', items: ['Front Office Operations', 'Reservations Management', 'Housekeeping Operations', 'Food & Beverage Operations', 'Kitchen Operations', 'Property & Facilities Maintenance', 'Guest Services', 'Standard Operating Procedures (SOPs)', 'Service Standards', 'Quality Management'] },
      { title: 'Business Management Advisory', items: ['Accounting Systems', 'Financial Planning', 'Business Budgeting', 'Cash Flow Management', 'Pricing Strategies', 'Financial Performance Reviews', 'Tax Planning & Compliance Guidance', 'Human Resource Planning', 'Recruitment Planning', 'Performance Management', 'Organisation Development'] },
      { title: 'Technology & Digital Advisory', items: ['Tourism Technology Planning', 'Website & Digital Presence Advisory', 'Online Booking Solutions', 'Reservation Systems', 'Property Management Systems (PMS)', 'Customer Relationship Management (CRM)', 'Digital Payment Solutions', 'AI Adoption & Business Automation', 'Business Analytics', 'Digital Transformation Planning'] },
    ],
  },
  {
    icon: BarChart3,
    title: 'Enterprise Growth',
    intro: 'Supporting tourism enterprises to expand markets, strengthen partnerships, and attract investment.',
    groups: [
      { title: 'Tourism Marketing & Business Growth', items: ['Tourism Marketing Strategy', 'Brand Development', 'Digital Marketing', 'Sales Strategy', 'Market Access', 'Customer Experience Enhancement'] },
      { title: 'Destination Development & Tourism Partnerships', items: ['Destination Planning', 'Destination Facilitation', 'Stakeholder Coordination', 'Visitor Services Planning', 'Travel Partnerships', 'Travel Corridor Development'] },
      { title: 'Tourism Investment & Project Advisory', items: ['Tourism Investment Planning', 'Project Development', 'Investment Evaluation', 'Partnership Structuring', 'Funding Readiness', 'Project Advisory'] },
    ],
  },
  {
    icon: Leaf,
    title: 'Enterprise Sustainability',
    intro: 'Building responsible, resilient, and future-ready tourism enterprises.',
    groups: [
      { title: 'Sustainable Tourism & ESG Advisory', items: ['Sustainable Tourism Practices', 'Environmental Management', 'Community Engagement', 'Responsible Tourism', 'ESG Integration', 'Climate Resilience'] },
    ],
  },
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function Copy({ children }) {
  return <div className="mx-auto mt-7 max-w-5xl space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">{children}</div>
}

function CheckGrid({ items }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-[#dce5ef] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TraveleyeGuidant() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="Traveleye Guidant" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">TRAVELEYE GUIDANT</h1>
            <p className="mt-4 text-base font-bold text-white sm:text-xl">Building Stronger Tourism Enterprises.</p>
            <p className="mt-2 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Micro & Small Tourism Enterprise Development & Advisory Division</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Compass} title="Developing Stronger Tourism Enterprises Through Professional Guidance" />
        <Copy>
          <p>Every successful tourism enterprise begins with an idea. Turning that idea into a sustainable and successful business requires informed decisions, practical knowledge, strategic planning, and continuous support.</p>
          <p><strong>Traveleye Guidant</strong> is the <strong>Micro & Small Tourism Enterprise Development & Advisory Division</strong> of <strong>Traveleye Alliance Sri Lanka</strong>, established to develop and strengthen micro and small tourism enterprises across Sri Lanka.</p>
          <p>As an integral part of the <strong>People-Powered Tourism Ecosystem</strong>, Traveleye Guidant works alongside entrepreneurs, tourism enterprises, destinations, organisations, and investors through every stage of enterprise development—from identifying opportunities and planning investments to strengthening operations, achieving sustainable growth, and building resilient tourism businesses.</p>
          <p>Whether you are planning your first tourism venture, strengthening an existing enterprise, or developing a tourism destination or investment project, Traveleye Guidant provides the professional guidance needed to move forward with confidence.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Target} title="Our Purpose" />
        <Copy><p className="text-lg font-bold leading-8 text-[#172544]">To develop and strengthen micro and small tourism enterprises through enterprise development, professional advisory, business capability enhancement, and strategic support, creating stronger tourism enterprises, resilient destinations, and inclusive economic growth.</p></Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users} title="Who We Support" />
          <Copy><p>We work with a diverse range of tourism stakeholders, including:</p></Copy>
          <CheckGrid items={supportedStakeholders} />
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={BriefcaseBusiness} title="How We Support Tourism Enterprises" />
        <Copy><p>Rather than offering isolated consulting services, Traveleye Guidant provides integrated enterprise development and advisory support across every stage of the tourism business lifecycle.</p></Copy>
      </section>

      {serviceAreas.map(({ icon: Icon, title, intro, groups }, index) => (
        <section key={title} className={`${index % 2 === 0 ? 'bg-[#FCFBF8]' : 'bg-[#eef4fa]'} px-4 py-12 sm:px-6 sm:py-16 lg:px-8`}>
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-[#1f4f93] sm:text-4xl"><Icon className="h-7 w-7" aria-hidden="true" />{title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{intro}</p>
            </div>
            <div className={`mt-10 grid gap-6 ${groups.length > 1 ? 'lg:grid-cols-3' : 'mx-auto max-w-2xl'}`}>
              {groups.map((group) => (
                <article key={group.title} className="rounded-2xl border-t-4 border-[#1f4f93] bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-xl font-bold text-[#1f4f93]">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#475569] sm:text-base"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" /><span>{item}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Handshake} title="Our Enterprise Development Approach" />
        <Copy>
          <p>Every successful tourism enterprise follows a journey of continuous development.</p>
          <p>At Traveleye Guidant, we work alongside entrepreneurs, tourism enterprises, organisations, and investors through every stage of that journey—helping them discover opportunities, evaluate ideas, strengthen business capability, improve operational performance, achieve sustainable growth, and create long-term value.</p>
          <p className="rounded-2xl bg-[#eef4fa] px-5 py-6 font-bold text-[#1f4f93] shadow-sm">Discover Opportunities → Evaluate Potential → Plan Strategically → Build Strong Foundations → Strengthen Operations → Grow Sustainably → Achieve Long-Term Success</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Lightbulb} title="Our Philosophy" />
        <Copy>
          <p>At Traveleye Guidant, we believe every successful tourism enterprise begins with a vision, grows through informed decisions, and succeeds through continuous learning, strategic guidance, and practical action.</p>
          <p>Our role is to help transform ideas into resilient tourism enterprises that create lasting value for entrepreneurs, destinations, local communities, and Sri Lanka's tourism economy.</p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#d4e0ed] bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-14">
          <SectionHeading icon={MessageCircle} title="Complimentary Tourism Business Discovery Session" />
          <div className="mx-auto mt-7 max-w-4xl space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p className="text-lg font-bold text-[#172544]">Planning to Invest in a Small-Scale Tourism Business?</p>
            <p>Whether you're planning a themed stay, travel experience, tour operation, or any other small-scale tourism venture, start with the right advice.</p>
            <p><strong>Before investing your hard-earned money, make sure you're investing in the right opportunity.</strong></p>
            <p>Book a <strong>Complimentary 30-Minute Tourism Business Discovery Session</strong> with Traveleye Guidant to discuss your business idea, explore opportunities, and identify the most practical path forward.</p>
            <p><strong>To schedule your session, WhatsApp your name and a brief description of your tourism business idea or enquiry to 0777 406 887.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
