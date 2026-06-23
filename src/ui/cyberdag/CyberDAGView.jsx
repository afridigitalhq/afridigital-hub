import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import { AfriBus } from "../../core/bus/AfriEventBus";

export default function CyberDAGView({ initialNodes, initialEdges }) {
  const [nodes, setNodes] = useState(initialNodes || []);
  const [edges, setEdges] = useState(initialEdges || []);

  useEffect(() => {
    AfriBus.on("DAG_UPDATE", (p) => {
      setNodes(p.nodes);
      setEdges(p.edges);
    });
  }, []);

  return (
    <div className="cyber-dag">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background color="#00ffcc" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
