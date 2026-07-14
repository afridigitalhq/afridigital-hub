export default function EcosystemMarquee() {
  const items = [
    "🎥 AfriCCTV Monitoring Online",
    "⚽ AfriSports Match Center Ready",
    "🎮 AfriMetaWorld Connected",
    "💰 AfriCommerce Active",
    "📡 AfriComm Online",
    "💚 AfriWhatsApp Connected",
    "🚀 AfriBoost Campaigns Ready",
    "📍 Device Tracking Live"
  ];

  return (
    <section className="ecosystem-marquee">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="ticker-item">
            {item}
            <span className="ticker-dot">•</span>
          </span>
        ))}
      </div>
    

    </section>
  );
}
