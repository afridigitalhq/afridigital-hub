import useProducts from "../../../../hooks/commerce/useProducts";

export default function ProductManagement(){

  const products = useProducts();

  return (
    <section className="seller-products">

      <h2>
        Product Management
      </h2>

      <small>
        {products.status}
      </small>

    </section>
  );
}
