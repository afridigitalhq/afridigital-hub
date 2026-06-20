export class EventSourceResolver {
  constructor(sourceRegistry, rootTracer) {
    this.registry = sourceRegistry;
    this.tracer = rootTracer;
  }

  resolve(event) {
    const trace = this.tracer.trace(event);
    const source = this.registry.resolve(event);

    return {
      ...trace,
      source
    };
  }
}
