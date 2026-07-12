export default function ProductTierSection({title, products}){

  return (
    <section className="product-tier-section">

      <h2>
        {title}
      </h2>

      {
        products.map(product => (

          <article key={product.id}>

            <h3>
              {product.name}

              {
                product.flagship && (
                  <span>
                    {" "}⭐ Flagship
                  </span>
                )
              }

            </h3>

            <small>
              {product.status}
            </small>

          </article>

        ))
      }

    </section>
  );

}
