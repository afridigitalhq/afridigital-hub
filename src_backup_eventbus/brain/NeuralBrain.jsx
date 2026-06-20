import { useEffect, useState } from "react";

export default function NeuralBrain() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    let ws; 
    let alive = true; 
    ws.onmessage = (msg) => { if (!alive) return; }; 
    ws.onerror = () => {}; 
  }; 
  return () => { alive = false; ws?.close(); };
let alive=true; 
    let ws; 
    let alive = true; 
    ws.onmessage = (msg) => { if (!alive) return; }; 
    ws.onerror = () => {}; 
  }; 
  return () => { alive = false; ws?.close(); };
ws.onmessage=(msg)=>{if(!alive)return;}; 
}; 
return()=>{alive=false;ws?.close();};

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);

      if (data.type === "NEURAL_PULSE") {
        setNodes(prev => {
          const filtered = prev.filter(n => n.id !== data.node.id);
          return [data.node, ...filtered];
        });
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div style={{
      background: "#050505",
      color: "#00ffcc",
      height: "100vh",
      fontFamily: "monospace",
      padding: "20px"
    }}>
      <h1>🧠 AFRIDIGITAL NEURAL GRID</h1>

      {nodes.map(n => (
        <div key={n.id} style={{
          margin: "10px 0",
          padding: "10px",
          border: "1px solid #00ffcc",
          opacity: n.health
        }}>
          🟣 {n.id}
          <br/>
          Health: {n.health.toFixed(2)}
        </div>
      ))}
    </div>
  );
}
