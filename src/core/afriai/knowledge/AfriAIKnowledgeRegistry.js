const AfriAIKnowledgeRegistry = {
  capabilities: new Map(),
  register(capability) {
    if (!capability?.id || !capability?.topic) return false;
    if (!this.capabilities.has(capability.id)) this.capabilities.set(capability.id, Object.freeze({ ...capability }));
    return true;
  },
  resolve(id) { return this.capabilities.get(id) || null; },
  findByTopic(topic) { return [...this.capabilities.values()].filter(c => c.topic === topic); },
  findByOperation(operation) { return [...this.capabilities.values()].filter(c => Array.isArray(c.operations) && c.operations.includes(operation)); },
  findByProvider(provider) { return [...this.capabilities.values()].filter(c => c.provider === provider); },
  getAll() { return [...this.capabilities.values()]; }
};
export default AfriAIKnowledgeRegistry;
