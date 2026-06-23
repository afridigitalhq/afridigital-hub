import { detectCriticalNodes } from "./criticalNodeDetector";

export function autonomousCameraDirector(setViewport) {
  let lastFocus = null;

  return (nodes, edges, event) => {
    const ranked = detectCriticalNodes(nodes, edges);
    const topNode = ranked[0];

    if (!topNode || topNode.id === lastFocus) return;

    lastFocus = topNode.id;

    const type = event?.intent || event?.type;

    // 🎬 AUTO CAMERA DECISION LOGIC
    let target = { x: 0, y: 0, zoom: 1 };

    if (type === "diagnostic") {
      target = { x: 0, y: 0, zoom: 2.2 }; // zoom into problem space
    }

    if (type === "deploy") {
      target = { x: 0, y: 0, zoom: 1.4 }; // system-wide view
    }

    if (topNode._score > 3) {
      target = { x: 0, y: 0, zoom: 2.5 }; // critical node focus
    }

    setViewport(target);
  };
}
