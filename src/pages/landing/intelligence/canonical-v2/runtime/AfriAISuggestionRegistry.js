/**
 * AfriAI Suggestion Registry
 *
 * OWNER:
 * AfriAI intent discovery layer.
 *
 * RULE:
 * Suggestions represent user goals, not product names.
 */

const AfriAISuggestionRegistry = [
  {
    id:"earn",
    title:"💰 Perform tasks and earn",
    action:"OPEN_AFRIWORK"
  },
  {
    id:"boost",
    title:"📢 Boost your business",
    action:"OPEN_AFRIBOOST"
  },
  {
    id:"youtube",
    title:"🎥 Boost your YouTube channel",
    action:"OPEN_AFRIBOOST"
  },
  {
    id:"sell",
    title:"🛒 Start selling online",
    action:"OPEN_AFRICOMMERCE"
  },
  {
    id:"football",
    title:"⚽ Watch live football",
    action:"OPEN_AFRISPORTS"
  },
  {
    id:"cctv",
    title:"📹 Connect your CCTV",
    action:"OPEN_AFRICCTV"
  }
];

export default AfriAISuggestionRegistry;
