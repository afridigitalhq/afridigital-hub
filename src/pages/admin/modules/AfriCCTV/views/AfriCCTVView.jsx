import AfriCCTVSocket from "../../../../../core/ws/AfriCCTVSocket.js";
import useAfriCCTVStream from "../../../../../core/africctv/hooks/useAfriCCTVStream";
import React from "react";
import LeftSidebar from "../partials/LeftSidebar";
import TopStatusBar from "../partials/TopStatusBar";
import CameraGrid from "../partials/CameraGrid";
import RightControlPanel from "../partials/RightControlPanel";
import CameraFilmstrip from "../partials/CameraFilmstrip";
import AfriAIDock from "../partials/AfriAIDock";

export default function AfriCCTVView(){
  const stream = useAfriCCTVStream(new AfriCCTVSocket());
return(
<div style={{display:"flex",minHeight:"100vh"}}>
<LeftSidebar/>
<div style={{flex:1,display:"flex",flexDirection:"column"}}>
<TopStatusBar/>
<div style={{display:"flex",flex:1}}>
<div style={{flex:1,padding:"20px"}}>
<CameraGrid cameras={stream.flatMap(item => item.cameras || [])}/>
<CameraFilmstrip cameras={stream.flatMap(item => item.wall?.cameras || [])}/>
<AfriAIDock observations={stream.flatMap(item => item.aiObservation?.observations || [])}/>
</div>
<RightControlPanel cameras={stream.flatMap(item => item.cameras || [])}/>
</div>
</div>
</div>
);
}
