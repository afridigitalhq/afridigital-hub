import { landingRegistry } from "../../registry/landing.registry";

export function useLandingBindings() {
  const heroEnabled = landingRegistry.hero.enabled;

  const activePanels = Object.entries(landingRegistry.panels)
    .filter(([_, cfg]) => cfg.enabled)
    .map(([name]) => name);

  return {
    heroEnabled,
    activePanels
  };
}
