export function applyDepth(nodes) {
  return nodes.map((n, i) => ({
    ...n,
    position: {
      x: n.position.x,
      y: n.position.y,
      z: (i % 5) * 80
    },
    style: {
      ...n.style,
      transform: `translateZ(${(i % 5) * 80}px)`
    }
  }));
}
