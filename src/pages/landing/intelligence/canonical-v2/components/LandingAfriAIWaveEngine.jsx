import LandingAfriAIWaveform from "./LandingAfriAIWaveform";

export default function LandingAfriAIWaveEngine({
  status,
  level=0
}){

  return (
    <LandingAfriAIWaveform
      status={status}
      level={level}
    />
  );

}
