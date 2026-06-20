export function recommendMatches(userPrefs = {}) {
  return [
    {
      match: "Elite Derby Match",
      score: 0.92,
      reason: "High engagement similarity"
    },
    {
      match: "International Cup Fixture",
      score: 0.87,
      reason: "User follows similar leagues"
    }
  ];
}
