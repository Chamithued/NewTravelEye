import ExploreEcosystem from '../components/ExploreEcosystem'
import FooterLinks from '../components/FooterLinks'

export default function About() {
  return (
    <main className="flex w-full flex-col bg-slate-50 text-slate-900">
      <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1C4686]">About Us</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">About Page</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Content for this page will be added later.
          </p>
        </div>
      </section>
      <ExploreEcosystem />
      <FooterLinks />
    </main>
  )
}
