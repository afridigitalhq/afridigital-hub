import "../styles/composer.css";
import LandingAfriAIMic from "./LandingAfriAIMic";
import LandingAfriAIWaveEngine from "./LandingAfriAIWaveEngine";

export default function LandingAfriAIComposer({
  value = "",
  onChange,
  onSubmit,
  onMic,
  onUpload,
  status
}) {

  return (
    <>
      <div className="landing-afriai-attachments"></div>

      <form
        className="landing-afriai-composer"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Ask AfriAI anything..."
        />

        <button
          type="submit"
          className="landing-afriai-send"
          aria-label="Send"
        >
          ➜
        </button>
      </form>

      <div className="landing-afriai-controlbar">

        <button
          type="button"
          className="landing-afriai-upload"
          onClick={onUpload}
          aria-label="Upload file"
        >
          ＋
        </button>

        <LandingAfriAIWaveEngine
          status={status}
        />

        <LandingAfriAIMic
          onActivate={onMic}
        />

      </div>
    </>
  );
}
