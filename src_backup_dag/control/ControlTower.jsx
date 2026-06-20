import { useEffect, useState } from "react";

export default function ControlTower() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let ws; 
    let alive = true; 
    ws.onerror = () => {}; 
  }; 
  return () => { alive = false; ws?.close(); };
let alive=true; 
    let ws; 
    let alive = true; 
    ws.onerror = () => {}; 
  }; 
  return () => { alive = false; ws?.close(); };
}; 
return()=>{alive=false;ws?.close();};

      try {
        const data = JSON.parse(msg.data);
        setLogs((prev) => [data, ...prev].slice(0, 50));
      } catch (e) {}
    };

    return () => ws.close();
  }, []);

  return (
    <div style={{
      background: "#0a0a0a",
      color: "#00ffcc",
      height: "100vh",
      padding: "20px",
      fontFamily: "monospace"
    }}>
      <h1>🟣 AFRIDIGITAL CONTROL TOWER</h1>

      <div>
        {logs.map((l, i) => (
          <div key={i}>
            [{l.type}] {l.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
