import LandingShowroomRegistry from "../../registry/LandingShowroomRegistry";
import afriaiWhatsappBusinessIcon from "../../../../assets/images/afriai-whatsapp-business.png";

const PRODUCT_ICONS = Object.freeze({
  afriaiwhatsappbusiness: afriaiWhatsappBusinessIcon,
  africommerce: "🛒",
  africctv: "📹",
  afrieducation: "🎓",
  afrisports: "⚽",
  afriboost: "🚀",
  afriwork: "💼",
  afritracker: "📍",
  afriticking: "🎟️",
  afrilove: "❤️"
});

function ProductCard({ product, primary = false }) {
  return (
    <article className={
      primary
        ? "ecosystem-service-card ecosystem-service-card-primary"
        : "ecosystem-service-card"
    }>
      <div className="ecosystem-service-icon">
        {product.id === "afriaiwhatsappbusiness" ? (
          <img src={PRODUCT_ICONS[product.id]} alt="AfriAI WhatsApp Business" />
        ) : (
          PRODUCT_ICONS[product.id] || "✦"
        )}
      </div>

      <div className={
        product.id === "afriaiwhatsappbusiness"
          ? "afriai-whatsapp-business-card-content"
          : undefined
      }>
        <h3>{product.name}</h3>

        {product.tagline && (
          <p className="ecosystem-service-tagline">
            {product.tagline}
          </p>
        )}
      </div>
    </article>
  );
}
export default function EcosystemProductGrid() {
  const {
    primaryFlagship,
    flagship,
    tier2
  } = LandingShowroomRegistry;

  return (
    <section className="ecosystem-showroom-groups">

      <section className="showroom-group showroom-primary-flagship">
        <h2>⭐ Primary Flagship</h2>
        <ProductCard product={primaryFlagship} primary />
      </section>

      <section className="showroom-group showroom-flagship-products">
        <h2>Flagship Products</h2>
        <div className="ecosystem-service-grid">
          {flagship.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="showroom-group showroom-tier2-products">
        <h2>Tier 2 Products</h2>
        <div className="ecosystem-service-grid">
          {tier2.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </section>
  );
}
