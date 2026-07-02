import React from "react";
import HeroBackground from "./partials/HeroBackground";
import HeroBrand from "./partials/HeroBrand";
import HeroActions from "./partials/HeroActions";
import HeroHighlights from "./partials/HeroHighlights";
import HeroStatus from "./partials/HeroStatus";

export default function HeroCommandZone() {
  return (
    <section className="relative min-h-screen bg-[#050B1A] text-white overflow-hidden flex items-center">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <HeroBrand />
          <HeroActions />
          <HeroHighlights />
          <HeroStatus />
        </div>
      </div>
    </section>
  );
}
