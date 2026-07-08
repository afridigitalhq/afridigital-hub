import UniversalBillingPolicyEngine from "../UniversalBillingPolicyEngine.js";
import BillingExecutionPipeline from "../engine/BillingExecutionPipeline.js";
import SettlementEngine from "../engine/SettlementEngine.js";

export default class BillingOrchestrator {

  static execute(event) {

    if (!event) {
      return { status: "blocked", reason: "null_event" };
    }

    // 1. Determine billing model (3-core system)
    const model = this.resolveModel(event);

    // 2. Policy evaluation
    const policy = UniversalBillingPolicyEngine.evaluate(event);
    if (!policy) {
      return { status: "blocked", reason: "no_policy" };
    }

    // 3. Execute pipeline
    const pipelineResult = BillingExecutionPipeline.execute(event);
    if (!pipelineResult || pipelineResult.status === "blocked") {
      return pipelineResult;
    }

    // 4. Settlement isolation (ONLY HERE)
    const settlementResult = SettlementEngine.settle(pipelineResult, event);

    return {
      event,
      model,
      pipelineResult,
      settlementResult,
      status: "completed"
    };
  }

  static resolveModel(event) {
    const type = (event?.type || "").toUpperCase();

    if (type.includes("SUB")) return "SUBSCRIPTION";
    if (type.includes("METER")) return "METERING";
    if (type.includes("PAY")) return "PAY_PER_USE";

    return "PAY_PER_USE";
  }
}
