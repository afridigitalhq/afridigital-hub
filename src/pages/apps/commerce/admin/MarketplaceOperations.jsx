import useProducts from "../../../../hooks/commerce/useProducts";

export default function MarketplaceOperations(){

  const products = useProducts();

  return (
    <section className="marketplace-operations">

      <h2>
        Marketplace Operations
      </h2>

      <small>
        {products.status}
      </small>

    </section>
  );
}
