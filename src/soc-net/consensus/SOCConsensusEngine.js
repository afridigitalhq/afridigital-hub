export class SOCConsensusEngine {

  constructor(nodes = []) {
    this.nodes = nodes;
  }

  verifyIncident(incidentReports = []) {
    const confidence = incidentReports.length / this.nodes.length;

    return {
      verified: confidence > 0.6,
      confidence,
      status:
        confidence > 0.8
          ? "HIGH CONFIDENCE"
          : confidence > 0.5
          ? "MEDIUM CONFIDENCE"
          : "LOW CONFIDENCE"
    };
  }
}
