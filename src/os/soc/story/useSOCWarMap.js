import { SOCWarMapEngine } from "./SOCWarMapEngine";
import { SOCVoiceKernel } from "../voice/SOCVoiceKernel";

let engine = null;

export function initSOCWarMap(dag, voice) {
  if (engine) return engine;

  engine = new SOCWarMapEngine({
    dag,
    voice
  });

  window.__SOC_WAR_MAP__ = engine;

  console.log("🎥 SOC WAR MAP ENGINE ACTIVE");
  return engine;
}

export function SOCWarIngest(event) {
  if (!engine) return null;
  return engine.ingest(event);
}

export function SOCWarReplay(id) {
  if (!engine) return null;
  return engine.replay(id);
}
