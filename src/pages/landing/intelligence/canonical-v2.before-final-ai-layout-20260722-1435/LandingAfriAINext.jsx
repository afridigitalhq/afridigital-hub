import { useState } from "react";

import afriAILandingRuntime from "./runtime/AfriAILandingRuntime";
import useAfriAIState from "./hooks/useAfriAIState";

import LandingAfriAICard from "./components/LandingAfriAICard";

import "./LandingAfriAI.css";


export default function LandingAfriAINext(){

  const { status } = useAfriAIState();

  const [message,setMessage] = useState("");


  function handleChange(event){
    setMessage(event.target.value);
  }


  function handleSubmit(event){

    event.preventDefault();

    if(!message.trim()){
      return;
    }

    afriAILandingRuntime.startThinking();

    setMessage("");
  }


  function handleMic(){

    afriAILandingRuntime.startListening();

  }


  return (
    <section className="landing-afriai-section">

      <LandingAfriAICard
        status={status}
        message={message}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMic={handleMic}
      />

    </section>
  );
}
