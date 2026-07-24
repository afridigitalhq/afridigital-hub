import "../styles/composer.css";

export default function LandingAfriAIAttachments({
  files = [],
  onAttach
}) {

  return (
    <div className="landing-afriai-attachments">

      <input
        type="file"
        multiple
        onChange={onAttach}
      />

      {files.map((file,index)=>(
        <div
          key={index}
          className="landing-afriai-attachment"
        >
          {file.name || file}
        </div>
      ))}

    </div>
  );
}
