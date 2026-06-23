export function cameraPhysics(setViewport) {
  let velocity = { x: 0, y: 0, zoom: 0 };

  return (event) => {
    const type = event?.intent || event?.type;

    // 🎮 force impulses
    let force = { x: 0, y: 0, zoom: 0 };

    if (type === "diagnostic") {
      force = { x: 0, y: -80, zoom: 0.4 };
    }

    if (type === "deploy") {
      force = { x: 120, y: 0, zoom: -0.2 };
    }

    if (type === "simulation") {
      force = { x: 0, y: 0, zoom: 0.6 };
    }

    // 🌊 inertia simulation (smooth camera motion)
    velocity.x = velocity.x * 0.85 + force.x;
    velocity.y = velocity.y * 0.85 + force.y;
    velocity.zoom = velocity.zoom * 0.85 + force.zoom;

    setViewport((vp) => ({
      x: vp.x + velocity.x * 0.01,
      y: vp.y + velocity.y * 0.01,
      zoom: Math.max(0.4, Math.min(2.5, vp.zoom + velocity.zoom * 0.01))
    }));
  };
}
