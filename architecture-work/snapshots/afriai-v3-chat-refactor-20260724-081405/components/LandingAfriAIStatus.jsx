import "../styles/status.css";

export default function LandingAfriAIStatus({ status = "idle" }) {

  const labels = {
    idle:"Ready",
    listening:"Listening",
    thinking:"Thinking",
    speaking:"Speaking"
  };


  return (
    <div className={`landing-afriai-status ${status}`}>
      {labels[status] || labels.idle}
    </div>
  );
}
