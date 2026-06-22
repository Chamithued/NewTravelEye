import {
  BookOpen,
  Building2,
  Globe2,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Support Local People & Communities.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const participationPoints = [
  'Individuals and families',
  'Tourism enterprises',
  'Entrepreneurs and business leaders',
  'Corporate organisations and CSR initiatives',
  'Cooperative movements and cooperative societies',
  'Community groups and community-based organisations',
  'Foundations and philanthropic organisations',
  'Educational and research institutions',
  'Development organisations',
  'International organisations and development partners',
  'Professional associations and industry bodies',
  'Sri Lankan diaspora communities',
  'Ecosystem collaborators and strategic partners',
]

const sharedValuePoints = [
  'Greater local participation',
  'Entrepreneurship and innovation',
  'Women and youth empowerment',
  'Community engagement',
  'Destination stewardship',
  'Knowledge sharing and capability development',
  'Responsible tourism practices',
  'Stronger tourism enterprises',
  'Long-term value creation for people and place',
]

function IconBadge({ icon: Icon }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3] text-[#1f4f93]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-0 flex items-center justify-center gap-3 text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
        {Icon ? <IconBadge icon={Icon} /> : null}
        <span>{title}</span>
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
    </div>
  )
}

function TextBlock({ children, tone = 'slate' }) {
  const color = tone === 'green' ? 'text-[#234c3a]' : tone === 'blue' ? 'text-[#475569]' : 'text-slate-700'

  return (
    <div className={`mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-7 ${color} sm:text-base sm:leading-8`}>
      {children}
    </div>
  )
}

export default function SupportPeoplePoweredTourism() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Support People-Powered Tourism"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-4xl text-center">
            <h1
              style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }}
              className="text-3xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Support People-Powered Tourism
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Strengthening Tourism Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Tourism flourishes when people, communities, enterprises, institutions, and partners work together to create opportunities that benefit destinations and future generations.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages participation that strengthens tourism through collaboration, stewardship, innovation, knowledge sharing, entrepreneurship, and shared value creation.</p>
            <p>Whether you are an individual, organisation, cooperative movement, institution, corporate partner, development agency, foundation, or community group, there are many ways to support a more connected, inclusive, and people-powered future for tourism.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Supporting People-Powered Tourism Within the Traveleye Ecosystem" />
          <TextBlock tone="blue">
            <p>Supporting People-Powered Tourism means helping create opportunities that strengthen people, destinations, entrepreneurship, innovation, participation, stewardship, and long-term tourism ecosystem resilience.</p>
            <p>Support can take many forms, including knowledge sharing, mentorship, advocacy, sponsorship, capability development, collaboration, responsible investment, corporate social responsibility initiatives, philanthropy, and other meaningful contributions that create lasting value for tourism and local communities.</p>
            <p>Every contribution—whether through expertise, partnership, resources, leadership, or shared purpose—has the potential to strengthen people, place, and the future of tourism.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Support People-Powered Tourism?" />
          <TextBlock tone="blue">
            <p>Supporting People-Powered Tourism creates opportunities to contribute to a more inclusive, resilient, and collaborative tourism future.</p>
            <p>Meaningful support can help strengthen local participation, encourage innovation, expand opportunities for women and youth entrepreneurs, improve destination readiness, preserve local identity, and contribute to stronger tourism ecosystems.</p>
            <p>By supporting People-Powered Tourism, individuals and organisations become part of a collective effort that creates lasting value for communities, destinations, and future generations.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Who Can Support People-Powered Tourism?" />
          <TextBlock>
            <p>The Traveleye ecosystem welcomes participation from individuals and organisations who share a commitment to strengthening tourism through people and place.</p>
            <p className="font-bold text-[#0f4d2f]">Participation may include:</p>
          </TextBlock>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {participationPoints.map((point) => (
              <div key={point} className="flex min-h-20 items-start gap-4 rounded-lg border border-[#eef4ef] bg-white p-4 shadow-sm">
                <IconBadge icon={Users} />
                <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
              </div>
            ))}
          </div>

          <TextBlock tone="green">
            <p>Each opportunity is explored according to shared objectives, destination priorities, and opportunities to create meaningful long-term value.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Supporting Stronger Tourism Ecosystems" />
          <TextBlock tone="blue">
            <p>People-Powered Tourism can be strengthened in many different ways through participation, expertise, collaboration, innovation, mentorship, advocacy, education, research, enterprise development, destination stewardship, responsible investment, and community engagement.</p>
            <p>Every contribution, regardless of its form or scale, has the potential to strengthen tourism ecosystems and create new opportunities for people, destinations, and future generations.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake} title="Creating Shared Value Through Support" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Supporting People-Powered Tourism contributes to stronger tourism ecosystems by encouraging:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sharedValuePoints.map((point) => (
              <div key={point} className="flex min-h-24 items-center gap-4 rounded-lg border border-[#eef4ef] bg-white p-4 shadow-sm">
                <IconBadge icon={Lightbulb} />
                <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When more people contribute to strengthening tourism ecosystems, destinations become more connected, resilient, inclusive, and sustainable.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={BookOpen} title="Inspired by Shared Responsibility. Connected Through Purpose." />
          <TextBlock tone="blue">
            <p>The Traveleye approach recognises that meaningful tourism depends on the collective efforts of many people and organisations.</p>
            <p>Support can take many forms, but every contribution helps strengthen tourism ecosystems that create opportunities for communities, enterprises, destinations, and future generations.</p>
            <p>Together, we can help build a tourism future that benefits people and place alike.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Looking Ahead" />
          <TextBlock tone="blue">
            <p>As the Traveleye ecosystem continues to evolve, opportunities to support People-Powered Tourism will continue to grow through participation, collaboration, innovation, entrepreneurship, destination stewardship, education, and ecosystem development.</p>
            <p>By bringing together people, knowledge, partnerships, and shared purpose, we believe tourism can create lasting value for communities, destinations, enterprises, and future generations.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Building2} title="Begin the Conversation" />
          <TextBlock tone="blue">
            <p>Whether you are an individual, entrepreneur, tourism enterprise, corporate organisation, cooperative movement, community group, educational institution, development partner, foundation, or international organisation, we welcome opportunities to explore how you can support People-Powered Tourism and contribute to stronger tourism ecosystems through people and place.</p>
            <p>Together, we can help create stronger destinations, greater participation, and more resilient tourism ecosystems for future generations.</p>
          </TextBlock>
          <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at <a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Sprout} title="Closing Reflection" />
          <TextBlock tone="blue">
            <p>Tourism is strengthened not only by those who travel, but also by those who contribute their knowledge, leadership, resources, partnerships, creativity, and commitment to building stronger destinations and more resilient tourism ecosystems.</p>
            <p>Every contribution, however large or small, can help create opportunities that benefit people, places, and future generations.</p>
            <p><strong>Because People-Powered Tourism is built through collective participation and shared responsibility.</strong></p>
            <p><strong>Together, we can help create a more connected, inclusive, and sustainable future for tourism through the power of people and place.</strong></p>
          </TextBlock>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
