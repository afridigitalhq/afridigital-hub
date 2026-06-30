
import { Win11OSPersonalityDriftEngine } from "./Win11OSPersonalityDriftEngine";

/**
 * 🧠 Personality drift wiring (safe UX-only layer)
 */

export function connectWin11OSPersonalityDrift(runtime) {
  const engine = new Win11OSPersonalityDriftEngine(runtime);

  runtime.attachTelemetry?.({
    type: "PERSONALITY_DRIFT_LAYER",
    status: "ACTIVE"
  });

  runtime.observeSystemEvent = (event) => {
    engine.observe(event);
  };

  runtime.getOSPersonality = () => {
    return engine.getPersonalityState();
  };

  console.log("🧠 OS Personality Drift Engine ACTIVE");
}
