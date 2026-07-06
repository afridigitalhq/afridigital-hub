
/**
 * STRATEGY ACCESS GUARD
 * Ensures only registry can instantiate strategies
 */

export default class StrategyAccessGuard {

  static validate(caller) {

    if (caller !== "StrategyRegistry") {
      throw new Error("UNAUTHORIZED_STRATEGY_ACCESS");
    }

    return true;
  }
}
