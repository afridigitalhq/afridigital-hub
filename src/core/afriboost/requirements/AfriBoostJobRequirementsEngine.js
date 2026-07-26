const AfriBoostJobRequirementsEngine = {

 create(requirements){

  return {

   requirementId:
   "REQ-" +
   Math.random()
   .toString(36)
   .substring(2,10)
   .toUpperCase(),

   campaignId:requirements.campaignId,

   actionType:
   requirements.actionType || null,

   platforms:
   requirements.platforms || [],

   instructions:
   requirements.instructions || "",

   proofRequired:
   requirements.proofRequired || [],

   workerRules:
   requirements.workerRules || {},

   deadline:
   requirements.deadline || null,

   reward:
   requirements.reward || 0,

   currency:"AFRICOiN",

   createdAt:Date.now()

  };

 },

 validateSubmission(submission,requirements){

  return {

   submissionId:submission.submissionId,

   requirementId:requirements.requirementId,

   checks:[

    "PROOF_PRESENT",
    "ACTION_MATCHED",
    "TIME_VALID"

   ],

   status:"PENDING_REVIEW"

  };

 }

};

export default AfriBoostJobRequirementsEngine;
