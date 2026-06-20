export class OSBroadcastEngine {
  constructor(os) {
    this.os = os;
    this.enabled = true;
    this.interval = 30000; // default 30s
    this.timer = null;
  }

  start() {
    if (!this.enabled) return;

    this.timer = setInterval(() => {
      this.announce();
    }, this.interval);
  }

  stop() {
    clearInterval(this.timer);
  }

  setIntervalTime(ms) {
    this.interval = ms;
    this.stop();
    this.start();
  }

  // 🧠 AI-style system narration
  announce() {
    if (!this.os) return;

    const snap = this.os.snapshot();

    const message =
      `System active. ` +
      `Active dashboard: ${snap.active || "none"}. ` +
      `Total modules: ${snap.dashboards.length}.`;

    console.log("🔊 OS BROADCAST:", message);

    return {
      type: "SYSTEM_BROADCAST",
      message
    };
  }
}
