import {
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  Leaf,
  MapPinned,
  Sprout,
  Users,
} from 'lucide-react'
import heroImg from '../assets/client/Travelwith Purpose.png'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

const differencePoints = [
  'Choosing authentic local experiences and locally owned tourism services',
  'Respecting local customs, traditions, beliefs, and cultural values',
  'Appreciating local heritage, arts, crafts, and creative expression',
  'Supporting local entrepreneurs, hosts, guides, and community enterprises',
  'Acting responsibly towards nature, wildlife, and the environment',
  'Engaging respectfully with local people and communities',
  'Learning about the history, culture, and identity of destinations',
  'Helping preserve the places we visit through responsible behaviour',
]

const sharedValuePoints = [
  'Meaningful connections between travellers and local people',
  'Appreciation of culture, heritage, and local identity',
  'Responsible tourism practices',
  'Support for local participation and entrepreneurship',
  'Respect for nature and local environments',
  'Celebration of authentic experiences',
  'Destination stewardship',
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

export default function TravelWithPurpose() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Travel With Purpose"
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
              Travel With Purpose
            </h1>
            <p className="mt-4 text-sm font-normal text-white/95 sm:text-base lg:text-lg">
              Creating Meaningful Journeys Through People and Place
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto max-w-4xl space-y-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            <p>Travel is more than visiting destinations. It is an opportunity to connect with people, cultures, heritage, nature, traditions, and ways of life that make every place unique.</p>
            <p>The Traveleye People-Powered Tourism Framework encourages travel that creates meaningful experiences while contributing positively to destinations, local people, and tourism ecosystems through participation, stewardship, collaboration, and shared value creation.</p>
            <p>Every journey has the potential to leave a positive impact, enriching both the traveller and the places they visit.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title="Purposeful Travel Within the Traveleye Ecosystem" />
          <TextBlock tone="blue">
            <p>Within the Traveleye ecosystem, travel is viewed as an opportunity to create meaningful connections between travellers and destinations.</p>
            <p>Rather than simply moving from one place to another, purposeful travel encourages deeper engagement with local people, culture, hospitality, heritage, nature, creativity, and everyday life.</p>
            <p>By travelling through people and place, visitors gain richer experiences while contributing to stronger destinations and more resilient tourism ecosystems.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading icon={Sprout} title="Why Travel With Purpose?" />
          <TextBlock tone="blue">
            <p>Purposeful travel creates opportunities to experience destinations more authentically while contributing to the long-term wellbeing of people and place.</p>
            <p>It encourages journeys that create value not only for travellers but also for local communities, tourism enterprises, and destinations through responsible participation and meaningful engagement.</p>
            <p>Every journey becomes an opportunity to strengthen tourism through respect, appreciation, and shared responsibility.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake} title="Every Traveller Can Make a Difference" />
          <TextBlock>
            <p>Every journey creates opportunities to contribute positively to the destinations we visit.</p>
            <p>By making thoughtful choices, travellers can help strengthen local communities, celebrate cultural heritage, encourage responsible tourism practices, and support the long-term wellbeing of destinations.</p>
            <p>Purposeful travel is not about spending more or travelling differently. It is about travelling with greater awareness, respect, curiosity, and appreciation for the people and places that make every destination unique.</p>
            <p className="font-bold text-[#0f4d2f]">Simple choices can create meaningful impact, including:</p>
          </TextBlock>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
            {differencePoints.map((point) => (
              <div key={point} className="flex min-h-20 items-start gap-4 rounded-lg border border-[#eef4ef] bg-white p-4 shadow-sm">
                <IconBadge icon={Leaf} />
                <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-sm leading-7 text-[#234c3a] sm:text-base sm:leading-8">
            <p>When travellers become active participants rather than passive visitors, tourism creates deeper connections and greater shared value for everyone.</p>
            <p className="font-bold">Every meaningful journey has the power to strengthen people, place, and tourism ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Handshake} title="Creating Shared Value Through Travel" />
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Purposeful travel contributes to stronger tourism ecosystems by encouraging:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedValuePoints.map((point) => (
              <div key={point} className="flex min-h-24 items-center gap-4 rounded-lg border border-[#eef4ef] bg-white p-4 shadow-sm">
                <IconBadge icon={Users} />
                <p className="text-sm font-medium leading-6 text-[#141414]">{point}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-[#0f4d2f]">
            When travel creates shared value, destinations remain vibrant, resilient, and meaningful for future generations.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Leaf} title="Inspired by Curiosity. Guided by Respect." />
          <TextBlock tone="blue">
            <p>The Traveleye approach recognises that the most memorable journeys are often shaped by genuine human connection and authentic local experiences.</p>
            <p>Purposeful travel encourages visitors to slow down, engage more deeply, appreciate local stories, and experience destinations through the people who know them best.</p>
            <p>Together, travellers and destinations can create experiences that inspire understanding, friendship, and lasting memories.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Globe2} title="Looking Ahead" />
          <TextBlock tone="blue">
            <p>As tourism continues to evolve, purposeful travel will play an increasingly important role in strengthening destinations, supporting local participation, and encouraging more responsible tourism practices.</p>
            <p>By travelling through people and place, we believe tourism can create lasting value for travellers, communities, destinations, and future generations.</p>
          </TextBlock>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={MapPinned} title="Begin the Journey" />
          <TextBlock tone="blue">
            <p>Whether you are travelling for leisure, culture, wellness, pilgrimage, education, business, or celebration, we invite you to discover journeys that celebrate local people, culture, hospitality, heritage, nature, and authentic experiences.</p>
            <p>Travel with curiosity, respect, and purpose while creating positive value for the destinations and communities you visit.</p>
          </TextBlock>
          <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-[#eef4ef] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
              Contact us at<a href="mailto:info@traveleye.lk" className="font-semibold text-[#1f4f93]">info@traveleye.lk</a> to begin planning your meaningful journey.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading icon={Compass} title="Closing Reflection" />
          <TextBlock tone="blue">
            <p>The most memorable journeys are rarely defined only by the places we visit.</p>
            <p>They are shaped by the people we meet, the stories we hear, the cultures we experience, and the connections we create along the way.</p>
            <p>By travelling with purpose, every journey becomes an opportunity to contribute to stronger destinations while creating memories that last a lifetime.</p>
            <p >Because meaningful travel is not only about discovering new places.</p>
            <p>It is about connecting with people and place in ways that create lasting value for everyone.</p>
          </TextBlock>
        </div>
      </section>

      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
