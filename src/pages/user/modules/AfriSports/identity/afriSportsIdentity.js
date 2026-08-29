import { getEntity, registerTeam, registerNationalTeam, registerLeague, registerCountry } from "../registry/afriSportsEntityRegistry.js";
import { initializeAfriSportsEntityRegistry } from "../registry/afriSportsCanonicalRegistry.js";

initializeAfriSportsEntityRegistry();

const COUNTRY_FLAGS = Object.freeze({
  NG: "🇳🇬", NIG: "🇳🇬", NIGERIA: "🇳🇬",
  GH: "🇬🇭", GHA: "🇬🇭", GHANA: "🇬🇭",
  ZA: "🇿🇦", RSA: "🇿🇦", "SOUTH AFRICA": "🇿🇦",
  KE: "🇰🇪", KEN: "🇰🇪", KENYA: "🇰🇪",
  EG: "🇪🇬", EGY: "🇪🇬", EGYPT: "🇪🇬",
  MA: "🇲🇦", MAR: "🇲🇦", MOROCCO: "🇲🇦",
  SN: "🇸🇳", SEN: "🇸🇳", SENEGAL: "🇸🇳",
  CI: "🇨🇮", CIV: "🇨🇮", "COTE D'IVOIRE": "🇨🇮",
  CM: "🇨🇲", CMR: "🇨🇲", CAMEROON: "🇨🇲",
  DZ: "🇩🇿", ALG: "🇩🇿", ALGERIA: "🇩🇿",
  TN: "🇹🇳", TUN: "🇹🇳", TUNISIA: "🇹🇳",
  GB: "🇬🇧", GBR: "🇬🇧", ENGLAND: "🏴",
  ES: "🇪🇸", ESP: "🇪🇸", SPAIN: "🇪🇸",
  FR: "🇫🇷", FRA: "🇫🇷", FRANCE: "🇫🇷",
  DE: "🇩🇪", GER: "🇩🇪", GERMANY: "🇩🇪",
  IT: "🇮🇹", ITA: "🇮🇹", ITALY: "🇮🇹",
  PT: "🇵🇹", POR: "🇵🇹", PORTUGAL: "🇵🇹",
  NL: "🇳🇱", NED: "🇳🇱", NETHERLANDS: "🇳🇱",
  BE: "🇧🇪", BEL: "🇧🇪", BELGIUM: "🇧🇪",
  SC: "🇸🇨", SCO: "🏴", SCOTLAND: "🏴",
  IE: "🇮🇪", IRL: "🇮🇪", IRELAND: "🇮🇪",
  CH: "🇨🇭", SUI: "🇨🇭", SWITZERLAND: "🇨🇭",
  AT: "🇦🇹", AUT: "🇦🇹", AUSTRIA: "🇦🇹",
  TR: "🇹🇷", TUR: "🇹🇷", TURKEY: "🇹🇷",
  BR: "🇧🇷", BRA: "🇧🇷", BRAZIL: "🇧🇷",
  AR: "🇦🇷", ARG: "🇦🇷", ARGENTINA: "🇦🇷",
  US: "🇺🇸", USA: "🇺🇸", "UNITED STATES": "🇺🇸",
  CA: "🇨🇦", CAN: "🇨🇦", CANADA: "🇨🇦",
  MX: "🇲🇽", MEX: "🇲🇽", MEXICO: "🇲🇽"
});

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function first(...values) {
  return values.map(clean).find(Boolean) || null;
}

function resolveFlag(country, countryCode) {
  const key = clean(countryCode || country).toUpperCase();
  return COUNTRY_FLAGS[key] || null;
}

function resolveLogo(entity) {
  return first(
    entity?.image_path,
    entity?.logo,
    entity?.logo_url,
    entity?.logoUrl,
    entity?.image,
    entity?.imageUrl,
    entity?.badge,
    entity?.badge_url,
    entity?.crest,
    entity?.crest_url
  );
}

export function createAfriSportsIdentity(entity = {}, options = {}) {
  const requestedType = options.type ||
    (entity?.type === "national_team" || entity?.national_team ? "national_team" : "team");

  const entityId = entity?.id ?? entity?.team_id ?? entity?.country_id ?? null;
  const entityName = first(
    entity?.name,
    entity?.short_name,
    entity?.shortName,
    entity?.title
  );

  const canonical =
    getEntity(requestedType, entityId) ||
    getEntity(requestedType, entityName) ||
    null;

  entity = canonical ? { ...entity, ...canonical } : entity;
  const country = first(
    entity?.country?.name,
    entity?.country_name,
    entity?.countryName,
    options.country
  );

  const countryCode = first(
    entity?.country?.code,
    entity?.country?.short_code,
    entity?.country_code,
    entity?.countryCode,
    options.countryCode
  );

  const name = first(
    entity?.name,
    entity?.short_name,
    entity?.shortName,
    entity?.title,
    "Unknown"
  );

  const type = options.type ||
    (entity?.type === "national_team" || entity?.national_team
      ? "national_team"
      : entity?.league_id || entity?.league
        ? "team"
        : "team");

  return Object.freeze({
    type,
    name,
    shortName: first(entity?.short_name, entity?.shortName, name),
    logo: resolveLogo(entity),
    flag: resolveFlag(country, countryCode),
    country: country || null,
    countryCode: countryCode || null,
    id: entity?.id ?? entity?.team_id ?? entity?.country_id ?? null,
    raw: entity
  });
}

export function createCompetitionIdentity(competition = {}) {
  const country = first(
    competition?.country?.name,
    competition?.country_name,
    competition?.countryName
  );

  const countryCode = first(
    competition?.country?.code,
    competition?.country?.short_code,
    competition?.country_code,
    competition?.countryCode
  );

  return Object.freeze({
    type: "league",
    name: first(competition?.name, competition?.title, "Football"),
    shortName: first(competition?.short_name, competition?.shortName, competition?.name),
    logo: resolveLogo(competition),
    flag: resolveFlag(country, countryCode),
    country: country || null,
    countryCode: countryCode || null,
    id: competition?.id ?? competition?.league_id ?? null,
    raw: competition
  });
}

export function createCountryIdentity(country = {}) {
  const entityId = country?.id ?? country?.country_id ?? null;
  const entityName = first(country?.name, country?.country_name, country?.countryName);
  const canonical =
    getEntity("country", entityId) ||
    getEntity("country", entityName) ||
    null;

  country = canonical ? { ...country, ...canonical } : country;
  const name = first(country?.name, country?.country_name, country?.countryName, "Unknown");
  const code = first(
    country?.code,
    country?.short_code,
    country?.country_code,
    country?.countryCode
  );

  return Object.freeze({
    type: "country",
    name,
    shortName: first(country?.short_name, country?.shortName, name),
    logo: resolveLogo(country),
    flag: resolveFlag(name, code),
    country: name,
    countryCode: code || null,
    id: country?.id ?? country?.country_id ?? null,
    raw: country
  });
}

export function createMatchIdentities(match = {}) {
  const homeSource = match?.home || match?.teams?.home || {};
  const awaySource = match?.away || match?.teams?.away || {};
  const leagueSource = match?.league || {};

  const isNational =
    homeSource?.national === true ||
    awaySource?.national === true ||
    homeSource?.type === "national_team" ||
    awaySource?.type === "national_team";

  return {
    home: createAfriSportsIdentity(homeSource, {
      type: isNational ? "national_team" : "team"
    }),
    away: createAfriSportsIdentity(awaySource, {
      type: isNational ? "national_team" : "team"
    }),
    competition: createCompetitionIdentity(leagueSource)
  };
}

export function getIdentityVisual(identity) {
  if (identity?.logo) {
    return { kind: "logo", value: identity.logo };
  }

  if (identity?.flag) {
    return { kind: "flag", value: identity.flag };
  }

  return { kind: "text", value: "⚽" };
}

export default {
  createAfriSportsIdentity,
  createCompetitionIdentity,
  createCountryIdentity,
  createMatchIdentities,
  getIdentityVisual
};
