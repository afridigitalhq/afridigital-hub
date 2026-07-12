import ProductTierRenderer from "../../../../ecosystem/landing/renderers/ProductTierRenderer";

export default function ProductPortal(){

  const products = ProductTierRenderer.getAll();

  return (
    <section className="product-portal">

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
              {product.tier}
            </small>

          </article>

        ))
      }

    </section>
  );

}
