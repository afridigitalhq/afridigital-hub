export default function ProductFactory(config){

  return Object.freeze({

    id: config.id,
    name: config.name,

    landing: config.landing || null,

    user: config.user || null,

    admin: config.admin || null,

    adapter: config.adapter || null,

    status: config.status || "SCAFFOLD"

  });

}
