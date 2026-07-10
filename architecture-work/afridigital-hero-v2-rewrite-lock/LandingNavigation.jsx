import { Link } from "react-router-dom";

export default function LandingNavigation() {
  return (
    <nav className="glass-card">
      <Link to="/">🌍 AfriDigital</Link>
      <Link to="/auth">🔐 Login</Link>
      <Link to="/user">🚀 User</Link>
      <Link to="/admin">🛡️ Admin</Link>
    </nav>
  );
}
