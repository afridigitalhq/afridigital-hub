import { Link } from "react-router-dom";

export default function LandingNavigation() {
  return (
    <nav className="glass-card landing-navigation">

      <Link className="nav-brand" to="/">
        🛡️ AfriDigital
      </Link>

      <div className="nav-actions">

        <a href="#ecosystem">
          🌍 Ecosystem
        </a>

        <a href="#products">
          🚀 Products
        </a>

        <a href="#afriai">
          🧠 AfriAI
        </a>

        <button className="mobile-menu">
          ☰
        </button>

      </div>

    </nav>
  );
}
