
class BrainDecisionSupport{

 constructor(){
  this.recommendations=[];
 }

 recommend(title,details={},priority="normal"){

  const recommendation={
   id:Date.now().toString(),
   title,
   details,
   priority,
   status:"pending",
   createdAt:Date.now()
  };

  this.recommendations.push(recommendation);

  return recommendation;
 }

 latest(){
  return this.recommendations[this.recommendations.length-1]||null;
 }

 list(){
  return [...this.recommendations];
 }

 approve(id){
  const item=this.recommendations.find(r=>r.id===id);
  if(item) item.status="approved";
  return item||null;
 }

 reject(id){
  const item=this.recommendations.find(r=>r.id===id);
  if(item) item.status="rejected";
  return item||null;
 }

 status(){
  return{
   status:"online",
   recommendations:this.recommendations.length,
   timestamp:Date.now()
  };
 }

}

export default BrainDecisionSupport;
