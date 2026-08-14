import AfriAIConnectionMissionAdapter from "./AfriAIConnectionMissionAdapter.js";

const AfriNexusMissionTargetAdapter = {

  resolve(request = {}) {

    if (
      request.type === "AFRIAI_UNIFIED_CONNECTION_AUDIT"
    ) {
      return AfriAIConnectionMissionAdapter.resolve();
    }

    return request.targets || [];

  }

};

export default AfriNexusMissionTargetAdapter;
