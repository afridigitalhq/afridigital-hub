import { initSOCVoice } from "../soc/voice/useSOCVoice";
import { createGovernorLayer } from "./useOSGovernor";
import { OSOrchestrator } from "../brain/OSOrchestrator";
import { DAGRuntime } from "../../core/dag/DAGRuntime";
import { UnifiedPluginRegistry } from "../registry/UnifiedPluginRegistry";
import { AINarratorEngine } from "../narrator/AINarratorEngine";

let governor = null;

/**
 * Global OS Event Gateway for React
 * ALL UI EVENTS MUST PASS THROUGH HERE
 */
export function initReactGovernor() {
  if (governor) return governor;

  const layer = createGovernorLayer({
    orchestrator: OSOrchestrator,
    dag: DAGRuntime,
    registry: UnifiedPluginRegistry,
    narrator: AINarratorEngine
  });

  governor = layer;
  window.__OS_GOVERNOR__ = layer;

  console.log("🧠 React Governor Bridge ACTIVE");
initSOCVoice();
initSOCWarMap();
  return layer;
}

/**
 * Main event interceptor (React-safe)
 */
export function OSDispatch(event) {
  if (!governor) initReactGovernor();
  return window.__OS_GOVERNOR__.dispatch(event);
}

/**
 * Sidebar safety wrapper
 */
export function OSSidebarDispatch(event) {
  if (!governor) initReactGovernor();
  return window.__OS_GOVERNOR__.validateSidebar(event);
}
