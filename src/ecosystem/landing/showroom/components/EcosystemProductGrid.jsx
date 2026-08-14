import LandingShowroomRegistry from "../../registry/LandingShowroomRegistry";

const PRODUCT_ICONS = Object.freeze({
  afridesignstudio: "🎨",
  africommerce: "🛒",
  afrieducation: "🎓",
  africctv: "📹",
  afriwork: "💼",
  afriboost: "🚀",
  afritracker: "📍",
  afriforex: "📈",
  afriticking: "🎟️",
  afrilogistics: "🚚",
  afrisports: "⚽",
  afrimetaworld: "🌍",
  afrilove: "❤️"
});

const products = [
  LandingShowroomRegistry.flagship,
  ...LandingShowroomRegistry.tier1,
  ...LandingShowroomRegistry.tier2
].filter(product => product && product.status !== "HIDDEN" && product.showcase !== false);

export default function EcosystemProductGrid(){

  return (
    <section className="ecosystem-service-grid">

      {products.map(product => (

        <article
          key={product.id}
          className={`ecosystem-service-card${product.flagship ? " ecosystem-service-card-featured" : ""}`}
        >

          <div className="ecosystem-service-icon">
            {PRODUCT_ICONS[product.id]}
          </div>

          <h3>
            {product.name}
          </h3>

          {product.tagline && (
            <p className="ecosystem-service-tagline">
              {product.tagline}
            </p>
          )}

        </article>

      ))}

    </section>
  );
}
