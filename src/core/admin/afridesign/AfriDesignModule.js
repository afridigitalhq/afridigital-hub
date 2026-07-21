/**
 * AfriDesign Studio Admin Module
 *
 * Entry point for AfriDesign Studio
 * inside AfriDigital Admin Dashboard.
 *
 * Responsibility:
 * Module registration only.
 */

const AfriDesignModule = {
  id: "afridesign",
  name: "AfriDesign Studio",
  type: "admin-module",
  version: "1.0.0",
  features: [
    "builder",
    "preview",
    "templates",
    "export"
  ]
};

export default AfriDesignModule;
