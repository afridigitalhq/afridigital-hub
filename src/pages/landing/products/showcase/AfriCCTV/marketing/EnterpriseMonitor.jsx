import CameraCard from "./CameraCard";

export default function EnterpriseMonitor(){
  const cameras=[
    {id:"CAM-01",title:"Main Gate"},
    {id:"CAM-02",title:"Parking"},
    {id:"CAM-03",title:"Perimeter"},
    {id:"CAM-04",title:"Courtyard"}
  ];

  return(
    <section className="enterprise-monitor">
      <div className="enterprise-monitor-grid">
        {cameras.map(cam=>(
          <CameraCard
            key={cam.id}
            id={cam.id}
            title={cam.title}
            status="LIVE"
            recording
            brand="AfriCCTV"
            showOverlay
          />
        ))}
      </div>
    </section>
  );
}
