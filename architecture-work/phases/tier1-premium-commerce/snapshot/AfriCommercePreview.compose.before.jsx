export default function AfriCommercePreview({onExplore}) {
  return (
    <section className="glass-card product-showcase commerce-showcase">

      <div className="showcase-header">
        <h3>💰 AfriCommerce Intelligence</h3>
        <span>🟢 MARKET ONLINE</span>
      </div>

      <p className="showcase-description">
        Digital marketplace infrastructure connecting buyers, sellers and products.
      </p>

      <div className="commerce-preview">
        🛒 Marketplace Engine Active
        <br />
        📦 Product Network Connected
        <br />
        👥 Seller Ecosystem Growing
        <br />
        📊 Commerce Analytics Ready
      </div>

      <button onClick={onExplore}>
        Explore AfriCommerce
      </button>

    </section>
  );
}
