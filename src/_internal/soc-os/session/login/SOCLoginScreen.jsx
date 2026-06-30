import React, { useState } from "react";

export default function SOCLoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");

  const users = [
    { id: 1, name: "SOC Operator" },
    { id: 2, name: "Admin Analyst" },
    { id: 3, name: "WarRoom Chief" }
  ];

  return (
    <div className="soc-login-screen">

      {/* BACKGROUND */}
      <div className="login-bg">
        <h1>🧠 SOC OPERATING SYSTEM</h1>
      </div>

      {/* USER SELECT */}
      <div className="login-panel">

        <h2>Select User</h2>

        {users.map(u => (
          <div
            key={u.id}
            className="user-card"
            onClick={() => onLogin(u)}
          >
            👤 {u.name}
          </div>
        ))}

      </div>

    </div>
  );
}
