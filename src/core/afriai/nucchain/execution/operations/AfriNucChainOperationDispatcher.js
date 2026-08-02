import AfriNucChainRewriteImportOperation from "./AfriNucChainRewriteImportOperation.js";
import AfriNucChainRemoveFileOperation from "./AfriNucChainRemoveFileOperation.js";

const AfriNucChainOperationDispatcher={
dispatch(operation={}){
switch(operation.type){
case "REWRITE_IMPORT":
return AfriNucChainRewriteImportOperation.execute(operation);
case "REMOVE_FILE":
return AfriNucChainRemoveFileOperation.execute(operation);
default:
return{type:operation.type||"UNKNOWN",status:"UNKNOWN_OPERATION",timestamp:Date.now()};
}
}
};

export default AfriNucChainOperationDispatcher;
