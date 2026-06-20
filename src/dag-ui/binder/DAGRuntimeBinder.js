export class DAGRuntimeBinder {
  constructor(dagRuntime, setUIState) {
    this.dagRuntime = dagRuntime;
    this.setUIState = setUIState;
  }

  bind() {
    this.dagRuntime.onEvent((event) => {
      this.setUIState(prev => ({
        ...prev,
        lastEvent: event,
        activeNode: event.type,
        timestamp: Date.now()
      }));
    });
  }
}
