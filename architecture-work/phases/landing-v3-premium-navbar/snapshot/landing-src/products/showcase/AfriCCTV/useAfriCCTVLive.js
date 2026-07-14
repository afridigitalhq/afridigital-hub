import { useEffect, useState } from "react";
import LandingWebSocketBridge from "../../../../../core/africctv/runtime/websocket/LandingWebSocketBridge.js";

export default function useAfriCCTVLive(){
  const [runtime,setRuntime] = useState({
    status:"CONNECTING",
    cameras:[]
  });

  useEffect(()=>{
    const bridge = new LandingWebSocketBridge();

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
