const ENTITIES = new Map();

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeKey(value) {
  return clean(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function register(entity) {
  if (!entity?.id && !entity?.name) return null;

  const record = Object.freeze({
    ...entity,
    type: entity.type || "team",
    name: clean(entity.name) || "Unknown",
    shortName: clean(entity.shortName) || clean(entity.name) || "Unknown",
    aliases: Object.freeze(
      Array.isArray(entity.aliases)
        ? entity.aliases.filter(Boolean).map(normalizeKey)
        : []
    ),
  });

  const keys = [
    record.id != null ? `${record.type}:id:${record.id}` : null,
    `${record.type}:name:${normalizeKey(record.name)}`,
    record.code ? `${record.type}:code:${normalizeKey(record.code)}` : null,
    record.countryCode ? `${record.type}:code:${normalizeKey(record.countryCode)}` : null,
    ...record.aliases.map((alias) => `${record.type}:alias:${alias}`),
  ].filter(Boolean);

  keys.forEach((key) => ENTITIES.set(key, record));

  return record;
}

function lookup(type, value) {
  if (value == null) return null;

  const normalized = normalizeKey(value);

  return (
    ENTITIES.get(`${type}:id:${value}`) ||
    ENTITIES.get(`${type}:name:${normalized}`) ||
    ENTITIES.get(`${type}:code:${normalized}`) ||
    ENTITIES.get(`${type}:alias:${normalized}`) ||
    null
  );
}

export function registerTeam(team = {}) {
  return register({
    ...team,
    type: team.type === "national_team" ? "national_team" : "team",
  });
}

export function registerNationalTeam(team = {}) {
  return register({
    ...team,
    type: "national_team",
  });
}

export function registerLeague(league = {}) {
  return register({
    ...league,
    type: "league",
  });
}

export function registerCountry(country = {}) {
  return register({
    ...country,
    type: "country",
  });
}

export function getTeam(value) {
  return lookup("team", value);
}

export function getNationalTeam(value) {
  return lookup("national_team", value);
}

export function getLeague(value) {
  return lookup("league", value);
}

export function getCountry(value) {
  return lookup("country", value);
}

export function getEntity(type, value) {
  return lookup(type, value);
}

export function registerEntities({
  teams = [],
  nationalTeams = [],
  leagues = [],
  countries = [],
} = {}) {
  teams.forEach(registerTeam);
  nationalTeams.forEach(registerNationalTeam);
  leagues.forEach(registerLeague);
  countries.forEach(registerCountry);

  return {
    teams: teams.length,
    nationalTeams: nationalTeams.length,
    leagues: leagues.length,
    countries: countries.length,
  };
}

export function clearEntityRegistry() {
  ENTITIES.clear();
}

export function getEntityRegistrySize() {
  return ENTITIES.size;
}

export default {
  registerTeam,
  registerNationalTeam,
  registerLeague,
  registerCountry,
  getTeam,
  getNationalTeam,
  getLeague,
  getCountry,
  getEntity,
  registerEntities,
  clearEntityRegistry,
  getEntityRegistrySize,
};
