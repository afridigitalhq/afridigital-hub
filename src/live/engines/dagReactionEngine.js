export function createDagReactionEngine({ setNodes, setEdges }) {
  return (event) => {
    const type = event?.intent || event?.type;

    setNodes((nodes) =>
      nodes.map((n) => {
        if (type === "diagnostic") {
          return { ...n, style: { ...n.style, background: "#ff4d4d" } };
        }
        if (type === "deploy") {
          return { ...n, style: { ...n.style, background: "#4dff88" } };
        }
        return n;
      })
    );

    setEdges((edges) =>
      edges.map((e) => {
        if (type === "diagnostic") {
          return { ...e, animated: true, style: { stroke: "#ff4d4d" } };
        }
        if (type === "deploy") {
          return { ...e, animated: true, style: { stroke: "#4dff88" } };
        }
        return e;
      })
    );
  };
}
