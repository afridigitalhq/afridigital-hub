import React from "react";

export default function Sidebar({active,onSelect,collapsed,onToggle}){
const items=["Dashboard","SOC","WarRoom","AfriAI","Settings"];

return (
<aside style={{width:collapsed?70:240,padding:10,transition:"0.3s"}}>
<button onClick={onToggle}>☰</button>
{items.map(item=><button key={item} onClick={()=>onSelect(item)} style={{display:"block",width:"100%"}}>{collapsed?item[0]:item}</button>)}
</aside>
);
}
