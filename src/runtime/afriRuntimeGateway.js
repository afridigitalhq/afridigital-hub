import { dispatchBrainEvent } from "../brain/BrainKernelRegistry.js";
import { getBrainKernel } from "../brain/BrainKernelRegistry.js";
import { readState } from "./state/afriStateManager.js";
import { readHistory } from "./state/afriHistoryManager.js";
import { readEvents } from "./events/afriEventBus.js";
import { readMetrics } from "./metrics/afriRuntimeMetrics.js";

const brain = getBrainKernel();

export function getRuntimeSnapshotSafe() {
  return {
    state: readState(),
    history: readHistory(),
    events: readEvents(),
    metrics: readMetrics()
  };
}


dispatchBrainEvent("runtime.boot",{
  source:"src/runtime/afriRuntimeGateway.js",
  status:"online"
});
