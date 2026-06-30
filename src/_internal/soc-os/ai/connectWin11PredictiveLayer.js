
import { Win11PredictiveOSBehaviorEngine } from "./Win11PredictiveOSBehaviorEngine";

/**
 * 🧠 Connect predictive OS behavior layer to runtime
 */

export function connectWin11PredictiveLayer(runtime) {
  const engine = new Win11PredictiveOSBehaviorEngine(runtime);

  runtime.attachTelemetry?.({
    type: "PREDICTIVE_LAYER",
    status: "ACTIVE"
  });

  runtime.observeSystemEvent = (event) => {
    engine.observe(event);
  };

  runtime.getOSPredictions = () => {
    return engine.getPredictions();
  };

  console.log("🧠 Predictive OS Behavior Layer ACTIVE");
}
