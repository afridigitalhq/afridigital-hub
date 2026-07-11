import ThreatLevelCard from "./ThreatLevelCard";
import RecordingStatusCard from "./RecordingStatusCard";
import StorageHealthCard from "./StorageHealthCard";
import AIEngineStatusCard from "./AIEngineStatusCard";

export default function EnterpriseSOCPanel(){
  return(
    <aside className="enterprise-soc-panel">
      <ThreatLevelCard />
      <RecordingStatusCard />
      <StorageHealthCard />
      <AIEngineStatusCard />
    </aside>
  );
}
