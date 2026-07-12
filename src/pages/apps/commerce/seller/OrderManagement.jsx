import useOrders from "../../../../hooks/commerce/useOrders";

export default function OrderManagement(){

  const orders = useOrders();

  return (
    <section className="seller-orders">

      <h2>
        Order Management
      </h2>

      <small>
        {orders.status}
      </small>

    </section>
  );
}
