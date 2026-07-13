export default function ProductCard({product}){

  return (
    <article className="commerce-product-card">

      <h3>{product.title}</h3>

      <p>
        {product.type}
      </p>

      <small>
        {product.condition}
      </small>

      <strong>
        {product.price} {product.currency}
      </strong>

    </article>
  );

}
