export class ConversationalOSLoop {
  constructor({ commander, narrator }) {
    this.commander = commander;
    this.narrator = narrator;
    this.active = false;
    this.lastEvent = null;
  }

  start() {
    this.active = true;
  }

  stop() {
    this.active = false;
  }

  // 🧠 SYSTEM SPEAKS FIRST
  speak(event) {
    const report = this.commander.analyze(event);

    this.lastEvent = event;

    this.narrator?.speak(report.narrative);

    return report;
  }

  // 🎤 ADMIN RESPONDS (TEXT OR VOICE TRANSCRIBED)
  respond(input) {
    if (!this.active) return null;

    const query = input.toLowerCase();

    // simple intent routing (OS brain stub)
    if (query.includes("explain")) {
      return this.reExplain();
    }

    if (query.includes("simulate")) {
      return this.reSimulate();
    }

    if (query.includes("why")) {
      return this.deepAnalysis();
    }

    return this.reAnalyze(input);
  }

  reExplain() {
    const msg = "Re-evaluating root cause with extended DAG trace.";
    this.narrator?.speak(msg);
    return msg;
  }

  reSimulate() {
    const msg = "Running predictive cascade simulation based on latest query.";
    this.narrator?.speak(msg);
    return msg;
  }

  deepAnalysis() {
    const msg = "Performing deep causal chain reconstruction across DAG layers.";
    this.narrator?.speak(msg);
    return msg;
  }

  reAnalyze(input) {
    const msg = `Reprocessing system state based on: ${input}`;
    this.narrator?.speak(msg);
    return msg;
  }
}
