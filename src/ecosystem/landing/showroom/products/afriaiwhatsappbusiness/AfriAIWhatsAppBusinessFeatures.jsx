export default function AfriAIWhatsAppBusinessFeatures() {
  const features = [
    "AI-assisted customer conversations",
    "Business messaging automation",
    "Workspace and API-ready architecture",
    "Templates, analytics, and operational controls"
  ];

  return (
    <section className="afriai-whatsapp-business-features">
      {features.map((feature) => (
        <article key={feature}>
          <span>✓</span>
          <p>{feature}</p>
        </article>
      ))}
    </section>
  );
}
