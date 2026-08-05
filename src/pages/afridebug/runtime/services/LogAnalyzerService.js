export function analyzeLogs(logs=[]){

return {
 totalLogs:logs.length,
 errors:logs.filter(
 item=>item.type==="error"
 ),
 status:"analysis-complete",
 analyzedAt:new Date().toISOString()
};

}
