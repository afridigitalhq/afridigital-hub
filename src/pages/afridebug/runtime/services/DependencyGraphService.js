export function analyzeDependencies(project){

return {
 projectId: project.id,
 type:"dependency-analysis",
 dependencies:[],
 status:"completed",
 analyzedAt:new Date().toISOString()
};

}
