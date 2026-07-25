import "../styles/composer.css";

export default function LandingAfriAIAttachments({
  files=[],
  onAttach
}){

  return(
    <div className="landing-afriai-media-drawer">

      <label className="landing-afriai-media-option">
        📷 Camera
        <input
          hidden
          type="file"
          accept="image/*"
          capture="environment"
          onChange={onAttach}
        />
      </label>

      <label className="landing-afriai-media-option">
        🖼 Photos
        <input
          hidden
          type="file"
          accept="image/*"
          multiple
          onChange={onAttach}
        />
      </label>

      <label className="landing-afriai-media-option">
        📁 Documents
        <input
          hidden
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          multiple
          onChange={onAttach}
        />
      </label>

      <label className="landing-afriai-media-option">
        🎤 Audio
        <input
          hidden
          type="file"
          accept="audio/*"
          onChange={onAttach}
        />
      </label>

      <label className="landing-afriai-media-option">
        🎥 Video
        <input
          hidden
          type="file"
          accept="video/*"
          onChange={onAttach}
        />
      </label>


      {files.length > 0 && (
        <div className="landing-afriai-selected-files">
          {files.map((file,index)=>(
            <div key={index}>
              {file.name}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
