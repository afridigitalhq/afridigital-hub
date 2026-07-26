const AfriLogisticsTrustAdapter = {

  buildSignals(provider){

    return {
      providerId: provider.providerId,
      completedDeliveries: provider.completedDeliveries || 0,
      failedDeliveries: provider.failedDeliveries || 0,
      deliverySpeed: provider.deliverySpeed || 0,
      customerRatings: provider.customerRatings || 0,
      disputes: provider.disputes || 0,
      verifiedDrivers: provider.verifiedDrivers || false,
      packageSafetyScore: provider.packageSafetyScore || 0
    };

  }

};

export default AfriLogisticsTrustAdapter;
