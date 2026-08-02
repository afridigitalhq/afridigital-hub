const { createRequire } = require("module");
const requireESM = createRequire(__filename);

class ExecutionKernel {
  constructor(){
    this.mode = "RUNTIME_EXECUTION_ACTIVE";
  }

  status(){
    return {
      runtimeAttached:true,
      mode:this.mode
    };
  }

  getRuntime(moduleName){
    return {
      module: moduleName,
      status:"managed-by-afri-runtime"
    };
  }

  execute(moduleName,payload={}){
    return {
      module:moduleName,
      payload,
      status:"delegated-to-runtime"
    };
  }
}

module.exports = ExecutionKernel;
