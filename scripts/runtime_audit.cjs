const ExecutionKernel = require("../src/core/kernel/afri.execution.cjs");

const kernel = new ExecutionKernel();

console.log("🧠 KERNEL STATUS");
console.log(kernel.status());

console.log("\n🎥 RUNTIME AVAILABLE");
console.log(!!kernel.getRuntime("vision"));
