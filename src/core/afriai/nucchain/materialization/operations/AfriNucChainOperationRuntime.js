import AfriNucChainOperationValidator from "./validation/AfriNucChainOperationValidator.js";

import FilesystemPatchEngine from "../../filesystem/FilesystemPatchEngine.js";
import RewriteImportHandler from "./handlers/RewriteImportHandler.js";

const AfriNucChainOperationRuntime = {

  async execute(input = {}) {

    const operations = input.operations || [];

    const validation =
      AfriNucChainOperationValidator.validate({
        operations
      });

    if(validation.status !== "VALIDATED"){
      return {
        status:"BLOCKED",
        validation,
        timestamp:Date.now()
      };
    }

    const results = [];

    for(const operation of operations){

      if(operation.type === "UPDATE_FILE"){

        results.push({
          type:operation.type,
          status:"READY",
          target:operation.target
        });

      }

      if(operation.type === "REWRITE_IMPORT"){

        const result = await RewriteImportHandler.execute(operation);

        results.push({
          type:operation.type,
          status:result.patched ? "EXECUTED" : "FAILED",
          result
        });

      }

      if(operation.type === "MOVE_FILE"){

        results.push({
          type:operation.type,
          status:"READY",
          target:operation.target
        });

      }

      if(operation.type === "REMOVE_FILE"){

        results.push({
          type:operation.type,
          status:"READY",
          target:operation.target
        });

      }

    }

    return {
      status:"OPERATIONS_READY",
      validation,
      operations:results,
      timestamp:Date.now()
    };

  }

};

export default AfriNucChainOperationRuntime;
