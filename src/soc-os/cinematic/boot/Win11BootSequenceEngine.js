export class Win11BootSequenceEngine {

  async run(callback) {
    await this.delay(800);
    callback("BIOS_SCREEN");

    await this.delay(1200);
    callback("LOADING_KERNEL");

    await this.delay(1200);
    callback("LOGIN_SCREEN");

    await this.delay(1500);
    callback("DESKTOP_FADE_IN");

    return "BOOT_COMPLETE";
  }

  delay(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
}
