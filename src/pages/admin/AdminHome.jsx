import React,{useEffect} from "react";
import eventBus from "../../core/afrieventbus/AfriEventBus";
import ControlRoomShell from "../../control-room/core/ControlRoomShell";

export default function AdminHome(){

useEffect(()=>{
const handler=data=>console.log("SYSTEM_EVENT",data);
eventBus.on("SYSTEM_EVENT",handler);
return()=>eventBus.off("SYSTEM_EVENT",handler);
},[]);

return <ControlRoomShell/>;

}
