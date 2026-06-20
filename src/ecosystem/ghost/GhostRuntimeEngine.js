export class GhostRuntimeEngine {
  constructor() {
    this.ghostEvents = [];
    this.knownSources = new Set([
      "AfriBank",
      "AfriShop",
      "AfriComms",
      "AfriAI",
      "AfriScan",
      "Swarm"
    ]);
  }

  detect(event) {
    const source = event.source || "unknown";

    const isGhost =
      !this.knownSources.has(source) ||
      event.duplicate === true ||
      event.silent === true;

    if (isGhost) {
      this.ghostEvents.push({
        ...event,
        ghostType: this.classify(event)
      });
    }

    return isGhost;
  }

  classify(event) {
    if (event.duplicate) return "DUPLICATE_SHADOW";
    if (event.silent) return "SILENT_RUNTIME";
    if (!event.source) return "ORPHAN_STREAM";
    return "UNKNOWN_ECHO";
  }

  getGhosts() {
    return this.ghostEvents.slice(-200);
  }
}
