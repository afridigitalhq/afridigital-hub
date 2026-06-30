export class SyncEngine {
  constructor() {
    this.state = {};
  }

  sync(key, value) {
    this.state[key] = value;
  }

  getState() {
    return this.state;
  }
}
