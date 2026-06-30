export class AudioSceneEngine {
  constructor() {
    this.clusters = new Map();
  }

  setCluster(id, intensity) {
    this.clusters.set(id, {
      intensity,
      pan: Math.random() * 2 - 1
    });
  }

  playFocus(window) {
    const audio = new Audio("/sounds/focus.mp3");

    const pan = (window.x / window.screenWidth) * 2 - 1;

    audio.volume = Math.min(0.8, 0.2 + (window.focus || 0));
    audio.play().catch(() => {});

    return { pan };
  }

  playCluster(id) {
    const cluster = this.clusters.get(id);
    if (!cluster) return;

    const audio = new Audio("/sounds/cluster.mp3");

    audio.volume = cluster.intensity;
    audio.play().catch(() => {});
  }
}
