import {
  Award,
  BookOpen,
  FolderOpen,
  Mail,
  Megaphone,
  Mic2,
  Newspaper,
  Radio,
  CheckCircle2,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/Media & Press.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const newsItems = [
  'Tourism ecosystem initiatives',
  'Strategic partnerships and collaborations',
  'Programme and project launches',
  'Destination development initiatives',
  'Tourism enterprise development',
  'Industry events and participation',
  'Awards and recognitions',
  'Organisational milestones',
]

const releaseItems = [
  'Corporate announcements',
  'Partnership announcements',
  'Programme launches',
  'Event announcements',
  'Leadership statements',
  'Tourism industry initiatives',
  'Research and publications',
]

const insightItems = [
  'People-Powered Tourism',
  'Tourism enterprise development',
  'Destination development',
  'Tourism innovation',
  'Sustainable tourism',
  'Travel corridors',
  'Community participation',
  'Tourism entrepreneurship',
  'Tourism policy and industry trends',
]

const resourceItems = [
  'Corporate profile',
  'Organisation overview',
  'Leadership biographies',
  'Brand guidelines',
  'Logos and brand assets',
  'Approved photographs',
  'Press releases',
  'Publications and reports',
  'Presentation materials',
  'Videos and multimedia resources',
]

const engagementItems = [
  'Media interviews',
  'Conference presentations',
  'Keynote speeches',
  'Panel discussions',
  'Industry forums',
  'University lectures',
  'Professional events',
  'Podcasts and webinars',
]

const engagementTopics = [
  'People-Powered Tourism',
  'Tourism enterprise development',
  'Destination development',
  'Tourism innovation',
  'Tourism ecosystems',
  'Entrepreneurship',
  'Sustainable tourism',
  'Future tourism trends',
]

const recognitionItems = [
  'Industry awards',
  'Professional recognitions',
  'International participation',
  'Conference presentations',
  'Research publications',
  'Strategic collaborations',
  'Tourism development initiatives',
]

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function CheckList({ items, columns = false }) {
  return (
    <ul className={`mt-6 grid gap-3 text-left ${columns ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl border border-[#eef4ef] bg-white p-4 text-sm leading-7 text-[#55636a] shadow-sm sm:text-base">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function MediaPress() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Media & Press banner" className="absolute inset-0 h-full w-full object-cover object-center brightness-105" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              Media &amp; Press
            </h1>
            <p className="mt-3 text-sm font-bold text-white/95 sm:text-base lg:text-lg">Official News, Media Resources, and Public Announcements</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Newspaper} title="Official News, Media Resources, and Public Announcements" />
          <div className="mt-8 space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Welcome to the Media &amp; Press Centre of <strong>Traveleye Alliance Sri Lanka</strong>.</p>
            <p>This page provides journalists, media organisations, partners, researchers, and the public with access to official news, announcements, media resources, and organisational information relating to <strong>Sri Lanka's First People-Powered Tourism Ecosystem</strong>.</p>
            <p>As the Builder and Steward of the People-Powered Tourism Ecosystem, we share updates that reflect our work in tourism enterprise development, destination development, strategic partnerships, ecosystem innovation, and tourism leadership.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Newspaper} title="Latest News & Announcements" />
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base"><p>Stay informed with our latest organisational updates and key developments.</p><p>This section features official news relating to:</p></div>
            <CheckList items={newsItems} columns />
            <p className="mt-6 text-center text-sm leading-7 text-[#475569] sm:text-base">All news published through this page represents official communications issued by Traveleye Alliance Sri Lanka.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Megaphone} title="Media Releases" />
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base"><p>Our official media releases provide verified information for journalists, media organisations, partners, and stakeholders.</p><p>Media releases may include:</p></div>
            <CheckList items={releaseItems} columns />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={BookOpen} title="Insights & Thought Leadership" />
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base"><p>As the developer of the <strong>People-Powered Tourism Framework</strong>, Traveleye Alliance contributes ideas and perspectives that support the future of tourism.</p><p>Topics may include:</p></div>
            <CheckList items={insightItems} columns />
            <p className="mt-6 text-center text-sm leading-7 text-[#475569] sm:text-base">These insights reflect our commitment to advancing knowledge, encouraging dialogue, and contributing to stronger tourism ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={FolderOpen} title="Media Resources" />
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base"><p>To support accurate reporting and communication, we provide a range of official media resources.</p><p>Available resources include:</p></div>
            <CheckList items={resourceItems} columns />
            <p className="mt-6 text-center text-sm leading-7 text-[#475569] sm:text-base">Additional resources will be published as they become available.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Mic2} title="Speaking Engagements & Interviews" />
          <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-[1.4rem] border border-[#dce5ef] border-t-4 border-t-[#1f4f93] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-center text-sm font-semibold leading-7 text-[#475569] sm:text-base">Our leadership team is available, subject to availability, for:</p>
              <ul className="mt-6 divide-y divide-[#eef4ef]">
                {engagementItems.map((item) => (
                  <li key={item} className="flex gap-3 py-3 text-sm leading-7 text-[#55636a] sm:text-base">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="overflow-hidden rounded-[1.4rem] border border-[#dce5ef] border-t-4 border-t-[#1f4f93] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-center text-sm font-semibold leading-7 text-[#475569] sm:text-base">Topics include:</p>
              <ul className="mt-6 divide-y divide-[#eef4ef]">
                {engagementTopics.map((item) => (
                  <li key={item} className="flex gap-3 py-3 text-sm leading-7 text-[#55636a] sm:text-base">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Award} title="Awards, Recognition & Industry Participation" />
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-4 text-center text-sm leading-7 text-[#475569] sm:text-base"><p>This section highlights significant achievements and contributions by Traveleye Alliance Sri Lanka.</p><p>It may include:</p></div>
            <CheckList items={recognitionItems} columns />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Mail} title="Media Enquiries" />
          <div className="mt-8 space-y-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>For media interviews, press enquiries, speaking invitations, partnership announcements, or requests for official information, please contact:</p>
            <p><strong>Traveleye Alliance Sri Lanka</strong></p>
            <p><strong>Email:</strong> <a href="mailto:info@traveleye.lk" className="text-[#1f4f93] underline underline-offset-4">info@traveleye.lk</a></p>
            <p>Our team will respond to media enquiries as promptly as possible.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Radio} title="Stay Connected" />
          <div className="mt-8 space-y-5 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            <p>Follow Traveleye Alliance Sri Lanka as we continue building <strong>Sri Lanka's First People-Powered Tourism Ecosystem</strong> through collaboration, innovation, tourism enterprise development, and destination stewardship.</p>
            <p><strong>Tourism for People, Planet, and Prosperity.</strong></p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
