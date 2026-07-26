import "../styles/servicedock.css";

export default function LandingAfriAIServiceDock({ suggestions=[] }){
  if(!suggestions.length) return null;

  return (
    <div className="landing-afriai-suggestions">
      {suggestions.map((card,index)=>(
        <button key={card.id || index}>
          {card.title || card.id}
        </button>
      ))}
    </div>
  );
}
