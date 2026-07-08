// CONTROLLED BY BillingOrchestrator v1 (DO NOT BYPASS)
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
    const policy = UniversalBillingPolicyEngine.evaluate(event);
    if (!policy) return { status: "blocked", reason: "no_policy" };

    // 3. Strategy resolution (single source of truth)
    const strategy = StrategyRegistry.resolve(policy.strategy);
    if (!strategy) return { status: "blocked", reason: "no_strategy" };

    // 4. Execute billing logic
    const result = strategy.process(event, policy);
    return { result, event }; // forwarded to orchestrator
  }
}
