import AfriAICoreBrain from "../../control-room/afrai/intelligence/AfriAICoreBrain.js";
import AfriAICrossBrain from "./AfriAICrossBrain.js";
import SafeExecutionPipeline from "../../control-room/afrai/safety/SafeExecutionPipeline.js";
import AfriAIOrchestrator from "./AfriAIOrchestrator.js";
import EventStream from "../../control-room/bridge/EventStream.js";

const AfriAIGovernedCore = {
  handle(input) {
    // 1. Core reasoning
    const decision = AfriAICoreBrain.execute(input);

    // 2. Orchestration planning
    const orchestrated = AfriAIOrchestrator.run(input);

    // 3. Cross-ecosystem planning
    const crossPlan = AfriAICrossBrain.analyze(input);

    const workflow = [
      ...(orchestrated?.execution ? [orchestrated.execution] : [])
    ];

    // 4. Safe execution layer
    const execution = SafeExecutionPipeline.run(workflow, (wf) => {
      return {
        executedSteps: wf.length,
        status: "completed"
      };
    });

    // 5. Emit governed intelligence trace
    EventStream.emit({
      type: "AFRAI_GOVERNED_TRACE",
      payload: {
        input,
        decision,
        crossPlan,
        execution
      }
    });

    return {
      decision,
      crossPlan,
      execution
    };
  }
};

export default AfriAIGovernedCore;
