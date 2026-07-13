const CartContract = Object.freeze({

  type: "CART",

  fields:{
    id:"CART_ID",
    buyer:"USER_ID",
    items:"array",
    total:"number",
    currency:"AFRICOIN",
    status:"ACTIVE"
  }

});

export default CartContract;
