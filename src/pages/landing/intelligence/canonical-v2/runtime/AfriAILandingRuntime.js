import { askAfriAI } from "../../../../../api/AfriAIClient";
import AfriAIPresenceMap from "./AfriAIPresenceMap";

class AfriAILandingRuntime{

  constructor(){

    this.state={
      status:"idle",
      avatarMode:"idle",
      presenceMode:"idle",
      transitionState:"stable",
      listening:false,
      thinking:false,
      speaking:false,
      voiceLevel:0,
      messages:[],
      suggestions:[],
      actions:[],
      metadata:{}
    };

    this.listeners=new Set();

  }


  subscribe(listener){

    this.listeners.add(listener);

    return ()=>this.listeners.delete(listener);

  }


  emit(){

    this.listeners.forEach(listener=>{
      listener({...this.state});
    });

  }


  setTransition(state){

    this.state={
      ...this.state,
      transitionState:state
    };

    this.emit();

  }


  setStatus(status){

    this.state={
      ...this.state,

      status,

      avatarMode:AfriAIPresenceMap[status]?.avatar || "idle",

      presenceMode:status,

      listening:status==="listening",

      thinking:status==="thinking",

      speaking:status==="speaking"

    };

    this.emit();

  }


  setVoiceLevel(level){

    this.state={
      ...this.state,
      voiceLevel:level
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
        ],

        suggestions:result?.suggestions || [],

        actions:result?.actions || [],

        metadata:result?.metadata || {}

      };


      this.setStatus("speaking");


    }catch(err){

      console.error("AfriAI ERROR:",err);


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

    this.setTransition("awakening");

    setTimeout(()=>{

      this.setStatus("listening");
      this.setTransition("stable");

    },600);

  }


  stopListening(){

    this.setStatus("idle");

  }


  reset(){

    this.state={
      ...this.state,
      status:"idle",
      avatarMode:"idle",
      presenceMode:"idle",
      transitionState:"stable",
      listening:false,
      thinking:false,
      speaking:false,
      voiceLevel:0,
      messages:[],
      suggestions:[],
      actions:[],
      metadata:{}
    };

    this.emit();

  }

}


export default new AfriAILandingRuntime();
