import React, { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import { applyDepth } from "../../core/3d/DepthFieldEngine";
import { layerNodes } from "../depth/FloatingLayerEngine";

export default function HolographicDAG({ nodes, edges }) {
  const [n, setN] = useState(nodes);

  useEffect(() => {
    const loop = () => {
      let processed = applyDepth(n);
      processed = layerNodes(processed);
      setN(processed);
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return (
    <div className="holo-dag">
      <ReactFlow nodes={n} edges={edges} fitView />
    </div>
  );
}
