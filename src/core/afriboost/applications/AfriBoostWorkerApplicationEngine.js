const AfriBoostWorkerApplicationEngine = {

apply(worker,job){

return {
applicationId:
"APP-" +
Math.random()
.toString(36)
.substring(2,10)
.toUpperCase(),

workerId:worker.workerId,
jobId:job.jobId,

requirementsReviewed:true,

status:"PENDING",

createdAt:Date.now()

};

},

accept(application){

return {
...application,
status:"ACCEPTED",
acceptedAt:Date.now()
};

},

reject(application){

return {
...application,
status:"REJECTED",
rejectedAt:Date.now()
};

}

};

export default AfriBoostWorkerApplicationEngine;
