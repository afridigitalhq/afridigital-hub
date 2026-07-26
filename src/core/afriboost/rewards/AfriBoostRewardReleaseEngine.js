const AfriBoostRewardReleaseEngine = {

 releaseReward(data){

   if(data.status !== "APPROVED" && data.status !== "AUTO_APPROVED"){
     return {
       status:"BLOCKED",
       reason:"SUBMISSION_NOT_APPROVED"
     };
   }

   if(data.paymentStatus === "RELEASED"){
     return {
       status:"BLOCKED",
       reason:"REWARD_ALREADY_RELEASED"
     };
   }

   return {

     rewardId:
     "RWD-" +
     Math.random()
     .toString(36)
     .substring(2,10)
     .toUpperCase(),

     submissionId:data.submissionId,

     workerId:data.workerId,

     amount:data.rewardAmount,

     currency:"AFRICOiN",

     status:"RELEASED",

     timestamp:Date.now()

   };

 }

};

export default AfriBoostRewardReleaseEngine;
