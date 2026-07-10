export default function LandingHero({ navigate }) {
  return (
    <section className="hero-panel">

      <div className="hero-badge">
        <span className="hero-status-dot"></span><span>AfriDigital Platform Online</span>
      </div>

      <div className="hero-brand"><div className="hero-brand-mark">🛡️</div><h1>AfriDigital</h1></div>

      <p className="hero-subtitle">
        Build. Connect. Secure.
<br />
        The intelligent digital infrastructure platform powering Africa’s next generation.
      </p>

      <div className="hero-actions">

        <button
          className="cta-primary"
          onClick={() => navigate("/auth")}
        >
          🔐 Login
        </button>

        <button
          className="cta-secondary"
          onClick={() => navigate("/auth?mode=signup")}
        >
          🚀 Sign Up
        </button>


      <div className="hero-trust-bar">
        <span>🛡️ Enterprise Security</span>
        <span>⚡ AI Powered</span>
        <span>☁️ Cloud Ready</span>
        <span>🌍 Africa Focused</span>
      </div>

    </section>
  );
}
