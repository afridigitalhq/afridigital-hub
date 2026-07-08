export default function PlatformServiceCard({service}) {
  return (
    <div className="glass-card service-card">
      {service.icon} {service.id}
    </div>
  );
}
