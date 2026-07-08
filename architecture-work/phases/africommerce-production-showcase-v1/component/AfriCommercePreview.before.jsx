export default function AfriCommercePreview({onExplore}) {
  return (
    <section className="glass-card product-showcase">
      <h3>💰 AfriCommerce</h3>

      <p>Digital commerce ecosystem</p>

      <div className="commerce-preview">
        🛒 Marketplace Active
        <br />
        📦 Products Available
        <br />
        👥 Sellers Connected
      </div>

      <button onClick={onExplore}>
        Explore AfriCommerce
      </button>
    </section>
  );
}
