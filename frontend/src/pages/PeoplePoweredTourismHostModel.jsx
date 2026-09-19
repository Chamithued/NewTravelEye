import { Fragment } from 'react'
import { House, Sparkles, Compass, ArrowRight, Landmark, Mountain, Utensils, Users, UserSearch, GraduationCap, TrendingUp, Network, Handshake } from 'lucide-react'
import heroImg from '../assets/subhero/Host Experiencesnew.jpg'
import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'
import content from './peoplePoweredTourismHostModelContent.json'

// Paragraph order and wording are preserved from the supplied Host Model document.
const sections = [
  { heading: 5, end: 11 },
  { heading: 12, end: 23, list: [16, 22] },
  { heading: 24, end: 29, panels: [26, 28] },
  { heading: 30, end: 38, pathways: [34, 35], boxedSteps: true },
  { heading: 39, end: 49, cards: [42, 48], icons: [House, Sparkles, Compass, Landmark, Mountain, Utensils, Users] },
  { heading: 50, end: 56, pathways: [55, 55] },
  { heading: 57, end: 61 },
  { heading: 62, end: 70, cards: [65, 69], icons: [UserSearch, GraduationCap, TrendingUp, Network, Handshake] },
  { heading: 71, end: 74 },
  { heading: 75, end: 77 },
]
const backgrounds = ['bg-white', 'bg-[#FCFBF8]', 'bg-[#eef4fa]']
const hostingIcons = [House, Sparkles, Compass]

function SectionContent({ section }) {
  const blocks = []
  for (let index = section.heading + 1; index <= section.end; index += 1) {
    const group = ['list', 'cards', 'panels', 'pathways'].find(
      (kind) => section[kind]?.[0] === index,
    )
    if (group) {
      const end = section[group][1]
      const paragraphs = content.slice(index, end + 1)
      if (group === 'list') {
        blocks.push(
          <ul key={index} className="mx-auto max-w-3xl space-y-3 text-left">
            {paragraphs.map((paragraph) => (
              <li key={paragraph} className="flex gap-3 rounded-xl bg-white/70 px-4 py-3 shadow-sm ring-1 ring-slate-200/70">
                <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#c28a5b]" />
                <span>{paragraph}</span>
              </li>
            ))}
          </ul>,
        )
      } else if (group === 'cards' || group === 'panels') {
        blocks.push(
          <div key={index} className={`grid gap-6 text-left ${group === 'panels' ? 'lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {paragraphs.map((paragraph, paragraphIndex) => {
              const [title, ...body] = paragraph.split('\n')
              const Icon = group === 'panels' ? hostingIcons[paragraphIndex] : section.icons?.[paragraphIndex]
              return (
                <article
                  key={paragraph}
                  className={`rounded-2xl border border-[#eef4ef] bg-white p-5 shadow-sm sm:p-7 ${
                    group === 'cards' && paragraphs.length % 2 === 1 && paragraphIndex === paragraphs.length - 1
                      ? 'sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:justify-self-center'
                      : ''
                  }`}
                >
                  {Icon && !body.length && (
                    <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7EF] text-[#1f4f93]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  )}
                  {body.length ? (
                    <>
                      <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-[#1f4f93] sm:text-2xl">
                        {Icon && (
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F7EF]">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                        <span>{title}</span>
                      </h3>
                      <p className="mt-3">{body.join('\n')}</p>
                    </>
                  ) : <p>{paragraph}</p>}
                </article>
              )
            })}
          </div>,
        )
      } else {
        blocks.push(
          <div key={index} className={section.boxedSteps ? 'space-y-10' : 'space-y-4'}>
            {paragraphs.map((paragraph) => (
              section.boxedSteps ? (
                <div key={paragraph} className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4">
                  {paragraph.split(' → ').map((step, stepIndex) => (
                    <Fragment key={step}>
                      {stepIndex > 0 && <ArrowRight aria-hidden="true" className="mx-auto h-6 w-6 rotate-90 text-[#1f4f93] sm:rotate-0" />}
                      <div className="flex min-h-24 items-center justify-center self-stretch rounded-2xl border border-[#1f4f93] px-5 py-6 font-bold leading-8 text-[#1f4f93] sm:text-lg">
                        {step}
                      </div>
                    </Fragment>
                  ))}
                </div>
              ) : <p key={paragraph} className="rounded-2xl bg-[#dfe6ef] px-5 py-6 font-bold leading-8 text-[#1f4f93] sm:text-lg">{paragraph}</p>
            ))}
          </div>,
        )
      }
      index = end
    } else {
      blocks.push(<p key={index} className={index === 77 ? 'text-lg font-bold text-[#1f4f93]' : ''}>{content[index]}</p>)
    }
  }
  return <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{blocks}</div>
}

export default function PeoplePoweredTourismHostModel() {
  return (
    <main className="flex flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-[42vh] w-full items-center overflow-hidden bg-slate-100 sm:min-h-[48vh]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover object-center brightness-95" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex w-full justify-center px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-5xl text-center">
            <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              {content[0]}
            </h1>
            <p className="mt-3 text-sm text-white/95 sm:text-base lg:text-lg">{content[1]}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto w-fit rounded-full bg-[#dfe6ef] px-5 py-2 text-[1.05rem] font-extrabold text-[#1f4f93] shadow-sm">{content[2]}</h2>
          <p className="mt-2 text-lg font-bold leading-8 text-[#172544]">{content[3]}</p>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{content[4]}</p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={section.heading} aria-labelledby={`host-section-${section.heading}`} className={`w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 ${backgrounds[index % backgrounds.length]}`}>
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 id={`host-section-${section.heading}`} className="text-2xl font-bold leading-tight tracking-tight text-[#1f4f93] sm:text-4xl">{content[section.heading]}</h2>
              <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-[#c28a5b]" />
            </div>
            <SectionContent section={section} />
          </div>
        </section>
      ))}
      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
