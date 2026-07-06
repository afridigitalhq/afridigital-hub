import StrategyRegistry from "../strategies/StrategyRegistry.js";
import UniversalBillingPolicyEngine from "../UniversalBillingPolicyEngine.js";
import Gatekeeper from "../UniversalBillingGatekeeper.js";

/**
 * SINGLE EXECUTION PIPELINE
 * All billing events MUST pass through here
 */
export default class BillingExecutionPipeline {

  static execute(event) {

    // 1. Gatekeeper (hard stop)
    if (Gatekeeper?.validate) {
      const decision = Gatekeeper.validate(event);
      if (!decision.allowed) return { status: "blocked", reason: "gatekeeper" };
    }

    // 2. Policy evaluation
    const policy = PolicyEngine.evaluate(event);
    if (!policy) return { status: "blocked", reason: "no_policy" };

    // 3. Strategy resolution (single source of truth)
    const strategy = StrategyRegistry.resolve(policy.type);
    if (!strategy) return { status: "blocked", reason: "no_strategy" };

    // 4. Execute billing logic
    return strategy.process(event, policy);
  }
}
