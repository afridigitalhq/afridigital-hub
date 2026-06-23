
import { Win11OSIdentityConvergenceLayer } from "./Win11OSIdentityConvergenceLayer";

/**
 * 🧠 Identity convergence wiring (safe telemetry only)
 */

export function connectWin11OSIdentityLayer(runtime) {
  const engine = new Win11OSIdentityConvergenceLayer(runtime);

  runtime.attachTelemetry?.({
    type: "IDENTITY_CONVERGENCE_LAYER",
    status: "ACTIVE"
  });

  runtime.observeUserEvent = (event) => {
    engine.observe(event);
  };

  runtime.getOSIdentityProfile = () => {
    return engine.getIdentityProfile();
  };

  console.log("🧠 OS Identity Convergence Layer ACTIVE");
}
