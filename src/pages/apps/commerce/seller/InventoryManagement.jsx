import useSellerInventory from "../../../../hooks/commerce/useSellerInventory";

export default function InventoryManagement(){

  const inventory = useSellerInventory();

  return (
    <section className="seller-inventory">

      <h2>
        Inventory Management
      </h2>

      <small>
        {inventory.status}
      </small>

    </section>
  );
}
