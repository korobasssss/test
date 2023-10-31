/* eslint-disable no-undef */
addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({
        includeUncontrolled: true,
        type: 'window',
      })
      .then(function (clientList) {
        if (clientList.length) {
          clientList[0].focus();
        }
      }),
  );
});
