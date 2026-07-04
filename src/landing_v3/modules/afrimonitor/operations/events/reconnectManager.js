export const createSafeSocket = (url, onMessage) => {
  let socket;
  let retry = 0;

  const connect = () => {
    socket = new WebSocket(url);

    socket.onopen = () => {
      retry = 0;
      console.log("🟢 STREAM CONNECTED");
    };

    socket.onmessage = onMessage;

    socket.onclose = () => {
      console.log("🔴 STREAM DISCONNECTED — RECONNECTING");
      retry++;

      setTimeout(connect, Math.min(1000 * retry, 10000));
    };

    socket.onerror = () => {
      socket.close();
    };
  };

  connect();

  return {
    close: () => socket?.close()
  };
};
