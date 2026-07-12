import useCommerceCatalog from "../hooks/useCommerceCatalog";

export default function CommerceVisualCatalog(){

  const products = useCommerceCatalog();

  return (
    <section className="commerce-visual-catalog">

      <h2>
        Featured Products
      </h2>

      {
        products.map(product => (

          <article key={product.id}>

            <h3>
              {product.name}
            </h3>

            <small>
              {product.category} • {product.related}
            </small>

          </article>

        ))
      }

    </section>
  );
}
