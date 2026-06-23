/**
 * 🧠 SOC TELEMETRY BRIDGE
 * Single source of truth for UI + AI explanation
 */

export class SOCTelemetryBridge {
  constructor(runtime) {
    this.runtime = runtime;
    this.buffer = [];
  }

  emit(event) {
    const enriched = {
      ...event,
      ts: Date.now()
    };

    this.buffer.push(enriched);

    this.runtime?.emit?.("telemetry:event", enriched);
  }

  getStream() {
    return this.buffer.slice(-200);
  }

  getSnapshot() {
    return {
      events: this.buffer.length,
      latest: this.buffer[this.buffer.length - 1] || null
    };
  }
}
