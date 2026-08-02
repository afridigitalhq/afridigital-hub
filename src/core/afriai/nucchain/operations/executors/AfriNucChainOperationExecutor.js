import AfriNucChainExecutionTrace from "../../execution/AfriNucChainExecutionTrace.js";

const AfriNucChainOperationExecutor={
 async execute(operation={}){
  const {executionId,trace}=AfriNucChainExecutionTrace.create({
   batchId:operation.id,
   executor:"AfriNucChainOperationExecutor",
   modules:operation.operations||[]
  });

  const results=(operation.operations||[]).map(step=>({
   step,
   status:"READY"
  }));

  return {
   executionId,
   trace,
   results,
   status:"OPERATIONS_READY"
  };
 }
};

export default AfriNucChainOperationExecutor;
