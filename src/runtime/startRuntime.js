import { dispatchBrainEvent } from "../brain/BrainKernelRegistry.js";
import { getBrainKernel } from "../brain/BrainKernelRegistry.js";
/* AfriAI Runtime Loader */

import { initializeRuntime } from "./integration/runtimeBootstrapIntegration.js";

const brain = getBrainKernel();

export function startAfriRuntime(modules = {}) {
  return initializeRuntime(modules);
}

export default startAfriRuntime;


dispatchBrainEvent("runtime.boot",{
  source:"src/runtime/startRuntime.js",
  status:"online"
});
