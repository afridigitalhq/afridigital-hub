export default function AfriCCTVMonitorGrid(){
  const cams=["CAM-01","CAM-02","CAM-03","CAM-04"];

  return (
    <div className="africctv-v4-grid">
      {cams.map(cam=>(
        <div key={cam} className="africctv-v4-camera">
          <span>{cam}</span>
          <strong>LIVE MONITORING</strong>
          <small>SYSTEM PROTECTED</small>
        </div>
      ))}
    </div>
  );
}
