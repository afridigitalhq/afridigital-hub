export default function CommerceJourney(){

  const steps = [
    "DISCOVER",
    "PURCHASE",
    "SECURE PAYMENT",
    "DELIVERY",
    "REVIEW"
  ];

  return (
    <div className="commerce-journey">

      {steps.map((step, index)=>(
        <div key={step}>
          <span>{index + 1}</span>
          <strong>{step}</strong>
        </div>
      ))}

    </div>
  );
}
