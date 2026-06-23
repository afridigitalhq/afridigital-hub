
import { Win11OSLiveSelfObservationLoop } from "./Win11OSLiveSelfObservationLoop";

/**
 * 🧠 Connect OS self-observation loop safely
 */

export function connectWin11OSSelfObservationLoop(runtime) {
  const loop = new Win11OSLiveSelfObservationLoop(runtime);

  runtime.startSelfObservation = () => loop.start();
  runtime.observeSystemEvent = (event) => loop.observe(event);

  runtime.attachTelemetry?.({
    type: "SELF_OBSERVATION_LOOP",
    status: "ACTIVE"
  });

  console.log("🧠 Self-Observation Loop CONNECTED");
}
