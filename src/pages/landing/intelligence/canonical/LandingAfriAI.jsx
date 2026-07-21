import "./LandingAfriAI.css";
import LandingAfriAIHeader from "./components/LandingAfriAIHeader";
import LandingAfriAIWelcome from "./components/LandingAfriAIWelcome";
import LandingAfriAIRecommendations from "./components/LandingAfriAIRecommendations";
import LandingAfriAIInput from "./components/LandingAfriAIInput";
import LandingAfriAIMic from "./components/LandingAfriAIMic";
import LandingAfriAIWaveform from "./components/LandingAfriAIWaveform";

export default function LandingAfriAI(){

  return (
    <section className="landing-afriai-panel">

      <LandingAfriAIHeader />

      <LandingAfriAIWelcome />

      <LandingAfriAIWaveform />

      <LandingAfriAIRecommendations />

      <div className="landing-afriai-composer">
        <LandingAfriAIInput />
        <LandingAfriAIMic />
      </div>

    </section>
  );
}
