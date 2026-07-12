export default function FutureProductSection({products}){

  return (
    <section className="future-product-section">
      <h2>AfriFuture Products</h2>

      {
        products.length === 0 ? (
          <article>
            <h3>Future Innovations Loading</h3>
            <small>New AfriDigital products will appear here.</small>
          </article>
        ) : (
          products.map(product => (
            <article key={product.id}>
              <h3>{product.name}</h3>
              <small>{product.status}</small>
            </article>
          ))
        )
      }

    </section>
  );
}
