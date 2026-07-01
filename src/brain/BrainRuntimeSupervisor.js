
class BrainRuntimeSupervisor{

 constructor(){
  this.running=false;
  this.startedAt=null;
 }

 start(){
  this.running=true;
  this.startedAt=Date.now();

  return{
   status:"running",
   startedAt:this.startedAt
  };
 }

 stop(){
  this.running=false;

  return{
   status:"stopped",
   timestamp:Date.now()
  };
 }

 heartbeat(){
  return{
   status:this.running?"alive":"offline",
   running:this.running,
   timestamp:Date.now()
  };
 }

 status(){
  return{
   running:this.running,
   startedAt:this.startedAt
  };
 }

}

export default BrainRuntimeSupervisor;
