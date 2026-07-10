import CameraFeed from "./CameraFeed";
import CCTVStatusPanel from "./CCTVStatusPanel";
import CCTVHeader from "./partials/CCTVHeader";
import CCTVOperations from "./partials/CCTVOperations";
import CCTVFooter from "./partials/CCTVFooter";

export default function DesktopCCTVWall({ runtime }) {
  const cameras = runtime?.cameras?.length
    ? runtime.cameras
    : [
        {id:1,name:"Main Gate Security",status:"ONLINE"},
        {id:2,name:"Parking & Perimeter",status:"ONLINE"},
        {id:3,name:"Facility Entrance",status:"ONLINE"},
        {id:4,name:"Operations Zone",status:"ONLINE"}
      ];

  return (
    <section className="desktop-cctv-shell">
      <CCTVHeader />

      <div style={{padding:"30px",background:"#08111b",color:"#fff"}}>
        V4 HEADER RESTORE TEST
      </div>
    </section>
  );
}
