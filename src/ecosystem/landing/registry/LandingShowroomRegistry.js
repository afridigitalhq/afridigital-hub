const LandingShowroomRegistry = Object.freeze({
  flagship: Object.freeze({
    id: "afridesignstudio",
    name: "AfriDesign Studio",
    tagline: "Creative studio for creating apps, websites, graphics, templates, and videos.",
    tier: "FLAGSHIP",
    flagship: true,
    status: "ACTIVE"
  }),

  tier1: Object.freeze([
    {
      id: "afrieducation",
      name: "AfriEducation",
      tagline: "Where anyone can create, teach, learn, and earn.",
      tier: "TIER_1",
      promoted: true,
      status: "ACTIVE"
    },
    {
      id: "africommerce",
      name: "AfriCommerce",
      tagline: "A unified marketplace connecting businesses, sellers, and shoppers.",
      tier: "TIER_1",
      status: "ACTIVE"
    }
  ]),

  tier2: Object.freeze([
    {
      id: "africctv",
      name: "AfriCCTV",
      tagline: "Connect your cameras. Keep watch over your home and business, anywhere.",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afriwork",
      name: "AfriWork",
      tagline: "Work from home. Earn from anywhere.",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afriboost",
      name: "AfriBoost",
      tagline: "Boost your content. Reach more people.",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afritracker",
      name: "AfriTracker",
      tagline: "Track your vehicles, pets, devices, bikes, and more.",
      tier: "TIER_2",
      status: "ACTIVE"
    },
    {
      id: "afrilogistics",
      name: "AfriLogistics",
      tier: "TIER_2",
      showcase: false,
      status: "HIDDEN"
    },
    {
      id: "afriticking",
      name: "AfriTicking",
      tagline: "Create, sell, and manage tickets for your events.",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afrilove",
      name: "AfriLove",
      tagline: "A place to meet, connect, and find love.",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afrisports",
      name: "AfriSports",
      tagline: "Live sports, expert analysis, and AI-powered predictions.",
      tier: "TIER_2",
      status: "SCAFFOLD"
    },
    {
      id: "afrimetaworld",
      name: "AfriMetaWorld",
      tier: "TIER_2",
      showcase: false,
      status: "HIDDEN"
    },
    {
      id: "afriforex",
      name: "AfriForex",
      tagline: "AI-powered forex insights with real-time market analysis.",
      tier: "TIER_2",
      status: "ACTIVE"
    }
  ]),

  future: Object.freeze([])
});

export default LandingShowroomRegistry;
