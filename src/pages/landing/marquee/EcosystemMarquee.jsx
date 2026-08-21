export default function EcosystemMarquee() {
  const items = [
    "🤖 AfriAI WhatsApp Business",
    "🛒 AfriCommerce",
    "📹 AfriCCTV",
    "🎓 AfriEducation",
    "⚽ AfriSports",
    "🚀 AfriBoost",
    "💼 AfriWork",
    "📍 AfriTracker",
    "🎟️ AfriTicking",
    "❤️ AfriLove"
  ];

  return (
    <section className="ecosystem-marquee">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={index} className="ticker-item">
            {item}
            <span className="ticker-dot">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
