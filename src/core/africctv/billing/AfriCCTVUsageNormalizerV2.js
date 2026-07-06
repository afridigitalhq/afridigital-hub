
/**
 * CCTV USAGE NORMALIZER V2
 * Adds resolution-aware billing signals
 */

export default class AfriCCTVUsageNormalizerV2 {

  static normalize(event) {

    const resolution = event.resolution || "low";

    return {
      ...event,
      normalized: true,
      billing: {
        streamType: "cctv",
        resolution,
        multiplier: this.getMultiplier(resolution)
      }
    };
  }

  static getMultiplier(resolution) {
    switch (resolution) {
      case "high": return 3.0;
      case "medium": return 1.5;
      case "low":
      default: return 1.0;
    }
  }
}
