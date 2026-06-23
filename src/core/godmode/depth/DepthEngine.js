export function applyDepth(nodes) {
  return nodes.map((n, i) => {
    const z = (i % 8) * 90;

    return {
      ...n,
      position: {
        ...n.position,
        z
      },
      style: {
        ...n.style,
        transform: `translate3d(${n.position.x}px, ${n.position.y}px, ${z}px)`,
        opacity: 1 - z * 0.002
      }
    };
  });
}
