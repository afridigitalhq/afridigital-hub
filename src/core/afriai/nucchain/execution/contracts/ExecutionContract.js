export const ExecutionContract = {
  batch:{ id:null, mode:"MIGRATION", status:"READY" },
  dependency:{ dependsOn:[], parallel:[] },
  operations:[],
  artifacts:{ required:true, verify:true },
  audit:{ required:true }
};
export default ExecutionContract;
