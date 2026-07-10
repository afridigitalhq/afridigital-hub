export default function LandingHero({ navigate }) {
  return (
    <section className="hero-panel">

      <div className="hero-badge">
        🟢 AfriDigital Platform Online
      </div>

      <h1>
        AfriDigital
      </h1>

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

      </div>

    </section>
  );
}
