import { useState } from "react";

import afriAILandingRuntime from "./runtime/AfriAILandingRuntime";


import afriAIVoiceController from "./voice/AfriAIVoiceController";
import afriAIAudioAnalyzer from "./voice/AfriAIAudioAnalyzer";
import "./voice/AfriAIVoiceRuntimeBridge";
import "./voice/AfriAITTSRuntimeConnector";
import useAfriAIState from "./hooks/useAfriAIState";

import LandingAfriAICard from "./components/LandingAfriAICard";

import "./LandingAfriAI.css";

export default function LandingAfriAINext(){

  const state = useAfriAIState();
  const { status, avatarMode, transitionState, voiceLevel, messages, suggestions=[], actions, metadata } = state;

  const landingSuggestions = suggestions.length ? suggestions : [
    {id:"commerce",title:"AfriCommerce"},
    {id:"design",title:"AfriDesign Studio"},
    {id:"cctv",title:"AfriCCTV"},
    {id:"boost",title:"AfriBoost"},
    {id:"work",title:"AfriWork"},
    {id:"ecosystem",title:"Explore Ecosystem"}
  ];

  const [message,setMessage]=useState("");
  const [attachmentsOpen,setAttachmentsOpen]=useState(false);
  const [files,setFiles]=useState([]);

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
    afriAIVoiceController.start();
  }

  function handleMicRelease(){
    afriAIVoiceController.stop();
    afriAILandingRuntime.stopListening();
  }

  function handleUpload(){
    setAttachmentsOpen(prev=>!prev);
  }

  function handleAttach(event){
    setFiles(Array.from(event.target.files || []));
  }

  return(
    <section className="landing-afriai-section">
      <LandingAfriAICard
        status={status}
        avatarMode={avatarMode}
        transitionState={transitionState}
        messages={messages}
        suggestions={landingSuggestions}
        actions={actions}
        metadata={metadata}
        message={message}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMic={handleMic}
        onMicRelease={handleMicRelease}
        voiceLevel={voiceLevel}
      />
    </section>
  );
}
