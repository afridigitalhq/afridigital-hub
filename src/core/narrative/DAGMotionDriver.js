export function applyAudioMotion(nodes, energy) {
  return nodes.map(n => ({
    ...n,
    position: {
      x: n.position.x + Math.sin(Date.now()*0.001) * energy * 10,
      y: n.position.y + Math.cos(Date.now()*0.001) * energy * 10
    },
    style: {
      ...n.style,
      transform: `scale(${1 + energy * 0.3})`
    }
  }));
}
