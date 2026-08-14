const LandingShowroomRegistry = Object.freeze({
  flagship: Object.freeze({
    id: "afridesignstudio",
    name: "AfriDesign Studio",
    tier: "FLAGSHIP",
    flagship: true,
    status: "ACTIVE"
  }),

  tier1: Object.freeze([
    {
      id: "afrieducation",
      name: "AfriEducation",
      tier: "TIER_1",
      promoted: true,
      status: "ACTIVE"
    },
    {
      id: "africommerce",
      name: "AfriCommerce",
      tier: "TIER_1",
      status: "ACTIVE"
    }
  ]),

  tier2: Object.freeze([
    {
      id: "africctv",
      name: "AfriCCTV",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afriwork",
      name: "AfriWork",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afriboost",
      name: "AfriBoost",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afritracker",
      name: "AfriTracker",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afrilogistics",
      name: "AfriLogistics",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afriticking",
      name: "AfriTicking",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afrilove",
      name: "AfriLove",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afrisports",
      name: "AfriSports",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afrimetaworld",
      name: "AfriMetaWorld",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afriforex",
      name: "AfriForex",
      tier: "TIER_2",
      status: "ACTIVE"
    }
  ]),

  future: Object.freeze([])
});

export default LandingShowroomRegistry;
