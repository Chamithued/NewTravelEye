import {
	Building2,
	Compass,
	Leaf,
	MapPinned,
	BriefcaseBusiness,
} from 'lucide-react'

import ecosystemImg from '../assets/client/Traveleye_4pillars.png'

const ecosystemPillars = [
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
	{
		code: 'PPTC',
		title: 'People-Powered Travel Collective',
		icon: Compass,
		accent: 'bg-amber-500',
		//accent: 'bg-blue-800',
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
				<div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(460px,0.88fr)] lg:gap-14">
					<div>
						<div className="inline-flex rounded-full bg-[#dfe7f3] px-5 py-2 text-[1rem] font-bold text-[#214f95] shadow-sm sm:text-[1.05rem]">
							Regenerative Tourism Ecosystem
						</div>

						<h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#172544] sm:text-4xl lg:text-5xl">
							Where Regenerative Tourism Meets People-Powered Design
						</h2>

						<div className="mt-6 max-w-3xl space-y-5 text-[1.15rem] leading-7 text-[#6b7894] sm:text-[1.2rem] sm:leading-8">
							<p>
								At the heart of Traveleye Alliance is a people-powered tourism ecosystem where
								local people, communities, youth entrepreneurs, and experts co-own, co-create,
								and co-manage micro and small scale tourism enterprises.
							</p>
							<p>
								Guided by our People-Powered Tourism (PPT) Model and four integrated pillars,
								every journey is designed to strengthen people, culture, and destinations —
								ensuring tourism gives back more than it takes.
							</p>
						</div>

						<p className="mt-8 max-w-3xl text-[1.05rem] font-semibold leading-7 text-[#1c2840] sm:text-[1.1rem]">
							More than a network, it is a shared-value system built on four integrated pillars:
						</p>

						{/* pillar cards moved below to span full width */}
					</div>

					<div className="flex flex-col items-center lg:pt-10">
						<div className="overflow-hidden rounded-[1.6rem] shadow-[0_16px_42px_rgba(15,23,42,0.12)]">
							<img
								src={ecosystemImg}
								alt="People collaborating on a tourism ecosystem framework"
								className="h-[500px] w-full object-cover object-center lg:h-[495px]"
							/>
						</div>

						<button
							type="button"
							className="mt-8 rounded-xl bg-[#214f95] px-8 py-4 text-[1.05rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#1b427d]"
						>
							Learn About the Ecosystem
						</button>
					</div>
				</div>
			</div>

			{/* Pillar row — slightly reduced width */}
			<div className="mt-6">
				<div className="mx-auto max-w-7xl grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 sm:px-6 lg:px-8">
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
			</div>
		</section>
	)
}
