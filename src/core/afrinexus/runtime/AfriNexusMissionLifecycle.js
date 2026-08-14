import AfriNexusRollbackRegistry from "../rollback/AfriNexusRollbackRegistry.js";
import AfriNexusApprovalGate from "../approval/AfriNexusApprovalGate.js";

const AfriNexusMissionLifecycle = {

  prepare(mission) {

    const snapshot = AfriNexusRollbackRegistry.create({
      missionId: mission.batch?.id,
      target: mission.targets?.map(t=>t.name),
      state:{
        phase:"before_execution",
        timestamp:Date.now()
      }
    });

    const approval = AfriNexusApprovalGate.create(
      "execution_review",
      {
        mission: mission.batch?.id,
        snapshot:snapshot.id
      }
    );

    return {
      type:"AFRINEXUS_LIFECYCLE_READY",
      snapshot,
      approval,
      execution:{
        allowed:false,
        waitingFor:"human_approval"
      }
    };
  }

};

export default AfriNexusMissionLifecycle;
