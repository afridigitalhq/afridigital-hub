const CommerceRoutes = Object.freeze({

  BUYER: {
    HOME: "/commerce",
    PRODUCTS: "/commerce/products",
    PRODUCT_DETAILS: "/commerce/products/:id",
    CART: "/commerce/cart",
    CHECKOUT: "/commerce/checkout",
    ORDERS: "/commerce/orders"
  },

  SELLER: {
    HOME: "/commerce/seller",
    PRODUCTS: "/commerce/seller/products",
    INVENTORY: "/commerce/seller/inventory",
    ORDERS: "/commerce/seller/orders",
    ANALYTICS: "/commerce/seller/analytics"
  },

  ADMIN: {
    HOME: "/commerce/admin",
    MARKETPLACE: "/commerce/admin/marketplace",
    SELLERS: "/commerce/admin/sellers",
    MODERATION: "/commerce/admin/moderation",
    ANALYTICS: "/commerce/admin/analytics"
  }

});

export default CommerceRoutes;
