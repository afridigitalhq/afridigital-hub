
class BrainRuntimeObserver{

 constructor(){
  this.events=[];
 }

 observe(event={}){
  const record={
   ...event,
   observedAt:Date.now()
  };

  this.events.push(record);

  return record;
 }

 latest(){
  return this.events[this.events.length-1]||null;
 }

 history(){
  return [...this.events];
 }

 status(){
  return{
   status:"observing",
   observed:this.events.length,
   timestamp:Date.now()
  };
 }

}

export default BrainRuntimeObserver;
