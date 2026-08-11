import AfriAICapabilityResolver from "./AfriAICapabilityResolver.js";

const AfriAICapabilityRouter = {
  route(intent = {}) {
    const capability = AfriAICapabilityResolver.resolve(intent);

    if (!capability) {
      return {
        routed: false,
        status: "CAPABILITY_NOT_FOUND",
        capability: null,
        execution: {
          allowed: false
        }
      };
    }

    return {
      routed: true,
      status: "CAPABILITY_RESOLVED",
      capability: {
        id: capability.id,
        topic: capability.topic,
        operations: capability.operations,
        provider: capability.provider
      },
      execution: {
        allowed: false,
        approvalRequired: true,
        authority: capability.authority || "ecosystem"
      }
    };
  }
};

export default AfriAICapabilityRouter;
