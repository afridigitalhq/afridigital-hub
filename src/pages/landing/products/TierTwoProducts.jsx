import ProductCard from "./ProductCard";

export default function TierTwoProducts({navigate}) {
  const products = [
    {
      id:"AfriBoost",
      icon:"🚀",
      desc:"Growth and marketing engine",
      route:"/user/modules/AfriBoost"
    },
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
