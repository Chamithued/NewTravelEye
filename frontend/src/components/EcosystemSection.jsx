import {
	Building2,
	Compass,
	Leaf,
	MapPinned,
	BriefcaseBusiness,
} from 'lucide-react'

import ecosystemImg from '../assets/Traveleye People-Powered Tourism Ecosystem.jpg'

const ecosystemPillars = [
	{
		code: 'PPTC',
		title: 'People-Powered Travel Collective',
		icon: Compass,
		accent: 'bg-amber-500',
		//accent: 'bg-blue-800',
	},
	{
		code: 'PPHE',
		title: ' People-Powered Host Experiences',
		icon: Building2,
		accent: 'bg-sky-500',
	},
	{
		code: 'PPES',
		title: 'People-Powered Ecosystem Support',
		icon: Leaf,
		accent: 'bg-emerald-500',
	},
	// {
	// 	code: 'PPSS',
	// 	title: 'People-Powered Support Services',
	// 	icon: BriefcaseBusiness,
	// 	accent: 'bg-amber-500',
	// },
	{
		code: 'PPDF',
		title: 'People-Powered Destination Facilitation ',
		icon: MapPinned,
		accent: 'bg-orange-500',
	},
]

export default function EcosystemSection() {
	return (
		<section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					{/* <div className="inline-flex rounded-full bg-[#dfe7f3] px-5 py-2 text-[1rem] font-bold text-[#214f95] shadow-sm sm:text-[1.05rem]"> */}
					<div className="home-section-eyebrow">
						The Traveleye People-Powered Tourism Ecosystem  
					</div>

					<h2 className="home-section-title mt-4">
						Building Stronger Tourism Through Connected Participation 
					</h2>
					<div className="mx-auto mt-4 h-0.5 w-24 rounded bg-[#c28a5b]" />
				</div>

				<div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(420px,0.88fr)] lg:gap-14">
					<div>
						<div className="mt-6 max-w-3xl space-y-5 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
							<p>
								The <strong>Traveleye People-Powered Tourism Ecosystem</strong> is a connected tourism ecosystem designed to develop and strengthen 
								micro and small tourism enterprises across Sri Lanka's tourism ecosystem. Guided by the <strong>People-Powered Tourism Framework</strong>, 
								it brings together people, journeys, host stays, experiences, tourism enterprises, destinations, ecosystem support services, 
								and collaborative opportunities within a shared vision for tourism development. 
							</p>
							<p>
								By strengthening connections between people, places, enterprises, institutions, and tourism stakeholders, the ecosystem encourages meaningful 
								participation, shared stewardship, collaboration, innovation, and shared value creation. Together, these connections contribute to more authentic 
								travel experiences, resilient destinations, thriving tourism enterprises, and lasting value for people, places, partnerships, and future generations. 
							</p>
						</div>

						{/* <p className="mt-8 max-w-3xl text-[1.05rem] font-semibold leading-7 text-[#1c2840] sm:text-[1.1rem]">
							The ecosystem is guided by four interconnected pillars: 
						</p> */}

						{/* pillar cards moved below to span full width */}
					</div>

					<div className="flex flex-col items-center lg:pt-10">
						<div className="w-full overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(15,23,42,0.12)] sm:rounded-[1.6rem]">
							<img
								src={ecosystemImg}
								alt="People collaborating on a tourism ecosystem framework"
								className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[495px]"
							/>
						</div>

						<button
							type="button"
							className="mt-8 w-full whitespace-nowrap rounded-xl bg-[#214f95] px-6 py-4 text-[1rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d] sm:w-auto sm:px-8 sm:text-[1.05rem]"
						>
							Explore the Traveleye People-Powered Tourism Ecosystem
						</button>
					</div>
				</div>
			</div>

			{/* Pillar row — slightly reduced width */}
			{/* <div className="mt-6">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 md:grid-cols-4 lg:px-8">
					{ecosystemPillars.map((pillar) => {
						const Icon = pillar.icon

						return (
							<article
								key={pillar.code}
								className="rounded-xl border border-[#cfe2fb] bg-white px-4 py-3 shadow-[0_1px_6px_rgba(15,23,42,0.08)]"
							>
								<div className="flex items-center gap-4">
									<div
										className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white ${pillar.accent}`}
									>
										<Icon className="h-5 w-5" />
									</div>

									<div>
										<p className="text-base font-semibold leading-none text-[#141414]">
											{pillar.code}
										</p>
										<p className="mt-1 text-[0.8rem] font-medium leading-snug text-[#6f6f6f]">
											{pillar.title}
										</p>
									</div>
								</div>
							</article>
						)
					})}
				</div>
			</div> */}
		</section>
	)
}
