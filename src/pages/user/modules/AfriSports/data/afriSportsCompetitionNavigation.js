export const AFRISPORTS_PRIMARY_NAVIGATION = Object.freeze([
  { id: "live", label: "Live", icon: "🔴", type: "feed" },
  { id: "today", label: "Today", icon: "📅", type: "feed" },
  { id: "tomorrow", label: "Tomorrow", icon: "⏭️", type: "feed" },
  { id: "all-competitions", label: "All Competitions", icon: "🏆", type: "directory" }
]);

export const AFRISPORTS_COMPETITIONS = Object.freeze([
  { key: "premierLeague", name: "Premier League", shortName: "EPL", country: "England", priority: 1 },
  { key: "championsLeague", name: "UEFA Champions League", shortName: "UCL", country: "Europe", priority: 2 },
  { key: "laLiga", name: "La Liga", shortName: "La Liga", country: "Spain", priority: 3 },
  { key: "serieA", name: "Serie A", shortName: "Serie A", country: "Italy", priority: 4 },
  { key: "bundesliga", name: "Bundesliga", shortName: "Bundesliga", country: "Germany", priority: 5 },
  { key: "ligue1", name: "Ligue 1", shortName: "Ligue 1", country: "France", priority: 6 },
  { key: "superliga", name: "Superliga", shortName: "Superliga", country: "Denmark", priority: 7 },
  { key: "premiership", name: "Premiership", shortName: "Premiership", country: "Scotland", priority: 8 },
  { key: "premiershipPlayoffs", name: "Premiership Play-Offs", shortName: "Play-Offs", country: "Scotland", priority: 9, active: false },
  { key: "superligaPlayoffs", name: "Superliga Play-offs", shortName: "Play-Offs", country: "Denmark", priority: 10, active: false }
]);

export function getCompetitionNavigation(key) {
  return AFRISPORTS_COMPETITIONS.find(item => item.key === key) || null;
}
