export function inspectRuntime(project){

return {
 projectId:project.id,
 framework:"unknown",
 environment:"unknown",
 runtimeStatus:"inspection-complete",
 inspectedAt:new Date().toISOString()
};

}
