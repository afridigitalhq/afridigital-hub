import useOrders from "../../../../hooks/commerce/useOrders";

export default function OrderOperations(){

  const orders = useOrders();

  return (
    <section className="order-operations">

      <h2>
        Order Operations
      </h2>

      <small>
        {orders.status}
      </small>

    </section>
  );
}
