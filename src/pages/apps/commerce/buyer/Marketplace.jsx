import useProducts from "../../../../hooks/commerce/useProducts";

export default function Marketplace(){

  const products = useProducts();

  return (
    <section className="commerce-marketplace">

      <h1>
        AfriMarket
      </h1>

      <p>
        Discover trusted products across AfriCommerce.
      </p>

      <small>
        {products.status}
      </small>

    </section>
  );
}
