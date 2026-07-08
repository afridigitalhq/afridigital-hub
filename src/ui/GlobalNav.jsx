import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function GlobalNav() {
  const location = useLocation();

  const btn = (path, label) => ({
    padding: "8px 12px",
    marginRight: 10,
    textDecoration: "none",
    color: location.pathname === path ? "#00ffcc" : "#ffffff",
    borderBottom: location.pathname === path ? "2px solid #00ffcc" : "none"
  });

  return (
    <div style={{
      display: "flex",
      padding: 10,
      background: "#0a0f1a",
      borderBottom: "1px solid #00ffcc"
    }}>
      <Link to="/" style={btn("/", "Landing")}>🌍 Landing</Link>
      <Link to="/auth" style={btn("/auth", "Auth")}>🔐 Auth</Link>
      <Link to="/app" style={btn("/app", "App")}>🏠 App</Link>
      <Link to="/admin" style={btn("/admin", "Admin")}>🛡️ Admin</Link>
    </div>
  );
}
