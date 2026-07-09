import ProductCard from "./ProductCard";
import AfriBoostPreview from "./showcase/AfriBoostPreview";

export default function TierTwoProducts({navigate}) {
  const products = [
    {
      id:"AfriWork",
      icon:"💼",
      desc:"Work and freelancing ecosystem",
      route:"/user/modules/AfriWork"
    },
    {
      id:"AfriTracker",
      icon:"📍",
      desc:"Real-time tracking system",
      route:"/user/modules/AfriTracker"
    },
    {
      id:"AfriTicking",
      icon:"🎟️",
      desc:"Event ticketing system",
      route:"/user/modules/AfriTicking"
    },
    {
      id:"AfriLogistics",
      icon:"📦",
      desc:"Supply chain ecosystem",
      route:"/user/modules/AfriLogistics"
    },
    {
      id:"AfriEducation",
      icon:"🎓",
      desc:"Learning platform",
      route:"/user/modules/AfriEducation"
    },
    {
      id:"AfriLove",
      icon:"💖",
      desc:"Social and relationships ecosystem",
      route:"/user/modules/AfriLove"
    }
  ];

  return (
    <>
      <h2 className="section-title">🚀 Tier 2 Products</h2>

      <AfriBoostPreview
        onExplore={() => navigate("/user/modules/AfriBoost")}
      />

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            navigate={navigate}
          />
        ))}
      </div>
    </>
  );
}
