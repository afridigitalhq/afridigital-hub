import AfriAITopicRegistry from "./AfriAITopicRegistry.js";
import AfriAICapabilityRouter from "../capabilities/AfriAICapabilityRouter.js";

const AfriAIKnowledgeRouter = {
  resolve(input = {}) {
    const topic = input.topic || null;
    const operation = input.operation || null;
    const provider = input.provider || null;

    if (topic && !AfriAITopicRegistry.resolve(topic)) {
      return {
        routed: false,
        status: "TOPIC_NOT_FOUND",
        topic,
        execution: { allowed: false }
      };
    }

    const route = AfriAICapabilityRouter.route({
      capability: input.capability,
      topic,
      operation,
      provider
    });

    return {
      topic,
      operation,
      provider,
      ...route
    };
  }
};

export default AfriAIKnowledgeRouter;
