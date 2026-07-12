import useOrders from "../../../../hooks/commerce/useOrders";

export default function Orders(){

  const orders = useOrders();

  return (
    <section className="commerce-orders">

      <h2>
        My Orders
      </h2>

      <small>
        {orders.status}
      </small>

    </section>
  );
}
