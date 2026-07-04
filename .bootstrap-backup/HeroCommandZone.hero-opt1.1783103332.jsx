import "./HeroMotion.css";
import React from "react";
import AuthCTA from "../components/AuthCTA";
import EcosystemStatus from "../components/EcosystemStatus";
import ProductPreview from "../components/ProductPreview";

export default function HeroCommandZone() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050B1A] text-white isolate">

      <div className="absolute inset-0 afri-hero-motion -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#050B1A] to-black" />

      <div className="afri-system-layer absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[220px] md:text-[320px] font-black tracking-[0.25em] text-white/5 select-none">
            AFRIDIGITAL
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-20">

        <div className="flex-1 max-w-3xl">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold">
            AFRIDIGITAL INNOVATIONS HUB
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-black">
            AFRIDIGITAL
          </h1>

          <h2 className="mt-6 text-3xl font-bold text-cyan-300">
            One Intelligent Ecosystem. Unlimited Innovation.
          </h2>

          <p className="mt-8 text-lg text-white/70 leading-8">
            Building Africa's digital infrastructure through intelligent
            platforms for communication, commerce, immersive experiences
            and enterprise innovation.
          </p>

          <EcosystemStatus />

          <AuthCTA />

        </div>

        <div className="flex-1 flex justify-center">
          <ProductPreview />
        </div>

      </div>

    </section>
  );
}
