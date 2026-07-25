import "../styles/rotating-wave.css";

export default function LandingAfriAIRotatingWave({ status="idle" }){
  return (
    <div className={`landing-afriai-rotating-wave ${status}`}>
      <span className="wave-ring outer"></span>
      <span className="wave-ring middle"></span>
      <span className="wave-ring inner"></span>
      <span className="wave-glow"></span>
    </div>
  );
}
