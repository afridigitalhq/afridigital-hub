let lastIncident = null;

export const setIncident = (incident) => {
  lastIncident = incident;
};

export const getIncident = () => lastIncident;
