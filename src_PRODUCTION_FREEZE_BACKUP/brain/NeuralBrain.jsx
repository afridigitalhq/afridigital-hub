// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// AFRIKERNEL_DAG_AUTHORITY_LOCKED (SINGLE SOURCE OF TRUTH)
// EVENT_SOURCED_KERNEL_ONLY
// AFRIKERNEL_RUNTIME_V1 (EVENT LOG → DAG → RENDER ONLY)
// AFRIKERNEL_V1_ACTIVE
// DETERMINISTIC_RENDER_PIPELINE_ENABLED
// AFRIKERNEL_V1_SINGLE_SOURCE_OF_TRUTH
// AFRIKERNEL_V1_SINGLE_RUNTIME_ACTIVE
// AFRIKERNEL_RENDER_PIPELINE_ACTIVE (NO DIRECT STATE, ONLY KERNEL PROJECTION)
// AFRIKERNEL_RUNTIME_ACTIVE (EVENT LOG → DAG → RENDER ONLY)
// AFRISYNC_V2_CLUSTER_REPLICATION_ACTIVE
// AFRIDIGITAL_CAUSAL_DAG_CONTROL_PLANE_V5
// AFRIDIGITAL_TRUE_DAG_SYSTEM_V4_ACTIVE
// AFRIDIGITAL_DAG_GRAPH_V3_FORCE_SIMULATION_ACTIVE
// AFRIDIGITAL_COMPRESSED_DAG_PIPELINE_ACTIVE
// AFRIDIGITAL_WS_DAG_COMPRESSION_PIPELINE_ACTIVE
// AFRIDIGITAL_EVENT_COMPRESSION_ENGINE_ACTIVE
// AFRIDIGITAL_EVENT_SOURCED_DAG_KERNEL_ACTIVE
// AFRIDIGITAL_CONTROL_PLANE_V2_ACTIVE
// AFRIDIGITAL_DAG_CONTROL_PLANE_ACTIVE
// AFRIDIGITAL_DAG_GRAPH_LAYER_ACTIVE
// AFRIDIGITAL_VISUAL_DAG_LAYER_ACTIVE
// AFRIDIGITAL_DAG_GRAPH_LAYER_ACTIVE
// AFRIDIGITAL_DAG_GRAPH_LAYER_ACTIVE
// DAG_GRAPH_LAYER_ACTIVE
import { useEffect, useState } from "react";


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

      const data = JSON.parse(msg.data);

      if (data.type === "NEURAL_PULSE") {
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
