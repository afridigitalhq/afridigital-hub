import LandingAfriAIAvatar from "./LandingAfriAIAvatar";
import LandingAfriAIHalo from "./LandingAfriAIHalo";
import LandingAfriAIStatus from "./LandingAfriAIStatus";
import LandingAfriAIWaveEngine from "./LandingAfriAIWaveEngine";
import LandingAfriAIComposer from "./LandingAfriAIComposer";
import LandingAfriAIMic from "./LandingAfriAIMic";
import LandingAfriAIRecommendations from "./LandingAfriAIRecommendations";
import LandingAfriAIAds from "./LandingAfriAIAds";

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

      <div className="landing-afriai-visual">

        <LandingAfriAIHalo status={status}/>

        <LandingAfriAIAvatar status={status}/>

      </div>

      <LandingAfriAIStatus status={status}/>

      <LandingAfriAIWaveEngine status={status}/>

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

      <LandingAfriAIRecommendations />

      <LandingAfriAIAds />


    </section>
  );
}
