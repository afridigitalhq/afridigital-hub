import {LandingStats} from "../data/LandingDashboard";
export default function CCTVOperations(){
return(<>{LandingStats.map(card=><section key={card.title} className="cctv-status-card"><div>{card.icon}</div><h4>{card.title}</h4><strong>{card.value}</strong><small>{card.sub}</small></section>)}</>);
}
