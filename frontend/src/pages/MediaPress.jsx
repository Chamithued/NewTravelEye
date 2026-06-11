import { Megaphone, Newspaper, Lightbulb, FolderOpen, Mail, CheckCircle2 } from 'lucide-react'
import heroImg from '../assets/client/Travel3.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const announcementItems = [
  'Ecosystem initiatives and developments',
  'Strategic partnerships and collaborations',
  'Program launches and milestones',
  'Industry engagements and participation',
  'Framework and ecosystem updates',
  'Tourism development initiatives',
  'Organizational announcements',
]

const insightItems = [
  'People-Powered Tourism',
  'Tourism ecosystem development',
  'Participation and shared stewardship',
  'Tourism innovation',
  'Destination wellbeing',
  'Tourism trends and emerging opportunities',
]

const resourceItems = [
  'Organizational information',
  'Leadership profiles',
  'Media releases',
  'Brand assets',
  'Approved images and visual resources',
]

function SectionHeading({ icon: Icon, title, subtitle, compact = false }) {
  return (
    <div className={['mx-auto max-w-3xl text-center', compact ? 'mb-4' : 'mb-8'].join(' ')}>
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1C4686]">
          <Icon className="h-5 w-5" />
        </span>
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#475569] sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="mt-6 divide-y divide-[#eef4ef]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-3 text-sm leading-6 text-[#234c3a] sm:text-base">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3c8b49]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function MediaPress() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Media & Press banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/32" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              MEDIA &amp; PRESS
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Official Updates, Announcements &amp; Media Information
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          {/* <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1C4686]">
            <Newspaper className="h-5 w-5" />
          </div> */}
          <p className="mx-auto max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            This page provides official announcements, media updates, public communications, and verified information related to Traveleye Alliance Sri Lanka and its People-Powered Tourism initiatives.
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            As a People-Powered Tourism Ecosystem Builder, Traveleye Alliance actively engages in tourism innovation, ecosystem development, partnerships, destination initiatives, and tourism-related programs that contribute to stronger and more connected tourism ecosystems.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-2">
          <article className="self-start rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-6">
            <SectionHeading
              icon={Newspaper}
              title="Press Coverage"
              compact
              subtitle="Selected media features, interviews, articles, and editorial references related to Traveleye Alliance, its initiatives, partnerships, and ecosystem development activities will be featured here."
            />
            <p className="text-sm leading-7 text-[#55636a] sm:text-base">
              Press coverage will be updated periodically as new publications become available.
            </p>
          </article>

          <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
            <SectionHeading
              icon={Megaphone}
              title="Official Announcements"
              subtitle="This section includes official updates issued by Traveleye Alliance Sri Lanka, including:"
            />
            <BulletList items={announcementItems} />
            <p className="mt-6 text-sm leading-7 text-[#55636a] sm:text-base">
              All announcements published through this section represent official communications issued by Traveleye Alliance.
            </p>
          </article>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            icon={Lightbulb}
            title="News & Insights"
            subtitle="From time to time, Traveleye Alliance may share perspectives, commentary, and insights related to:"
          />
          <div className="mx-auto mt-6 max-w-md rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <BulletList items={insightItems} />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            These insights reflect our ongoing commitment to contributing to discussions that support stronger tourism futures.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={FolderOpen}
            title="Media Resources"
            subtitle="Media resources and selected organizational materials will be made available progressively for journalists, media organizations, partners, researchers, and other interested stakeholders."
          />

          <div className="mx-auto max-w-3xl rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base">
              Additional resources may include:
            </p>
            <BulletList items={resourceItems} />
            <p className="mt-6 text-sm leading-7 text-[#475569] sm:text-base">
              Available resources will be published as they become available.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading icon={Mail} title="Media Enquiries" />
          <p className="text-sm leading-7 text-[#6b7894] sm:text-base">
            For media enquiries, interviews, speaking opportunities, partnership announcements, or requests for official information, please contact:
          </p>
          <a
            href="mailto:info@traveleye.lk"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#1C4686] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#153b72] sm:text-base"
          >
            info@traveleye.lk
          </a>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
