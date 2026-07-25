import { askAfriAI } from "../../../../../api/AfriAIClient";

class AfriAILandingRuntime{

  constructor(){
    this.state={
      status:"idle",
      listening:false,
      thinking:false,
      speaking:false,
      messages:[]
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
            content:result?.data?.reply || result?.afriai?.reply || "AfriAI is ready."
          }
        ]
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
    this.state.messages=[];
    this.setStatus("idle");
  }

}

export default new AfriAILandingRuntime();
