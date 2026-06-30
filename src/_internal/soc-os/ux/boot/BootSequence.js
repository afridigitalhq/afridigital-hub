export class BootSequence {
  constructor() {
    this.stage = "BOOT";
  }

  next() {
    if (this.stage === "BOOT") this.stage = "LOGO";
    else if (this.stage === "LOGO") this.stage = "LOGIN";
    else if (this.stage === "LOGIN") this.stage = "DESKTOP";

    return this.stage;
  }
}
