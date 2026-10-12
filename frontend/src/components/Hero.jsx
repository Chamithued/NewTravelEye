// Reconstructed from the supplied deployed build. Original local names and comments were not retained.
import asset_Pi from "../assets/herolatest.jpeg";
function Hero() {
  return (
    <section className="home-hero-section relative min-h-[65vh] w-full overflow-hidden sm:min-h-[70vh] lg:min-h-[75vh]">
      <div id="hero-image" className="absolute inset-0 z-0">
        <img
          src={asset_Pi}
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover object-top filter brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-black/23" />
      </div>
      <div className="relative z-10 flex min-h-svh w-full items-center justify-center px-4 py-16 sm:py-20 lg:py-24">
        <div
          id="hero-content"
          className="mx-auto w-full max-w-[88rem] -translate-y-6 px-2 text-center text-white sm:-translate-y-10 sm:px-6 lg:-translate-y-12 lg:px-8"
        >
          <div className="relative -top-4 sm:-top-6 lg:-top-8">
            <p className="mx-auto mb-4 inline-flex rounded-full bg-[#0F3C68]/55 px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
              {"Tourism for People, Planet, and Prosperity"}
            </p>
            <h1
              style={{
                fontFamily:
                  '"League Spartan", system-ui, -apple-system, sans-serif',
              }}
              className="mb-1 text-3xl font-semibold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {"TRAVELEYE"}
            </h1>
            <h2
              style={{
                fontFamily:
                  '"League Spartan", system-ui, -apple-system, sans-serif',
              }}
              className="mb-0 text-3xl font-semibold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {"ALLIANCE SRI LANKA"}
            </h2>
            <div className="relative -top-2">
              <p className="mb-0 text-sm font-semibold tracking-[0.25em] sm:text-base">
                SINCE 2006
              </p>
            </div>
          </div>
          <div className="relative top-8 mx-auto mt-8 max-w-4xl sm:top-12 sm:mt-12 lg:top-12 lg:mt-16">
            <p
              className="mx-auto max-w-3xl text-lg font-semibold sm:text-2xl"
              style={{
                WebkitTextStroke: "0.35px #000",
                paintOrder: "stroke fill",
              }}
            >
              {
                "The Initiator and Builder of a People-Powered Tourism Ecosystem for Sri Lanka"
              }
            </p>
            <p
              className="mt-2 text-sm font-bold leading-relaxed sm:text-base"
              style={{
                textWrap: "balance",
                WebkitTextStroke: "0.35px #000",
                paintOrder: "stroke fill",
              }}
            >
              {
                "Developing and strengthening micro and small tourism enterprises across Sri Lanka's tourism ecosystem through collaboration, stewardship, innovation, and meaningful partnerships."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
