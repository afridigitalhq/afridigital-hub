export class SOCBootSequence {
  constructor(onUpdate) {
    this.onUpdate = onUpdate;
    this.stage = 0;

    this.steps = [
      "INITIALIZING AFRIDIGITAL KERNEL",
      "LOADING SOC CORE MODULES",
      "MOUNTING WAR ROOM ENGINE",
      "CONNECTING WEBGL DAG RUNTIME",
      "STARTING REALTIME EVENT STREAMS",
      "INITIALIZING AI FORECAST LAYER",
      "ENABLING COMMAND TERMINAL",
      "BOOT COMPLETE"
    ];
  }

  start() {
    let i = 0;

    const interval = setInterval(() => {
      if (i >= this.steps.length) {
        clearInterval(interval);
        return;
      }

      this.onUpdate({
        stage: i,
        message: this.steps[i],
        progress: Math.floor((i / (this.steps.length - 1)) * 100)
      });

      i++;
    }, 700);
  }
}
