import AfriCCTVHybridEngine from "../AfriCCTVHybridEngine";
import AfriCCTVGridEngine from "../AfriCCTVGridEngine";

export default class AfriCCTVRuntime {
  constructor() {
    this.hybrid = new AfriCCTVHybridEngine();
    this.grid = new AfriCCTVGridEngine();
  }

  processStream(events = []) {
    return this.grid.buildGrid(this.hybrid.rankFeeds(events));
  }

  pin(id) { this.hybrid.onPin(id); }
  focus(id) { this.hybrid.onFocus(id); }
  expand(id) { this.hybrid.onExpand(id); }
  reset() { this.hybrid.resetSession(); }
}
