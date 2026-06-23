export class ReplayEngine {
  constructor(streamer) {
    this.streamer = streamer;
  }

  play(index, renderer) {
    const snap = this.streamer.snapshots[index];
    if (!snap) return;

    renderer.update({
      nodes: snap.nodes,
      edges: snap.edges
    });
  }
}
