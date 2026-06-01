import React from 'react'
import heroImg from '../assets/client/Facilitation4.png'

export default function DestinationFacilitation() {
  return (
    <main className="flex flex-col w-full">
      <section className="relative h-[48vh] w-full overflow-hidden">
        <img src={heroImg} alt="Destination hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 style={{ fontFamily: '"League Spartan", system-ui, -apple-system, sans-serif' }} className="translate-y-4 text-4xl text-center font-extrabold leading-none tracking-tight text-white sm:translate-y-6 sm:text-5xl lg:translate-y-8 lg:text-6xl">DESTINATION FACILITATION</h1>
        </div>
      </section>

    </main>
  )
}
