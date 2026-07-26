import "../styles/composer.css";
import LandingAfriAIMic from "./LandingAfriAIMic";
import LandingAfriAIWaveEngine from "./LandingAfriAIWaveEngine";
import LandingAfriAIAttachments from "./LandingAfriAIAttachments";

export default function LandingAfriAIComposer({
  value="",
  onChange,
  onSubmit,
  onMic,
  onRelease,
  onUpload,
  attachmentsOpen,
  files=[],
  onAttach,
  voiceLevel=0,
  status
}){

  return(
    <div className="landing-afriai-composer-wrap">

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

      <div className="landing-afriai-toolbar">

        <button
          type="button"
          className="landing-afriai-upload"
          onClick={onUpload}
          aria-label="Media"
        >
          ＋
        </button>

        <LandingAfriAIWaveEngine
          status={status}
          level={voiceLevel}
        />

        <LandingAfriAIMic
          active={status==="listening"}
          onActivate={onMic}
          onRelease={onRelease}
        />

      </div>

    </div>
  );

}
