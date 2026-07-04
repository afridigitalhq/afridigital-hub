import { landingRegistry } from "../../registry/landing.registry";

export function getActivePanels() {
  return Object.entries(landingRegistry.panels)
    .filter(([_, cfg]) => cfg.enabled)
    .map(([name]) => name);
}

export function isHeroEnabled() {
  return landingRegistry.hero.enabled;
}
