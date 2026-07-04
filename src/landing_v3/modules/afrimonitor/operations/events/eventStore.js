let store = [];

export const addEvent = (event) => {
  store = [event, ...store].slice(0, 100);
};

export const getEvents = () => store;

export const clearEvents = () => {
  store = [];
};
