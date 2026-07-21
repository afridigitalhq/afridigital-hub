const services = [
  { icon:"🛒", name:"AfriCommerce" },
  { icon:"", name:"AfriCCTV" },
  { icon:"⚽", name:"AfriSports" },
  { icon:"🌍", name:"AfriMetaWorld" },
  { icon:"🚀", name:"AfriBoost" },
  { icon:"💼", name:"AfriWork" },
  { icon:"📍", name:"AfriTracker" },
  { icon:"🎟️", name:"AfriTicking" },
  { icon:"🚚", name:"AfriLogistics" },
  { icon:"🎓", name:"AfriEducation" },
  { icon:"❤️", name:"AfriLove" }
];

export default function EcosystemServiceGrid(){

  return (
    <section className="ecosystem-service-grid">

      {services.map(service => (

        <article 
          key={service.name}
          className={`ecosystem-service-card ${service.image ? "ecosystem-service-card-featured" : ""}`}
        >

          <div className="ecosystem-service-icon">
            {service.image ? (
              <img src={service.image} alt={service.name} />
            ) : (
              service.icon
            )}
          </div>

          <h3>
            {service.name}
          </h3>

        </article>

      ))}

    </section>
  );
}
