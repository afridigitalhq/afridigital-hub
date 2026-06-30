export class LayoutSnapshot {
  constructor() {
    this.history = [];
  }

  save(state) {
    this.history.push(JSON.parse(JSON.stringify(state)));
  }

  rollback() {
    return this.history.pop() || null;
  }
}
