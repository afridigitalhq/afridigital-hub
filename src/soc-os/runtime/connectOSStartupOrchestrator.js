
import { Win11OSStartupOrchestrator } from "./Win11OSStartupOrchestrator";

/**
 * 🚀 Connect full OS startup pipeline
 */

export function connectOSStartupOrchestrator(runtime) {
  const orchestrator = new Win11OSStartupOrchestrator(runtime);

  runtime.startOS = () => orchestrator.start();

  runtime.attachTelemetry?.({
    type: "OS_STARTUP_ORCHESTRATOR",
    status: "ACTIVE"
  });

  console.log("🚀 OS Startup Orchestrator ACTIVE");
}
