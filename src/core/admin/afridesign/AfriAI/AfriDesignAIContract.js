/**
 * AfriAI ↔ AfriDesign Studio Contract
 *
 * Purpose:
 * Defines communication boundaries between
 * AfriAI assistant and AfriDesign Studio.
 *
 * Rule:
 * AfriAI requests actions.
 * AfriDesign handles execution.
 */

const AfriDesignAIContract = {
  service: "AfriDesign Studio",

  communication: "api-contract",

  allowedActions: [
    "create-project",
    "select-template",
    "compose-layout",
    "generate-preview",
    "prepare-export"
  ],

  request: {
    projectType: "string",
    templateId: "string",
    components: "array",
    styleProfile: "object"
  },

  response: {
    projectId: "string",
    previewStatus: "string",
    exportStatus: "string"
  },

  forbidden: [
    "direct-file-editing",
    "production-mutation",
    "bypass-export-review"
  ]
};

export default AfriDesignAIContract;
