import AfriNucChainDependencyResolver from "../dependency/AfriNucChainDependencyResolver.js";
import AfriNucChainOperationDispatcher from "../operations/AfriNucChainOperationDispatcher.js";

const AfriNucChainExecutionPipeline={
run(batch={}){
const dependency=AfriNucChainDependencyResolver.resolve(batch);
const operations=(batch.operations||[]).map(operation=>AfriNucChainOperationDispatcher.dispatch(operation));
return{
batchId:batch.batchId||batch.id||"UNKNOWN",
dependency,
operations,
status:"PIPELINE_EXECUTED",
timestamp:Date.now()
};
}
};

export default AfriNucChainExecutionPipeline;
