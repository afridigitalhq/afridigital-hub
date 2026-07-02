
import React from "react";
import HeroCommandZone from "./hero/HeroCommandZone";
import EcosystemGrid from "./ecosystem/EcosystemGrid";

/**
 * Landing V3 — AfriDigital Living OS Control Center
 */

export default function LandingV3() {
  return (
    <main className="w-full min-h-screen bg-[#050B1A] text-white">

      {/* Command Layer */}
      <section className="border-b border-white/10">
        <HeroCommandZone />
      </section>

      {/* Ecosystem Layer */}
      <section className="py-10">
        <EcosystemGrid />
      </section>

      {/* Footer OS Hint */}
      <footer className="text-center text-xs text-white/40 py-10">
        AfriDigital OS • Live Simulation Layer Active
      </footer>

    </main>
  );
}
