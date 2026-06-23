export function applyGodMotion(nodes, energy) {
  return nodes.map((n, i) => {
    const pulse = energy * (1 + (i % 5) * 0.1);

    return {
      ...n,
      position: {
        x: n.position.x + Math.sin(Date.now()*0.001 + i) * pulse * 12,
        y: n.position.y + Math.cos(Date.now()*0.001 + i) * pulse * 12
      },
      style: {
        ...n.style,
        transform: `scale(${1 + pulse * 0.35})`
      }
    };
  });
}
