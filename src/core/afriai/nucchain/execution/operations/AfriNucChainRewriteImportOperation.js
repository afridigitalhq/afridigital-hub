const AfriNucChainRewriteImportOperation={
execute(operation={}){
return{
type:"REWRITE_IMPORT",
target:operation.target||null,
status:"READY_FOR_IMPLEMENTATION",
timestamp:Date.now()
};
}
};
export default AfriNucChainRewriteImportOperation;
