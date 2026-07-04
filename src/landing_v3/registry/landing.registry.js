import { resolveModule } from '../../../core/authority/module.authority.cjs';
import { featureFlags } from "./feature.flags";

export const landingRegistry = {
  hero: {
    enabled: featureFlags.hero,
    mount: "HeroCommandZone"
  },

  panels: {
    resolveModule("vision")?.ui || "AfriMonitor": { enabled: featureFlags.afriVision },
    AfriSports: { enabled: featureFlags.afriSports },
    AfriCommerce: { enabled: featureFlags.afriCommerce },
    AfriMetaWorld: { enabled: featureFlags.afriMetaWorld },
    AfriComm: { enabled: featureFlags.afriComm },
    DeviceTracking: { enabled: featureFlags.deviceTracking }
  }
};
