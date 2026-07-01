export class BrainDecisionRouter {

  constructor(kernel){
    this.kernel=kernel;
    this.routes=new Map();
  }

  register(eventType,handler){
    this.routes.set(eventType,handler);
  }

  route(event){
    const handler=this.routes.get(event.type);

    if(handler){
      return handler(event);
    }

    return {
      status:"unhandled",
      event:event.type
    };
  }

  status(){
    return {
      registered:this.routes.size,
      healthy:true
    };
  }

}

export default BrainDecisionRouter;
