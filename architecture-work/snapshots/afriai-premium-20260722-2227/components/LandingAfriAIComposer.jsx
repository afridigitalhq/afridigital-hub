import "../styles/composer.css";
import LandingAfriAIMic from "./LandingAfriAIMic";

export default function LandingAfriAIComposer({
  value = "",
  onChange,
  onSubmit,
  onMic,
  onUpload
}) {

  return (
    <form
      className="landing-afriai-composer"
      onSubmit={onSubmit}
    >

      <button
        type="button"
        className="landing-afriai-upload"
        onClick={onUpload}
        aria-label="Upload"
      >
        +
      </button>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Ask AfriAI anything..."
      />

      <LandingAfriAIMic
        onActivate={onMic}
      />

      <button
        type="submit"
        className="landing-afriai-send"
      >
        ➜
      </button>

    </form>
  );
}
