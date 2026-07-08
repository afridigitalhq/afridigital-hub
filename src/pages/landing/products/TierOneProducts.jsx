import ProductCard from "./ProductCard";

export default function TierOneProducts({navigate}) {
  const products = [
    {
      id:"AfriCommerce",
      icon:"💰",
      desc:"Digital commerce ecosystem",
      route:"/user/modules/AfriCommerce"
    },
    {
      id:"AfriCCTV",
      icon:"🎥",
      desc:"Smart security monitoring ecosystem",
      route:"/user/modules/AfriCCTV"
    },
    {
      id:"AfriSports",
      icon:"⚽",
      desc:"Sports experience ecosystem",
      route:"/user/modules/AfriSports"
    },
    {
      id:"AfriMetaWorld",
      icon:"🎮",
      desc:"Virtual world platform",
      route:"/user/modules/AfriMetaWorld"
    }
  ];

  return (
    <>
      <h2 className="section-title">🌟 Tier 1 Products</h2>

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
