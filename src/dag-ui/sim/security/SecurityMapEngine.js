export class SecurityMapEngine {
  constructor() {
    this.attackPaths = [];
  }

  injectAttack(path) {
    this.attackPaths.push({
      path,
      severity: Math.random() * 10,
      time: Date.now()
    });
  }

  trace() {
    return this.attackPaths.map(a => ({
      ...a,
      pulse: Math.sin(Date.now() / 500) * a.severity
    }));
  }
}
