const LandingShowroomRegistry = Object.freeze({
  primaryFlagship: Object.freeze({
    id: "afriaiwhatsappbusiness",
    name: "AfriAI WhatsApp Business",
    tagline: "Grow your business on WhatsApp with AI-powered customer conversations, instant replies, and smart automation.",
    tier: "PRIMARY_FLAGSHIP",
    flagship: true,
    primary: true,
    status: "ACTIVE"
  }),

  flagship: Object.freeze([
    {
      id: "africommerce",
      name: "AfriCommerce",
      tagline: "A unified marketplace connecting businesses, sellers, and shoppers.",
      tier: "FLAGSHIP",
      status: "ACTIVE"
    },
    {
      id: "afridesign",
      name: "AfriDesign Studio",
      tagline: "Create, design, build, and launch with AfriDigital.",
      tier: "FLAGSHIP",
      status: "ACTIVE"
    },
    {
      id: "africctv",
      name: "AfriCCTV",
      tagline: "Connect your cameras. Keep watch over your home and business, anywhere.",
      tier: "FLAGSHIP",
      status: "ACTIVE"
    },
    {
      id: "afrieducation",
      name: "AfriEducation",
      tagline: "Where anyone can create, teach, learn, and earn.",
      tier: "FLAGSHIP",
      status: "ACTIVE"
    },
    {
      id: "afrisports",
      name: "AfriSports",
      tagline: "Live sports, expert analysis, and AI-powered predictions.",
      tier: "FLAGSHIP",
      status: "SCAFFOLD"
    },
    {
      id: "afriforex",
      name: "AfriForex",
      tagline: "Real-time Forex and Crypto markets with AfriAI-powered market intelligence.",
      tier: "FLAGSHIP",
      status: "SCAFFOLD"
    }
  ]),

  tier2: Object.freeze([
    {
      id: "afriboost",
      name: "AfriBoost",
      tagline: "Boost your content. Reach more people.",
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
      id: "afritracker",
      name: "AfriTracker",
      tagline: "Track your vehicles, pets, devices, bikes, and more.",
      tier: "TIER_2",
      status: "ACTIVE"
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
    }
  ]),

  services: Object.freeze([
    { id: "afriai", name: "AfriAI", role: "ECOSYSTEM_GUIDE" },
    { id: "afribank", name: "AfriBank", role: "FINANCIAL_INFRASTRUCTURE" },
    { id: "afriads", name: "AfriAds", role: "ADVERTISING_INFRASTRUCTURE" },
    { id: "afrivision", name: "AfriVision", role: "VISUAL_RUNTIME_ENGINE" },
    { id: "afritrust", name: "AfriTrust", role: "TRUST_SECURITY_LAYER" }
  ]),

  hidden: Object.freeze([
    "afrimetaWorld",
    "afrilogistics"
  ]),

  excluded: Object.freeze([
    "internal_afriwhatsapp"
  ])
});

export default LandingShowroomRegistry;
