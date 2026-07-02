import React from "react";

export default function HeroCommandZone() {
  return (
    <section className="relative min-h-screen bg-[#050B1A] text-white overflow-hidden flex items-center">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

        <div className="max-w-4xl">

          <div className="uppercase tracking-[0.4em] text-blue-400 text-sm font-semibold">
            Enterprise AI Ecosystem
          </div>

          <h1 className="mt-6 text-6xl md:text-8xl font-black leading-none">
            AFRIDIGITAL
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
            One intelligent ecosystem powering AI, Security, Sports,
            Commerce, Communication, Simulation, Promotion and Digital
            Infrastructure from a unified platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500 transition">
              Launch Platform
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 hover:bg-white/10 transition">
              Explore Ecosystem
            </button>

          </div>

          <div className="mt-14 flex flex-wrap gap-4">

            <span className="rounded-full bg-blue-900/40 px-4 py-2">🎥 AfriVision</span>
            <span className="rounded-full bg-green-900/40 px-4 py-2">⚽ AfriSports</span>
            <span className="rounded-full bg-purple-900/40 px-4 py-2">🎮 AfriMetaWorld</span>
            <span className="rounded-full bg-orange-900/40 px-4 py-2">🛒 AfriCommerce</span>
            <span className="rounded-full bg-cyan-900/40 px-4 py-2">💬 AfriComm</span>
            <span className="rounded-full bg-pink-900/40 px-4 py-2">🚀 AfriBoost</span>

          </div>

        </div>

      </div>

    </section>
  );
}
