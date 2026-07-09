export default class LandingEventBus {
  constructor(){
    this.listeners=new Map();
  }

  on(event,callback){
    if(!this.listeners.has(event)) this.listeners.set(event,new Set());
    this.listeners.get(event).add(callback);
  }

  emit(event,payload){
    (this.listeners.get(event)||[]).forEach(cb=>cb(payload));
  }

  off(event,callback){
    this.listeners.get(event)?.delete(callback);
  }
}
