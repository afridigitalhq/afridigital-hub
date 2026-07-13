const CheckoutContract = Object.freeze({

  type:"CHECKOUT",

  paymentMethods:[
    "AFRICOIN",
    "NATIVE",
    "CRYPTO"
  ],

  fields:{
    cart:"CART_ID",
    buyer:"USER_ID",
    paymentMethod:"PAYMENT_METHOD",
    amount:"number",
    status:"PENDING"
  }

});

export default CheckoutContract;
