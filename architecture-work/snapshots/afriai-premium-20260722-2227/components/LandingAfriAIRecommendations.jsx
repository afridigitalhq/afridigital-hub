export default function LandingAfriAIRecommendations(){

  const recommendations = [
    "🛒 Explore AfriCommerce",
    "🤖 Discover AfriDigital services"
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
