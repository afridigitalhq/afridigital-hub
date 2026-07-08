import DiscoveryCard from "./DiscoveryCard";

export default function EcosystemDiscovery() {
  const items = [
    "🛒 Marketplace",
    "🌍 Community",
    "🎟️ Events",
    "🎓 Learning Center",
    "💚 AfriDigital via WhatsApp"
  ];

  return (
    <section>
      <h2 className="section-title">🌐 Ecosystem Discovery</h2>

      <ul className="discovery-grid">
        {items.map(item => (
          <DiscoveryCard
            key={item}
            title={item}
          />
        ))}
      </ul>
    </section>
  );
}
