// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// REPLAY_IS_SINGLE_SOURCE_OF_TRUTH
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// TIME_TRAVEL_KERNEL_CONTROLLED
export class TimeTravelKernel {
  constructor(eventLog, dagBuilder) {
    this.eventLog = eventLog;
    this.dagBuilder = dagBuilder;
    this.index = 0;
    this.paused = false;
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  rollback(i) {
    this.index = i;
    const slice = this.eventLog.getAll().slice(0, i);
    return this.dagBuilder.buildFromEvents(slice);
  }

  replayStep() {
    const events = this.eventLog.getAll().slice(0, this.index);
    return this.dagBuilder.buildFromEvents(events);
  }

  fullReplay() {
    return this.dagBuilder.buildFromEvents(this.eventLog.getAll());
  }
}
