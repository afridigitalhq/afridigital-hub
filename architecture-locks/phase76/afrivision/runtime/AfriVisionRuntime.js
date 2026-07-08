import AfriVisionHybridEngine from "../AfriVisionHybridEngine";
import AfriVisionGridEngine from "../AfriVisionGridEngine";

export default class AfriVisionRuntime {
  constructor() {
    this.hybrid = new AfriVisionHybridEngine();
    this.grid = new AfriVisionGridEngine();
  }

  processStream(events = []) {
    return this.grid.buildGrid(this.hybrid.rankFeeds(events));
  }

  pin(id) { this.hybrid.onPin(id); }
  focus(id) { this.hybrid.onFocus(id); }
  expand(id) { this.hybrid.onExpand(id); }
  reset() { this.hybrid.resetSession(); }
}
