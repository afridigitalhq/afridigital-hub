export class SessionEngine {
  constructor() {
    this.snapshot = null;
  }

  save(session) {
    this.snapshot = {
      time: Date.now(),
      session
    };
  }

  load() {
    return this.snapshot?.session || null;
  }

  clear() {
    this.snapshot = null;
  }
}
