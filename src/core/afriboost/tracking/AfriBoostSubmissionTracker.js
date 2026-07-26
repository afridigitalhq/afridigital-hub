const AfriBoostSubmissionTracker = {

 createTrackingRecord(data){

   return {

    submissionId:data.submissionId,

    status:"WAITING_OWNER_APPROVAL",

    approvalDeadline:
    Date.now() + (24 * 60 * 60 * 1000),

    countdownEnabled:true,

    disputeReference:data.submissionId,

    timeline:[
      {
        event:"SUBMISSION_RECEIVED",
        timestamp:Date.now()
      }
    ]

   };

 },

 getRemainingTime(deadline){

   const remaining = deadline - Date.now();

   if(remaining <= 0){
     return "AUTO_APPROVAL_READY";
   }

   return remaining;

 }

};

export default AfriBoostSubmissionTracker;
