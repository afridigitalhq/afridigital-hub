import LandingAfriAIAvatar from "./LandingAfriAIAvatar";
import LandingAfriAIConversation from "./LandingAfriAIConversation";
import LandingAfriAIComposer from "./LandingAfriAIComposer";

export default function LandingAfriAICard({
  status,
  message,
  onChange,
  onSubmit,
  onMic
}){

  return(
    <section className="landing-afriai-card">

      <div className="landing-afriai-topbar">

        <LandingAfriAIAvatar status={status} />

        <div className="landing-afriai-identity">
          <h2><span className="afriai-live-dot"></span> AfriAI
          </h2>

          <p>Your AfriDigital intelligence assistant</p>
        </div>

      </div>

      <div className="landing-afriai-chat">

        <LandingAfriAIConversation
          messages={[]}
        />

        <LandingAfriAIComposer
          value={message}
          status={status}
          onChange={onChange}
          onSubmit={onSubmit}
          onMic={onMic}
        />

      </div>

    </section>
  );

}
