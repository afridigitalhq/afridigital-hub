import { SOCWebGLBinder } from "../visual/webgl/socWebGLBinder";
import { SOCAISuggestionOverlay } from "../visual/ai/socAISuggestionOverlay";
import { SOCDistributedMap } from "../visual/distributed/socDistributedMap";
import { SOCReplayTimeline } from "../visual/replay/socReplayTimeline";

export class SOCVisualRuntime {

  constructor(stream = []) {

    this.stream = stream;

    this.webgl = new SOCWebGLBinder(this);
    this.ai = new SOCAISuggestionOverlay();
    this.map = new SOCDistributedMap();
    this.replay = new SOCReplayTimeline(stream);

    this.state = {
      nodes: [],
      overlays: [],
      timeline: [],
      distributed: []
    };
  }

  // 🧠 MAIN PIPELINE (single entry point)
  render() {

    const webglView = this.webgl.bind(this.stream);

    const aiHints = this.stream.map(e =>
      this.ai.suggest(e)
    );

    const distributedMap = this.map.build(
      this.stream.map(e => e.node)
    );

    const replayFrame = this.replay.play();

    this.state = {
      nodes: webglView,
      overlays: aiHints,
      distributed: distributedMap,
      timeline: replayFrame
    };

    return this.state;
  }

  // 🔁 LIVE UPDATE PIPE
  ingest(event) {
    this.stream.push(event);
    return this.render();
  }

  // ⏪ REPLAY CONTROL
  scrub(step = 1) {
    return this.replay.scrub(step);
  }

  rewind() {
    return this.replay.rewind();
  }
}
