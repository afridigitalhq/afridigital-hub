export class ArchiveEngine {
  constructor() {
    this.archive = [];
  }

  push(event) {
    this.archive.push({
      ...event,
      archivedAt: Date.now()
    });
  }

  query(filterFn) {
    return this.archive.filter(filterFn);
  }
}
