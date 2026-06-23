
import { Win11BootCinematicKernelSequence } from "./Win11BootCinematicKernelSequence";

/**
 * 🎬 Connect boot cinematic sequence to runtime
 */

export function connectWin11BootCinematic(runtime) {
  const boot = new Win11BootCinematicKernelSequence(runtime);

  runtime.startBootSequence = () => boot.start();

  runtime.getBootStage = () => boot.currentStage;

  runtime.attachTelemetry?.({
    type: "BOOT_CINEMATIC_LAYER",
    status: "ACTIVE"
  });

  console.log("🎬 Boot Cinematic Kernel Connected");
}
