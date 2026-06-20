import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

/**
 * 🌐 DAG FLOW VIEWER v2
 * - React Flow graph visualization
 * - live event → node mapping
 * - optional websocket streaming hook
 */

export default function DAGFlowViewer({ runtime }) {

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // 🧠 convert DAG timeline → graph
  function buildGraph(timeline = []) {

    const n = [];
    const e = [];

    timeline.forEach((event, i) => {

      n.push({
        id: String(i),
        data: { label: event.type },
        position: {
          x: (i % 5) * 150,
          y: Math.floor(i / 5) * 120
        }
      });

      if (i > 0) {
        e.push({
          id: `e${i - 1}-${i}`,
          source: String(i - 1),
          target: String(i)
        });
      }
    });

    return { nodes: n, edges: e };
  }

  // 📡 live sync (polling first, websocket-ready later)
  useEffect(() => {

    if (!runtime) return;

    const interval = setInterval(() => {

      const timeline = runtime.getTimeline?.() || [];
      const graph = buildGraph(timeline);

      setNodes(graph.nodes);
      setEdges(graph.edges);

    }, 1000);

    return () => clearInterval(interval);

  }, [runtime]);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#0b0f14" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
