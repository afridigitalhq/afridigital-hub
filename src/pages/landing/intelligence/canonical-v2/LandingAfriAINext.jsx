import { useState } from "react";

import afriAILandingRuntime from "./runtime/AfriAILandingRuntime";
import useAfriAIState from "./hooks/useAfriAIState";

import LandingAfriAICard from "./components/LandingAfriAICard";

import "./LandingAfriAI.css";

export default function LandingAfriAINext(){

  const state = useAfriAIState();
  const { status, messages, suggestions, actions, metadata } = state;

  const [message,setMessage]=useState("");

  function handleChange(event){
    setMessage(event.target.value);
  }

  async function handleSubmit(event){
    event.preventDefault();

    const text=message.trim();
    if(!text) return;

    setMessage("");

    await afriAILandingRuntime.sendMessage(text);
  }

  function handleMic(){
    afriAILandingRuntime.startListening();
  }

  return(
    <section className="landing-afriai-section">
      <LandingAfriAICard
        status={status}
        messages={messages}
        suggestions={suggestions}
        actions={actions}
        metadata={metadata}
        message={message}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMic={handleMic}
      />
    </section>
  );
}
