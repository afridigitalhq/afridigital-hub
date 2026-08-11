import AfriAIKnowledgeRouter from "./knowledge/AfriAIKnowledgeRouter.js";

const AfriAIKnowledgeDecisionBridge = {
  decide(intent = {}) {
    const route = AfriAIKnowledgeRouter.resolve(intent);

    if (!route.routed) {
      return {
        decision: "knowledge_rejected",
        route,
        execution: {
          allowed: false,
          approvalRequired: true
        }
      };
    }

    return {
      decision: "knowledge_resolved",
      route,
      execution: {
        allowed: false,
        approvalRequired: true
      }
    };
  }
};

export default AfriAIKnowledgeDecisionBridge;
