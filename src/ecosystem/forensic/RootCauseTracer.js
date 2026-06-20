export class RootCauseTracer {
  constructor(sourceMap = {}) {
    // eventType -> file/module mapping
    this.sourceMap = sourceMap;
    this.traceLog = [];
  }

  registerSource(eventType, filePath, module) {
    this.sourceMap[eventType] = { filePath, module };
  }

  trace(event) {
    const source = this.sourceMap[event.type] || {
      filePath: "unknown",
      module: "unknown"
    };

    const trace = {
      eventId: event.id,
      type: event.type,
      originFile: source.filePath,
      module: source.module,
      timestamp: Date.now()
    };

    this.traceLog.push(trace);
    return trace;
  }

  getTraceLog() {
    return this.traceLog.slice(-300);
  }
}
