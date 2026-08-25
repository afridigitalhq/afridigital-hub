import { useNavigate } from "react-router-dom";
import LandingShowroomRegistry from "../../../../ecosystem/landing/registry/LandingShowroomRegistry";
import afriaiWhatsappBusinessIcon from "../../../../assets/images/afriai-whatsapp-business.png";

const PRODUCT_ICONS = Object.freeze({
  afriaiwhatsappbusiness: afriaiWhatsappBusinessIcon,
  africommerce: "🛒",
  afridesign: "🎨",
  africctv: "📹",
  afrieducation: "🎓",
  afrisports: "⚽",
  afriboost: "🚀",
  afriwork: "💼",
  afritracker: "📍",
  afriticking: "🎟️",
  afrilove: "❤️"
});

function UserHomeProductCard({ product, primary = false }) {
  const navigate = useNavigate();
  const icon = PRODUCT_ICONS[product.id] || "✦";

  return (
    <article
      onClick={() => product.id === "africctv" && navigate("/user/africctv")}
      role={product.id === "africctv" ? "button" : undefined}
      tabIndex={product.id === "africctv" ? 0 : undefined}
      className={
        primary
          ? "user-home-product-card user-home-product-card-primary"
          : "user-home-product-card"
      }
    >
      <div className="user-home-product-icon">
        {product.id === "afriaiwhatsappbusiness" ? (
          <img src={icon} alt={product.name} />
        ) : (
          icon
        )}
      </div>

      <h4>{product.name}</h4>

      {product.tagline && <p>{product.tagline}</p>}
    </article>
  );
}

function ProductGroup({ title, products, primary = false }) {
  return (
    <section className="user-home-product-group">
      <h3>{title}</h3>

      <div className="user-home-product-grid">
        {products.map(product => (
          <UserHomeProductCard
            key={product.id}
            product={product}
            primary={primary}
          />
        ))}
      </div>
    </section>
  );
}

export default function UserHomeProducts() {
  const {
    primaryFlagship,
    flagship,
    tier2
  } = LandingShowroomRegistry;

  return (
    <section className="user-home-products">

      <ProductGroup
        title="⭐ Primary Flagship"
        products={[primaryFlagship]}
        primary
      />

      <ProductGroup
        title="Flagship Products"
        products={flagship}
      />

      <ProductGroup
        title="Tier 2 Products"
        products={tier2}
      />
    </section>
  );
}
