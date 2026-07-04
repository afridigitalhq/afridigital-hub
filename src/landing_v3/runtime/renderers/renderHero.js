import React from "react";
import HeroCommandZone from "../../hero/HeroCommandZone";
import { landingRegistry } from "../../registry/landing.registry";

export function renderHero() {
  if (!landingRegistry.hero.enabled) return null;
  return <HeroCommandZone />;
}
