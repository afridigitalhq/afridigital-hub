import React from "react";
import HeroCommandZone from "./hero/HeroCommandZone";
import EcosystemGrid from "./ecosystem/EcosystemGrid";

export default function LandingV3() {
  return (
    <main className="w-full min-h-screen bg-[#050B1A] text-white">
      <HeroCommandZone />
      <EcosystemGrid />
    </main>
  );
}
