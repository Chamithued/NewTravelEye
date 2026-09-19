import { Fragment } from 'react'
import { BriefcaseBusiness, House, Sparkles, Compass, Bus, Users, Globe2, Handshake, Network, TrendingUp, ListChecks, Sprout, Route, Leaf } from 'lucide-react'
import heroImg from '../assets/subhero/Host Experiencesnew.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'
import content from './peoplePoweredTourismRevenueSharingModelContent.json'

// Paragraphs and individual bold runs are transcribed directly from the Word document.
const sections = [
  { heading: 5, end: 11, icon: TrendingUp, pathway: 10 },
  { heading: 12, end: 23, icon: Network, list: [16, 22], boxedList: true },
  { heading: 24, end: 31, icon: Handshake },
  { heading: 32, end: 42, icon: Users, cards: [35, 41], icons: [BriefcaseBusiness, House, Sparkles, Compass, Bus, Users, Globe2] },
  { heading: 43, end: 51, icon: Globe2, cards: [45, 50], icons: [House, Sparkles, Route, Compass, Globe2, ListChecks] },
  { heading: 52, end: 66, icon: ListChecks, list: [55, 64], boxedList: true },
  { heading: 67, end: 78, icon: TrendingUp, cycle: [71, 77] },
  { heading: 79, end: 85, icon: Network },
  { heading: 86, end: 95, icon: Route, cards: [89, 94], icons: [Users, ListChecks, Handshake, Compass, Network, Sprout] },
  { heading: 96, end: 100, icon: Sprout },
  { heading: 101, end: 103, icon: Handshake },
]
const backgrounds = ['bg-white', 'bg-[#FCFBF8]', 'bg-[#eef4fa]']

function RichText({ runs }) {
  return runs.map((run, index) => run.bold
    ? <strong key={index}>{run.text}</strong>
    : <span key={index}>{run.text}</span>)
}

function Paragraph({ index, className = '' }) {
  return <p className={`whitespace-pre-line ${className}`}><RichText runs={content[index].runs} /></p>
}

function Card({ index, icon: Icon }) {
  const title = []
  const body = []
  let inBody = false
  for (const run of content[index].runs) {
    const newline = run.text.indexOf('\n')
    if (!inBody && newline !== -1) {
      title.push({ ...run, text: run.text.slice(0, newline) })
      body.push({ ...run, text: run.text.slice(newline + 1) })
      inBody = true
    } else {
      (inBody ? body : title).push(run)
    }
  }
  return (
    <article className="rounded-2xl border border-[#eef4ef] bg-white p-5 text-left shadow-sm sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-xl font-normal tracking-tight text-black sm:text-2xl"><RichText runs={title} /></h3>
      <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#55636a] sm:text-base"><RichText runs={body} /></p>
    </article>
  )
}

function SectionContent({ section }) {
  const blocks = []
  for (let index = section.heading + 1; index <= section.end; index += 1) {
    const kind = ['cards', 'list', 'cycle'].find((group) => section[group]?.[0] === index)
    if (section.pathway === index) {
      const steps = content[index].runs.map((run) => run.text).join('').split(' → ')
      blocks.push(
        <div key={index} className="grid grid-cols-1 items-center gap-3 text-[#1f4f93] lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
          {steps.map((step, stepIndex) => (
            <Fragment key={step}>
              {stepIndex > 0 && <span className="text-2xl rotate-90 lg:rotate-0">→</span>}
              <div className="flex min-h-24 items-center justify-center self-stretch rounded-2xl border border-[#1f4f93] bg-transparent px-4 py-5">
                <strong>{step}</strong>
              </div>
            </Fragment>
          ))}
        </div>,
      )
    } else if (kind) {
      const start = index
      const end = section[kind][1]
      const indices = Array.from({ length: end - start + 1 }, (_, offset) => start + offset)
      if (kind === 'cards') {
        blocks.push(<div key={start} className="grid gap-6 sm:grid-cols-2">
          {indices.map((item, offset) => <Card key={item} index={item} icon={section.icons[offset]} />)}
        </div>)
      } else if (kind === 'list') {
        blocks.push(<ul key={start} className={section.boxedList ? 'mx-auto max-w-2xl list-none divide-y divide-[#d3dfef] rounded-2xl border border-[#d3dfef] bg-white px-5 text-left shadow-sm sm:px-8' : 'mx-auto max-w-4xl list-disc space-y-3 pl-6 text-left marker:text-[#1f4f93]'}>
          {indices.map((item) => <li key={item} className={section.boxedList ? 'flex items-start gap-4 py-5 sm:gap-6' : undefined}>
            {section.boxedList && <Leaf className="mt-1 h-5 w-5 shrink-0 text-[#1f4f93]" aria-hidden="true" />}
            <span><RichText runs={content[item].runs} /></span>
          </li>)}
        </ul>)
      } else {
        blocks.push(<ol key={start} className="mx-auto max-w-2xl space-y-3">
          {indices.map((item) => <li key={item} className="rounded-2xl border border-[#dfe6ef] bg-white px-5 py-4 text-[#1f4f93] shadow-sm"><RichText runs={content[item].runs} /></li>)}
        </ol>)
      }
      index = end
    } else {
      blocks.push(<Paragraph key={index} index={index} className={section.highlight?.includes(index) ? 'rounded-2xl bg-[#dfe6ef] px-5 py-6 text-lg text-[#1f4f93]' : ''} />)
    }
  }
  return <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{blocks}</div>
}

export default function PeoplePoweredTourismRevenueSharingModel() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover object-center brightness-95" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex w-full justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-normal leading-none tracking-tight text-white sm:text-4xl lg:text-5xl"><RichText runs={content[0].runs} /></h1>
            <Paragraph index={1} className="mt-3 text-sm text-white/95 sm:text-base lg:text-lg" />
          </div>
        </div>
      </section>
      <section className="bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-normal text-[#1f4f93] shadow-sm"><RichText runs={content[2].runs} /></h2>
          <Paragraph index={3} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8" />
          <Paragraph index={4} className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8" />
        </div>
      </section>
      {sections.map((section, index) => {
        const Icon = section.icon
        return (
          <section key={section.heading} aria-labelledby={`revenue-section-${section.heading}`} className={`w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 ${backgrounds[index % backgrounds.length]}`}>
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto max-w-4xl text-center">
                <h2 id={`revenue-section-${section.heading}`} className="flex items-center justify-center gap-3 text-2xl font-normal leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFE7F3]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <span><RichText runs={content[section.heading].runs} /></span>
                </h2>
                <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
              </div>
              <SectionContent section={section} />
            </div>
          </section>
        )
      })}
      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
