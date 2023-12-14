// @ts-nocheck
import { Workbox } from 'workbox-window';

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox(`/sw.js`);

    const showSkipWaitingPrompt = () => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });

      wb.messageSkipWaiting();
    };

    wb.addEventListener('waiting', (event) => {
      showSkipWaitingPrompt(event);
    });

    wb.register();
    // .then((registration) => {
    //   setInterval(() => {
    //     registration.update();
    //   }, 10000);
    // });
  }
  // navigator.serviceWorker.ready.then((registration) => {
  //   setInterval(() => {
  //     registration.update();
  //   }, 10000);
  // });
}
