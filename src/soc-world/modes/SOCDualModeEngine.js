export class SOCDualModeEngine {

  constructor() {
    this.live = true;
    this.training = true;
  }

  toggleLive(state) {
    this.live = state;
  }

  toggleTraining(state) {
    this.training = state;
  }

  getMode() {
    return {
      live: this.live,
      training: this.training,
      mode: this.live && this.training
        ? "HYBRID_SIMULATION_LIVE"
        : this.live
        ? "LIVE_ONLY"
        : "TRAINING_ONLY"
    };
  }
}
