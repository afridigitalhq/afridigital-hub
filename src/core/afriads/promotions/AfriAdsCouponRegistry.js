/**
 * AfriAds Coupon Registry V1
 * Manages campaign discount codes
 */

const AfriAdsCouponRegistry = {

  coupons:[],

  register(coupon){

    this.coupons.push(coupon);

    return coupon;

  },

  validate(code){

    return this.coupons.find(
      coupon=>coupon.code===code && coupon.active
    );

  }

};

export default AfriAdsCouponRegistry;
