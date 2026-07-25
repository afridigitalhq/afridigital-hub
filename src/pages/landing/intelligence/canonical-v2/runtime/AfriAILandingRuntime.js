import { askAfriAI } from "../../../../../api/AfriAIClient";

class AfriAILandingRuntime{

  constructor(){
    this.state={
      status:"idle",
      listening:false,
      thinking:false,
      speaking:false,
      messages:[],
      suggestions:[],
      actions:[],
      metadata:{}
    };
    this.listeners=new Set();
  }

  subscribe(listener){
    this.listeners.add(listener);
    return()=>this.listeners.delete(listener);
  }

  emit(){
    this.listeners.forEach(listener=>listener({...this.state}));
  }

  setStatus(status){
    this.state={
      ...this.state,
      status,
      listening:status==="listening",
      thinking:status==="thinking",
      speaking:status==="speaking"
    };
    this.emit();
  }

  async sendMessage(message){
    if(!message.trim()) return;

    this.state={
      ...this.state,
      messages:[
        ...this.state.messages,
        {
          role:"user",
          content:message
        }
      ]
    };

    this.emit();

    this.setStatus("thinking");

    try{
      const result=await askAfriAI(message);

      this.state={
        ...this.state,
        messages:[
          ...this.state.messages,
          {
            role:"assistant",
            content:result?.reply || "AfriAI is ready."
          }
        ]
      };

      this.state={
        ...this.state,
        suggestions:result?.suggestions || [],
        actions:result?.actions || [],
        metadata:result?.metadata || {}
      };

      this.setStatus("speaking");

      setTimeout(()=>this.setStatus("idle"),700);

    }catch(err){

      console.error("AfriAI ERROR:", err);

      this.state={
        ...this.state,
        messages:[
          ...this.state.messages,
          {
            role:"assistant",
            content:`Unable to reach AfriAI: ${err.message}`
          }
        ]
      };

      this.setStatus("idle");
    }

    this.emit();
  }

  startListening(){
    this.setStatus("listening");
  }

  reset(){
    this.state={
      ...this.state,
      messages:[],
      suggestions:[],
      actions:[],
      metadata:{}
    };

    this.setStatus("idle");
  }

}

export default new AfriAILandingRuntime();
