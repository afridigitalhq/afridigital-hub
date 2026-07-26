const AfriCCTVTrustAdapter = {

  buildSignals(provider){

    return {
      providerId: provider.providerId,
      completedInstallations: provider.completedInstallations || 0,
      systemUptime: provider.systemUptime || 0,
      incidentResponse: provider.incidentResponse || 0,
      customerRatings: provider.customerRatings || 0,
      disputes: provider.disputes || 0,
      verifiedTechnicians: provider.verifiedTechnicians || false,
      maintenanceSuccess: provider.maintenanceSuccess || 0
    };

  }

};

export default AfriCCTVTrustAdapter;
