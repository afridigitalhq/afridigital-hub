import React, { useEffect, useState } from "react";
import { approvalWorkflowEngine } from "afridigital-api/control-room/approval/ApprovalWorkflowEngine.js";
import { socRBAC } from "afridigital-api/control-room/security/SOCRBAC.js";

export default function ApprovalDashboard({ userId }) {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueue(approvalWorkflowEngine.getQueue());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const approve = (id) => {
    approvalWorkflowEngine.approve(id, userId);
  };

  const reject = (id) => {
    approvalWorkflowEngine.reject(id, userId);
  };

  return (
    <div style={{ padding: 20, background: "#0b0f14", color: "#00ffcc" }}>
      <h2>APPROVAL CONTROL CENTER</h2>

      {queue.length === 0 && <p>No pending actions</p>}

      {queue.map((req) => (
        <div key={req.id} style={{ border: "1px solid #00ffcc", margin: 10, padding: 10 }}>
          <p><b>ID:</b> {req.id}</p>
          <p><b>Status:</b> {req.status}</p>
          <p><b>User:</b> {req.userId}</p>
          <pre>{JSON.stringify(req.action, null, 2)}</pre>

          {req.status === "PENDING_APPROVAL" && (
            <>
              <button onClick={() => approve(req.id)}>APPROVE</button>
              <button onClick={() => reject(req.id)}>REJECT</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
