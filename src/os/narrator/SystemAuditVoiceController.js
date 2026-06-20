export class SystemAuditVoiceController {
  constructor(speakFn) {
    this.speak = speakFn;
    this.enabled = false;
    this.timer = null;
    this.mode = "1h";

    this.intervals = {
      "15m": 900000,
      "30m": 1800000,
      "1h": 3600000,
      "1d": 86400000
    };
  }

  setMode(mode) {
    this.mode = mode;
    if (this.enabled) {
      this.stop();
      this.start();
    }
  }

  start() {
    this.enabled = true;

    this.timer = setInterval(() => {
      if (!this.enabled) return;

      this.speak(
        "System audit checkpoint complete. All active subsystems remain within operational thresholds."
      );
    }, this.intervals[this.mode]);
  }

  stop() {
    this.enabled = false;
    if (this.timer) clearInterval(this.timer);
  }

  toggle() {
    this.enabled ? this.stop() : this.start();
  }
}
