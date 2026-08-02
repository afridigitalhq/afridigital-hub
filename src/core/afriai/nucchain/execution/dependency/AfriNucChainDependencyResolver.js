const AfriNucChainDependencyResolver={
resolve(batch={}){
const modules=batch.modules||[];
const dependency=batch.dependency||{};
return{
modules,
dependsOn:dependency.dependsOn||[],
parallel:dependency.parallel||[],
status:"DEPENDENCIES_RESOLVED",
timestamp:Date.now()
};
}
};
export default AfriNucChainDependencyResolver;
