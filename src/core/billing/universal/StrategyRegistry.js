import CCTVStrategy from "./strategies/CCTVStrategy";
import APIUsageStrategy from "./strategies/APIUsageStrategy";
import AfriCommerceStrategy from "./strategies/AfriCommerceStrategy";
import AfriSportsStrategy from "./strategies/AfriSportsStrategy";
import AfriWorkStrategy from "./strategies/AfriWorkStrategy";

const registry = {
  CCTV: new CCTVStrategy(),
  API: new APIUsageStrategy(),
  COMMERCE: new AfriCommerceStrategy(),
  SPORTS: new AfriSportsStrategy(),
  WORK: new AfriWorkStrategy()
};

export default class StrategyRegistry {
  static resolve(type) {
    if (!type) return null;
    return registry[type.toUpperCase()] || null;
  }
}
