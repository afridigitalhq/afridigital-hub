export default function LandingAfriAIRecommendations(){

  const recommendations = [
    "🛒 Explore AfriCommerce",
    "🎥 Secure your business with AfriCCTV",
    "💼 Find opportunities on AfriWork",
    "⚽ Follow AfriSports updates"
  ];

  return (
    <div className="afriai-recommendations">

      {recommendations.map((item,index)=>(
        <div
          key={index}
          className="afriai-feature-card"
        >
          {item}
        </div>
      ))}

    </div>
  );
}
