export class SOCBootSequence {
  constructor() {
    this.stage = "BIOS";
    this.progress = 0;
  }

  next() {
    const flow = ["BIOS", "KERNEL", "SERVICES", "LOGIN", "DESKTOP"];

    const index = flow.indexOf(this.stage);
    this.stage = flow[Math.min(index + 1, flow.length - 1)];

    this.progress += 25;

    return {
      stage: this.stage,
      progress: this.progress
    };
  }

  reset() {
    this.stage = "BIOS";
    this.progress = 0;
  }
}
