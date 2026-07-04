import { useEffect,useState } from "react";
import { AFRI_WS } from "../../../core/ws/AfriMonitorSocket";
import CameraFeedStore from "../modules/afrimonitor/store/CameraFeedStore";

export default function useAfriMonitorStream(){
const [status,setStatus]=useState("connecting");
useEffect(()=>{
const socket=new WebSocket(AFRI_WS);
socket.onopen=()=>setStatus("live");
socket.onmessage=(event)=>{try{const data=JSON.parse(event.data);if(data.type==="camera-frame"){CameraFeedStore.updateFeed({id:data.cameraId,zone:data.zone,...data.frame});}}catch{}};
socket.onclose=()=>setStatus("disconnected");
socket.onerror=()=>setStatus("error");
return()=>socket.close();
},[]);
return{status};
}
