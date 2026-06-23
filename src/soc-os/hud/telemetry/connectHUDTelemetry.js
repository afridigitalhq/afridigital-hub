import { SOCTelemetryBridge } from "./SOCTelemetryBridge";
import { SOCTelemetryAIEngine } from "./SOCTelemetryAIEngine";

/**
 * 🧠 Connect Runtime → HUD → AI Explanation Layer
 */

export function connectHUDTelemetry(runtime) {
  const bridge = new SOCTelemetryBridge(runtime);
  const ai = new SOCTelemetryAIEngine(bridge);

  runtime.attachTelemetry = (event) => {
    bridge.emit(event);
  };

  runtime.getIncidentExplanation = () => {
    return ai.explainLatest();
  };

  runtime.getIncidentTimelineExplanation = () => {
    return ai.explainTimeline();
  };

  console.log("🧠 HUD TELEMETRY + AI EXPLANATION CONNECTED");
}
