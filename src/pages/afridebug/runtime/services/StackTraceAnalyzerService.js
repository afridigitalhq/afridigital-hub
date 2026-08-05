export function analyzeStackTrace(trace){

return {
 trace,
 rootCause:null,
 confidence:0,
 status:"pending-ai-analysis",
 analyzedAt:new Date().toISOString()
};

}
