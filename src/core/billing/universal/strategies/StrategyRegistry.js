import CCTVStrategy from "./CCTVStrategy.js";
import APIUsageStrategy from "./APIUsageStrategy.js";
import AfriCommerceStrategy from "./AfriCommerceStrategy.js";
import AfriWorkStrategy from "./AfriWorkStrategy.js";
import AfriSportsStrategy from "./AfriSportsStrategy.js";

export default class StrategyRegistry {

  static map = {
    CCTV: CCTVStrategy,
    API: APIUsageStrategy,
    COMMERCE: AfriCommerceStrategy,
    WORK: AfriWorkStrategy,
    SPORTS: AfriSportsStrategy
  };

  static resolve(type) {
    const Strategy = this.map[type];
    if (!Strategy) return null;
    return new Strategy();
  }
}
