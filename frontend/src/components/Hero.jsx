// import heroImg from "../assets/client/newHomepage_banner.png"
// import heroImg from "../assets/client/HeroBanner2_optimized.jpg"
import heroImg from "../assets/herolatest.jpeg"

export default function Hero() {
  return (
    // <section className="home-hero-section relative min-h-[calc(100svh+3rem)] w-full overflow-hidden sm:min-h-[calc(100svh+5rem)] lg:min-h-[calc(100svh+7rem)]">
        <section className="home-hero-section relative min-h-[65vh] w-full overflow-hidden sm:min-h-[70vh] lg:min-h-[75vh]">
      <div id="hero-image" className="absolute inset-0 z-0">
          <img src={heroImg} alt="Hero background" className="absolute inset-0 h-full w-full object-cover object-top filter brightness-110 contrast-105" />
        <div className="absolute inset-0 bg-black/23" />
      </div>

      <div className="relative z-10 flex min-h-svh w-full items-center justify-center px-4 pb-14 pt-20 sm:pb-20 sm:pt-28 lg:pt-36">
      {/* <div id="hero-content" className="mx-auto w-full max-w-[88rem] -translate-y-3 transform px-2 text-center text-white sm:-translate-y-8 sm:px-6 lg:-translate-y-12 lg:px-8"> */}
      <div id="hero-content" className="mx-auto w-full max-w-[88rem] -translate-y-10 transform px-2 text-center text-white sm:-translate-y-14 sm:px-6 lg:-translate-y-20 lg:px-8">
        {/* <div className="mb-5 inline-flex rounded-full bg-[rgba(53,82,127,0.82)] px-4 py-2 shadow-lg">
          <p className="text-sm font-semibold">Tourism for People, Planet, and Prosperity</p>
        </div> */}

        <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="mb-1 text-3xl font-semibold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          TRAVELEYE
        </h1>
        <h2 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="mb-0 text-3xl font-semibold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          ALLIANCE SRI LANKA
        </h2>
        {/* <p className="text-sm sm:text-base font-medium mb-2">Since 2006</p> */}

        <p className="mx-auto mb-1 max-w-3xl text-base font-semibold sm:text-xl">
          Building a People-Powered Tourism Ecosystem for Sri Lanka
        </p>
        <p className="mx-auto mt-28 inline-flex rounded-full bg-[#0F3C68]/55 px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm backdrop-blur-sm sm:mt-36 sm:px-4 sm:py-1.5 sm:text-sm lg:mt-40">
          Tourism for People, Planet, and Prosperity
        </p>
        <p className="mx-auto mt-2 max-w-4xl text-sm leading-relaxed sm:text-base" style={{ textWrap: 'balance' }}>
          Developing and strengthening micro and small tourism enterprises across Sri Lanka&apos;s tourism ecosystem through collaboration, stewardship, innovation, and meaningful partnerships.
        </p>
{/* 
        <p className="mx-auto mb-1 max-w-6xl text-center text-sm leading-relaxed sm:text-lg" style={{ textWrap: 'balance' }}>
          Guided by the Traveleye People-Powered Tourism (PPT) Framework, Traveleye Alliance strengthens tourism through participation, stewardship, collaboration, and innovation.
        </p>

        <p className="mx-auto mb-4 max-w-7xl text-sm font-semibold leading-snug text-white/90 sm:text-base" style={{ textWrap: 'balance' }}>
          As a People-Powered Tourism Ecosystem Builder, we connect people, places, and experiences to create meaningful travel and long-term value for communities, destinations, and future generations. 
        </p> */}

        {/* <div className="mb-6 mt-10 flex flex-col justify-center gap-4 sm:mb-8 sm:mt-14 sm:flex-row lg:mt-16"> */}
        <div className="mb-2 mt-2 flex flex-col justify-center gap-4 sm:flex-row">
          {/* <button className="flex items-center justify-center gap-2 rounded-md bg-[#1C4686] px-6 py-2 font-semibold text-white transition hover:bg-[#173b70] sm:px-8 sm:py-3">
            Explore the Framework 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button> */}
        </div>
        {/* <div className="mt-0 flex animate-bounce flex-col items-center gap-2 sm:mt-1"> */}
        <div className="mt-2 flex animate-bounce flex-col items-center gap-2 sm:mt-3">
          <p className="text-sm font-semibold">Scroll to Explore</p>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      </div>
    </section>
    
  )
}
