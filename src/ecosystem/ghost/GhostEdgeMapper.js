export class GhostEdgeMapper {
  mapGhost(event) {
    return {
      id: `ghost-${event.id || Math.random()}`,
      source: event.source || "unknown",
      target: event.target || "unknown",
      animated: true,
      style: {
        stroke: "#9ca3af",
        strokeDasharray: "2 6",
        opacity: 0.4
      },
      label: `👻 ${event.ghostType}`
    };
  }

  build(ghostEvents) {
    return ghostEvents.map(g => this.mapGhost(g));
  }
}
