import AfriAIGatewayInvestigationAdapter from "../../afriai/gateway/AfriAIGatewayInvestigationAdapter.js";

const AfriNexusEvidenceAdapterResolver = {

  resolve(item) {

    if (
      item.file.includes("afriai/gateway")
    ) {
      return AfriAIGatewayInvestigationAdapter.collect();
    }

    return null;

  }

};

export default AfriNexusEvidenceAdapterResolver;
