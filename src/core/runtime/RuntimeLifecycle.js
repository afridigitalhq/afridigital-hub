class RuntimeLifecycle {
  start(module) {
    module?.start?.();
  }

  stop(module) {
    module?.stop?.();
  }

  restart(module) {
    this.stop(module);
    this.start(module);
  }
}

export default new RuntimeLifecycle();
