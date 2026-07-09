export default function LandingFooter() {
  return (
    <footer className="glass-card landing-footer">
      <h3>🌍 AfriDigital Ecosystem</h3>

      <p>
        Unified AI-powered digital infrastructure connecting
        commerce, intelligence, communication and smart services.
      </p>

      <div className="footer-links">
        <span>🧠 AfriAI</span>
        <span>💚 AfriDigital via WhatsApp</span>
        <span>🔐 Secure Platform</span>
      </div>

      <small>
        © {new Date().getFullYear()} AfriDigital. All systems connected.
      </small>
    </footer>
  );
}
