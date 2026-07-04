// HERO HARDENED CONTRACT (ENTRY ONLY)
import "./HeroMotion.css";
import React from "react";
import AuthCTA from "../components/AuthCTA";
import EcosystemStatus from "../components/EcosystemStatus";
import ProductPreview from "../components/ProductPreview";
import AfriLogo from "../brand/AfriLogo";

export default function HeroCommandZone() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050B1A] text-white isolate">

      <div className="absolute inset-0 afri-hero-motion -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#050B1A] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-20">

        <div className="flex-1 max-w-3xl">

          <div className="flex items-center gap-3">
            <AfriLogo size={42} />
            <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold">AFRIDIGITAL</p>
          </div>

          <h1 className="mt-6 text-6xl md:text-8xl font-black">ONE ECOSYSTEM</h1>

          <h2 className="mt-6 text-3xl font-bold text-cyan-300">Intelligence. Infrastructure. Scale.</h2>

          <p className="mt-8 text-lg text-white/70 leading-8">
            Unified digital infrastructure powering communication, commerce, media and intelligent systems.
          </p>

          <div className="mt-10">
            <EcosystemStatus />
          </div>

          <div className="mt-6">
            <AuthCTA />
          </div>

        </div>

        <div className="flex-1 flex justify-center">
          <ProductPreview />
        </div>

      </div>
    </section>
  );
}
