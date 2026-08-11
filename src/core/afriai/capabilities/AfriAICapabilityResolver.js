import AfriAIKnowledgeRegistry from "../knowledge/AfriAIKnowledgeRegistry.js";
import AfriAITopicRegistry from "../knowledge/AfriAITopicRegistry.js";

const AfriAICapabilityResolver = {
  resolve(intent = {}) {
    const { capability, topic, operation, provider } = intent;

    if (capability) {
      const result = AfriAIKnowledgeRegistry.resolve(capability);
      if (result) return result;
    }

    if (topic) {
      const topicDefinition = AfriAITopicRegistry.resolve(topic);
      if (topicDefinition) {
        if (operation) {
          const results = AfriAIKnowledgeRegistry
            .findByTopic(topic)
            .filter(
              (capability) =>
                Array.isArray(capability.operations) &&
                capability.operations.includes(operation)
            );
          if (results.length) return results[0];
          return null;
        }

        const results = AfriAIKnowledgeRegistry.findByTopic(topic);
        if (results.length) return results[0];
      }
    }

    if (operation) {
      const results = AfriAIKnowledgeRegistry.findByOperation(operation);
      if (results.length) return results[0];
      return null;
    }

    if (provider) {
      const results = AfriAIKnowledgeRegistry.findByProvider(provider);
      if (results.length) return results[0];
    }

    return null;
  }
};

export default AfriAICapabilityResolver;
