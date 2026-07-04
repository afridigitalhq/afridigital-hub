import { useEffect,useState } from "react";
import useAfriMonitorStream from "../../../../streams/useAfriMonitorStream";
import CameraFeedStore from "../../store/CameraFeedStore";
import AfriMonitorDashboard from "../../dashboard/AfriMonitorDashboard";

export default function AfriMonitorShell(){
useAfriMonitorStream();
const [feeds,setFeeds]=useState(CameraFeedStore.getFeeds());
useEffect(()=>CameraFeedStore.subscribe(setFeeds),[]);
return <div className="afrimonitor-shell"><AfriMonitorDashboard feeds={feeds}/></div>;
}
