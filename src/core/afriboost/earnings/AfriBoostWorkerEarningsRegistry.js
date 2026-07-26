const AfriBoostWorkerEarningsRegistry = {

 createRecord(data){

   return {

    earningId:
    "ERN-" +
    Math.random()
    .toString(36)
    .substring(2,10)
    .toUpperCase(),

    workerId:data.workerId,

    submissionId:data.submissionId,

    campaignId:data.campaignId,

    amount:data.amount,

    currency:"AFRICOiN",

    status:data.status || "PENDING",

    createdAt:Date.now()

   };

 },


 summarize(records){

   return {

    totalJobs:records.length,

    released:
    records.filter(
      item=>item.status==="RELEASED"
    ).length,

    pending:
    records.filter(
      item=>item.status==="PENDING"
    ).length

   };

 }

};

export default AfriBoostWorkerEarningsRegistry;
