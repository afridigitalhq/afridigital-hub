export class BootSequenceEngine {
  constructor() {
    this.stage = "BIOS";
  }

  start(callback) {
    const sequence = ["BIOS", "LOADING_KERNEL", "INIT_SOC_CORE", "START_SERVICES", "DESKTOP_READY"];

    let i = 0;

    const run = () => {
      if (i >= sequence.length) {
        callback?.("READY");
        return;
      }

      this.stage = sequence[i];
      callback?.(this.stage);
      i++;

      setTimeout(run, 900);
    };

    run();
  }
}
