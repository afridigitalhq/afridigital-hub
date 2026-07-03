/* AFRIDIGITAL LANDING REGISTRY — L5 CORE */

export const LandingSectionRegistry = {
  HeroSection: { id: "hero", order: 1, enabled: true },
  EnterpriseOverview: { id: "enterprise", order: 2, enabled: true },
  AfriVisionShowcase: { id: "afrivision", order: 3, enabled: true },
  AfriSportsShowcase: { id: "afrisports", order: 4, enabled: true },
  AfriMetaWorldShowcase: { id: "afrimeta", order: 5, enabled: true },
  EcosystemGrid: { id: "ecosystem", order: 6, enabled: true },
  CommandDockCTA: { id: "commanddock", order: 7, enabled: true },
  Footer: { id: "footer", order: 8, enabled: true }
};

export const getActiveSections = () =>
  Object.values(LandingSectionRegistry)
    .filter(s => s.enabled)
    .sort((a, b) => a.order - b.order);
