import AfriAITopicRegistry from "./AfriAITopicRegistry.js";
import AfriAIKnowledgeRegistry from "./AfriAIKnowledgeRegistry.js";
import AfriAICapabilityContract from "../capabilities/AfriAICapabilityContract.js";

const paymentsTopic = {
  id: "payments",
  name: "Payments",
  description: "Controlled payment knowledge domain"
};

const paymentCapabilities = [
  {
    id: "payments.paystack",
    topic: "payments",
    description: "Paystack payment capability",
    operations: ["create_payment", "verify_payment"],
    provider: "paystack",
    authority: "ecosystem"
  }
];

AfriAITopicRegistry.register(paymentsTopic);

for (const capability of paymentCapabilities) {
  const validation = AfriAICapabilityContract.validate(capability);
  if (!validation.valid) {
    throw new Error(
      `Invalid AfriAI capability ${capability.id}: ${validation.missing?.join(", ") || validation.reason}`
    );
  }

  AfriAIKnowledgeRegistry.register(capability);
}

const AfriAIPaymentsKnowledge = Object.freeze({
  topic: paymentsTopic,
  capabilities: paymentCapabilities
});

export default AfriAIPaymentsKnowledge;
