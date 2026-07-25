import "../styles/halo.css";

export default function LandingAfriAIHalo({ status = "idle" }) {
  return (
    <div className={`landing-afriai-core ${status}`}>
      <span className="landing-afriai-core-pulse"></span>
      <span className="landing-afriai-core-glow"></span>
    </div>
  );
}
