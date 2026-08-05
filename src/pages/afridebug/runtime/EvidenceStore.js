const evidence=[];

export function addEvidence(item){
  evidence.push({
    id:Date.now().toString(),
    createdAt:new Date().toISOString(),
    ...item
  });

  return evidence[evidence.length-1];
}

export function getEvidence(){
  return evidence;
}
