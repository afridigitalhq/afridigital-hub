const investigations=[];

export function createInvestigation(data){

const investigation={
 id:Date.now().toString(),
 status:"initialized",
 stage:"repository-intake",
 findings:[],
 approvals:[],
 ...data
};

investigations.push(investigation);

return investigation;

}


export function getInvestigations(){
 return investigations;
}
