import { SOCVoiceKernel } from "./SOCVoiceKernel";
import { AINarratorEngine } from "../../narrator/AINarratorEngine";
import { OSOrchestrator } from "../../brain/OSOrchestrator";
import { DAGRuntime } from "../../../core/dag/DAGRuntime";

let kernel = null;

export function initSOCVoice() {
  if (kernel) return kernel;

  kernel = new SOCVoiceKernel({
    narrator: AINarratorEngine,
    orchestrator: OSOrchestrator,
    dag: DAGRuntime
  });

  window.__SOC_VOICE__ = kernel;

  console.log("🌍 SOC VOICE MODE ACTIVE");
  return kernel;
}

export function SOCSpeak(event, level) {
  if (!kernel) initSOCVoice();
  return window.__SOC_VOICE__.speak(event, level);
}

export function SOCInterrupt(command) {
  if (!kernel) initSOCVoice();
  return window.__SOC_VOICE__.interrupt(command);
}
