import AfriAIOrchestrator from "../../../core/afriai/AfriAIOrchestrator";

const AfriAIRuntimeBridge = {
  handle(input) {
    return AfriAIOrchestrator.run(input);
  }
};

export default AfriAIRuntimeBridge;
