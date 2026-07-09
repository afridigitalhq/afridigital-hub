import { useEffect,useState } from "react";
import { formatCCTVTime } from "../TimestampRuntime.js";

export default function useAfriCCTVTimestamp(){

  const [timestamp,setTimestamp]=useState(
    formatCCTVTime()
  );

  useEffect(()=>{

    const timer=setInterval(()=>{

      setTimestamp(
        formatCCTVTime()
      );

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  return timestamp;

}
