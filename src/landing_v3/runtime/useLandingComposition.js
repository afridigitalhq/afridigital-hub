export default function useLandingComposition() {
  return {
    loading: false,
    isReady: true,
    sections: [
      { id: "HeroSection" },
      { id: "EnterpriseOverview" },
      { id: "AfriVisionShowcase" },
      { id: "AfriSportsShowcase" },
      { id: "AfriMetaWorldShowcase" },
      { id: "CommandDockCTA" },
      { id: "Footer" }
    ]
  };
}
