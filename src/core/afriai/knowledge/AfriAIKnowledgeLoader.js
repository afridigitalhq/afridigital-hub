import AfriAIPaymentsKnowledge from "./AfriAIPaymentsKnowledge.js";

const AfriAIKnowledgeLoader = {
  loaded: false,

  load() {
    if (this.loaded) return true;
    void AfriAIPaymentsKnowledge;
    this.loaded = true;
    return true;
  }
};

export default AfriAIKnowledgeLoader;
