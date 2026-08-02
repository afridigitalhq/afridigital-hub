const AfriNucChainRemoveFileOperation={
execute(operation={}){
return{
type:"REMOVE_FILE",
target:operation.target||null,
status:"READY_FOR_IMPLEMENTATION",
timestamp:Date.now()
};
}
};
export default AfriNucChainRemoveFileOperation;
