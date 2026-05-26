import heroImg from "../assets/client/hero.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 pt-0 pb-16 sm:pb-20">
      <div id="hero-image" className="absolute inset-0 z-0">
          <img src={heroImg} alt="Hero background" className="absolute inset-x-0 top-0 w-full h-[calc(100%+12rem)] object-cover filter brightness-110 contrast-105" style={{ objectPosition: 'left top' }} />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div id="hero-content" className="relative z-10 text-center text-white max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pt-48 sm:pt-64 lg:pt-80 transform -translate-y-24 sm:-translate-y-32 lg:-translate-y-40">
        <div className="mb-5 inline-flex rounded-full bg-[rgba(53,82,127,0.82)] px-4 py-2 shadow-lg">
          <p className="text-sm font-semibold">Tourism for People, Planet, and Prosperity</p>
        </div>

        <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-1">
          TRAVELEYE
        </h1>
        <h2 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-0">
          ALLIANCE SRI LANKA
        </h2>
        <p className="text-sm sm:text-base font-medium mb-2">Since 2006</p>

        <p className="text-base sm:text-xl font-semibold max-w-3xl mx-auto mb-3">
          Building a People-Powered Tourism Ecosystem for Sri Lanka
        </p>

        <p className="text-sm sm:text-base max-w-full mx-auto mb-4 leading-relaxed">
          Co-created with local people — strengthening tourism enterprises, destinations, and value chains nationwide.
        </p>

        <p className="text-xs sm:text-sm text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Traveleye builds and stewards a people-powered tourism ecosystem that enables micro and small tourism enterprises across Sri Lanka to become capable, connected, and market-ready co-owners
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-[#1C4686] hover:bg-[#173b70] px-8 py-3 rounded-md font-semibold text-white transition flex items-center justify-center gap-2">
            Learn About Traveleye
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm font-semibold">Scroll to Explore</p>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
