
import { Win11SystemRealismCore } from "./Win11SystemRealismCore";

/**
 * 🧠 Attach realism layer (safe UX fidelity only)
 */

export function connectSystemRealismCore(runtime) {
  const core = new Win11SystemRealismCore(runtime);

  core.attach(runtime);

  runtime.attachTelemetry?.({
    type: "SYSTEM_REALISM_CORE",
    status: "ACTIVE"
  });

  console.log("🧠 SYSTEM REALISM CORE CONNECTED");
}
