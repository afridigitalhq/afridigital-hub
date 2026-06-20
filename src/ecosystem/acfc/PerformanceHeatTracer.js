export class PerformanceHeatTracer {
  constructor() {
    this.fileLoad = new Map();
  }

  ingest(event) {
    const file = event.file || "unknown";

    const current = this.fileLoad.get(file) || 0;
    this.fileLoad.set(file, current + 1);
  }

  getHeatmap() {
    return Array.from(this.fileLoad.entries()).map(([file, load]) => ({
      file,
      load,
      heat:
        load > 100 ? "CRITICAL" :
        load > 50 ? "HIGH" :
        load > 20 ? "MEDIUM" : "LOW"
    }));
  }
}
