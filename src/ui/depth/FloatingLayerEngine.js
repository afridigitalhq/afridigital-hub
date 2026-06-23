export function layerNodes(nodes) {
  return nodes.map((n, i) => {
    const depth = (i % 7) * 60;

    return {
      ...n,
      zIndex: depth,
      style: {
        ...n.style,
        transform: `translate3d(${n.position.x}px, ${n.position.y}px, ${depth}px)`,
        opacity: 1 - depth * 0.002
      }
    };
  });
}
