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
  ...LandingShowroomRegistry.tier1,
  ...LandingShowroomRegistry.tier2
].filter(product => product.status !== "HIDDEN");

export default function EcosystemProductGrid(){

  return (
    <section className="ecosystem-service-grid">

      {products.map(product => (

        <article
          key={product.id}
          className="ecosystem-service-card"
        >

          <div className="ecosystem-service-icon">
            {PRODUCT_ICONS[product.id]}
          </div>

          <h3>
            {product.name}
          </h3>

        </article>

      ))}

    </section>
  );
}
