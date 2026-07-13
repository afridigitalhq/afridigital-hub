import useCommerceProducts from "../../../../hooks/commerce/useCommerceProducts";
import ProductCard from "./components/ProductCard";

export default function ProductDiscovery(){

  const products = useCommerceProducts();

  return (

    <section className="commerce-product-discovery">

      <h1>
        Discover Products
      </h1>

      {
        products?.data?.map(product=>(
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }

    </section>

  );

}
