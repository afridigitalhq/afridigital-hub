export class WindowSessionEngine {
  constructor() {
    this.store = null;
  }

  save(state) {
    this.store = {
      timestamp: Date.now(),
      state
    };
  }

  load() {
    return this.store?.state || null;
  }

  clear() {
    this.store = null;
  }
}
