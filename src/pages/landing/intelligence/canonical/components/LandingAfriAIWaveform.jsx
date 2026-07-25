import "../../canonical-v2/styles/waveform.css";

export default function LandingAfriAIWaveform({
  status="idle",
  level=0
}){

  const bars=[
    0.4,
    0.7,
    1,
    0.6,
    0.9,
    0.5,
    0.8
  ];

  return (
    <div
      className={`landing-afriai-waveform ${status}`}
      style={{
        "--voice-level":level
      }}
    >
      {bars.map((height,index)=>(
        <span
          key={index}
          style={{
            "--bar-height":height
          }}
        />
      ))}
    </div>
  );
}
