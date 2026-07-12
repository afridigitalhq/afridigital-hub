export default function ServiceLayerSection({services}){

  return (
    <section className="service-layer-section">

      <h2>
        Infrastructure Trust Layer
      </h2>

      {
        services.map(service => (

          <article key={service.name}>

            <h3>
              {service.name}
            </h3>

            <small>
              {service.role}
            </small>

          </article>

        ))
      }

    </section>
  );

}
