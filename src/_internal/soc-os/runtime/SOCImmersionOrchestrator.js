import { BootSequenceEngine } from "../cinematic/boot/BootSequenceEngine";
import { SystemSoundEngine } from "../cinematic/sound/SystemSoundEngine";

export class SOCImmersionOrchestrator {
  constructor() {
    this.boot = new BootSequenceEngine();
    this.sound = new SystemSoundEngine();
  }

  start(callback) {
    this.sound.play("boot");

    this.boot.start((stage) => {
      if (stage === "DESKTOP_READY") {
        this.sound.play("notify");
      }

      callback?.(stage);
    });
  }
}
