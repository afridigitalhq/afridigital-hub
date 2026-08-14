import AfriNexusMissionEngine from "../missions/AfriNexusMissionEngine.js";

const AfriNexusMissionRunner = {
  start(request = {}) {

    const result =
      AfriNexusMissionEngine.create(request);

    return {
      type: "AFRINEXUS_MISSION_REPORT",
      request,
      result,
      delivery: {
        status: "pending_human_review",
        approvalRequired: true
      }
    };
  }
};

export default AfriNexusMissionRunner;
