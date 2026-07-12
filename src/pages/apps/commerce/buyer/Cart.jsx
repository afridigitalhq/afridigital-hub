import useCart from "../../../../hooks/commerce/useCart";

export default function Cart(){

  const cart = useCart();

  return (
    <section className="commerce-cart">

      <h2>
        Shopping Cart
      </h2>

      <small>
        {cart.status}
      </small>

    </section>
  );
}
