export class AudioEventGraph {
  constructor() {
    this.nodes = [];
  }

  emit(event) {
    const node = {
      type: event.type,
      intensity: event.intensity || 0.5,
      timestamp: Date.now()
    };

    this.nodes.push(node);

    const audio = new Audio(
      event.type === "attack"
        ? "/sounds/attack.mp3"
        : "/sounds/event.mp3"
    );

    audio.volume = node.intensity;
    audio.play().catch(() => {});
  }

  getGraph() {
    return this.nodes.slice(-50);
  }
}
