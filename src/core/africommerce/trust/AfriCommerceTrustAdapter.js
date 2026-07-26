const AfriCommerceTrustAdapter = {

  buildSignals(store){

    return {
      storeId: store.storeId,
      completedOrders: store.completedOrders || 0,
      cancelledOrders: store.cancelledOrders || 0,
      customerRatings: store.customerRatings || 0,
      disputes: store.disputes || 0,
      deliverySuccess: store.deliverySuccess || 0,
      verifiedBusiness: store.verifiedBusiness || false,
      productAuthenticity: store.productAuthenticity || false
    };

  }

};

export default AfriCommerceTrustAdapter;
