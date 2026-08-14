import AfriAICoreBrain from "../../control-room/afrai/intelligence/AfriAICoreBrain.js";
import AfriAIExecutor from "./partials/executor/AfriAIExecutor.js";

const AfriAIOrchestrator = {
  run(input) {
    const decision = AfriAICoreBrain.execute(input);

    const execution = AfriAIExecutor.execute(decision);

    return {
      decision,
      execution
    };
  }
};

export default AfriAIOrchestrator;
