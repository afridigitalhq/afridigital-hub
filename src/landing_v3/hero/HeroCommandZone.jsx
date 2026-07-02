import React from "react";

/**
 * HeroCommandZone — AfriDigital Living OS Entry Layer
 * Navy Blue Cyber-Grid Theme (Primary UI Identity)
 */

export default function HeroCommandZone() {
  return (
    <section className="w-full min-h-[70vh] bg-[#050B1A] text-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* Ambient glow layer */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-blue-900 via-transparent to-black" />

      {/* Main Command Core */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          AfriDigital Command Zone
        </h1>

        <p className="mt-4 text-gray-300 text-sm md:text-base">
          A living system interface where AfriDigital services behave like a unified operating environment.
        </p>

        {/* Live system buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">

          <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition">
            Launch AfriVision Live Feed
          </button>

          <button className="px-6 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-600 transition">
            Enter AfriSports Live Zone
          </button>

          <button className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition">
            Open AfriMetaWorld Engine
          </button>

        </div>

        {/* Live system hint */}
        <div className="mt-6 text-xs text-gray-400">
          Live Engine: mock-stream ready • WS connected via Transport Layer
        </div>

      </div>
    </section>
  );
}
