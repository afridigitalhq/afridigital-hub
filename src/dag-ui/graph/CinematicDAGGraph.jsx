import React, { useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import { UnifiedPluginRegistry } from "../../os/registry/UnifiedPluginRegistry";

export default function CinematicDAGGraph({ dagRuntime, onSelect }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [glowMap, setGlowMap] = useState({});

  const graphData = useMemo(() => {
    const layoutNodes = UnifiedPluginRegistry.map((d, i) => ({
      id: d.id,
      data: { label: `${d.icon} ${d.label}` },
      position: { x: (i % 4) * 220, y: Math.floor(i / 4) * 140 },
      style: {
        padding: 10,
        borderRadius: 12,
        border: "1px solid #2b2f3a",
        background: "#0b0f19",
        color: "#fff",
        boxShadow: glowMap[d.id]
          ? "0 0 20px rgba(59,130,246,0.8)"
          : "none"
      }
    }));

    const layoutEdges = UnifiedPluginRegistry.slice(1).map((d, i) => ({
      id: `e-${i}`,
      source: UnifiedPluginRegistry[i % UnifiedPluginRegistry.length].id,
      target: d.id,
      animated: true,
      style: { stroke: "#3b82f6" }
    }));

    return { layoutNodes, layoutEdges };
  }, [glowMap]);

  useEffect(() => {
    setNodes(graphData.layoutNodes);
    setEdges(graphData.layoutEdges);
  }, [graphData]);

  useEffect(() => {
    if (!dagRuntime) return;

    const handler = (event) => {
      const id = event.type || event.nodeId;

      setGlowMap(prev => ({ ...prev, [id]: true }));

      setTimeout(() => {
        setGlowMap(prev => ({ ...prev, [id]: false }));
      }, 800);
    };

    dagRuntime.onEvent?.(handler);

    return () => dagRuntime.offEvent?.(handler);
  }, [dagRuntime]);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#05070d" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        onNodeClick={(e, node) => onSelect?.(node)}
      >
        <Background color="#1f2937" gap={16} />
        <MiniMap style={{ background: "#0b0f19", border: "1px solid #1f2937" }} nodeColor={() => "#3b82f6"} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
