import "./HeroMotion.css";
import React from "react";
import AuthCTA from "../components/AuthCTA";
import EcosystemStatus from "../components/EcosystemStatus";
import ProductPreview from "../components/ProductPreview";

export default function HeroCommandZone() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050B1A] text-white isolate">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 afri-hero-motion -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#050B1A] to-black" />

      {/* IDENTITY CORE */}
      <div className="afri-system-layer absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[220px] md:text-[320px] font-black tracking-[0.25em] text-white/5 select-none">
            AFRIDIGITAL
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-20">

        {/* LEFT: CORE IDENTITY + ACTION */}
        <div className="flex-1 max-w-3xl">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold">
            AFRIDIGITAL
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-black">
            ONE ECOSYSTEM
          </h1>

          <h2 className="mt-6 text-3xl font-bold text-cyan-300">
            Intelligence. Infrastructure. Scale.
          </h2>

          <p className="mt-8 text-lg text-white/70 leading-8">
            A unified digital infrastructure powering communication, commerce, media and intelligent systems.
          </p>

          {/* SYSTEM STATUS (ONLY LIVE LAYER) */}
          <div className="mt-10">
            <EcosystemStatus />
          </div>

          {/* AUTH ACTIONS ONLY */}
          <div className="mt-6">
            <AuthCTA />
          </div>

        </div>

        {/* RIGHT: VISUAL CORE ONLY */}
        <div className="flex-1 flex justify-center">
          <ProductPreview />
        </div>

      </div>

    </section>
  );
}
