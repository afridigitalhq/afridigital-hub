import React, { useEffect, useState } from "react";

export default function DeploymentHealthDashboard() {
  const [backend, setBackend] = useState("checking");
  const [frontend, setFrontend] = useState("checking");

  useEffect(() => {
    fetch("https://afridigital-api.onrender.com")
      .then(() => setBackend("🟢 Backend Online"))
      .catch(() => setBackend("🔴 Backend Offline"));

    fetch("https://afridigital-hub.onrender.com")
      .then(() => setFrontend("🟢 Frontend Online"))
      .catch(() => setFrontend("🔴 Frontend Offline"));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "monospace" }}>
      <h2>🚀 Deployment Health Dashboard</h2>
      <p>{backend}</p>
      <p>{frontend}</p>
    </div>
  );
}
