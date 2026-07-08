export default function ProductCard({product,navigate}) {
  return (
    <div
      onClick={() => navigate(product.route)}
      className="glass-card product-card"
    >
      <h3>{product.icon} {product.id}</h3>
      <p>{product.desc}</p>
    </div>
  );
}
