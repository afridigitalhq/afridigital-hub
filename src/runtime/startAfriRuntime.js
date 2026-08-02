import { dispatchBrainEvent } from "../brain/BrainKernelRegistry.js";
import { getBrainKernel } from "../brain/BrainKernelRegistry.js";
import { loadRuntimeModules } from "./modules/loadRuntimeModules.js";
import { afriRuntimeRegistry } from "../core/runtime/AfriRuntimeRegistry.js";



const _global = typeof globalThis !== "undefined" ? globalThis : window;

let booted = false;

export async function startAfriRuntime(extraModules = {}, options = {}) {

  if (booted && !options.force) {
    return typeof _global !== "undefined" ? _global : window.__AFRI_RUNTIME_STATE__;
  }
// cleaned-expression// cleaned-expression
  const modules = afriRuntimeRegistry.list();

  const runtimeState = {
    version: "1.0.0",
    mode: "production",
    modules,
    startedAt: Date.now(),
    ready: true
  };

  if (typeof _global !== "undefined") { _global.__AFRI_RUNTIME_STATE__ = runtimeState; } else { window.__AFRI_RUNTIME_STATE__ = runtimeState; }
  booted = true;

  return runtimeState;
}

const brain = getBrainKernel();

export default startAfriRuntime;


dispatchBrainEvent("runtime.boot",{
  source:"src/runtime/startAfriRuntime.js",
  status:"online"
});
