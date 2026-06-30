export class OSBootFlow {

  constructor() {
    this.stage = "BIOS";
  }

  next() {
    const flow = ["BIOS", "KERNEL", "LOGIN", "DESKTOP"];
    const idx = flow.indexOf(this.stage);

    if (idx < flow.length - 1) {
      this.stage = flow[idx + 1];
    }

    return this.stage;
  }

  getStage() {
    return this.stage;
  }
}
