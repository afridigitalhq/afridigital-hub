import LandingAfriAIAvatar from "./LandingAfriAIAvatar";
import LandingAfriAIWaveEngine from "./LandingAfriAIWaveEngine";
import LandingAfriAIComposer from "./LandingAfriAIComposer";
import LandingAfriAIMic from "./LandingAfriAIMic";
import LandingAfriAIRecommendations from "./LandingAfriAIRecommendations";

export default function LandingAfriAICard({
  status,
  message,
  onChange,
  onSubmit,
  onMic
}) {

  return (
    <section className="landing-afriai-card">

      <div className="landing-afriai-header">
        <h2><span className="afriai-live-dot"></span> AfriAI</h2>
        <p>Your African digital intelligence assistant</p>
      </div>

      <div className="landing-afriai-actions">

        <LandingAfriAIComposer
          value={message}
          onChange={onChange}
          onSubmit={onSubmit}
        />

        <LandingAfriAIMic
          active={status==="listening"}
          onActivate={onMic}
        />

      </div>

      <div className="landing-afriai-visual">

        <LandingAfriAIAvatar status={status}/>

      </div>

      <LandingAfriAIWaveEngine status={status}/>

      <LandingAfriAIRecommendations />


    </section>
  );
}
