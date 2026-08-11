import {
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  GraduationCap,
  Handshake,
  Lightbulb,
  Route,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'
import heroImg from '../assets/client/SupportServices.jpg'

const supportedPeople = [
  'Aspiring Tourism Entrepreneurs',
  'Tourism Professionals',
  'Tourism Business Owners',
  'Accommodation Providers',
  'Hosts',
  'Travel Experience Creators',
  'Tour Operators',
  'Hospitality Professionals',
  'Students & Graduates',
  'Women Entrepreneurs',
  'Youth Entrepreneurs',
  'Community Members',
  'Destination Organisations',
  'Government Institutions',
  'Development Partners',
]

const developmentAreas = [
  {
    icon: GraduationCap,
    title: <strong>Signature Development Programmes</strong>,
    description: 'Comprehensive capability development programmes designed to transform aspiring individuals into confident tourism entrepreneurs, professional hosts, and experience creators.',
    groups: [
      {
        title: <>Flagship <strong>Programmes</strong></>,
        items: [
          'TraveleyeTravelpreneur Development Programme(Inbound & Outbound Tour Operations)',
          'Host Stay Development Programme',
          'Travel Experience Creator Programme',
          'Women in Tourism Entrepreneurship Programme',
          'Youth Tourism Entrepreneurship Programme',
        ],
      },
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: <strong>Tourism Skills Programmes</strong>,
    description: 'Practical, competency-based programmes designed to build job-ready skills for tourism enterprises, hospitality operations, host stays, and travel experiences.',
    groups: [
      { title: <strong>Hospitality Operations</strong>, items: ['Front Office Operations', 'Reservations Management', 'Housekeeping Operations', 'Food & Beverage Service', 'Kitchen Operations', 'Guest Relations', 'Customer Service Excellence'] },
      { title: <strong>Tour Operations</strong>, items: ['Tour Coordination', 'Tour Planning', 'Reservation Systems', 'Customer Care', 'Tour Guiding Fundamentals'] },
      { title: <strong>Host Stay Operations</strong>, items: ['Guest Experience Management', 'Housekeeping for Host Stays', 'Food Service for Host Stays', 'Property Operations', 'Hospitality Standards'] },
      { title: <strong>Experience Delivery</strong>, items: ['Experience Facilitation', 'Storytelling', 'Visitor Engagement', 'Safety & Risk Awareness', 'Service Quality'] },
    ],
  },
  {
    icon: BookOpen,
    title: <strong>Workshops &amp; Masterclasses</strong>,
    description: 'Specialised learning programmes designed to share industry knowledge, emerging trends, practical insights, and professional expertise with tourism entrepreneurs, professionals, and organisations.',
    prefix: 'Examples include:',
    groups: [
      { items: ['Tourism Business Workshops', 'Tourism Marketing Masterclasses', 'Digital Marketing for Tourism', 'Artificial Intelligence in Tourism', 'Sustainable Tourism', 'Tourism Finance', 'Tourism Innovation', 'Industry Best Practices'] },
    ],
  },
  {
    icon: Handshake,
    title: <strong>Mentoring &amp; Business Incubation</strong>,
    description: 'Learning does not end when a programme is completed.',
    extra: 'Our mentoring and business incubation initiatives provide ongoing guidance that helps participants apply their learning, strengthen their confidence, solve practical challenges, and continue their personal and professional development.',
    prefix: 'Support may include:',
    groups: [
      { items: ['Individual Mentoring', 'Group Coaching', 'Business Clinics', 'Enterprise Guidance', 'Peer Learning', 'Industry Networking', 'Continuous Professional Development'] },
    ],
  },
]

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
        <span>{children}</span>
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
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-[#dce5ef] bg-white px-4 py-3 text-sm leading-6 text-[#475569] shadow-sm sm:text-base">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TraveleyeUpSkills() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-slate-100">
        <img src={heroImg} alt="Traveleye UpSkills" className="absolute inset-0 h-full w-full object-cover object-center brightness-95" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex w-full justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"><strong>TRAVELEYE UPSKILLS</strong></h1>
            <p className="mt-4 text-base font-bold text-white sm:text-xl"><strong>Developing People. Strengthening Tourism.</strong></p>
            <p className="mt-2 text-sm font-bold text-white/95 sm:text-base lg:text-lg"><strong>Tourism People Capability Development Division</strong></p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={GraduationCap}><strong>Developing Capable People for a Stronger Tourism Industry</strong></SectionHeading>
        <Copy>
          <p>Tourism is powered by people.</p>
          <p>Every memorable journey, welcoming stay, authentic experience, successful tourism enterprise, and thriving destination depends on knowledgeable, capable, confident, and passionate people.</p>
          <p><strong>Traveleye</strong><strong>UpSkills</strong> is the <strong>Tourism People Capability Development Division</strong> of <strong>Traveleye</strong><strong> Alliance Sri Lanka</strong>, established to develop the knowledge, practical skills, professional competencies, leadership capabilities, and entrepreneurial mindset needed to strengthen Sri Lanka&apos;s tourism ecosystem.</p>
          <p>As an integral part of the <strong>People-Powered Tourism Ecosystem</strong>, TraveleyeUpSkills supports aspiring entrepreneurs, tourism professionals, hosts, experience creators, tour operators, students, communities, and industry partners through continuous learning, practical capability development, mentoring, and professional growth.</p>
          <p>Whether you are beginning your tourism journey, preparing for employment, developing your professional skills, starting a tourism business, or advancing your career, TraveleyeUpSkills provides practical learning experiences designed to help you grow with confidence.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Target}><strong>Our Purpose</strong></SectionHeading>
        <Copy><p>To develop knowledgeable, capable, confident, and future-ready tourism entrepreneurs, professionals, hosts, experience creators, and industry leaders who contribute to stronger tourism enterprises, thriving destinations, meaningful visitor experiences, and sustainable tourism development.</p></Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Users}><strong>Who We Support</strong></SectionHeading>
          <Copy><p>We support people across Sri Lanka&apos;s tourism ecosystem, including:</p></Copy>
          <CheckGrid items={supportedPeople} />
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Compass}><strong>Our Learning &amp; Capability Development Framework</strong></SectionHeading>
          <Copy>
            <p>At TraveleyeUpSkills, we believe developing capable people requires more than classroom learning.</p>
            <p>Our integrated learning framework combines structured learning, practical skills development, mentoring, coaching, and continuous professional support to help individuals build successful careers, strengthen tourism enterprises, and contribute to the long-term growth of Sri Lanka&apos;s tourism industry.</p>
          </Copy>
          <div className="mt-10 space-y-6 sm:mt-12">
            {developmentAreas.map(({ title, description, extra, prefix, groups }, index) => (
              <article key={index} className="py-6 sm:py-8">
                <div className="mx-auto max-w-4xl text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1f4f93] text-sm font-bold text-white" aria-hidden="true">{index + 1}</span>
                  <h3 className="mt-4 text-xl font-bold text-[#1f4f93] sm:text-2xl">{title}</h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
                    <p>{description}</p>
                    {extra ? <p>{extra}</p> : null}
                    {prefix ? <p>{prefix}</p> : null}
                  </div>
                </div>
                <div className={`mt-8 grid gap-6 ${groups.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-3xl'}`}>
                  {groups.map((group, groupIndex) => (
                    <div key={groupIndex} className="rounded-2xl border-t-4 border-[#1f4f93] bg-white p-6 shadow-sm sm:p-8">
                      {group.title ? <h4 className="text-xl font-bold text-[#1f4f93]">{group.title}</h4> : null}
                      <ul className={`${group.title ? 'mt-5' : ''} grid gap-3 ${groups.length === 1 ? 'sm:grid-cols-2' : ''}`}>
                        {group.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#475569] sm:text-base"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" /><span>{item}</span></li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Lightbulb}><strong>Our Learning Philosophy</strong></SectionHeading>
        <Copy>
          <p>At TraveleyeUpSkills, we believe stronger tourism begins with stronger people.</p>
          <p>By developing knowledgeable entrepreneurs, capable professionals, welcoming hosts, creative experience providers, confident tourism practitioners, and inspiring leaders, we contribute to stronger tourism enterprises, resilient destinations, meaningful visitor experiences, and sustainable tourism development.</p>
          <p>Every learning journey is designed not only to build knowledge and practical skills, but also to inspire confidence, professionalism, innovation, collaboration, and lifelong learning.</p>
        </Copy>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading icon={Route}><strong>Our Learning Journey</strong></SectionHeading>
        <Copy>
          <p>Learning is a continuous journey of personal and professional growth.</p>
          <p>At TraveleyeUpSkills, we support people through every stage of that journey—from discovering opportunities and building knowledge to developing practical skills, applying new capabilities, strengthening confidence, advancing careers, and becoming future leaders within Sri Lanka&apos;s tourism industry.</p>
          <p className="rounded-2xl bg-[#eef4fa] px-5 py-6 text-lg font-bold text-[#1f4f93] shadow-sm"><strong>Learn → Build Capability → Apply → Grow → Lead</strong></p>
        </Copy>
      </section>

      <section className="bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#d4e0ed] bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-14">
          <SectionHeading icon={Sparkles}><strong>Join the Learning Community</strong></SectionHeading>
          <Copy>
            <p>Whether you are exploring a career in tourism, developing professional skills, preparing to launch a tourism business, strengthening your hospitality capabilities, or seeking opportunities for continuous professional development, TraveleyeUpSkills provides practical learning experiences that help people realise their potential.</p>
            <p>Together, we are developing capable people who strengthen tourism enterprises, enrich visitor experiences, support local communities, and build a more inclusive, resilient, and people-powered tourism industry for Sri Lanka.</p>
          </Copy>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading icon={Sparkles}><strong>Continue Your Learning Journey</strong></SectionHeading>
          <Copy>
            <p>Whether you are a tourism entrepreneur, tourism professional, student, tourism enterprise, educational institution, government agency, development organisation, or strategic partner, TraveleyeUpSkills is ready to support your learning, professional development, and capacity-building journey through practical, industry-focused education and training.</p>
            <p>Contact us at <a href="mailto:upskills@traveleye.lk" className="font-semibold text-[#1f4f93] no-underline hover:text-[#173b70]">upskills@traveleye.lk</a> to learn more about our programmes, workshops, and professional development opportunities.</p>
          </Copy>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
