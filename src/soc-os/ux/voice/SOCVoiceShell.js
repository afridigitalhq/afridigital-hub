export class SOCVoiceShell {
  constructor(navigator) {
    this.nav = navigator;
  }

  parse(command) {
    const c = command.toLowerCase();

    if (c.includes("warroom")) {
      this.nav.switch("warroom");
    }

    if (c.includes("admin")) {
      this.nav.switch("admin");
    }

    if (c.includes("dag")) {
      this.nav.switch("dag");
    }

    if (c.includes("incidents")) {
      this.nav.switch("incidents");
    }
  }
}
