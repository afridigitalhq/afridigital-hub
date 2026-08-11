import AfriAIKnowledgeLoader from "../../core/afriai/knowledge/AfriAIKnowledgeLoader.js";
import EcosystemReasoner from "./intelligence/EcosystemReasoner.js";
import AfriAIKnowledgeDecisionBridge from "../../core/afriai/AfriAIKnowledgeDecisionBridge.js";

const DecisionEngine = {
  decide(input = "") {
    AfriAIKnowledgeLoader.load();
    const command = String(input).toLowerCase();
    const analysis = EcosystemReasoner.analyze(command);

    if (command.includes("status")) {
      return {
        action: "query_soc",
        analysis
      };
    }

    if (command.includes("init")) {
      return {
        action: "initialize_system",
        analysis
      };
    }

    const knowledgeIntent = this.resolveKnowledgeIntent(command);

    if (knowledgeIntent) {
      const knowledgeDecision =
        AfriAIKnowledgeDecisionBridge.decide(knowledgeIntent);

      return {
        action:
          knowledgeDecision.decision === "knowledge_resolved"
            ? "knowledge_route"
            : "knowledge_rejected",
        analysis,
        knowledge: knowledgeDecision
      };
    }

    if (analysis.matchedModules.length > 0) {
      return {
        action: "route_to_module",
        analysis
      };
    }

    return {
      action: "idle",
      analysis
    };
  },

  resolveKnowledgeIntent(command) {
    if (!command.includes("payment")) return null;

    let operation = null;

    if (
      command.includes("verify payment") ||
      command.includes("verify a payment")
    ) {
      operation = "verify_payment";
    } else if (
      command.includes("create payment") ||
      command.includes("make payment") ||
      command.includes("paystack payment")
    ) {
      operation = "create_payment";
    } else if (
      command.includes("refund payment") ||
      command.includes("refund a payment")
    ) {
      operation = "refund_payment";
    }

    if (command.includes("payment")) {
      return {
        topic: "payments",
        operation: operation || "__unknown_payment_operation__"
      };
    }

    return null;
  }
};

export default DecisionEngine;
