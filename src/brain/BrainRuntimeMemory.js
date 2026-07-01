
class BrainRuntimeMemory{

 constructor(){
  this.memory=[];
 }

 remember(entry={}){
  const record={
   ...entry,
   storedAt:Date.now()
  };

  this.memory.push(record);

  return record;
 }

 latest(){
  return this.memory[this.memory.length-1]||null;
 }

 all(){
  return [...this.memory];
 }

 clear(){
  this.memory=[];
  return{
   status:"cleared",
   timestamp:Date.now()
  };
 }

 status(){
  return{
   status:"ready",
   entries:this.memory.length,
   timestamp:Date.now()
  };
 }

}

export default BrainRuntimeMemory;
