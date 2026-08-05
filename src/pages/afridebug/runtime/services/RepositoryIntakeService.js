import { registerProject } from "../ProjectRegistry";
import { createInvestigation } from "../InvestigationStore";
import { emitDebugEvent } from "../DebugEventBus";

export function intakeRepository(project){

  const registeredProject = registerProject(project);

  const investigation = createInvestigation({
    projectId: registeredProject.id,
    repository: registeredProject.name
  });

  emitDebugEvent(
    "PROJECT_IMPORTED",
    registeredProject
  );

  emitDebugEvent(
    "INVESTIGATION_CREATED",
    investigation
  );

  return {
    project: registeredProject,
    investigation
  };
}
