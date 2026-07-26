import LandingAfriAIAvatar from "./LandingAfriAIAvatar";
import LandingAfriAIConversation from "./LandingAfriAIConversation";
import LandingAfriAIComposer from "./LandingAfriAIComposer";

export default function LandingAfriAICard({
  status,
  avatarMode="idle",
  transitionState="stable",
  voiceLevel=0,
  messages=[],
  suggestions=[],
  actions=[],
  metadata={},
  message,
  onChange,
  onSubmit,
  onMic,
  onMicRelease,
  onUpload,
  attachmentsOpen,
  files=[],
  onAttach
}){

  return(
    <section className="landing-afriai-card">

      <div className="landing-afriai-topbar">

        <LandingAfriAIAvatar 
              status={status}
              avatarMode={avatarMode}
              transitionState={transitionState}
            />

        <div className="landing-afriai-identity">
          <h2><span className="afriai-live-dot"></span> AfriAI</h2>
          <p>Your AfriDigital intelligence assistant</p>
        </div>

      </div>

      <div className="landing-afriai-chat">

        <LandingAfriAIConversation
          messages={messages}
        />

        <LandingAfriAIComposer
          voiceLevel={voiceLevel}
          value={message}
          status={status}
          onChange={onChange}
          onSubmit={onSubmit}
          onMic={onMic}
                                   onRelease={onMicRelease}
        />

      </div>

    </section>
  );

}
