import {
  registerEntities,
  getEntityRegistrySize,
} from "./afriSportsEntityRegistry.js";

const COUNTRIES = [
  { id: "country-ng", name: "Nigeria", shortName: "Nigeria", code: "NG", aliases: ["NGA", "Naija"] },
  { id: "country-gb", name: "England", shortName: "England", code: "GB", aliases: ["ENG", "English"] },
  { id: "country-es", name: "Spain", shortName: "Spain", code: "ES", aliases: ["ESP", "Spanish"] },
  { id: "country-de", name: "Germany", shortName: "Germany", code: "DE", aliases: ["GER", "German"] },
  { id: "country-it", name: "Italy", shortName: "Italy", code: "IT", aliases: ["ITA", "Italian"] },
  { id: "country-fr", name: "France", shortName: "France", code: "FR", aliases: ["FRA", "French"] },
  { id: "country-pt", name: "Portugal", shortName: "Portugal", code: "PT", aliases: ["POR", "Portuguese"] },
  { id: "country-nl", name: "Netherlands", shortName: "Netherlands", code: "NL", aliases: ["NED", "Dutch"] },
  { id: "country-be", name: "Belgium", shortName: "Belgium", code: "BE", aliases: ["BEL", "Belgian"] },
  { id: "country-br", name: "Brazil", shortName: "Brazil", code: "BR", aliases: ["BRA", "Brazilian"] },
  { id: "country-ar", name: "Argentina", shortName: "Argentina", code: "AR", aliases: ["ARG", "Argentine"] },
  { id: "country-gh", name: "Ghana", shortName: "Ghana", code: "GH", aliases: ["GHA"] },
  { id: "country-za", name: "South Africa", shortName: "South Africa", code: "ZA", aliases: ["RSA"] },
];

const LEAGUES = [
  {
    id: "league-premier-league",
    name: "Premier League",
    shortName: "EPL",
    countryCode: "GB",
    aliases: ["English Premier League", "PL"],
  },
  {
    id: "league-champions-league",
    name: "UEFA Champions League",
    shortName: "UCL",
    countryCode: "EU",
    aliases: ["Champions League", "European Cup", "CL", "UCL"],
  },
];

const TEAMS = [
  {
    id: "team-arsenal",
    name: "Arsenal",
    shortName: "Arsenal",
    countryCode: "GB",
    aliases: ["Arsenal FC", "Gunners"],
  },
  {
    id: "team-chelsea",
    name: "Chelsea",
    shortName: "Chelsea",
    countryCode: "GB",
    aliases: ["Chelsea FC", "Blues"],
  },
  {
    id: "team-liverpool",
    name: "Liverpool",
    shortName: "Liverpool",
    countryCode: "GB",
    aliases: ["Liverpool FC", "Reds"],
  },
  {
    id: "team-manchester-city",
    name: "Manchester City",
    shortName: "Man City",
    countryCode: "GB",
    aliases: ["Manchester City FC", "Man City", "City"],
  },
  {
    id: "team-manchester-united",
    name: "Manchester United",
    shortName: "Man United",
    countryCode: "GB",
    aliases: ["Manchester United FC", "Man Utd", "United"],
  },
  {
    id: "team-tottenham",
    name: "Tottenham Hotspur",
    shortName: "Tottenham",
    countryCode: "GB",
    aliases: ["Tottenham", "Spurs", "Tottenham Hotspur FC"],
  },
  {
    id: "team-barcelona",
    name: "Barcelona",
    shortName: "Barcelona",
    countryCode: "ES",
    aliases: ["FC Barcelona", "Barca", "Barça"],
  },
  {
    id: "team-real-madrid",
    name: "Real Madrid",
    shortName: "Real Madrid",
    countryCode: "ES",
    aliases: ["Real Madrid CF", "Madrid"],
  },
  {
    id: "team-bayern-munich",
    name: "Bayern Munich",
    shortName: "Bayern",
    countryCode: "DE",
    aliases: ["FC Bayern Munich", "Bayern München"],
  },
  {
    id: "team-psg",
    name: "Paris Saint-Germain",
    shortName: "PSG",
    countryCode: "FR",
    aliases: ["Paris Saint Germain", "Paris SG"],
  },
  {
    id: "team-inter-milan",
    name: "Inter Milan",
    shortName: "Inter",
    countryCode: "IT",
    aliases: ["Inter", "Internazionale", "Inter Milan FC"],
  },
  {
    id: "team-juventus",
    name: "Juventus",
    shortName: "Juventus",
    countryCode: "IT",
    aliases: ["Juventus FC", "Juve"],
  },
];

const NATIONAL_TEAMS = [
  {
    id: "national-nigeria",
    name: "Nigeria",
    shortName: "Nigeria",
    countryCode: "NG",
    aliases: ["Nigeria National Team", "Super Eagles", "NGA"],
  },
  {
    id: "national-england",
    name: "England",
    shortName: "England",
    countryCode: "GB",
    aliases: ["England National Team", "Three Lions", "ENG"],
  },
  {
    id: "national-brazil",
    name: "Brazil",
    shortName: "Brazil",
    countryCode: "BR",
    aliases: ["Brazil National Team", "Seleção", "BRA"],
  },
  {
    id: "national-argentina",
    name: "Argentina",
    shortName: "Argentina",
    countryCode: "AR",
    aliases: ["Argentina National Team", "La Albiceleste", "ARG"],
  },
];

export function seedAfriSportsCanonicalRegistry() {
  return registerEntities({
    teams: TEAMS,
    nationalTeams: NATIONAL_TEAMS,
    leagues: LEAGUES,
    countries: COUNTRIES,
  });
}

export function getAfriSportsCanonicalSeed() {
  return Object.freeze({
    teams: TEAMS,
    nationalTeams: NATIONAL_TEAMS,
    leagues: LEAGUES,
    countries: COUNTRIES,
  });
}

export function getCanonicalRegistrySize() {
  return getEntityRegistrySize();
}

export default {
  seedAfriSportsCanonicalRegistry,
  getAfriSportsCanonicalSeed,
  getCanonicalRegistrySize,
  initializeAfriSportsEntityRegistry,
};


let canonicalRegistryInitialized = false;

export function initializeAfriSportsEntityRegistry() {
  if (canonicalRegistryInitialized) return getEntityRegistrySize();
  seedAfriSportsCanonicalRegistry();
  canonicalRegistryInitialized = true;
  return getEntityRegistrySize();
}

