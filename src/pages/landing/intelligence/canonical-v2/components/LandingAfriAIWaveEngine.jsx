import LandingAfriAIWaveform from "../../canonical/components/LandingAfriAIWaveform";

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
