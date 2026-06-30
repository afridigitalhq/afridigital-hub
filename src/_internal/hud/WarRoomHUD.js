export class WarRoomHUD {
  constructor({ dag, replay, stream, ui }) {
    this.dag = dag;
    this.replay = replay;
    this.stream = stream;
    this.ui = ui;

    this.state = {
      panicMode: false,
      cinematic: true,
      scrubMode: false,
      archiveMode: false,
    };
  }

  togglePanicMode() {
    this.state.panicMode = !this.state.panicMode;
    this.ui.setOverlay("panic", this.state.panicMode);
  }

  enableScrubMode() {
    this.state.scrubMode = true;
    this.ui.setOverlay("scrub", true);
  }

  enableCinematicMode() {
    this.state.cinematic = true;
    this.ui.setOverlay("cinematic", true);
  }

  enableArchiveMode() {
    this.state.archiveMode = true;
    this.ui.setOverlay("archive", true);
  }

  rewind(n = 10) {
    return this.replay.rewind(n);
  }

  forward(n = 10) {
    return this.replay.forward(n);
  }

  feedEvent(event) {
    if (this.state.panicMode && event.anomaly) {
      this.ui.flash("red");
    }

    this.dag?.ingest?.(event);
  }
}
