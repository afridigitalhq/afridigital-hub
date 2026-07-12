export default function CommerceCategories(){

  const categories = [
    "PHYSICAL",
    "DIGITAL",
    "SERVICE",
    "RENTAL",
    "SUBSCRIPTION",
    "EVENT TICKET"
  ];

  return (
    <div className="commerce-categories">

      <h3>Everything Commerce</h3>

      <div>
        {categories.map(category => (
          <span key={category}>
            {category}
          </span>
        ))}
      </div>

    </div>
  );
}
