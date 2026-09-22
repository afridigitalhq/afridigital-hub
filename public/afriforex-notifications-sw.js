self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification?.data?.url || "/user/forex#afriai-trade-alert";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(async (clients) => {
      const client = clients.find((item) => "focus" in item);
      if (client) {
        if ("navigate" in client) {
          try {
            await client.navigate(targetUrl);
          } catch (error) {
            console.warn("AfriForex notification navigation failed", error);
          }
        }
        return client.focus();
      }
      return self.clients.openWindow(targetUrl);
    })
  );
});
