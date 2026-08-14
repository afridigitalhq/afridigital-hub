import AfriNexusSecurityPolicyEngine from "../../afrinexus/security/AfriNexusSecurityPolicyEngine.js";
import AfriNexusApprovalRegistry from "../../afrinexus/approval/AfriNexusApprovalRegistry.js";
import AfriNexusAIGatewayEvidenceAdapter from "../../afrinexus/evidence/AfriNexusAIGatewayEvidenceAdapter.js";

const AfriControlCenterNexusSecurityAPI = {

  security(targets = []) {

    return AfriNexusSecurityPolicyEngine.evaluate(targets);

  },


  approvals(id){

    return AfriNexusApprovalRegistry.status(id);

  },


  aiGateway(){

    return AfriNexusAIGatewayEvidenceAdapter.collect();

  }

};

export default AfriControlCenterNexusSecurityAPI;
