/**
 * AfriDesign Studio Admin Composition Contract
 *
 * Purpose:
 * Defines how AfriDesign Studio is composed
 * inside AfriDigital Admin Dashboard.
 *
 * Rule:
 * Admin controls access only.
 * Design engine remains isolated.
 */

const AfriDesignCompositionContract = {
  module: "AfriDesign Studio",

  mountPoint: "/admin/afridesign",

  responsibilities: [
    "module registration",
    "navigation entry",
    "permission boundary",
    "service connection"
  ],

  forbidden: [
    "visual editor logic",
    "template generation logic",
    "component mutation",
    "direct production file editing"
  ],

  integrations: {
    afriAI: {
      enabled: true,
      channel: "api-contract"
    },

    afriShop: {
      enabled: true,
      purpose: "template marketplace"
    },

    afriDigitalHub: {
      enabled: true,
      purpose: "approved export destination"
    }
  }
};

export default AfriDesignCompositionContract;
