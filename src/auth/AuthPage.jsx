import React from "react";
import { Link } from "react-router-dom";

export default function AuthPage() {
  return (
    <div>
      <h1>🔐 Authentication</h1>
      <p>Temporary development access.</p>
      <p><Link to="/app">Enter App</Link></p>
      <p><Link to="/adminhomepage">Admin Home</Link></p>
    </div>
  );
}
