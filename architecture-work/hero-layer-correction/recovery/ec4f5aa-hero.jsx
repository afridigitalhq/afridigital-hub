export default function LandingHero() {
  return (
    <section className="hero-panel premium-hero">
      <div className="hero-content">
        <div className="hero-brand">
          <img
            className="hero-brand-logo"
            src="/assets/logo/afridigital-logo.png"
            alt="AfriDigital Logo"
          />
          <h1>AfriDigital</h1>
        </div>

        <h2>
          Africa's Digital Infrastructure Ecosystem
        </h2>

        <p className="hero-subtitle">
          Build. Connect. Secure.
        </p>

        <p className="hero-description">
          A unified platform connecting security, commerce,
          communication, intelligence, and digital experiences.
        </p>

        <div className="hero-actions">
          <button className="hero-primary">
            Explore Ecosystem
          </button>

          <button className="hero-secondary">
            Get Started
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="ecosystem-map-card">
          <div className="ecosystem-map">
            🌍
          </div>
          <span>AfriDigital Global Ecosystem</span>
          <strong>CONNECTED</strong>
        </div>
      </div>
    </section>
  );
}
