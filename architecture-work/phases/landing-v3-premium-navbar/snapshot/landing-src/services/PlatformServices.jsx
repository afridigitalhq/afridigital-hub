import PlatformServiceCard from "./PlatformServiceCard";

export default function PlatformServices() {
  const services = [
    { id:"AfriAI", icon:"🧠" },
    { id:"AfriBank", icon:"💳" },
    { id:"AfriComm", icon:"📡" },
    { id:"AfriScan", icon:"🔍" },
    { id:"EventBus", icon:"⚡" }
  ];

  return (
    <>
      <h2 className="section-title">🔌 Platform Services</h2>

      <div className="service-grid">
        {services.map(service => (
          <PlatformServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </>
  );
}
