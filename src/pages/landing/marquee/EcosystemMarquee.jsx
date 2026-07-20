export default function EcosystemMarquee() {
  const items = [
    "🛒 AfriCommerce Sell & Shop",
    "🎥 AfriCCTV Secure Homes & Businesses",
    "⚽ AfriSports Connect Fans & Events",
    "🌍 AfriMetaWorld Digital Experiences",
    "💼 AfriWork Opportunities",
    "🚀 AfriBoost Digital Advertising",
    "📍 AfriTracker Device Management",
    "🎟️ AfriTicking Online Tickets",
    "🚚 AfriLogistics Delivery Network",
    "🎓 AfriEducation Learning Platform",
    "💚 AfriLove Social Connections",
    "🤖 AfriAI Digital Assistant"
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
