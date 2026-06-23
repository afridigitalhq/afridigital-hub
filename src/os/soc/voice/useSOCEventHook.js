import { SOCSpeak } from "./useSOCVoice";

/**
 * Hooks DAG + OS events into voice system
 */
export function SOCEventHook(event) {
  if (!event) return;

  const level =
    event.severity === "critical" ? "critical" :
    event.severity === "warning" ? "warning" :
    "info";

  SOCSpeak(event, level);
}
