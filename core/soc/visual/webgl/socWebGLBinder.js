export class SOCWebGLBinder {
  constructor(engine) {
    this.engine = engine;
  }

  bind(eventStream) {
    return eventStream.map(e => ({
      node: e.node,
      intensity: e.severity * 10,
      heat: Math.random(),
      timestamp: e.time
    }));
  }
}
