import LandingAfriAIAvatar from "./LandingAfriAIAvatar";
import LandingAfriAIConversation from "./LandingAfriAIConversation";
import LandingAfriAIWaveEngine from "./LandingAfriAIWaveEngine";
import LandingAfriAIComposer from "./LandingAfriAIComposer";
import LandingAfriAIMic from "./LandingAfriAIMic";

export default function LandingAfriAICard({
  status,
  message,
  onChange,
  onSubmit
}) {

  return (
    <section className="landing-afriai-card">

      <div className="landing-afriai-topbar">

        <LandingAfriAIAvatar
          status={status}
          small
        />

        <div className="landing-afriai-identity">

          <h2>
            <span className="afriai-live-dot"></span>
            AfriAI
          </h2>

          <p>
            Your African digital intelligence assistant
          </p>

        </div>

      </div>


      <LandingAfriAIConversation
        messages={[]}
      />


      <div className="landing-afriai-actions">

        <LandingAfriAIComposer
          value={message}
          onChange={onChange}
          onSubmit={onSubmit}
        />

        <LandingAfriAIMic />

      </div>


      <div className="landing-afriai-presence">

        <LandingAfriAIAvatar
          status={status}
        />

        <LandingAfriAIWaveEngine
          status={status}
        />

      </div>


    </section>
  );
}
