import { useEffect, useState } from "react";
import LandingWebSocketBridge from "../../../../../core/africctv/runtime/websocket/LandingWebSocketBridge.js";

const bridge = new LandingWebSocketBridge();

export default function useAfriCCTVLive(){
  const [runtime,setRuntime] = useState({
    status:"CONNECTING",
    cameras:[]
  });

  useEffect(()=>{

    bridge.subscribe((event)=>{
      setRuntime(event);
    });

    bridge.connect();

    return ()=>{
      bridge.disconnect();
    };

  },[]);

  return runtime;
}
