import React, { lazy } from "react";

/**
 * AFRIDIGITAL USER PLUGIN REGISTRY (FEATURE-BASED CORE)
 * This is the REAL ecosystem mapping layer (not UI placeholders)
 */

// 🔌 FEATURE LAYER IMPORTS (SOURCE OF TRUTH)
const AfriSports = lazy(() => import("../../features/afrisports"));
const AfriCommerce = lazy(() => import("../../features/africommerce"));
const AfriMetaWorld = lazy(() => import("../../features/afrimetaworld"));
const AfriComm = lazy(() => import("../../features/africomm"));
const AfriBoost = lazy(() => import("../../features/afriboost"));
const AfriForex = lazy(() => import("../../features/afriforex"));
const AfriCCTV = lazy(() => import("../../pages/user/modules/AfriCCTV"));

/**
 * USER PLUGINS (Feature-driven ecosystem)
 * This layer is PLUG-AND-PLAY by design
 */
export const USER_PLUGINS = {
  afriSports: {
    name: "AfriSports",
    component: AfriSports,
    route: "/user/sports",
    enabled: true,
    type: "feature",
    version: "1.0"
  },

  afriCommerce: {
    name: "AfriCommerce",
    component: AfriCommerce,
    route: "/user/commerce",
    enabled: true,
    type: "feature",
    version: "1.0"
  },

  afriMetaWorld: {
    name: "AfriMetaWorld",
    component: AfriMetaWorld,
    route: "/user/metaworld",
    enabled: true,
    type: "feature",
    version: "1.0"
  },

  afriComm: {
    name: "AfriComm",
    component: AfriComm,
    route: "/user/comm",
    enabled: true,
    type: "feature",
    version: "1.0"
  },

  afriCCTV: {
    name: "AfriCCTV",
    component: AfriCCTV,
    route: "/user/africctv",
    enabled: true,
    type: "module",
    version: "1.0"
  },

  afriForex: {
    name: "AfriForex",
    component: AfriForex,
    route: "/user/forex",
    enabled: true,
    type: "feature",
    version: "1.0"
  },

  afriBoost: {
    name: "AfriBoost",
    component: AfriBoost,
    route: "/user/boost",
    enabled: true,
    type: "feature",
    version: "1.0"
  }
};

/**
 * Get only active plugins (runtime safe)
 */
export const getActiveUserPlugins = () => {
  return Object.entries(USER_PLUGINS)
    .filter(([_, plugin]) => plugin.enabled)
    .map(([key, plugin]) => ({ key, ...plugin }));
};

/**
 * Plugin resolver (future AI + admin control ready)
 */
export const resolveUserPlugin = (key) => {
  return USER_PLUGINS[key] || null;
};

/**
 * Feature discovery layer (future AfriAI hook-ready)
 */
export const listUserFeatures = () => {
  return Object.keys(USER_PLUGINS);
};
