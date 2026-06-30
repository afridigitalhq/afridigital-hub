import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>🌍 AfriDigital</h1>
      <p>Welcome to AfriDigital.</p>
      <Link to="/auth">Enter AfriDigital →</Link>
    </div>
  );
}
