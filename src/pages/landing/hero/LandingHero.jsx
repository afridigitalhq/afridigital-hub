import HeroHighlights from "./HeroHighlights";

export default function LandingHero({ navigate }) {
  return (
    <section className="hero-panel">

      <div className="hero-badge">
        🟢 AfriDigital Ecosystem Online
      </div>

      <h1>
        🌍 AfriDigital Ecosystem
      </h1>

      <p className="hero-subtitle">
        Unified AI-powered digital infrastructure connecting
        commerce, intelligence, communication and smart services.
      </p>

      <HeroHighlights />

      <div className="hero-actions">

        <button
          className="cta-primary"
          onClick={() => navigate("/user")}
        >
          🚀 Enter User OS
        </button>

        <button
          className="cta-secondary"
          onClick={() => navigate("/admin")}
        >
          🛠️ Admin Control
        </button>

      </div>

    </section>
  );
}
