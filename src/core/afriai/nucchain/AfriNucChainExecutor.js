import AfriNucChainExecutionPipeline from "./execution/pipeline/AfriNucChainExecutionPipeline.js";
import AfriNucChainTrace from "./AfriNucChainTrace.js";
import AfriNucChainFilesystemRuntime from "./filesystem/AfriNucChainFilesystemRuntime.js";

const AfriNucChainExecutor={
async execute(input={}){
const {approval={},batch={}}=input;
const trace=[];
if(!approval.approved){const blocked={status:"BLOCKED",reason:"APPROVAL_REQUIRED",executed:false,timestamp:Date.now()};trace.push(AfriNucChainTrace.create("EXECUTION_BLOCKED",blocked));return{...blocked,trace};}
const pipeline=AfriNucChainExecutionPipeline.run(batch);
trace.push(AfriNucChainTrace.create("PIPELINE_EXECUTED",pipeline));
const materialization=await AfriNucChainFilesystemRuntime.execute({target:batch.target,modules:batch.modules,files:batch.files,operations:batch.operations});
const result={batchId:batch.batchId||"UNKNOWN",status:"EXECUTED",executed:true,pipeline,materialization,modules:batch.modules||[],timestamp:Date.now()};
trace.push(AfriNucChainTrace.create("EXECUTION_COMPLETE",result));
return{...result,trace};
}
};

export default AfriNucChainExecutor;
