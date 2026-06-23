
/**
 * 📦 SOC Bundle Optimization Script
 * - helps Vite/Webpack split SOC modules efficiently
 * - groups heavy systems into lazy chunks
 */

export const socBundleConfig = {
  manualChunks(id) {
    if (id.includes("soc-os/ai")) return "ai-core";
    if (id.includes("soc-os/fluent")) return "ui-fluent";
    if (id.includes("soc-os/cinematic")) return "cinematic";
    if (id.includes("soc-os/audio")) return "audio";
    if (id.includes("soc-os/runtime")) return "runtime-core";
    if (id.includes("soc-os/hud")) return "hud";
    if (id.includes("soc-os/session")) return "session";
  }
};

console.log("📦 SOC Bundle Split Strategy Loaded");
