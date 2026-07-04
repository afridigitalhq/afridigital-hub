let buffer = [];

export const pushEvent = (event) => {
  buffer.unshift(event);
  buffer = buffer.slice(0, 200);
};

export const getBuffer = () => buffer;

export const clearBuffer = () => {
  buffer = [];
};
