import AfriNexusRollbackRegistry from "../rollback/AfriNexusRollbackRegistry.js";
import AfriNexusApprovalGate from "../approval/AfriNexusApprovalGate.js";

const AfriNexusMissionLifecycle = {

  prepare(mission = {}) {

    const snapshot = AfriNexusRollbackRegistry.create({
      missionId: mission.id || "UNKNOWN",
      target: mission.targets?.[0]?.name || "unknown",
      state: {
        phase: "before_execution",
        timestamp: Date.now()
      }
    });

    const approval = AfriNexusApprovalGate.create(
      "execution_review",
      {
        mission: mission.id,
        snapshot: snapshot.id
      }
    );

    return {
      type: "AFRINEXUS_LIFECYCLE_READY",
      snapshot,
      approval,
      execution: {
        allowed:false,
        waitingFor:"human_approval"
      }
    };
  },


  approve(lifecycle, reviewer="admin") {

    return {
      ...lifecycle,
      approval: {
        ...lifecycle.approval,
        approved:true,
        reviewer,
        approvedAt:Date.now()
      },
      execution:{
        allowed:true,
        waitingFor:null
      }
    };

  },


  complete(lifecycle,result={}) {

    return {
      type:"AFRINEXUS_MISSION_COMPLETED",
      mission:lifecycle.approval.payload.mission,
      result,
      evidence:{
        generated:true,
        timestamp:Date.now()
      }
    };

  }

};

export default AfriNexusMissionLifecycle;
