import useCheckout from "../../../../hooks/commerce/useCheckout";

export default function Checkout(){

  const checkout = useCheckout();

  return (
    <section className="commerce-checkout">

      <h2>
        Secure Checkout
      </h2>

      <small>
        {checkout.status}
      </small>

    </section>
  );
}
