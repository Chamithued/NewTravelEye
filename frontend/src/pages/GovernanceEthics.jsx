import {
  CheckCircle2,
  Compass,
  Handshake,
  Leaf,
  Mail,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/subhero/about/Governance & Ethics.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const principleCards = [
  {
    title: 'Transparency',
    paragraphs: [
      'We believe transparency helps build trust among travellers, tourism stakeholders, enterprises, communities, partners, and ecosystem participants.',
      'We seek to promote open communication, responsible conduct, and clarity in the way we engage, collaborate, and operate.',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Accountability',
    paragraphs: [
      'Accountability is essential to maintaining confidence, credibility, and long-term sustainability.',
      'We encourage responsible decision-making, ethical conduct, and a commitment to delivering on responsibilities and commitments across our initiatives and partnerships.',
    ],
    icon: CheckCircle2,
  },
  {
    title: 'Ethical Participation',
    paragraphs: [
      'The Traveleye ecosystem encourages participation that is respectful, responsible, and guided by integrity.',
      'We seek to promote tourism practices that support fair engagement, mutual respect, and responsible collaboration among tourism stakeholders.',
    ],
    icon: Scale,
  },
  {
    title: 'Inclusive Participation',
    paragraphs: [
      'We believe stronger tourism ecosystems are created when opportunities remain accessible, inclusive, and locally connected.',
      'The framework encourages broader participation from tourism enterprises, hosts, entrepreneurs, community members, women and youth entrepreneurs, tourism professionals, and ecosystem partners.',
    ],
    icon: Users,
  },
  {
    title: 'Shared Stewardship',
    paragraphs: [
      'Destinations are shaped by people, culture, heritage, nature, and community life.',
      'We believe tourism should contribute positively to the long-term wellbeing of destinations through responsible engagement, collaboration, and stewardship.',
      'Shared stewardship encourages tourism stakeholders to recognise their role in supporting the places that make tourism possible.',
    ],
    icon: Leaf,
  },
  {
    title: 'Responsible Partnerships',
    paragraphs: [
      'Collaboration is an important part of the Traveleye ecosystem.',
      'We seek to build relationships with partners, enterprises, institutions, communities, and stakeholders who share a commitment to ethical conduct, responsible tourism practices, participation, and long-term value creation.',
      'Partnerships are approached with respect, transparency, accountability, and a shared commitment to positive tourism outcomes.',
    ],
    icon: Handshake,
  },
  {
    title: 'Human-Centred Innovation',
    paragraphs: [
      'Innovation is an important part of tourism development.',
      'However, we believe innovation should remain connected to people, destinations, culture, and lived realities.',
      'The Traveleye People-Powered Tourism Framework encourages innovation that strengthens tourism while supporting participation, destination wellbeing, and long-term resilience.',
    ],
    icon: Sprout,
  },
]

function SectionHeading({ icon: Icon, title, subtitle, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-2xl'}>
      <h2
        className={[
          'mt-0 flex gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl',
          center ? 'items-center justify-center' : 'items-start',
        ].join(' ')}
      >
        {Icon ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className={['mt-3 h-0.5 w-24 rounded bg-[#c28a5b]', center ? 'mx-auto' : ''].join(' ')} />
      {subtitle ? <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">{subtitle}</p> : null}
    </div>
  )
}

function TextCard({ children }) {
  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
      <div className="space-y-5 text-sm leading-7 text-[#55636a] sm:text-base sm:leading-8">{children}</div>
    </article>
  )
}

export default function GovernanceEthics() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Governance & Ethics banner"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-105"
          />
          <div className="absolute inset-0 bg-black/16" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              <span className="block">GOVERNANCE &amp; ETHICS</span>
            </h1>
            <p className="mt-3 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Guided by Responsibility, Integrity, and Stewardship
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Sprout} title="Guided by Responsibility, Integrity, and Stewardship" />
          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              At Traveleye Alliance Sri Lanka, governance and ethics play an important role in shaping how we approach tourism, partnerships, participation, and long-term ecosystem development.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              As a People-Powered Tourism Ecosystem Builder, we believe that stronger tourism outcomes are supported by transparency, accountability, ethical conduct, and responsible decision-making.
            </p>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              These principles help guide our relationships, initiatives, partnerships, and contribution to tourism development.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading icon={Compass} title="Our Approach to Governance" />
            <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              <p>Governance is not viewed solely as a matter of compliance or oversight.</p>
              <p>
                It is also about creating environments where participation, trust, accountability, and responsible leadership can support long-term tourism wellbeing.
              </p>
              <p>
                Through the Traveleye People-Powered Tourism Framework, governance helps ensure that tourism remains connected to people, destinations, culture, stewardship, and shared responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Scale} title="Principles That Guide Us" />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principleCards.map(({ title, paragraphs, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1FF] text-[#214F95]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-black sm:text-2xl">{title}</h3>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#55636a] sm:text-base sm:leading-8">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Sprout}
            title="Governance in Support of Tourism for People, Planet, and Prosperity"
          />

          <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              The governance and ethical principles that guide Traveleye Alliance are intended to support tourism that creates value for travellers while contributing to broader social, cultural, environmental, and economic wellbeing.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              By encouraging transparency, accountability, participation, stewardship, and responsible collaboration, we seek to contribute to tourism ecosystems that are more inclusive, trusted, and resilient over time.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="Looking Ahead" />

          <div className="mt-8 space-y-5 text-sm leading-7 text-[#6b7894] sm:text-base sm:leading-8">
            <p>
              As tourism continues to evolve, governance and ethics will remain fundamental to the way Traveleye Alliance approaches participation, partnerships, destination engagement, and ecosystem development.
            </p>
            <p>
              Guided by the People-Powered Tourism Framework, we remain committed to helping create tourism ecosystems that are responsible, inclusive, and grounded in long-term thinking.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
              Tourism for People, Planet, and Prosperity.
            </span>
            <span className="inline-flex rounded-full border border-[#D6E8FF] bg-[#E8F1FF] px-4 py-2 text-xs font-semibold text-[#214F95] shadow-sm sm:px-6 sm:py-3 sm:text-sm">
              Tourism Shaped by the People Who Make It Possible.
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading icon={Mail} title="Begin the Conversation" />

          <div className="mx-auto mt-8 rounded-2xl border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Interested in learning more about Traveleye Alliance, the People-Powered Tourism Framework, ecosystem partnerships, or responsible tourism collaboration?
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
