export class SourceCodeRegistry {
  constructor() {
    // eventType → file/module mapping
    this.map = new Map();
  }

  register(eventType, filePath, moduleName, lineHint = null) {
    this.map.set(eventType, {
      filePath,
      moduleName,
      lineHint
    });
  }

  resolve(event) {
    const entry = this.map.get(event.type);

    if (!entry) {
      return {
        filePath: "unknown",
        moduleName: "unknown",
        lineHint: null
      };
    }

    return {
      eventId: event.id,
      type: event.type,
      filePath: entry.filePath,
      moduleName: entry.moduleName,
      lineHint: entry.lineHint
    };
  }
}
